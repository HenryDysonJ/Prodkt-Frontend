import { Box, Button, Stack, Typography } from "@mui/material";
import { productsStyle } from "../style";

export const RenderDrawerFooter = (props: any) => {
    const { drawerType,
        applyFilter,
        addProduct,
        clearAll,
    } = props
    const renderDrawerFn = () => {
        switch (drawerType) {
            case 'singleRequestDrawer':
                return <Button
                    sx={productsStyle?.submitBtn}
                    onClick={() => addProduct()}
                    fullWidth
                    variant="contained">
                    <Typography>Add Product</Typography>
                </Button>
                break;
            case 'add':
                return <Button
                    sx={productsStyle?.submitBtn}
                    onClick={() => addProduct()}
                    fullWidth
                    variant="contained">
                    <Typography>Add Product</Typography>
                </Button>
                break;
            case 'filter':
                return (
                    <Stack direction={'row'} spacing={1} width={'100%'}>
                        <Box width={'50%'}>
                            <Button
                                sx={productsStyle?.resetBtn}
                                fullWidth
                                id={'reset'}
                                onClick={() => clearAll()}
                                >
                                <Typography>Reset All</Typography>
                            </Button>
                        </Box>
                        <Box width={'50%'}>
                            <Button
                                sx={productsStyle?.submitBtn}
                                fullWidth
                                onClick={() => applyFilter()}
                                variant="contained">
                                <Typography>Apply Filter</Typography>
                            </Button>
                        </Box>
                    </Stack>
                )
                break;
            default:
                break;
        }
    }

    return (
        <Box p={2}>
            {renderDrawerFn()}
        </Box>
    )
}