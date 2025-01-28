import type { SxProps } from '@mui/material';

interface InstallPwaDrawerStyleProps {
  [key: string]: SxProps;
}

export const installPwaDrawerStyle: InstallPwaDrawerStyleProps = {
  rootSx: {},
  pwaContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  pwaContent: {
    padding: '0px 40px 20px 40px',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
  },
  pwaContentDes: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'grey.A500',
    textAlign: 'center',
  },
  pwaContentDesIOS: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'grey.A500',
  },
};

