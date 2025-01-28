/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { addProductDetails, useAddProductCategory, useSearchFilterProduct, useSearchProduct } from '@core/store';
import { productSpecificationInterface } from '@core/store/interface';
import {
  Button,
  CancelIcon,
  CheckBox,
  Chips,
  CloseIcon,
  DeleteIcon,
  FilterIcon,
  FindYourProduct,
  ProductNotFoundIllustration,
  SearchBox,
  SearchIcon,
  SearchProductsIllustration,
} from '@core/ui/atoms';
import { CirclePlusIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { DrawerComponent, ModalHeader, ProductListCard, ScreenLayout } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { searchProductStyle } from './style';

export default function SearchProduct() {
  // store
  const {
    products,
    loading,
    suggestion,
    productsCopy,
    searchTerm,
    suggestionTerm,
    initialStoreFnc,
    setSearchTermFnc,
    setSuggestionTermFnc,
    getSearchProduct,
  } = useSearchProduct();

  const { setSearchCategoryFnc, clearCategoryFnc } = useAddProductCategory();

  const { category, clearProfile, clearDocumentState } = addProductDetails();

  const {
    data,
    loading: filterLoading,
    selectedParent,
    selectedParentValue,
    updateOnFilterParentIndex,
    handleClickChildFnc,
    handleChipUpdateClick,
    fetchCategory,
    initialStoreFnc: clearFilter,
    singleFilterData,
    updateCategoryAndBrand,
    deleteFilter,
    setAFilterCategorySelected
  } = useSearchFilterProduct();


  // General hooks
  const [hide, setHide] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [newProductDrawer] = useState<boolean>(true);
  const [openChipDrawer, setOpenChipDrawer] = useState<boolean>(false);
  const [state, setState] = useState<{
    [key: string]: any;
  }>({});
  const [filter, setFilter] = useState<{ [key: string]: any }>({});
  const navigate = useNavigate();

  const location = useLocation();
  const selectedCategoryName = location?.state?.data?.category_name
  const selectedCategoryId = [location?.state?.data?.id]
  const isOtherProductsCategoryId = location?.state?.isOtherProducts
  const isAddProduct = location?.state?.isAddProduct
  const filterData = location?.state?.data?.filter

  const productToBeAddedId = [location?.state?.data?.productClickIndex?.category_type_id]
  const productToBeAddedName = location?.state?.data?.productClickIndex?.category_name
  const productsToBeAddedTrue = location?.state?.data?.home

  const isProductSummery = location?.state?.isProductSummery;
  const typeId = [location?.state?.typeId];
  const categoryName = location?.state?.category_name;
  const filterSummeryData = location?.state?.filter_data;
  const filterBrandData = location?.state?.brandData;


  const navigateRoute = () => {
    const stateData = category;
    navigate(webRoutes.addProductDetails, {
      state: {
        open: newProductDrawer,
        productId: stateData,
      },
    });
  };




  const onProductClick = async (val: string) => {
    await getSearchProduct(val, 'filter', true);
    const url = new URLSearchParams(window.location.search);
    if (val) {
      url.set('search', val);
    } else {
      url.delete('search');
    }
    navigate(`?${url.toString()}`);
    setHide(true);
  };

  const onSearchProductClick = () => {
    initialStoreFnc();
    setHide(false);
    // clearFilter();
    // setState({});
    // clearCategoryFnc();
  };

  const onSearch = (value: string) => {
    if (suggestionTerm?.length > 0) {
      setSuggestionTermFnc('');
    } else {
      onSearchProductClick();
    }
    setSearchTermFnc(value);
    setHide(false);
  };

  const onClickButton = (data: { specification: productSpecificationInterface; id: string }) => {
    navigate(webRoutes?.specifications + `?product_id=${data?.id}`, {
      state: {
        product: data,
        product_id: data?.id,
      },
    });
  };


  const handleChipClick = (index: number) => {
    setOpenChipDrawer(true);
    handleChipUpdateClick(index);
  };

  const handleClickChild = (
    type: string | number,
    x: string | number | boolean | { value: string | number; label: string },
    parent: any,
    clickBrands: any
  ) => {

    handleClickChildFnc(x as object, searchTerm);
    setOpenChipDrawer(false);
    buildFilterFromState(true, updateStateFromData());
    // getSearchProduct(clickBrands, '', false);
  };

  const onFilterClick = (index: number, value: string) => {
    updateOnFilterParentIndex(index, value);
  };

  const onClickApplyButton = () => {
    setOpenDrawer(false);
    buildFilterFromState(true, updateStateFromData());
  };

  const onClear = () => {
    setOpenDrawer(false);
    clearFilter();
    setState({});
    initialStoreFnc();
  };

  const updateStateFromData = () => {
    let newState: any = {};
    data.forEach((_) => {
      newState[_.value] = _?.values?.[0];
    });
    setState({ ...newState });
    return newState;
  };

  const buildFilterFromState = (refetch: boolean = false, state: any = {}) => {
    let newFilter: any = {};
    Object.keys(state).forEach((key) => {
      if (key === 'product_type_id') {
        newFilter[key] = typeof state[key] === 'object' && Array.isArray(state[key]?.value)
          ? state[key]?.value
          : state[key]?.value ? [state[key]?.value] : '';
      } else {
        newFilter[key] = typeof state[key] === 'object' ? state[key].value : '';
      }
    });


    setFilter({ ...newFilter });

    if (refetch) {
      getSearchProduct(searchTerm, '', false, newFilter);
    }
  };

  const onBackRoute = () => {
    if (isAddProduct) {
      navigate(webRoutes?.productCategory, {
        state: { isProductcategory: true }
      })
      clearCategoryFnc();
      initialStoreFnc();
      setHide(false);
      clearFilter();
      setState({});
      clearCategoryFnc();
    } else {
      navigate(webRoutes?.home);
    }
  };

  useEffect(() => {
    const setSearchProduct = setTimeout(() => {
      if (searchTerm?.length > 0) {
        updateCategoryAndBrand(searchTerm)
        buildFilterFromState(true, updateStateFromData());
      }
    }, 500);
    return () => {
      clearTimeout(setSearchProduct);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (isProductSummery) {
      fetchCategory(typeId);
    } else if (productsToBeAddedTrue) {
      fetchCategory(productToBeAddedId);
    } else {
      fetchCategory(isOtherProductsCategoryId?.length > 0 ? isOtherProductsCategoryId : selectedCategoryId);
    }
    clearProfile();
    clearDocumentState();
  }, []);

  useEffect(() => {
    if (productsCopy.length) {
      // updateCategoryAndBrand(productsCopy[0]);
      buildFilterFromState(false, updateStateFromData());
    }
  }, [productsCopy]);

  useEffect(() => {
    if (productsToBeAddedTrue) {
      setAFilterCategorySelected(productToBeAddedId, productToBeAddedName, filterData)
      setSearchCategoryFnc(productToBeAddedName)
      updateCategoryAndBrand(productToBeAddedName)
      getSearchProduct(isOtherProductsCategoryId?.length > 0 ? isOtherProductsCategoryId : selectedCategoryId, '', false);
    } else if (isProductSummery) {
      setAFilterCategorySelected(typeId, categoryName, filterSummeryData, filterBrandData)
      setSearchCategoryFnc(categoryName)
      updateCategoryAndBrand(filterBrandData?.value)
      getSearchProduct(typeId ?? '');
    } else {
      setAFilterCategorySelected(isOtherProductsCategoryId?.length > 0 ? isOtherProductsCategoryId : selectedCategoryId, selectedCategoryName, filterData)
      setSearchCategoryFnc(selectedCategoryName)
      updateCategoryAndBrand(selectedCategoryName)
      getSearchProduct(isOtherProductsCategoryId?.length > 0 ? isOtherProductsCategoryId : selectedCategoryId, '', false);
    }
    buildFilterFromState(true, updateStateFromData());
  }, [])

  // Amplitude tracking
  useEffect(() => {
    track('Search product page', {
      name: 'customer-app',
    });
  }, []);
  return (
    <ScreenLayout
      title="Search Product"
      backRequired
      useBackBtnClick
      onBackBtnClick={onBackRoute}
      childrenStyle={{
        ...searchProductStyle.screenlayoutSx,
        bgcolor: 'background.surface.B300',
      }}
    >
      <Box sx={searchProductStyle.rootSx}>
        <>
          <Box mt={2.5}>
            <SearchBox
              autoFocus={true}
              searchInputStyle={{
                padding: '12px',
              }}
              searchFieldProps={{
                id: 'searchField',
              }}
              searchFieldStyle={searchProductStyle.inputSearchSx}
              placeholder="Search by product name"
              value={suggestionTerm || searchTerm}
              setSearchTerm={(value) => onSearch(value)}
              startAdornment={suggestionTerm || searchTerm ? <SearchIcon rootStyle={{ color: 'text.A100' }} /> : null}
              endAdornment={
                searchTerm ? <CancelIcon cursor="pointer" onClick={() => onSearchProductClick()} /> : <SearchIcon rootStyle={{ color: 'text.A100' }} />
              }
            />
          </Box>

          {/* When i search a product it can show a skelton and Empty State handle a condition. */}

          {/* suggestion a product handle a condition */}
          <Box>
            <Box pb={2}>
              {suggestion.map((val: string, index: number) => {
                return (
                  <>
                    {!hide && (
                      <Box
                        data-testid={val}
                        key={index}
                        sx={searchProductStyle.searchTitleSx}
                        onClick={() => onProductClick(val)}
                      >
                        <SearchIcon rootStyle={{ width: '14px', height: '14px' }} />
                        <Typography sx={searchProductStyle.titleSx}>{val}</Typography>
                      </Box>
                    )}
                  </>
                );
              })}
            </Box>

            {!filterLoading && (
              <Box sx={searchProductStyle.chipsRootSx}>
                <Box sx={searchProductStyle.filterRootTextSx} data-testid="Filter" onClick={() => setOpenDrawer(true)}>
                  <Typography sx={searchProductStyle.filterTextSx}>
                    <FilterIcon rootStyle={{ color: 'primary.C200' }} /> Filter
                  </Typography>
                </Box>
                {data?.map((val, index: number) => {
                  const isSelected = state?.[val?.value]?.label
                    ? Object.keys(state?.[val?.value])?.length > 0
                      ? true
                      : false
                    : false;


                  return (
                    <Chips
                      data-testid={`filter-${val?.label}`}
                      key={index}
                      label={
                        state?.[val?.value]?.label ?? val?.label}
                      isSelected={isSelected}
                      deleteIcon={<DeleteIcon isSelected={isSelected} />}
                      onDelete={() => {
                        deleteFilter(index);
                        setTimeout(() => {
                          if (index === 0) {
                            getSearchProduct('', isOtherProductsCategoryId, false);
                          } else {
                            buildFilterFromState(true, updateStateFromData());
                          }
                        }, 500);
                      }}
                      onClick={() => handleChipClick(index)}
                    />
                  );
                })}
              </Box>
            )}

            {loading && (
              <Box pt={2}>
                {[1, 2, 3, 4, 5].map((_) => (
                  <ProductListCard
                    skelton={loading}
                    onClick={() => false}
                    id={'id'}
                    key={_}
                    imageURL={''}
                    productId={''}
                    productDescription={''}
                    buttonText="Add Product"
                    buttonIcon={<CirclePlusIcon />}
                    showAddButton={true}
                  />
                ))}
              </Box>
            )}

            {!loading && searchTerm?.length > 0 && productsCopy?.length > 0 && (
              <Typography variant="subtitle2" sx={searchProductStyle.searchResultTextSx}>
                Search Results ({`${productsCopy?.length}`})
              </Typography>
            )}

            {!loading && searchTerm?.length > 0 && productsCopy?.length === 0 && (
              <>
                <Box pt={8} display="flex" justifyContent="center">
                  <ProductNotFoundIllustration />
                </Box>
                <Box pt={7} px={9}>
                  <FindYourProduct onFindProductClick={() => navigateRoute()} />
                </Box>
              </>
            )}
            {/* search */}
            {!loading && searchTerm?.length > 0 && productsCopy?.length > 0 && (
              <Box pt={2}>
                {productsCopy?.map((val: any, index: number) => {
                  return (
                    <ProductListCard
                      skelton={loading}
                      onClick={() => onClickButton(val)}
                      id={val?.id}
                      key={index}
                      imageURL={val?.url}
                      productId={val?.product_id}
                      productDescription={val?.product_name}
                      buttonText="Add Product"
                      buttonIcon={<CirclePlusIcon />}
                      showAddButton={true}
                    />
                  );
                })}
              </Box>
            )}
            {/* filter click  */}
            {!loading && products?.length > 0 && (
              <Box pt={2}>
                {products?.map((val: any, index: number) => {
                  return (
                    <ProductListCard
                      skelton={loading}
                      onClick={() => onClickButton(val)}
                      id={val?.id}
                      key={index}
                      imageURL={val?.url}
                      productId={val?.product_id}
                      productDescription={val?.product_name}
                      buttonText="Add Product"
                      buttonIcon={<CirclePlusIcon />}
                      showAddButton={true}
                    />
                  );
                })}
              </Box>
            )}
          </Box>
          {/* productSearchFilter empty state handle */}
          {searchTerm?.length === 0 && products?.length === 0 && (
            <Box>
              <Box sx={searchProductStyle.illustrationContentSx}>
                <SearchProductsIllustration />
              </Box>
              <Box sx={searchProductStyle.rootSearchProductSx}>
                <Typography sx={searchProductStyle.searchproductSx}>Search Products</Typography>
                <Typography sx={searchProductStyle.youCanSearchSx}>You can search & add your products here</Typography>
              </Box>
            </Box>
          )}
          {
            <DrawerComponent
              open={openDrawer}
              heightStyle={searchProductStyle.drawerHeight}
              drawerHeightStyle
              borderBottom
              showHeader={true}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText="Filter"
                  onClose={() => {
                    setOpenDrawer(false);
                    buildFilterFromState(true, updateStateFromData());
                  }}
                />
              }
              footer={true}
              footerComponent={
                <Box sx={searchProductStyle.footerSx}>
                  <Typography sx={searchProductStyle.selectedTextSx}>{Object.keys(state)?.length} Selected</Typography>
                  <Box display="flex" gap={1}>
                    <Button sx={searchProductStyle.clearButtonSx} onClick={() => onClear()}>
                      Clear
                    </Button>
                    <Button onClick={() => onClickApplyButton()} sx={searchProductStyle.applyButtonSx}>
                      Apply
                    </Button>
                  </Box>
                </Box>
              }
            >
              <>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={searchProductStyle.parentLabelSx}>
                    {data?.map((val: any, index: number) => {
                      const _ = state[val?.value] as { value: string | number; label: string | number };
                      return (
                        <Box
                          key={index}
                          bgcolor={selectedParent === index ? 'grey.200' : 'background.surface.100'}
                          sx={{ display: 'flex', pl: 3 }}
                        >
                          <Box onClick={() => onFilterClick(index, val?.value)}>
                            <Box sx={searchProductStyle.parentSubLabelSx}>
                              <Typography sx={searchProductStyle.fliterlabelSx}>{val?.label}</Typography>

                              {_?.value && <Typography sx={searchProductStyle.spanTagSx}></Typography>}
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box sx={searchProductStyle.valuePointsSx}>
                    {data[selectedParent]?.option?.map((dat) => {
                      const _ = state?.[data[selectedParent].value] as {
                        value: string | number;
                        label: string | number;
                      };

                      return (
                        <Box sx={{ display: 'flex', pt: 2.2 }}>
                          <CheckBox
                            labelStyle={{
                              fontSize: '14px',
                              color: 'text.700',
                              fontWeight: 500,
                            }}
                            onChange={() => handleClickChild(selectedParentValue, dat, data[selectedParent], dat?.value)}
                            checked={_?.value === dat?.value}
                            sx={{ px: 2 }}
                            label={dat?.label}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </>
            </DrawerComponent>
          }
          {
            <DrawerComponent
              open={openChipDrawer}
              heightStyle={searchProductStyle.drawerChipHeight}
              borderBottom
              showHeader={true}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText={singleFilterData?.label}
                  onClose={() => {
                    setOpenChipDrawer(false);
                    buildFilterFromState(true, updateStateFromData());
                  }}
                />
              }
            >
              <Box>
                <Typography sx={searchProductStyle.selectTextSx}>Select {singleFilterData?.label}</Typography>
                <Box sx={{ pt: 1.6 }}>
                  {singleFilterData?.option?.map((dat) => {
                    return (
                      <Box sx={searchProductStyle.checkBoxTextSx}>
                        <CheckBox
                          labelStyle={{
                            fontSize: '14px',
                            color: 'text.700',
                            fontWeight: 500,
                            pb: 1,
                          }}
                          onChange={() => handleClickChild(selectedParentValue, dat, singleFilterData, dat?.value)}
                          checked={singleFilterData?.values?.[0]?.value?.toString() === dat?.value?.toString()}
                          sx={{ px: 2 }}
                          label={dat?.label}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </DrawerComponent>
          }
        </>
      </Box>
    </ScreenLayout>
  );
}
