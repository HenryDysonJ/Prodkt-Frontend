import { SxProps, Tab, TabProps, Tabs, Theme } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';

import { verticalTabStyle } from './style';

export interface VerticalTabProps {
  className?: string;
  sx?: SxProps<Theme>;
  tapContainerStyle?: SxProps<Theme>;
  tapStyle?: SxProps<Theme>;
  tapsStyle?: SxProps<Theme>;
  tapPanelStyle?: SxProps<Theme>;
  tabList: {
    tabName: string;
    component: React.ReactNode;
    badge?: boolean;
    otherProps?: TabProps;
  }[];
  onChangeTab: (tab: number) => void;
  selectedTab: number;
}

export const VerticalTab = (props: VerticalTabProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    tapContainerStyle,
    selectedTab = 0,
    tapStyle = {},
    tapsStyle,
    tapPanelStyle,
    onChangeTab,
    tabList,
    ...rest
  } = props;
  const [value, setValue] = React.useState(selectedTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChangeTab(newValue);
  };

  const tabIdProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };
  return (
    <Box sx={[{ ...verticalTabStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      <Box sx={{ ...verticalTabStyle.tapContainer, ...tapContainerStyle } as SxProps<Theme>}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ ...verticalTabStyle.taps, ...tapsStyle } as SxProps<Theme>}
        >
          {tabList?.length > 0 &&
            tabList?.map((tabData, index: number) => (
              <Tab
                key={`${tabData?.tabName}${index}`}
                sx={{ ...verticalTabStyle.tap, ...tapStyle } as SxProps<Theme>}
                label={tabData?.tabName}
                data-badge={tabData?.badge}
                {...tabIdProps(index)}
              />
            ))}
        </Tabs>
        {tabList?.length > 0 && (
          <>
            {tabList?.map((tabData, index: number) => (
              <TabPanel
                key={`${tabData?.tabName}TabPanel${index}`}
                sx={{ ...verticalTabStyle.tapPanel, ...tapPanelStyle } as SxProps<Theme>}
                value={value}
                index={index}
              >
                {tabData?.component}
              </TabPanel>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: SxProps<Theme>;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: '16px' }}>{children}</Box>}
    </Box>
  );
}
