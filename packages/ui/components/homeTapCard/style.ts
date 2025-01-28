import type { SxProps } from '@mui/material';

interface HomeTapCardStyleProps {
  [key: string]: SxProps;
}

export const homeTapCardStyle: HomeTapCardStyleProps = {
  rootSx: {
    backgroundColor: 'background.surface.300',
    paddingRight: '4px',
    borderRadius: '8px',
    width: '100%',
    display: 'flex',
    px: 2,
    justifyContent: 'space-between',
    // alignItems: 'center',
    cursor: 'pointer',
  },
  iconContainer: {
    paddingTop: '10px',
    display: 'flex',
    alignSelf: 'end',
  },
  text: {
    fontSize: '13px',
    fontWeight: '800',
    color: 'text.900',
    padding: '15px 12px',
    paddingRight: '37px',
  },
};
