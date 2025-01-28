import { InputField } from "@crayond_dev/ui_input-field";
import { FilledInputProps, InputProps, SxProps } from "@mui/material";
import React, { CSSProperties } from "react";

import { webFormStyle } from "../style";

interface InputFieldProp {
  inputValue: string;
  labelName: any;
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  sx?: CSSProperties;
  handleInputChange: (E: string) => void;
  onClick?: (e: any) => void;
  errorMessage: string
  isErrorRequired: boolean
  InputProps?: Partial<FilledInputProps> | Partial<InputProps> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined
}

const InputFeildComponent = (props: InputFieldProp) => {
  const {
    sx,
    error,
    disabled,
    required,
    inputValue,
    labelName,
    onClick,
    handleInputChange,
    InputProps,
    errorMessage,
    isErrorRequired,
    type = "text"
  } = props;

  return (
    <>
      <InputField
        type={type}
        variant="filled"
        label={labelName}
        placeholder=""
        onClick={onClick}
        onChange={(e: any) => handleInputChange(e.target.value)}
        value={inputValue}
        isLabelRequired={false}
        labelStyle={webFormStyle.selectLabelStyle}
        helperText=""
        required={required}
        fullWidth
        error={error}
        disabled={disabled}
        errorMessage={errorMessage}
        isErrorRequired={isErrorRequired}
        InputProps={InputProps}
        sx={{ ...webFormStyle.textFeildStyle, ...sx } as SxProps}
      />
    </>
  );
};

export default InputFeildComponent;
