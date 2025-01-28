import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { imageUploadStyle } from './style';
import { AddPlusIcon } from '..';

export interface ImageUploadProps {
  className?: string;
  sx?: SxProps<Theme>;
  onUpload?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};


export const ImageUpload = (props: ImageUploadProps): JSX.Element => {
  const { className = '', onUpload = () => false, sx = {}, ...rest } = props;



  return (
    <Box sx={[{ ...imageUploadStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>

      <label htmlFor="uplodebtn">
        <Stack justifyContent={'center'} alignItems={'center'} sx={imageUploadStyle.stackSx}>

          <input hidden onChange={onUpload} type="file" id="uplodebtn" name="img" accept="image/*" />
          <AddPlusIcon sx={{ cursor: 'pointer', height: 18, width: 18 }} />
        </Stack>
      </label>
    </Box>
  );
}





