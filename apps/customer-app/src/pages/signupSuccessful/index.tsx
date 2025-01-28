/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { useRouting } from '@core/store';
import Animation from '@core/ui/assets/animation.gif';
import Board from '@core/ui/assets/Board.svg';
import Clouds from '@core/ui/assets/cloudsBg.svg';
import Railguard from '@core/ui/assets/Railguard.svg';
import { routeTo } from '@core/utils';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { track } from '@amplitude/analytics-browser';


import { signupSuccessfulStyle } from './style';

const DELAY_MS = 5000;

export default function SignupSuccessful() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      routeTo(useRouting, webRoutes.home);
    }, DELAY_MS);

    return () => clearTimeout(timeout);
  }, [routeTo]);

  // Amplitude tracking
  useEffect(() => {
    track('SignUp successful page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box>
      <Box sx={signupSuccessfulStyle.rootSx}>
        <img
          style={{
            height: '110px',
            backgroundSize: 'cover',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            maxWidth: '265px',
            margin: '0px auto',
          }}
          src={Clouds}
          alt="cloudImg"
        />
      </Box>
      <Box sx={signupSuccessfulStyle.animationRootSx}>
        <img src={Animation} style={{ width: '150px', height: '150px', marginBottom: '-36px' }} alt="order Delivery" />
      </Box>
      <Box sx={signupSuccessfulStyle.boardRootSx}>
        <Box sx={signupSuccessfulStyle.boardSx}>
          <Typography sx={signupSuccessfulStyle.boardTextSx}>
            Sign up successful. Loading your personal product space
          </Typography>
          <img
            src={Board}
            style={{ marginTop: '14px', marginLeft: '-2px', width: '200px', height: '200px' }}
            alt="Board"
          />
        </Box>
        <Box>
          <img src={Railguard} style={{ marginTop: '-16px', width: '100%' }} alt="Railguard" />
        </Box>
      </Box>
    </Box>
  );
}
