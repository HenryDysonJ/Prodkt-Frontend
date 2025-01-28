import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';
import { CSSProperties } from 'react';
import OtpInput from 'react-otp-input';

import { otpInputStyle } from './style';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface OtpInputButtonProps {
  className?: string;
  value?: string;
  isError?: string;
  isInputNum?: true | false;
  hasErrored?: string | undefined;
  numInputs?: number;
  shouldAutoFocus?: boolean;
  isDisabled?: boolean;
  renderSeparator?: ((index: number) => React.ReactNode) | React.ReactNode;
  type?: number;
  inputStyle?: React.CSSProperties | string | undefined;
  sx?: SxProps<Theme>;
  onChange?: (value: string) => void;
}

export const OtpInputButton = (props: OtpInputButtonProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sx = {}, value = '', isDisabled= false, shouldAutoFocus, numInputs, renderSeparator, onChange = () => false, className = '', ...rest } = props;

  const onOTPChange = (otp: string) => {
    onChange(otp);
    // Check if all inputs are filled
    if (otp.length === 4) {
      // Manually remove focus from the OTP input
      const otpInput = document.getElementById('otp4') as HTMLInputElement;;
      otpInput.blur();
    }
  }

  return (
    <Box
      sx={[
        {
          ...otpInputStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <OtpInput
        data-testid="otp"
        inputType="number"
        value={value}
        onChange={onOTPChange}
        shouldAutoFocus={shouldAutoFocus}
        numInputs={numInputs}
        renderSeparator={renderSeparator}
        renderInput={(props: InputProps, index: number) => (
        <input autoFocus={true} disabled={isDisabled} data-testid={`otp${index + 1}`} {...props} />
        )}
        inputStyle={otpInputStyle.inputStyleSx as CSSProperties}
      />
    </Box>
  );
};
