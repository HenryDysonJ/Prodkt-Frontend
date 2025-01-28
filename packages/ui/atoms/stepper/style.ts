import type { SxProps } from '@mui/material';

interface OnboardingStyleProps {
  [key: string]: SxProps;
}

export const stepperStyle: OnboardingStyleProps = {


  processRootSx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: 'custom.surface',
    position: 'relative',
  },

  processContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '4px 10px 24px 10px',
  },

  processCardStyle: {
    'backgroundColor': 'custom.surfaceBright',
    'borderRadius': '12px',
    'display': 'flex',
    'justifyContent': 'center',
    'flexDirection': 'column',
    // 'marginTop': '30px',
    'width': '100%',
  },
  activeProgress: {
    height: '2px',
    backgroundColor: 'success.main',
    position: 'absolute',
    top: '15px',
    left: '10%',
    zIndex: 1,
    width: '0%',
    transform: 'translateX(-2%)',
  },
 progressLineStyle: {
    height: '2px',
    backgroundColor: '#F0F3F6',
    position: 'absolute',
    top: '15px',
    left: '8%',
    zIndex: 1,
    width:{md:"80%",lg:"84%",xl:"86%"},
  },
  lanelSubStyle: {
    position: 'absolute',
    bottom: '-18px',
    color: 'custom.onSurfaceVariant',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
  },

  lanelStyle: {
    color: 'custom.onSurfaceVariant',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
  },
  listStyle: {
    display: 'grid',
    placeItems: 'center',
    zIndex: 1000,
    position: 'relative',
  },
  numberContiner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
  },
};
