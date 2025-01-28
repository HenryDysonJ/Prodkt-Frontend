import { Box, SxProps, Theme, Typography } from '@mui/material';

import { activityLogStyle } from './style';

interface DatalistProps {
  product_id: number | string;
  activity_name: string;
  activity_date: string;
}
export interface ActivityLogProps {
  className?: string;
  sx?: SxProps<Theme>;
  dataList: DatalistProps[];
}

export const ActivityLog = (props: ActivityLogProps): JSX.Element => {
  const { dataList, className = '', sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...activityLogStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      <Box sx={activityLogStyle.cardSx}>
        <Box sx={{ pl: '10px', pr: 2.5, pt: 3 }}>
          {dataList?.map((val) => (
            <Box key={val?.product_id} sx={activityLogStyle.contentWrapSx}>
              <Box
                sx={{
                  position: 'absolute',
                  borderRadius: '50%',
                  width: '14px',
                  height: '14px',
                  placeItems: 'center',
                  display: 'grid',
                  backgroundColor: 'background.surface.C500',
                }}
              >
                <Box sx={activityLogStyle.stepNumberSx}></Box>
              </Box>
              <Box sx={activityLogStyle.stepPointsSx}>
                <Typography sx={activityLogStyle.stepPointsHeadingSx}>{val?.activity_name}</Typography>
                <Typography sx={activityLogStyle.stepPointsDescSx}>{val?.activity_date}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
