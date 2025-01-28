import { useEmailVerificationStore, useUserProfileDetails } from '@core/store';
import { Button, CloseIcon, EditPenIcon, Input, MailIcon, OtpInputButton } from '@core/ui/atoms';
import { DrawerComponent, ModalHeader } from '@core/ui/components';
import { Divider, IconButton } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { track } from '@amplitude/analytics-browser';
import { emailVerificationStyle } from './style';

export default function EmailVerification() {
  const [sendoff, setsendotp] = useState<any>(true);
  const [sendOtpHide, setsendOtpHide] = useState<any>(false);
  const [resendTime, setResendTime] = useState(30);
  const { profileDetails, getProfileDetails } = useUserProfileDetails();


  const {
    sentEmailCode,
    setDrawerClose,
    setEditEmail,
    setEditEmailClose,
    drawerOpen,
    email_id,
    editEmail,
    editEmailUpdateState,
    updateOtpState,
    clearStateEmpty,
    otp,
    getVerifyCode,
  } = useEmailVerificationStore();


  let interval: number;
  const toggleEditIcon = () => {
    setEditEmail(true);
  };
  const toggleEdit = () => {
    editEmailUpdateState(profileDetails?.email_id);
    setEditEmailClose();
    clearStateEmpty();
  };
  const onCloseDrawer = () => {
    setDrawerClose(false);
    setsendOtpHide(false)
  };

  const resend = () => {
    setResendTime(30);
  };

  const sendEmailOtp = () => {
    sentEmailCode(email_id);
    setsendotp(false);
    resend();
    clearStateEmpty();
  };

  const sendInitialEmailOtp = () => {
    sentEmailCode(email_id);
    setsendotp(false);
    setsendOtpHide(true)
    resend();
    clearStateEmpty();
  };

  const getVerifyCodeAPI = () => {
    getVerifyCode(otp)
    setTimeout(() => {
      getProfileDetails()
    }, 1000);

  }
  useEffect(() => {
    if (sendoff) {
      return;
    }
    interval = setInterval(() => {
      setResendTime((prevResendTime) => prevResendTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sendoff]);

  useEffect(() => {
    if (resendTime === 0) {
      // Code to trigger resend action
      setsendotp(true);
      clearInterval(interval);
    }
  }, [resendTime]);

  useEffect(() => {
    getProfileDetails();
  }, []);

  useEffect(() => {
    editEmailUpdateState(profileDetails?.email_id);
  }, [profileDetails?.email_id]);

  // Amplitude tracking
  useEffect(() => {
    track('Email verification page', {
      name: 'customer-app',
    });
  }, []);
  return (
    <Box>
      <DrawerComponent
        open={drawerOpen}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={sendoff ? true : editEmail ? true : false}
            showHeader={true}
            headerText={!editEmail ? 'Email Verification' : 'Change Email'}
            onClose={!editEmail ? onCloseDrawer : toggleEdit}
          />
        }
      >
        <Divider sx={emailVerificationStyle.divider} />
        <Box sx={emailVerificationStyle.mainBoxSx}>
          <Typography sx={emailVerificationStyle.verificationText}>
            {!editEmail
              ? 'Verify your email to get instant updates on your products'
              : 'Change your email and verify with OTP to proceed further'}
          </Typography>
          {!editEmail ? (
            <>
              <Typography sx={emailVerificationStyle.digitSx}>Enter the 4 digit code sent to</Typography>
              <Box sx={emailVerificationStyle.flexBox}>
                <Box sx={emailVerificationStyle.codePenIconSx}>
                  <Typography sx={emailVerificationStyle.emailSx}>{email_id}</Typography>
                  <IconButton onClick={() => toggleEditIcon()}>
                    <EditPenIcon />
                  </IconButton>
                </Box>
                {/* {!sendOtpHide && */}
                <Typography
                  onClick={() => (sendoff && !sendOtpHide ? sendInitialEmailOtp() : '')}
                  sx={sendoff && !sendOtpHide ? emailVerificationStyle.changeEmailSx : emailVerificationStyle.changeDisbleEmailSx}
                >
                  Send OTP
                </Typography>
                {/* } */}
              </Box>
              <Box sx={emailVerificationStyle.otpBoxSx}>
                <OtpInputButton
                  sx={emailVerificationStyle.otpBtnSx}
                  numInputs={4}
                  isDisabled={sendoff ? true : false}
                  value={otp as string}
                  onChange={(e: string) => updateOtpState(e)}
                  renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                  shouldAutoFocus={true}
                />
              </Box>

              {sendOtpHide && sendoff && (
                <Typography onClick={() => sendEmailOtp()} sx={emailVerificationStyle.resendCode}>
                  Resend Code
                </Typography>
              )}
              {!sendoff && (
                <>
                  <Typography sx={emailVerificationStyle.receiveOtpSx}>Didn&apos;t receive OTP?</Typography>
                  <Typography sx={emailVerificationStyle.resendOtpSx}>
                    {`Resend in ${resendTime < 10 ? '00:0' : '00:'}${resendTime}`}
                  </Typography>
                </>
              )}
            </>
          ) : (
            <Box sx={{ pt: 1, pb: 3 }}>
              <Input
                testid="emailId"
                value={email_id}
                onChange={(e) => editEmailUpdateState(e.target.value)}
                placeholder="Email"
                endAdornment={<MailIcon />}
              />
            </Box>
          )}

          <Button
            disabled={!editEmail && otp.length < 4}
            onClick={!editEmail ? () => getVerifyCodeAPI() : () => sendEmailOtp()}
            sx={emailVerificationStyle.btnSx}
          >
            {!editEmail ? 'Verify OTP' : 'Update Email & Get OTP'}
          </Button>
        </Box>
      </DrawerComponent>
    </Box>
  );
}
