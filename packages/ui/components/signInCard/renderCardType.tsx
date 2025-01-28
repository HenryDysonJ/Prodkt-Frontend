import { Box, Button, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import { SignInCardStyle } from "./style"
import { Input } from "@atoms/input"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from "react";

import { useLogin } from '@core/store/backOffice'
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { backOfficeRoutes } from "@core/routes";


export const LinkSentSuccessfullyIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
            <path
                fill="#008545"
                d="M48.3 26.308a5.887 5.887 0 0 0-1.646-9.444L44.2 15.706a2.012 2.012 0 0 1-1.137-1.994l.237-2.727a5.891 5.891 0 0 0-2.042-5 5.758 5.758 0 0 0-5.218-1.171l-2.615.712a1.982 1.982 0 0 1-2.138-.789L29.738 2.5a5.744 5.744 0 0 0-9.477 0l-1.552 2.24a1.982 1.982 0 0 1-2.139.788l-2.614-.712A5.747 5.747 0 0 0 8.74 5.987a5.891 5.891 0 0 0-2.043 5l.237 2.728A2.019 2.019 0 0 1 5.8 15.706l-2.458 1.156A5.887 5.887 0 0 0 1.7 26.306l1.91 1.936a2.029 2.029 0 0 1 .4 2.267l-1.15 2.484a5.918 5.918 0 0 0 .233 5.4A5.784 5.784 0 0 0 7.6 41.3l2.7.238a2 2 0 0 1 1.742 1.48l.7 2.645a5.829 5.829 0 0 0 3.609 3.986 5.734 5.734 0 0 0 5.3-.706l2.216-1.573a1.971 1.971 0 0 1 2.276 0l2.218 1.573a5.729 5.729 0 0 0 5.3.706 5.838 5.838 0 0 0 3.609-3.986l.7-2.645a1.991 1.991 0 0 1 1.742-1.48l2.7-.238a5.782 5.782 0 0 0 4.507-2.9 5.919 5.919 0 0 0 .232-5.4l-1.146-2.482a2.029 2.029 0 0 1 .4-2.267Zm-12.8-5.075L22.835 34.054a1.886 1.886 0 0 1-2.689 0l-6.336-6.41a1.938 1.938 0 0 1 0-2.719 1.884 1.884 0 0 1 2.688 0l4.993 5.05 11.327-11.461a1.884 1.884 0 0 1 2.688 0 1.94 1.94 0 0 1 .001 2.719Z"
            />
        </svg>
    )
}

