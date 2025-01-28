/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { useAmcDetails, useExtendedWarrantyDetails, useHome, useInsuranceDetails, useScanproduct, useWarrantyDetails } from '@core/store';
import { Button, GalleryEmptyState, ImageView } from '@core/ui/atoms';
import { ScreenLayout } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { uploadedGalleryStyle } from './style';
import { useEffect } from 'react';

export default function UploadedGallery() {
  const { product_details,
    onDeleteCaptureImage,
    homeType,
    extendedType,
    insuranceUploadType, amcUploadType,
    onUploadCaptureFile,
    getWarrantyDetailsInclusionExclusion,
    warrantyType,
    amcType,
    insuranceType,
    dataURIs,
    getScanProduct,
    loading,
    uploadType,
    extWarrantyProductUploadType,
    insuranceProductUploadType,
    amcProductUploadType,
    serviceProductUploadType,
    productDetailsProductId,
    serviceType,
    serviceHistoryUploadType,
    getAmcDrawerUpdate,
    getAmcUpdate,
    getInsuranceDrawer,
    getExtendedDrawer,
    getInsuranceDrawerUpdate,
    amc_drawerType,
    insuranceDrawerType,
    extendedDrawerType,
    insuranceUpdateType,
    amcDrawerType,
    getSummaryProduct,
    updateServiceRecordDrawerState,
    clearScan
  } = useScanproduct();

  const { getWarrantyDetails } = useWarrantyDetails();
  const { getExtendedWarrantyDetails } = useExtendedWarrantyDetails();
  const { getInsurancecDetails } = useInsuranceDetails();
  const { getAmcDetails } = useAmcDetails();

  const { getCurrantDrawerUpdate, getChooseProductDrawerUpdate } = useHome();
  const navigate = useNavigate();
  const location = useLocation();

  const product_id = location?.state?.product_id;
  const drawerProductId = location?.state?.drawerProductId


  const onDeleteFnc = (i: number) => {
    onDeleteCaptureImage([...dataURIs?.filter((val, index) => index !== i)]);
  };

  function dataURLtoFile(dataURIs: string, filename: string): File {
    const arr: any = dataURIs.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }


  const scanUpload = () => {
    const uploadScanFiles: any = dataURIs?.map((x: any, i: number) => {
      return {
        url: dataURLtoFile(x, `${Date.now()}${i}`),
      };
    });
    if (uploadType) {
      getSummaryProduct({ uploadScanFiles }, uploadType);
    } else if (homeType) {
      getSummaryProduct({ uploadScanFiles }, homeType);
    }
    else if (insuranceUploadType) {
      getSummaryProduct({ uploadScanFiles }, insuranceUploadType);
    }
    else if (serviceType) {
      getSummaryProduct({ uploadScanFiles }, serviceType);
    }
    else if (amcUploadType) {
      getSummaryProduct({ uploadScanFiles }, amcUploadType);
    }
    else if (extWarrantyProductUploadType) {
      getSummaryProduct({ uploadScanFiles }, extWarrantyProductUploadType);
    }
    else if (insuranceProductUploadType) {
      getSummaryProduct({ uploadScanFiles }, insuranceProductUploadType);
    }
    else if (amcProductUploadType) {
      getSummaryProduct({ uploadScanFiles }, amcProductUploadType);
    }
    else if (serviceProductUploadType) {
      getSummaryProduct({ uploadScanFiles }, serviceProductUploadType);
    }
    else if (serviceHistoryUploadType) {
      getSummaryProduct({ uploadScanFiles }, serviceHistoryUploadType);
    }
    else if (warrantyType) {
      getWarrantyDetailsInclusionExclusion({ uploadScanFiles, product_id: product_id }, warrantyType, () => {
        getWarrantyDetails(product_id || '');
      });
    }
    else if (extendedType) {
      getWarrantyDetailsInclusionExclusion({ uploadScanFiles, product_id: product_id }, extendedType, () => {
        getExtendedWarrantyDetails(product_id || '');
      });
    }
    else if (insuranceType) {
      getWarrantyDetailsInclusionExclusion({ uploadScanFiles, product_id: product_id }, insuranceType, () => {
        getInsurancecDetails(product_id || '');
      });
    }
    else if (amcType) {
      getWarrantyDetailsInclusionExclusion({ uploadScanFiles, product_id: product_id }, amcType, () => {
        getAmcDetails(product_id || '');
      });
    }
    else if (insuranceDrawerType) {
      getSummaryProduct({ uploadScanFiles }, insuranceDrawerType);
    }
    else if (insuranceUpdateType) {
      getSummaryProduct({ uploadScanFiles }, insuranceUpdateType);
    }
    else if (extendedDrawerType) {
      getSummaryProduct({ uploadScanFiles }, extendedDrawerType);
    }
    else if (amcDrawerType) {
      getSummaryProduct({ uploadScanFiles }, amcDrawerType);
    }
    else if (amc_drawerType) {
      getSummaryProduct({ uploadScanFiles }, amc_drawerType);
    }
    else {
      getScanProduct(uploadScanFiles);
    }

    if (uploadType) {
      navigate(webRoutes.productSummary, {
        state: { data: { isScan: true, data: product_details } },
      });
    } else if (homeType) {
      navigate(webRoutes.home);
      getChooseProductDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
      getCurrantDrawerUpdate(3);
    }
    else if (insuranceUploadType) {
      navigate(webRoutes.home);
      getChooseProductDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
      getCurrantDrawerUpdate(4);
    }
    else if (amcUploadType) {
      navigate(webRoutes.home);
      getChooseProductDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
      getCurrantDrawerUpdate(5);
    } else if (serviceType) {
      navigate(webRoutes.home);
      updateServiceRecordDrawerState('openServiceRecordDrawer', true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    }
    else if (extWarrantyProductUploadType) {
      navigate(`/productDetails/${productDetailsProductId}`);
      getChooseProductDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
      getCurrantDrawerUpdate(3);
    }
    else if (insuranceProductUploadType) {
      navigate(`/productDetails/${productDetailsProductId}`);
      getChooseProductDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
      getCurrantDrawerUpdate(4);
    }
    else if (amcProductUploadType) {
      navigate(`/productDetails/${productDetailsProductId}`);
      getChooseProductDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
      getCurrantDrawerUpdate(5);
    } else if (serviceProductUploadType) {
      navigate(`/productDetails/${productDetailsProductId}`);
      updateServiceRecordDrawerState('openServiceRecordDrawer', true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    } else if (serviceHistoryUploadType) {
      navigate(`/serviceHistory`);
      updateServiceRecordDrawerState('openServiceRecordDrawer', true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    }
    // PDP Status Section
    else if (insuranceDrawerType) {
      navigate(`/productDetails/${drawerProductId}`);
      getInsuranceDrawer(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    } else if (amc_drawerType) {
      navigate(`/productDetails/${drawerProductId}`);
      getAmcDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    }
    // PDP Company Card
    else if (insuranceUpdateType) {
      navigate(`/productDetails/${drawerProductId}`);
      getInsuranceDrawerUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    } else if (extendedDrawerType) {
      navigate(`/productDetails/${drawerProductId}`);
      getExtendedDrawer(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    } else if (amcDrawerType) {
      navigate(`/productDetails/${drawerProductId}`);
      getAmcUpdate(true)
      onUploadCaptureFile(uploadScanFiles?.map((val: any) => val.url))
    }
    else if (warrantyType) {
      navigate(`/warrantyDetails/${product_id}`)
    } else if (extendedType) {
      navigate(`/extendedWarranty/${product_id}`)
    } else if (insuranceType) {
      navigate(`/insuranceDetails/${product_id}`)
    } else if (amcType) {
      navigate(`/amcDetails/${product_id}`)
    }
    else {
      navigate(webRoutes.addproductBot);
    }
  };

  const onBackRoute = () => {
    navigate(webRoutes?.home)
    clearScan();
  }

  // Amplitude tracking
  useEffect(() => {
    track('Uploaded gallery page', {
      name: 'customer-app',
    });
  }, []);
  return (
    <Box sx={uploadedGalleryStyle.rootSx}>
      <ScreenLayout
        title="Gallery"
        backRequired
        useBackBtnClick
        onBackBtnClick={onBackRoute}
        childrenStyle={{
          ...uploadedGalleryStyle.screenlayoutSx,
        }}
      >
        {dataURIs?.length > 0 ? (
          <>
            <Box pt={'89px'} pb={'105px'} px={2.5} height={'100vh'}>
              <ImageView imagemapping={dataURIs} onDelete={onDeleteFnc} />
            </Box>
            <Box sx={uploadedGalleryStyle.footerButtonSx}>
              <Button
                sx={uploadedGalleryStyle.homeSx}
                fullWidth
                loading={loading}
                onClick={() => scanUpload()}
                disabled={dataURIs?.length > 0 ? false : true}
              >
                Upload
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ display: 'grid', minHeight: '100vh', placeItems: 'center', alignContent: 'center' }}>
              <GalleryEmptyState />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: 'text.A100', fontSize: '14px', fontWeight: 700, pt: 1 }}>
                  No Images Found
                </Typography>
                <Typography sx={{ color: 'text.500', fontSize: '12px', pt: 1 }}>
                  Tap the + icon to capture images
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </ScreenLayout>
    </Box>
  );
}
