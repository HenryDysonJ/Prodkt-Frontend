import { Box, CircularProgress, SxProps, Theme, Typography } from '@mui/material';

import { progressCircularComponentStyle } from './style';

export interface ProgressCircularComponentProps {
  size: number;
  thickness: number;
  currentStep: number;
  maxStep: number;
  icon: JSX.Element;
  sx?: SxProps<Theme>;
}

export const ProgressCircularComponent = (props: ProgressCircularComponentProps): JSX.Element => {
  const { maxStep = 0, currentStep = 0, size, thickness, icon } = props;
  const progressValue = (currentStep / maxStep) * 100;

  return (
    <Box sx={progressCircularComponentStyle.mainBlockSx}>
      <Box sx={progressCircularComponentStyle.relativeBoxSx}>
        <CircularProgress
          variant="determinate"
          sx={progressCircularComponentStyle.hideProgressSx}
          size={size}
          thickness={thickness}
          value={100}
        />
        <Box>
          <CircularProgress
            sx={progressCircularComponentStyle.showProgressSx}
            variant="determinate"
            value={progressValue}
            size={size}
            thickness={thickness}
          />
          <Box sx={progressCircularComponentStyle.progressValue}>{icon}</Box>
        </Box>
      </Box>
      <Typography variant="subtitle2" sx={progressCircularComponentStyle.currantValueTextSx}>
        {`${currentStep}`}
        <Box sx={progressCircularComponentStyle.totalValueTextSx} component="span">{`of ${maxStep} services`}</Box>
      </Typography>
    </Box>
  );
};
