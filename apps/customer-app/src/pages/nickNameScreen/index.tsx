/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import { addProductDetails, useScanproduct } from '@core/store';
import { Chips, DeleteIcon, Input } from '@core/ui/atoms';
import { NicknameBanner, RightCircleIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { Box, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { nickNameScreenStyle } from './style';
import { productNicknameInterface } from '@core/store/interface';

interface SelectedChips {
  data: productNicknameInterface[];
  value: string;
}


export default function NickNameScreen() {
  const { whatsAppCoverage_id, whatsAppProductDetails, updateProductDetails, productDetails, productNickname, getProductNicknames, loading } = addProductDetails();

  const [selectedChips, setSelectedChips] = useState<SelectedChips>({ data: productNickname, value: '' });
  const location = useLocation();
  const isScan = location?.state?.data?.isScan;
  const data = location?.state?.data?.data;
  const typeID = location?.state?.typeId;
  const isAmcAndInsurance = location?.state?.data?.isAmcAndInsurance;
  const standardWarantyDataShown = location?.state?.data?.standardWarrantyDetails;

  const navigate = useNavigate();
  const { invoiceDocument, updateNicknameDetails, product_details } = useScanproduct();

  const handleChange = (value: string) => {
    updateProductDetails && updateProductDetails('nick_name', value as never);
    updateNicknameDetails && updateNicknameDetails('nick_name', value as never);
  };

  const handleChipClick = (option: productNicknameInterface) => {
    const update = selectedChips?.value === option?.nick_name ? '' : option?.nick_name;
    setSelectedChips({
      ...selectedChips,
      value: update,
    });

    updateProductDetails && updateProductDetails('nick_name', update as never);
    updateNicknameDetails && updateNicknameDetails('nick_name', update as never);
  };

  const navigateRoute = () => {

    // Amplitude Track 
    track('User successfully completes adding a Product', { name: 'customer-app' })

    if (productDetails?.nick_name === '' && !isScan) {
      navigate(webRoutes.productAddedSuccessfully, {
        state: { data: { isScan: isScan, data: productDetails?.product_details, standardWarantyDataShown } },
      });
      updateProductDetails && updateProductDetails('nick_name', productDetails?.product_details.name?.split(' ').slice(0, 2).join(' ') as never);
    } else if (productDetails?.nick_name === '' && isScan) {
      navigate(webRoutes.productAddedSuccessfully, {
        state: { data: { isScan: isScan, data: productDetails?.product_details, isAmcAndInsurance: isAmcAndInsurance, standardWarantyDataShown } },
      });
      const productName = product_details?.invoice_details.filter(((x: { checked: boolean; }) => {
        return x.checked === true
      }))
      updateNicknameDetails && updateNicknameDetails('nick_name', productName?.[0]?.product_details?.product_name?.split(' ').slice(0, 2).join(' ') as never);
    } else if (whatsAppProductDetails?.product_details?.nick_name === '' && whatsAppCoverage_id) {
      navigate(webRoutes.productAddedSuccessfully);
      updateNicknameDetails && updateNicknameDetails('nick_name', productDetails?.product_details.name?.split(' ').slice(0, 2).join(' ') as never);
    } else
      navigate(webRoutes.productAddedSuccessfully, {
        state: { data: { isScan: isScan, data: data, isAmcAndInsurance: isAmcAndInsurance, standardWarantyDataShown } },
      });
    // updateProductDetails && updateProductDetails('nick_name', productDetails?.product_details.name?.split(' ').slice(0, 2).join(' '));
    // updateNicknameDetails && updateNicknameDetails('nick_name', productDetails?.product_details.name?.split(' ').slice(0, 2).join(' '));
  };

  useEffect(() => {
    getProductNicknames(typeID || productDetails?.category?.id || whatsAppProductDetails?.product_details?.type_id);
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Nickname page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={nickNameScreenStyle.rootSx}>
      <Box sx={nickNameScreenStyle.bannerSectionSx}>
        <Typography>Almost done !!</Typography>
        <Box>
          <NicknameBanner />
        </Box>
      </Box>
      <Box sx={nickNameScreenStyle.cardDetailsSx}>
        <Typography sx={nickNameScreenStyle.yourselfSx}>Give your device a quirky nickname!</Typography>
        <Box>
          <Input
            testid="nickname"
            autoFocus={true}
            placeholder="Enter your product nick name"
            sx={nickNameScreenStyle.textFieldSx}
            value={isScan ? invoiceDocument?.nick_name : productDetails?.nick_name}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(e.target.value)}
            endAdornment={<RightCircleIcon data-testid="nextArrow" onClick={() => navigateRoute()} />}
          />
        </Box>
        {loading ? (
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Skeleton
              sx={{ width: '80px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1, borderRadius: '100px' }}
              variant="rounded"
            />
            <Skeleton
              sx={{ width: '80px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1, borderRadius: '100px' }}
              variant="rounded"
            />
            <Skeleton
              sx={{ width: '80px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1, borderRadius: '100px' }}
              variant="rounded"
            />
            <Skeleton
              sx={{ width: '80px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1, borderRadius: '100px' }}
              variant="rounded"
            />
          </Box>
        ) : (
          <Box sx={nickNameScreenStyle.chipsDetailsSx}>
            {productNickname?.map((option: productNicknameInterface, index) => {
              return (
                <Chips
                  key={index}
                  isSelected={
                    isScan
                      ? option?.nick_name === invoiceDocument?.nick_name
                      : option?.nick_name === productDetails?.nick_name
                  }
                  deleteIcon={<DeleteIcon />}
                  label={option?.nick_name}
                  onClick={() => handleChipClick(option)}
                />
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}
