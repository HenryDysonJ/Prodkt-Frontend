/* eslint-disable react/jsx-key */

import { addProductDetails, useScanproduct } from '@core/store';
import { Box, Typography } from '@mui/material';

// import BotScreenBackGround from '@core/ui/assets/botScreen.svg'
import MascotCoverage from '@core/ui/assets/MascotCoverage.gif';
import cardImage from '@core/ui/assets/Union.png';
import { PageHeader } from '@core/ui/atoms';
import { AddCoverageDetailsComponent } from '@core/ui/components';
import { completeWhatsAppAddProductStyle } from './style';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CompleteWhatsAppAddProduct() {

  const {
    OnWhatsAppCoverageId,
    getWhatsAppProduct
  } = addProductDetails()
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const whatsapp_id = searchParams.get('id');
    OnWhatsAppCoverageId(whatsapp_id)
    getWhatsAppProduct()
  }, [])

  return (
    <Box sx={{
      ...completeWhatsAppAddProductStyle.rootSx,
      // bgcolor: '#F0F4FA'
    }}>
      <Box sx={{ px: 2.5, py: 2.5 }}>
        <PageHeader
          header
          headerText='Add WhatsApp coverage details'
        />
      </Box>
      <Box sx={completeWhatsAppAddProductStyle.sectionSx}>

        <Box sx={{ position: 'absolute', left: '190px' }}>
          <img src={cardImage} alt='cardImage' />
          <Typography sx={{ fontSize: '14px', position: 'absolute', top: '6px', left: '20px', color: 'text.200', fontWeight: 700 }}>Your product details has been fetched, confirm and proceed further</Typography>
        </Box>
        <Box sx={{ position: 'absolute', left: '125px', top: '75px' }}>
          <img src={MascotCoverage} alt='cardImage' />
        </Box>
      </Box>
      <AddCoverageDetailsComponent />
    </Box>
  );
}
