import { TabDataInterface } from '@core/store/interface';
import { Divider, Stack, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { switchTabsStyle } from './style';

export interface SwitchTabsProps {
  className?: string;
  sx?: SxProps<Theme>;
  tabData: TabDataInterface[];
}

export const SwitchTabs = (props: SwitchTabsProps): JSX.Element => {
  const { tabData, ...rest } = props;
  const [index, setindex] = useState<number>(0);
  const [positionValue, setPositionValue] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const firstTab = useRef<HTMLParagraphElement | null>(null);
  const parentDiv = useRef<HTMLDivElement | null>(null);

  const handleAlertTab = (i: number, event: React.MouseEvent<HTMLParagraphElement>) => {
    setindex(i);
    const targetElement = event.currentTarget as HTMLParagraphElement;
    setPositionValue(targetElement.getBoundingClientRect().x - parentDiv?.current!.getBoundingClientRect().x);
    setWidth(targetElement.getBoundingClientRect().width);
  };

  useEffect(() => {
    if (firstTab?.current && parentDiv.current) {
      setPositionValue(firstTab.current.getBoundingClientRect().x - parentDiv?.current?.getBoundingClientRect().x);
      setWidth(firstTab.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <Box sx={switchTabsStyle.rootSx} {...rest}>
      <Box sx={switchTabsStyle.sampleTabBHead}>
        <Stack ref={parentDiv} direction="row" justifyContent="space-between" sx={{ position: 'relative' }}>
          {tabData?.map((val, i: number) => {
            return (
              <>
                <Box key={i}>
                  <Typography
                    variant="subtitle2"
                    ref={i === 0 ? firstTab : null}
                    key={i}
                    pb={2}
                    onClick={(e) => handleAlertTab(i, e)}
                    sx={i === index ? switchTabsStyle.alertConfigTabTxt : switchTabsStyle.alertConfigTab}
                  >
                    {val?.title}
                  </Typography>
                </Box>
              </>
            );
          })}
          <Divider sx={{ ...switchTabsStyle.dividerSx, width: width, transform: `translateX(${positionValue}px)` }} />
        </Stack>
      </Box>

      <Box sx={switchTabsStyle.referenceDiv}>
        <Stack rowGap="16px" sx={switchTabsStyle.tabDivs}>
          {tabData?.[index]?.points?.map((point, i: number) => {
            return (
              <Box key={i} rowGap="16px" sx={switchTabsStyle.pointsSx}>
                <Box>{point?.pointIcon}</Box>
                <Typography>{point?.pointText}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};
