import { useHome } from '@core/store';
import { Box, Skeleton, SxProps, Theme, Typography } from '@mui/material';
import { useEffect } from 'react';
import { RiAddFill } from 'react-icons/ri';

import { productAddedStyle } from './style';

export interface ProductAddedProps {
  className?: string;
  sx?: SxProps<Theme>;
  rootStyle?: object;
  handleClick?: (product: any, index:number) => void;
  skelton?: boolean;
}

export const ProductAdded = (props: ProductAddedProps): JSX.Element => {
  const { skelton = false, className = '', sx = {}, rootStyle = {}, handleClick = () => false, ...rest } = props;

  const { productToBeAddedState, getProductToBeAdded } = useHome();

  useEffect(() => {
    getProductToBeAdded();
  }, []);

  return (
    <Box
      sx={[
        {
          ...productAddedStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {skelton ? (
        <>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Skeleton sx={productAddedStyle.skeltonSx} variant="rounded" />
            <Skeleton sx={productAddedStyle.skeltonSx} variant="rounded" />
            <Skeleton sx={productAddedStyle.skeltonSx} variant="rounded" />
            <Skeleton sx={productAddedStyle.skeltonSx} variant="rounded" />
          </Box>
          <Skeleton sx={{ width: '30px', height: '20px', bgcolor: 'primary.800' }} variant="rounded" />
        </>
      ) : (
        <>
          <Box gap="30px" sx={{ ...productAddedStyle.productBox, ...rootStyle }}>
            {productToBeAddedState?.map((product, index) => {
              return (
                <Box key={index} onClick={() => handleClick(product, index)} sx={productAddedStyle.products}>
                  <Box sx={productAddedStyle.squareBox}>
                    <Box sx={productAddedStyle.productIcon}>
                      <img key={index} style={{ maxWidth: '30px', maxHeight: '30px' }} src={product?.icon?.light_theme} alt="product icons" />
                    </Box>
                    <Box data-testid={`click-${index}`} sx={productAddedStyle.addIcon}>
                      <RiAddFill />
                    </Box>
                  </Box>
                  <Typography sx={productAddedStyle.categoryNameTextSx}>{product?.category_name}</Typography>
                </Box>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};