export const RenderCardType = (props: any): JSX.Element => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const [iconAnimation, setIconAnimation] = useState(false)

    const { signUpState, emailState, emailLoading, signUpLoading, handleChangeSignUp, handleChangeSendEmail, handleClickSignUp } = useLogin();


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {
        handleClickSignUp(() => {
            navigate(backOfficeRoutes.userManagement)
        })
    }

    useEffect(() => {
        if (props?.variant === 'linkSuccessfull') {
            setIconAnimation(true);
        }
    }, [props?.variant])


    switch (props?.variant) {
        case 'signIn':
            return (
                <Box width={'100%'}>
                    <Typography sx={SignInCardStyle?.titleSx}>{'Sign In'}</Typography>
                    <Typography sx={SignInCardStyle?.subtitleSx}>{'Sign In with your email and password'}</Typography>
                    <Box py={1}>
                        <Input
                            testid="email"
                            value={signUpState.emailId}
                            isError={signUpState.error.emailId.length ? true : false}
                            isReadOnly={false}
                            errorMessage={signUpState.error.emailId}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangeSignUp('emailId', e.target.value.toLowerCase())}
                            placeholder="Enter email address"
                            testFieldStyle={SignInCardStyle.inputSx}
                        />
                    </Box>
                    <Box py={1}>
                        <OutlinedInput
                            fullWidth
                            id="password"
                            sx={SignInCardStyle.inputSx}
                            value={signUpState.password}
                            error={signUpState.error.password.length ? true : false}
                            placeholder="Enter password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangeSignUp('password', e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {signUpState.error.password &&
                            <Typography sx={{ mt: 0.5 }} variant="caption" color="error.900">
                                {signUpState.error.password}
                            </Typography>
                        }
                    </Box>
                    <Box py={1} sx={SignInCardStyle?.forgotPasswordSx}>
                        <Typography id={'forgotPassword'} pb={3} onClick={props?.forgotPassword}>
                            Forgot Password?
                        </Typography>
                    </Box>
                    <Box py={1}>
                        <LoadingButton loading={signUpLoading} onClick={handleSubmit} fullWidth sx={SignInCardStyle?.submitBtn} variant='contained'>
                            Sign In
                        </LoadingButton>
                    </Box>
                </Box>
            )
            break;
        case 'forgotPassword':
            return <Box width={'100%'}>
                <Typography sx={SignInCardStyle?.titleSx}>{'Forgot Password'}</Typography>
                <Typography sx={SignInCardStyle?.subtitleSx}>{'Enter your to registered email address to reset your password'}</Typography>
                <Box py={1}>
                    <Input
                        testid="emailId"
                        value={emailState.sendEmailId}
                        isError={emailState.error.sendEmailId ? true : false}
                        errorMessage={emailState.error.sendEmailId}
                        onChange={(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChangeSendEmail('sendEmailId', e.target.value)}
                        placeholder="Enter email address"
                        sx={SignInCardStyle.inputSx}
                    />
                </Box>

                <Box pb={1} pt={4} >
                    <LoadingButton loading={emailLoading} fullWidth sx={SignInCardStyle?.submitBtn} onClick={() => props?.sendOTP()} variant='contained'>
                        Send OTP
                    </LoadingButton>
                </Box>
                <Box py={1}>
                    <Typography sx={SignInCardStyle?.signInMesageSx}>
                        Back to <Typography component={"span"} onClick={() => props?.backToSignIn()}>Sign In</Typography> page
                    </Typography>
                </Box>
            </Box>
            break;
        case 'linkSuccessfull':
            return (
                <Box width={'100%'}>
                    <Box sx={iconAnimation ? SignInCardStyle?.linkIconShowSx : SignInCardStyle?.linkIconSx} pb={4}>
                        <LinkSentSuccessfullyIcon />
                    </Box>
                    <Typography sx={SignInCardStyle?.linkSx}>Link Sent</Typography>
                    <Typography sx={SignInCardStyle?.resetMessageSx}>Your password reset link has been sent to your email address</Typography>
                </Box>
            )
        case 'resetPassword':
            return (
                <Box width={'100%'}>
                    <Typography sx={SignInCardStyle?.titleSx}>{'Reset Password'}</Typography>
                    <Typography sx={SignInCardStyle?.subtitleSx}>{'Set your new password to proceed further'}
                    </Typography>
                    <Box py={1}>
                        <OutlinedInput
                            fullWidth
                            sx={SignInCardStyle.inputSx}
                            placeholder="Enter new password"
                            type={props?.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={props?.handleClickShowPassword}
                                        onMouseDown={props?.handleClickShowPassword}
                                        edge="end"
                                    >
                                        {props?.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </Box>
                    <Box py={1}>
                        <OutlinedInput
                            fullWidth
                            sx={SignInCardStyle.inputSx}
                            placeholder="Confirm new password"
                            type={props?.showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={props?.handleClickShowPassword}
                                        onMouseDown={props?.handleClickShowPassword}
                                        edge="end"
                                    >
                                        {props?.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </Box>

                    <Box pt={5}>
                        <Button fullWidth sx={SignInCardStyle?.submitBtn} variant='contained'>
                            <Typography >{'Change Password'}</Typography>
                        </Button>
                    </Box>
                </Box>
            )
        default:
            return <h1></h1>

    }


}