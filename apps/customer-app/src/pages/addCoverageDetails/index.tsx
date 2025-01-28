/* eslint-disable react/jsx-key */

import { addProductDetails, useScanproduct } from '@core/store';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// import BotScreenBackGround from '@core/ui/assets/botScreen.svg'
import { addCoverageDetailsStyle } from './style';
import { AddCoverageDetailsComponent } from '@core/ui/components';
import { BackCircleIcon, ChatIcon, PageHeader } from '@core/ui/atoms';
import { webRoutes } from '@core/routes';
import cardImage from '@core/ui/assets/Union.png'
import MascotCoverage from '@core/ui/assets/MascotCoverage.gif'

export default function AddCoverageDetails() {
  const {
    onUploadCaptureFile,
    onDeleteUploadFile,
    uploadFile,
    invoiceDocument,
    onUpdateCaptureImage,
    currentStatus,
    dataURIs,
    getScanProduct,
    onUpdateSkip,
    product_details,
    updateCheckedIndex,
    clearScan,
    clearSerialNo,
    updateSerialNo,
    loading,
    serialIndex,
    onUpdateSerialNo,
    onUpdateImeiNo,
    onScanType,
    scanType,
    updateStandardWarrantyDocument,
    clearInvoice,
  } = useScanproduct();

  const { updateProducts, documentDetails, updateDocumentDetails, updateWarrantyDetails, updateExtendedWarrantyDetails, } = addProductDetails();

  const location = useLocation();
  const navigate = useNavigate();


  const isScan = location?.state?.data?.isScan
  const productData = location?.state?.data?.data?.[0]

  const onbackRoute = () => {
    if (isScan) {
      navigate(webRoutes.addproductBot);
    }
    else {
      navigate(webRoutes.addProductDetails, {
        state: {
          open: true,
        },
      });
      updateProducts('currentStep', 1);
    }
  }


  return (
    <Box sx={{
      ...addCoverageDetailsStyle.rootSx,
      // bgcolor: '#F0F4FA'
    }}>
      <Box sx={{ px: 2.5, py: 2.5 }}>
        <PageHeader
          onBackBtnClick={() => onbackRoute()}
          useBackBtnClick={true}
          showIcon
          icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
          header
          headerText='Add coverage details'
        />
      </Box>
      <Box sx={addCoverageDetailsStyle.sectionSx}>
        <Box sx={{
          position: 'absolute', left: '190px', top: '10px', "@media (max-width: 380px)": {
            left: '136px'
          }, "@media (max-width: 375px)": {
            left: '116px'
          },
        }}>
          <img src={cardImage} alt='cardImage' />
          <Typography sx={{ fontSize: '14px', position: 'absolute', top: '6px', left: '20px', color: 'text.200', fontWeight: 700 }}>Your product details has been fetched, confirm and proceed further</Typography>
        </Box>
        <Box sx={{ position: 'absolute', left: '125px', top: '93px' }}>
          <img src={MascotCoverage} alt='cardImage' />
        </Box>
      </Box>
      <AddCoverageDetailsComponent data={productData} />
    </Box>
  );
}
