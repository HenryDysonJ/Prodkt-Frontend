import { Button } from '@atoms/button';
import { VerticalTab, VerticalTabProps } from '@atoms/verticalTab';
import { Stack, SxProps, Theme, Typography } from '@mui/material';
import { Box } from '@mui/material';

import { filterComponentStyle } from './style';

export interface FilterComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  onApply: () => void;
  onClear: () => void;
  verticalTabProps: VerticalTabProps;
  filterSelected: number;
}

export const FilterComponent = (props: FilterComponentProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    filterSelected,
    onApply = () => null,
    onClear = () => null,
    verticalTabProps,
    ...rest
  } = props;

  return (
    <Box
      sx={[{ ...filterComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <VerticalTab {...verticalTabProps} />
      <Box sx={filterComponentStyle.buttonContainer}>
        <Stack direction="row" gap="10px" alignItems="center">
          <Typography sx={filterComponentStyle.selectedText}>{filterSelected} Selected</Typography>
          <Button sx={filterComponentStyle.secondaryBtn} onClick={() => onClear()}>
            Clear
          </Button>
          <Button data-testid="applyFiler" sx={filterComponentStyle.primaryBtn} onClick={() => onApply()}>
            Apply
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
