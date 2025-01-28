import type { SxProps, Theme } from '@mui/material';
import { Box, Tabs, Typography } from '@mui/material';

import { useState } from 'react';
import { tabsSwitchStyle } from './style';

export interface TabsSwitchProps {
  className?: string;
  sx?: SxProps<Theme>;
  tabStyle?: SxProps<Theme>;
  tabs?: any;
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export const TabsSwitch = (props: TabsSwitchProps): JSX.Element => {
  const { className = '', sx = {}, tabs, tabStyle, ...rest } = props;
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleTabChange = (i: any) => {
    setIndex(i);
  };

  return (
    <Box
      sx={[
        {
          ...tabsSwitchStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box>
        <Box sx={tabsSwitchStyle.tabBar}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' sx={{ ...tabStyle, '& .MuiTabs-flexContainer': { gap: '40px' } }} >
              {tabs.length > 0 &&
                tabs.map((tab: any, i: any) => {
                  return (
                    <Box display={'grid'} alignItems={'end'}>
                      <Typography
                        onClick={() => handleTabChange(i)}
                        key={i}
                        pt={2}
                        pb={2}
                        sx={i === index ? tabsSwitchStyle.alertConfigTabTxt : tabsSwitchStyle.alertConfigTab}
                      >
                        {tab?.label}
                      </Typography>
                      <Box display="flex" alignItems="center" justifyContent="center" width={'auto'}>
                        {
                          i === index &&
                          <Box sx={tabsSwitchStyle.innerBox} />
                        }
                      </Box>
                    </Box>
                  );
                })}
            </Tabs>
            <Box sx={{ borderBottom: '1px solid #D9DBDD', mt: '-12px' }}></Box>
          </Box>
        </Box>
        <TabPanel>
          {index === 0 && <Box>{tabs[0]?.children}</Box>}
          {index === 1 && <Box>{tabs[1]?.children}</Box>}
          {index === 2 && <Box>{tabs[2]?.children}</Box>}
          {index === 3 && <Box>{tabs[3]?.children}</Box>}
        </TabPanel>
      </Box>
    </Box>
  );
};
