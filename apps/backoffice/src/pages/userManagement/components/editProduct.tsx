import { Input } from "@core/ui/atoms";
import { Box, Button } from "@mui/material";
import { userManagementStyle } from "../style";
import { PhoneIcon, MailIcon } from "../../../assets";
export const EditProduct = (props: any) => {
    return (
        <>
            <Box p={1}>
                <Input
                    sx={userManagementStyle?.inputProductSx}
                    errorMessage={props?.editProduct?.error?.user_name}
                    isError={props?.editProduct?.error?.user_name ? true : false}
                    value={props?.editProduct?.user_name}
                    onChange={(e) => props?.handleChange('user_name', e?.target?.value)}
                />
            </Box>
            <Box p={1}>
                <Input
                    sx={userManagementStyle?.inputProductSx}
                    errorMessage={props?.editProduct?.error?.phone_number}
                    isError={props?.editProduct?.error?.phone_number ? true : false}
                    value={props?.editProduct?.phone_number}
                    type="number"
                    onChange={(e) => props?.handleChange('phone_number', e?.target?.value, 10)}
                    endAdornment={<PhoneIcon />} />
            </Box>
            <Box p={1}>
                <Input
                    sx={userManagementStyle?.inputProductSx}
                    errorMessage={props?.editProduct?.error?.email_id}
                    isError={props?.editProduct?.error?.email_id ? true : false}
                    value={props?.editProduct?.email_id}
                    onChange={(e) => props?.handleChange('email_id', e?.target?.value)}
                    endAdornment={<MailIcon />} />
            </Box>
        </>
    )
}