import { OkIcon } from '@atoms/icons';
import { productInterface } from '@core/store/interface';
import type { SxProps, Theme } from '@mui/material';
import { Box, Card, IconButton, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import OtherProducts from '@assets/otherProduct.png'
import { productSelectedCardStyle } from './style';
import { webRoutes } from '@core/routes';
import { useNavigate } from 'react-router-dom';
export interface ProductSelectedCardProps {
  src?: string;
  productCategoryState: productInterface[];
  rootStyle?: object | undefined;
  style?: React.CSSProperties | undefined;
  productName?: string;
  className?: string;
  sx?: SxProps<Theme>;
  setClicked: Dispatch<SetStateAction<number[]>>;
  clicked: number[];
  isAddProduct: any;
  categoryProduct: string | null
}

export const ProductSelectedCard = (props: ProductSelectedCardProps): JSX.Element => {
  const { isAddProduct, productCategoryState, rootStyle, className = '', sx = {}, setClicked, clicked = [], categoryProduct, ...rest } = props;

  const navigate = useNavigate();

  const handleClickChecked = (value: number | null, category: any, type: string, isOther: boolean) => {
    if (type === 'unCheck') {
      setClicked(clicked?.filter((i: number) => i !== value,));
    } else if (isAddProduct) {
      navigate(webRoutes.searchproduct, {
        state: {
          data: category,
          isAddProduct: isAddProduct,
          isOtherProducts: isOther ?
            productCategoryState?.filter((val: productInterface, i: number) => (
              val?.is_primary === false))?.map((e) => e?.id) : null
        }
      })
    } else {
      setClicked([...clicked, value as number]);
    }
  };

  return (
    <Box
      sx={[
        {
          ...productSelectedCardStyle.rootSx,
          ...rootStyle,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box >
        {
          categoryProduct?.length ? <Box sx={productSelectedCardStyle.headerMapSx}>

            {
              productCategoryState?.map((e, index: number) => {
                const is_check = clicked?.includes(e?.id);
                return <Box key={index}>
                  <Card
                    data-testid={`product-${index}`}
                    onClick={() => handleClickChecked(e?.id,
                      e, is_check ? 'unCheck' : '', false
                    )}
                    sx={{
                      ...(isAddProduct
                        ? productSelectedCardStyle.cardSx
                        :
                        (is_check
                          ? productSelectedCardStyle.cardStyleChangeSx
                          : productSelectedCardStyle.cardSx)),
                    }}
                  >
                    <Box sx={productSelectedCardStyle.cardContentSx}>
                      {
                        !isAddProduct &&
                        is_check && (
                          <IconButton sx={productSelectedCardStyle.iconSx}>
                            <OkIcon />
                          </IconButton>
                        )}
                      <Box sx={productSelectedCardStyle.imageSx}>
                        <img key={index} src={e?.document_url} alt="product Images" />
                      </Box>
                      <Typography sx={productSelectedCardStyle.productTextSx}>{e?.category_name}</Typography>
                    </Box>
                  </Card>
                </Box>
              })}
          </Box> :
            <Box sx={productSelectedCardStyle.headerMapSx}>
              {
                productCategoryState?.filter((val: productInterface, i: number) => (
                  val?.is_primary === true
                )).map((e, index: number) => {
                  const is_check = clicked?.includes(e?.id);
                  return <Box key={index}>
                    <Card
                      data-testid={`product-${index}`}
                      onClick={() => handleClickChecked(e?.id,
                        e, is_check ? 'unCheck' : '', false
                      )}
                      sx={{
                        ...(isAddProduct
                          ? productSelectedCardStyle.cardSx
                          :
                          (is_check
                            ? productSelectedCardStyle.cardStyleChangeSx
                            : productSelectedCardStyle.cardSx)),
                      }}
                    >
                      <Box sx={productSelectedCardStyle.cardContentSx}>
                        {
                          !isAddProduct &&
                          is_check && (
                            <IconButton sx={productSelectedCardStyle.iconSx}>
                              <OkIcon />
                            </IconButton>
                          )}
                        <Box sx={productSelectedCardStyle.imageSx}>
                          <img key={index} src={e?.document_url} alt="product Images" />
                        </Box>
                        <Typography sx={productSelectedCardStyle.productTextSx}>{e?.category_name}</Typography>
                      </Box>
                    </Card>
                  </Box>
                })}
              {
                isAddProduct && <Box>
                  <Card
                    data-testid={`product-${'21'}`}
                    onClick={() => handleClickChecked(null,
                      {},'', true
                    )}
                    sx={{
                      ...(isAddProduct
                        ? productSelectedCardStyle.cardSx
                        : productSelectedCardStyle.cardStyleChangeSx)
                    }}
                  >
                    <Box sx={productSelectedCardStyle.cardContentSx}>

                      <Box sx={productSelectedCardStyle.imageSx}>
                        <img src={OtherProducts} alt="product Images" />
                      </Box>
                      <Typography sx={productSelectedCardStyle.productTextSx}>{'Others'}</Typography>
                    </Box>
                  </Card>
                </Box>
              }
            </Box>
        }

      </Box>
    </Box >
  );
};
