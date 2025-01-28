import { BasicButton } from "@crayond_dev/ui_basic-button";
import { InputField } from "@crayond_dev/ui_input-field";
import { MobileInput } from "@crayond_dev/ui_mobile-input";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Typography } from "@mui/material";

import { UploadFiles } from "@core/utils";
import moment from "moment";
import { useLocation } from "react-router-dom";
import MobDropdownIcon from "../assets/mobDropdownIcon";
import { webFormStyle } from "../style";
import DatePicker from "./datePicker";
import FileUploadLib from "./fileUploadLib";

interface ListOption {
  label: string;
  icon: React.ReactNode;
  id: number;
}

interface ListCompo {
  id: number;
  updateId: string | any;
  componentType: ListOption;
  isMandatory: boolean;
  questions: string;
  compValue?: any;
  buttonLink?: string;
  dropDownOption?: { label: string; value: string }[];
  isPrimary?: any
}

export const renderPreviewComponents = (
  item: ListCompo,
  setValueHandlePreviewForms?: any,
) => {

  const location = useLocation();
  const onsubmit = (date: any, id: any) => {
    setValueHandlePreviewForms(
      "compValue",
      id,
      moment(date).format("DD-MM-YYYY")
    );
  };

  const onImgUpload = async (event: any, id: any) => {
    const file = event.target.files[0];
    const image = await UploadFiles([file], "fileName");
    setValueHandlePreviewForms("compValue", id, image[0]?.url);
  };

  switch (item?.componentType?.id) {
    case 1:
      return (
        <InputField
          variant="filled"
          label={item?.questions}
          placeholder=""
          onChange={(e: any) => {
            setValueHandlePreviewForms &&
              setValueHandlePreviewForms(
                "compValue",
                item?.updateId,
                e?.target?.value
              );
          }}
          value={item?.compValue ?? item?.compValue}
          isLabelRequired={false}
          labelStyle={webFormStyle.selectLabelStyle}
          helperText=""
          required={item?.isMandatory}
          fullWidth
          error={false}
          errorMessage={""}
          isErrorRequired={false}
          sx={{ ...webFormStyle.textFeildStyle, mb: 2 }}
        />
      );
    case 2:
      return (
        <SelectAndautocomplete
          options={item?.dropDownOption || []}
          variant="filled"
          limitTags={1}
          onChange={(e: any, value: any) =>
            setValueHandlePreviewForms("compValue", item?.updateId, value)
          }
          value={item.compValue ? item.compValue : { label: "", value: "" }}
          label={item?.questions}
          required={item?.isMandatory}
          labelSx={webFormStyle.selectLabelStyle}
          placeholder=""
          isError={false}
          optionStyle={{ fontSize: "1.4rem" }}
          labelStyleProps={{ fontSize: "1.6rem !important" }}
          sx={{ ...webFormStyle.selectinptStyle, mb: 2 }}
        />
      );
    case 3:
      return (
        <>
          <Typography sx={webFormStyle.selectLabelStyle} mb={2}>
            {item?.questions}{" "}
            {item?.isMandatory && item?.questions?.length > 0 && <span>*</span>}
          </Typography>
          <FileUploadLib
            onImgUpload={(file: any) => onImgUpload(file, item?.updateId)}
            selectedFileUrl={item?.compValue ?? item?.compValue}
          />
        </>
      );
    case 4:
      return (
        <>
          <DatePicker
            onsubmit={(date: string) => onsubmit(date, item?.updateId)}
            isPreView={
              location?.pathname === "/settings/configure-webforms/create-new"
                ? false
                : true
            }
            item={item}
          />
        </>
      );
    case 5:
      return (
        <BasicButton
          rootSx={{ mb: 2 }}
          variant={item?.isPrimary ? 'text' : "contained"}
          sx={webFormStyle.addNewButonStyle}
          onClick={() =>
            setValueHandlePreviewForms(
              "compValue",
              item?.updateId,
              item?.buttonLink
            )
          }
        >
          {item?.questions}
        </BasicButton>
      );
    case 6:
      return (
        <MobileInput
          fullWidth
          id="MobileInput"
          label={item?.questions}
          onChange={(value: any) =>
            setValueHandlePreviewForms("compValue", item?.updateId, value)
          }
          placeholder="Enter mobile number"
          sx={{ width: "100%" }}
          numberLimit={10}
          selectValue={
            item.compValue ? item.compValue : { mobile: "", mobileCode: "+91" }
          }
          value={item.compValue ?? item.compValue}
          popupIcon={<MobDropdownIcon />}
          variant="filled"
          required={item?.isMandatory}
          error={false}
          errorMessage={""}
          disabled={false}
          labelStyle={webFormStyle.mobLableStyle}
          inputStyle={{
            ...webFormStyle.inputStyle,
            mb: 2,
          }}
        />
      );
  }
};
