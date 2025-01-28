import { Box, Grid, Stack, SxProps, Theme, Typography } from "@mui/material";
import { TopBar } from "@core/ui/components";
import { useNavigate } from "react-router-dom";
import { CustomStepper } from "@atoms/stepper";

import StartProcess from "@assets/brandAssets/startProcesIcon";
import NotProcessIcon from "@assets/brandAssets/notProcessIcon";
import ActiveProcess from "@assets/brandAssets/activeProcess";

import EmptyStateIcon from "../../assets/emptyState";
import { broadcastMsgStyle } from "./style";
import { useEffect, useState } from "react";

export interface CreateBroast {
    className?: string;
    sx?: SxProps<Theme>;
}

const orderData = [
    { id: 1, label: 'Warranty details', icon: <StartProcess />, color: 'custom.primary' },
    { id: 2, label: 'User manual', icon: <NotProcessIcon />, color: 'custom.onSurfaceVariant' },
    { id: 3, label: 'Other documents', icon: <NotProcessIcon />, color: 'custom.onSurfaceVariant' },
];

export function CreateBroast(props: CreateBroast): JSX.Element {
    const { className = "", sx = {}, ...rest } = props;

    const [selectOrder, setSelectOrder] = useState<any>([]);
    const [progressWidth, setProgressWidth] = useState(0);
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    const handleNext = () => {
        setCount(count + 1);
        setProgressWidth((count / selectOrder.length) * 110);
    };
    const handleCancel = () => {
        setCount(count - 1);
        setProgressWidth(((count - 2) / selectOrder.length) * 110);
    };

    const changeStatus = () => {
        // const updatedOrders = orderData?.map((order: any) => {
        //   if (order?.id === count) {
        //     return { ...order, icon: <StartProcess />, color: '#FF980E' };
        //   } else if (order?.id < count) {
        //     return { ...order, icon: <ActiveProcess />, color: 'success.main' };
        //   } else if (order?.id < count) {
        //     return { ...order, icon: <NotProcessIcon />, color: 'custom.onSurfaceVariant' };
        //   } else {
        //     return order;
        //   }
        // });
        // setSelectOrder(updatedOrders);
        // return updatedOrders;
    };

    useEffect(() => {
        changeStatus();
    }, [count]);


    return (
        <Box
            sx={broadcastMsgStyle.createRootSx}
            className={`${className}`}
            {...rest}
        >
            <TopBar
                title={"Create new webform"}
                backBtn={true}
                backBtnFunc={() => navigate(-1)}
                outlineButtonText="Cancel"
                handleClickOutlineButton={() => handleCancel()}
                containButtonText={"Next"}
                handleClickContainButton={() => handleNext()}
            />
            <Stack sx={broadcastMsgStyle.formContainerStyle}>
                <Grid container spacing={2}>
                    <Grid item md={8} lg={9}>
                        <Stack sx={broadcastMsgStyle.infoCntainer}>
                            <Stack>
                                <CustomStepper
                                    selectOrder={selectOrder}
                                    progressWidth={progressWidth}
                                    count={count}
                                    renderComponent={() => undefined}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={4} lg={3}>
                        <Stack sx={broadcastMsgStyle.infoCntainer}>
                            {false ? (
                                <Stack p={2} sx={broadcastMsgStyle.spaceContainer}>
                                    <Box>klklk</Box>
                                </Stack>
                            ) : (
                                <Stack sx={broadcastMsgStyle.previewContainer}>
                                    <Box sx={broadcastMsgStyle.previewContainer}>
                                        <Box>
                                            <EmptyStateIcon />
                                        </Box>
                                        <Typography
                                            sx={{
                                                ...broadcastMsgStyle.componentName,
                                                width: { md: "13rem", lg: "20rem" },
                                            }}
                                        >
                                            Choose any template to see the preview here
                                        </Typography>
                                    </Box>
                                </Stack>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}
