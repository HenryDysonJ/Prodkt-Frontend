import { backOfficeRoutes } from "@core/routes";
import { useLogin } from '@core/store/backOffice';
import { TopBarComponent, } from "@core/ui/components";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {ProdktLogo} from "./../../assets";
import { resetStyle } from './style';

export default function ResetPassword() {

    const location = useLocation();
    const navigate = useNavigate()

    const [token, setToken] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if (token) {
            setToken(token)
        }
    }, [location.search]);


    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)

    const { resetState, handleChangeReset, resetPasswordSend } = useLogin();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword)
    }

    const handleSubmit = () => {
        if (token) {
            resetPasswordSend(token, () => {
                navigate(backOfficeRoutes.success)
            })
        }
    }

    return (
        <Box height={'100vh'}>
            <TopBarComponent logo={<ProdktLogo />} />
            <Box sx={resetStyle?.rootSx}>
                <Box sx={resetStyle?.subrootSx}>
                    <Box sx={resetStyle?.cardParentSx}>
                        <Stack sx={resetStyle?.rootMainSx} direction={'row'}>
                            <Box sx={resetStyle?.cardSx}>
                                <Box width={'100%'}>
                                    <Typography sx={resetStyle?.titleSx}>{'Reset Password'}</Typography>
                                    <Typography sx={resetStyle?.subtitleSx}>{'Set your new password to proceed further'}
                                    </Typography>
                                    <Box py={1}>
                                        <OutlinedInput
                                            fullWidth
                                            sx={resetStyle.inputSx}
                                            placeholder="Enter new password"
                                            value={resetState.newPassword}
                                            error={resetState.error.newPassword ? true : false}
                                            onChange={(e) => handleChangeReset('newPassword', e.target.value)}
                                            type={showPassword ? 'text' : 'password'}
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
                                        {resetState.error.newPassword &&
                                            <Typography sx={{ mt: 0.5 }} variant="caption" color="error.900">
                                                {resetState.error.newPassword}
                                            </Typography>
                                        }
                                    </Box>
                                    <Box py={1}>
                                        <OutlinedInput
                                            fullWidth
                                            sx={resetStyle.inputSx}
                                            placeholder="Confirm new password"
                                            value={resetState.confirmPassword}
                                            error={resetState.error.confirmPassword ? true : false}
                                            onChange={(e) => handleChangeReset('confirmPassword', e.target.value)}
                                            type={showNewPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowNewPassword}
                                                        onMouseDown={handleClickShowNewPassword}
                                                        edge="end"
                                                    >
                                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        {resetState.error.confirmPassword &&
                                            <Typography sx={{ mt: 0.5 }} variant="caption" color="error.900">
                                                {resetState.error.confirmPassword}
                                            </Typography>
                                        }
                                    </Box>

                                    <Box pt={5}>
                                        <Button onClick={handleSubmit} fullWidth sx={resetStyle?.submitBtn} variant='contained'>
                                            <Typography >{'Change Password'}</Typography>
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
