import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { InSightsStyle } from './style';


interface dataInterface {
  count: string | null;
  name: string;
  icon: string;
}
export interface InSightsProps {
  data: dataInterface[]
}

export const InSights = (props: InSightsProps) => {

  return (
    <>
      {
        props?.data?.map((e: dataInterface, index: number) => {
          return (
            <Grid item key={index} xl={3} lg={3} md={4} sm={6} xs={6}>
              <Box sx={InSightsStyle?.gridItem}>
                <Typography sx={InSightsStyle?.gridText}>{e?.name}</Typography>
                <Stack direction='row' pt={'5px'} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography sx={InSightsStyle?.gridValue}>{e?.count}</Typography>
                  <Box>
                    <img src={e?.icon} style={{height:24,width:24}} alt='sights'/> 
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )
        })
      }
    </>
  );
};

InSights.displayName = 'InSights';
