/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { useAuth } from '@core/store';
import OtpVerifications from '@core/ui/assets/otpVerification.svg';
import { Button, OtpInputButton } from '@core/ui/atoms';
import { LeftArrowIcon } from '@core/ui/atoms/icons';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { track } from '@amplitude/analytics-browser';

import { otpVerificationStyle } from './style';

export default function OtpVerification() {
  const { otp, mobile_no, verifyOTP, resendOTP, updateState, verifyOTPLoading, resendOTPLoading } = useAuth();
  const [resendTime, setResendTime] = useState(30);
  const [enable, setEnable] = useState(false);

  const navigate = useNavigate();
  let interval: number;

  const navigation = () => {
    navigate(webRoutes.signin);
  };

  const changeNumber = () => {
    navigate(webRoutes.signin);
  };

  const verify = () => {
    // Amplitude Track
    track('User successfully creates account increases', { name: 'customer-app' })
    verifyOTP();
  };

  const resend = () => {
    resendOTP();
    setResendTime(30);
    setEnable(false);
  };

  useEffect(() => {
    interval = setInterval(() => {
      setResendTime((prevResendTime) => prevResendTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (resendTime === 0) {
      // Code to trigger resend action
      setEnable(true);
      clearInterval(interval);
    }
  }, [resendTime]);

  useEffect(() => {
    if (!mobile_no) {
      navigate(webRoutes.signin);
    }
  }, []);
  // const btnRef = useRef<HTMLButtonElement | null>();

  // useEffect(() => {
  //   if ((otp?.length as number) >= 6) {
  //     if (btnRef) {
  //       btnRef?.current?.onclick();
  //     }
  //   }
  // }, [otp]);

  // Amplitude tracking
  useEffect(() => {
    track('Otp verification page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box
      sx={{
        // backgroundImage: `url(${OtpVerifications})`,
        // backgroundSize: 'cover',
        minHeight: '100vh',
        bgcolor: '#F0F4FA'
      }}
    >
      <Box sx={otpVerificationStyle.rootSx}>
        <Box sx={otpVerificationStyle.innerRootSx}>
          {/* <LeftArrowIcon onClick={navigation} /> */}
          <Typography variant="subtitle2" fontWeight={600} sx={otpVerificationStyle.otpVerificationTextSx}>
            OTP Verification
          </Typography>
          <Box sx={otpVerificationStyle.sentSmsTextSx}>
            <Typography sx={otpVerificationStyle.otpSentTextSx}>OTP has been sent to </Typography>
            <Typography sx={otpVerificationStyle.numberTextSx}>{mobile_no ? `+91 ${mobile_no}` : ''}</Typography>
          </Box>
          <Typography data-testid="changeNumber" onClick={changeNumber} sx={otpVerificationStyle.changeNumberTextSx}>
            Change Number
          </Typography>
        </Box>

        <Box sx={otpVerificationStyle.subRootSx}>
          <Box sx={otpVerificationStyle.subRootSsx}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <OtpInputButton
                numInputs={4}
                // inputRef={otpInputRef}
                // onChange={handleInputChange}
                renderSeparator={<span style={{ padding: '0px 4px 0px 4px' }}>&nbsp;&nbsp;&nbsp;</span>}
                value={otp as string}
                onChange={(e: string) => updateState('otp', e)}
                shouldAutoFocus={true}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gap: 28 }}>
            <Box>
              <Typography sx={otpVerificationStyle.dntReceiveTextSx}>Didn&apos;t receive OTP?</Typography>
              {resendTime > 0 && (
                <Typography data-testid="resend" sx={{ ...otpVerificationStyle.resendTextSx, cursor: 'default' }}>
                  {`Resend in ${resendTime < 10 ? '00:0' : '00:'}${resendTime}`}
                </Typography>
              )}
              {enable && (
                <Stack direction={'row'} justifyContent={'center'}>
                  <Button
                    variant="text"
                    data-testid="resend"
                    onClick={resend}
                    size="small"
                    loading={resendOTPLoading}
                    sx={{
                      color: '#60666F',
                      mt: 1,
                      border: 'none',
                      '&:hover': { border: 'none' },
                      // color: ,
                      boxShadow: 'none',
                      textTransform: 'capitalize',
                    }}
                  >
                    {`Resend OTP`}
                  </Button>
                </Stack>
              )}
            </Box>
            <Box sx={{ pb: 1 }}>
              <Button
                data-testid="proceed"
                onClick={verify}
                loading={verifyOTPLoading}
                fullWidth
                sx={otpVerificationStyle.buttonSx}
                disabled={otp?.length > 3 ? false : true}
              >
                Verify OTP
              </Button>
            </Box>
          </Box>
          {/* Message */}
          {/* {verifyOTPMessage.length > 0 && (
            <Box mt={2} sx={otpVerificationStyle.errorMessage}>
              <Typography sx={verifyOTPError ? otpVerificationStyle.errorFail : otpVerificationStyle.errorSuccess}>
                {verifyOTPMessage}
              </Typography>
            </Box>
          )} */}
        </Box>
      </Box>
    </Box>
  );
}
