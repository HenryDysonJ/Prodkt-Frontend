import { Box, Typography } from '@mui/material';

import { documentUploadUiComponentStyle } from './style';

export interface DocumentUploadUiComponentProps {
  icon: JSX.Element;
  text: string;
  handleClick: () => void;
}

export const DocumentUploadUiComponent = (props: DocumentUploadUiComponentProps): JSX.Element => {
  const { icon, text = '', handleClick = () => false, ...rest } = props;

  return (
    <Box sx={documentUploadUiComponentStyle.rootSx} onClick={handleClick} {...rest}>
      <Box sx={{ display: 'flex' }}>{icon}</Box>
      <Typography sx={documentUploadUiComponentStyle.textSx}>{text}</Typography>
    </Box>
  );
};
