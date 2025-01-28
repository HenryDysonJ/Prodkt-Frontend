import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

import { offersCardComponentStyle } from './style';

export interface OffersCardComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const OffersCardComponent = (props: OffersCardComponentProps): JSX.Element => {
  const { ...rest } = props;

  return (
    <Box sx={offersCardComponentStyle.rootSx} {...rest}>
      <Box sx={offersCardComponentStyle.cardSx}></Box>
    </Box>
  );
};
