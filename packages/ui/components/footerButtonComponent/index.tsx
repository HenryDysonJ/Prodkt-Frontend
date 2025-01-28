import { Button } from '@atoms/button';
import { Box, SxProps, Theme } from '@mui/material';

import { footerButtonComponentStyle } from './style';

export interface FooterButtonComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  leftButton?: string;
  rightButton?: string;
  showLeftBtn?: boolean;
  disabled?: boolean;
  showRightBtn?: boolean;
  leftLoading?: boolean;
  rightLoading?: boolean;
  schduleService?: boolean;
  paddingTopRemove?: boolean;
  leftButtonStyle?: SxProps<Theme>;
  productStyle?: SxProps<Theme>;
  rightButtonStyle?: SxProps<Theme>;
  handleClickPrevious?: () => void;
  handleClickNext?: () => void;
}

export const FooterButtonComponent = (props: FooterButtonComponentProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    leftButton = '',
    disabled = false,
    rightLoading = false,
    leftLoading = false,
    rightButton = '',
    leftButtonStyle,
    rightButtonStyle,
    productStyle,
    showLeftBtn = false,
    showRightBtn = false,
    paddingTopRemove = false,
    schduleService = false,
    handleClickPrevious = () => false,
    handleClickNext = () => false,
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...footerButtonComponentStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          ...(schduleService ? footerButtonComponentStyle.cardSectionSx : footerButtonComponentStyle.cardSx),
          paddingTop: paddingTopRemove && '0px',
          ...productStyle
        }}
      >
        {/* <Grid container spacing={2}>
          <Grid item xs={6}> */}
        {showLeftBtn && (
          <Button
            data-testid="cancel"
            onClick={() => handleClickPrevious()}
            sx={{ ...footerButtonComponentStyle.leftButtonSx, ...leftButtonStyle } as SxProps<Theme>}
            fullWidth
            loading={leftLoading}
          >
            {leftButton}
          </Button>
        )}
        {/* </Grid>
          <Grid item xs={6}> */}
        {showRightBtn && (
          <Button
            data-testid="next"
            onClick={() => handleClickNext()}
            disabled={disabled}
            sx={{ ...footerButtonComponentStyle.rightButtonSx, ...rightButtonStyle } as SxProps<Theme>}
            fullWidth
            loading={rightLoading}
          >
            {rightButton}
          </Button>
        )}
        {/* </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};
