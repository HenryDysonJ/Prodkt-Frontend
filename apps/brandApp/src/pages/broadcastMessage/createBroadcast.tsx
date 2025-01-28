import { CustomStepper } from "@atoms/stepper";
import { useBroadCastMessage, useOffersStore } from "@core/store";
import { TopBar } from "@core/ui/components";
import { localStorageKeys } from "@core/utils";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { Box, Grid, Stack, SxProps, Theme, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import ActiveProcess from "../../assets/activeProcess";
import EmptyStateIcon from "../../assets/emptyState";
import NotProcessIcon from "../../assets/notProcessIcon";
import StartProcess from "../../assets/startProcesIcon";
import Triangle from "../../assets/triangle";
import { Selectcustomers } from "./helperComponents/selectcustomers";
import { ChooseTemplate } from "./helperComponents/selectTemplate";
import { SheduleAndPublish } from "./helperComponents/sheduleAndPublish";
import Templats from "./helperComponents/templats";
import { broadcastMsgStyle } from "./style";
import { enqueueSnackbar } from "notistack";

export interface CreateBroast {
  className?: string;
  sx?: SxProps<Theme>;
}

const orderData = [
  {
    id: 1,
    label: "Select template",
    icon: <StartProcess />,
    color: "custom.primary",
  },
  {
    id: 2,
    label: "Select customers",
    icon: <NotProcessIcon />,
    color: "custom.onSurfaceVariant",
  },
  {
    id: 3,
    label: "Schedule & Publish",
    icon: <NotProcessIcon />,
    color: "custom.onSurfaceVariant",
  },
];

export function CreateBroast(props: CreateBroast): JSX.Element {

  const { addBroadcast, clearAll, setFieldError, broadCasteState, getTemplateList, editBroadcast } = useBroadCastMessage()
  const { selectTemplates } = broadCasteState
  const { className = "", sx = {}, ...rest } = props;
  const [selectOrder, setSelectOrder] = useState<any>([]);
  const [progressWidth, setProgressWidth] = useState(0);
  const [count, setCount] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const { exchangeBrandList, getExchangeBrandList } = useOffersStore()
  const [searchParams, setSearchParams] = useSearchParams();
  const [back, setBack] = useState(false)
  const navigate = useNavigate();


  const validateStep1 = () => {
    let isValid = true;
    if (broadCasteState?.selectTemplates?.broadcastName === '') {
      setFieldError('broadcastName', 'Broadcast name is required');
      isValid = false;
    }
    if (broadCasteState?.selectTemplates?.templates.length === 0) {
      isValid = false;
    }

    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    if (broadCasteState?.selectTags?.length === 0) {
      setFieldError('selectTags', 'Customer tag is required');
      isValid = false;
    }
    return isValid;
  };

  const validateStep3 = () => {
    let isValid = true;
    if (broadCasteState?.sheduleAndPublish?.deliveryType === 'Schedule') {
      if (broadCasteState?.sheduleAndPublish?.startDate === '') {
        setFieldError('startDate', 'End date is required');
        isValid = false;
      }
      if (broadCasteState?.sheduleAndPublish?.startTime === '') {
        setFieldError('startTime', 'Start time is required');
        isValid = false;
      }
    }
    return isValid
  }

  const handleNext = async () => {
    setBack(false)
    if (count === 1) {
      if (validateStep1()) {
        setSearchParams('searchQuery');
        setCount(count + 1);
        setProgressWidth((count / selectOrder.length) * 124);
      }
    }
    if (count === 2) {
      if (validateStep2()) {
        setCount(count + 1);
        setProgressWidth((count / selectOrder.length) * 124);
      }
    }

    if (count === 3) {
      if (validateStep3()) {
        if (broadCasteState?.id?.length > 0) {
          const res: any = await editBroadcast(10)
          if (res == 200) {
            navigate("/marketing/broadcast-messages")
            clearAll()
          }
        } else {
          const response: any = await addBroadcast(10)
          if (response?.status === 200) {
            navigate("/marketing/broadcast-messages")
            clearAll()
          }
        }
      }
    }
  };


  const handleCancel = async () => {
    setOpenAlert(true);
  };

  const handleChangeTemp = (item: any) => {
    setCount(1)
  };

  const handleBackFn = () => {
    setBack(true)
    if (validateStep1() && count == 1) {
      setOpenAlert(true)
    } else {
      if (count > 1) {
        setCount(count - 1);
        setProgressWidth(((count - 2) / selectOrder.length) * 120);
      } else if (count === 1) {
        navigate(-1),
          clearAll()
      }
    }
  }

  const handleDiscard = () => {
    setOpenAlert(false);
    navigate("/marketing/broadcast-messages")
    clearAll()
  }

  const handleDraft = async () => {
    if ((count === 3 || count === 2)) {
      if (validateStep2()) {
        const response: any = await addBroadcast(5)
        if (response?.status === 200) {
          setOpenAlert(false);
          navigate("/marketing/broadcast-messages")
          clearAll()
        }
      } else {
        enqueueSnackbar("Please select customer tag", {
          variant: "error",
          style: { fontSize: "1.4rem" },
        });
        setOpenAlert(false);
      }
    } else if ((count === 3 || count === 2) && broadCasteState?.id?.length === 0) {
      editBroadcast(5)
      setOpenAlert(false);
      navigate("/marketing/broadcast-messages")
      clearAll()
    } else if (count === 1) {
      navigate("/marketing/broadcast-messages")
      clearAll()
    }
  };

  const changeStatus = () => {
    const updatedOrders = orderData?.map((order: any) => {
      if (order?.id === count) {
        return { ...order, icon: <StartProcess />, color: "#FF980E" };
      } else if (order?.id < count) {
        return { ...order, icon: <ActiveProcess />, color: "#4E585E" };
      } else if (order?.id < count) {
        return {
          ...order,
          icon: <NotProcessIcon />,
          color: "custom.onSurfaceVariant",
        };
      } else {
        return order;
      }
    });
    setSelectOrder(updatedOrders);
    return updatedOrders;
  };

  const renderComponentSlide = (count: number) => {
    switch (count) {
      case 1:
        return <ChooseTemplate count={back} />;
      case 2:
        return <Selectcustomers />;
      case 3:
        return <SheduleAndPublish />;
      default:
        <></>;
    }
  };

  const token = localStorage?.getItem(localStorageKeys.authToken)

  const brandId = exchangeBrandList?.brand?.id

  useEffect(() => {
    changeStatus();
    renderComponentSlide(count)
  }, [count]);

  useEffect(() => {
    getExchangeBrandList(token);
    if (brandId) {
      getTemplateList(brandId);
    }
  }, [token, brandId])

  return (
    <Box
      sx={broadcastMsgStyle.createRootSx}
      className={`${className}`}
      {...rest}
    >
      <TopBar
        title={broadCasteState?.id?.length > 0 ? "Edit broadcast" : "Create new broadcast"}
        backBtn={true}
        backBtnFunc={() => handleBackFn()}
        outlineButtonText={count === 1 ? "Cancel" : 'Save draft'}
        handleClickOutlineButton={() => handleCancel()}
        containButtonText={count === 3 ? "Publish" : "Next"}
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
                  renderComponent={renderComponentSlide(count)}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} lg={3}>
            <Stack sx={broadcastMsgStyle.infoCntainer}>
              {broadCasteState?.selectTemplates?.templates?.title?.length > 0 ? (
                <Stack sx={broadcastMsgStyle.spaceContainer} gap={2}>
                  <Box>
                    <Templats
                      title={selectTemplates?.templates?.title}
                      status={selectTemplates?.templates?.status}
                      select={selectTemplates?.templates?.select}
                      changeTemp={'Change'}
                      chats={selectTemplates?.templates?.chats}
                      setHandleSelect={(val) => undefined}
                      handleChangeTemp={() => handleChangeTemp(selectTemplates?.templates)}
                      boxStyle={{ height: 'auto' }}
                    />
                  </Box>
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

      {/** open alert modal */}
      <DialogBox
        title={""}
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        titleVariant={"inherit"}
        maxWidth="sm"
        titleStyle={{ display: "none" }}
        closeIcon={false}
        dialogBodyStyle={broadcastMsgStyle.mismatchDialog}
        dialogmodalBoxStyle={broadcastMsgStyle.mismatchDialogBodySx}
        Body={
          <>
            <Stack sx={broadcastMsgStyle.mismatchBodyContainer}>
              <Box sx={broadcastMsgStyle.warnigIconStle}>
                <Triangle />
              </Box>
              <Typography sx={broadcastMsgStyle.breakdownTitle}>
                Save details as draft ?
              </Typography>
              <Typography
                textAlign={"center"}
                mt={"1rem"}
                sx={broadcastMsgStyle.stockInKeyText}
              >
                Are you sure want to cancel the Broadcast message details & save as draft
              </Typography>
              <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                <BasicButton
                  sx={{
                    ...broadcastMsgStyle.missMatchButtonStyle,
                    borderColor: "custom.surfaceBlue",
                  }}
                  variant="outlined"
                  onClick={handleDiscard}
                >
                  Discard
                </BasicButton>

                <BasicButton
                  sx={{
                    ...broadcastMsgStyle.missMatchButtonStyle,
                    ":hover": {
                      backgroundColor: "custom.surfaceLightBlue",
                    },
                    backgroundColor: "custom.surfaceLightBlue",
                  }}
                  variant="contained"
                  rootSx={{ width: "100%" }}
                  onClick={handleDraft}
                >
                  Save draft
                </BasicButton>
              </Stack>
            </Stack>
          </>
        }
      />
    </Box>
  );
}
