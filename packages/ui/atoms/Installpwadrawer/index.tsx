import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import InstallPwaIcon from '@atoms/icons/installPwaIcon';
import { FooterButtonComponent } from '@components/footerButtonComponent';
import { installPwaDrawerStyle } from './style';

export interface InstallPwaDrawerProps {
  className?: string;
  sx?: SxProps<Theme>;
  isAndroid: boolean;
  installPwa: () => void;
  handlePwaInstallDrawer: () => void;
};


export const InstallPwaDrawer = (props: InstallPwaDrawerProps): JSX.Element => {
  const { installPwa = () => false, handlePwaInstallDrawer = () => false, isAndroid = false, className = '', sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...installPwaDrawerStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      <Box sx={installPwaDrawerStyle.pwaContainer}>
        <Box sx={installPwaDrawerStyle.pwaContent}>
          <InstallPwaIcon />
          <Typography sx={installPwaDrawerStyle.pwaContentDes}>
            Install the app on your devices to easily access it anytime.
          </Typography>
        </Box>
        {!isAndroid && (
          <>
            <Typography sx={installPwaDrawerStyle.pwaContentDesIOS} mb={1}>
              1. Tap on Safari
            </Typography>
            <Typography sx={installPwaDrawerStyle.pwaContentDesIOS} mb={2.5}>
              2. Select <b>Add to Home Screen</b>
            </Typography>
          </>
        )}
        {isAndroid && (
          <FooterButtonComponent
            sx={{ px: 2, py: 1 }}
            showLeftBtn
            showRightBtn
            leftButton="Not Now"
            rightButton="Install"
            leftButtonStyle={installPwaDrawerStyle.secondaryBtn}
            rightButtonStyle={installPwaDrawerStyle.primaryBtn}
            handleClickPrevious={handlePwaInstallDrawer}
            handleClickNext={installPwa}
          />
        )}
      </Box>
    </Box>
  );
}





