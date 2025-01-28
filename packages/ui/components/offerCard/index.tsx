import { Button } from '@atoms/button';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { offerCardStyle } from './style';

interface OfferOptionsData {
  bg_color?: string;
  title: string;
  content: string;
  btn_name: string;
  btn_text_color: string;
  btn_bg: string;
  image_url: string;
  title_color: string;
  content_color: string;
  img_padding_left: string;
  img_padding_right: string;
  img_padding_top: string;
  redirect_url: string | URL | undefined;
}

export interface OfferCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  offerData?: OfferOptionsData[];
}

export const OfferCard = (props: OfferCardProps): JSX.Element => {
  const { className = '', offerData, sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...offerCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      {offerData?.map((val: OfferOptionsData, index: number) => {
        return (
          <Box key={index} sx={{ ...offerCardStyle.offerBoxSx, background: val.bg_color }}>
            <Box sx={{ pl: 2, py: 2 }}>
              <Typography variant="subtitle1" sx={{ ...offerCardStyle.offerTitleSx, color: val.title_color }}>
                {val.title}
              </Typography>
              <Typography sx={{ ...offerCardStyle.offerSubtitleSx, color: val.content_color }}>
                {val.content}
              </Typography>
              <Button
                onClick={() => window.open(val.redirect_url)}
                sx={{
                  ...offerCardStyle.exploreButtonSx,
                  color: val.btn_text_color,
                  backgroundColor: val.btn_bg,
                }}
              >
                {val.btn_name}
              </Button>
            </Box>
            <Box
              sx={{
                ...offerCardStyle.imgSx,
                pl: val.img_padding_left,
                pr: val.img_padding_right,
                pt: val.img_padding_top,
              }}
            >
              <img key={index} src={val.image_url} alt="offer img" />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
