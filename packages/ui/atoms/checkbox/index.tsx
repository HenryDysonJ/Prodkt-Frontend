import type { SvgIconProps, SxProps, Theme } from '@mui/material';
import { Box, styled, SvgIcon, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { HTMLAttributes } from 'react';

import { checkBoxStyle } from './style';
interface IconProps extends SvgIconProps {
  rootStyle?: SxProps;
}
export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  disableRipple?: boolean;
  onChange?: ((isChecked: boolean, e: any) => void) | undefined;
  icon?: node;
  checkedIcon?: node;
  checkStyle?: SxProps<Theme>;
  checkSecondStyle?: SxProps<Theme>;
  checked?: boolean;
  isSquare?: boolean;
  label?: string | undefined;
  disabled?: boolean;
  value?: string | number;
  className?: string;
  sx?: SxProps<Theme>;
  labelStyle?: SxProps<Theme>;
}

export function CheckedIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 18,
    height: 18,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" sx={rootSx} {...rest}>
      <g data-name="Group 117880" transform="translate(-15948 -15477)">
        <g fill="#fff" stroke="#fff" strokeWidth="1" data-name="Ellipse 130729" transform="translate(15948 15477)">
          <circle cx="8" cy="8" r="8" stroke="none"></circle>
          <circle cx="8" cy="8" r="7.5" fill="none"></circle>
        </g>
        <path
          fill="#0e70eb"
          d="M11 4a7 7 0 107 7 7.008 7.008 0 00-7-7zm3 5.8l-3.5 3.5a.526.526 0 01-.743 0L8 11.546a.525.525 0 11.742-.742l1.379 1.379 3.129-3.129A.525.525 0 0114 9.8z"
          transform="translate(15945 15474)"
        ></path>
      </g>
    </SvgIcon>
  );
}

export function CheckIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 18,
    height: 18,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" sx={rootSx} {...rest}>
      <g fill="#fff" stroke="#dfdfdf" strokeWidth="1" data-name="Ellipse 129742">
        <circle cx="8" cy="8" r="8" stroke="none"></circle>
        <circle cx="8" cy="8" r="7.5" fill="none"></circle>
      </g>
    </SvgIcon>
  );
}

export function CircleCheckIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      sx={rootSx}
      {...rest}
    >
      <path
        d="M12 4a8 8 0 108 8 8.009 8.009 0 00-8-8zm3.424 6.624l-4 4a.6.6 0 01-.849 0l-2-2a.6.6 0 01.848-.848L11 13.352l3.576-3.576a.6.6 0 01.849.848z"
        transform="translate(-4 -4)"
        fill="#0e70eb"
      />
    </SvgIcon>
  )
}

export function CircleIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    border: '1px solid',
    borderColor: 'icon.300',
    borderRadius: '9px',
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      sx={rootSx}
      {...rest}
    >
      <g
        data-name="Ellipse 130727"
        fill="#FFFFFF"
        stroke="#dfdfdf"
        strokeWidth={1}
      >
        <circle cx={8} cy={8} r={8} stroke="none" />
        <circle cx={8} cy={8} r={7.5} fill="none" />
      </g>
    </SvgIcon>
  )
}

export function SquareCheckIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      data-name="Component 48 \u2013 4"
      viewBox="0 0 16 16"
      sx={rootSx}
      {...rest}
    >
      <g
        data-name="Rectangle 58953"
        fill="none"
        stroke="#dfdfdf"
        strokeWidth={1}
      >
        <rect width={16} height={16} rx={4} stroke="none" />
        <rect x={0.5} y={0.5} width={15} height={15} rx={3.5} />
      </g>
    </SvgIcon>
  )
}

export function SquareCheckedIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      data-name="Component 48 \u2013 5"
      viewBox="0 0 16 16"
      sx={rootSx}
      {...rest}
    >
      <rect
        data-name="Rectangle 58953"
        width={16}
        height={16}
        rx={4}
        fill="#0e70eb"
      />
      <path
        d="M15.424 10.624l-4 4a.6.6 0 01-.849 0l-2-2a.6.6 0 01.848-.848L11 13.352l3.576-3.576a.6.6 0 01.849.848z"
        transform="translate(-4 -4.2)"
      fill="#fff"
      />
    </SvgIcon>
  )
}

export const BpIcon: any = styled('span')(({ checkStyle }) => ({
  borderRadius: '50px',
  width: 16,
  height: 16,
  boxShadow: BpIcon ? 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)' : 'none',
  // backgroundColor: '#f5f8fa',
  '.Mui-focusVisible &': {
    outline: '1px auto rgba(19,124,189,.6)',
    outlineOffset: 0,
  },
  ...checkStyle,
}));

export const BpCheckedIcon = styled(BpIcon)(({ checkSecondStyle }) => ({
  backgroundColor: '#0E70EB',
  backgroundImage: '#007965',
  borderRadius: '50px',
  '&:before': {
    display: 'block',
    borderRadius: '50px',
    width: 16,
    height: 16,
    boxShadow: 'none',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#0E70EB',
  },
  ...checkSecondStyle,
}));

export const CheckBox = (props: CheckBoxProps): JSX.Element => {
  const {
    disableRipple = true,
    checkStyle,
    checkSecondStyle,
    checked,
    disabled = false,
    isSquare = false,
    label = '',
    value = '',
    onChange = () => false,
    className = '',
    sx = {},
    labelStyle,
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...checkBoxStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
    >
      <Checkbox
        disabled={disabled}
        checked={checked}
        disableRipple={disableRipple}
        sx={{ ...checkBoxStyle.checkSx, ...checkStyle } as SxProps<Theme>}
        onChange={(e, isChecked) => onChange(isChecked, e)}
        value={value}
        // icon={<BpIcon checkStyle={checkStyle} />}
        icon={isSquare ? <SquareCheckIcon /> : <CircleIcon />}
        // checkedIcon={<BpCheckedIcon checkSecondStyle={checkSecondStyle} />}
        checkedIcon={isSquare ? <SquareCheckedIcon /> : <CircleCheckIcon />}
        {...rest}
      />
      {label && (
        <Typography sx={{ ...checkBoxStyle.checkBoxLabelSx, ...labelStyle } as SxProps<Theme>}>{label}</Typography>
      )}
    </Box>
  );
};
