import { CameraIcon, TrashPinIcon } from '@core/ui/atoms/icons';
import { Avatar, Box, ButtonGroup, SxProps, Theme } from '@mui/material';

import { profileUploadStyle } from './style';

export interface ProfileUploadProps {
  url: string | File | null;
  altText: string | undefined;
  showIcon?: boolean;
  sx?: SxProps<Theme>;
  height: string;
  width: string;
  fontSize: string;
  profileStyleSx?: SxProps<Theme> | undefined;
  avatarStyle?: SxProps<Theme> | undefined;
  onDelete?: (() => void) | undefined;
  onUpload?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export const ProfileUpload = (props: ProfileUploadProps): JSX.Element => {
  const {
    url = '',
    height = '',
    width = '',
    fontSize = '',
    showIcon = false,
    altText = '',
    profileStyleSx,
    avatarStyle,
    onDelete = () => false,
    onUpload = () => false,
  } = props;

  function getUrl(url: string | File | null): string {
    if (url === null) {
      return '';
    } else if (typeof url === 'string') {
      return url;
    } else {
      return URL.createObjectURL(url);
    }
  }

  const srcURL = getUrl(url);

  return (
    <Box sx={{ ...profileUploadStyle.rootSx, ...profileStyleSx } as SxProps<Theme>}>
      {/* profile Screen */}
      <Box sx={profileUploadStyle.relativeBox}>
        <label htmlFor="uplodebtn">
          {showIcon && <input hidden onChange={onUpload} type="file" id="uplodebtn" name="img" accept="image/*" />}

          <Box sx={{ cursor: 'pointer', display: 'flex' }}>
            {srcURL ? (
              <img
                src={srcURL}
                alt="profile images"
                height={height}
                width={width}
                style={{ borderRadius: '50px', objectFit: 'cover' }}
              />
            ) : (
              <Avatar
                sx={
                  {
                    ...profileUploadStyle.avatarSx,
                    height: height,
                    width: width,
                    fontSize: fontSize,
                    ...avatarStyle,
                  } as SxProps<Theme>
                }
              >
                {altText[0]?.toUpperCase()}
              </Avatar>
            )}
          </Box>
        </label>
        {showIcon && (
          <Box sx={srcURL ? profileUploadStyle.absoluteBox : profileUploadStyle.absoluteSX}>
            {srcURL ? (
              <ButtonGroup sx={profileUploadStyle.buttonGroupIcon} onClick={onDelete}>
                <TrashPinIcon />
              </ButtonGroup>
            ) : (
              <label htmlFor="uplodebtn">
                <ButtonGroup sx={profileUploadStyle.buttonGroupIcon}>
                  <CameraIcon rootStyle={{ height: 10.359, width: 15.288 }} />
                </ButtonGroup>
              </label>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};
