import { Box, CircularProgress, SxProps, Typography } from '@mui/material';

import { karmaCalculatorStyles } from '../style';

export const CircleProgressLabel = (props: any) => {
  const {
    value,
    symbols,
    thickness,
    size,
    thumbColor,
    thumbSecondaryColor,
    labelBackgroundStyle,
  } = props;
  return (
    <Box sx={{ ...karmaCalculatorStyles.labelBox }}>
      <CircularProgress
        sx={{ ...karmaCalculatorStyles.thumbStyle, color: thumbColor }}
        {...props}
        variant={'determinate'}
        color={'primary'}
        thickness={thickness}
        value={value}
        size={size}
      />

      <CircularProgress
        sx={{ ...karmaCalculatorStyles.thumbightColor, color: thumbSecondaryColor }}
        {...props}
        variant={'determinate'}
        color={'primary'}
        thickness={thickness}
        value={100}
        size={size}
      />
      <Box sx={{ ...karmaCalculatorStyles.labelContainer, ...labelBackgroundStyle } as SxProps}>
        <Typography
          variant='caption'
          component='div'
          sx={karmaCalculatorStyles.labelStyle}
        >{symbols}</Typography>
      </Box>
    </Box>
  );
};
