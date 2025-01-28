import type { StandardTextFieldProps, SxProps, Theme } from '@mui/material';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';

import { inputStyle } from './style';

export type InputProps = StandardTextFieldProps & {
  testid?: string;
  className?: string;
  sx?: SxProps<Theme>;
  rootStyle?: SxProps<Theme>;
  testFieldStyle?: SxProps<Theme>;
  ref?: any;
  helperText?: string;
  errorText?: string;
  errorMessage?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  placeholder?: string;
  minRows?: string;
  maxRows?: string;
  value?: string | number;
  isReadOnly?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export function Input(props: InputProps): JSX.Element {
  const {
    className = '',
    ref,
    value = '',
    testFieldStyle,
    placeholder = '',
    rootStyle,
    isReadOnly = false,
    isError = false,
    autoFocus = false,
    variant = 'outlined',
    helperText,
    errorMessage,
    minRows='',
    onChange = () => false,
    startAdornment,
    endAdornment,
    multiline = false,
    ...rest
  } = props;
  
  return (
    <Box sx={{ ...inputStyle.rootSx, ...rootStyle } as SxProps<Theme>}>
      <TextField
        ref={ref}
        sx={{ ...inputStyle.textFieldSx, ...testFieldStyle } as SxProps<Theme>}
        inputProps={{
          'data-testid': props.testid,
        }}
        variant={variant}
        value={value}
        placeholder={placeholder}
        fullWidth
        disabled={isReadOnly}
        multiline={multiline}
        onChange={onChange}
        helperText={helperText}
        minRows={minRows}
        error={isError}
        className={`${className}`}
        autoFocus={autoFocus}
        InputProps={{
          
          startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
          endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
        }}
        {...rest}
      />
      {isReadOnly === false && isError && (
        <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}
