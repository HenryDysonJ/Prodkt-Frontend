import type { SxProps, TextFieldProps, Theme } from '@mui/material';
import { Box, InputAdornment, TextField } from '@mui/material';
import React from 'react';

import { searchBoxStyle } from './style';

export interface SearchBoxProps {
  autoFocus?: boolean;
  className?: string;
  setSearchTerm?: (term: string) => void;
  value?: React.ReactNode;
  startAdornment?: React.ReactNode | boolean;
  endAdornment?: React.ReactNode | boolean;
  searchFieldStyle?: SxProps<Theme>;
  searchInputStyle?: SxProps<Theme>;
  placeholder?: string;
  sx?: SxProps<Theme>;
  searchFieldProps?: TextFieldProps;
}

export const SearchBox = (props: SearchBoxProps): JSX.Element => {
  const {
    autoFocus,
    setSearchTerm,
    value,
    startAdornment,
    endAdornment,
    searchFieldStyle,
    searchInputStyle,
    placeholder = '',
    className = '',
    sx = {},
    searchFieldProps,
    ...rest
  } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm) {
      setSearchTerm(e.target.value);
    }
  };
  return (
    <Box
      sx={[
        {
          ...searchBoxStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {/* Searchfield */}
      <TextField
        autoFocus={autoFocus}
        placeholder={placeholder}
        sx={{ ...searchBoxStyle.searchFieldSx, ...searchFieldStyle } as SxProps<Theme>}
        variant="outlined"
        onChange={handleInputChange}
        autoComplete='off'
        value={value}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ ...searchBoxStyle.searchInputSx, ...searchInputStyle } as SxProps<Theme>}
            >
              {startAdornment}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ ...searchBoxStyle.searchInputSx, ...searchInputStyle } as SxProps<Theme>}
            >
              {endAdornment}
            </InputAdornment>
          ),
        }}
        {...searchFieldProps}
      />
    </Box>
  );
};
