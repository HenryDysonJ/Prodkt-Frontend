import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Chip } from "@crayond_dev/ui_chip";

import { broadcastMsgStyle } from "../style";
import { ChipCloseIcon } from "../../../assets/chipCloseIcon";
import { useCustomerSegment, useBroadCastMessage } from "@core/store/brand-app";
import DownArrowIcon from "../../../assets/downArrow";

export const Selectcustomers = () => {
  const { segmentsTagListsCount, getSegmentsListCount } = useCustomerSegment();

  const { broadCasteState, setHandleSelectTag, error } = useBroadCastMessage();

  const tagOptions = segmentsTagListsCount?.result?.map((item: any) => ({
    displayLabel: item.tag_name,
    fullLabel: item.customer_count + ' ' + item.tag_name,
    value: item.id,
  })) ?? [];

  useEffect(() => {
    getSegmentsListCount('', '', 0, 5,);
  }, []);


  return (
    <>
      <Stack>
        <Typography sx={broadcastMsgStyle.sublabelStyle} mb={"1.2rem"}>
          Select customers
        </Typography>
        <SelectAndautocomplete
          options={tagOptions.map(option => ({ label: option?.displayLabel, value: option?.value }))}
          variant="filled"
          selectType="chip"
          placeholder={""}
          multiple
          limitTags={10}
          optionSelectedIconShow={false}
          onChange={(e: any, value: any) => {
            const selectedOptions = value.map((selectedValue: any) => {
              const selectedOption = tagOptions.find(option => option?.value === selectedValue?.value);
              return { label: selectedOption?.fullLabel, value: selectedOption?.value };
            });
            setHandleSelectTag('selectTags', selectedOptions);
          }}
          // endAdornmentIcon={<DownArrowIcon />}
          value={broadCasteState?.selectTags.map((selectedTag: any) => ({
            label: tagOptions.find(option => option?.value === selectedTag?.value)?.displayLabel,
            value: selectedTag?.value,
          })) ?? broadCasteState?.selectTags}
          label={"Select customer tags"}
          sx={broadcastMsgStyle.selectLabelStyle}
          optionStyle={{ fontSize: "1.4rem" }}
          labelStyleProps={{ fontSize: "1.6rem !important" }}
          isError={error?.selectTags?.length ? true : false}
          helperText={error?.selectTags}
          chipStyle={{ marginTop: '10px !important' }}
        />
      </Stack>

      <Stack mt={"2.4rem"}>
        <Typography sx={broadcastMsgStyle.sublabelStyle} mb={"1.2rem"}>
          Selected tags
        </Typography>
        <Stack direction={"row"} gap={"1.2rem"} flexWrap={"wrap"}>
          {broadCasteState?.selectTags &&
            broadCasteState?.selectTags?.map((list) => (
              <Chip
                label={`${list?.label} customers`}
                handleClick={() => console.log("handleClick")}
                handleDelete={() => console.log("handleDelete")}
                variant={"outlined"}
                chipDirection={"row"}
                disabled={false}
                deleteIcon={<ChipCloseIcon />}
                labelStyles={{ color: "primary.main", fontSize: "1.4rem" }}
                chipStyles={broadcastMsgStyle.chipStyles}
              />
            ))}
        </Stack>
      </Stack>
    </>
  );
};
