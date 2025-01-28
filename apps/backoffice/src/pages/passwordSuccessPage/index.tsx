import { backOfficeRoutes } from "@core/routes";
import { TopBarComponent, } from "@core/ui/components";
import { LinkSentSuccessfullyIcon } from "@core/ui/components/signInCard/renderCardType";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {ProdktLogo} from "../../assets";
import { SuccessStyle } from './style';

export default function PassWordSuccessPage() {

    const navigate = useNavigate();

    return (
        <Box height={'100vh'}>
            <TopBarComponent logo={<ProdktLogo />} />
            <Box sx={SuccessStyle?.rootSx}>
                <Box sx={SuccessStyle?.subrootSx}>
                    <Box sx={SuccessStyle?.cardParentSx}>
                        <Stack sx={SuccessStyle?.rootMainSx} direction={'row'}>
                            <Box sx={SuccessStyle?.cardSx}>
                                <Box width={'100%'}>
                                    <Box sx={SuccessStyle?.linkIconShowSx} pb={4}>
                                        <LinkSentSuccessfullyIcon />
                                    </Box>
                                    <Typography sx={SuccessStyle?.linkSx}>Password Created Successfully</Typography>
                                    <Typography sx={SuccessStyle?.resetMessageSx}>Your new password has been created click to sign in</Typography>
                                    <Box pt={4}>
                                        <Button onClick={() => navigate(backOfficeRoutes.login)} fullWidth sx={SuccessStyle?.submitBtn} variant='contained'>
                                            <Typography >{'Sign In'}</Typography>
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
