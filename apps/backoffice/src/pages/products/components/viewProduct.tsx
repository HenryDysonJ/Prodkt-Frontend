import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import { productsStyle } from "../style"
import { CopyIcon } from "../../../assets"
import { useState } from "react"
import { AddProductStateInterface } from "@core/store/interface"


export const ViewProduct = (props: { viewProductDetails: AddProductStateInterface }) => {
    const { viewProductDetials } = props

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyAPIkey = async () => {
        try {
            await navigator.clipboard.writeText(viewProductDetials?.warranty_details
                ?.document_url);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(true);
            }, 1500);

        } catch (err) {
            setIsCopied(false);
        }
    };

    return (
        <Box width={'100%'} >
            <Box mb={1} sx={productsStyle?.collapseItemSx}>
                <Stack sx={productsStyle?.titleBoxSx} direction={'row'} alignItems={'center'}>
                    <Box sx={productsStyle?.iconSx} p={2}>
                        <img src={viewProductDetials?.img}></img>
                    </Box>
                    <Stack direction={'row'} alignItems={'center'} p={2}>
                        <Box sx={productsStyle?.collapseTitleSx}>
                            <Typography>{viewProductDetials?.product_name}</Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Box>
                    <Grid container py={2}>
                        <Grid item xs={4}>
                            <Box p={1}>
                                <Typography sx={productsStyle?.collapseLabelSx}>Brand Name</Typography>
                                <Typography pt={1} sx={productsStyle?.collapseValueSx}>{viewProductDetials?.brand ?? '-'}</Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={4}>
                            <Box p={1}>
                                <Typography sx={productsStyle?.collapseLabelSx}>Model Number</Typography>
                                <Typography pt={1} sx={productsStyle?.collapseValueSx}>{viewProductDetials?.model ?? '-'}</Typography>
                            </Box>
                        </Grid>
                        {
                            viewProductDetials?.specifications?.map((e:
                                { label: string; value: string }) => {
                                return (
                                    <Grid item xs={4}>
                                        <Box p={1}>
                                            <Typography sx={productsStyle?.collapseLabelSx}>{e?.label}</Typography>
                                            <Typography pt={1} sx={productsStyle?.collapseValueSx}>{e?.value}</Typography>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Box p={1}>
                        <Typography sx={productsStyle?.labelSx}>{'Warranty Details'}</Typography>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography pt={1} sx={productsStyle?.valueSx}>
                                {viewProductDetials?.warranty_details
                                    ?.document_url?.[0]}</Typography>
                            <IconButton id="copy" sx={productsStyle?.copyIconSx}
                                onClick={handleCopyAPIkey}>
                                <CopyIcon />
                            </IconButton>
                        </Stack>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}