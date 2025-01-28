import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { preferRegularServiceStyle } from './style';
import { ServiceCloseIcon, ServiceDoubleIcon, ServiceMaintenanceIcon } from '@atoms/icons/preferService';
import { Button } from '..';

export interface PreferRegularServiceProps {
  className?: string;
  sx?: SxProps<Theme>;
  onClose: () => void;
  handleAddProvider?: () => void;
  dataTextId?: string;
  dataTestIdClose?: string;
  showPreferService: boolean;
  showMoreResult?: boolean;
  handleMoreResult: () => void;
  loading?: boolean;
  buttonText: string;
};


export const PreferRegularService = (props: PreferRegularServiceProps): JSX.Element => {
  const { buttonText = '', onClose = () => false, loading = false, showMoreResult = false, handleMoreResult = () => false, dataTextId = '', dataTestIdClose = '', showPreferService = false, handleAddProvider = () => false, className = '', sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...preferRegularServiceStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      {showPreferService &&
        <Box sx={preferRegularServiceStyle.mainBoxSx}>
          <Stack spacing={2} alignItems={'center'} direction={'row'}>
            <Box mb={'27px'}>
              <ServiceMaintenanceIcon />
            </Box>
            <Box>
              <Stack mb={0.8} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography sx={preferRegularServiceStyle.titleTextSx}>Would you prefer to reach out to your regular service provider?</Typography>
                <ServiceCloseIcon data-testid={dataTestIdClose} cursor={'pointer'} onClick={onClose} />
              </Stack>
              <Stack data-testid={dataTextId} onClick={handleAddProvider} direction={'row'} alignItems={'center'} spacing={'4px'} sx={{ cursor: 'pointer' }}>
                <Typography variant={'subtitle1'} fontWeight={700} sx={preferRegularServiceStyle.addTextSx}>Click here to Add</Typography>
                <ServiceDoubleIcon />
              </Stack>
            </Box>
          </Stack>
        </Box>
      }

      {showMoreResult &&
        <Box sx={{ width: '100%' }}>
          <Box sx={preferRegularServiceStyle.btnBox}>
            <Button sx={preferRegularServiceStyle.btnSx} loading={loading} onClick={handleMoreResult}>{buttonText}</Button>
          </Box>
        </Box>
      }
    </Box>
  );
}





