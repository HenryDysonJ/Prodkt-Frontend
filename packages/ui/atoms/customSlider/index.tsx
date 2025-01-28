import { Slider, SliderProps, SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';

import { sliderStyle } from './style';

export interface CustomSliderProps extends SliderProps {
  className?: string;
  rootSx?: SxProps<Theme>;
  value: number | number[];
  onChange?: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined;
}

export const CustomSlider = (props: CustomSliderProps): JSX.Element => {
  const { className = '', rootSx = {}, value = 0, onChange, ...rest } = props;
  const [state, setState] = useState<number | number[]>(value ?? 0);
  const onChangeState = (event: Event, value: number | number[], activeThumb: number) => {
    setState(value);
    if (onChange) {
      onChange(event, value, activeThumb);
    }
  };
  return (
    <Box sx={[{ ...sliderStyle.rootSx }, ...(Array.isArray(rootSx) ? rootSx : [rootSx])]} className={`${className}`}>
      <Slider valueLabelDisplay="auto" aria-label="slider" {...rest} value={state} onChange={onChangeState} />
    </Box>
  );
};
