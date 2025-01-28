import { Button, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { sideImageCardStyle } from './style';

interface CardDataInterface {
  src?: string;
  title?: string;
  subTitle?: string;
  buttonText?: string;
}

export interface SideImageCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  data?: CardDataInterface[];
}

export const SideImageCard = (props: SideImageCardProps): JSX.Element => {
  const { className = '', sx = {}, data, ...rest } = props;

  return (
    <Box
      sx={[
        {
          ...sideImageCardStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          overflow: 'scroll',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {data?.map((val, index) => {
          return (
            <Box key={index} sx={sideImageCardStyle.sectionSx}>
              <Box sx={sideImageCardStyle.imageSx}>
                <img src={val?.src} alt="Brand Img" />
              </Box>
              <Box sx={sideImageCardStyle.cardSx}>
                <Typography sx={sideImageCardStyle.titleSx}>{val?.title}</Typography>
                <Typography sx={sideImageCardStyle.subTitleSx}>{val?.subTitle}</Typography>
                <Button fullWidth sx={sideImageCardStyle.buttonSx}>
                  {val?.buttonText}
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
