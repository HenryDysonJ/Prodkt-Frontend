import React, { useState } from "react";
import { Box, Collapse, Divider, List, ListItem, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { ProdktLogo, NotifyBell, CrayondLogoIcon, LogoutIcon } from "../../assets";
import { SideBarList } from "./sideBarList";
import { NavBarStyles } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { backOfficeRoutes } from "@core/routes";


const BothNavBars = <P extends { children?: React.ReactNode; }>(Component: React.ComponentType<P>) => (
    props: P
) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [collapse, setCollapse] = useState<number | null | boolean>(true)
    const [open, setOpen] = useState<boolean>(false)
    const [initiaItem, setInitialItem] = useState<boolean>(true)


    const onListClick = (item: object, index?: number) => {
        navigate(item?.link)
        setInitialItem(false)
    }
    const handleCollapse = (index: number) => {
        setCollapse(index === collapse ? -1 : index)
        setInitialItem(false)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logOut = () => {
        localStorage.clear()
        navigate(backOfficeRoutes?.login)
    }

    return (
        <Box sx={NavBarStyles.root}>
            {/* Your nav bars here */}
            <Stack sx={NavBarStyles?.topbarSx} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <ProdktLogo />
                </Box>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'} sx={NavBarStyles?.rightLoginSx}>
                    <Box>
                        <NotifyBell />
                    </Box>
                    <Divider sx={NavBarStyles?.dividerSx} />
                    <Stack sx={NavBarStyles?.childStackSx} id="profileMenu" direction={'row'} alignItems={'center'} justifyContent={'space-between'} onClick={() => setOpen(true)}>
                        <Box>
                            <CrayondLogoIcon />
                        </Box>
                        <Box>
                            <Typography sx={NavBarStyles?.adminName}>Jeffrey</Typography>
                            <Typography sx={NavBarStyles?.adminText}>Admin</Typography>
                        </Box>
                        <Box>
                            <ExpandMoreIcon sx={{ fontSize: '18px', color: '#0E1824' }} />
                        </Box>
                    </Stack>
                </Stack>
            </Stack>

            {/* Content */}
            <Box sx={NavBarStyles.content}>
                <Stack direction={'row'} width={'100%'} alignItems={'center'}>
                    <Box sx={NavBarStyles?.subRootSx} height={'calc(100vh - 70px)'}>
                        <List>
                            {
                                SideBarList?.map((item, index) => {
                                    const isSelected = item?.link === pathname;
                                    return <ListItem
                                        sx={{ display: 'block', cursor: 'pointer' }}
                                        key={index}
                                        id={`navbar${index}`}
                                        onClick={() => !item?.sublinks ? onListClick(item) : handleCollapse(index)}
                                        disablePadding
                                    >
                                        <Stack
                                            sx={isSelected ? NavBarStyles?.listItemSelectedSx : NavBarStyles?.listItemSx}
                                            width={'100%'} direction={'row'} alignItems={'center'}
                                            justifyContent={'space-between'}>
                                            <Box
                                                sx={NavBarStyles?.listItemIconSx}
                                            >
                                                {item?.icon(isSelected)}
                                            </Box>
                                            <Typography
                                                sx={NavBarStyles?.listItemTextSx}>
                                                {item?.name}
                                            </Typography>
                                            <Box sx={NavBarStyles?.listDropDownSx} >
                                                {item?.sublinks ?
                                                    item?.sublinks?.map((e) => e?.link).includes(pathname) || collapse === index ? (
                                                        <Box>
                                                            <ExpandMoreIcon sx={{ fontSize: '18px', color: '#29302B' }} />
                                                        </Box>
                                                    ) : (
                                                        <ChevronRightIcon sx={{ fontSize: '18px', color: '#29302B' }} />
                                                    ) : null
                                                }
                                            </Box>
                                        </Stack>
                                        {
                                            item?.sublinks?.map((subItem, subIndex) => {
                                                const isSubSelected = subItem?.link === pathname;
                                                return (
                                                    <Collapse key={subIndex}
                                                        in={(initiaItem ? item?.sublinks?.map((e) => e?.link).includes(pathname) : false) || collapse === index}
                                                        timeout="auto" unmountOnExit
                                                    >
                                                        <List component="div" disablePadding>
                                                            <ListItem
                                                                key={subIndex}
                                                                disablePadding
                                                                sx={{ display: 'block', cursor: 'pointer' }}
                                                            >
                                                                <Stack
                                                                    sx={isSubSelected ? NavBarStyles?.listItemSelectedSx : NavBarStyles?.listItemSx}
                                                                    id={`subNav${subIndex}`}
                                                                    onClick={(e) => onListClick(subItem, subIndex)}
                                                                    width={'100%'} direction={'row'} alignItems={'center'}
                                                                    justifyContent={'space-between'}>
                                                                    <Typography
                                                                        pl={'26px'}
                                                                        sx={NavBarStyles?.listItemTextSx}>
                                                                        {subItem?.name}
                                                                    </Typography>
                                                                </Stack>
                                                            </ListItem>

                                                        </List>
                                                    </Collapse>
                                                )
                                            })
                                        }
                                    </ListItem>
                                })
                            }
                        </List>
                    </Box>
                    <Box sx={NavBarStyles?.componentBoxSx}>
                        <Component {...props}>{props?.children}</Component>
                    </Box>
                </Stack>
            </Box >

            <Menu
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        width: '170px',
                        height: 'auto',
                        top: '65px !important',
                        background: '#fff !important',
                        borderRadius: '8px',
                        border: '1px solid #E3E3E3',
                    },
                    '& .MuiList-root': {
                        paddingTop: '0px',
                        background: '#fff !important',
                        paddingBottom: '0px'
                    },
                    '& .MuiMenuItem-root': {
                        background: '#fff !important',
                    }
                }}
            >
                <MenuItem onClick={() => logOut()} id="logout">
                    <Stack direction={'row'} alignItems={'center'} sx={NavBarStyles.profileSec}>
                        <Box pr={2} p={1}>
                            <LogoutIcon />
                        </Box>
                        <Typography sx={NavBarStyles.menutext}>Logout</Typography>
                    </Stack>
                </MenuItem>
            </Menu>
        </Box >
    );
};
export default BothNavBars
