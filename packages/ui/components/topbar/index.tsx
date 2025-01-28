import { Box, Stack } from '@mui/material';
import { TopBarStyle } from './style';
export interface TopBarProps {
  logo: React.ReactElement
}


export const TopBarComponent = (props: TopBarProps): JSX.Element => {
  return (
    <Stack sx={TopBarStyle?.rootSx} direction={'row'}>
      <Box>
        {props?.logo}
      </Box>
    </Stack>
  )
};
