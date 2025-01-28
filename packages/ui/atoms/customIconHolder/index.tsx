import { Box, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import Sx from './style';

interface ICustomIconHolderProps {
  children: ReactNode;
  sx?: SxProps;
  onClick?: () => void;
}

export function CustomIconHolder({ sx, onClick = () => null, children }: ICustomIconHolderProps) {
  return (
    <Box
      sx={[
        {
          ...Sx.iconSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}

export default CustomIconHolder;
