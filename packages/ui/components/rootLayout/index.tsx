import { useRouting, useTheme } from '@core/store';
import type { BoxProps, SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { rootLayoutStyle } from './style';

export interface RootLayoutProps {
  className?: string;
  backgroundStyle?: object;
  rootStyle?: object;
  sx?: SxProps<Theme>;
  lightTheme?: boolean;
  childrenWrapperProps?: BoxProps;
}

export function RootLayout(props: RootLayoutProps): JSX.Element {
  const { childrenWrapperProps = {}, backgroundStyle = {}, rootStyle = {}, className = '', sx = {}, lightTheme = false, ...rest } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const route = useRouting((state) => state.route);

  const {setLightTheme} = useTheme();

  useEffect(() => {
    if (route !== null) {
      navigate(route);
      setTimeout(() => {
        useRouting.setState({ route: null });
      }, 1000);
    }
  }, [route]);

  useEffect(() => {
    if(lightTheme) {
      setLightTheme();
    }
  }, [location]);

  return (
    <Box
      sx={[
        {
          ...rootLayoutStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={[
          {
            ...rootLayoutStyle.childrenSx,
          },
          ...(Array.isArray(childrenWrapperProps['sx']) ? childrenWrapperProps['sx'] : [childrenWrapperProps['sx']]),
        ]}
      >
        <Box sx={{ ...rootLayoutStyle.backgroundSx, ...backgroundStyle }}>
          <Box sx={{ ...rootLayoutStyle.rootSx, ...rootStyle }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
