import { CloseIcon } from '@atoms/icons';
import type { SxProps, Theme } from '@mui/material';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, styled } from '@mui/material';

import { dailogModalStyle } from './style';

export interface DailogModalProps {
  className?: string;
  sx?: SxProps<Theme>;
  id?: string;
  open: boolean;
  content: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface DailogModal {
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const CustomizedDialogs = (props: DailogModal): JSX.Element => {
  const { children, onClose } = props;

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {children}
        {onClose ? (
          <IconButton
            data-testid="close1"
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon rootStyle={{color: 'text.A100'}} />
          </IconButton>
        ) : null}
      </DialogTitle>
    </>
  );
};

export const DailogModal = (props: DailogModalProps): JSX.Element => {
  const { children, onClose, open, content, className = '', sx = {}, ...rest } = props;
  return (
    <Box sx={[{ ...dailogModalStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={dailogModalStyle.dailogSx}
      >
        <CustomizedDialogs onClose={onClose}>{content}</CustomizedDialogs>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </Box>
  );
};
