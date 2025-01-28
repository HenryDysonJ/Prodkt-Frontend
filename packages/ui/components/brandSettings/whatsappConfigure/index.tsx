import DataIcon from "@assets/brandAssets/dataIcon"
import ProfileIcon from "@assets/brandAssets/profile"
import { SupportIcon } from "@assets/brandAssets/supportIcon"
import { Button } from "@atoms/button"
import TopBar from "@components/brandTopBar"
import { DialogBox } from "@crayond_dev/ui_dialog"
import { InputField } from "@crayond_dev/ui_input-field"
import { Box, CircularProgress, Divider, Grid, Typography } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom"
import { whatsappConfigStyle } from "./style"
import PlayIcon from "@assets/brandAssets/playIcon"
import { useWhatsAppConfig } from "@core/store"


export const WhatsappConfigure = () => {

    const { getWhatsappConfigureDetails, whatappDetails, handleChangeWhatsappConfig, updateWhatsappConfig, setFieldError, error } = useWhatsAppConfig()

    const [open, setOpen] = useState(false)
    const [videoLoading, setVideoLoading] = useState(true);

    const navigate = useNavigate()

    const validateValues = () => {
        let isValid = true;
        if (!whatappDetails?.access_token) {
            setFieldError('access_token', 'Access Token is required');
            isValid = false;
        }
        if (!whatappDetails?.whatsapp_business_id) {
            setFieldError('whatsapp_business_id', 'Whatsapp business ID is required');
            isValid = false;
        }
        if (!whatappDetails?.phone_number_id) {
            setFieldError('phone_number_id', 'Phone number ID required');
            isValid = false;
        }
        return isValid;
    };


    const redirect = () => {
        if (validateValues()) {
            updateWhatsappConfig()
            navigate('/settings/configure-whatsapp-details')
        }
    }
    const handleVideoReady = () => {
        setVideoLoading(false);
    };

    useEffect(() => {
        getWhatsappConfigureDetails()
    }, [])
    return (
        <>
            <TopBar title="Configure whatsapp" titleStyle={{ fontFamily: 'Excon' }} containButtonText="Confirm" handleClickContainButton={redirect}></TopBar>

            <Grid container px={"115px"}>
                <Grid item xs={12} sx={whatsappConfigStyle.gridSx}>
                    <Typography sx={whatsappConfigStyle.titleSx}>Setup your whatsapp business account</Typography>

                    <Box sx={whatsappConfigStyle.createBox}>
                        <Box sx={whatsappConfigStyle.profileSx}>
                            <ProfileIcon />
                            <Typography sx={whatsappConfigStyle.iconTitle} ml={1}>Create meta developer account & add your app</Typography>
                        </Box>
                        <Box sx={whatsappConfigStyle.contentBox}>
                            <Box >
                                <Typography sx={whatsappConfigStyle.subtitle}>Lorem ipsum text about creating meta developer account or helper text will display here with the subcontent</Typography>
                                <Typography sx={whatsappConfigStyle.linkSx} onClick={() => setOpen(true)}>Click here to watch demo video</Typography>
                            </Box>
                            <Button
                                target="_blank"
                                href="https://business.facebook.com/business/loginpage/?next=https%3A%2F%2Fdevelopers.facebook.com%2F%3Fnav_ref%3Dbiz_unified_f3_login_page_to_dfc&app=436761779744620&login_options%5B0%5D=FB&login_options%5B1%5D=SSO&is_work_accounts=1&config_ref=biz_login_tool_flavor_dfc"
                                variant="contained" sx={whatsappConfigStyle.createBtnSx}>Create/ signin </Button>
                        </Box>
                    </Box>
                    <Box sx={whatsappConfigStyle.createBox}>
                        <Box sx={whatsappConfigStyle.profileSx}>
                            <DataIcon />
                            <Typography sx={whatsappConfigStyle.iconTitle} ml={1}>Provide access token & other details</Typography>
                        </Box>
                        <Box ml={'26px'}>
                            <Box >
                                <Typography sx={whatsappConfigStyle.subtitle} mt={1}>Lorem ipsum text about creating meta developer account or helper text will display here with the subcontent</Typography>
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <InputField
                                        variant="filled"
                                        label="Access token"
                                        placeholder="Enter Access token"
                                        fullWidth
                                        required
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeWhatsappConfig('access_token', e.target.value)}
                                        value={whatappDetails?.access_token}
                                        error={error?.access_token?.length ? true : false}
                                        errorMessage={error?.access_token}
                                        isErrorRequired={error?.access_token?.length ? true : false}
                                        inputStyle={{
                                            'width': '100%',
                                            '& .MuiInputLabel-root': {
                                                fontSize: '1.2rem',
                                                color: '#4E585E',
                                                mt: '0.5rem',
                                            },
                                        }}
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                "& .MuiFilledInput-input": {
                                                    fontSize: '1.4rem'
                                                }
                                            }, mt: 2,
                                        }}
                                        labelStyle={{
                                            '& .MuiInputLabel-root': {
                                                fontSize: '1.2rem',
                                                color: '#4E585E',
                                                mt: '0.5rem',
                                            },
                                        }}
                                        errorStyle={{ fontSize: '1.0rem' }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <InputField
                                        variant="filled"
                                        label="Whatsapp business ID"
                                        placeholder="Enter Whatsapp business ID"
                                        fullWidth
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeWhatsappConfig('whatsapp_business_id', e.target.value)}
                                        value={whatappDetails?.whatsapp_business_id}
                                        error={error?.whatsapp_business_id?.length ? true : false}
                                        errorMessage={error?.whatsapp_business_id}
                                        isErrorRequired={error?.whatsapp_business_id?.length ? true : false}
                                        required
                                        inputStyle={{
                                            'width': '100%',
                                            '& .MuiInputLabel-root': {
                                                fontSize: '1.2rem',
                                                color: '#4E585E',
                                                mt: '0.5rem',
                                            },
                                        }}
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                "& .MuiFilledInput-input": {
                                                    fontSize: '1.4rem'
                                                }
                                            }, mt: 2,
                                        }}
                                        labelStyle={{
                                            '& .MuiInputLabel-root': {
                                                fontSize: '1.2rem',
                                                color: '#4E585E',
                                                mt: '0.5rem',
                                            },
                                        }}
                                        errorStyle={{ fontSize: '1.0rem' }}
                                    />                                </Grid>
                                <Grid item xs={4}>
                                    <InputField
                                        variant="filled"
                                        label="Phone number ID"
                                        placeholder="Enter Phone number ID"
                                        fullWidth
                                        required
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeWhatsappConfig('phone_number_id', e.target.value)}
                                        value={whatappDetails?.phone_number_id}
                                        error={error?.phone_number_id?.length ? true : false}
                                        errorMessage={error?.phone_number_id}
                                        isErrorRequired={error?.phone_number_id?.length ? true : false}
                                        inputStyle={{
                                            'width': '100%',
                                            '& .MuiInputLabel-root': {
                                                fontSize: '1.2rem',
                                                color: '#4E585E',
                                                mt: '0.5rem',
                                            },
                                        }}
                                        sx={{
                                            '& .MuiFilledInput-root': {
                                                "& .MuiFilledInput-input": {
                                                    fontSize: '1.4rem'
                                                }
                                            }, mt: 2,
                                        }}
                                        labelStyle={{
                                            '& .MuiInputLabel-root': {
                                                fontSize: '1.2rem',
                                                color: '#4E585E',
                                                mt: '0.5rem',
                                            },
                                        }}
                                        errorStyle={{ fontSize: '1.0rem' }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} mt={1.2} mb={1.2}>

                        <Divider sx={whatsappConfigStyle.dividerSx}></Divider>
                        <Typography sx={whatsappConfigStyle.orSx}>Or</Typography>
                        <Divider sx={whatsappConfigStyle.dividerSx}></Divider>
                    </Box>
                    <Box sx={{ ...whatsappConfigStyle.createBox, marginTop: 0 }}>
                        <Box display={'flex'} p={'4px'}>
                            <SupportIcon />
                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'} ml={'20px'}>
                                <Box>
                                    <Typography sx={whatsappConfigStyle.iconTitle} >Get help from us for whatsapp configuration</Typography>
                                    <Typography sx={whatsappConfigStyle.subtitle} mt={'6px'}>Lorem ipsum text about creating meta developer account or helper text will display here with the subcontent</Typography>
                                </Box>
                                <Button variant="contained" sx={whatsappConfigStyle.createBtnSx}>Get help </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <DialogBox
                open={open}
                handleClose={() => setOpen(false)}
                title={""}
                maxWidth="md"
                dialogmodalBoxStyle={whatsappConfigStyle.dialogmodal}
                dialogBodyStyle={whatsappConfigStyle.dialogBodyStyle}
                Body={
                    <Box sx={whatsappConfigStyle.videoSx}>
                        <Box display={'grid'} justifyContent={'center'} alignItems={'center'} height={'306px'}>
                            {videoLoading && <CircularProgress />}
                            <ReactPlayer
                                url={'https://www.youtube.com/watch?v=9xwazD5SyVg&ab_channel=MaximilianMustermann'}
                                height='306px'
                                width='858px'
                                style={{ borderRadius: '8px', display: videoLoading ? 'none' : 'block' }}
                                playIcon={<PlayIcon />}
                                onReady={handleVideoReady}
                            />
                        </Box>

                    </Box>
                }

            />
        </>
    )
} 