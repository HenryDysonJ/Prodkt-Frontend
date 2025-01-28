import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';

import { addServiceProviderComponentStyle } from './style';
import { DrawerComponent, ModalHeader } from '..';
import { Button } from '@atoms/button';
import { Input } from '@atoms/input';
import { CloseIcon, SearchIconColor } from '@atoms/icons';
import { CustomTextfield } from '@atoms/customTextfield';
import { CheckBox } from '@atoms/checkbox';
import { AddPlusServiceIcon } from '@atoms/icons/preferService';

export interface AddServiceProviderComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  serviceProviderName?: string;
  btnName?: string;
  loading?: boolean;
  drawerHeaderText: string;
  serviceProviderValue?: string;
  locationNameValue?: string;
  locationName?: string;
  secondaryContactNumberValue?: number | null;
  secondaryContactNumber?: string;
  primaryContactNumber?: string;
  primaryContactNumberValue?: number | null;
  showAnotherNumberInput: boolean;
  disabled: boolean;
  showOpenAddServiceDrawer: boolean;
  handleChangePrimaryContactNumberInput?: ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
  handleChangeServiceProviderInput?: ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
  handleChangeSecondaryContactNumberInput?: ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
  handleChangeLocationNameInput?: ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
  handleSubmit: () => void;
  handleChangeAnotherField: () => void;
  handleChangeChecked?: (checked: boolean, e: any) => void;
  handleCloseDrawer: () => void;
  primaryIsChecked?: boolean;
};


export const AddServiceProviderComponent = (props: AddServiceProviderComponentProps): JSX.Element => {
  const { serviceProviderName = '',
    primaryIsChecked = false,
    serviceProviderValue = '',
    primaryContactNumber = '',
    primaryContactNumberValue,
    secondaryContactNumberValue,
    locationNameValue = '',
    locationName = '',
    loading = false,
    secondaryContactNumber = '',
    drawerHeaderText = '',
    btnName = '',
    showOpenAddServiceDrawer = false,
    disabled = false,
    showAnotherNumberInput = false,
    handleSubmit = () => false,
    handleChangeAnotherField = () => false,
    handleChangeChecked = () => false,
    handleCloseDrawer = () => false,
    handleChangePrimaryContactNumberInput = () => false,
    handleChangeSecondaryContactNumberInput = () => false,
    handleChangeLocationNameInput = () => false,
    handleChangeServiceProviderInput = () => false,
    className = '',
    sx = {},
    ...rest } = props;

  return (
    <Box sx={[{ ...addServiceProviderComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      <DrawerComponent
        open={showOpenAddServiceDrawer}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{color: 'text.A100'}} />}
            showIcon={true}
            showHeader={true}
            headerText={drawerHeaderText}
            onClose={() => handleCloseDrawer()}
          />
        }
      >
        <Divider sx={{ border: '1px solid', borderColor: 'divider.100' }} />
        <Box sx={{ px: 2.5, py: 2.5 }}>
          <CustomTextfield
            textFieldStyle={{ mb: 2 }}
            definitionName={serviceProviderName}
            isRequired
            testid='serviceProviderName'
            value={serviceProviderValue}
            onChange={(e) => handleChangeServiceProviderInput(e)}
          />
          <CustomTextfield
            textFieldStyle={{ mb: 1 }}
            definitionName={primaryContactNumber}
            isRequired
            testid='contactNumber1'
            type='number'
            value={primaryContactNumberValue}
            onChange={(e) => handleChangePrimaryContactNumberInput(e)}
          />
          {!showAnotherNumberInput ?
            <Box
              onClick={handleChangeAnotherField}
              data-testid="addAnotherNumber"
              sx={addServiceProviderComponentStyle.searchBoxSx}
            >
              <AddPlusServiceIcon />
              <Typography sx={addServiceProviderComponentStyle.typeSx}>{`Add Another Number`}</Typography>
            </Box>
            :
            <CustomTextfield
              textFieldStyle={{ mb: 2, mt: 2 }}
              definitionName={secondaryContactNumber}
              testid='contactNumber2'
              type='number'
              value={secondaryContactNumberValue}
              onChange={(e) => handleChangeSecondaryContactNumberInput(e)}
            />}
          <CustomTextfield
            textFieldStyle={{ mb: 2 }}
            definitionName={locationName}
            testid='location'
            isRequired
            value={locationNameValue}
            onChange={(e) => handleChangeLocationNameInput(e)}
          />

          <Stack direction={'row'} alignItems={'center'} mt={1.6} mb={4} gap={'3px'}>
            <CheckBox checked={primaryIsChecked} data-testid='Mark as primary service provider' onChange={(isChecked: boolean, e: any) => handleChangeChecked(isChecked, e.target.checked)} isSquare />
            <Typography sx={{ color: 'text.500', fontSize: '14px' }}>Mark as primary service provider</Typography>
          </Stack>

          <Button data-testid='addServiceProvider' disabled={disabled} onClick={handleSubmit} loading={loading} sx={addServiceProviderComponentStyle.btnSx}>{btnName}</Button>

        </Box>
      </DrawerComponent>
    </Box>
  );
}





