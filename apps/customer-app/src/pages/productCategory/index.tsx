/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { useAddProductCategory, useProductCategory, useRouting } from '@core/store';
import { BackCircleIcon, Button, CustomizedButton, PageHeader, ProductSelectedCard, RightArrowIcon, SearchBox, SearchIcon } from '@core/ui/atoms';
import { routeTo } from '@core/utils';
import { Box, Skeleton, Stack, Typography } from '@mui/material';
import { CSSProperties, useEffect, useState } from 'react';
import { track } from '@amplitude/analytics-browser';
import { productCategoryStyle } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ScreenLayout } from '@core/ui/components';

const DELAY_MS = 3000;

interface SelectProductInterface {
  id: number;
}

export default function ProductCategory() {
  const [clicked, setClicked] = useState<number[]>([]);
  const { addProduct, getProduct, productCategoryState, addProductMessage, addProductError, productCategoryLoading } =
    useProductCategory();

    

  const { categoryProduct, setSearchCategoryFnc } = useAddProductCategory();

  const location = useLocation();
  const navigate = useNavigate();

  const isAddProduct = location?.state?.data?.isAddProduct;
  const isProductcategory = location?.state?.isProductcategory


  const addProductlist = () => {
    const product: SelectProductInterface[] = clicked?.map((val: number) => {
      return {
        id: val,
      };
    });
    addProduct(product);
  };

  const onBackRoute = () => {
    navigate(webRoutes.home)
  }

  const proceed = () => {
    addProductlist();
    const timeout = setTimeout(() => {
      routeTo(useRouting, webRoutes.signupSuccessful);
    }, DELAY_MS);

    return () => clearTimeout(timeout);
  };

  const onSearch = (value: string) => {
    setSearchCategoryFnc(value);
  };


  const initailData = async () => {
    await getProduct();
  }

  useEffect(() => {
    initailData()
  }, []);


  // Amplitude tracking
  useEffect(() => {
    track('product category page', {
      name: 'customer-app',
    });
  }, []);  

  return (
    <Box sx={{ bgcolor: 'background.surface.300', height: '100vh' }}>
      {productCategoryLoading ? (
        <Box p={7} sx={{ bgcolor: 'primary.50' }}>
          <Box mb={5}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={50} width={400} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={400} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={50} width={400} />
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={1} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={25} width={268} />
          </Box>
          <Box mt={8} sx={{ display: 'flex', gap: '20px' }}>
            <Skeleton sx={productCategoryStyle.loadingSx} animation="wave" height={80} width={400} />
          </Box>
        </Box>
      ) : (
        <>
          {isAddProduct || isProductcategory ?
            <ScreenLayout
              title="Add Product"
              backRequired
              useBackBtnClick
              onBackBtnClick={onBackRoute}
              childrenStyle={{
                ...productCategoryStyle.screenlayoutSx,
                // bgcolor: searchTerm ? 'background.surface.B300' : 'primary.A300',
              }}
            >
              <Stack justifyContent="space-between" flexDirection="column" sx={{ minHeight: '100vh', bgcolor: 'primary.50' }}>
                <Box>
                  {isAddProduct || isProductcategory ?
                    <Box pt={2} px={2}>
                      <Box pt={2} px={0.5}>
                        <SearchBox
                          autoFocus={true}
                          searchInputStyle={{
                            padding: '12px',
                          }}
                          searchFieldProps={{
                            id: 'searchField',
                          }}
                          searchFieldStyle={productCategoryStyle.inputSearchSx}
                          placeholder="Search category"
                          value={categoryProduct}
                          setSearchTerm={(value) => onSearch(value)}
                          startAdornment={<SearchIcon rootStyle={{ color: 'text.A100' }} />}
                        // endAdornment={
                        //   searchTerm ? <CancelIcon cursor="pointer" onClick={() => onSearchProductClick()} /> : <SearchIcon rootStyle={{ color: 'text.A100' }} />
                        // }
                        />
                      </Box>
                    </Box>
                    :
                    <Typography variant="subtitle1" fontWeight={700} sx={productCategoryStyle.productTextSx}>
                      What product categories do you own currently?
                    </Typography>
                  }
                  <Box sx={productCategoryStyle.productSelectSx}>
                    <ProductSelectedCard
                      isAddProduct={isAddProduct || isProductcategory}
                      clicked={clicked}
                      categoryProduct={categoryProduct ?? ''}
                      productCategoryState={
                        productCategoryState?.filter((val) => {
                          if (categoryProduct === "") {
                            return val;
                          } else if (
                            val?.category_name
                              ?.toLowerCase()
                              ?.includes(categoryProduct?.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                      }
                      setClicked={setClicked}
                      rootStyle={productCategoryStyle.productSelectSx as CSSProperties}
                    />
                  </Box>
                </Box>
                {
                  isAddProduct || isProductcategory ? null :
                    <>
                      {clicked?.length > 0 ? (
                        <Box px={2.5} pb={3}>
                          <CustomizedButton
                            addProductMessage={addProductMessage}
                            addProductError={addProductError}
                            count={clicked?.length}
                            title="Selected"
                            buttonText="Proceed"
                            categories="categories"
                            icon={<RightArrowIcon />}
                            sucess={proceed}
                            purchase
                          />
                        </Box>
                      ) : (
                        <Box px={2.5} pb={3}>
                          <Button data-testid="proceed" disabled sx={productCategoryStyle.buttonSx} fullWidth>
                            Proceed
                          </Button>
                        </Box>
                      )}
                    </>
                }
              </Stack>
            </ScreenLayout>
            :
            <Stack justifyContent="space-between" flexDirection="column" sx={{ minHeight: '100vh', bgcolor: '#EAF3FF' }}>
              <Typography variant="subtitle1" fontWeight={700} sx={productCategoryStyle.productTextSx}>
                What product categories do you own currently?
              </Typography>
              <Box sx={productCategoryStyle.productSelectSx}>
                <ProductSelectedCard
                  isAddProduct={isAddProduct || isProductcategory}
                  clicked={clicked}
                  productCategoryState={
                    productCategoryState?.filter((val) => {
                      if (categoryProduct === "") {
                        return val;
                      } else if (
                        val?.category_name
                          ?.toLowerCase()
                          ?.includes(categoryProduct?.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                  }
                  setClicked={setClicked}
                  rootStyle={productCategoryStyle.productSelectSx as CSSProperties}
                />
              </Box>
              <>
                {clicked?.length > 0 ? (
                  <Box px={2.5} pb={3}>
                    <CustomizedButton
                      addProductMessage={addProductMessage}
                      addProductError={addProductError}
                      count={clicked?.length}
                      title="Selected"
                      buttonText="Proceed"
                      categories="categories"
                      icon={<RightArrowIcon />}
                      sucess={proceed}
                      purchase
                    />
                  </Box>
                ) : (
                  <Box px={2.5} pb={3}>
                    <Button data-testid="proceed" disabled sx={productCategoryStyle.buttonSx} fullWidth>
                      Proceed
                    </Button>
                  </Box>
                )}
              </>
            </Stack>
          } </>
      )}
    </Box>
  );
}
