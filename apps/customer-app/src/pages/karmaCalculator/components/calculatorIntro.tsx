import { webRoutes } from '@core/routes';
import GreenCare from '@core/ui/assets/greenCare.svg';
import GreenLeg from '@core/ui/assets/greenLeg.svg';
import IntroBanner from '@core/ui/assets/introBanner';
import Question from '@core/ui/assets/question.svg';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { karmaCalculatorStyles } from '../style';

const ListDiscription = [
  {
    title: "Answer our questions",
    subTitle: "estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc malesuada euismod.",
    icon: Question,
    bgColor: '#FFF5F3'
  },
  {
    title: "Know your carbon footprint",
    subTitle: "estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc malesuada euismod.",
    icon: GreenLeg,
    bgColor: "#FFF7E8"
  },
  {
    title: "Offset it by following the instructions",
    subTitle: "estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc malesuada euismod.",
    icon: GreenCare,
    bgColor: "#E2F1E6"
  },
]

export default function KarmaCalculator() {

  const navigate = useNavigate();

  const handleLater = () => {
    navigate(-1)
  };
  const handleCalculate = () => {
    navigate(webRoutes.questionsFlows)
  };

  return (
    <Box sx={karmaCalculatorStyles.rootSx}>
      <Box sx={{ ...karmaCalculatorStyles.pageCenter }}>
        <Box sx={{ position: "relative" }}>
          <IntroBanner style={{ position: "absolute", top: '-190px', right: '-50px' }} />
          <Typography sx={karmaCalculatorStyles.introText}>Know & offset your carbon<br />footprints!</Typography>
        </Box>
        <Box sx={{ ...karmaCalculatorStyles.cardBox }} mt={'32px'}>
          <Box>
            {
              ListDiscription?.map((items, i) => (
                <Stack direction={'row'} columnGap={'12px'} mb={'20px'} key={i}>
                  <Box sx={{ ...karmaCalculatorStyles.iconBox, backgroundColor: items?.bgColor }}>
                    <img src={items?.icon} alt='' height={50} width={50}/>
                  </Box>
                  <Box>
                    <Typography sx={karmaCalculatorStyles.title}>{items?.title}</Typography>
                    <Typography sx={karmaCalculatorStyles.subTitle}>{items?.subTitle}</Typography>
                  </Box>
                </Stack>
              ))
            }
          </Box>
          <Stack direction={'row'} justifyContent={'space-between'} columnGap={'16px'}>
            <Button sx={karmaCalculatorStyles.secondaryBtnSx} variant='contained' onClick={handleLater}>Later</Button>
            <Button sx={karmaCalculatorStyles.primaryBtnSx} variant='contained' onClick={handleCalculate}>Calculate & offset</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
