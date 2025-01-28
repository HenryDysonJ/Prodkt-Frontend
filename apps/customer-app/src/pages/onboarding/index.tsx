/* eslint-disable react/jsx-key */
import { track } from '@amplitude/analytics-browser';
import { webRoutes } from '@core/routes';
import { useAuth } from '@core/store';
import OtpSuccessfullyIcon from '@core/ui/assets/addedSuccessfully.gif';
import {
  CircleEllipseBig,
  CircleEllipseNormal,
  CircleEllipseSmall,
  LoginIllustration,
  PolygonNormal,
  ProductIcon,
  TextfieldButton
} from '@core/ui/atoms';
import {
  WelcomeBotIcon
} from '@core/ui/atoms/icons/onboardIcons';
import { SwiperComponent } from '@core/ui/components';
import { localStorageKeys } from '@core/utils';
import { Box, Stack, Typography } from '@mui/material';
import { useKeyPress } from 'ahooks';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { version } from '../../../package.json';
import { onboardingStyle } from './style';

export default function Onboarding() {
  const {
    mobile_no,
    updateState,
    getOTP,
    clearOTP,
    getOTPLoading,
    isExistingUser,
    isSwiper,
    onBoarding,
    drawerOpen,
    currentSwipeStep,
    isSignUpOpenDrawer,
    otp,
    verifyOTPLoading,
    isOtpVerification,
    verifyOTP,
    resendOTP,
    clearState,
  } = useAuth();
  const navigate = useNavigate();

  const [resendTime, setResendTime] = useState(30);
  const [enable, setEnable] = useState(false);
  const location = useLocation();

  let interval: number;

  const verify = () => {
    verifyOTP();
  };

  const resend = () => {
    resendOTP();
    clearOTP();
    setResendTime(30);
    setEnable(false);
  };

  const signUp = () => {
    if (mobile_no) {
      getOTP();
      setResendTime(30);
      setEnable(false);
      navigate(webRoutes.verification)
    }
  };

  useKeyPress(['Enter'], (event) => {
    event.preventDefault();
    if (isSignUpOpenDrawer) {
      signUp();
    } else {
      verify();
    }
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'e') {
      event.preventDefault();
    }
  };

  const handleClickDrawerToggle = () => {
    updateState('drawerOpen', !drawerOpen);
    updateState('isSignUpOpenDrawer', true);
    clearState();
  };

  const getCurrentSwiperStep = (key: number | undefined) => {
    switch (key) {
      case 1:
        return {
          icon: <iframe style={{ border: "none" }} width="375" height="332" src="https://rive.app/s/9tutnsKoZU2lKgRZOvINWQ/embed" />,
          contentTest: (
            <Typography variant="subtitle2" fontWeight={600} sx={onboardingStyle.contentSx}>
              Experience Hassle free maintenance with <span>AMC&apos;s</span> , Extend <span>Warranty</span> for added
              assurance & Secure your products with <span>Insurance</span>
            </Typography>
          ),
          buttonName: 'Next',
          isActiveOne: currentSwipeStep === 1 ? true : false,
        };
      case 2:
        return {
          icon: <iframe style={{ border: "none" }} width="375" height="332" src="https://rive.app/s/3Ks4qHonCEGtrLLVZTDqTQ/embed" />,
          contentTest: (
            <Typography variant="subtitle2" fontWeight={600} sx={onboardingStyle.contentSx}>
              Get to Know the <span>Inclusions & Exclusions</span> in your Warranty, Insurance and AMC policies
            </Typography>
          ),
          buttonName: 'Next',
          isActiveTwo: currentSwipeStep === 2 ? true : false,
        };
      case 3:
        return {
          icon: <iframe style={{ border: "none" }} width="375" height="332" src="https://rive.app/s/pH_H3jTIiEqtkqobVzmasg/embed" />,
          contentTest: (
            <Typography variant="subtitle2" fontWeight={600} sx={onboardingStyle.contentSx}>
              <span>Chat</span> with the Digital Companion to get cleared of your policy related queries
            </Typography>
          ),
          buttonName: 'Next',
          isActiveThree: currentSwipeStep === 3 ? true : false,
        };
      case 4:
        return {
          icon: <iframe style={{ border: "none" }} width="375" height="332" src="https://rive.app/s/7j96-_vwukyJp7YWO9czbA/embed" />,
          contentTest: (
            <Typography variant="subtitle2" fontWeight={600} sx={onboardingStyle.contentSx}>
              Receive timely service alerts and Book seamless <span>service appointments</span>
            </Typography>
          ),
          buttonName: 'Get Started',
          isActiveFour: currentSwipeStep === 4 ? true : false,
        };
      default:
        return null;
    }
  };

  const getSwiperDetails = getCurrentSwiperStep(currentSwipeStep);

  const handleClickNextSwipe = () => {
    if (currentSwipeStep === 4) {
      updateState('isSwiper', false);
      updateState('onBoarding', true);
    } else {
      updateState('currentSwipeStep', (currentSwipeStep as number) + 1);
    }
  };

  const handleClick = () => {
    navigate(webRoutes.privacyPolicy);
  };

  const onRouteSignIn = () => {
    navigate(webRoutes?.signin)
    updateState('isExistingUser', false);
    updateState('isSwiper', false);
    updateState('onBoarding', true);
  }

  useEffect(() => {
    const getExistingUser = localStorage.getItem(localStorageKeys?.isExistingUser);
    if (getExistingUser) {
      updateState('isExistingUser', false);
      updateState('isSwiper', false);
      updateState('onBoarding', true);
    } else {
      updateState('isExistingUser', true);
      const timer = setTimeout(() => {
        updateState('isExistingUser', false);
        updateState('isSwiper', true);
        localStorage.setItem(localStorageKeys?.isExistingUser, 'true');
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

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
    const authToken = localStorage.getItem(localStorageKeys?.authToken);
    localStorage.setItem(localStorageKeys?.version, version);

    const searchParams = new URLSearchParams(location.search);
    const referenceId = searchParams.get('reference_id');

    if (referenceId) {
      localStorage.setItem(localStorageKeys?.referenceId, referenceId);
      return
    }else{
      localStorage.removeItem(localStorageKeys?.referenceId);
    }

    if (authToken) {
      navigate(webRoutes.home);
    }
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Onboarding page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box
      sx={{
        background: 'transparent linear-gradient(180deg, #E8F2FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      {/* welcome page  */}
      {isExistingUser && (
        <Stack sx={onboardingStyle.welcomeStackSx} flexDirection={'column'} justifyContent={'center'}>
          <Stack mb={5} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
            <WelcomeBotIcon />
          </Stack>
          <Box pl={2.5} pr={5}>
            <Typography mb={1.5} variant="subtitle2" sx={onboardingStyle.welcomeTextSx}>
              Welcome to Prodkt
            </Typography>
            <Typography sx={onboardingStyle.welcomeSubTextSx}>Your Digital Product Management Companion</Typography>
          </Box>
        </Stack>
      )}

      {/* welcome swiper page */}
      {isSwiper && (
        <Box px={2.5} py={2.5}>
          <ProductIcon />
          <SwiperComponent
            onClick={handleClickNextSwipe}
            icon={getSwiperDetails?.icon}
            contentTest={getSwiperDetails?.contentTest ?? undefined}
            buttonName={getSwiperDetails?.buttonName ?? ''}
            isActiveOne={getSwiperDetails?.isActiveOne}
            isActiveTwo={getSwiperDetails?.isActiveTwo}
            isActiveThree={getSwiperDetails?.isActiveThree}
            isActiveFour={getSwiperDetails?.isActiveFour}
          />
          <Typography mt={3} sx={onboardingStyle.loginTextSx}>
            Already have an account?{' '}
            <Box onClick={onRouteSignIn} component={'span'} sx={{ color: 'primary.main' }}>
              Login
            </Box>
          </Typography>
        </Box>
      )}

      {/* onboading section */}
      {onBoarding && (
        <Box sx={{ ...onboardingStyle.onboardSectionSx, position: 'relative', height: '100vh' }} px={2.5} pt={2.5} >
          <Box sx={{ position: 'fixed' }}>
            <ProductIcon />
          </Box>
          <Box sx={onboardingStyle.loginIconSectionSx}>
            <LoginIllustration />
          </Box>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="subtitle2" sx={onboardingStyle.titleUnlockSx}>
                Unlock the power of Prodkt
              </Typography>
              <TextfieldButton
                id="phoneNumber"
                disabled={!mobile_no || (typeof mobile_no === 'string' && mobile_no.length < 10)}
                value={mobile_no}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateState('mobile_no', e.target.value)}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  return (e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10));
                }}
                onClick={signUp}
                loading={getOTPLoading}
                onKeyPress={function (event: KeyboardEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.');
                }} />
            </Box>
            {/* <Box>
              <Button
                onClick={() => window.open(`https://wa.me/919042713841?text=Hey! Prodkt's got a spot just for you! Get ready for an amazing product journey together!`)}
                data-testid="proceedWithWhatsapp"
                fullWidth
                startIcon={<WhattsUpIcon />}
                sx={onboardingStyle.buttonSx}
              >
                Proceed With Whatsapp
              </Button>
            </Box>
            <Box sx={onboardingStyle.rootDividerSx}>
              <Divider sx={onboardingStyle.dividerSx} />
              <Box component="span" sx={{ color: 'text.900', fontSize: '12px' }}>
                or
              </Box>
              <Divider sx={onboardingStyle.dividerSx} />
            </Box>
            <Typography
              data-testid="proceedNumber"
              onClick={handleClickDrawerToggle}
              sx={onboardingStyle.mobileNumberSx}
            >
              Proceed with Mobile Number
            </Typography>
             */}
            <Box>
              <Box sx={onboardingStyle.rootDividerSx}>
                <Typography sx={onboardingStyle.countingTextSx}>
                  By continuing, you agree to our{' '}
                  <Box onClick={handleClick} sx={onboardingStyle.sideTextSx}>
                    <Typography>Privacy Policy</Typography>
                  </Box>
                </Typography>
              </Box>

              {/* APP VERSION */}

              <Typography sx={onboardingStyle.appVersionSx}>App Version {localStorage.getItem(localStorageKeys?.version)}</Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* otp successfully  */}
      {isOtpVerification && (
        <>
          <Box sx={onboardingStyle.mainBoxSx}>
            <Box sx={onboardingStyle.polygonImg}>
              <PolygonNormal />
            </Box>
            <Box sx={onboardingStyle.polygonImgRight}>
              <PolygonNormal />
            </Box>
            <Box sx={onboardingStyle.circleEllipseBigSx}>
              <CircleEllipseBig />
            </Box>
            <Box sx={onboardingStyle.circleEllipseNormalSx}>
              <CircleEllipseNormal />
            </Box>
            <Box sx={onboardingStyle.circleEllipseSmallSx}>
              <CircleEllipseSmall />
            </Box>
            <Box sx={onboardingStyle.subBoxSx}>
              <>
                <img
                  style={{ height: '139px', width: '139px' }}
                  src={OtpSuccessfullyIcon}
                  alt="OTP verified successfully"
                />
                <Typography sx={onboardingStyle.titleSx}>OTP verified successfully</Typography>
              </>
            </Box>
          </Box>
        </>
      )}
      {/* login drawer */}
      {/* <DrawerComponent
        open={drawerOpen}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={isSignUpOpenDrawer ? 'Sign up / Login with Mobile Number' : 'OTP Verification'}
            onClose={handleClickDrawerToggle}
          />
        }
      >
        <Divider sx={onboardingStyle.dividerDrawerSx} />
        <Box px={2.5} py={2.5}>
          {isSignUpOpenDrawer ? (
            <>
              <Stack mb={3.2} mt={1} alignItems={'center'}>
                <img src={MobileNumberResetIcon} alt="mobile icon" />
              </Stack>
              <Typography mb={3} sx={onboardingStyle.mobileNumberText}>
                Enter your Mobile Number to proceed further
              </Typography>
              <TextfieldButton
                sx={{ pb: 3 }}
                onKeyPress={handleKeyPress}
                isError={typeof mobile_no === 'string' && mobile_no.length > 0 && mobile_no?.length < 10}
                helperText="Please enter a valid mobile number"
                dataTestId="phoneNumber"
                value={mobile_no ? mobile_no : ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                  updateState('mobile_no', e.target.value)
                }
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  return (e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10));
                }}
              />
            </>
          ) : (
            <>
              <Stack mb={3.2} mt={1} alignItems={'center'}>
                <img src={OtpVerifyIcon} alt="mobile icon" />
              </Stack>
              <Stack justifyContent={'space-between'}>
                <Typography sx={onboardingStyle.otpTextSx}>
                  Enter the 4 digit code sent to {` `}
                  <Box component={'span'} sx={onboardingStyle.mobileNumberStyle}>
                    {mobile_no ? `+91 ${mobile_no}` : ''}
                  </Box>{' '}
                  <Box component={'span'}>
                    <IconButton data-testid="editNumber" onClick={() => updateState('isSignUpOpenDrawer', true)}>
                      <EditPenIcon />
                    </IconButton>
                  </Box>
                </Typography>
              </Stack>
              <Box sx={onboardingStyle.otpBoxSx}>
                <OtpInputButton
                  sx={onboardingStyle.otpBtnSx}
                  numInputs={4}
                  value={otp as string}
                  onChange={(e: string) => updateState('otp', e)}
                  renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                  shouldAutoFocus={true}
                />
              </Box>
              {enable && (
                <Typography onClick={resend} sx={onboardingStyle.resendCode}>
                  Resend Code
                </Typography>
              )}
              {resendTime > 0 && (
                <>
                  <Typography sx={onboardingStyle.receiveOtpSx}>Didn&apos;t receive OTP?</Typography>
                  <Typography sx={onboardingStyle.resendOtpSx}>
                    {`Resend in ${resendTime < 10 ? '00:0' : '00:'}${resendTime}`}
                  </Typography>
                </>
              )}
            </>
          )}
          <Button
            sx={onboardingStyle.btnSx}
            data-testid="getOtp"
            disabled={(isSignUpOpenDrawer && !mobile_no) || (typeof mobile_no === 'string' && mobile_no.length < 10)}
            onClick={isSignUpOpenDrawer ? signUp : verify}
            loading={isSignUpOpenDrawer ? getOTPLoading : verifyOTPLoading}
          >
            {isSignUpOpenDrawer ? 'Send OTP' : 'Verify OTP'}
          </Button>
        </Box>
      </DrawerComponent> */}
    </Box>
  );
}
