import type { SxProps } from '@mui/material';

interface BotUploadDocumentStyleProps {
  [key: string]: SxProps;
}

export const botUploadDocumentStyle: BotUploadDocumentStyleProps = {
  rootSx: {
    // bgcolor: '#F0F4FA'
  },

  // div: {
  //   backgroundColor: '#fff',
  //   border: '2px red dashed',
  //   borderWidth: '2px',
  //   borderSpacing: '0.5rem',
  //   padding: '1rem',
  //   width: '345px',
  // },
  // .top,
  // .bottom :{
  //   height: $size
  //   width: $size * 2;
  // // }

  // .right,
  // .left {
  //   height: $size * 2;
  //   width: $size;
  // }

  // div: {
  //   borderTopLeftRadius: '345 * 2',
  //   bordeTopRightRadius: '345 * 2',
  // },
  totalMoodSx: {
    display: 'grid',
    gridTemplateRows: 'repeat(6,1fr)',
    gridTemplateColumns: 'repeat(12,1fr)',
    maxWidth: '435px',
    margin: '0px auto',
  },
  emojiSx: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  botSx: {},
  invoiceSx: {
    border: '1px solid',
    borderColor: '#0E70EB',
    width: '77px',
    borderRadius: '50%',
    height: '74px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.surface.100',
  },
  warrantySx: {
    width: '77px',
    borderRadius: '50%',
    height: '74px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.surface.100',
  },
  insuranceSx: {
    // border: '1px solid',
    // borderColor: '#0E70EB',
    width: '77px',
    borderRadius: '50%',
    height: '74px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.surface.100',
  },
  amcSx: {
    // border: '1px solid',
    // borderColor: '#0E70EB',
    width: '77px',
    borderRadius: '50%',
    height: '74px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.surface.100',
  },
};
