import { Box, Typography } from '@mui/material';
import React, { CSSProperties } from 'react';

import { brandLoginStyles } from '../style';

interface CarosalItemsProp {
  imgIcon: React.ReactNode;
  carosalTitle: string;
  carosalSubTitle: string;
}

const CarosalItems = (props: CarosalItemsProp) => {
  const { imgIcon, carosalTitle, carosalSubTitle } = props;
  return (
    <Box>
      <Box sx={brandLoginStyles.tailorCardImg}>
        <img src={`${imgIcon}`} alt="tailor-img" style={brandLoginStyles.imgIconStyle as CSSProperties} />
      </Box>
      <Box sx={brandLoginStyles.titleContainer}>
        <Typography sx={brandLoginStyles.carosalTitle}>{carosalTitle}</Typography>
        <Typography mt={3} sx={brandLoginStyles.carosalSubTitle}>
          {carosalSubTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default CarosalItems;
