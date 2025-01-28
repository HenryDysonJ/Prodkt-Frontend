import { Box, Divider, Typography } from '@mui/material';

import { customizedButtonStyle } from './style';

export interface CustomizedButtonProps {
  count?: number | string | null;
  sucess?: () => void;
  title: string;
  subTitle?: string;
  buttonText: string;
  categories?: string;
  icon: JSX.Element;
  addProductMessage?: string;
  addProductError?: boolean;
  newAmc?: boolean;
  purchase?: boolean;
}

export const CustomizedButton = (props: CustomizedButtonProps): JSX.Element => {
  const {
    count,
    title = '',
    subTitle = '',
    buttonText = '',
    categories = '',
    sucess = () => false,
    purchase = false,
    addProductMessage = '',
    addProductError = false,
    newAmc = false,
    icon,
    ...rest
  } = props;

  return (
    <>
      {purchase && (
        <Box sx={customizedButtonStyle.rootSx} {...rest}>
          {/* Message */}
          {addProductMessage.length > 0 && (
            <Box mb={2} sx={customizedButtonStyle.errorMessage}>
              <Typography sx={addProductError ? customizedButtonStyle.errorFail : customizedButtonStyle.errorSuccess}>
                {addProductMessage}
              </Typography>
            </Box>
          )}
          <Box sx={customizedButtonStyle.headerRootSx}>
            <Box>
              <Typography sx={customizedButtonStyle.selectTextSx}>{title}</Typography>
              {newAmc ? (
                <Typography sx={customizedButtonStyle.categoriesTextSx}>{subTitle}</Typography>
              ) : (
                <Typography sx={customizedButtonStyle.categoriesTextSx}>
                  {count}&nbsp;<Box component="span">{categories}</Box>
                </Typography>
              )}
            </Box>
            <Box sx={customizedButtonStyle.rootDividerTextSx}>
              <Box>
                <Divider orientation="horizontal" sx={customizedButtonStyle.dividerSx} />
              </Box>
              <Box onClick={() => sucess()} sx={customizedButtonStyle.proccedIconRootSx}>
                <Typography data-testid="proceed" sx={customizedButtonStyle.proceedTextSx}>
                  {buttonText}
                </Typography>
                <Box>{icon}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
