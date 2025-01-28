import { Box, Slider, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { karmaCalculatorStyles } from '../style';

interface SliderProps {
    minValue: number;
    maxValue: number;
    value: number;
    progressType?: string;
    marks: { label: string, value: number }[] | boolean | any;
    handleChange?: (_: any, newValue: any) => void
}

export default function SliderProgress(props: SliderProps) {
    const { minValue, maxValue, marks, handleChange, value, progressType } = props;

    return (
        <Stack sx={karmaCalculatorStyles.sliderRoot}>
            <Box sx={{ ...karmaCalculatorStyles.progresStart, left: 0 }}></Box>
            <Box sx={{ width: '98%' }}>
                <Slider
                    marks={marks}
                    step={2}
                    value={value}
                    valueLabelDisplay="off"
                    min={minValue}
                    max={maxValue}
                    onChange={handleChange}
                    sx={karmaCalculatorStyles.sliderStyle}
                />
                {marks && marks?.length === 2 &&
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" sx={karmaCalculatorStyles.questionsSx}>{`${minValue} ${progressType !== 'vehicles' && progressType}`}</Typography>
                        <Typography variant="body2" sx={karmaCalculatorStyles.questionsSx}>{`${maxValue} ${progressType !== 'vehicles' && progressType}`}</Typography>
                    </Box>
                }
            </Box>
            <Box sx={{ ...karmaCalculatorStyles.progresStart, right: 4 }}></Box>
        </Stack>

    );
}
