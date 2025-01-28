/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { useServiceProviders } from '@core/store';
import { BackCircleIcon, NoProductsIllustration, PageHeader } from '@core/ui/atoms';
import { ChooseProductCard } from '@core/ui/components';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { chooseProductStyle } from './style';

export interface productListProps {
  map(arg0: (list: productListProps) => JSX.Element): React.ReactNode;
  id?: string;
  category_type_id?: string;
  nick_name?: string;
  product_name?: string;
  image_url?: string;
  next_service_date?: string;
  is_service_available?: boolean;
}

export default function ChooseProduct() {
  const navigate = useNavigate();
  const { productList, chooseProductLoading, getProductList } = useServiceProviders();

  const goToServiceProvider = (id: string) => {
    navigate(webRoutes.chooseServiceProviders + '?id=' + id);
  };

  useEffect(() => {
    getProductList();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Choose product page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container sx={{ maxWidth: '425px', padding: { sm: '0px', xs: '0px' } }}>
      <Box sx={chooseProductStyle.rootSx}>
        <Box pt={2} pb={1} px={2}>
          <PageHeader showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Choose Product" />
        </Box>
        <Box px={2.5}>
          {productList?.length === 0 ? (
            <Box sx={chooseProductStyle.noProductContainer}>
              <Box sx={chooseProductStyle.noProductsAddedSx}>
                <NoProductsIllustration />
              </Box>
              <Box sx={chooseProductStyle.noProductsTextHeaderSx}>
                <Typography variant="body1" sx={chooseProductStyle.noProductsTextSx}>
                  No Products Found
                </Typography>
                <Typography variant="body1" sx={chooseProductStyle.noAddProductsTextSx}>
                  Add Products to keep them in track
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={chooseProductStyle.cardContainer}>
              {chooseProductLoading ? (
                [1, 2, 3, 4, 5, 6]?.map((index: number) => (
                  <ChooseProductCard key={index + 'ChooseProductSkeleton'} loading={true} />
                ))
              ) : (
                <>
                  {productList?.map((list: productListProps, index: number) => (
                    <ChooseProductCard
                      key={list?.id}
                      data-testId={`product${index}`}
                      cardDetails={list}
                      onClickCard={goToServiceProvider}
                    />
                  ))}
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
