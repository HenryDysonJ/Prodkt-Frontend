import { Input } from '@atoms/input';
import { Box, SxProps, Theme } from '@mui/material';

import { currentLocationStyle } from './style';

export interface CurrentLocationProps {
  value?: string;
  inputRef?: any;
  // placeholder?: string;
  // label?: string;
  handleChange?: () => void;
  className?: string;
  sx?: SxProps<Theme>;
}

export const CurrentLocation = (props: CurrentLocationProps): JSX.Element => {
  const { inputRef, value = '', handleChange = () => false, className = '', sx = {}, ...rest } = props;

  return (
    <Box
      sx={[
        {
          ...currentLocationStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          // border: '1px solid #E4E8EE',
          borderRadius: '4px',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden',
          paddingBottom: '0px',
        }}
      >
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Locality (Recommended)"
        />
      </Box>
    </Box>
  );
};
