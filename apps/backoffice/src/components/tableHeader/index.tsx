import type { SxProps, Theme } from '@mui/material';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { TableHeaderStyle } from './style';
import { Input } from '@core/ui/atoms';
import { FilterIcon } from '../../assets';

export interface TableHeaderProps {
  style?: SxProps;
  title?: string;
  searchText?: string | number;
  placeholder?: string;
  startAdornment?: React.ReactElement | null;
  isFilterRequired?: boolean;
  handleFilter?: () => void;
  handleAdd?: () => void;
  handleSearch?: (e: any) => void;
  isFilterWithAddRequired?: boolean;
  btnText: string;
  testId: string
}

export const TableHeader = forwardRef((props: TableHeaderProps): JSX.Element => {
  const {
    style,
    title = '',
    searchText = '',
    placeholder = '',
    startAdornment = null,
    isFilterRequired = false,
    handleFilter = () => null,
    handleSearch = () => null,
    handleAdd = () => null,
    btnText = '',
    isFilterWithAddRequired = false,
    testId
  } = props

  return (
    <>
      <Stack pb={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography sx={TableHeaderStyle?.titleSx}>{title}</Typography>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}
          sx={TableHeaderStyle?.rightStackSx}>
          <Input
            rootStyle={{ margin: '0' }}
            sx={style}
            onChange={(e) => handleSearch(e?.target?.value)}
            value={searchText}
            placeholder={placeholder}
            startAdornment={startAdornment}
            id='search'
          />
          {
            isFilterWithAddRequired &&
            <Stack width={'auto'} direction={'row'} alignItems={'center'} justifyContent={'end'}>
              {isFilterRequired &&
                <Stack width={'auto'} direction={'row'} alignItems={'center'} justifyContent={'end'}>
                  <Box m={1} sx={TableHeaderStyle?.filterIconSx} id={'filter'}
                    onClick={() => handleFilter()}
                  >
                    <FilterIcon />
                  </Box>
                </Stack>
              }
              <Divider sx={TableHeaderStyle?.dividerSx} />
              <Button id={testId} sx={TableHeaderStyle?.addBtn} variant='contained'
                onClick={() => handleAdd()}>
                <Typography>{btnText}</Typography>
              </Button>
            </Stack>
          }
        </Stack>
      </Stack>
    </>
  );
});

TableHeader.displayName = 'TableHeader';
