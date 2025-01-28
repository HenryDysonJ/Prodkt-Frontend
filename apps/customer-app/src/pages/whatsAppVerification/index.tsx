import { webRoutes } from '@core/routes';
import { useAuth } from '@core/store';
import { Button } from '@core/ui/atoms';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';

import { whatsAppVerificationStyle } from './style';
export default function WhatsAppVerification() {
  const [codes] = useSearchParams();
  const navigate = useNavigate();
  const { whatsAppVerification, whatsAppVerificationLoading, whatsAppVerificationError } = useAuth();

  React.useEffect(() => {
    whatsAppVerification(codes.get('code'));
    // eslint-disable-next-line
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('WhatsApp verification page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <>
      {/* <Typography>whatsAppVerification {codes.get('code')}</Typography> */}
      {/* on loading */}
      {whatsAppVerificationLoading && (
        <Box sx={whatsAppVerificationStyle.loadingSx}>
          <CircularProgress />
          <Typography sx={whatsAppVerificationStyle.typoSx}>Signing in, Please wait...</Typography>
        </Box>
      )}
      {/* on error */}
      {whatsAppVerificationError && (
        <>
          <Box sx={whatsAppVerificationStyle.loadingSx}>
            <CancelRoundedIcon sx={whatsAppVerificationStyle.closeIconSx} />
            <Typography sx={whatsAppVerificationStyle.titleSx}>Opps! Something went wrong, Unable to Log in</Typography>
            <Button buttonStyleSx={{ mb: '30px' }} onClick={() => navigate(webRoutes.signin)}>
              retry
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
