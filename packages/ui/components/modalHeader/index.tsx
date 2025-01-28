import { Divider, IconButton, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import CopyToClipboard from 'react-copy-to-clipboard';
import { modalHeaderStyle } from './style';
import { CopyGreyIcon, CopyIcon } from '@atoms/icons';
import { enqueueSnackbar } from 'notistack';

export interface ModalHeaderProps {
  className?: string;
  headerText?: string;
  showHeader?: boolean;
  showIcon?: boolean;
  sx?: SxProps<Theme>;
  icon?: JSX.Element;
  onClose?: () => void;
  onCloseCopy?: () => void;
  subHeaderText?: string,
  showSubHeader?: boolean,
}

export const ModalHeader = (props: ModalHeaderProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    showIcon,
    showHeader,
    icon,
    headerText = '',
    subHeaderText = '',
    showSubHeader,
    onClose = () => false,
    onCloseCopy = () => false,
    ...rest
  } = props;

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        enqueueSnackbar('Invite link  copied', {
          variant: 'success',
          autoHideDuration: 3000,
        });
      })
      .catch(() => {
        enqueueSnackbar('Failed to copy', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      });
  };

  return (
    <Box
      sx={[
        {
          ...modalHeaderStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={modalHeaderStyle.headerSx}>
        {showHeader && (
          <Typography sx={{ color: 'text.A100' }} variant="subtitle2" fontWeight={700}>
            {headerText}
          </Typography>
        )}
        {showIcon && (
          <IconButton data-testid="close" onClick={onClose}>
            {icon}
          </IconButton>
        )}
      </Box>
      {showSubHeader && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ color: 'text.500', fontSize: '12px', pt: 1, width: '258px' }}>
            {subHeaderText}
          </Typography>
          <Box sx={{ display: 'grid', placeItems: 'center', gap: 1 }} onClick={() => onCloseCopy()}>
            <CopyToClipboard text={subHeaderText} onCopy={() => handleCopy(subHeaderText)}>
              <CopyGreyIcon />
            </CopyToClipboard>

            <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>Copy</Typography>
          </Box>
        </Box>
      )
      }
    </Box >
  );
};
