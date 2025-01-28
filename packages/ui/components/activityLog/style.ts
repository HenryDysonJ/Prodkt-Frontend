import type { SxProps } from '@mui/material';

interface ActivityLogStyleProps {
  [key: string]: SxProps;
}

export const activityLogStyle: ActivityLogStyleProps = {
  rootSx: {},
  cardSx: {
    bgcolor: 'background.surface.100',
    boxShadow: '0px 1px 1px #0000001A',
    // border: '1.2px solid',
    // borderColor: 'primary.100',
  },
  contentWrapSx: {
    '&::before': {
      content: '""',
      position: 'absolute ',
      borderLeft: '1.5px dashed',
      borderColor: 'divider.100',
      height: '100%',
      left: '5px',
      margin: '3px 1px',
    },
    '&:last-child': {
      '&: before': {
        borderLeft: '0px !important',
        content: '""',
      },
    },
    display: 'grid',
    position: 'relative',
  },
  completedSx: {
    color: 'green',
  },
  stepNumberSx: {
    backgroundColor: 'primary.main',
    position: 'absolute',
    width: '6px',
    height: '6px',
    display: 'grid',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    placeItems: 'center',
  },
  stepPointsSx: {
    marginLeft: '40px',
    marginTop: '-3px',
  },
  stepPointsHeadingSx: {
    color: 'text.A100',
    fontWeight: '500',
    fontSize: '12px',
  },
  stepPointsDescSx: {
    color: 'text.700',
    fontSize: '10px',
    marginTop: '4px',
    marginBottom: '21px',
  },
};
