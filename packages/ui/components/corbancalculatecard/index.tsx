import GreenCare from '@assets/greenCare';
import type { SxProps, Theme } from '@mui/material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { CSSProperties, forwardRef } from 'react';

import { corbanCalculateCardStyle } from './style';

export interface CorbanCalculateCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  handleClick?:()=>void;
}


export const CorbanCalculateCard = forwardRef((props: CorbanCalculateCardProps, ref: React.Ref<HTMLElement>): JSX.Element => {
  const { className = '', sx = {},handleClick, ...rest } = props;

  return (
    <Box sx={[{ ...corbanCalculateCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} ref={ref}  {...rest}>
      <Typography sx={corbanCalculateCardStyle.corbanText}>Your avg carbon<br /> footprint is about
        <span style={corbanCalculateCardStyle.corbanTextBold as CSSProperties}> 15.09<br /> Tons Co2</span>,
        <br /> want to calculate <br />and offset it?</Typography>
      <Stack sx={corbanCalculateCardStyle.bottomRoot}>
        <Button sx={corbanCalculateCardStyle.btnSx} variant='contained' onClick={handleClick}>Calculate</Button>
        <GreenCare />
      </Stack>
    </Box>
  );
}

);

CorbanCalculateCard.displayName = 'CorbanCalculateCard';

