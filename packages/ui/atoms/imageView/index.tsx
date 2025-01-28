// import DummyImageCheckImg from '@core/ui/assets/plain images.jpg';
import type { SxProps, Theme } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';

import { TrashIcon } from '..';
import { imageViewStyle } from './style';

// interface imageView {
//   src: string;
// }
export interface ImageViewProps {
  className?: string;
  sx?: SxProps<Theme>;
  imagemapping: Array<string> | any;
  onDelete: (index: number) => void;
}

export const ImageView = (props: ImageViewProps): JSX.Element => {
  const { imagemapping, onDelete = () => false, className = '', sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...imageViewStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      <Box>
        <Grid container spacing={2}>
          {imagemapping.map((val, index: number) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={6}>
                <img src={`${val}`} alt="View" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                <Box sx={imageViewStyle.boxStyleSx}>
                  <Typography sx={imageViewStyle.numberStyleSx}>{`0${index + 1}`}</Typography>
                  <Box>
                    <TrashIcon onClick={() => onDelete(index)} />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
