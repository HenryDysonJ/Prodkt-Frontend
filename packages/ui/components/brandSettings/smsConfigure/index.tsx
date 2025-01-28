import PlayIcon from "@assets/brandAssets/playIcon"
import ProfileIcon from "@assets/brandAssets/profile"
import { SupportIcon } from "@assets/brandAssets/supportIcon"
import { Button } from "@atoms/button"
import TopBar from "@components/brandTopBar"
import { DialogBox } from "@crayond_dev/ui_dialog"
import { Box, CircularProgress, Divider, Grid, Typography } from "@mui/material"
import { useState } from "react"
import ReactPlayer from 'react-player'
import { whatsappConfigStyle } from "./style"
import { OtpInputButton } from "@atoms/otpInput"

export const SmsConfigure = () => {
    const [open, setOpen] = useState(false)
    const [videoLoading, setVideoLoading] = useState(true);
   
    const handleVideoReady = () => {
        setVideoLoading(false);
    };
    return (
        <>
            <TopBar title="Configure SMS" titleStyle={{ fontFamily: 'Excon' }}></TopBar>

            <Grid container px={"115px"}>
                <Grid item xs={12} sx={whatsappConfigStyle.gridSx}>
                    <Typography sx={whatsappConfigStyle.titleSx}>Setup your SMS</Typography>

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
                            <Button variant="contained" sx={whatsappConfigStyle.createBtnSx}>Create/ signin </Button>
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