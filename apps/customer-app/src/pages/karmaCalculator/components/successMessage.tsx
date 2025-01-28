import SuccessAnimate from '@core/ui/assets/Animation-success.gif';
import SuccessBg from '@core/ui/assets/success-bg.svg';
import SuccessTick from '@core/ui/assets/tick-circle.svg';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { karmaCalculatorStyles } from '../style';

const SuccessMessage = () => {
  const [showAnimate, setShowAnimate] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowAnimate(false)
    }, 2200);
  }, [])

  return (
    <Box sx={{ ...karmaCalculatorStyles.successRoot, backgroundImage: `url(${SuccessBg})` }}>
      <Stack justifyContent={'center'} alignItems={'center'}>
        <img src={showAnimate ? SuccessAnimate : SuccessTick} alt='' height={100} width={100} />
        <Typography sx={{ ...karmaCalculatorStyles.animationText, width: "248px", mt: 4 }} >Form submitted successfully</Typography>
      </Stack>
    </Box>
  );
};

export default SuccessMessage;