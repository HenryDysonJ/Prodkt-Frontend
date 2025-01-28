import { Box } from '@mui/material';
import React from 'react';
// import Location from '../../assets/location';
// import Target from '../../assets/target';

export const TextFieldAdornment = (props) => {
  const { value, handleChange, inputRef, placeholder } = props;

  return (
    <Box display="flex" alignItems="center" height="45px">
      <Box marginTop="8px" marginLeft="8px">
        <Location style={{ cursor: 'pointer' }} />
      </Box>
      <Box overflow="hidden">
        <input
          style={{
            border: 'none',
            outline: 'none',
            fontSize: 14,
            padding: '0px',
            marginRight: '4px',
            marginLeft: '4px',
            width: '100%',
            color: '#091B29',
            textOverflow: 'ellipsis',
          }}
          ref={inputRef}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </Box>
      <Box marginRight="14px" marginTop="4px" paddingLeft="4px">
        <Target
          style={{
            cursor: 'pointer',
          }}
        />
      </Box>
    </Box>
  );
};
