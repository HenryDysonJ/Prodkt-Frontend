import { Box, SxProps, Theme, Typography } from '@mui/material';

import { CircleInfoIcon } from '@atoms/icons/searchProductIcon';
import { uploadDetailsLayoutStyle } from './style';
export interface UploadDetailsLayoutProps {
  className?: string;
  sx?: SxProps<Theme>;
  showIcon?: boolean;
  icon?: JSX.Element;
  bodyContent?: JSX.Element;
  showHeader?: boolean;
  header?: string;
  isRequired?: boolean;
  infoShown?: boolean;
}

export const UploadDetailsLayout = (props: UploadDetailsLayoutProps): JSX.Element => {
  const {
    className = '',
    icon,
    isRequired = false,
    bodyContent,
    sx = {},
    showIcon = false,
    showHeader = false,
    infoShown = false,
    header = '',
    ...rest
  } = props;
  // const { documentDetails,
  // } = addProductDetails();

  return (
    <Box
      sx={[
        {
          ...uploadDetailsLayoutStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={uploadDetailsLayoutStyle.cardLayoutSx}>
        <Box sx={uploadDetailsLayoutStyle.topSectionSx}>
          {showIcon && <Box sx={uploadDetailsLayoutStyle.headerIconSx}>{icon}</Box>}
          {showHeader && (
            <Box sx={uploadDetailsLayoutStyle.headerTextSx}>
              <Typography>{header}</Typography>
              {!isRequired && <Box component="span">(Recommended)</Box>}

              {isRequired ? <Typography sx={uploadDetailsLayoutStyle.requiredText}>&nbsp;*</Typography> : ''}
            </Box>
          )}
        </Box>
        <Box sx={uploadDetailsLayoutStyle.bodySectionSx}>{bodyContent}</Box>
        {infoShown && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              gap: '6px',
              pb: 2,
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
              paddingLeft: '16px',
            }}
          >
            <CircleInfoIcon />
            <Typography sx={{ color: 'text.A100', fontSize: '12px', fontWeight: 500, width: '296px' }}>
              Upload insurance purchase invoice and policy document
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
