import AvailableAmcBgImg from '@core/ui/assets/avalibleAmcBgImg.svg';
import type { SxProps } from '@mui/material';
interface AmcAvailableCardStyleProps {
  [key: string]: SxProps;
}

export const amcAvailableCardStyle: AmcAvailableCardStyleProps = {
  rootSx: {},

  mainBoxSx: {
    backgroundImage: `url(${AvailableAmcBgImg})`,
    pl: 1.4,
    pr: 2,
    py: 2,
    boxShadow: '0px 0px 16px #0000001F',
    border: '1px solid',
    borderColor: 'primary.100',
    borderRadius: '10px',
    backgroundColor: 'background.surface.100',
    opacity: 1,
  },
  amcHeaderTextSx: {
    color: 'text.900',
    fontWeight: 'bold',
    mb: 0.4,
  },
  subTextSx: {
    color: 'text.500',
    fontSize: '12px',
  },
};
