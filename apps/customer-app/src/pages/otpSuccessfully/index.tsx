/* eslint-disable react/jsx-key */
import 'aos/dist/aos.css';

import { webRoutes } from '@core/routes';
import { useRouting } from '@core/store';
import OtpSuccessfullyIcon from '@core/ui/assets/addedSuccessfully.gif';
import { CircleEllipseBig, CircleEllipseNormal, CircleEllipseSmall, PolygonNormal } from '@core/ui/atoms';
import { routeTo } from '@core/utils';
import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import { useEffect } from 'react';
import { track } from '@amplitude/analytics-browser';
import { otpSuccessfullyStyle } from './style';

const DELAY_MS = 3000;

export default function OtpSuccessfully() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      routeTo(useRouting, webRoutes.userDetails);
    }, DELAY_MS);

    return () => clearTimeout(timeout);
  }, [routeTo]);

  useEffect(() => {
    AOS.init();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Otp Successfully page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={otpSuccessfullyStyle.mainBoxSx}>
      <Box sx={otpSuccessfullyStyle.polygonImg}>
        <PolygonNormal />
      </Box>
      <Box sx={otpSuccessfullyStyle.polygonImgRight}>
        <PolygonNormal />
      </Box>
      <Box sx={otpSuccessfullyStyle.circleEllipseBigSx}>
        <CircleEllipseBig />
      </Box>
      <Box sx={otpSuccessfullyStyle.circleEllipseNormalSx}>
        <CircleEllipseNormal />
      </Box>
      <Box sx={otpSuccessfullyStyle.circleEllipseSmallSx}>
        <CircleEllipseSmall />
      </Box>
      <Box sx={otpSuccessfullyStyle.subBoxSx}>
        <>
          <img style={{ height: '139px', width: '139px' }} src={OtpSuccessfullyIcon} alt="OTP verified successfully" />
          <Typography sx={otpSuccessfullyStyle.titleSx}>OTP verified successfully</Typography>
        </>
      </Box>
    </Box>
  );
}
