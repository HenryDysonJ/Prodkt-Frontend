import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { brandRoutes } from "@core/routes";
import { useBrandLogin } from "@core/store/brand-app";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { InputField } from "@crayond_dev/ui_input-field";
import {
  Box,
  InputAdornment,
  Stack,
  SxProps,
  Theme,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation, useNavigate } from "react-router-dom";

import PasswordInvisible from "../../assets/passwordInvisible";
import PasswordVisibleIcon from "../../assets/passwordVisibleIcon";
import ProductBrandLogo from "../../assets/productBrandLogo";
import SuccessTickIcon from "../../assets/successTickIcon";
import CarosalItems from "./helperComponents/carosalItems";
import SuccessMessage from "./helperComponents/successMessage";
import { brandLoginStyles } from "./style";
import {
  CarosalData,
  validateForgotPassword,
  validateLoginData,
  validateResetPassword
} from "./utils";

export interface BrandLoginProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const BrandLogin = (props: BrandLoginProps): JSX.Element => {
  const { className = "", sx = {}, ...rest } = props;
  const {
    accessToken,
    loginState,
    forgotPassword,
    resetPassword,

    setHandeloginChange,
    setResetHandleChange,
    setBrandLogin,
    setResetPassord,
    setForgotPassordSendLinkEmail,
    setResetToken,
    setError,
    clearAll,
  } = useBrandLogin();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [passwordvisible, setPasswordVisible] = useState(false);
  const [confirmPasswordvisible, setCnfirmPasswordVisible] = useState(false);

  const [isForgotPassword, setIsForgotPassword] = useState(pathname === brandRoutes.forgotPassword ? true : false);
  const [changePassword, setChangePassword] = useState(pathname === brandRoutes.changePasswords ? true : false);
  const [sendLink, setSendLink] = useState(false);

