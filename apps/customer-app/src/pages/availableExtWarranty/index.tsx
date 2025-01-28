import { webRoutes } from '@core/routes';
import { useExploreWarranty } from '@core/store';
import { BackCircleIcon, CancelIcon, CheckBox, CloseIcon, PageHeader, SearchBox, SearchIcon } from '@core/ui/atoms';
import { RightCircleIcon, RightIcon, SortIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { AvailableAmcCards, DrawerComponent, ModalHeader } from '@core/ui/components';
import { CardDataInterface } from '@core/ui/components/availableAmcCards';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { availableExtWarrantyStyle } from './style';

export default function AvailableWarranty() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const { product_id } = useParams();

  //   const {
  //     getInsuranceExploreData,
  //     exploreInsuranceState,
  //     exploreInsuranceLoading,
  //     updateState,
  //     searchTerm,
  //     initialStoreFnc,
  //     pricingData,
  //     updateSortState,
  //   } = useExploreInsurance();

  const {
    updateSortState,
    updateState,
    getWarrantyExploreData,
    exploreWarrantyState,
    pricingData,
    searchTerm,
    exploreWarrantyLoading,
    initialStoreFnc,
  } = useExploreWarranty();

  const navigate = useNavigate();
  const location = useLocation();
  const onSearch = (value: string) => {
    updateState(value);
  };

  const SearchFilter = () => {
    let data = [];
    if (searchTerm) {
      data = exploreWarrantyState.filter((item) => item.provider_name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      data = exploreWarrantyState;
    }
    if (!pricingData) {
      data.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (pricingData) {
      data.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    return data;
  };

  const handleChange = (isChecked: boolean, val: boolean) => {
    setOpenDrawer(false);
    updateSortState(val);
    console.log(isChecked);
  };

  const onSearchProductClick = () => {
    initialStoreFnc();
  };

  const toggleDrawer = (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
    setOpenDrawer(newOpen);
  };

  const handleClick = (data: CardDataInterface) => {
    navigate(webRoutes.amcPurchase, {
      state: {
        data: data,
        labelText: 'Warranty',
        product_details: location?.state?.data,
      },
    });
  };

  useEffect(() => {
    if (product_id) {
      getWarrantyExploreData(product_id);
    }
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('Available Extended page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        maxWidth: { sm: '425px', xs: '425px', md: '425px' },
        padding: { sm: '0px', xs: '0px' },
      }}
    >
      <Box sx={availableExtWarrantyStyle.rootSx}>
        {exploreWarrantyLoading ? (
          <Box sx={availableExtWarrantyStyle.rootSkeletonSx}>
            <Skeleton sx={availableExtWarrantyStyle.headerSkeletonSx} height="60px" animation="wave" />
            <Skeleton sx={availableExtWarrantyStyle.searchSectionSkeletonSx} height="60px" animation="wave" />
            <Box sx={availableExtWarrantyStyle.labelSkeletonSx}>
              <Skeleton width="77px" height="30px" animation="wave" />
            </Box>
            <Box sx={availableExtWarrantyStyle.cardSkeletonSx}>
              <Skeleton height="200px" animation="wave" />
            </Box>
            <Box sx={availableExtWarrantyStyle.cardSkeletonSx}>
              <Skeleton height="200px" animation="wave" />
            </Box>
            <Box sx={availableExtWarrantyStyle.cardSkeletonSx}>
              <Skeleton height="200px" animation="wave" />
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={availableExtWarrantyStyle.headerSx}>
              <PageHeader showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Available Extended Warranty's" />
            </Box>
            <Box sx={availableExtWarrantyStyle.searchSectionSx}>
              <Grid container spacing={1}>
                <Grid item xs={10.5}>
                  <Box sx={availableExtWarrantyStyle.searchSx}>
                    <SearchBox
                      autoFocus={true}
                      searchInputStyle={{
                        padding: '12px',
                      }}
                      searchFieldProps={{
                        id: 'searchField',
                      }}
                      searchFieldStyle={availableExtWarrantyStyle.inputSearchSx}
                      placeholder="Search for Insurance"
                      value={searchTerm}
                      setSearchTerm={(value) => onSearch(value)}
                      startAdornment={<SearchIcon />}
                      endAdornment={
                        searchTerm ? (
                          <CancelIcon cursor="pointer" onClick={() => onSearchProductClick()} />
                        ) : (
                          <SearchIcon />
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={1.5}>
                  <Box data-testid="sort" onClick={toggleDrawer(true)} sx={availableExtWarrantyStyle.sortIconSx}>
                    <SortIcon />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={availableExtWarrantyStyle.availableAmcSx}>
              <AvailableAmcCards
                routeIcon={<RightCircleIcon />}
                cardData={SearchFilter()}
                inclusionIcon={<RightIcon />}
                handleClick={handleClick}
                headerTitle={`Extended Warranties (${exploreWarrantyState?.length})`}
                type="Extended Warranty"
              />
            </Box>
          </Box>
        )}

        {/* Drawer */}

        <DrawerComponent
          heightStyle={availableExtWarrantyStyle.drawerHeight}
          borderBottom
          showHeader={true}
          open={openDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Sort By"
              onClose={() => setOpenDrawer(false)}
            />
          }
        >
          <Box>
            <Box sx={availableExtWarrantyStyle.checkBoxSx}>
              <CheckBox
                checked={pricingData}
                onChange={(isChecked: boolean, e: any) => handleChange(isChecked, e.target.checked)}
                label="Price High to Low"
                data-testid="Price High to Low"
              />
            </Box>
            <Box sx={availableExtWarrantyStyle.checkBoxSx}>
              <CheckBox
                checked={!pricingData}
                onChange={(isChecked: boolean, e: any) => handleChange(isChecked, e.target.checked)}
                label="Price Low to High"
                data-testid="Price Low to High"
              />
            </Box>
          </Box>
        </DrawerComponent>
      </Box>
    </Container>
  );
}
