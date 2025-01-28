import React from "react";
import { Box, Stack } from "@mui/material";
import { NavBarStyles } from "./style";
import { ProdktLogo } from "../../assets";

const SingleNavBars = <P extends { children?: React.ReactNode; }>(Component: React.ComponentType<P>) => (
    props: P
) => {

    return (
        <Box sx={NavBarStyles.root}>
            {/* Your nav bars here */}
            <Stack sx={NavBarStyles?.topbarSx} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <ProdktLogo />
                </Box>
            </Stack>
            {/* Content */}
            <Box sx={NavBarStyles.content}>
                <Box sx={{ height: 'calc(100vh - 70px)', width: '100%' }}>
                    <Component {...props}>{props?.children}</Component>
                </Box>
            </Box >

        </Box >
    );
};
export default SingleNavBars
