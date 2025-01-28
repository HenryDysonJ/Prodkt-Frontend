import { ShieldIcon, WarrantySettingToolsIcon } from '@atoms/icons';
import { getMyProductDates } from '@core/utils';
import type { SxProps, Theme } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import { productCardsStyle } from './style';

export interface leftSideDataInterface {
  icon: JSX.Element;
  header: string;
  insurer_name: string;
  disable: boolean;
}

export interface rightSideDataInterface {
  icon: JSX.Element;
  header: string;
  subHeader: string;
  disable: boolean;
}
export interface myProductData {
  nil: any;
  nick_name: string;
  subHeader: string;
  warranty_valid_to: string;
  insurance_valid_to: string;
  amc_valid_to: string;
  errorIcon: string;
  title: string;
  color: string;
  icon: JSX.Element;
  leftSide: leftSideDataInterface;
  rightSide: rightSideDataInterface;
  user_product_id: string;
}
export interface ProductCardsProps {
  className?: string;
  sx?: SxProps<Theme>;
  productCardData: myProductData[] | undefined;
}

export const ProductCards = (props: ProductCardsProps): JSX.Element => {
  const { productCardData, className = '', sx = {}, ...rest } = props;
  const navigate = useNavigate();

  const onMyProductClick = (cardData: myProductData) => {
    navigate(`/productDetails/${cardData?.user_product_id}`);
  };

  const getExpiring = (cardData: myProductData) => {
    if (cardData?.insurance_valid_to) {
      return 'insurance';
    } else if (cardData?.warranty_valid_to) {
      return 'warranty';
    } else {
      return 'available';
    }
  };

  return (
    <Box
      sx={[
        {
          ...productCardsStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {productCardData?.map((cardData, index) => {
        return (
          <Box
            data-testid={`product-${index}`}
            key={index}
            sx={productCardsStyle.cardSectionSx}
            onClick={() => onMyProductClick(cardData)}
          >
            <Box sx={productCardsStyle.headerSectionSx}>
              <Box sx={productCardsStyle.topHeaderSx}>
                <Typography sx={{color: 'text.A100'}} fontWeight={700}>
                  {cardData?.nick_name}
                </Typography>
                <Box>{getMyProductDates(getExpiring(cardData), cardData)?.icon ?? ''}</Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    color: `${getMyProductDates('warranty', cardData)?.color}`,
                    fontSize: '12px',
                  }}
                >
                  {getMyProductDates('warranty', cardData)?.title}
                </Box>
              </Box>
            </Box>
            <Box sx={productCardsStyle.boxAlignmentSx}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box gap="10px" sx={productCardsStyle.leftAlignmentSx}>
                    <Box>
                      <ShieldIcon rootStyle={{color: 'text.A500'}} />
                    </Box>
                    <Box sx={productCardsStyle.leftAlignSx}>
                      <Typography>
                        {cardData?.insurance_valid_to === 'nil'
                          ? 'Insurance Not Applicable'
                          : cardData?.insurance_valid_to === null
                          ? 'Insurance Available'
                          : `${moment(cardData?.insurance_valid_to).format('DD MMM YY')}` ?? 'Available Now'}
                      </Typography>
                      <Box
                        component="span"
                        sx={{
                          ...productCardsStyle.subHeaderSx,
                          color: getMyProductDates('insurance', cardData)?.color ?? 'primary.main',
                        }}
                      >
                        {cardData?.insurance_valid_to === 'nil'
                          ? 'Nil'
                          : getMyProductDates('insurance', cardData)?.title}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box gap="10px" sx={productCardsStyle.rightAlignmentSx}>
                    <Box
                      sx={{
                        ...productCardsStyle.rightAlignmentSx,
                        color: cardData?.rightSide?.subHeader === 'Nil' ? 'text.300' : '',
                      }}
                    >
                      <WarrantySettingToolsIcon
                        rootStyle={{color: cardData?.amc_valid_to === 'nil' ? '#B9B9B9' : 'text.A500'}}
                      />
                    </Box>
                    <Box sx={productCardsStyle.rightAlignSx}>
                      <Typography
                        sx={{
                          ...productCardsStyle.rightHeaderTopSx,
                          color: cardData?.rightSide?.subHeader === 'Nil' ? 'text.300' : 'text.500',
                        }}
                      >
                        {cardData?.amc_valid_to === 'nil'
                          ? 'AMC Not Applicable'
                          : cardData?.amc_valid_to === null
                          ? 'AMC'
                          : `${moment(cardData?.amc_valid_to).format('DD MMM YY')}`}
                      </Typography>
                      <Box
                        component="span"
                        sx={{
                          ...productCardsStyle.subHeaderSx,
                          color: getMyProductDates('available', cardData)?.color ?? 'primary.main ',
                        }}
                      >
                        {cardData?.amc_valid_to === 'nil' ? (
                          <>
                            <Typography color="#B9B9B9">Nil</Typography>
                          </>
                        ) : (
                          getMyProductDates('available', cardData)?.title
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
