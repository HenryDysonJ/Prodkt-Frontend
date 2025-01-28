import { Autocomplete, Box, Checkbox, ListItemText, SxProps, TextField, Typography, Chip } from '@mui/material';
import { Done } from '@mui/icons-material';
import { Theme } from '@emotion/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CheckBox } from '@atoms/checkBox';
import { cutstomizedAutocompleteStyle } from './style';

export interface CutstomizedAutocompleteProps {
  className?: string;
  sx?: SxProps<Theme>;
  key?: string;
  value?: any;
  placeholder?: string;
  loadOptions?: () => Promise<any[]>;
  onChange?: (value: any) => void;
  options?: any[];
  loading?: boolean;
  isReadOnly?: boolean;
  isMulti?: boolean;
  debounceTimeout?: number;
  reduceOptions?: any;
  isClearable?: boolean;
  styles?: any;
  isPaginate?: boolean;
  label?: string;
  noBorder?: boolean;
  noSearch?: boolean;
  prefix?: boolean;
  labelColor?: string | null;
  labelSize?: string | null;
  fontFamily?: string | null;
  selectHeight?: string;
  padding?: string;
  isDeletedValue?: boolean;
  errorMessage?: any;
  permissionList?: any;
  isError?: boolean;
  id?: string;
  deletedValue?: (value: any, updateValue: any) => void | undefined;
}

export const CutstomizedAutocomplete = (props: CutstomizedAutocompleteProps): JSX.Element => {
  const {
    className = '',
    key,
    value,
    placeholder,
    loadOptions,
    permissionList,
    onChange,
    options,
    loading,
    isReadOnly,
    isMulti,
    debounceTimeout,
    reduceOptions,
    isClearable = false,
    styles = {},
    isPaginate = false,
    label = '',
    noBorder = false,
    noSearch = false,
    prefix = false,
    labelColor = null,
    labelSize = null,
    fontFamily = null,
    selectHeight = '',
    padding,
    isDeletedValue,
    deletedValue,
    errorMessage,
    isError = false,
    sx = {},
    id,
    ...rest
  } = props;
  return (
    <Box
      sx={[
        {
          ...cutstomizedAutocompleteStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Autocomplete
        value={value ? value : ''}
        // errorMessage={formErrors.permission}
        popupIcon={<KeyboardArrowDownIcon />}
        clearIcon={null}
        options={options}
        // options={name}
        // disableCloseOnSelect
        id={id}
        getOptionLabel={(options: any) => options?.name}
        renderInput={(params) => (
          <TextField
            inputProps={{
              ...params,
              style: {
                width: '100%'
              },
              'data-testid': 'optionsValue',
            }}
            {...params}
            placeholder={props?.placeholder}
            sx={{
              height: '100%',
              borderRadius: '8px',
              border: 0,
              '& .MuiOutlinedInput-root': {
                paddingTop: '0',
                paddingBottom: '0',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                '& input': {
                  paddingTop: '0 !important',
                  paddingBottom: '0 !important',
                  height: '50px',
                },
                '& .MuiAutocomplete-popupIndicator': {
                  color: '#BCC3CC'
                }
              },
              '& .MuiFormHelperText-root': { ml: '0px', mb: '10px' },
            }}
            helperText={isError ? errorMessage : null}
            error={isError}
          />
        )}
        onChange={(option, value) => {
          onChange && onChange(value);
        }}
        sx={{
          color: 'red',
          '& .MuiAutocomplete-input': {
            marginTop: '-4px',
          },
        }}
      />
    </Box>
  );
};
