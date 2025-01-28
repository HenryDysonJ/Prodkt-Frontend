import { CheckBox } from '@atoms/checkbox';
import { ScanIcon } from '@atoms/icons/scanIcon';
import { SearchAddIcon } from '@atoms/icons/searchProductIcon';
import { Box, Button, Grid, Typography } from '@mui/material';

import { CustomIconButton } from '..';
import { productProtectionFormStyle } from './style';

export interface ProductProtectionFormInterface {
  handleClick: () => void;
  handleChange?: (value: boolean) => void;
  handleUpdate?: () => void;
  checkBoxText?: string;
  buttonText?: string;
  no_service?: boolean;
  isShown?: boolean;
}

export const ProductProtectionForm = (props: ProductProtectionFormInterface) => {
  const {
    handleClick = () => false,
    handleChange = () => false,
    handleUpdate = () => false,
    buttonText = '',
    checkBoxText = '',
    no_service = false,
    isShown = false,
  } = props;

  return (
    <Box sx={productProtectionFormStyle.rootSx}>
      {isShown &&
        <Grid container spacing={2}>
          <Grid item xs={6} sx={productProtectionFormStyle.leftButtonSX}>
            <CustomIconButton icon={<ScanIcon />} iconBottomText="Scan Invoice" showIcon={true} showText={true} />
          </Grid>
          <Grid item xs={6} sx={productProtectionFormStyle.rightButtonSX}>
            <CustomIconButton
              data-testid="updateManually"
              onClickIconButton={handleClick}
              icon={<SearchAddIcon />}
              iconBottomText="Update Manually"
              showIcon={true}
              showText={true}
            />
          </Grid>
        </Grid>
      }
      {checkBoxText && (
        <Box sx={productProtectionFormStyle.checkBoxSx}>
          <CheckBox data-testid="drawerCheck" onChange={(isChecked) => handleChange(isChecked)} />
          <Typography sx={productProtectionFormStyle.checkTextSx}>{checkBoxText}</Typography>
        </Box>
      )}
      {/* {no_service && (
        <Box sx={productProtectionFormStyle.footerUpdateBtnSx}>
          <Button onClick={handleUpdate} fullWidth>
            {buttonText}
          </Button>
        </Box>
      )} */}
    </Box>
  );
};
