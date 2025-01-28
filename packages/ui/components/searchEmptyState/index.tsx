import { SearchEmptyStateIcon } from '@atoms/icons';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { searchEmptyStateStyle } from './style';

export interface SearchEmptyStateProps {
  className?: string;
  sx?: SxProps<Theme>;
  title?: string;
  subTitle?: string;
  icon?: React.ReactNode;
}

export const SearchEmptyState = (props: SearchEmptyStateProps): JSX.Element => {
  const { className = '', sx = {}, title, subTitle, icon, ...rest } = props;

  return (
    <Box
      sx={[{ ...searchEmptyStateStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={searchEmptyStateStyle.flexBox}>
        {icon ? icon : <SearchEmptyStateIcon />}
        <Typography sx={searchEmptyStateStyle.emptyTitleSx}>{title ? title : "No AMC's Found"}</Typography>
        <Typography sx={searchEmptyStateStyle.emptySubTitleSx}>
          {subTitle ? subTitle : 'Try search using other services'}
        </Typography>
      </Box>
    </Box>
  );
};
