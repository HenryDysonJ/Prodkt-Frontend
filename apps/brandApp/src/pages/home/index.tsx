/* eslint-disable react/jsx-key */
import { AppLayout } from '@core/ui/components/appLayout';
import { Box, Typography } from '@mui/material';

import { homeStyle } from './style';

export default function Home() {
  return (
    <AppLayout>
      <Box sx={homeStyle.rootSx}>
        <Typography variant='h3' color='primary.main' sx={{ fontWeight: 500 }}>
         Prodkt: brand-app
        </Typography>
      </Box>
    </AppLayout>
  );
}
