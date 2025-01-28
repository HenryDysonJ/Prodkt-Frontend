import { webRoutes } from '@core/routes';
import { useKarmaCalculator } from '@core/store';
import Bicycle from '@core/ui/assets/Bicycle.png';
import Car from '@core/ui/assets/Car.png';
import ElecticPlug from '@core/ui/assets/electric-plug.png';
import FulePumb from '@core/ui/assets/Fuel-Pump.png';
import LayoutA from '@core/ui/assets/LayoutA.png';
import LayoutB from '@core/ui/assets/LayoutB.png';
import LayoutC from '@core/ui/assets/LayoutC.png';
import LayoutD from '@core/ui/assets/LayoutD.png';
import LayoutE from '@core/ui/assets/LayoutE.png';
import LayoutF from '@core/ui/assets/LayoutF.png';
import Leafy from '@core/ui/assets/Leafy-Green.png';
import Schooter from '@core/ui/assets/MotorScooter.png';
import Oden from '@core/ui/assets/Oden.png';
import PoultryLeg from '@core/ui/assets/Poultry-Leg.png';
import { Box } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { KarmaLayoutScreen } from './karmaLayoutScreen';

const vehicleType = [
    { id: 1, icon: Bicycle, label: 'Bicycle/ Walk', bgColor: '#EEF6FF', borderColor: '#C5D5EE' },
    { id: 2, icon: Schooter, label: 'Two wheeler', bgColor: '#FFF4E6', borderColor: '#FFBA63' },
    { id: 3, icon: Car, label: 'Car', bgColor: '#FFF4F3', borderColor: '#EB7E74' },
]

const fuelType = [
    { id: 1, icon: FulePumb, label: 'Petrol/ Diesel', bgColor: '#FFF4F3', borderColor: '#EB7E74' },
    { id: 2, icon: ElecticPlug, label: 'Electric vehicle', bgColor: '#FFF4E6', borderColor: '#FFBA63' }
]

const foodType = [
    { id: 1, icon: Leafy, label: 'veg', bgColor: '#E4FFEE', borderColor: '#42A87F' },
    { id: 2, icon: PoultryLeg, label: 'Non veg', bgColor: '#FFF4F3', borderColor: '#EB7E74' },
    { id: 3, icon: Oden, label: 'Both', bgColor: '#FFF4E6', borderColor: '#FFBA63' }
]
const homeApplianceType = [
    { id: 1, label: 'Fridge', bgColor: '#E4FFEE', borderColor: '#42A87F' },
    { id: 2, label: 'AC', bgColor: '#FFF4E6', borderColor: '#FFBA63' },
    { id: 3, label: 'Chimney', bgColor: '#FFF4F3', borderColor: '#EB7E74' },
    { id: 4, label: 'Washing machine', bgColor: '#F9F5F7', borderColor: '#EF9BC5' },
    { id: 5, label: 'Electric vehicles', bgColor: '#FCF5FF', borderColor: '#ECC3FF' },
    { id: 6, label: 'Air cooler', bgColor: '#E4FBFF', borderColor: '#B2F3FF' },
    { id: 7, label: 'Mixer/ Grinder', bgColor: '#FFF4F3', borderColor: '#EB7E74' },
]

const vehicleMarks = [{ label: "2", value: 2 }, { label: "4", value: 4 }, { label: "6", value: 6 }, { label: "8", value: 8 }, { label: "10", value: 10 }]

const KmMarks = [{ label: "", value: 10 }, { label: "", value: 250 }]

