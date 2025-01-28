import type { SxProps, Theme } from '@mui/material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { uploadProductFileStyle } from './style';
import { Upload } from './upload';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export interface UploadProductFileProps {
  handleDeleteImage: () => void;
  title: string;
  format: string;
  handleChange: (key: string, value: string | number, warrantItem?: string) => void;
  file: File;
  isError: boolean;
  errorMessage: string | null;
  dataId:  string
}

export const UploadProductFile = forwardRef((props: UploadProductFileProps, ref: React.Ref<HTMLElement>): JSX.Element => {
  const {
    handleDeleteImage,
    handleChange,
    file,
    title,
    format,
    isError,
    errorMessage,
    dataId } = props

  return (
    <Box>
      <Box sx={uploadProductFileStyle?.rootSx}>
        {
          file?.url ?
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Stack direction={'row'} alignItems={'center'}>
                <Box pr={2}>
                  <img
                    src={file?.url}
                    alt="profile images"
                    height={'40px'}
                    width={'40px'}
                    style={{
                      objectFit: 'cover',
                      boxShadow: '#00000014 0px 2px 4px',
                      borderRadius: '8px'
                    }}
                  />
                </Box>
                <Typography>{file?.name}</Typography>
              </Stack>
              <Box sx={uploadProductFileStyle?.deleteIconSx}
                onClick={handleDeleteImage}>
                <DeleteForeverIcon />
              </Box>
            </Stack> :
            <Box pb={1} pt={1}>
              <Typography sx={uploadProductFileStyle?.uploadTitleSx}>{title}</Typography>
              <Box sx={uploadProductFileStyle?.uploadCompSx}>
                <Button sx={{ padding: '0' }}>
                  <Upload
                    dataId={dataId}
                    handleChange={handleChange} />
                </Button>
              </Box>
              <Typography sx={uploadProductFileStyle?.formatSx}>{format}</Typography>
              <Typography sx={uploadProductFileStyle?.formatSx}>Max File size - 5 MB</Typography>

            </Box>
        }
      </Box >
      {isError && (
        <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
});

UploadProductFile.displayName = 'UploadProductFile';
