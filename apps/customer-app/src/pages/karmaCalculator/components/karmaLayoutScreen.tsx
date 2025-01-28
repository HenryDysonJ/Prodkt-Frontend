import TriangleIcon from '@core/ui/assets/Triangle';
import { Box, Button, Stack, Typography } from '@mui/material';

import { karmaCalculatorStyles } from '../style';
import { CircleProgressLabel } from './progressLabel';
import SliderProgress from './slider';

interface KarmaLayoutScreenProp {
    questions: string;
    backgroungImg: string;
    circleProgressValue: number;
    childrenData: { id: number, icon: string, label: string, bgColor: string, borderColor: string }[] | { id: number, label: string, bgColor: string, borderColor: string }[];
    varient: "imageWithLabel" | "onlyLabel" | 'progress'
    progressType?: string;
    primaryBtn: string;
    sliderValue?: number
    maxValue?: number,
    minValue?: number,
    secondaryBtn?: string;
    marks?: { label: string, value: number }[]
    selectedOption?: number[]
    handleClickPrimary: () => void;
    handleClickSecondary?: () => void
    handleSliderchange?: (_: any, newValue: any) => void
    handleClickCard?: (item: any) => void
}

interface WhiteCardProp {
    questions: string;
    circleProgressValue: number;
    primaryBtn: string;
    secondaryBtn?: string;
    varient: "imageWithLabel" | "onlyLabel" | 'progress'
    progressType?: string
    maxValue?: number,
    minValue?: number,
    childrenData: { id: number, icon?: string, label: string, bgColor: string, borderColor: string }[];
    marks?: { label: string, value: number }[];
    sliderValue?: number
    selectedOption?: number[]
    handleClickPrimary: () => void;
    handleClickSecondary?: () => void
    handleSliderchange?: (_: any, newValue: any) => void
    handleClickCard?: (item: any) => void
}
interface ChooseItemProps {
    icon: string,
    label: string
    borderColor: string
    bgColor: string
    handleClickCard: () => void
}

export const KarmaLayoutScreen = (props: KarmaLayoutScreenProp) => {
    const {
        questions,
        varient,
        backgroungImg,
        circleProgressValue,
        childrenData,
        primaryBtn,
        secondaryBtn,
        marks,
        sliderValue,
        progressType,
        maxValue,
        minValue,
        selectedOption,
        handleClickCard,
        handleClickPrimary,
        handleClickSecondary,
        handleSliderchange
    } = props;

    return (

        <Box sx={{ ...karmaCalculatorStyles.rootSx, position: "relative" }}>
            <Box sx={{ ...karmaCalculatorStyles.backgroundRoot }} >
                <Stack sx={karmaCalculatorStyles.climateRoot}>
                    <TriangleIcon />
                    <Typography sx={karmaCalculatorStyles.climateText}>15.95 ton C02</Typography>
                </Stack>
                <img src={backgroungImg} alt='bg' width={'100%'} height={'100%'} />
            </Box>
            <WhiteCard
                varient={varient}
                circleProgressValue={circleProgressValue}
                childrenData={childrenData}
                primaryBtn={primaryBtn}
                secondaryBtn={secondaryBtn}
                questions={questions}
                marks={marks}
                minValue={minValue}
                maxValue={maxValue}
                sliderValue={sliderValue}
                progressType={progressType}
                selectedOption={selectedOption}
                handleClickPrimary={handleClickPrimary}
                handleClickSecondary={handleClickSecondary}
                handleSliderchange={handleSliderchange}
                handleClickCard={handleClickCard}
            />
        </Box>
    )
}

const ChooseItemsCard = (props: ChooseItemProps) => {
    const { icon, label, borderColor, bgColor, handleClickCard } = props
    return (
        <Stack sx={{ ...karmaCalculatorStyles.cardItems, borderColor: borderColor, bgcolor: bgColor }} onClick={handleClickCard}>
            <img src={icon} alt='item' height={40} width={40} />
            <Typography sx={karmaCalculatorStyles.answerSx} mt={'8px'}>{label}</Typography>
        </Stack>
    )
}

const WhiteCard = (props: WhiteCardProp) => {
    const {
        questions,
        varient,
        circleProgressValue,
        childrenData,
        primaryBtn,
        secondaryBtn,
        marks,
        sliderValue,
        progressType,
        maxValue,
        minValue,
        selectedOption,
        handleClickCard,
        handleClickPrimary,
        handleClickSecondary,
        handleSliderchange } = props
    return (
        <Box sx={karmaCalculatorStyles.contentRoot}>
            <Box sx={karmaCalculatorStyles.circleProgressRoot}>
                <CircleProgressLabel
                    value={circleProgressValue * 25}
                    symbols={`${circleProgressValue}/4`}
                    thickness={5}
                    size={54}
                    thumbColor={'#FFBA63'}
                    thumbSecondaryColor={'#FFF4E6'}
                />
            </Box>

            <Stack sx={karmaCalculatorStyles.childrenRoot}>
                <Box sx={karmaCalculatorStyles.centerSx}>
                    <Typography mb={'24px'} sx={{ ...karmaCalculatorStyles.questionsSx, textAlign: "center" }}>{questions}</Typography>
                    {
                        varient === 'imageWithLabel' &&
                        <Stack sx={karmaCalculatorStyles.listRootSx} pb={1}>
                            {childrenData?.map((item, i) => (
                                <ChooseItemsCard
                                    key={i}
                                    icon={item?.icon ?? ""}
                                    label={item?.label}
                                    borderColor={selectedOption?.includes(item?.id) ? item?.borderColor : "#fff"}
                                    bgColor={item?.bgColor}
                                    handleClickCard={() => handleClickCard && handleClickCard(item)}
                                />
                            ))}
                        </Stack>
                    }
                    {
                        varient === 'onlyLabel' &&
                        <Stack sx={karmaCalculatorStyles.listLabelRootSx} pb={1}>
                            {childrenData?.map((item, i) => (
                                <Stack
                                    key={i}
                                    sx={{ ...karmaCalculatorStyles.listLabelItem, borderColor: selectedOption?.includes(item?.id) ? item?.borderColor : "#fff", bgcolor: item?.bgColor }}
                                    onClick={() => handleClickCard && handleClickCard(item)}
                                >
                                    <Typography sx={karmaCalculatorStyles.answerSx} width={'64px'}>{item?.label}</Typography>
                                </Stack>))}
                        </Stack>
                    }

                    {
                        varient === 'progress' &&
                        <>
                            <SliderProgress
                                minValue={minValue ? minValue : 0}
                                maxValue={maxValue ? maxValue : 10}
                                marks={marks ? marks : false}
                                value={sliderValue ?? 0}
                                handleChange={handleSliderchange} progressType={progressType}
                            />
                            <Typography mt={'24px'} sx={karmaCalculatorStyles.sliderValueSx}>{`${sliderValue} ${progressType}`}</Typography>
                        </>
                    }

                </Box>
                <Stack direction={'row'} columnGap={2}>
                    {secondaryBtn && <Button sx={karmaCalculatorStyles.secondaryBtnSx} onClick={handleClickSecondary}>{secondaryBtn}</Button>}
                    {primaryBtn && <Button sx={karmaCalculatorStyles.primaryBtnSx} onClick={handleClickPrimary}>{primaryBtn}</Button>}
                </Stack>
            </Stack>
        </Box>
    );
};
