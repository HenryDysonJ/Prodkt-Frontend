import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { ThunderIcon, UploadDocumentType } from '..';
import { editDocumentStyle } from './style';
import { useScanproduct } from '@core/store';

export interface EditDocumentProps {
  className?: string;
  sx?: SxProps<Theme>;
  onUploadClick: (val: any) => void;
  onScanClick: () => void;
  id: string;
  title: string;
  loading?: string;
  isRequired?: boolean;
  documentShown?: any;
}

export const EditDocument = (props: EditDocumentProps): JSX.Element => {
  const {
    documentShown,
    isRequired = false,
    loading,
    title = '',
    onUploadClick = () => false,
    onScanClick = () => false,
    id = '',
    className = '',
    sx = {},
    ...rest
  } = props;

  const { uploadFile, onDeleteUploadFile } = useScanproduct();

  return (
    <Box
      sx={[{ ...editDocumentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box mb={1.5} sx={editDocumentStyle.fileUploadSx}>
        <Typography sx={editDocumentStyle.uploadTextSx}>
          Upload {title} documents by
          {isRequired && (
            <Box component="span" sx={{ color: 'error.900' }}>
              *
            </Box>
          )}
        </Typography>
        <Divider sx={editDocumentStyle.dividerFileSx} />
        <Box sx={{ py: '20px', px: '12px' }}>
          <Box>
            <UploadDocumentType
              id={id}
              onUploadClick={onUploadClick}
              onScanClick={onScanClick}
              textStyle={{ fontSize: '12px', textAlign: 'center', paddingLeft: '0px' }}
            />
          </Box>
          <Box>{documentShown}</Box>
        </Box>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'8px'}
          sx={editDocumentStyle.stackFileSx}
        >
          <ThunderIcon />
          <Typography sx={editDocumentStyle.invoiceSx}>Upload document to fetch the below details instantly</Typography>
        </Stack>
      </Box>
    </Box>
  );
};