  // Icons for password visibility
  const passwordVisbleIcon = <PasswordVisibleIcon />;
  const passWordInvisibleIcon = <PasswordInvisible />;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordvisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setCnfirmPasswordVisible(!confirmPasswordvisible);
  };

  //  HANDLE FORGOT PASSWORD FUNCTION
  const handleForgotPassword = () => {
    setChangePassword(false)
    setIsForgotPassword(true);
    navigate(brandRoutes.forgotPassword);
    clearAll();
  };

  const goBack = () => {

    setChangePassword(false)
    setIsForgotPassword(false);

    navigate(brandRoutes.login);
    clearAll();
  }

  const handleLogin = async () => {
    const { error, isValid } = validateLoginData(loginState);
    if (isValid) {
      const resp: any = await setBrandLogin();
      if (resp?.status === 200) {
        navigate(brandRoutes.home);
        clearAll();
      }
    } else {
      setError(error);
    }
  }

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = async () => {
    if (isForgotPassword) {
      const { error, isValid } = validateForgotPassword(forgotPassword);
      if (isValid) {
        const reslink: any = await setForgotPassordSendLinkEmail();
        if (reslink?.status === 200) {
          setSendLink(true)
          setChangePassword(true)
          clearAll();
        }
      } else {
        setError(error);
      }
    }
    else if (changePassword) {
      const { error, isValid } = validateResetPassword(resetPassword);
      if (isValid) {
        const resetRes: any = await setResetPassord();
        console.log(resetRes);
        if (resetRes?.status === 200) {
          setSendLink(true);
          setChangePassword(false)
          navigate(brandRoutes.login);
        }
      } else {
        setError(error);
      }
    }
  };

  //  HANDLE GO BACK FUNCTION
  const handleBackFn = () => {
    if (pathname === brandRoutes?.forgotPassword) {
      navigate(brandRoutes.login);
      setSendLink(false)
      setChangePassword(false)
      setIsForgotPassword(false);
    } else  {
      navigate(brandRoutes.login);
      setSendLink(false)
      setChangePassword(false)
      setIsForgotPassword(false);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    setResetToken(token ? token : "");
    if (token) {
      navigate(`${brandRoutes.changePasswords}?token=${token}`);
    }
  }, [changePassword]);

  useEffect(() => {
    localStorage.setItem("authToken", accessToken);
  }, [accessToken]);


  return (
    <Stack
      sx={[{ ...brandLoginStyles.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={brandLoginStyles.logoContainer}>
        <Box sx={brandLoginStyles.logoChild}>
          <ProductBrandLogo />
        </Box>
        <Box sx={brandLoginStyles.carosalContainer}>
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            {CarosalData &&
              CarosalData?.map((item: any, i: number) => (
                <div key={i}>
                  <CarosalItems
                    imgIcon={item?.imgIcon}
                    carosalTitle={item?.carosalTitle}
                    carosalSubTitle={item?.carosalSubTitle}
                  />
                </div>
              ))}
          </Carousel>
        </Box>
      </Box>
      <Box sx={brandLoginStyles.formContainer}>
        {sendLink ? (
          <SuccessMessage
            successImg={<SuccessTickIcon />}
            title={
              changePassword
                ? "Link sent successfully!"
                : "Password changed successfully!"
            }
            subTitle={
              changePassword
                ? "A recovery link to your email to recover your password"
                : "You have successfully changed your password,enter your new password to login"
            }
            handleGoBack={() => handleBackFn()}
          />
        ) : (
          <Box sx={brandLoginStyles.formChild}>

            <Stack sx={{ width: "100%", alignItems: "flex-start" }}>
              <Typography sx={brandLoginStyles.formHeaderStyle} mb={2}>
                {isForgotPassword
                  ? " Forgot password"
                  : changePassword
                    ? "Change password"
                    : "Sign in to your account"}
              </Typography>
              <Typography sx={brandLoginStyles.formSubTittleStyle}>
                {isForgotPassword
                  ? "Enter your registered email to get recovery link for password change"
                  : changePassword
                    ? "Enter your new password to proceed further"
                    : "Sign in with your email & password to proceed further"}
              </Typography>
              <Box width={"100%"} mt={"40px"}>
                {!changePassword && (
                  <Box>
                    <InputField
                      variant="filled"
                      label="Email"
                      placeholder=""
                      onChange={(e: any) =>
                        setHandeloginChange("email", e.target.value)
                      }
                      value={loginState?.email}
                      isLabelRequired={false}
                      helperText=""
                      fullWidth
                      required
                      disabled={false}
                      error={Boolean(loginState.error.email)}
                      errorMessage={loginState.error.email}
                      isErrorRequired={Boolean(loginState.error.email)}
                      sx={brandLoginStyles.formInputStyle}
                      errorStyle={{ fontSize: "1.4rem" }}
                    />
                  </Box>
                )}

                {!isForgotPassword && !changePassword && (
                  <Box mt={"20px"}>
                    <InputField
                      variant="filled"
                      label="Password"
                      placeholder=""
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLTextAreaElement | HTMLInputElement
                        >
                      ) => setHandeloginChange("password", e.target.value)}
                      value={loginState?.password}
                      isLabelRequired={false}
                      helperText=""
                      fullWidth
                      required
                      disabled={false}
                      error={Boolean(loginState.error.password)}
                      errorMessage={loginState.error.password}
                      isErrorRequired={Boolean(loginState.error.password)}
                      inputStyle={{}}
                      sx={brandLoginStyles.formInputStyle}
                      errorStyle={{ fontSize: "1.4rem" }}
                      type={passwordvisible ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            style={{ cursor: "pointer" }}
                            onClick={() => togglePasswordVisibility()}
                            position="end"
                          >
                            {passwordvisible
                              ? passwordVisbleIcon
                              : passWordInvisibleIcon}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                )}

                {changePassword && (
                  <Box>
                    <InputField
                      variant="filled"
                      label="Enter new password"
                      placeholder=""
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLTextAreaElement | HTMLInputElement
                        >
                      ) => setResetHandleChange("newPassword", e.target.value)}
                      value={resetPassword?.newPassword}
                      isLabelRequired={false}
                      helperText=""
                      fullWidth
                      required
                      disabled={false}
                      error={Boolean(resetPassword.error.newPassword)}
                      errorMessage={resetPassword.error.newPassword}
                      isErrorRequired={Boolean(resetPassword.error.newPassword)}
                      inputStyle={{}}
                      errorStyle={{ fontSize: "1.4rem" }}
                      sx={{ ...brandLoginStyles.formInputStyle, mt: "2rem" }}
                      type={passwordvisible ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            style={{ cursor: "pointer" }}
                            onClick={() => togglePasswordVisibility()}
                            position="end"
                          >
                            {passwordvisible
                              ? passwordVisbleIcon
                              : passWordInvisibleIcon}
                          </InputAdornment>
                        ),
                      }}
                    />

                    <InputField
                      variant="filled"
                      label="Re-enter new password"
                      placeholder=""
                      onChange={(
                        e: React.ChangeEvent<
                          HTMLTextAreaElement | HTMLInputElement
                        >
                      ) =>
                        setResetHandleChange("confirmPassword", e.target.value)
                      }
                      value={resetPassword?.confirmPassword}
                      isLabelRequired={false}
                      helperText=""
                      fullWidth
                      required
                      disabled={false}
                      error={Boolean(resetPassword.error.confirmPassword)}
                      errorMessage={resetPassword.error.confirmPassword}
                      isErrorRequired={Boolean(
                        resetPassword.error.confirmPassword
                      )}
                      inputStyle={{}}
                      errorStyle={{ fontSize: "1.4rem" }}
                      sx={{ ...brandLoginStyles.formInputStyle, mt: "2rem" }}
                      type={confirmPasswordvisible ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleConfirmPasswordVisibility()}
                            position="end"
                          >
                            {confirmPasswordvisible
                              ? passwordVisbleIcon
                              : passWordInvisibleIcon}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                )}
              </Box>
              {
                isForgotPassword || changePassword ?
                  <BasicButton
                    rootSx={{ width: "100%", mt: "5rem" }}
                    sx={brandLoginStyles.loginButtonStyle}
                    variant="contained"
                    onClick={() => handleSubmit()}>
                    Confirm
                  </BasicButton>
                  :
                  <BasicButton
                    rootSx={{ width: "100%", mt: "5rem" }}
                    sx={brandLoginStyles.loginButtonStyle}
                    variant="contained"
                    onClick={() => handleLogin()}>
                    Login
                  </BasicButton>
              }
            </Stack>
            {
              !isForgotPassword && !changePassword && (
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#888888",
                    margin: "auto",
                    mt: 1,
                  }}
                >
                  {`Version: 0.0.11`}
                </Typography>
              )
            }

            <Box sx={brandLoginStyles.forgotRootStyle}>
              {
                isForgotPassword || changePassword ?
                  <Typography
                    sx={brandLoginStyles.forgotTextStyle}
                    onClick={() => goBack()}
                  >
                    Go back

                  </Typography>
                  :
                  <Typography
                    sx={brandLoginStyles.forgotTextStyle}
                    onClick={() => handleForgotPassword()}
                  >
                    Forgot password
                  </Typography>
              }

            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
};
