import { Box, CircularProgress, SxProps, Theme, Typography } from '@mui/material';

import { circularProgressStyle } from './style';

export interface CircularProgressProps {
  title?: string;
  subTitle?: string;
  currentStep?: number;
  maxStep?: number;
  sx?: SxProps<Theme>;
  size?: number;
  thickness?: number;
}

export const CircularProgressBar = (props: CircularProgressProps): JSX.Element => {
  const { title = '', subTitle = '', maxStep = 0, currentStep = 0, size, thickness } = props;
  const progressValue = (currentStep / maxStep) * 100;

  return (
    <>
      {/* <IconButton onDragEnter={handleDragEnter} sx={{ padding: '12px' }}>
        <Divider sx={{ height: '100%' }} />
      </IconButton> */}
      <Box sx={circularProgressStyle.mainBlockSx}>
        <Box sx={circularProgressStyle.relativeBoxSx}>
          <CircularProgress
            variant="determinate"
            sx={circularProgressStyle.hideProgressSx}
            size={size}
            thickness={thickness}
            value={100}
          />
          <Box>
            <CircularProgress
              sx={circularProgressStyle.showProgressSx}
              variant="determinate"
              value={progressValue}
              size={size}
              thickness={thickness}
            />
            <Typography sx={circularProgressStyle.progressValue}>{`${currentStep}/${maxStep}`}</Typography>
            <Box></Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={700} sx={circularProgressStyle.titleSx}>
            {title}
          </Typography>
          <Typography sx={circularProgressStyle.subTitleSx}>{subTitle}</Typography>
        </Box>
      </Box>
    </>
  );
};
