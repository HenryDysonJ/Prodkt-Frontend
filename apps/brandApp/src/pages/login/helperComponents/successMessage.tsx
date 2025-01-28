import { Box, Typography } from '@mui/material';
import React from 'react';

import { brandLoginStyles } from '../style';

interface SuccessProp {
  successImg: React.ReactNode;
  title: string;
  subTitle: string;
  handleGoBack?: () => void
}

const SuccessMessage = (props: SuccessProp) => {
  const { successImg, title, subTitle, handleGoBack = () => false } = props;
  return (
    <Box sx={brandLoginStyles.successRootStyle}>
      <Box>{successImg}</Box>
      <Box mt={4} sx={brandLoginStyles.successTextCntainer}>
        <Typography sx={brandLoginStyles.successMessageTitle}>{title}</Typography>
        <Typography mt={2} sx={brandLoginStyles.successMessageSubTitle}>
          {subTitle}
        </Typography>
      </Box>
      <Box sx={brandLoginStyles.forgotRootStyle}>
        <Typography
          sx={brandLoginStyles.forgotTextStyle}
          onClick={() => handleGoBack()}
        >
          Go back
        </Typography>
      </Box>
    </Box>
  );
};

export default SuccessMessage;
