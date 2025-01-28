import type { SxProps } from '@mui/material';

interface DocumentViewCardStyleProps {
  [key: string]: SxProps;
}

export const documentViewCardStyle: DocumentViewCardStyleProps = {
  rootSx: {},
  enlarged: {
    transform: 'scale(1.5)',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    objectFit: 'none',
    /* Increase the scale factor to make the image even bigger */
  },
  isEnlargedSx: {
    transform: 'transform 0.3s',
    borderRadius: '8px',
    height: '90px',
  },
  mainBoxSx: {
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 2px 6px #0000000F',
    border: '1px solid',
    borderColor: 'background.surface.100',
    borderRadius: '8px',
    minWidth: '150px',
    // maxWidth:'150px',
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    '-webkit-user-select': 'none', /* Safari */
    '-ms-user-select': 'none', /* IE 10 and IE 11 */
    userSelect: 'none', /* Standard syntax */
  },
  isClickSx: {
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 2px 6px #0000000F',
    border: '1px solid',
    borderColor: 'background.surface.100',
    borderRadius: '8px',
    position: 'relative',
  },
  cardNameSx: {
    background: '#1B304F 0% 0% no-repeat padding-box',
    backdropFilter: 'blur(8px)',
    borderRadius: '10px',
    opacity: 1,
    px: '8px',
    py: '3px',
    position: 'absolute',
    top: 10,
    left: 10,
    '& p': {
      color: 'background.surface.A500',
      fontSize: '10px',
    },
  },
  nickName: {
    color: 'text.A100',
    fontSize: '14px',
    fontWeight: 600,
    mb: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '150px',
    whiteSpace: 'nowrap',
  },
  purchaseDateSx: {
    color: 'text.500',
    fontSize: '10px',
    width: '150px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  dummyStateSx: {
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEED6',
    borderRadius: '8px',
  },
};
