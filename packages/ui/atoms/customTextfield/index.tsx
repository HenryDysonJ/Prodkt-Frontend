import { Box, InputBase, MenuItem, Select, SxProps, Theme, Typography } from '@mui/material';
import { InputBaseProps } from '@mui/material/InputBase';
import { useState } from 'react';

import { AddIconSvg, DecrementIconSvg, DropDownArrow } from '..';
import { customTextfieldStyle } from './style';

export interface DropDownOptions {
  label: string;
  value: string | number;
}
export interface CustomTextfieldProps extends InputBaseProps {
  textFieldStyle?: SxProps<Theme>;
  customWidthSx?: SxProps<Theme>;
  selectStyle?: SxProps<Theme>;
  definitionNameStyle?: SxProps<Theme>;
  testid?: string;
  definitionName?: string;
  type?: string;
  endAdornment?: JSX.Element;
  placeholder?: string;
  yearText?: string;
  yearValue?: number | null;
  variant?: 'textField' | 'dropDown' | 'dateField' | 'addYear';
  error?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
  minDate?: string;
  maxDate?: string;
  value?: unknown;
  darkText?: boolean;
  incrementId?: string;
  decrementId?: string;
  onChange?: ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined;
  handleDecrement?: () => void;
  handleIncrement?: () => void;
  onMenuItemClick?: ((val: any, index: number) => void) | undefined;
  errorText?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  options?: DropDownOptions[] | undefined;
  sx?:SxProps<Theme>;
}

export const CustomTextfield = (props: CustomTextfieldProps): JSX.Element => {
  const {
    textFieldStyle,
    testid,
    onChange = () => false,
    handleDecrement = () => false,
    handleIncrement = () => false,
    definitionName = '',
    placeholder = '',
    errorText = '',
    maxDate = '',
    yearText = '',
    minDate = '',
    yearValue = 0,
    darkText = false,
    isRequired = false,
    value = '',
    error,
    variant,
    disabled,
    endAdornment,
    onMenuItemClick = () => false,
    options,
    selectStyle,
    type = '',
    onFocus = () => false,
    onBlur = () => false,
    incrementId = '',
    decrementId = '',
    definitionNameStyle = {},
    customWidthSx,
    sx,
    ...rest
  } = props;
  

  // const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

  // const minDate = new Date('2023-07-23')?.toISOString()?.split('T')[0];

  const getVariant = (key: string | undefined) => {
    switch (key) {
      case 'textField':
        return (
          <InputBase
            inputProps={{
              'data-testid': testid,
            }}
            error={error}
            disabled={disabled}
            onChange={onChange}
            sx={customTextfieldStyle.inputsSx}
            value={value}
            placeholder={placeholder}
            endAdornment={endAdornment}
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
          />
        );
      case 'dropDown':
        return (
          <Select
            IconComponent={DropDownArrow}
            error={error}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            MenuProps={{
              PaperProps: {
                style: {
                  // maxHeight: 200,
                  width: 200,
                  right: 27,
                  left: 0,
                  transform: 'translateX(-10px)',
                },
              },
            }}
            sx={{ ...customTextfieldStyle.selectSx, ...selectStyle } as SxProps<Theme>}
          >
            {options?.map((val: DropDownOptions, index: number) => (
              <MenuItem
                key={index}
                onClick={() => onMenuItemClick(val, index)}
                value={val.value}
                sx={customTextfieldStyle.menuSX}
              >
                {val.label}
              </MenuItem>
            ))}
          </Select>
        );

      case 'dateField':
        return (
          <>
          <InputBase
            error={error}
            disabled={disabled}
            onChange={onChange}
            sx={customTextfieldStyle.inputsSx}
            value={value}
            placeholder={placeholder}
            endAdornment={endAdornment}
            type="date"
            inputProps={{
              max: maxDate,
              min: minDate,
              'data-testid': testid,
            }}
            {...rest}
          />
          </>
          // <LocalizationProvider dateAdapter={AdapterDayjs}>
          //   <DatePicker
          //     disabled={disabled}
          //     format="DD-MM-YYYY"
          //     onChange={() => onChange()}
          //     sx={customTextfieldStyle.dateSx}
          //     components={{
          //       OpenPickerIcon: CalenderIcon,
          //     }}
          //     value={value}
          //   />
          // </LocalizationProvider>
        );
      case 'addYear':
        return (
          <Box sx={customTextfieldStyle.addBoxSx}>
            <Typography data-testid={decrementId} sx={{ cursor: 'pointer' }} onClick={() => handleDecrement()}>
              <DecrementIconSvg />
            </Typography>
            <Typography data-testid={testid} sx={{ color: 'text.A100', fontWeight: 700, fontSize: '12px' }}>
              {yearValue}
            </Typography>
            {yearText ? (
              <Typography sx={{ color: 'text.A100', fontWeight: 700, fontSize: '12px' }}>{yearText}</Typography>
            ) : (
              ''
            )}
            <Typography data-testid={incrementId} sx={{ cursor: 'pointer' }} onClick={() => handleIncrement()}>
              <AddIconSvg />
            </Typography>
          </Box>
        );
      default:
        return (
          <InputBase
            error={error}
            disabled={disabled}
            onChange={onChange}
            sx={customTextfieldStyle.inputsSx}
            value={value}
            placeholder={placeholder}
            endAdornment={endAdornment}
            type={type}
            inputProps={{
              'data-testid': testid,
            }}
            {...rest}
          />
        );
    }
  };

  return (
    <Box sx={{...customTextfieldStyle.rootSx,...sx}as SxProps}>
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
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{
            ...definitionNameStyle,
            ...(darkText ? customTextfieldStyle.darkTextSx : customTextfieldStyle.typographySx)
          } as SxProps<Theme>}>
            {definitionName}
          </Typography>
          {isRequired && (
            <Box component="span" sx={{ color: 'error.900' }}>
              *
            </Box>
          )}
        </Box>
        {getVariant(variant)}
      </Box>
      {disabled === false && error ? <Typography sx={customTextfieldStyle.errorTextSx}>{errorText}</Typography> : ''}
    </Box >
  );
};
