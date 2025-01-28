import { Button } from '@atoms/button';
import { PageNotFoundIllustration } from '@atoms/icons';
import type { SxProps, Theme } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { pageNotFoundStyle } from './style';
export interface PageNotFoundProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export function PageNotFound(props: PageNotFoundProps): JSX.Element {
  const { className = '', sx = {}, ...rest } = props;

  const navigate = useNavigate();

  return (
    <Box
      sx={[
        {
          ...pageNotFoundStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} display="flex" justifyContent="center">
            <Box mt={10}>
              <PageNotFoundIllustration />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={4}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} display="flex" justifyContent="center">
                <Typography sx={pageNotFoundStyle.headerTextSx}>Page not found</Typography>
              </Grid>
              <Grid item xs={11} sm={12} md={12} lg={12} xl={12} display="flex" justifyContent="center" mt={1.8}>
                <Box>
                  <Typography textAlign="center" width="257px" color="text.700">
                    We are sorry, the page you requested could not be found
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} display="flex" justifyContent="center" mt={4}>
                <Box pb={1}>
                  <Button
                    onClick={() => navigate('/')}
                    sx={{ borderRadius: 2, py: 1, width: '335px', textTransform: 'capitalize' }}
                  >
                    Go to home page
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
