import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import type { SxProps, Theme } from '@mui/material';

import { buttonStyle } from './style';

export interface ButtonProps extends LoadingButtonProps {
  children?: string | JSX.Element;
  rootSx?: SxProps<Theme>;
  buttonStyleSx?: object;
  style?: React.CSSProperties | undefined;
  sx?: SxProps<Theme>;
  className?: string;
  loading?: boolean;
  disabled?: boolean | undefined;
  target?: string
}

function Button(props: ButtonProps): JSX.Element {
  const {
    disabled = false,
    buttonStyleSx = {},
    className = '',
    children = '',
    variant = 'contained',
    loading = false,
    target='',
    ...rest
  } = props;
  return (
    <LoadingButton
      loading={loading}
      disabled={disabled}
      variant={variant}
      target={target}
      sx={{
        ...buttonStyle.rootSx,
        ...buttonStyleSx,
      }}
      className={`${className}`}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
}

export { Button };
