import type { SxProps } from '@mui/material';

interface BookingSlotStyleProps {
  [key: string]: SxProps;
}

export const bookingSlotStyle: BookingSlotStyleProps = {
  rootSx: { height: '100%' },
  calenderIcon: {
    width: '14px',
    height: '14px',
    '& path': {
      fill: '#FFA400',
    },
  },
  monthAndYear: {
    fontWeight: '600',
    fontSize: '14px',
    color: 'text.900',
  },
  dateListContainer: {
    width: '100%',
  },
  dateList: {
    flexGrow: 1,
    overflowX: 'overlay',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '::-webkit-scrollbar-thumb': {
      display: 'none',
    },
  },
  iconWithTimeSelectionSx: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
    px: 0.1,
  },
  timeSelectionSx: {
    padding: '6px 8px 6px 1px',
    textAlign: 'center',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'background.surface.600',
    '& .MuiIconButton-root': {
      padding: '1px',
    },
  },
  timeTextSx: {
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    color: 'text.A400',
  },
  selectTimeButton: {
    padding: '6px 8px 6px 1px',
    color: 'secondary.100',
    border: '2px solid',
    backgroundColor: 'secondary.500',
    borderColor: 'secondary.100',
    '& .slotTime': {
      color: 'secondary.100',
    },
  },
  pastTimeButton: {
    backgroundColor: 'background.surface.100',
    opacity: 0.6,
  },
  unSelectTimeButton: {
    backgroundColor: 'background.surface.100',
    fontSize: '14px',
    fontWeight: 'medium',
  },
  monthArrowIcon: {
    cursor: 'pointer',
    '& g': {
      display: 'none',
    },
  },
  dashedDivider: { mt: 2, mb: 1.5, border: '.5px dashed', borderColor: 'divider.100' },

  CalendarSx: {
    fontSize: '14px',
    color: 'text.900',
    fontWeight: 'medium',
  },
  totalSx: {
    backgroundColor: '#fff',
    width: ' 100%',
    margin: '0px auto',
    '& .MuiTabs-root': {
      minHeight: 0,
      borderRadius: '8px',
    },
  },
  stickySx: {
    // position: '-webkit-sticky',
    position: 'sticky',
    top: '-18px',
    backgroundColor: '#fff',
    zIndex: 3,
  },
  dateSelectionSx: {
    padding: '13px 8.39px',
    textAlign: 'center',
    margin: '0 3px',
    border: '2px solid',
    borderColor: 'secondary.600',
  },
  todayButton: {
    padding: '11px 6.9px',
    fontSize: '14px',
    fontWeight: 'medium',
    borderRadius: '24px',
    backgroundColor: 'secondary.500',
    borderColor: 'secondary.100',
    '& .day, .date': {
      color: 'secondary.100',
    },
  },
  pastButton: {
    backgroundColor: 'secondary.600',
    fontSize: '14px',
    fontWeight: 'medium',
    borderRadius: '24px',
    '& .day, .date': {
      color: 'grey.300',
    },
  },
  unSelectButton: {
    backgroundColor: 'secondary.600',
    fontSize: '14px',
    fontWeight: 'medium',
    borderRadius: '24px',
    '& .day, .date': {
      color: 'text.900',
    },
  },
  unSelectIconChange: {
    color: '#DBDBDB',
    fontSize: '14px',
    fontWeight: 'medium',
  },
  SelectIconChange: {
    color: 'secondary.100',
    fontSize: '14px',
    fontWeight: 'medium',
  },
  availableTextSx: {
    fontSize: '14px',
    fontWeight: 'medium',
    color: 'text.800',
    mt: 2,
    ml: 1.6,
  },

  tabSx: {
    color: 'text.A300',
    padding: '7.5px 10px',
    '&.Mui-selected': {
      color: 'background.surface.100',
      backgroundColor: 'secondary.100',
      borderRadius: '8px',
      fontSize: '14px',
      p: '6px 0px',
      fontWeight: 600,
    },
  },
  underTabCalenderStyle: {
    backgroundColor: 'secondary.700',
    color: 'text.A300',
    '& .MuiTabs-indicator': {
      backgroundColor: 'none',
      height: '0',
      px: 3,
    },
    '& .MuiTabs-flexContainer': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '4px',
      boxSizing: 'border-box',
      m: 0.5,
      overflow: 'overlay',
      '::-webkit-scrollbar-thumb': {
        display: 'none',
      },
    },
  },
  primaryBtn: {
    padding: '12px 35px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    color: 'background.surface.100',
    width: '100%',
    backgroundColor: 'primary.main',
    margin: { sm: '20px 0 0 0', xs: '20px 0 16px 0' },
    ':hover': {
      boxShadow: 'none',
    },
  },
};
