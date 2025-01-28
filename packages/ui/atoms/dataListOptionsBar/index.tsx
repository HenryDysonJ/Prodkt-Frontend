
import { Button } from '@atoms/button';
import CustomIconHolder from '@atoms/customIconHolder';
import { Sort } from '@components/brandSort';
import { SORT_DATA } from '@core/utils';
import { Search } from '@crayond_dev/ui_search';
import { Box, Divider, Stack, SxProps, useTheme } from '@mui/material';
import { useState } from 'react';

import FilterIcon from "../../../../apps/brandApp/src/assets/filter";
import { dataListOptionsBarStyle } from './style';

interface SearchProps {
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hideSearch?: boolean;
  inputPlaceholder?: string;
  search?: string;
}

interface SortProps {
  hideSort?: boolean;
  sortItem?: string;
  handleOnSortChange?: (sortValue: string) => void;
}

interface FilterProps {
  hideFilter?: boolean;
  handleFilterClick?: () => void;
}

interface CtaProps {
  hrefImport?: string
  hrefExport?: string
  ctaText?: string;
  handleCtaClick: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  ctaVariant?: any;
  ctaTextSecondary?: string;
  handleCtaClickSecondary?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  ctaVariantSecondary?: any;
  startIcon: any
}

export interface DataListOptionsBarProps extends SearchProps, SortProps, FilterProps, CtaProps {
  sx?: SxProps;
}

export function DataListOptionsBar(props: DataListOptionsBarProps) {
  const theme = useTheme();
  const {
    hideSearch,
    search,
    handleSearch,
    inputPlaceholder,

    hideSort,
    sortItem,
    handleOnSortChange,

    hideFilter,
    handleFilterClick,

    ctaText,
    handleCtaClick,
    ctaVariant,
    ctaTextSecondary,
    handleCtaClickSecondary,
    ctaVariantSecondary,
    startIcon,
    sx,
    hrefExport,
    hrefImport
  } = props;

  // States
  const [showSortBadge, setShowSortBadge] = useState<boolean>(false);

  // Sort Handlers
  const handleClickSortItem = (sortValue = '') => {
    console.log('sortValue', sortValue);

    if (handleOnSortChange) {
      handleOnSortChange(sortValue);
    }

    if (sortValue === SORT_DATA[0].value) {
      setShowSortBadge(false);
    } else {
      setShowSortBadge(true);
    }
  };

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
    >
      {!hideSearch && (
        <Search
          handleInputOnChange={handleSearch as () => void}
          handleOptionChange={() => null} // Not needed, but it is kept as mandatory in component library.
          inputBorderHoverColor="#D9DBDD"
          inputBorderDefaultColor="#D9DBDD"
          inputBorderFocusColor="#D9DBDD"
          inputWidth='100%'
          minExpandWidth='100%'
          onSelectSearchDataFun={() => null} // Not needed, but it is kept as mandatory in component library.
          placeHolderColor="#4E585E"
          placeHolderSize={14}
          placeHolderText={inputPlaceholder}
          rootStyle={dataListOptionsBarStyle.searchRootStyle}
          value={search}
          variant={'isSearchInput'}
        />
      )}
      <Box sx={dataListOptionsBarStyle.rootSx}>
        {!hideSort && (
          <Sort badge={showSortBadge} handleChange={(e: string) => handleClickSortItem(e)} sortItem={sortItem} />
        )}

        {/* // TODO: Check if this filter is needed here, since this will be dynamic  */}
        {!hideFilter && (
          <CustomIconHolder onClick={handleFilterClick}>
            <FilterIcon />
          </CustomIconHolder>
        )}

        <Divider orientation='vertical' variant='middle' flexItem sx={{ height: '30px', mt: '10px' }} />
        {ctaTextSecondary && (
          <Button startIcon={startIcon} variant={ctaVariantSecondary} sx={ctaVariantSecondary === 'outlined' ? dataListOptionsBarStyle.addItemButtonOutlineSx : dataListOptionsBarStyle.addItemButtonSx} onClick={handleCtaClickSecondary}
            href={hrefImport}
          >
            {ctaTextSecondary}
          </Button>
        )}
        {ctaText && (
          <Button variant={ctaVariant} sx={ctaVariant === 'outlined' ? dataListOptionsBarStyle.addItemButtonOutlineSx : dataListOptionsBarStyle.addItemButtonSx} onClick={handleCtaClick}
            href={hrefExport}
          >
            {ctaText}
          </Button>
        )}
      </Box>
    </Stack>

  );
}

export default DataListOptionsBar;

DataListOptionsBar.defaultProps = {
  hideSearch: false,
  search: '',
  handleSearch: () => undefined,
  inputPlaceholder: 'Search',
  hideSort: false,
  sortItem: SORT_DATA[0].value,
  handleOnSortChange: () => undefined,
  ctaText: 'Add New',
  handleCtaClick: () => undefined,
  hideFilter: false,
  startIcon: ''
};
