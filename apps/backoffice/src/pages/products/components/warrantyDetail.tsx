import { Input } from "@core/ui/atoms"
import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import { productsStyle } from "../style"

export const WarrantyDetail = (props: any) => {
    const {
        addProductState,
        handleChange,
        isError,
        errorMessage } = props
    const timePeriodToggle = [
        {
            name: 'month'
        },
        {
            name: 'year'
        }
    ]
    return (
        <Box>
            <Typography sx={productsStyle?.textSx}>Warranty Details</Typography>
            <Stack direction='row' alignItems={'center'}
                width={'100%'}>
                <Input
                    rootStyle={{ margin: '0' }}
                    type="number"
                    sx={productsStyle?.inputSx}
                    value={addProductState?.warranty_details?.coverage_type}
                    onChange={(e) => handleChange('warranty_details', e?.target?.value, null, 'coverage_type')}
                    placeholder={'Enter warranty duration'}
                />
                <Divider sx={productsStyle?.dividerSx} />

                <Stack direction='row' alignItems={'center'} >
                    {
                        timePeriodToggle?.map((e) => {
                            return (
                                <Box>
                                    <Button
                                        onClick={() =>
                                            handleChange('warranty_details', e?.name, null, 'coverage')} sx={e?.name === addProductState?.warranty_details?.coverage ? productsStyle?.toggleBtnClickedSx : productsStyle?.toggleBtnSx}>
                                        <Typography>{e?.name}</Typography>
                                    </Button>
                                </Box>
                            )
                        })
                    }
                </Stack>
            </Stack>
            {isError && (
                <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
                    {errorMessage}
                </Typography>
            )}
        </Box>
    )
}