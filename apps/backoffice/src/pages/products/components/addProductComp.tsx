import { CutstomizedAutocomplete, Input } from "@core/ui/atoms";
import { Box, Typography } from "@mui/material";
import { productsStyle } from "../style";
import { UploadProductFile } from "../../../components/uploadProductFile";
import { WarrantyDetail } from "./warrantyDetail";
import { drawerComponentInterface } from "../interface";
import { InfoSmallIcon } from "../../../assets";

export const AddProductComp = (props: drawerComponentInterface) => {
    const {
        handleDeleteImage,
        handleChange,
        addProductState,
        handleAddSpecs } = props

    return (
        <>
            <Box p={1}>
                <CutstomizedAutocomplete
                    id={'category_value'}
                    placeholder="Category name"
                    value={addProductState?.category_value}
                    options={addProductState?.category}
                    onChange={(e: any) => handleChange && handleChange('category_value', e)}
                    isError={addProductState?.error?.category_value}
                    errorMessage={addProductState?.error?.category_value}
                />
            </Box>
            {
                (addProductState?.category_value?.extended_warranty ||
                    addProductState?.category_value?.insurance ||
                    addProductState?.category_value?.amc) &&
                <Box p={1}>
                    <Typography sx={productsStyle?.extendDetails}>
                        <Box component={'span'}>
                            <InfoSmallIcon />
                        </Box>
                        {`Extended ${addProductState?.category_value?.extended_warranty === true ? 'Warranty' : ''} ${(addProductState?.category_value?.insurance === true || addProductState?.category_value?.amc === false) ? '& Insurance' : ''} ${addProductState?.category_value?.amc === true ? '& AMC' : ''} applicable`}</Typography>

                </Box>
            }
            {
                addProductState?.category_value?.name.length > 0 && <Box p={1}>
                    <CutstomizedAutocomplete
                        id={'brand_value'}
                        placeholder="Brand name"
                        value={addProductState?.brand_value}
                        options={addProductState?.category_value?.name.length > 0 && addProductState?.brand}
                        onChange={(e: any) => handleChange && handleChange('brand_value', e)}
                        isError={addProductState?.error?.brand_value}
                        errorMessage={addProductState?.error?.brand_value}
                    />
                </Box>
            }

            <Box p={1}>
                <Input
                    sx={productsStyle?.inputSx}
                    placeholder={'Model number'}
                    value={addProductState?.model}
                    onChange={(event) => handleChange && handleChange('model', event?.target?.value)}
                    isError={addProductState?.error?.model}
                    errorMessage={addProductState?.error?.model}
                />
            </Box>
            {
                addProductState?.category_value?.specifications &&
                addProductState?.category_value?.specifications?.length > 0 &&
                addProductState?.category_value?.specifications[0]?.label !== '' &&
                addProductState?.category_value?.specifications?.map((val, i) => {
                    return <Box p={1}>
                        <Input
                            sx={productsStyle?.inputSx}
                            placeholder={val?.label}
                            value={val?.value}
                            onKeyUpCapture={(x) => {
                                if (x.key === 'Enter') {
                                    handleAddSpecs(val?.label, event?.target?.value);
                                }
                            }}
                            onChange={(event) => handleChange && handleChange(val?.label, event?.target?.value, i, 'specifications')}
                        />
                    </Box>
                })

            }
            <Box p={1}>
                <UploadProductFile
                    handleDeleteImage={() => handleDeleteImage('img')}
                    handleChange={(e) =>
                        handleChange && handleChange('img', e?.target?.files)}
                    title={'Set Product image'}
                    format={'JPEG, PNG Only'}
                    file={addProductState?.img}
                    isError={addProductState?.error?.img}
                    errorMessage={addProductState?.error?.img}
                />
            </Box>
            <Box p={1}>
                <WarrantyDetail
                    addProductState={addProductState}
                    handleChange={handleChange}
                    isError={addProductState?.error?.warranty_details}
                    errorMessage={addProductState?.error?.warranty_details} />
            </Box>

            <Box p={1}>
                <UploadProductFile
                    handleDeleteImage={() => handleDeleteImage('document_url')}
                    title={'Upload warranty document'}
                    format={'JPEG, PNG, PDF Only'}
                    handleChange={(e: any) =>
                        handleChange && handleChange('document_url', e?.target?.files)}
                    file={addProductState?.warranty_details?.document_url?.[0]}
                    isError={addProductState?.error?.document_url}
                    errorMessage={addProductState?.error?.document_url}
                />
            </Box>


        </>
    )
}