import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { findYourProductStyle } from './style';

export interface FindYourProductProps {
  className?: string;
  sx?: SxProps<Theme>;
  onFindProductClick?: () => void;
}

export const FindYourProduct = (props: FindYourProductProps): JSX.Element => {
  const { onFindProductClick = () => false, className = '', sx = {}, ...rest } = props;

  return (
    <Box
      sx={[
        {
          ...findYourProductStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={findYourProductStyle.borderRootx}>
        <Typography sx={findYourProductStyle.findyourProductTextSx}>Having difficulty in identifying your product, pls assist us in recognising it.</Typography>
        <Typography
          data-testid="clickHereToAdd"
          sx={findYourProductStyle.clickhereTextSx}
          onClick={() => onFindProductClick()}
        >
          Click here to add
        </Typography>
      </Box>
    </Box>
  );
};
