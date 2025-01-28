import { CloseIcon } from '@atoms/icons';
import { DocumentColorIcon, FileUploadIcon } from '@atoms/icons/productSearchIconsLists';
import { Box, Button, SxProps, Theme, Typography } from '@mui/material';

import { documentUploadComponentStyle } from './style';
export interface DocumentUploadComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  headerText?: string;
  text?: string;
  testid?: string;
  file?: File | any;
  handleFileChange?: ((file: File | null) => void) | undefined;
  handleDelete?: ((index: number) => void) | undefined;
  isAll?: any;
}

export const DocumentUploadComponent = (props: DocumentUploadComponentProps): JSX.Element => {
  const {
    testid,
    className = '',
    sx = {},
    headerText = '',
    text = '',
    file,
    handleFileChange,
    handleDelete,
    isAll,
    ...rest
  } = props;
  let fileName = "";

  if (!isAll) {
    if (Array.isArray(file)) {
      fileName = file?.[0]?.split("/")?.pop() ?? "File"
    } else {
      fileName = file?.name ?? "File"
    }
  }

  return (
    <Box
      sx={[{ ...documentUploadComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box>
        <Box sx={documentUploadComponentStyle.uploadHeaderSx}>
          <Typography>{headerText}</Typography>
        </Box>

        {
          isAll ?
            <Button
              fullWidth
              component="label"
              data-testid="uploadDocumentLabel"
              sx={file ? documentUploadComponentStyle.uploadSectionSx : documentUploadComponentStyle.withoutUpdateSx}
            >
              <input
                onChange={(event) => handleFileChange(event.target?.files?.[0] ?? null)}
                hidden
                data-testid={testid}
                // accept="image/*"
                type="file"
              />
              <Box sx={documentUploadComponentStyle.fileSx}>
                <FileUploadIcon />
                <Typography sx={documentUploadComponentStyle.textSx}>{text}</Typography>
              </Box>
            </Button>
            : !file ?
              <Button
                fullWidth
                component="label"
                data-testid="uploadDocumentLabel"
                sx={file ? documentUploadComponentStyle.uploadSectionSx : documentUploadComponentStyle.withoutUpdateSx}
              >
                <input
                  onChange={(event) => handleFileChange(event.target?.files?.[0] ?? null)}
                  hidden
                  data-testid={testid}
                  // accept="image/*"
                  type="file"
                />
                <Box sx={documentUploadComponentStyle.fileSx}>
                  <FileUploadIcon />
                  <Typography sx={documentUploadComponentStyle.textSx}>{text}</Typography>
                </Box>
              </Button> : ''
        }
        <Box>
          {
            isAll ?
              file?.map((v: any, index: number) => {
                let name = "";

                if (typeof v === "string") {
                  name = v?.split("/")?.pop() ?? "File"
                } else {
                  name = v?.name ?? "File"
                }

                return (
                  <Box py={0.5}>
                    <Button
                      fullWidth
                      component="label"
                      sx={v?.name ? documentUploadComponentStyle.uploadSectionSx : documentUploadComponentStyle.withoutUpdateSx}
                    >
                      <Box sx={documentUploadComponentStyle.uploadSx}>
                        <DocumentColorIcon />
                        <Typography
                          sx={{
                            width: '250px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {v?.name}
                        </Typography>
                      </Box>
                      {v?.name && (
                        <Box onClick={() => handleDelete(index)} sx={documentUploadComponentStyle.deleteIconSx}>
                          <CloseIcon rootStyle={{color: 'text.A100'}} />
                        </Box>
                      )}
                    </Button>
                  </Box>
                )
              }) :
              file && (
                <Button
                  fullWidth
                  component="label"
                  sx={file ? documentUploadComponentStyle.uploadSectionSx : documentUploadComponentStyle.withoutUpdateSx}
                >
                  <Box sx={documentUploadComponentStyle.uploadSx}>
                    <DocumentColorIcon />
                    <Typography
                      sx={{
                        width: '200px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {fileName}
                    </Typography>
                  </Box>
                  {file && (
                    <Box onClick={() => handleDelete()} sx={documentUploadComponentStyle.deleteIconSx}>
                      <CloseIcon rootStyle={{color: 'text.A100'}} />
                    </Box>
                  )}
                </Button>
              )}
        </Box>
      </Box>
    </Box>
  );
};
