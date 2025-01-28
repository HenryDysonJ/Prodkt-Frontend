import { Button } from '@atoms/button';
import { Grid, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { fixedFooterComponentStyle } from './style';

export interface FooterData {
  title: string;
  subTitle: string;
  buttonText: string;
}

export interface FixedFooterComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  footerData: FooterData;
  scheduleService: boolean;
  handleClick?: () => void;
}

export const FixedFooterComponent = (props: FixedFooterComponentProps): JSX.Element => {
  const { footerData, scheduleService = false, handleClick = () => false, ...rest } = props;

  return (
    <>
      {scheduleService && (
        <Box sx={fixedFooterComponentStyle.rootSx} {...rest}>
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={fixedFooterComponentStyle.titleSx}>{footerData?.title}</Typography>
              <Typography sx={fixedFooterComponentStyle.subTitleSx}>{footerData?.subTitle}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={fixedFooterComponentStyle.buttonSx}>
                <Button onClick={handleClick}>{footerData?.buttonText}</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
