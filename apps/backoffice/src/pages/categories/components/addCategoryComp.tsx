import { CutstomizedAutocomplete, Input } from "@core/ui/atoms";
import { Box, Stack, Typography } from "@mui/material";
import { categoriesStyle } from "../style";
import { UploadProductFile } from "../../../components/uploadProductFile";
import { CoverageDetails } from "./coverageDetails";
import DoneIcon from '@mui/icons-material/Done';

export const AddCategoryComp = (props: any) => {
    const {
        handleDeleteImage,
        handleChange,
        addProductState,
        handleAddSpecs,
        handleUndoSpecs } = props

    const value = addProductState?.category_type_value?.id?.length > 0 ?
        [addProductState?.category_type_value] :
        addProductState?.category_type?.filter((e: { name: '', id: '' }) => e?.id === addProductState?.category_id && e)

        
    return (
        <>
            <Box p={1}>
                <Input
                    sx={categoriesStyle?.inputSx}
                    id="category_name"
                    placeholder="Category Name"
                    value={addProductState?.category_name}
                    onChange={(e) => handleChange && handleChange('category_name', e?.target?.value)}
                    isError={addProductState?.error?.category_name}
                    errorMessage={addProductState?.error?.category_name}
                />
            </Box>
            <Box p={1}>
                <CutstomizedAutocomplete
                    placeholder="Choose category Type"
                    value={value?.length > 0 ? value[0] : {
                        id: '',
                        name: ''
                    }}
                    options={addProductState?.category_type}
                    onChange={(e: any) => handleChange && handleChange('category_type_value', e)}
                    isError={addProductState?.error?.category_type}
                    errorMessage={addProductState?.error?.category_type}
                />
            </Box>
            <Box p={1}>
                <UploadProductFile
                    handleDeleteImage={() => handleDeleteImage('image_url')}
                    handleChange={(e: any) =>
                        handleChange && handleChange('image_url', e?.target?.files, 'upload')}
                    key={'image_url'}
                    title={'Set Category Image'}
                    format={'JPEG, PNG Only'}
                    file={addProductState?.image_url}
                    isError={addProductState?.error?.image_url}
                    errorMessage={addProductState?.error?.image_url}
                    dataId="uploadImg"

                />
            </Box>
            <Box p={1}>
                <UploadProductFile
                    handleDeleteImage={() => handleDeleteImage('icon')}
                    title={'Set Category Icon'}
                    format={'JPEG, PNG, PDF Only'}
                    handleChange={(e: any) =>
                        handleChange && handleChange('icon', e?.target?.files, 'upload')}
                    key={'icon'}
                    file={addProductState?.icon}
                    isError={addProductState?.error?.icon}
                    errorMessage={addProductState?.error?.icon}
                    dataId="uploadIcon"
                />
            </Box>

            <Box p={1}>
                {
                    addProductState?.specifications?.length > 0 && <Box>
                        <Typography sx={categoriesStyle?.addedfieldSx}>Add Fields</Typography>
                        <Stack direction='row' alignItems={'center'} sx={categoriesStyle?.stackItemSx}>
                            {
                                addProductState?.specifications?.[0]?.label && addProductState?.specifications?.map((e: { label: string, value: string, is_active: boolean }, i: number) => (
                                    <Box sx={!e?.is_active ? categoriesStyle?.addSpecListBox : categoriesStyle?.activeSpecListBox}>
                                        <Box
                                            id={e?.label}
                                            onClick={() => handleUndoSpecs(e, i, addProductState?.specifications)}>
                                            <Typography sx={!e?.is_active ? categoriesStyle?.specText : categoriesStyle?.activeSpecText}>
                                                {e?.is_active &&
                                                    <Box component='span' sx={e?.is_active && categoriesStyle?.doneIcon}>
                                                        <DoneIcon />
                                                    </Box>}
                                                {e?.label}</Typography>
                                        </Box>
                                    </Box>
                                )
                                )
                            }
                            <Box component={'span'} my={1}>
                                <Stack direction={'row'} alignItems={'center'} width='100%'>
                                    <Input
                                        rootStyle={{ margin: '0' }}
                                        sx={categoriesStyle?.inputSx}
                                        onChange={(e) => handleChange('customSpecs', e?.target?.value)}
                                        value={addProductState?.customSpecs}
                                        placeholder={'Customized Field'}
                                        id="customize"
                                        onKeyUpCapture={(e) => {
                                            if (e.key === 'Enter') {
                                                handleAddSpecs();
                                            }
                                        }}
                                    />
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                }
            </Box>
            <Box p={1}>
                <Typography mb={1} sx={categoriesStyle?.addedfieldSx}>Serial Number Info</Typography>
                <Input
                id="serialNo"
                    multiline
                    maxRows={'5'}
                    sx={categoriesStyle?.textAreaSx}
                    placeholder="Write a description about where to find serial number"
                    value={addProductState?.serial_no?.info_text}
                    onChange={(e) => handleChange && handleChange('serial_no', e?.target?.value)}
                    isError={addProductState?.error?.serial_no}
                    errorMessage={addProductState?.error?.serial_no}
                />
            </Box>
            <Box p={1}>
                <CoverageDetails
                    addProductState={addProductState}
                    handleChange={handleChange} />
            </Box>
        </>
    )
}