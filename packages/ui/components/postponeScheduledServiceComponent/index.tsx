import { Button } from '@atoms/button';
import { CustomTextfield } from '@atoms/customTextfield';
import { CloseIcon } from '@atoms/icons';
import { Input } from '@atoms/input';
import type { SxProps, Theme } from '@mui/material';
import { Box, Divider } from '@mui/material';
import { DrawerComponent, ModalHeader } from '..';
import { postponeScheduledServiceComponentStyle } from './style';

export interface PostponeScheduledServiceComponentProps {
  className?: string;
  definitionNameDate?: string;
  descriptionValue?: string;
  drawerHeaderText: string;
  handleChangeDescriptionValue?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  handleChangeInput?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  inputValue?: string;
  handleSubmit: () => void;
  handleCloseDrawer: () => void;
  sx?: SxProps<Theme>;
  showInput: boolean;
  showDescription: boolean;
  showPostponeDrawer: boolean;
};


export const PostponeScheduledServiceComponent = (props: PostponeScheduledServiceComponentProps): JSX.Element => {
  const { definitionNameDate = '', showPostponeDrawer = false, showInput = false, showDescription = false, drawerHeaderText = '', descriptionValue = '', handleSubmit = () => false, handleCloseDrawer = () => false, handleChangeDescriptionValue = () => false, handleChangeInput = () => false, inputValue = '', className = '', sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...postponeScheduledServiceComponentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>

      <DrawerComponent
        open={showPostponeDrawer}
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
          {showInput &&
            <CustomTextfield
              textFieldStyle={{ mb: 2 }}
              definitionName={definitionNameDate}
              isRequired
              variant="dateField"
              value={inputValue}
              onChange={(e) => handleChangeInput(e)}
            />}
          {showDescription &&
            <Input
              testFieldStyle={{
                mb: 1.8,
                '& .MuiInputBase-input': {
                  fontSize: '14px',
                  color:'text.A100',
                  fontWeight:500,
                }
              }}
              placeholder='Remarks'
              value={descriptionValue}
              onChange={(e) => handleChangeDescriptionValue(e)}
              minRows={'3'}
              multiline={true}
            />
          }
          <Button onClick={handleSubmit} sx={postponeScheduledServiceComponentStyle.btnSx}>submit</Button>

        </Box>
      </DrawerComponent>

    </Box>
  );
}





