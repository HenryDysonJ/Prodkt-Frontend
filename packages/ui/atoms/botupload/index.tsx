import UploadImageBg from '@core/ui/assets/UploadImage.png';
import UploadMove from '@core/ui/assets/uploadMove.gif';
import { botUploadStyle } from '@core/ui/atoms/botupload/style';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

export interface BotUploadProps {
  className?: string;
  sx?: SxProps<Theme>;
  onclick?: () => void;
  uploadDocumentStateName: string;
}

export const BotUpload = (props: BotUploadProps): JSX.Element => {
  const { uploadDocumentStateName = '', className = '', onclick = () => false, sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...botUploadStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} onClick={() => onclick()}>
        <img src={UploadImageBg} alt="UploadMove" />
        <Box sx={{ position: 'absolute', display: 'flex', left: '24px' }}>
          <img src={UploadMove} alt="UploadMove" />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              width: '235px',
              color: 'text.400',
              px: 1,
            }}
          >
            Upload your product {uploadDocumentStateName} to get started...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
