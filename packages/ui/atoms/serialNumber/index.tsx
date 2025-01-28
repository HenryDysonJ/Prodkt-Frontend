import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { serialNumberStyle } from './style';
import { CustomTextfield, ScanCameraIcon } from '..';
import React from 'react';

export interface SerialNumberProps {
  className?: string;
  sx?: SxProps<Theme>;
  onScanCameraClick?: (index: number) => void;
  open?: React.ReactNode;
  setOpen?: any;
  updateSerialNo: (e: any) => void;
  value: any;
  placeholder: string;
  variant?: 'textField' | 'dropDown' | 'dateField' | 'addYear';
  definitionName: string;
  index?: number;
  serialText: string;
}

export const SerialNumber = (props: SerialNumberProps): JSX.Element => {
  const {
    placeholder = '',
    variant,
    definitionName = '',
    updateSerialNo = () => false,
    index = '',
    value,
    open,
    setOpen,
    onScanCameraClick = () => false,
    serialText = '',
    className = '',
    sx = {},
    ...rest
  } = props;

  const onBlur = () => {
    setTimeout(() => {
      setOpen(false)
    }, 1000);
  }
  return (


    <Box
      sx={[{ ...serialNumberStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box pb={2}>
        {open && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: 'grey.B700',
              px: 1.5,
              py: 1.5,
              borderRadius: '8px',
              opacity: 1,
            }}
          >
            <Typography sx={{ color: 'grey.B500', fontSize: '12px', fontWeight: 500 }}>{serialText}</Typography>
            <ScanCameraIcon rootStyle={{ color: 'grey.B500', cursor: 'pointer' }} onClick={() => onScanCameraClick(index)} />
          </Box>
        )}

        <CustomTextfield
          index={index}
          onFocus={() => setOpen(true)}
          onBlur={() => onBlur()}
          textFieldStyle={{ mb: 1 }}
          definitionName={definitionName}
          isRequired
          variant={variant}
          placeholder={placeholder}
          value={value}
          onChange={updateSerialNo}
        />
      </Box>
    </Box>
  );
};
