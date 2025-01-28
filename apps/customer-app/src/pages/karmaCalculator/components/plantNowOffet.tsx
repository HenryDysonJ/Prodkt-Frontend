import { webRoutes } from '@core/routes';
import { useKarmaCalculator } from '@core/store';
import BannerTop from '@core/ui/assets/Clouds-and-sun.svg';
import BannerBottom from '@core/ui/assets/Trees.svg';
import { CustomTextfield } from '@core/ui/atoms';
import { Box, Button, keyframes, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { karmaCalculatorStyles } from '../style';

const PlantNowOffet = () => {
    const { treePlantinationForm, handleChangeForm } = useKarmaCalculator()

    const [isAnimateTitle, setAnimateTitle] = useState(false)
    const [isAnimateForm, setAnimateForm] = useState(false)

    const navigate = useNavigate()

    const animationText = "Great job! You're making a positive contribution to preserving our green environment.";
    const formSubTitile = 'Our team will reach out to you to help with your tree plantation'

    const slideTop = keyframes`
    0% {
         transform: translateY(100vh);
       }
  100% {
         transform: translateY(0);
       }`;

    const handleSubmit = () => {
        navigate(webRoutes.successMessage)
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimateTitle(true)
            setAnimateForm(false)
        }, 2000);
        setTimeout(() => {
            setAnimateTitle(false)
            setAnimateForm(true)
        }, 4000);
    }, [])
    return (
        <Box sx={karmaCalculatorStyles.animationRoot}>
            {isAnimateTitle &&
                <Box sx={{ ...karmaCalculatorStyles.textBoxAnimation, animation: isAnimateTitle && `${slideTop} 0.1s ease-out both` }}>
                    <Typography sx={{ ...karmaCalculatorStyles.animationText, width: "248px" }} >{animationText}</Typography>
                </Box>
            }

            {isAnimateForm &&
                <Box sx={{ ...karmaCalculatorStyles.formContainer, animation: isAnimateForm && `${slideTop} 0.1s ease-out both` }}>
                    <Box sx={{ ...karmaCalculatorStyles.cardBox, padding: "20px", minHeight: '80vh' }}>

                        <Stack alignItems={'center'}>
                            <Typography sx={karmaCalculatorStyles.animationText}>Fill out this form</Typography>
                            <Typography sx={{ ...karmaCalculatorStyles.subTitle, width: "270px", textAlign: "center", mt: '12px', mb: '32px' }}>{formSubTitile}</Typography>

                            <CustomTextfield
                                textFieldStyle={{ mb: '16px' }}
                                testid="Name"
                                definitionName="Your Name"
                                isRequired
                                variant="textField"
                                value={treePlantinationForm?.yourName}
                                onChange={(e) => handleChangeForm('yourName', e.target.value as never)}
                                sx={{ width: "100%" }}
                            />
                            <CustomTextfield
                                textFieldStyle={{ mb: '16px' }}
                                testid="Number"
                                definitionName="Phone number"
                                isRequired
                                variant="textField"
                                value={treePlantinationForm?.phoneNumber}
                                onChange={(e) => handleChangeForm('phoneNumber', e.target.value as never)}
                                sx={{ width: "100%" }}
                            />
                            <CustomTextfield
                                textFieldStyle={{ mb: '16px' }}
                                testid="Email"
                                definitionName="Email"
                                isRequired
                                variant="textField"
                                value={treePlantinationForm?.email}
                                onChange={(e) => handleChangeForm('email', e.target.value as never)}
                                sx={{ width: "100%" }}
                            />
                            <CustomTextfield
                                textFieldStyle={{ mb: '16px' }}
                                testid="Location"
                                definitionName="Location"
                                isRequired
                                variant="textField"
                                value={treePlantinationForm?.location}
                                onChange={(e) => handleChangeForm('location', e.target.value as never)}
                                sx={{ width: "100%" }}
                            />
                            <CustomTextfield
                                textFieldStyle={{ mb: '16px' }}
                                testid="tree"
                                definitionName="How many trees you want to plant?"
                                isRequired
                                variant="textField"
                                value={treePlantinationForm?.numOfPlantedTree}
                                onChange={(e) => handleChangeForm('numOfPlantedTree', e.target.value as never)}
                                sx={{ width: "100%" }}
                            />
                            <CustomTextfield
                                textFieldStyle={{ mb: '16px' }}
                                testid="planted"
                                definitionName="Name to be planted on behalf on?"
                                isRequired
                                variant="textField"
                                value={treePlantinationForm?.nameToBePlanted}
                                onChange={(e) => handleChangeForm('nameToBePlanted', e.target.value as never)}
                                sx={{ width: "100%" }}
                            />
                        </Stack>

                        <Button sx={karmaCalculatorStyles.primaryBtnSx} onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Box>
            }

            <img src={BannerTop} alt='banner-top' width={'100%'} />
            <img src={BannerBottom} alt='banner-top' width={'100%'} />
        </Box>
    )
}

export default PlantNowOffet