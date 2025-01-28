import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal, Stack } from '@mui/material';
import { InfoIcon } from '../../assets';
import { modalStyle } from './style';


export interface ModalProps {
  handleOpen?: () => void;
  open?: boolean;
  handleClose?: () => void;
  addProduct?: () => void;
}

export const ModalPopupOver = React.forwardRef((props: ModalProps, ref: React.Ref<HTMLElement>): JSX.Element => {
  const {
    handleClose,
    addProduct,
    open,
  } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle?.parentSx}>
          <Box>
            <Box sx={modalStyle?.iconSx}>
              <InfoIcon />
            </Box>
            <Typography sx={modalStyle?.gridValue}>Add as single product</Typography>
            <Typography sx={modalStyle?.gridText}>Are you sure want to combine 2 products as single product</Typography>
            <Stack direction={'row'} spacing={1} width={'100%'}>
              <Box width={'50%'}>
                <Button
                  sx={modalStyle?.resetBtn}
                  onClick={() => handleClose()}
                  fullWidth
                  variant="contained">
                  <Typography>Cancel</Typography>
                </Button>
              </Box>
              <Box width={'50%'}>
                <Button
                  sx={modalStyle?.submitBtn}
                  fullWidth
                  onClick={() => addProduct && addProduct()}
                  variant="contained">
                  <Typography>Add as single product</Typography>
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
});

ModalPopupOver.displayName = 'ModalPopupOver';
