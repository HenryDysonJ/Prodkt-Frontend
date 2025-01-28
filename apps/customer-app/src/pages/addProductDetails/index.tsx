import { webRoutes } from '@core/routes';
import { addProductDetails, useAddProductCategory, useScanproduct } from '@core/store';
import { ProductDetailsInterface } from '@core/store/interface';
import { Button, CircularProgressBar, CloseIcon, PageHeader, Scanner } from '@core/ui/atoms';
import {
  DrawerComponent,
  FooterButtonComponent,
  ModalHeader,
  ProductDetails,
  ProductListCard,
  ScreenLayout,
  SecurityDocuments,
  UploadDocuments
} from '@core/ui/components';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { addProductDetailsStyle } from './style';

interface pageDataInterface {
  title?: string;
  subTitle?: string;
  leftButton?: string;
  rightButton?: string;
  isDisable?: boolean;
  showNextButtonOnly: boolean;
  currentStep?: number;
  preStep?: number;
  nextStep?: number;
  component?: JSX.Element;
}

export default function AddProductDetails() {

  // store
  const {
    scanType,
    currentStep,
    productDetails,
    updateProducts,
    getProduct,
    updateProductSerialNo,
  } = addProductDetails();

  // const { currentStep, productDetail, updateProducts } = useAddProductCategory();

  const { clearSerialNo } = useScanproduct();

  // general hooks
  const location = useLocation();
  const navigate = useNavigate();
  const open = location?.state?.open;
  const openDrawer = location?.state?.openDrawer;
  const onScanPreviousClick = location?.state?.onScanPreviousClick;
  const typeId = location?.state?.typeId;
  const [show, setShow] = useState(false);

  const getCurrentStep = (
    key: number | undefined,
    productDetails: ProductDetailsInterface,
  ): pageDataInterface | null => {
    switch (key) {
      case 1:
        return {
          title: 'Product Details',
          subTitle: 'Next: Warranty, Insurance & AMC',
          leftButton: 'Previous',
          rightButton: 'Next',
          isDisable:
            (productDetails?.product_details?.category_name === 'Mobile' ||
              productDetails?.product_details?.category_name === 'Tablet') ?
              ((!productDetails?.serial_no) && (!productDetails?.imei_no) ||
                (productDetails?.mode_of_purchase === 'offline' &&
                  !productDetails?.purchase_location?.address))
              :
              ((!productDetails?.serial_no) && (!productDetails?.imei_no)
                ||
                (productDetails?.mode_of_purchase === 'offline' &&
                  !productDetails?.purchase_location?.address))
                ? true
                : false,
          showNextButtonOnly: true,
          currentStep: 1,
          preStep: -1,
          nextStep: 4,
          component: (
            <ProductDetails show={show} setShow={setShow} showAddProduct={productDetails?.product_id ? true : false} />
          ),
        };
      default:
        return null;
    }
  };

  const pageData = getCurrentStep(currentStep, productDetails);

  const handleClickAdvanced = () => {
    setShow(false);
    clearSerialNo();
  };

  const onCaptureClick = (val: any) => {
    if (scanType === 'serial_no') {
      updateProductSerialNo('serial_no', val as never);
    } else {
      updateProductSerialNo('imei_no', val as never);
    }
  };

  const onBackRoute = () => {
    setShow(false);
  };

  const onCloseProductDetails = () => {
    navigate(webRoutes.addProductDetails)
  }

  useEffect(() => {
    if (!open && !openDrawer) {
      navigate(webRoutes.searchproduct);
    }
  }, [open, openDrawer]);

  useEffect(() => {
    if (currentStep === -1) {
      if (onScanPreviousClick) {
        navigate(webRoutes.addproductBot);
      } else {
        navigate(webRoutes.specifications + `?product_id=${productDetails?.product_id}`);
      }
    }

    if (currentStep === 4) {
      if (typeId) {
        navigate(webRoutes.addCoverageDetails, {
          state: {
            typeId: typeId,
          },
        });
      } else {
        navigate(webRoutes.addCoverageDetails, {
          state: {
            typeId: productDetails?.category?.id,
          },
        });
      }
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === -1) {
      getProduct(productDetails?.category?.value);
    }
  }, [currentStep]);

  // Amplitude tracking
  useEffect(() => {
    track('Add Product Details page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={addProductDetailsStyle.rootSx}>
      <>
        {show ? (
          <>
            <Box position="relative">
              <ScreenLayout
                title="Scan Serial Number"
                backRequired
                useBackBtnClick
                onBackBtnClick={onBackRoute}
                childrenStyle={{
                  ...addProductDetailsStyle.screenlayoutSx,
                }}
              >
                <Box>
                  <Scanner isOnchange onChange={(val: any) => onCaptureClick(val)} />
                </Box>
                <Box
                  sx={{
                    py: 2,
                    px: 2,
                    bgcolor: 'none',
                    position: 'absolute',
                    bottom: '0px',
                    left: '0px',
                    right: '0px',
                  }}
                >
                  <Button
                    sx={{
                      ...addProductDetailsStyle.homeSx,
                    }}
                    fullWidth
                    onClick={() => handleClickAdvanced()}
                    disabled={
                      productDetails?.serial_no?.length > 0 || productDetails?.imei_no?.length > 0 ? false : true
                    }
                  >
                    Capture
                  </Button>
                </Box>
              </ScreenLayout>
            </Box>
          </>
        ) : (
          <>
            <>
              <Box sx={addProductDetailsStyle.pageHeaderSx}>
                <PageHeader header headerText="Add Product Details" />
              </Box>

              {productDetails?.product_id && (
                <Box sx={addProductDetailsStyle.productListCardSx}>
                  <ProductListCard
                    imageURL={productDetails?.product_details?.url}
                    productId={productDetails?.product_id}
                    productDescription={productDetails?.product_details?.name}
                  />
                </Box>
              )}

              <DrawerComponent
                footer
                showHeader
                padding="0px 20px 0px 20px"
                headerStyle={{
                  '&.MuiDialogTitle-root': {
                    py: '20px !important',
                    px: '24px !important',
                  },
                }}
                footerStyle={{ px: 1.5, py: 1.5 }}
                heightStyle={{
                  height: currentStep === 1 ? '' : currentStep === 2 ? '260px' : '280px',
                  '&::-webkit-scrollbar': {
                    width: '4px !important',
                    backgroundColor: '#F2F2F2',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: '#F2F2F2',
                    borderRadius: '10px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#CCCCCC',
                    borderRadius: '10px',
                  },
                }}
                open={open || openDrawer}
                headerComponent={
                  <ModalHeader
                    icon={currentStep === 1 ? <CloseIcon rootStyle={{ color: 'text.A100' }} /> : null}
                    showIcon={true}
                    showHeader={true}
                    headerText={currentStep === 1 ? pageData?.title : ''}
                    onClose={() => onCloseProductDetails()}
                  />
                }
                footerComponent={
                  <FooterButtonComponent
                    leftButtonStyle={{
                      fontWeight: '600',
                    }}
                    rightButtonStyle={{
                      fontWeight: '600',
                    }}
                    productStyle={{ padding: '0px' }}
                    handleClickPrevious={() => updateProducts('currentStep', pageData?.preStep)}
                    handleClickNext={() => updateProducts('currentStep', pageData?.nextStep)}
                    showLeftBtn={pageData?.showNextButtonOnly}
                    showRightBtn={true}
                    leftButton={pageData?.leftButton}
                    rightButton={pageData?.rightButton}
                    disabled={pageData?.isDisable}
                  />
                }
              >
                {pageData?.component}
              </DrawerComponent>
            </>
          </>
        )}
      </>
    </Box>
  );
}
