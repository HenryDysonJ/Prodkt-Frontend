import { DocumentScanIcon, DocumentUploadIcon } from '@core/ui/atoms/icons';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import { Button } from '..';
import { uploadDocumentTypeStyle } from './style';
export interface UploadDocumentTypeProps {
  className?: string;
  sx?: SxProps<Theme>;
  textStyle?: SxProps<Theme>;
  circleStyle?: SxProps<Theme>;
  iconStyle?: SxProps<Theme>;
  onScanClick?: () => void;
  onUploadClick?: (val: string, type?: string) => void;
  loading?: boolean;
  skip?: boolean;
  amcNotApplicable?: boolean;
  onSkipClick?: () => void;
  onViewSummary?: () => void;
  id?: string;
}

export const UploadDocumentType = (props: UploadDocumentTypeProps): JSX.Element => {
  const {
    skip = false,
    loading = false,
    textStyle,
    circleStyle,
    iconStyle,
    onViewSummary = () => false,
    amcNotApplicable = false,
    onSkipClick = () => false,
    onScanClick = () => false,
    onUploadClick = () => false,
    className = '',
    sx = {},
    id,
    ...rest
  } = props;

  return (
    <Box
      sx={[{ ...uploadDocumentTypeStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4.5, pb: 2.5 }}>
        {/* Scan Upload Document */}
        <Box sx={{ cursor: 'pointer' }}>
          <Box sx={{ ...uploadDocumentTypeStyle.commonSx, ...circleStyle } as SxProps<Theme>} onClick={() => onScanClick()}>
            <DocumentScanIcon rootStyle={{ ...iconStyle, color: 'primary.B100' } as SxProps<Theme>} />
          </Box>
          <Typography sx={{ ...uploadDocumentTypeStyle.scanSx, ...textStyle } as SxProps<Theme>}>Scan</Typography>
        </Box>

        {/* Upload Document */}

        <Box>
          <Box sx={{ ...uploadDocumentTypeStyle.commonSx, ...circleStyle } as SxProps<Theme>}>
            <input
              data-testId='upload'
              multiple
              onChange={(e) => onUploadClick(e.target.files)}
              type="file"
              id={id}
              style={{ display: 'none' }}
              accept="image/jpeg, image/*,application/pdf"
            />
            <label htmlFor={id}>
              <DocumentUploadIcon rootStyle={{ ...iconStyle, color: 'primary.B100' } as SxProps<Theme>} />
            </label>
          </Box>
          <Typography sx={{ ...uploadDocumentTypeStyle.uploadTextSx, ...textStyle } as SxProps<Theme>}>
            Upload
          </Typography>
        </Box>
      </Box>

      {/* {skip && (
        <Box>
          <Button
            loading={loading}
            fullWidth
            sx={{
              borderRadius: '10px',
              textTransform: 'capitalize',
              width: '320px',
              height: '48px',
              boxShadow: 'none',
              backgroundColor: 'primary.main',
              color: 'text.A800',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'text.A800',
                boxShadow: 'none',
              },
            }}
            onClick={() => onViewSummary()}
          >
            View Summary
          </Button>
        </Box>
      )} */}
    </Box>
  );
};
