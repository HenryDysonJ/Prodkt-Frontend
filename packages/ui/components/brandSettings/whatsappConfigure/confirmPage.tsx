import TopBar from "@components/brandTopBar"
import { Box, Grid, Stack, Typography } from "@mui/material"
import { whatsappConfigStyle } from "./style"
import DataIcon from "@assets/brandAssets/dataIcon"
import { useNavigate } from "react-router-dom"
import { useWhatsAppConfig } from "@core/store"


export const WhatsappConfigureDetails = () => {
    const { whatappDetails, setClearAll } = useWhatsAppConfig()
    const history = useNavigate()

    const redirect = () => {
        history(-1)
        setClearAll()
    }

    return (
        <>
            <TopBar title="Configure whatsapp" backBtn backBtnFunc={redirect} titleStyle={{ fontFamily: 'Excon' }} />
            <Grid container px={"115px"}>
                <Grid item xs={12} sx={whatsappConfigStyle.gridSx}>
                    <Box>
                        <Box sx={whatsappConfigStyle.profileSx}>
                            <DataIcon />
                            <Typography sx={whatsappConfigStyle.iconTitle} ml={1}>Access token & other details</Typography>
                        </Box>
                        <Box mt={1.5}>
                            <Typography sx={whatsappConfigStyle.subtitle}>Lorem ipsum text about creating meta developer account or helper text will display here with the subcontent</Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={2} mt={'4px'}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box>
                                <Typography sx={whatsappConfigStyle.subhead}>Access token</Typography>
                                <Typography sx={whatsappConfigStyle.subhead1} mt={1}>{whatappDetails?.access_token ?? ''}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box>
                                <Typography sx={whatsappConfigStyle.subhead}>Whatsapp business ID</Typography>
                                <Typography sx={whatsappConfigStyle.subhead1} mt={1}>{whatappDetails?.whatsapp_business_id ?? ''}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box>
                                <Typography sx={whatsappConfigStyle.subhead}>Phone number ID</Typography>
                                <Typography sx={whatsappConfigStyle.subhead1} mt={1}>{whatappDetails?.phone_number_id ?? ''}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}