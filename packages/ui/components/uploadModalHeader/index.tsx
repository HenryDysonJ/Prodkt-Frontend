import { SxProps, Theme, Typography } from '@mui/material';
import { Box } from '@mui/material';

import { uploadModalHeaderStyle } from './style';

export interface UploadModalHeaderProps {
  className?: string;
  sx?: SxProps<Theme>;
  showIcon?: boolean;
  showHeaderText?: boolean;
  icon?: JSX.Element;
  header?: string;
  subHeader?: string;
}

export const UploadModalHeader = (props: UploadModalHeaderProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    showIcon = false,
    showHeaderText = false,
    icon,
    header = '',
    subHeader = '',
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...uploadModalHeaderStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={uploadModalHeaderStyle.uploadHeaderSx}>
        {showIcon && <Box>{icon}</Box>}
        {showHeaderText && (
          <Box sx={uploadModalHeaderStyle.headerTextSx}>
            <Typography>{header}</Typography>
            <Box component="span">{subHeader}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
