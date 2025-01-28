// import { webRoutes } from '@core/routes';
import { webRoutes } from '@core/routes';
import { useServiceProviders } from '@core/store';
import AddedSuccessfully from '@core/ui/assets/addedSuccessfully.gif';
import { Button, CircleEllipseBig, CircleEllipseNormal, CircleEllipseSmall, PolygonNormal } from '@core/ui/atoms';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import { routeTo } from '@core/utils';
import { Box, CircularProgress, Typography } from '@mui/material';
// import EmailVerification from '@pages/emailVerification';
// import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { bookServiceProviderSuccessfully } from './style';
import { useEffect } from 'react';

export default function BookServiceProviderSuccessfully() {
  const navigate = useNavigate();
  const { bookingSlotLoading, bookingSlotError } = useServiceProviders();
  const goToHome = () => {
    navigate(webRoutes?.home);
  };


  // Amplitude tracking
  useEffect(() => {
    track('Book service provider successfully page', {
      name: 'customer-app',
    });
  }, []);
  return (
    <Box sx={bookServiceProviderSuccessfully.mainBoxSx}>
      <Box sx={bookServiceProviderSuccessfully.polygonImg}>
        <PolygonNormal />
      </Box>
      <Box sx={bookServiceProviderSuccessfully.polygonImgRight}>
        <PolygonNormal />
      </Box>
      <Box sx={bookServiceProviderSuccessfully.circleEllipseBigSx}>
        <CircleEllipseBig />
      </Box>
      <Box sx={bookServiceProviderSuccessfully.circleEllipseNormalSx}>
        <CircleEllipseNormal />
      </Box>
      <Box sx={bookServiceProviderSuccessfully.circleEllipseSmallSx}>
        <CircleEllipseSmall />
      </Box>
      <Box sx={bookServiceProviderSuccessfully.subBoxSx}>
        {/* On Error */}
        {bookingSlotError && (
          <>
            <CancelRoundedIcon sx={bookServiceProviderSuccessfully.closeIconSx} />
            <Typography sx={bookServiceProviderSuccessfully.titleSx}>
              Opps! Something went wrong, Unable to Book Service
            </Typography>
          </>
        )}

        {/* On Loading */}
        <Box sx={bookServiceProviderSuccessfully.circleProgressSx}>
          {bookingSlotLoading && (
            <>
              <CircularProgress />
              <Typography sx={bookServiceProviderSuccessfully.titleSx}>Please wait...</Typography>
            </>
          )}
          {/* On Success */}
          {!bookingSlotLoading && !bookingSlotError && (
            <>
              <img
                style={{ height: '139px', width: '139px' }}
                src={AddedSuccessfully}
                alt="Service Request Sent Successfully"
              />
              <Typography sx={bookServiceProviderSuccessfully.titleSx}>Service Request Sent Successfully</Typography>
            </>
          )}
        </Box>
      </Box>
      {/* {bookingSlotLoading && isDrawerOpen && <EmailVerification />} */}
      <Box sx={bookServiceProviderSuccessfully?.btnContainer}>
        <Button
          data-testid="Go to Home Page"
          sx={bookServiceProviderSuccessfully.primaryBtn}
          onClick={() => goToHome()}
        >
          Go to Home Page
        </Button>
      </Box>
    </Box>
  );
}
