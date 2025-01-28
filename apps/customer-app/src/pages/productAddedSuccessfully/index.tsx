import { webRoutes } from '@core/routes';
import {
  addProductDetails,
  useAddProductCategory,
  useScanproduct,
  useScheduleServiceReminder
} from '@core/store';
import AddedSuccessfully from '@core/ui/assets/addedSuccessfully.gif';
import { Button, CircleEllipseBig, CircleEllipseNormal, CircleEllipseSmall, PolygonNormal } from '@core/ui/atoms';
import { ProductListCard } from '@core/ui/components';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Box, CircularProgress, Typography } from '@mui/material';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { ScheduleServiceReminder } from '@pages/scheduleServiceReminder';
import { productAddedSuccessfully } from './style';

export default function ProductAddedSuccessfully() {
  const {
    error,
    loading,
    success,
    userProductId,
    productDetails,
    documentDetails,
    addProduct,
    clearProfile,
    clearDocumentState,
    addCategoryproduct,
    whatsAppProductDetails,
    whatsAppCoverage_id
  } = addProductDetails();
  const { updateDrawerState, updateServiceReminderData, clearState } = useScheduleServiceReminder();

  const {
    addScanProduct,
    productLoading,
    ProductError,
    productSuccess,
    product_details,
    invoiceDocument,
  } = useScanproduct();

  // const { addCategoryproduct } = useAddProductCategory();

  const location = useLocation();

  const isScan = location?.state?.data?.isScan;
  const standardWarantyPayloadData = location?.state?.data?.standardWarantyDataShown?.standard_warranty_details



  // eslint-disable-next-line
  const navigate = useNavigate();

  const response = product_details?.invoice_details?.filter((x: { checked: boolean }) => {
    return x.checked === true;
  });

  const goToScheduleService = () => {
    setTimeout(() => {
      if (documentDetails?.isAMCApplicable !== null) {
        updateDrawerState('openScheduleReminderDrawer', true);
        updateDrawerState('isShowAmc', documentDetails?.isAMCApplicable);
        updateServiceReminderData('user_product_id', userProductId);
      } else if (response?.[0]?.product_details?.amc) {
        updateDrawerState('openScheduleReminderDrawer', true);
        updateDrawerState('isShowAmc', response?.[0]?.product_details?.amc);
        updateServiceReminderData('user_product_id', response?.[0]?.product_details?.product_id);
      } else if (whatsAppProductDetails?.product_details?.amc) {
        updateDrawerState('openScheduleReminderDrawer', true);
        updateDrawerState('isShowAmc', whatsAppProductDetails?.product_details?.amc);
        updateServiceReminderData('user_product_id', whatsAppProductDetails?.product_details?.product_id);
      }
      else {
        window.location.replace(`${webRoutes.home}`);
      }
    }, 3000);
  };

  const handleNavigate = () => {
    updateDrawerState('openScheduleReminderDrawer', false);
    clearState();
    navigate(webRoutes.home);
    clearProfile();
    clearDocumentState();
  };

  const handleNavigates = () => {
    updateDrawerState('openScheduleReminderDrawer', false);
    clearState();
    navigate(webRoutes.home);
    clearProfile();
    clearDocumentState();
  }

  const retry = () => {
    if (isScan === true) {
      addScanProduct(documentDetails, standardWarantyPayloadData);
    } else {
      // addProduct();
      addCategoryproduct();
    }
  };
  

  const getImageUrl = (): string | undefined => {
    return whatsAppCoverage_id
      ? whatsAppProductDetails?.product_details?.image_url
      : response?.[0]?.product_details?.image_url ?? productDetails?.product_details?.url;
  };

  const getProductName = (): string | undefined => {
    return whatsAppCoverage_id
      ? whatsAppProductDetails?.product_details?.product_name
      : response?.[0]?.product_details?.product_name ??
      productDetails?.product_details?.name;
  };

  // Example usage:
  const imageUrl = getImageUrl();

  // Example usage:
  const productName = getProductName();

  useEffect(() => {
    if (isScan === true) {
      addScanProduct(documentDetails, standardWarantyPayloadData);
    } else {
      // addProduct();
      addCategoryproduct();
    }
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  React.useEffect(() => {
    if ((success && !error) || (productSuccess && !ProductError)) {
      goToScheduleService();
    }
  }, [success, productSuccess]);


  // Amplitude tracking
  useEffect(() => {
    track('product added successfully page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={productAddedSuccessfully.mainBoxSx}>
      <Box sx={productAddedSuccessfully.polygonImg}>
        <PolygonNormal />
      </Box>
      <Box sx={productAddedSuccessfully.polygonImgRight}>
        <PolygonNormal />
      </Box>
      <Box sx={productAddedSuccessfully.circleEllipseBigSx}>
        <CircleEllipseBig />
      </Box>
      <Box sx={productAddedSuccessfully.circleEllipseNormalSx}>
        <CircleEllipseNormal />
      </Box>
      <Box sx={productAddedSuccessfully.circleEllipseSmallSx}>
        <CircleEllipseSmall />
      </Box>
      <Box sx={productAddedSuccessfully.subBoxSx}>
        {/* On Error */}
        {error || ProductError ? (
          <>
            <CancelRoundedIcon sx={productAddedSuccessfully.closeIconSx} />
            <Typography sx={productAddedSuccessfully.titleSx}>
              Opps! Something went wrong, Unable to Add Product
            </Typography>
            <Button buttonStyleSx={{ mb: '30px' }} onClick={() => retry()}>
              retry
            </Button>
          </>
        ) : null}

        {/* On Loading */}
        {loading || productLoading ? (
          <Box sx={productAddedSuccessfully.circleProgressSx}>
            <CircularProgress />
            <Typography sx={productAddedSuccessfully.titleSx}>We are adding your product, Please wait...</Typography>
          </Box>
        ) : null}

        {/* On Success */}
        {success || productSuccess ? (
          <>
            <img style={{ height: '139px', width: '139px' }} src={AddedSuccessfully} alt="Product Added Successfully" />
            <Typography sx={productAddedSuccessfully.titleSx}>{`${productDetails.nick_name
              || invoiceDocument?.nick_name
              } added successfully`}</Typography>
          </>
        ) : null}

        <ProductListCard
          imageURL={imageUrl}
          productDescription={productName}
        />
      </Box>

      <ScheduleServiceReminder handleNavigate={handleNavigate} handleNavigates={handleNavigates} />
    </Box>
  );
}
