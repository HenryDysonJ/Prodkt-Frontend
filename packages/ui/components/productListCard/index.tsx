import { Button } from '@atoms/button';
import { Box, Divider, Skeleton, Stack, SxProps, Theme, Typography } from '@mui/material';

import { productListCardStyle } from './style';

export interface ProductListCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  ProductCardStyle?: SxProps<Theme>;
  showAddButton?: boolean;
  skelton?: boolean;
  imageURL?: string | undefined;
  altText?: string;
  productDescription?: string;
  buttonText?: string;
  id?: string;
  onClick?: ((id: string) => void) | undefined;
  buttonIcon?: JSX.Element;
  handleClick?: () => void;
  productId?: string;
}

export const ProductListCard = (props: ProductListCardProps): JSX.Element => {
  const {
    className = '',
    imageURL = '',
    altText = '',
    sx = {},
    productDescription = '',
    buttonText = '',
    buttonIcon,
    showAddButton = false,
    id = '',
    skelton = false,
    ProductCardStyle,
    onClick = () => false,
    ...rest
  } = props;

  return (
    <Box
      id={id}
      sx={[
        {
          ...productListCardStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {skelton ? (
        <Box
          sx={{
            bgcolor: 'background.surface.A400',
            borderRadius: '8px',
          }}
        >
          <Box sx={productListCardStyle.skeltonSubRootSx}>
            <Skeleton sx={productListCardStyle.skeltonSx} animation="wave" height={100} width={80} />
            <Box sx={{ width: '100%' }}>
              <Skeleton sx={productListCardStyle.skeltonSx} animation="wave" height={20} width="100%" />
              <Skeleton sx={productListCardStyle.skeltonSx} animation="wave" height={20} width="100%" />
              <Skeleton sx={productListCardStyle.skeltonSx} animation="wave" height={20} width={177} />
            </Box>
          </Box>
          <Box sx={productListCardStyle.buttonSkeltonSx}>
            <Skeleton sx={productListCardStyle.skeltonSx} animation="wave" height={30} width={89} />
          </Box>
        </Box>
      ) : (
        <Box sx={{ ...productListCardStyle.ProductCardSx, ...ProductCardStyle } as SxProps<Theme>}>
          <Stack
            direction="row"
            alignItems="center"
            divider={<Divider sx={productListCardStyle.dividerSx} orientation="vertical" flexItem />}
            justifyContent="space-between"
            onClick={() => showAddButton && onClick(id)}
            sx={showAddButton ? productListCardStyle.showButtonSx : productListCardStyle.unShowButtonSx}
          >
            <Box sx={productListCardStyle.fridgeIconSx}>
              <img
                src={imageURL ? imageURL : `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`}
                alt={altText}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
            <Box sx={productListCardStyle.ProductCardRightSx}>
              <Typography sx={productListCardStyle.ProductCardTextSx}>{productDescription}</Typography>
              {showAddButton && (
                <Box display="flex" alignItems="center" justifyContent="end">
                  <Button
                    data-testid="addProduct1"
                    variant="text"
                    sx={productListCardStyle.addProductSx}
                    endIcon={buttonIcon}

                  >
                    {buttonText}
                  </Button>
                </Box>
              )}
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};
