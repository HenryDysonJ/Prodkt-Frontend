import { Box, InputBase, MenuItem, Select, SxProps, Theme, Typography } from '@mui/material';
import { InputBaseProps } from '@mui/material/InputBase';

import { DropDownArrow } from '..';
import { customTextfieldStyle } from './style';

interface customTextfieldInterface {
  label: string;
  value: string;
}
export interface CustomTextfieldProps extends InputBaseProps {
  textFieldStyle?: SxProps<Theme>;
  selectStyle?: SxProps<Theme>;
  definitionName?: string;
  endAdornment?: JSX.Element;
  placeholder?: string;
  type?: string;
  error?: boolean;
  selectType?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  errorText?: string;
  options?: customTextfieldInterface[] | undefined;
}

export const CustomTextfield = (props: CustomTextfieldProps): JSX.Element => {
  const {
    textFieldStyle,
    onChange = () => false,
    definitionName = '',
    placeholder = '',
    errorText = '',
    error,
    type = '',
    selectType,
    disabled,
    endAdornment,
    onClick = () => false,
    options,
    selectStyle,
    ...rest
  } = props;

  return (
    <Box sx={customTextfieldStyle.rootSx}>
      <Box
        component="div"
        sx={
          {
            ...textFieldStyle,
            ...(disabled
              ? customTextfieldStyle.mainBoxSx
              : error
              ? customTextfieldStyle.errorTextField
              : customTextfieldStyle.normalTextField),
          } as SxProps<Theme>
        }
      >
        <Typography sx={customTextfieldStyle.typographySx}>{definitionName}</Typography>

        {selectType ? (
          <>
            <InputBase
              error={error}
              disabled={disabled}
              onChange={() => onChange()}
              sx={customTextfieldStyle.inputsSx}
              placeholder={placeholder}
              endAdornment={endAdornment}
              type={type}
              {...rest}
            />
          </>
        ) : (
          <Select
            IconComponent={DropDownArrow}
            error={error}
            disabled={disabled}
            sx={{ ...customTextfieldStyle.selectSx, ...selectStyle } as SxProps<Theme>}
          >
            {options?.map((val: customTextfieldInterface, index: number) => (
              <MenuItem key={index} onClick={() => onClick()} value={val.value} sx={customTextfieldStyle.menuSX}>
                {val.label}
              </MenuItem>
            ))}
          </Select>
        )}
      </Box>
      {disabled === false && error ? <Typography sx={customTextfieldStyle.errorTextSx}>{errorText}</Typography> : ''}
    </Box>
  );
};
