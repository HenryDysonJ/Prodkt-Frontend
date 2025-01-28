import AddIcon from "@assets/brandAssets/addIcon";
import DownArrowIcon from "@assets/brandAssets/downArrow";
import { InputField } from "@crayond_dev/ui_input-field";
import { MobileInput } from "@crayond_dev/ui_mobile-input";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ButtonLayout from "./buttonLayout";
import { createTemplateStyle } from "./style";
import { useTemlateStore } from "@core/store/brand-app";

export const Buttons = () => {
  const {
    templateJson,

    setAddButtons,
    setDeleteButtons,
    setSelectButtons,
    setAddComponetInfo,
    viewType,
    error
  } = useTemlateStore();

  const handleSelectButton = (key: string, selectedValue: any, id: string) => {
    setSelectButtons(key, selectedValue, id);
  };

  const renderButton = (type: any, updateId: any, item: any) => {
    switch (type) {
      case 1:
        return (
          <>
            <Grid item xs={4.5}>
              <InputField
                variant="filled"
                label="Website URL "
                placeholder="Enter Website URL "
                fullWidth
                onChange={(e) => setAddComponetInfo(`websiteUrl`, updateId, e?.target?.value)}
                value={item?.websiteUrl}
                isErrorRequired={false}
                inputStyle={createTemplateStyle.inputStyle}
                sx={createTemplateStyle.inputSxStyle}
                labelStyle={createTemplateStyle.labelStyle}
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={viewType === 'view' ? true : false}
              />
            </Grid>
            {/* <Grid item xs={3}>
              <InputField
                variant="filled"
                label="URL Type"
                placeholder="Enter URL Type"
                fullWidth
                onChange={(e) => setAddComponetInfo(`url`, updateId, e?.target?.value)}
                value={item?.url}
                isErrorRequired={false}
                inputStyle={createTemplateStyle.inputStyle}
                sx={createTemplateStyle.inputSxStyle}
                labelStyle={createTemplateStyle.labelStyle}
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={viewType === 'view' ? true : false}
              />
            </Grid> */}
            <Grid item xs={4.5}>
              <InputField
                variant="filled"
                label="Button Text"
                placeholder="Enter Button Text"
                fullWidth
                onChange={(e) => setAddComponetInfo(`buttonVal`, updateId, e?.target?.value)}
                value={item?.buttonVal}
                isErrorRequired={false}
                inputStyle={createTemplateStyle.inputStyle}
                sx={createTemplateStyle.inputSxStyle}
                labelStyle={createTemplateStyle.labelStyle}
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={viewType === 'view' ? true : false}
              />
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid item xs={3}>
              <InputField
                variant="filled"
                label="Button Type"
                placeholder="Enter Button Type"
                fullWidth
                onChange={(e) => setAddComponetInfo(`buttonVal`, updateId, e?.target?.value)}
                value={item?.buttonVal}
                isErrorRequired={false}
                inputStyle={createTemplateStyle.inputStyle}
                sx={createTemplateStyle.inputSxStyle}
                labelStyle={createTemplateStyle.labelStyle}
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={viewType === 'view' ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <MobileInput
                fullWidth
                id="MobileInput"
                inputStyle={{
                  "&:focus": {
                    border: "2px solid",
                    borderColor: error?.mobileNo?.length ? 'red' : "#D9DBDD !important",
                  },
                  "&:hover ": {
                    border: "1px solid",
                    borderColor: error?.mobileNo?.length ? 'red' : "#D9DBDD !important",
                  },
                  height: "60px !important",
                  padding: "11px 16px",
                  border: "1px solid",
                  borderColor: error?.mobileNo?.length ? 'red' : "#D9DBDD !important",
                  backgroundColor: viewType === 'view' ? '#E6EAEB' : "#ffff",
                  "& .MuiInputLabel-root": {
                    color: "#4e585e !important",
                    mt: 0.2,
                  },
                }}
                label="Phone number"
                labelStyle={{
                  "& span": {
                    color: "#F44F5A",
                  },
                  fontSize: "14px",
                }}
                onChange={(val) => setAddComponetInfo(`mobileNo`, updateId, val)}
                placeholder="Enter mobile number"
                sx={{
                  width: "100%",
                }}
                helperTextStyle={{ fontSize: '10px' }}
                value={item?.mobileNo}
                popupIcon={<DownArrowIcon />}
                variant="filled"
                required
                numberLimit={10}
                disabled={viewType === 'view' ? true : false}
                error={error?.mobileNo?.length ? Boolean(true) : Boolean(false)}
                errorMessage={error?.mobileNo}

              />
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <Grid item xs={9}>
              <InputField
                variant="filled"
                label="Button Text"
                placeholder="Enter Button Text"
                fullWidth
                onChange={(e) =>
                  setAddComponetInfo(`buttonVal`, updateId, e?.target?.value)
                }
                value={item?.buttonVal}
                isErrorRequired={false}
                inputStyle={createTemplateStyle.inputStyle}
                sx={createTemplateStyle.inputSxStyle}
                labelStyle={createTemplateStyle.labelStyle}
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={viewType === 'view' ? true : false}
              />
            </Grid>
          </>
        );
    }
  };

  return (
    <>
      <Box sx={createTemplateStyle.basicInfoRoot} mt={2}>
        <Typography sx={createTemplateStyle.title}>Buttons</Typography>
        <Typography sx={createTemplateStyle.subtitle} mt={1.5}>
          Create buttons that let customers respond to your message or take
          action.
        </Typography>
        <Box sx={createTemplateStyle.unSx}>
          <Grid item xs={12}>
            <InputField
              variant="filled"
              label="Button Text"
              placeholder="Enter Button Text"
              // fullWidth
              // onChange={(e) => setAddComponetInfo(`buttonVal`, updateId, e?.target?.value)}
              value={"Unsubscribe"}
              isErrorRequired={false}
              inputStyle={createTemplateStyle.inputStyle}
              sx={createTemplateStyle.inputSxStyle}
              labelStyle={createTemplateStyle.labelStyle}
              errorStyle={{ fontSize: "1.0rem" }}
              disabled={true}
            />
          </Grid>
        </Box>

        {templateJson?.buttons &&
          templateJson?.buttons?.length > 0 &&
          templateJson?.buttons?.map((item: any, index) => (
            <Grid container spacing={2} mt={0}>
              <ButtonLayout
                selectValue={item?.buttonType}
                handleDelete={() => setDeleteButtons(item?.id)}
                handleSelectButton={(value) =>
                  handleSelectButton("buttonType", value, item?.id)
                }
                viewType={viewType}
              >
                {renderButton(item?.buttonType?.value, item?.id, item)}
              </ButtonLayout>
            </Grid>
          ))}
        {
          viewType !== 'view' &&
          <Button
            sx={createTemplateStyle.addBtn}
            variant="text"
            startIcon={<AddIcon />}
            onClick={() => setAddButtons(new Date().toISOString())}
          >
            Add Button
          </Button>}
      </Box>
    </>
  );
};
