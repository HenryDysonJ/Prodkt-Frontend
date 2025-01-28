import { webRoutes } from '@core/routes';
import Banner from '@core/ui/assets/banner_a.png'
import BannerA from '@core/ui/assets/Banner-2.png'
import Tree from '@core/ui/assets/Deciduous-Tree.png'
import ShareIcon from '@core/ui/assets/shareIcon';
import SummaryA from '@core/ui/assets/summary-1.svg'
import SummaryB from '@core/ui/assets/summry-2.svg'
import { Box, Button, Stack, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart';
import { useNavigate } from 'react-router-dom';

import { karmaCalculatorStyles } from '../style'

const Summary = () => {
    const navigate = useNavigate()

    const handleReminderLater = () => {
        navigate(webRoutes.home)
    }

    const handlePlantNow = () => {
        navigate(webRoutes.plantNowOffset)
    }
    return (
        <Box sx={{
            ...karmaCalculatorStyles.pageCenter, padding: '0 24px', backgroundImage: `url(${Banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
        }}>
            <Box sx={{ ...karmaCalculatorStyles.cardBox, padding: "20px", gap: '16px' }}>
                <Box sx={{ ...karmaCalculatorStyles.statusBox, borderColor: "#E6EEFA", backgroundImage: `url(${SummaryA})`, bgcolor: "#FAFCFF" }}>
                    <Typography mt={'22px'} sx={karmaCalculatorStyles.questionsSx}>Your annual carbon footprint</Typography>
                    <Box sx={{ height: '100%', width: "100%" }}>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Commute', color: "#F58E27" },
                                        { id: 1, value: 15, label: 'Food', color: "#F4646E" },
                                        { id: 2, value: 20, label: 'Appliances', color: "#4AC596" },
                                    ],
                                    innerRadius: 86,
                                    outerRadius: 101,
                                    paddingAngle: 0,
                                    cornerRadius: 25,
                                    startAngle: -91,
                                    endAngle: 96,
                                    cx: 160,
                                    cy: 100,
                                }
                            ]}
                            slotProps={{
                                legend: { hidden: true },
                            }}
                            width={'100%'}
                            height={100}
                        />
                    </Box>
                    <Stack direction={'row'} gap={'24px'} alignItems={"center"}>
                        <Stack direction={'row'} columnGap={'6px'} alignItems={'center'}>
                            <Box sx={{ ...karmaCalculatorStyles.marks, bgcolor: "#F58E27" }} />
                            <Typography sx={karmaCalculatorStyles.subTitle}>Commute</Typography>
                        </Stack>
                        <Stack direction={'row'} columnGap={'6px'} alignItems={"center"}>
                            <Box sx={{ ...karmaCalculatorStyles.marks, bgcolor: "#F4646E" }} />
                            <Typography sx={karmaCalculatorStyles.subTitle}>Food</Typography>
                        </Stack>
                        <Stack direction={'row'} columnGap={'6px'} alignItems={"center"}>
                            <Box sx={{ ...karmaCalculatorStyles.marks, bgcolor: "#4AC596" }} />
                            <Typography sx={karmaCalculatorStyles.subTitle}>Appliances</Typography>
                        </Stack>
                    </Stack>
                    <Button startIcon={<ShareIcon />} sx={{ ...karmaCalculatorStyles.avgBtn, mt: "22px" }} variant='contained'>Which is 25% higher than average</Button>
                </Box>

                <Box sx={{ ...karmaCalculatorStyles.statusBox, borderColor: '#D9ECE0', backgroundImage: `url(${SummaryB})`, bgcolor: "#F8FEFC" }}>
                    <img src={Tree} alt='' height={48} width={48} />
                    <Typography mt={'22px'} sx={karmaCalculatorStyles.questionsSx}>Offset your excess carbon footprint by</Typography>
                    <Typography mt={'12px'} sx={{ ...karmaCalculatorStyles.questionsSx, color: "success.A200" }}>Planting 15 Saplings</Typography>
                    <Button onClick={handlePlantNow} sx={{ ...karmaCalculatorStyles.successBtnSx, mt: '20px' }} variant='contained'>Plant now to offset</Button>
                </Box>

                <Button sx={{ textTransform: "none", padding: 0 }} onClick={handleReminderLater}>Remind me later</Button>

            </Box>
        </Box>
    )
}

export default Summary