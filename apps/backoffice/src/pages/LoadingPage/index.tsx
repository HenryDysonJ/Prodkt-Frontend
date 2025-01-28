/* eslint-disable react/jsx-key */

import { ProductIcon } from '@core/ui/atoms';
import { Box } from '@mui/material';
import { loadingPageStyle } from './style';

export default function LoadingPage() {

  return (
    <Box sx={loadingPageStyle.rootSx}>
      <Box sx={{
        display: 'grid',
        minHeight: '100vh',
        placeItems: 'center',
        alignContent: 'center'
      }}>
        <ProductIcon sx={{
          width: '220px',
          height: '220px'
        }} />
      </Box>
    </Box>
  );
}