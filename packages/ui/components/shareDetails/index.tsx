import { CheckBox } from '@atoms/checkbox';
import { Divider, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import React from 'react';

import { shareDetailsStyle } from './style';

export interface ShareDetailsProps {
  className?: string;
  sx?: SxProps<Theme>;
  headertext: string;
  children?: React.ReactNode | React.ReactNode[];
  checkBoxCard: (e: any, checkBoxKey: string) => void;
  checkBoxKey: string;
  checkBoxValue: boolean;
  hideCheckBox: boolean;
}

export const ShareDetailsComponent = (props: ShareDetailsProps): JSX.Element => {
  const {
    hideCheckBox = false,
    checkBoxCard = () => false,
    checkBoxKey = '',
    checkBoxValue = false,
    headertext = '',
    children,
    className = '',
    sx = {},
    ...rest
  } = props;

  const checkBoxCardFnc = (value: boolean) => {
    checkBoxCard(value, checkBoxKey);
  };

  return (
    <Box
      sx={[{ ...shareDetailsStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={shareDetailsStyle.cardSx}>
        <Box sx={shareDetailsStyle.headerTextCheckBoxSx}>
          <Typography sx={shareDetailsStyle.headerTextSx}>{headertext}</Typography>

          {!hideCheckBox && <CheckBox onChange={checkBoxCardFnc} checked={checkBoxValue} />}
        </Box>
        <Divider sx={shareDetailsStyle.dividerSx} />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
