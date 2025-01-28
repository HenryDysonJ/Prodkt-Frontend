import type { SxProps } from '@mui/material';

interface TopBarStyleProps {
  [key: string]: SxProps;
}

export const topBarStyle: TopBarStyleProps = {
  rootSx: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
  },

  appBar: {
    height: '6.4rem',
    background: 'white',
    boxShadow: '0rem 0.4rem 1.2rem rgba(0, 0, 0, 0.04)',
    width: '100%',
  },

  appbarParentBox: {
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },

  parentBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  iconBtn: {
    backgroundColor: 'custom.outlineVariant',
    border: '0.1rem #E5E8EB solid',
  },

  titleTypo: {
    fontFamily: "Excon",
    color: 'text.primary',
    fontSize: '1.6rem',
    fontWeight: 600,
    lineHeight: '2.2rem',
    wordWrap: 'break-word',
    paddingLeft: '1.2rem',
  },

  profileBox: {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    borderRadius: '0.8rem',
  },

  topbarRightBtnStyle: {
    padding: '1rem 1.6rem',
    borderRadius: '0.8rem',
    border: '0.1rem solid',
    borderColor: "primary.main",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '2rem',
    textTransform: 'none',
    fontFamily: "Sarabun",

  },

  topbarSaveBtnStyle: {
    padding: '1rem 1.6rem',
    borderRadius: '0.8rem',
    border: '0.1rem solid',
    borderColor: "primary.main",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '2rem',
    textTransform: 'none',
    boxShadow: 'none',
    ':hover': {
      backgroundColor: 'primary.main',
      boxShadow: 'none',
    }
  },

  buttoncontainer: {
    display: 'flex',
    columnGap: '1.2rem',
    alignItems: 'center',
  },
};
