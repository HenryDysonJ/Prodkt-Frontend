/* eslint-disable react/jsx-key */

import { useProductDetails } from '@core/store';
import Fridge from '@core/ui/assets/Chimney.svg';
import { BackCircleIcon, PageHeader } from '@core/ui/atoms';
import { ActivityLog, ProductListCard } from '@core/ui/components';
import { Box, Card, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { activityLogsStyle } from './style';

export default function ActivityLogs() {
  const { activityState, getActivityDetails } = useProductDetails();

  const { product_id } = useParams();

  useEffect(() => {
    getActivityDetails(product_id);
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('Activity log page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={activityLogsStyle.rootSx}>
      <Box py={3} px={2.5}>
        <PageHeader showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Activity Log" />
      </Box>
      <Box px={2.5} pt={2} pb={1}>
        <ProductListCard imageURL={activityState?.product_image} productDescription={activityState?.product_name} />
      </Box>
      <Box px={2.5} pb={2}>
        <Typography sx={activityLogsStyle.activityLogTextSx}>Activity Log</Typography>
        <Card sx={activityLogsStyle.cardSx}>
          <ActivityLog dataList={activityState?.activity_logs} />
        </Card>
      </Box>
    </Box>
  );
}