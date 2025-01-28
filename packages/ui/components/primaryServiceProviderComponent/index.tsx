import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';

import { primaryServiceProviderComponentStyle } from './style';
import { DrawerComponent, ModalHeader } from '..';
import { CloseIcon, LocationIcon } from '@atoms/icons';
import { CallIcon, DoubleArrowIcon, WhatAppIcon } from '@atoms/icons/preferService';
import { useNavigate } from 'react-router-dom';
import { webRoutes } from '@core/routes';
import { useProductDetails } from '@core/store';

export interface PrimaryServiceProviderComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  openServiceProvider: boolean;
  handleCloseDrawer: () => void;
  handleNavigatePage: () => void;
};


export const PrimaryServiceProviderComponent = (props: PrimaryServiceProviderComponentProps): JSX.Element => {
  const { handleNavigatePage = () => false, openServiceProvider = false, handleCloseDrawer = () => false, className = '', sx = {}, ...rest } = props;

  const { primary_service_provider } = useProductDetails()

  const openWhatsApp = (number: number | null) => {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, '_blank');
  }

  const goToDialPad = (number: number | null) => {
    window.open(`tel:${number}`);
  };
  return (
    <Box sx={[{ ...primaryServiceProviderComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      <DrawerComponent
        open={openServiceProvider}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{color: 'text.A100'}} />}
            showIcon={true}
            showHeader={true}
            headerText={'Primary Service Provider'}
            onClose={handleCloseDrawer}
          />
        }
      >
        <Divider sx={{ border: '1px solid', borderColor: 'divider.100' }} />
        <Box sx={{ px: 2.5, py: 2.5 }}>
          <Stack mb={1.2} direction='row' spacing={'13px'} justifyContent={'space-between'} alignItems={'flex-start'}>
            <Typography variant='subtitle2' fontWeight={600} sx={primaryServiceProviderComponentStyle.providerNameSx}>{primary_service_provider?.provider_name}</Typography>
            <Stack direction={'row'} spacing={'12px'}>
              <Box data-testid='whatsapp' onClick={() => openWhatsApp(primary_service_provider?.primary_mobile_no ?? null)} sx={primaryServiceProviderComponentStyle.whatsAppSx}>
                <WhatAppIcon />
              </Box>
              <Box data-testid='call' onClick={() => goToDialPad(primary_service_provider?.primary_mobile_no ?? null)} sx={primaryServiceProviderComponentStyle.phoneSx}>
                <CallIcon />
              </Box>
            </Stack>
          </Stack>
          <Stack mb={3} direction={'row'} spacing={'7px'}>
            <LocationIcon sx={primaryServiceProviderComponentStyle.locationIcon} />
            <Typography sx={primaryServiceProviderComponentStyle.locationNameSx}>{primary_service_provider?.location_name}</Typography>
          </Stack>
          <Stack data-testid='View list of preferred service providers' onClick={handleNavigatePage} sx={{ cursor: 'pointer' }} direction={'row'} spacing={0.5} alignItems={'center'} justifyContent={'center'}>
            <Typography sx={primaryServiceProviderComponentStyle.bottomTextSx}>View list of preferred service providers</Typography>
            <DoubleArrowIcon />
          </Stack>
        </Box>
      </DrawerComponent>

    </Box>
  );
}





