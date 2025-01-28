import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import React, { Dispatch, SetStateAction } from 'react';

import { dataTabsStyle } from './style';
import { AnyRecord } from 'dns';

interface TabProps {
  label: string;
  value: string | number;
  width: string | number;
}

export interface DataTabsProps {
  className?: string;
  underTabSx?: SxProps<Theme>;
  totalStyle?: SxProps<Theme>;
  tabStyle?: SxProps<Theme>;
  setTabIndex?: any;
  tabIndex: any;
  tabs: TabProps[];
}

export const DataTabs = (props: DataTabsProps): JSX.Element => {
  const { tabs = [], setTabIndex, totalStyle, tabIndex, underTabSx, tabStyle, className = '', ...rest } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    if (setTabIndex) {
      setTabIndex(newValue);
    }
  };

  return (
    <Box sx={dataTabsStyle.rootSx} className={`${className}`} {...rest}>
      <TabContext value={tabIndex}>
        <Box sx={{ ...dataTabsStyle.totalSx, ...totalStyle } as SxProps<Theme>}>
          <TabList
            sx={{ ...dataTabsStyle.underTab, ...underTabSx } as SxProps<Theme>}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            {tabs.length > 0 &&
              tabs?.map((tab) => {
                return (
                  <Tab
                    sx={{ ...dataTabsStyle.tabSx, width: tab.width, ...tabStyle } as SxProps<Theme>}
                    label={tab.label}
                    value={tab.value}
                    iconPosition="end"
                    key={tab.value}
                    data-testid={tab.label}
                  />
                );
              })}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};
