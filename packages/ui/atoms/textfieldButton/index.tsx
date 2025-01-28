import { Box, SxProps, TextField, Theme, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { textfieldButtonStyle } from './style';
import { Button } from '..';

export interface TextfieldButtonProps {
  id?: string;
  dataTestId?: string;
  helperText?: string;
  className?: string;
  sx?: SxProps<Theme>;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  isError?: boolean;
  value?: string | number | null;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onInput?: React.FormEventHandler<HTMLDivElement> | undefined;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean | undefined;
}

export const TextfieldButton = (props: TextfieldButtonProps): JSX.Element => {
  const {
    className = '',
    helperText = '',
    value = '',
    onChange = () => false,
    isError = false,
    onInput = () => false,
    onKeyPress = () => false,
    disabled = false,
    onClick = () => false,
    loading = false,
    sx = {},
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...textfieldButtonStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          '& input': {
            padding: isError ? '10px 0px 30px 0px' : '20px 0px',
          },
        }}
      >
        <TextField
          id={props.id}
          inputProps={{
            'data-testid': props.dataTestId,
          }}
          type="number"
          fullWidth
          variant="outlined"
          placeholder="Enter your mobile number"
          value={value}
          onChange={onChange}
          onInput={onInput}
          onKeyPress={onKeyPress}
          helperText={isError && helperText}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography
                  sx={{ ...textfieldButtonStyle.countryCodeSx, padding: isError ? '10px 0px 30px 0px' : '20px 0px' }}
                >
                  +91
                </Typography>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  data-testid="getOtp"
                  onClick={onClick}
                  loading={loading}
                  disabled={disabled}
                  sx={textfieldButtonStyle.getOtpSx}
                  variant="contained"
                >
                  Get OTP
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
