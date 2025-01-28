import { Box, Button, CircularProgress, IconButton, Stack, SxProps, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

import LeftArrowIcon from './assets/leftArrowIcon';
import { topBarStyle } from './style';

export interface TopBarLayoutProps {
  backBtn?: boolean;
  backBtnFunc?: () => void | undefined;
  title?: string;
  titleStyle?: SxProps;
  rootStyle?: SxProps;
  topbarRightitems?: React.ReactNode;
  outlineButtonText?: string;
  containButtonText?: string;
  handleClickOutlineButton?: () => void;
  handleClickContainButton?: () => void;
  activeBtn?: boolean
  loading?: any
}

export function TopBar(props: TopBarLayoutProps): JSX.Element {
  const {
    rootStyle,
    backBtn,
    backBtnFunc,
    title,
    titleStyle,
    outlineButtonText,
    containButtonText,
    handleClickOutlineButton,
    handleClickContainButton,
    activeBtn,
    loading
  } = props;

  return (
    <Box sx={{ ...topBarStyle.rootSx, ...rootStyle } as SxProps}>
      <AppBar position="static" sx={{ ...topBarStyle.appBar }}>
        <Box id="appbar-parent-box" sx={{ ...topBarStyle.appbarParentBox }}>
          <Toolbar disableGutters>
            <Box id="parent-box" sx={{ ...topBarStyle.parentBox }}>
              <Box id="first-box">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {backBtn && (
                    <IconButton
                      sx={{ ...topBarStyle.iconBtn }}
                      onClick={() => {
                        if (backBtnFunc) {
                          backBtnFunc();
                        } else {
                          console.error('backBtnFunc is not defined');
                        }
                      }}
                    >
                      <LeftArrowIcon />
                    </IconButton>
                  )}
                  <Typography id='title' sx={{ ...topBarStyle.titleTypo, ...titleStyle } as SxProps}>{title}</Typography>
                </Box>
              </Box>
              {!activeBtn &&
                <Box sx={topBarStyle.buttoncontainer}>
                  <Stack gap={'12px'} direction={'row'}>
                    {outlineButtonText && (
                      <Button sx={topBarStyle.topbarRightBtnStyle} variant="outlined" onClick={handleClickOutlineButton}>
                        {outlineButtonText}
                      </Button>
                    )}
                    {containButtonText && (
                      <Button sx={topBarStyle.topbarSaveBtnStyle} variant="contained" onClick={handleClickContainButton}>
                        {loading ?
                          <>
                            <Box sx={{ width: '123px', height: '20px' }}>
                              <CircularProgress size={20} sx={{ color: "#ffff" }} />
                            </Box>
                          </>
                          :
                          <>
                            {containButtonText}
                          </>
                        }
                      </Button>
                    )}
                  </Stack>
                </Box>
              }
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default TopBar;
