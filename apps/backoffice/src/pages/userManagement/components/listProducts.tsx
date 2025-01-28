import { Box, Collapse, Grid, Stack, Typography } from "@mui/material"
import { userManagementStyle } from "../style"
import { CollapseDownIcon, CollapseUpIcon } from "../../../assets";
import { userProductsInterface } from "@core/store/interface";

export const ListProducts = (props: any) => {
    return (
        <>
            {
                props?.products?.map((e: userProductsInterface, index: number) => (
                    <Box width={'100%'} >
                        <Box mb={1} sx={userManagementStyle?.collapseItemSx}>
                            <Stack sx={userManagementStyle?.titleBoxSx} direction={'row'} alignItems={'center'} onClick={() => props?.handleCollapseOpen(index)}>
                                <Box sx={userManagementStyle?.iconSx} p={2}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={e.image ? e.image : 'https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg'} alt="img" />
                                </Box>
                                <Stack direction={'row'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} p={2}>
                                    <Box sx={userManagementStyle?.collapseTitleSx}>
                                        <Typography>{e?.product_name}</Typography>
                                    </Box>
                                    {
                                        <Box>
                                            {
                                                props?.collapse === index ? <CollapseDownIcon /> : <CollapseUpIcon />
                                            }
                                        </Box>
                                    }
                                </Stack>
                            </Stack>
                            <Collapse key={index}
                                in={props?.collapse === index}
                                timeout="auto" unmountOnExit
                            >
                                <Box>
                                    <Grid container alignItems={'center'}>
                                        {e.item.map((item: any) => {
                                            return (
                                                <Grid item xs={6}>
                                                    <Box p={1}>
                                                        <Typography sx={userManagementStyle?.collapseLabelSx}>{item?.label ?? 'nill'}</Typography>
                                                        <Typography pt={1} sx={userManagementStyle?.collapseValueSx}>{item?.value ?? 'nill'}</Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Box>
                            </Collapse>
                        </Box>
                    </Box>
                ))
            }
        </>
    )
}