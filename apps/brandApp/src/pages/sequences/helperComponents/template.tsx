import { useBroadCastMessage, useOffersStore, useSequenceStore } from "@core/store";
import { DropDownArrow } from "@core/ui/atoms";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { TimePicker } from "@crayond_dev/ui_time-picker";
import { Grid, IconButton, Stack, SxProps, Typography } from "@mui/material";
import InputFeildComponent from "@pages/brandCreateWebForm/components/inputFeild";
import Templats from "@pages/broadcastMessage/helperComponents/templats";
import React, { CSSProperties, useEffect } from "react";

import DeleteIcon from "../../../assets/delete";
import { sequencestyle } from "../style";

export const Templates = (props: any) => {
  const { sequenceState, handleTemplateData, getDurationData, error } = useSequenceStore()
  const { durationData, messageData, templateData } = sequenceState
  const { handleDeleteTemplate, handleOpenPickTemplate, chatList, items, index, handleChooseTemplate, handleChangeTemp, pickBtnStyle } = props;


  const durationOptions = durationData?.rows?.map((val: any) => ({
    label: val?.name,
    value: val?.id,
  })) ?? [];

  useEffect(() => {
    getDurationData()
  }, [])

  return (
    <Stack sx={{ ...sequencestyle.createSequenceCardStyle, margin: "0rem 11.6rem 0rem", }}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "2rem",
        }}
      >
        <Typography sx={sequencestyle.titleStyle} mb={"1rem"}>
          Message {index + 1}
        </Typography>
        <IconButton onClick={() => handleDeleteTemplate()}>
          <DeleteIcon />
        </IconButton>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={6} md={8}>
          {/* <Stack sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <InputFeildComponent
              required={false}
              inputValue={"Name display here"}
              labelName="Sequence name"
              handleInputChange={(value: string) => undefined}
              sx={{ width: "250px" }}
            />
            <SelectAndautocomplete
              options={[]}
              variant="filled"
              limitTags={1}
              onChange={(e: any, val: any) => {
                console.log("formCategory", val);
              }}
              value={{ label: "", value: "" }}
              label={"Form Category"}
              labelSx={sequencestyle.selectLabelStyle}
              placeholder=""
              isError={false}
              optionStyle={{ fontSize: "1.4rem" }}
              labelStyleProps={{ fontSize: "1.6rem !important" }}
              sx={{ ...sequencestyle.selectNormInptStyle, width: "250px" }}
            />
          </Stack> */}
          <Typography sx={sequencestyle.subTitle} mt={"2rem"}>
            Choose message template
          </Typography>

          <BasicButton variant="outlined" sx={{ ...sequencestyle.addTemppStyle, ...pickBtnStyle }} onClick={() => handleOpenPickTemplate(index)}>
            Pick template
          </BasicButton>
          <Typography sx={sequencestyle.subTitle} mt={"1.6rem"} mb={"1.2rem"}>
            Set Delay time once condition is satisfied
          </Typography>
          <Stack sx={{ display: "flex", flexDirection: "row", gap: "2rem" }} >
            <InputFeildComponent
              type={"number"}
              required={false}
              inputValue={items?.duration_number}
              labelName="Send after"
              handleInputChange={(e: string) => handleTemplateData('duration_number', e, index)}
              sx={{
                width: "200px",
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                  display: "none",
                },
                "& input[type=number]": {
                  MozAppearance: "textfield",
                },
              } as CSSProperties}
              error={error?.duration_number?.length ? true : false}
              errorMessage={error?.duration_number}
              isErrorRequired={error?.duration_number?.length ? true : false}
            />

            <SelectAndautocomplete
              options={durationOptions}
              variant="filled"
              selectType="chip"
              placeholder={""}
              // multiple
              limitTags={4}
              optionSelectedIconShow={true}
              onChange={(e: any, value: any) => handleTemplateData('duration_type', value, index)}
              freeSolo
              value={items?.duration_type}
              label={"Select condition"}
              optionStyle={{ fontSize: "1.4rem" }}
              labelStyleProps={{ fontSize: "1.6rem !important" }}
              sx={{ ...sequencestyle.selectNormInptStyle, width: '200px' }}
              endAdornmentIcon={<DropDownArrow />}
              isError={error?.duration_type?.length ? true : false}
              helperText={error?.duration_type}
            />

          </Stack>
        </Grid>
        <Grid item xs={2} sm={6} md={4} display={'grid'} gap={2}>
          {chatList?.template_id ?
            <Templats
              title={chatList?.template_json?.title}
              status={chatList?.template_json?.status}
              select={chatList?.template_json?.select}
              chats={chatList?.template_json?.chats}
              setHandleSelect={(val) => handleChooseTemplate(val, chatList)}
              changeTemp={'Change'}
              handleChangeTemp={() => handleChangeTemp()}
            />
            :
            chatList?.length > 0 &&
            chatList?.map((item: any) => (
              <Templats
                title={item?.title}
                status={item?.status}
                select={item?.select}
                chats={item?.chats}
                setHandleSelect={(val) => handleChooseTemplate(val, item)}
                changeTemp={'Change'}
                handleChangeTemp={() => handleChangeTemp()}
              />
            ))
          }
        </Grid>
      </Grid>
    </Stack>
  );
};
