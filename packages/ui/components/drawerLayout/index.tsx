import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

import { drawerLayoutStyle } from './style';

export interface DrawerLayoutProps {
  className?: string;
  headerRequired?: boolean;
  footerRequired?: boolean;
  sx?: SxProps<Theme>;
  childrenStyle?: SxProps<Theme>;
  headerStyle?: SxProps<Theme>;
  footerStyle?: SxProps<Theme>;
  drawerStyle?: SxProps<Theme>;

  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
}

export const DrawerLayout = (props: DrawerLayoutProps): JSX.Element => {
  const {
    headerRequired = true,
    footerRequired = true,
    children,
    drawerStyle,
    childrenStyle,
    headerStyle,
    footerStyle,
    footer,
    header,
    className = '',
    sx = {},
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...drawerLayoutStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...drawerLayoutStyle.mainBoxSx, ...drawerStyle } as SxProps<Theme>}>
        {headerRequired && <Box sx={{ ...drawerLayoutStyle.headerSx, ...headerStyle } as SxProps<Theme>}>{header}</Box>}
        <Box sx={{ ...drawerLayoutStyle.childrenSx, ...childrenStyle } as SxProps<Theme>}>{children}</Box>
        {footerRequired && <Box sx={{ ...drawerLayoutStyle.footerSx, ...footerStyle } as SxProps<Theme>}>{footer}</Box>}
      </Box>
    </Box>
  );
};
