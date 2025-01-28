import { Box, Button, Typography } from '@mui/material';
import { uploadProductFileStyle } from './style'
import FileUploadIcon from '@mui/icons-material/FileUpload';
export const Upload = (props: any) => {
    const {
        handleChange,
        dataId,
    } = props

    return (
        <Box>
            <Box>
                <Button
                    fullWidth
                    component="label"
                    data-testid="uploadDocumentLabel"
                    sx={uploadProductFileStyle.uploadSectionSx}
                >
                    <input
                        id={dataId}
                        onChange={handleChange}
                        hidden
                        accept=".png, .jpeg"
                        type="file"
                    />

                    <Box sx={uploadProductFileStyle.fileSx}>
                        <FileUploadIcon />
                        <Typography sx={uploadProductFileStyle.textSx}>{'Upload'}</Typography>
                    </Box>

                </Button>
            </Box>
        </Box>
    )
}