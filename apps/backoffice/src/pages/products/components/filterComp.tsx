import { CutstomizedAutocomplete, Input } from "@core/ui/atoms";
import { Box } from "@mui/material";
import { productsStyle } from "../style";

export const FilterComp = (props: any) => {
    const { addProductState, handleChange } = props
    return (
        <>
            <Box p={1}>
                <CutstomizedAutocomplete
                    placeholder="Choose category name"
                    value={addProductState?.category_value}
                    options={addProductState?.category ?? []}
                    onChange={(e: any) => handleChange && handleChange('category_value', e)}
                    id={'category_value'}
                />
            </Box>
            <Box p={1}>
                <CutstomizedAutocomplete
                    placeholder="Choose brand name"
                    value={addProductState?.brand_value ?? ''}
                    options={addProductState?.brand ?? []}
                    onChange={(e: any) => handleChange && handleChange('brand_value', e)}
                    id={'brand_value'}
                />
            </Box>
        </>
    )
}