import { Box, Button, Typography } from "@mui/material";
import { categoriesStyle } from "../style";

export const RenderDrawerFooter = (props: any) => {
    const { drawerType, editCategoryfn, addCategoryfn } = props
    const renderDrawerFn = () => {
        switch (drawerType) {
            case 'add':
                return <Button
                    id={'updateCategory'}
                    sx={categoriesStyle?.submitBtn}
                    onClick={() => addCategoryfn()}
                    fullWidth
                    variant="contained">
                    <Typography>Add Category</Typography>
                </Button>
                break;
            case 'view':
                return (
                    <Button
                        sx={categoriesStyle?.submitBtn}
                        onClick={() => editCategoryfn()}
                        fullWidth
                        variant="contained">
                        <Typography>Edit Category Details</Typography>
                    </Button>
                )
                break;
            case 'edit':
                return (
                    <Button
                        id={'updateCategory'}
                        sx={categoriesStyle?.submitBtn}
                        onClick={() => addCategoryfn()}
                        fullWidth
                        variant="contained">
                        <Typography>Update Category</Typography>
                    </Button>
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