import { Box, Stack, Typography } from "@mui/material"
import { categoriesStyle } from "../style"
import { CategoryStateInterface } from "@core/store/interface"
import { CategoryDummyIcon } from "../../../assets"

export const ViewCategory = (props:
    { viewCategoryDetials: CategoryStateInterface }) => {
    const { viewCategoryDetials } = props

    
    return (
        <Box width={'100%'} >
            <Box mb={1} sx={categoriesStyle?.collapseItemSx}>
                <Stack sx={categoriesStyle?.titleBoxSx} direction={'row'} alignItems={'center'}>
                    <Box sx={categoriesStyle?.drawerBoxiconSx} p={2}>
                        {
                            viewCategoryDetials?.image_url?.url ? <img src={viewCategoryDetials?.image_url?.url} alt='specsCard'></img>
                                :
                                <CategoryDummyIcon />
                        }
                    </Box>
                    <Stack direction={'row'} alignItems={'center'} p={2}>
                        <Box sx={categoriesStyle?.collapseTitleSx}>
                            <Typography>{viewCategoryDetials?.category_name}</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
            {
                viewCategoryDetials?.specifications &&
                <Box>
                    <Typography my={1} sx={categoriesStyle?.addedfieldSx}>Added fields</Typography>

                    <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
                        <Box sx={categoriesStyle?.specListBox}>
                            <Box >
                                <Typography sx={categoriesStyle?.specText}>Brand Name</Typography>
                            </Box>
                        </Box>
                        <Box sx={categoriesStyle?.specListBox}>
                            <Box >
                                <Typography sx={categoriesStyle?.specText}>Model Number</Typography>
                            </Box>
                        </Box>
                        {
                            viewCategoryDetials?.specifications?.map((e, i: number) => {
                                return (
                                    <Box sx={categoriesStyle?.specListBox}>
                                        <Box >
                                            <Typography sx={categoriesStyle?.specText}>{e?.label}</Typography>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Stack>
                </Box>
            }
        </Box>
    )
}