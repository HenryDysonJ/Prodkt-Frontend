import { InfoIcon } from '@atoms/icons';
import { Skeleton, Stack, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { productDetailsViewCardStyle } from './style';

export interface ProductDetailsViewCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  loading?: boolean;
  infoIconOnClick: (status: boolean) => void;
  cardDetails: {
    id: string;
    category_type_id: string;
    category_id: string;
    product_name: string;
    nick_name: string;
    image_url: string;
  };
}

export const ProductDetailsViewCard = (props: ProductDetailsViewCardProps): JSX.Element => {
  const { className = '', cardDetails, sx = {}, loading = true, infoIconOnClick, ...rest } = props;

  return (
    <Box
      sx={[{ ...productDetailsViewCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      {loading ? (
        <Box
          sx={{
            bgcolor: 'background.surface.200',
            borderRadius: '8px',
            padding: '3px 12px',
          }}
        >
          <Box sx={productDetailsViewCardStyle.skeltonRoot}>
            <Skeleton sx={productDetailsViewCardStyle.skeltonText} animation="wave" height={70} width={60} />
            <Box flexGrow={1}>
              <Box sx={productDetailsViewCardStyle.skeltonRoot}>
                <Skeleton sx={productDetailsViewCardStyle.skeltonText} animation="wave" height={16} width={'43%'} />
                <Skeleton
                  sx={productDetailsViewCardStyle.skeltonText}
                  variant="circular"
                  animation="wave"
                  height={16}
                  width={16}
                />
              </Box>
              <Skeleton sx={productDetailsViewCardStyle.skeltonText} animation="wave" height={14} width={'100%'} />
              <Skeleton
                sx={{ ...productDetailsViewCardStyle.skeltonText, margin: 0 }}
                animation="wave"
                height={14}
                width={'100%'}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Stack direction="row" gap="4px" alignContent="center" sx={{ height: '80px' }}>
          <Box sx={productDetailsViewCardStyle.imageContainer}>
            <img
              src={cardDetails?.image_url || `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`}
              style={{ width: '68px', height: '68px', objectFit: 'contain' }}
              alt="productImage"
            />
          </Box>
          <Box sx={productDetailsViewCardStyle.detailsContainer}>
            <Stack direction="row" gap="4px" alignContent="center" sx={{ marginBottom: '3px' }}>
              <Typography sx={productDetailsViewCardStyle.productName}>{cardDetails?.nick_name}</Typography>
              <InfoIcon
                data-testid="info"
                sx={{ width: '20px', height: '20px', cursor: 'pointer' }}
                onClick={() => infoIconOnClick(true)}
              />
            </Stack>
            <Typography sx={productDetailsViewCardStyle.productDescription}>{cardDetails?.product_name}</Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};
