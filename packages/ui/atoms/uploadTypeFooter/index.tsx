import { Divider, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { uploadTypeFooterStyle } from './style';
import { SkipDoubleArrowIcon } from '..';

export interface UploadTypeFooterProps {
  className?: string;
  sx?: SxProps<Theme>;
  onSkipClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export const UploadTypeFooter = (props: UploadTypeFooterProps): JSX.Element => {
  const {
    onSkipClick = () => false,
    children,
    className = '',
    sx = {},
    ...rest
  } = props;

  return (
    <Box
      sx={[{ ...uploadTypeFooterStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight="700"
          sx={{ color: 'text.A100', textAlign: 'center', pt: 2, pb: 2, px: 2 }}
        >
          Upload Invoice purchase & policy documents
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          pt: 2,
          pb: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
