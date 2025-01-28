import type { SxProps, Theme } from '@mui/material';
import { Box, Chip, ChipProps } from '@mui/material';

import { chipsStyle } from './style';

export interface ChipsProps extends Omit<ChipProps, 'onDelete'> {
  className?: string;
  sx?: SxProps<Theme>;
  label: string;
  deleteIcon?: JSX.Element;
  onDelete?: () => void;
  onClick?: (() => void) | undefined;
  isSelected: boolean;
}

export const Chips = (props: ChipsProps): JSX.Element => {
  const {
    className = '',
    label = '',
    sx = {},
    deleteIcon,
    isSelected = false,
    onClick = () => false,
    onDelete = () => false,
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...chipsStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Chip
        sx={{
          ...chipsStyle.chipDelete,
          backgroundColor: isSelected ? 'primary.B900' : 'grey.C500',
          border: isSelected ? '1.5px solid' : '1px solid',
          borderColor: isSelected ? 'primary.C200' : 'grey.C400',
          color: isSelected ? 'background.surface.B200' : 'text.500',
          '&.MuiChip-clickable:hover': {
            color: 'background.surface.B200',
            backgroundColor: isSelected ? 'primary.B900' : 'grey.C500',
          },  
          '& .MuiChip-deleteIcon': {
            color: isSelected ? 'background.surface.B200' : '',
            marginRight: '12px',
            marginLeft: '0px',
            fontSize: '9px',
            mt: 0.5
          },
        }}
        label={label}
        deleteIcon={isSelected ? deleteIcon : undefined}
        onClick={onClick}
        onDelete={isSelected ? onDelete : undefined}
      />
    </Box>
  );
};