export const QuestionFlows = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {
        karmaCalculatorState,
        handleClickVehicles,
        handleClickFuelType,
        handleClickFootType,
        handleClickHomeAppliance,
        handleChangeKilometer,
        handleChangeUnits,
        handleChangeVehiclesCount,
    } = useKarmaCalculator()

    const handleClickSecondary = () => {
        navigate(-1)
    }

    const renderLayouts = (path: string) => {
        switch (path) {
            case webRoutes.questionsFlows:
                return (
                    <KarmaLayoutScreen
                        questions={'Choose the vehicles you use for commuting?'}
                        varient={'imageWithLabel'}
                        backgroungImg={LayoutA}
                        circleProgressValue={1}
                        childrenData={vehicleType}
                        primaryBtn={'Next'}
                        handleClickPrimary={() => navigate(webRoutes.chooseVehicles)}
                        handleClickCard={handleClickVehicles}
                        selectedOption={karmaCalculatorState?.vehicles}
                    />
                )
            case webRoutes.chooseVehicles:
                return (
                    <KarmaLayoutScreen
                        questions={'How many vehicles do you own?'}
                        varient={'progress'}
                        backgroungImg={LayoutA}
                        circleProgressValue={1}
                        childrenData={vehicleType}
                        progressType={'vehicles'}
                        minValue={0}
                        maxValue={10}
                        marks={vehicleMarks}
                        sliderValue={karmaCalculatorState?.noOfVehicles}
                        handleSliderchange={handleChangeVehiclesCount}
                        primaryBtn={'Next'}
                        secondaryBtn={'Back'}
                        handleClickPrimary={() => navigate(webRoutes.chooseFuel)}
                        handleClickSecondary={handleClickSecondary}
                    />
                )
            case webRoutes.chooseFuel:
                return (
                    <KarmaLayoutScreen
                        questions={'What type of fuel do you use?'}
                        varient={'imageWithLabel'}
                        backgroungImg={LayoutB}
                        circleProgressValue={1}
                        childrenData={fuelType}
                        selectedOption={karmaCalculatorState?.fuelType}
                        primaryBtn={'Next'}
                        secondaryBtn={'Back'}
                        handleClickPrimary={() => navigate(webRoutes.driveKm)}
                        handleClickSecondary={handleClickSecondary}
                        handleClickCard={handleClickFuelType}

                    />
                )
            case webRoutes.driveKm:
                return (
                    <KarmaLayoutScreen
                        questions={'How many kilometers you drive per week?'}
                        varient={'progress'}
                        backgroungImg={LayoutC}
                        circleProgressValue={1}
                        childrenData={fuelType}
                        progressType={'Km'}
                        marks={KmMarks}
                        minValue={10}
                        maxValue={250}
                        sliderValue={karmaCalculatorState?.noOfKiloMeter}
                        handleSliderchange={handleChangeKilometer}
                        primaryBtn={'Next'}
                        secondaryBtn={'Back'}
                        handleClickPrimary={() => navigate(webRoutes.normalyEate)}
                        handleClickSecondary={handleClickSecondary}
                    />
                )
            case webRoutes.normalyEate:
                return (
                    <KarmaLayoutScreen
                        questions={'What you normally eat?'}
                        varient={'imageWithLabel'}
                        backgroungImg={LayoutD}
                        circleProgressValue={2}
                        childrenData={foodType}
                        selectedOption={karmaCalculatorState?.foodType}
                        primaryBtn={'Next'}
                        secondaryBtn={'Back'}
                        handleClickPrimary={() => navigate(webRoutes.homeAppliance)}
                        handleClickSecondary={handleClickSecondary}
                        handleClickCard={handleClickFootType}
                    />
                )
            case webRoutes.homeAppliance:
                return (
                    <KarmaLayoutScreen
                        questions={'Select the appliances your use at your home'}
                        varient={'onlyLabel'}
                        backgroungImg={LayoutE}
                        circleProgressValue={3}
                        childrenData={homeApplianceType}
                        selectedOption={karmaCalculatorState?.homeAppliance}
                        primaryBtn={'Next'}
                        secondaryBtn={'Back'}
                        handleClickPrimary={() => navigate(webRoutes.consumeElectricity)}
                        handleClickSecondary={handleClickSecondary}
                        handleClickCard={handleClickHomeAppliance}
                    />
                )
            case webRoutes.consumeElectricity:
                return (
                    <KarmaLayoutScreen
                        questions={'How much electricity do you consume for a month?'}
                        varient={'progress'}
                        backgroungImg={LayoutF}
                        circleProgressValue={4}
                        childrenData={fuelType}
                        progressType={'Units'}
                        marks={KmMarks}
                        minValue={100}
                        maxValue={1000}
                        sliderValue={karmaCalculatorState?.unitsOfElectricity}
                        handleSliderchange={handleChangeUnits}
                        primaryBtn={'Calculate carbon footprint'}
                        handleClickPrimary={() => navigate(webRoutes.summary)}
                    />
                )
            default:
                break;
        }
    }
    return (
        <Box>{renderLayouts(location?.pathname)}</Box>
    )
}
