import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import React from "react";

import { webFormStyle } from "../style";

interface OptionProps {
  label: string;
  value: string | number;
}
interface SelectProps {
  selectOptions: OptionProps[];
  inputValue: OptionProps;
  labelName: any;
  handleInputChange: (E: any, val: any) => void;
}
const SelectAutoCompleteComponent = (props: SelectProps) => {
  const { selectOptions, labelName, inputValue, handleInputChange } = props;

  return (
    <>
      <SelectAndautocomplete
        options={selectOptions}
        variant="filled"
        limitTags={1}
        onChange={(e: any, value: any) => handleInputChange(e, value)}
        value={inputValue}
        label={labelName}
        labelSx={webFormStyle.selectLabelStyle}
        placeholder=""
        isError={false}
        sx={webFormStyle.selectStyle}
      />
    </>
  );
};

export default SelectAutoCompleteComponent;
