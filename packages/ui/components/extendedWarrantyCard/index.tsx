import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { extendedWarrantyCardStyle } from './style';

export interface ExtendedWarrantyCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  image: string;
  title: string;
  header: string;
  extended_from_date: string;
  extended_to_date: string;
  icon: JSX.Element;
  extended?: string;
  handleClick: () => void;
}

export const ExtendedWarrantyCard = (props: ExtendedWarrantyCardProps): JSX.Element => {
  const {
    image,
    header = '',
    title = '',
    extended_from_date = '',
    extended_to_date = '',
    icon,
    handleClick = () => false,
    extended = false,
    ...rest
  } = props;

  return (
    <>
      {extended && title && image && (
        <>
          <Box sx={extendedWarrantyCardStyle.headerSx}>
            <Typography sx={{color: 'text.A100'}} variant="subtitle2" fontWeight="700">
              {header}
            </Typography>
          </Box>
          <Box sx={extendedWarrantyCardStyle.rootSx} {...rest}>
            <Box sx={extendedWarrantyCardStyle.brandSectionSx}>
              <Box sx={extendedWarrantyCardStyle.imageSx}>
                <img src={image} alt="Brand" />
              </Box>
              <Box>
                <Typography sx={extendedWarrantyCardStyle.titleSx}>{title}</Typography>
                <Typography sx={extendedWarrantyCardStyle.subTitleSx}>
                  {extended_from_date} - {extended_to_date}
                </Typography>
              </Box>
            </Box>
            <Box onClick={handleClick} sx={extendedWarrantyCardStyle.iconSx}>
              {icon}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
