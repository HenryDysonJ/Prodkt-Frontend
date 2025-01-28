import type { SxProps } from '@mui/material';

interface UploadTypeFooterStyleProps {
  [key: string]: SxProps;
}

export const uploadTypeFooterStyle: UploadTypeFooterStyleProps = {
  rootSx: {
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 2px 14px #00000014',
    borderRadius: '10px',
    height: '100%',
  },

  dividerSx: {
    borderLeft: '0.5px dashed',
    borderRightWidth: 'inherit',
    borderColor: 'divider.100',
    borderStyle: 'dashed',
  },
  amcNotFoundSx: {
    fontSize: '16px',
    color: 'text.700',
    textAlign: 'center',
    width: '300px',
    ml: 5.5,
    pb: 1,
    display: 'flex',
    justifyContent: 'center'
  }
};
