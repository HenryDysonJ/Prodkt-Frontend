import { Button } from '@atoms/button';
import { StarGroup } from '@atoms/icons/productSearchIconsLists';
import { ProgressCircularComponent } from '@atoms/progressCircularComponent';
import { webRoutes } from '@core/routes';
import BackgroundImage from '@core/ui/assets/amcHistoryCardBackground.svg';
// import StarGroup from '@core/ui/assets/starGroup.svg';
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { viewHistoryComponentStyle } from './style';

export interface CardData {
  currentStep: number;
  maxStep: number;
  size: number;
  thickness: number;
  icon: JSX.Element;
  text: string;
  buttonText: string;
  viewServiceHistory: boolean;
}

export interface ViewHistoryComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  cardData: CardData;
}

export const ViewHistoryComponent = (props: ViewHistoryComponentProps): JSX.Element => {
  const { cardData, ...rest } = props;
  const navigate = useNavigate();

  const serviceButtonHistory = () => {
    navigate(webRoutes.serviceHistory);
  };

  return (
    <Box>
      {cardData?.viewServiceHistory && (
        <Box sx={viewHistoryComponentStyle.rootSx} {...rest}>
          <Grid
            container
            sx={{
              ...viewHistoryComponentStyle.backgroundSx,
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          >
            <Grid item xs={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box sx={viewHistoryComponentStyle.iconSx}>
                <Box sx={{ position: 'relative' }}>
                  <StarGroup rootStyle={{ position: 'absolute', left: '-20px', top: '-6px' }} />
                </Box>
                <ProgressCircularComponent
                  currentStep={cardData?.currentStep}
                  maxStep={cardData?.maxStep}
                  size={cardData?.size}
                  thickness={cardData?.thickness}
                  icon={cardData?.icon}
                />
              </Box>
            </Grid>
            <Grid pl={1} item xs={7} display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="subtitle2" fontWeight="700" sx={viewHistoryComponentStyle.textSx}>
                {cardData?.text}
              </Typography>
              <Button onClick={() => serviceButtonHistory()} sx={viewHistoryComponentStyle.buttonSx}>
                {cardData?.buttonText}
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
