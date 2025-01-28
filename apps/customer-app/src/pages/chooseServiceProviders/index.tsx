/* eslint-disable react/jsx-key */
import { useServiceProviders, useUserProfileDetails } from '@core/store';
import {
  BackCircleIcon,
  CheckBox,
  CloseIcon,
  CustomSlider,
  DownArrowIconSm,
  Input,
  LocationIcon,
  LocationTarget,
  NoProductsIllustration,
  PageHeader,
  PreferRegularService,
  RightSideIcon,
  SearchIcon,
  ServiceProviderIcon
} from '@core/ui/atoms';
import { RightIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import LocationParent from '@core/ui/atoms/location';
import { VerticalTabProps } from '@core/ui/atoms/verticalTab';
import {
  AddServiceProviderComponent,
  BookingSlot,
  DrawerComponent,
  FilterComponent,
  ModalHeader,
  ProductDetailsViewCard,
  SeeWorkingHoursComponent,
  ServiceProviderCard,
  SpecificationCard,
  UseLocation,
} from '@core/ui/components';
import { LocationData, getCoords } from '@core/utils';
import { Avatar, Container, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { webRoutes } from '@core/routes';
import { chooseServiceProvidersStyle } from './style';

export interface productInfoProps {
  product_info: {
    id: string;
    category_type_id: string;
    category_id: string;
    product_name: string;
    nick_name: string;
    image_url: string;
  };

  product_specification: {
    product_serial_no: string;
    product_name: string;
    purchased_on: string;
    model_no: string;
    specifications: string;
    invoice_no: string;
    invoice_document_url: string;
  };
}


export interface ServiceProvidersListProps {
  id?: string;
  provider_name?: string;
  provider_logo?: string;
  google_ref_id?: string;
  provider_id?: string;
  location_name?: string;
  is_bookmark?: boolean;
  location_coordinate?: {
    lat: number | null,
    lng: number | null,
  };
  mobile_no?: number | null;
  store_start_date?: string;
  inspection_charge?: number;
  benefits?: Array<string>;
  type_id?: string;
  starts_from?: string;
  working_hours?: string;
  is_book_service?: boolean;
  is_active_amc?: boolean;
}

export default function ChooseServiceProviders() {
  const [searchParams] = useSearchParams();
  const {
    getProductDetails,
    productDetailsLoading,
    productDetails,
    filterDataState,
    selectedFilterStateCount,
    updateFilterState,
    clearFilterState,
    setCurrentLocation,
    getServiceProvidersList,
    serviceProvidersList,
    serviceProvidersListLoading,
    currentLocation,
    selectedProvider,
    setSelectedProvider,
    filterServiceProvidersList,
    setFilterServiceProvidersList,
    openWorkingHoursDrawer,
    openAddServiceProviderDrawer,
    openRegularServiceDrawer,
    showSecondaryMobileField,
    showMoreResult,
    updateDrawerState,
    addServiceProvider,
    addProviderLoading,
    serviceProviderUpdateState,
    isShowMoreResult,
    updateAddProviderServiceApi,
    openGoogleResponse,
    clearAddProviderState,
    removePreferableService,
  } = useServiceProviders();


  const { getProfileDetails, profileDetails } = useUserProfileDetails();
  const navigate = useNavigate();

  const goToDialPad = (number: number | null) => {

    // Amplitude Track
    track('User successfully completes scheduling a service', { name: 'customer-app' })
    window.open(`tel:${number}`);
  };

  const onClickCurrentLocation = async () => {
    const data = await getCoords();
    setCurrentLocation(data || {});
    handleSelectLocationDrawer(false);
    getServiceProvidersList();
  };

  // for drawer functions

  const handleOpenAddProviderService = () => {
    // updateDrawerState('openRegularServiceDrawer', false)
    updateDrawerState('openAddServiceProviderDrawer', true)
  }

  const updateAddProviderData = () => {
    updateAddProviderServiceApi(searchParams.get('id') ?? '');
  }

  const closeDrawerAddProvider = () => {
    updateDrawerState('openAddServiceProviderDrawer', false)
    clearAddProviderState();
  }

  // for drawer states
  const [productSpecificationDrawer, setProductSpecificationDrawer] = useState<boolean>(false);
  const [selectLocationDrawer, setSelectLocationDrawer] = useState<boolean>(false);
  const [benefitsDrawer, setBenefitsDrawer] = useState<boolean>(false);
  const [bookServiceDrawer, setBookServiceDrawer] = useState<boolean>(false);
  const [filterDrawer, setFilterDrawer] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  //for drawer state change functions
  const handleProductSpecificationDrawer = (status: boolean) => {
    setProductSpecificationDrawer(status);
  };

  const handleSelectLocationDrawer = (status: boolean) => {
    setSelectLocationDrawer(status);
  };

  const handleBenefitsDrawer = (status: boolean, data?: ServiceProvidersListProps) => {
    setBenefitsDrawer(status);
    if (data) {
      setSelectedProvider(data);
    }
  };

  const handleBookServiceDrawer = (status: boolean, data?: ServiceProvidersListProps) => {
    setBookServiceDrawer(status);
    if (data) {
      setSelectedProvider(data);
    }
  };

  const handleOpenMap = () => {

    // Amplitude Track 
    track('User successfully completes scheduling a service', { name: 'customer-app' })
    setOpen(true);
  };

  const handleFilterDrawer = (status: boolean) => {
    setFilterDrawer(status);
  };

  const changeLocation = (data: LocationData) => {
    handleSelectLocationDrawer(false);
    setCurrentLocation(data);
    getServiceProvidersList(data);
  };

  const updateRemovePreferableDrawer = (index: number) => {
    removePreferableService(index, () => {
    })
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const ConstructProductSpecification = (data: { [key: string]: any }): { title: string; value: string }[] => {
    const arr: { title: string; value: string }[] = [];
    Object?.keys(data)?.map((key) =>
      typeof data[key] === 'string'
        ? arr?.push({ title: ConstructTitle(key), value: data[key] })
        : typeof data[key] === 'object'
          ? Object?.keys(data?.[key] ?? {})?.map((key_) =>
            typeof data[key][key_] === 'string' ? arr?.push({ title: key_, value: data[key][key_] }) : null,
          )
          : null,
    );
    return arr;
  };

  const ConstructTitle = (name: string) => {
    return name === 'product_name'
      ? 'Product Name'
      : name === 'product_serial_no'
        ? 'Serial Number'
        : name === 'invoice_document_url'
          ? 'Invoice Document'
          : name === 'model_no'
            ? 'Modal Number'
            : name === 'invoice_no'
              ? 'Invoice Number'
              : name;
  };
  //filter component State
  const [selectedFilterTab, setSelectedFilterTab] = useState(0);

  const handelChangeFilterTab = (selectedTap: number) => {
    setSelectedFilterTab(selectedTap);
  };

  // const onSearchFilter = ({
  //   key,
  //   value,
  // }: {
  //   key: keyof ServiceProvidersInterface['filterDataState'];
  //   value: string;
  // }) => {
  //   updateFilterState({ key: key, value: value });
  //   const searchValue = value?.toLowerCase();
  //   const filterDataList = serviceProvidersList?.filter(
  //     (list) => list?.provider_name?.toLowerCase().includes(searchValue),
  //   );
  //   setFilterServiceProvidersList(filterDataList);
  // };
  const onApplyFilter = () => {
    handleFilterDrawer(false);
    getServiceProvidersList();
  };

  const onClearFilter = () => {
    handleFilterDrawer(false);
    clearFilterState();
    getServiceProvidersList();
  };

  const PriceRangeComponent = () => {
    return (
      <>
        <Typography sx={chooseServiceProvidersStyle.filterTitle}>Price</Typography>
        <Typography sx={chooseServiceProvidersStyle.filterSubTitle}>
          {`₹ ${filterDataState?.priceRange?.value[0]} - ₹ ${filterDataState?.priceRange?.value[1]}`}
        </Typography>
        <CustomSlider
          data-testid="slider1"
          value={filterDataState?.priceRange?.value || [0, 0]}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChange={(event: Event, newValue: number | number[]) =>
            updateFilterState({ key: 'priceRange', value: newValue })
          }
          disableSwap={true}
          // step={10}
          min={1}
          max={2000}
        />
        <Box height={40} />
        <Typography sx={chooseServiceProvidersStyle.filterTitle}>Inspection Charge</Typography>
        <Typography
          sx={chooseServiceProvidersStyle.filterSubTitle}
        >{`₹ ${filterDataState?.inspectionCharge?.value?.[0]} - ₹ ${filterDataState?.inspectionCharge?.value?.[1]}`}</Typography>
        <CustomSlider
          data-testid="slider2"
          value={filterDataState?.inspectionCharge?.value || [0, 0]}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChange={(event: Event, newValue: number | number[]) =>
            updateFilterState({ key: 'inspectionCharge', value: newValue })
          }
          disableSwap={true}
          // step={10}
          min={1}
          max={2000}
        />
      </>
    );
  };

  const ExperienceComponent = () => {
    return (
      <>
        <CheckBox
          labelStyle={chooseServiceProvidersStyle.checkBoxLabelStyle}
          label="1 Year"
          data-testid="1 Year"
          onChange={() => updateFilterState({ key: 'experience', value: '1 Year' })}
          checked={filterDataState?.experience?.value === '1 Year'}
          sx={{ py: 0.7 }}
        />
        <CheckBox
          labelStyle={chooseServiceProvidersStyle.checkBoxLabelStyle}
          label="2 Years"
          data-testid="2 Years"
          onChange={() => updateFilterState({ key: 'experience', value: '2 Years' })}
          checked={filterDataState?.experience?.value === '2 Years'}
          sx={{ py: 0.7 }}
        />
        <CheckBox
          labelStyle={chooseServiceProvidersStyle.checkBoxLabelStyle}
          label="3 Years"
          data-testid="3 Years"
          onChange={() => updateFilterState({ key: 'experience', value: '3 Years' })}
          checked={filterDataState?.experience?.value === '3 Years'}
          sx={{ py: 0.7 }}
        />
      </>
    );
  };

  const OperatingHoursComponent = () => {
    return (
      <>
        <CheckBox
          labelStyle={chooseServiceProvidersStyle.checkBoxLabelStyle}
          label="Any Time"
          data-testid="Any Time"
          onChange={() => updateFilterState({ key: 'operatingHours', value: 'Any Time' })}
          checked={filterDataState?.operatingHours?.value === 'Any Time'}
          sx={{ py: 0.7 }}
        />
        <CheckBox
          labelStyle={chooseServiceProvidersStyle.checkBoxLabelStyle}
          label="Open Now"
          data-testid="Open Now"
          onChange={() => updateFilterState({ key: 'operatingHours', value: 'Open Now' })}
          checked={filterDataState?.operatingHours?.value === 'Open Now'}
          sx={{ py: 0.7 }}
        />
        <CheckBox
          labelStyle={chooseServiceProvidersStyle.checkBoxLabelStyle}
          label="Open 24 hours"
          data-testid="Open 24 hours"
          onChange={() => updateFilterState({ key: 'operatingHours', value: 'Open 24 hours' })}
          checked={filterDataState?.operatingHours?.value === 'Open 24 hours'}
          sx={{ py: 0.7 }}
        />
      </>
    );
  };
  const verticalTabData: VerticalTabProps = {
    tabList: [
      {
        tabName: 'Price Range',
        component: <PriceRangeComponent />,
        badge: filterDataState?.priceRange?.badge,
      },
      {
        tabName: 'Experience',
        component: <ExperienceComponent />,
        badge: filterDataState?.experience?.badge,
      },
      {
        tabName: 'Operating Hours',
        component: <OperatingHoursComponent />,
        badge: filterDataState?.operatingHours?.badge,
      },
    ],
    onChangeTab: (selectedTap: number): void => {
      handelChangeFilterTab(selectedTap);
    },
    selectedTab: selectedFilterTab,
  };


  const goToManageServiceProviders = () => {
    navigate(webRoutes.manageServiceProviders + location?.search)
  }

  useEffect(() => {
    getProductDetails(searchParams.get('id') ?? '');
    getProfileDetails();

  }, []);

  useEffect(() => {
    if (isShowMoreResult) {
      updateDrawerState('showMoreResult', false)
      updateDrawerState('openRegularServiceDrawer', false)
    } else {
      if (productDetails?.product_info?.is_preferred_service_provider) {
        updateDrawerState('showMoreResult', true)
        updateDrawerState('openRegularServiceDrawer', false)
      } else {
        updateDrawerState('showMoreResult', false)
        updateDrawerState('openRegularServiceDrawer', true)
      }
    }

  }, [productDetails?.product_info?.is_preferred_service_provider]);



  useEffect(() => {
    setCurrentLocation(profileDetails?.location || {});
  }, [profileDetails?.location]);

  // useEffect(() => {
  //   serviceProviderUpdateState('primary_service_provider', true);
  // }, []);


  // Amplitude tracking
  useEffect(() => {
    track('Choose service provider page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container sx={{ maxWidth: '425px', padding: { sm: '0px', xs: '0px' } }}>
      <Box sx={chooseServiceProvidersStyle.rootSx}>
        <Box pt={2} pb={1} px={2}>
          <PageHeader showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Choose Service Providers" />
        </Box>
        <Box sx={chooseServiceProvidersStyle.cardContainer}>
          <Box px={2.5}>
            <ProductDetailsViewCard
              loading={productDetailsLoading}
              infoIconOnClick={handleProductSpecificationDrawer}
              cardDetails={productDetails?.product_info}
            />
          </Box>
          <Box sx={chooseServiceProvidersStyle.serviceProviders}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant='subtitle1'
                fontWeight={700}
                sx={chooseServiceProvidersStyle.heading}
              >
                {productDetails?.product_info?.is_preferred_service_provider
                  ? 'Preferred Service Providers'
                  : 'Service Providers'
                }
              </Typography>
              <Typography
                data-testId='manage'
                variant='subtitle1'
                fontWeight={700}
                sx={chooseServiceProvidersStyle.headingSx}
                onClick={goToManageServiceProviders}
              >
                {productDetails?.product_info?.is_preferred_service_provider
                  ? 'Manage'
                  : ''
                }
              </Typography>
            </Box>

            {/* <Box sx={chooseServiceProvidersStyle.filterContainer}>
              <Box flexGrow={1}>
                <Input
                  testid="search"
                  value={filterDataState?.searchInput?.value}
                  onChange={(e) => onSearchFilter({ key: 'searchInput', value: e.target.value })}
                  placeholder="Search for Service Providers"
                  startAdornment={<SearchIcon />}
                  sx={chooseServiceProvidersStyle.filterInput}
                />
              </Box>
              <Badge color="primary" variant="dot" invisible={selectedFilterStateCount <= 0}>
                <Box
                  sx={chooseServiceProvidersStyle.filterIcon}
                  data-testid="filterDrawer"
                  onClick={() => handleFilterDrawer(true)}
                >
                  <FilterIcon rootStyle={{ height: 16, width: 16 }} />
                </Box>
              </Badge>
            </Box> */}
            {serviceProvidersListLoading || productDetailsLoading ? '' :
              <Box sx={chooseServiceProvidersStyle.availableAndLocationContainer}>
                {!productDetails?.product_info?.is_preferred_service_provider &&
                  <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'8px'}>
                    <Typography sx={chooseServiceProvidersStyle.availableText} noWrap>
                      {filterServiceProvidersList?.length} Service Providers available in
                    </Typography>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      gap={'4px'}
                      sx={{ cursor: 'pointer' }}
                      data-testid="locationDrawer"
                      onClick={() => handleSelectLocationDrawer(true)}
                    >
                      <Typography sx={chooseServiceProvidersStyle.locationText} noWrap>
                        {currentLocation ? currentLocation?.address : 'Invalid Location'}
                      </Typography>
                      <DownArrowIconSm />
                    </Stack>
                  </Stack>
                }
              </Box>
            }
            <Box>
              {serviceProvidersListLoading || productDetailsLoading
                ? [1, 2, 3].map(() => (
                  <ServiceProviderCard
                    loading={true}
                    openBenefits={() => false}
                    openBookService={() => false}
                    goToDialPad={() => false}
                  />
                ))
                : filterServiceProvidersList?.length > 0 &&
                filterServiceProvidersList?.map((service, index) => (
                  <ServiceProviderCard
                    // markAsPrimary={
                    //   productDetails?.product_info?.is_preferred_service_provider ? false : true
                    // }
                    key={index}
                    index={index}
                    loading={serviceProvidersListLoading || productDetailsLoading}
                    openBenefits={handleBenefitsDrawer}
                    updateRemovePreferableDrawer={updateRemovePreferableDrawer}
                    showBookMarkIcon={!productDetails?.product_info?.is_preferred_service_provider}
                    openBookService={handleOpenMap}
                    goToDialPad={goToDialPad}
                    workingHorusUpdate={() => updateDrawerState('openWorkingHoursDrawer', true)}
                    cardData={service}
                    sx={{
                      '&:last-child': {
                        marginBottom: '80px'
                      }
                    }}
                  />
                ))}
              {filterServiceProvidersList?.length <= 0 && !serviceProvidersListLoading && !productDetailsLoading && (
                <Box sx={chooseServiceProvidersStyle.noProductContainer}>
                  <Box sx={chooseServiceProvidersStyle.noProductsAddedSx}>
                    <NoProductsIllustration />
                  </Box>
                  <Box sx={chooseServiceProvidersStyle.noProductsTextHeaderSx}>
                    <Typography variant="body1" sx={chooseServiceProvidersStyle.noProductsTextSx}>
                      No Services Providers
                    </Typography>
                    <Typography variant="body1" sx={chooseServiceProvidersStyle.noAddProductsTextSx}>
                      No Service Providers available in selected location
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>



      </Box>


      {/* add service provider */}
      <AddServiceProviderComponent
        showOpenAddServiceDrawer={openAddServiceProviderDrawer}
        showAnotherNumberInput={showSecondaryMobileField}
        serviceProviderName='Service Provider Name'
        primaryContactNumber='Primary Contact Number'
        locationName='Location'
        secondaryContactNumber='Secondary Contact Number'
        btnName='Add Service Provider'
        drawerHeaderText='Add Service Provider Details'
        loading={addProviderLoading}
        disabled={(addServiceProvider?.providers_name === '' || addServiceProvider?.location_name === '' || (addServiceProvider?.primary_mobile_no ?? 0) < 10) ? true : false}
        serviceProviderValue={addServiceProvider?.providers_name}
        primaryContactNumberValue={addServiceProvider?.primary_mobile_no}
        secondaryContactNumberValue={addServiceProvider?.sec_mobile_no}
        locationNameValue={addServiceProvider?.location_name}
        primaryIsChecked={addServiceProvider?.primary_service_provider}
        handleSubmit={() => updateAddProviderData()}
        handleChangeAnotherField={() => updateDrawerState('showSecondaryMobileField', true)}
        handleChangeChecked={(checked, e) => serviceProviderUpdateState('primary_service_provider', checked as never)}
        handleChangePrimaryContactNumberInput={(e) => serviceProviderUpdateState('primary_mobile_no', e.target.value as never, 10)}
        handleChangeSecondaryContactNumberInput={(e) => serviceProviderUpdateState('sec_mobile_no', e.target.value as never, 10)}
        handleChangeLocationNameInput={(e) => serviceProviderUpdateState('location_name', e.target.value as never)}
        handleChangeServiceProviderInput={(e) => serviceProviderUpdateState('providers_name', e.target.value as never)}
        handleCloseDrawer={() => closeDrawerAddProvider()}
      />

      {/* see working hours */}
      <SeeWorkingHoursComponent
        openWorkingHoursDrawer={openWorkingHoursDrawer}
        handleCloseDrawer={() => updateDrawerState('openWorkingHoursDrawer', false)}
      />

      {/* click here to add regular service  */}

      <PreferRegularService
        buttonText='Explore more'
        dataTextId='Click here to Add'
        onClose={() => updateDrawerState('openRegularServiceDrawer', false)}
        handleAddProvider={handleOpenAddProviderService}
        handleMoreResult={openGoogleResponse}
        showPreferService={openRegularServiceDrawer}
        showMoreResult={showMoreResult}
      />

      {/* Product Specification Drawer*/}
      <DrawerComponent
        heightStyle={chooseServiceProvidersStyle.drawerStyle}
        borderBottom
        showHeader={true}
        open={productSpecificationDrawer}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText="Product Specifications"
            onClose={() => handleProductSpecificationDrawer(false)}
          />
        }
      >
        <SpecificationCard
          valueTextStyle={{
            width: '250px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          copyIconShown
          spectificationTextStyle={{ p: 0 }}
          specification={ConstructProductSpecification(productDetails?.product_specification) ?? {}}
        />
      </DrawerComponent>

      {/* Select Location Drawer*/}
      <DrawerComponent
        heightStyle={{ minHeight: '250px' }}
        borderBottom
        showHeader={true}
        open={selectLocationDrawer}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText="Select Location"
            onClose={() => handleSelectLocationDrawer(false)}
          />
        }
      >
        <>
          <Stack
            mb={2}
            direction={'row'}
            gap={'4px'}
            sx={chooseServiceProvidersStyle.locationContainer}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap="12px"
              data-testid="HomeLocation"
              onClick={() => {
                changeLocation(profileDetails?.location || {});
              }}
            >
              <LocationTarget color="primary" rootStyle={{ width: '20px', height: '20px' }} />
              <Box>
                <Typography sx={chooseServiceProvidersStyle.locationTitle}>Your Home Location</Typography>
                <Typography sx={chooseServiceProvidersStyle.addressText}>
                  {profileDetails?.location?.address || 'Address not available'}
                </Typography>
              </Box>
            </Stack>
            <Avatar className="rightArrow" sx={chooseServiceProvidersStyle.rightArrowLocation}>
              <RightSideIcon />
            </Avatar>
          </Stack>
          <Stack
            mb={2}
            direction={'row'}
            gap={'4px'}
            sx={chooseServiceProvidersStyle.locationContainer}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box sx={chooseServiceProvidersStyle.useLocation}>
              {/* <UseLocation value={userLocation} handleChange={(location) => setCurrentLocation(location)} /> */}
              <Box
                sx={chooseServiceProvidersStyle.locationSx}
                data-testid="Use Current Location"
                onClick={() => onClickCurrentLocation()}
              >
                <LocationIcon />
                <Typography>Use Current Location</Typography>
              </Box>
            </Box>
            <Avatar className="rightArrow" sx={chooseServiceProvidersStyle.rightArrowLocation}>
              <RightSideIcon />
            </Avatar>
          </Stack>
          <LocationParent
            value={UseLocation}
            handleChange={(data: any) => {
              changeLocation(data);
            }}
            textFieldComponent={(
              ref: React.RefObject<HTMLInputElement>,
              value: string,
              handleChange: (loc: string) => void,
            ) => (
              <Input
                inputProps={{
                  'data-testid': 'locality',
                }}
                inputRef={ref}
                onChange={(e) => handleChange(e.target.value)}
                value={value}
                placeholder={'Enter location manually'}
                endAdornment={
                  <Box pr={1.3}>
                    <SearchIcon />
                  </Box>
                }
              />
            )}
          />
        </>
      </DrawerComponent>

      {/* Benefits Drawer*/}
      <DrawerComponent
        heightStyle={chooseServiceProvidersStyle.drawerStyle}
        borderBottom
        showHeader={true}
        open={benefitsDrawer}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={'Terms For ' + selectedProvider?.provider_name}
            onClose={() => handleBenefitsDrawer(false)}
          />
        }
      >
        {selectedProvider?.benefits?.map((benefits: string) => (
          <Stack direction="row" gap="8px" mb={1}>
            <Box sx={chooseServiceProvidersStyle.benefitTickIcon}>
              <RightIcon />
            </Box>
            <Typography sx={chooseServiceProvidersStyle.benefitText}>{benefits}</Typography>
          </Stack>
        ))}
      </DrawerComponent>

      {/* Book Service Drawer*/}
      <DrawerComponent
        heightStyle={chooseServiceProvidersStyle.bookingDrawerStyle}
        borderBottom
        showHeader={true}
        open={bookServiceDrawer}
        headerComponent={
          <Stack direction="row" gap="12px">
            <Avatar src={selectedProvider?.provider_logo} sx={chooseServiceProvidersStyle.serviceProviderIcon}>
              <ServiceProviderIcon rootStyle={{ width: '23px', height: '23px' }} />
            </Avatar>
            <Box flexGrow={1}>
              <Typography sx={chooseServiceProvidersStyle.serviceName}>{selectedProvider?.provider_name}</Typography>
              <Stack direction="row" gap="4px" alignContent="center" mb={0.1}>
                <LocationIcon sx={chooseServiceProvidersStyle.locationIcon} />
                <Typography sx={chooseServiceProvidersStyle.rate}>{selectedProvider?.location_name}</Typography>
              </Stack>
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => handleBookServiceDrawer(false)}>
              <CloseIcon rootStyle={{ color: 'text.A100' }} />
            </Box>
          </Stack>
        }
      >
        <BookingSlot handleBookServiceDrawer={handleBookServiceDrawer} />
      </DrawerComponent>

      {/* Filter Drawer*/}
      <DrawerComponent
        heightStyle={chooseServiceProvidersStyle.filterDrawerStyle}
        borderBottom
        showHeader={true}
        open={filterDrawer}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText="Filters"
            onClose={() => handleFilterDrawer(false)}
          />
        }
      >
        <FilterComponent
          filterSelected={selectedFilterStateCount}
          verticalTabProps={verticalTabData}
          onApply={onApplyFilter}
          onClear={onClearFilter}
        />
      </DrawerComponent>
    </Container>
  );
}
