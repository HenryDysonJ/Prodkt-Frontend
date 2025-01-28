import UploadIcon from "@assets/brandAssets/uploadIcon";
import { UploadButton } from "@crayond_dev/ui_uploadbutton";
import type { SxProps, Theme } from "@mui/material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { fileUploadStyle } from "./style";
import FileIcon from "@assets/brandAssets/fileIcon";
import DeleteIcon from "@assets/brandAssets/delete";
import { CSSProperties } from "react";
import { BasicButton } from "@crayond_dev/ui_basic-button";

export interface FileUploadProps {
  className?: string;
  sx?: SxProps<Theme>;
  id?: string;
  files: any;
  isViewOnly?: boolean;
  placeholder: string;
  bottomRenderText?: string;
  uploadButtonText?: string;
  buttonStyle?: CSSProperties | any;
  bottomTextLabelStyle?: CSSProperties | any;
  startIcon?: any;
  bottomTextLabel?: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteFile: () => void;
  acceptedFileTypes?: any;
}

export const FileUpload = (props: FileUploadProps): JSX.Element => {
  const {
    id = "",
    className = "",
    files = "",
    sx = {},
    isViewOnly = false,
    placeholder,
    uploadButtonText,
    handleFileChange,
    handleDeleteFile,
    buttonStyle,
    startIcon,
    bottomTextLabel,
    bottomTextLabelStyle,
    bottomRenderText,
    acceptedFileTypes = "",
    ...rest
  } = props;

  return (
    <>
      {files ? (
        <Stack sx={fileUploadStyle.fileContainerStyle}>
          <Box sx={fileUploadStyle.filesContainer}>
            <FileIcon />
            <Typography sx={fileUploadStyle.fileNameStyle}>
              {files?.name}
            </Typography>
          </Box>
          <IconButton onClick={handleDeleteFile}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ) : (
        <Box
          sx={[
            { ...fileUploadStyle.rootSx },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          className={`${className}`}
          {...rest}
        >
          <Typography sx={fileUploadStyle.isplaceHolderSx}>
            {placeholder}
          </Typography>
          <Divider sx={fileUploadStyle.isplaceHolderOrSx}>OR</Divider>
          {isViewOnly ? (
            <BasicButton
              startIcon={startIcon}
              sx={{
                ...fileUploadStyle.uploadButtonStyle,
                ...buttonStyle,
                width: "22%",
              }}
            >
              {uploadButtonText}
            </BasicButton>
          ) : (
            <UploadButton
              startIcon={<UploadIcon />}
              onFileChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFileChange(event)
              }
              sx={{ ...fileUploadStyle.uploadButtonStyle, ...buttonStyle }}
              inputProps={acceptedFileTypes}
            >
              {uploadButtonText}
            </UploadButton>
          )}
          {bottomTextLabel && (
            <Typography
              mt={0}
              sx={
                {
                  ...fileUploadStyle.isplaceHolderSx,
                  ...bottomTextLabelStyle,
                } as SxProps
              }
            >
              {bottomTextLabel}
            </Typography>
          )}
          {bottomRenderText && (
            <Typography
              sx={
                {
                  ...fileUploadStyle.isplaceHolderSx,
                  ...bottomTextLabelStyle,
                  textAlign: "center",
                } as SxProps
              }
            >
              {bottomRenderText}
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};
