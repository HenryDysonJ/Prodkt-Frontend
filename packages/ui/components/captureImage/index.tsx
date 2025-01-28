import 'react-html5-camera-photo/build/css/index.css';

import DoneIcon from '@mui/icons-material/Done';
import { Badge, Box, Stack, SxProps, Theme } from '@mui/material';
// import { useState } from 'react';
import { Camera, FACING_MODES } from 'react-html5-camera-photo';
import { useNavigate } from 'react-router-dom';

import { CamBackIcon } from '@atoms/icons';
import { captureImageStyle } from './style';

interface CaptureImageProps {
  className?: string;
  sx?: SxProps<Theme>;
  dataURIs: any;
  UploadImage: (val: any) => void;
  backRoute?: string | undefined;
  stateValue?: string;
  onGalleryGo: () => void;
  onBackBtnClick?: () => void;
  useBackBtnClick?: boolean;
  backRequired?: boolean;
}

export const CaptureImage = (props: CaptureImageProps): JSX.Element => {
  const {
    stateValue = '',
    backRoute = '',
    UploadImage = () => false,
    dataURIs,
    className = '',
    onGalleryGo = () => false,
    backRequired = false,
    onBackBtnClick = () => false,
    useBackBtnClick = false,
    sx = {},
    ...rest
  } = props;
  const navigate = useNavigate();


  const onBackBtnClicked = () => {
    if (useBackBtnClick && onBackBtnClick) {
      onBackBtnClick()
    } else if (backRoute.length > 0) {
      navigate(backRoute, { state: { stateValue } })
    } else navigate(-1)
  }

  return (
    <Box
      sx={[{ ...captureImageStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <div className="App">
        <Box
          sx={{
            position: 'relative',
            background: '#333333',
            height: 'calc(100vh - 0px)',
            overflow: 'hidden',
          }}
        >
          <Camera
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            isImageMirror={false}
            isSilentMode={true}
            isFullScreen={true}
            isMaxResolution={true}
            sizeFactor={1}
            onTakePhoto={UploadImage}
          />
        </Box>
        <Box
          onClick={onBackBtnClicked}
          sx={{ position: 'absolute', top: '60px', pl: '22px', cursor: 'pointer' }}
        >
          <CamBackIcon sx={{ color: '#fff', width: '13.788px', height: '16.009px' }} />
        </Box>
        {dataURIs?.length > 0 && (
          <Stack
            direction={'row'}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              bottom: '14px',
              px: 2.5,
              width: '100%',
            }}
          >
            <Box>
              {dataURIs?.length > 1 ? (
                <Badge
                  sx={{
                    '& .MuiBadge-badge': {
                      borderRadius: '0px',
                      right: '10px',
                      top: '10px',
                    },
                  }}
                  badgeContent={dataURIs?.length}
                  color="primary"
                >
                  <img src={`${dataURIs?.[0]}`} alt="capture" width="50px" height="50px" />
                </Badge>
              ) : (
                <img src={`${dataURIs?.[0]}`} alt="capture" width="50px" height="50px" />
              )}
            </Box>

            <Box onClick={() => onGalleryGo()}>
              <DoneIcon sx={{ color: '#fff', fontSize: '34px', cursor: 'pointer' }} />
            </Box>
          </Stack>
        )}
      </div>
    </Box>
  );
};