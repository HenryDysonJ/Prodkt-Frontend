import TopBar from "@components/brandTopBar";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { createTemplateStyle } from "./style";
import { BasicInformation } from "./basicInfo";
import { Header } from "./header";
import { MessageBody } from "./messageBody";
import { Buttons } from "./buttons";
import { ChatMessage } from "./chatMessage";
import { useNavigate } from "react-router-dom";
import { DialogBox } from "@crayond_dev/ui_dialog";
import Triangle from "@assets/brandAssets/triangle";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { useEffect, useState } from "react";
import { useTemlateStore } from "@core/store/brand-app";
import { brandRoutes } from "@core/routes/brand-app";
import { enqueueSnackbar } from "notistack";

export const CreateTemplate = () => {
  const { createNewTemplate, getTemplateCategoryList, viewType, setViewType, basicInfo, setFieldError, templateJson, setClearAll, items, loading } = useTemlateStore();
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  const history = useNavigate();
  const handleCancel = () => {
    setOpenAlert(true);
  };

  const selectedCustomerName = items.find((item: string) => item === 'Customer name');
  const selectedOfferName = items.find((item: string) => item === 'Product');
  const selectedPurchaseDate = items.find((item: string) => item === 'Purchase date');

  const buttonValidate = templateJson?.buttons?.map((item: any) => {
    const mobileNo = item?.mobileNo?.mobile
    return mobileNo
  })

  const validateValues = () => {
    let isValid = true;
    if (basicInfo?.templateCategory?.label === 'Offer') {
      if (selectedCustomerName === 'Customer name') {
        if (templateJson?.declareVariables?.customerNameOffer === '') {
          setFieldError("customerNameOffer", "Customer name is required");
          isValid = false;
        }
      }
      if (selectedPurchaseDate === 'Purchase date') {
        if (templateJson?.declareVariables?.purchaseDateOffer === '') {
          setFieldError("purchaseDateOffer", "Purchase date is required");
          isValid = false;
        }
      }
      if (templateJson?.declareVariables?.subscribe === '') {
        setFieldError("subscribe", "Footer text is required");
        isValid = false;
      }
      if (basicInfo?.templateName === '') {
        setFieldError("templateName", "Template name is required");
        isValid = false;
      }
      if (basicInfo?.offerType?.label === '') {
        setFieldError("offerType", "Offer type is required");
        isValid = false;
      }
    } else {
      if (basicInfo?.templateName === '') {
        setFieldError("templateName", "Template name is required");
        isValid = false;
      }
      if (basicInfo?.templateCategory?.label === '') {
        setFieldError("templateCategory", "Template category is required");
        isValid = false;
      }
      if (selectedCustomerName === 'Customer name') {
        if (templateJson?.declareVariables?.customerName === '') {
          setFieldError("customerName", "Customer name is required");
          isValid = false;
        }
      }
      if (selectedOfferName === 'Product') {
        if (templateJson?.declareVariables?.offerName === '') {
          setFieldError("offerName", "Product is required");
          isValid = false;
        }
      }
      if (selectedPurchaseDate === 'Purchase date') {
        if (templateJson?.declareVariables?.maxPurchaseAmount === '') {
          setFieldError("maxPurchaseAmount", "Purchase date is required");
          isValid = false;
        }
      }
      if (templateJson?.declareVariables?.subscribe === '') {
        setFieldError("subscribe", "Footer text is required");
        isValid = false;
      }
    }
    // if (buttonValidate?.[0] === '') {
    //   setFieldError("mobileNo", "Mobile number is required");
    //   isValid = false;
    // }

    return isValid;
  };
  const handleSave = async () => {
    if (validateValues()) {
      const res: any = await createNewTemplate(1);
      if (res == 200) {
        navigate(brandRoutes?.templates);
        setClearAll()
      }
    }
  };

  const handleDiscard = () => {
    setOpenAlert(false);
    history(-1);
    setClearAll()
    setViewType('')
  }
  const handleDraft = async () => {
    if (validateValues()) {
      const res: any = await createNewTemplate(5);
      if (res == 200) {
        navigate(brandRoutes?.templates);
        setClearAll()
      }
    } else {
      enqueueSnackbar("Please fill all the fields", {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
      setOpenAlert(false);
    }
  }

  const handleBack = () => {
    if (viewType != 'view') {
      setOpenAlert(true);
    } else {
      history(-1);
      setClearAll()
      setViewType('')
    }
  }

  useEffect(() => {
    getTemplateCategoryList();
  }, []);

  return (
    <>
      <TopBar
        outlineButtonText={"Cancel"}
        containButtonText="Submit for approval"
        backBtn
        backBtnFunc={handleBack}
        title={viewType === 'view' ? "View template" : "Create new template"}
        handleClickContainButton={handleSave}
        handleClickOutlineButton={handleCancel}
        activeBtn={viewType === "view" && true}
        loading={loading}
      />

      <Box sx={createTemplateStyle.rootSx}>
        <Grid container>
          <Grid item xs={9} sx={createTemplateStyle.firstgrid}>
            <BasicInformation />
            <Header />
            <MessageBody />
            <Buttons />
          </Grid>
          <Grid item xs={3}>
            <ChatMessage />
          </Grid>
        </Grid>
      </Box>

      {/** open alert modal */}
      <DialogBox
        title={""}
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        titleVariant={"inherit"}
        maxWidth="sm"
        titleStyle={{ display: "none" }}
        closeIcon={false}
        sx={{
          backgroundColor: "red !important",
        }}
        dialogBodyStyle={createTemplateStyle.mismatchDialog}
        dialogmodalBoxStyle={createTemplateStyle.mismatchDialogBodySx}
        Body={
          <>
            <Stack sx={createTemplateStyle.mismatchBodyContainer}>
              <Box sx={createTemplateStyle.warnigIconStle}>
                <Triangle />
              </Box>
              <Typography sx={createTemplateStyle.breakdownTitle}>
                {" "}
                Save details as draft ?
              </Typography>
              <Typography
                textAlign={"center"}
                mt={"1rem"}
                sx={createTemplateStyle.stockInKeyText}
              >
                Are you sure want to cancel the product details & save as draft
              </Typography>
              <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                <BasicButton
                  sx={{
                    ...createTemplateStyle.missMatchButtonStyle,
                    borderColor: "custom.surfaceBlue",
                  }}
                  variant="outlined"
                  onClick={handleDiscard}
                >
                  Discard
                </BasicButton>

                <BasicButton
                  sx={{
                    ...createTemplateStyle.missMatchButtonStyle,
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
    </>
  );
};
