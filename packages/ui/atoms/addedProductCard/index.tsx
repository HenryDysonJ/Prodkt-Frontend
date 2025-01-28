import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';

import { addedProductCardStyle } from './style';
import { NevIconProduct } from '..';

export interface AddedProductCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  cardLoading?: boolean;
  isNavIcon?: boolean;
  isChangeText?: boolean;
  ShowChangeText?: boolean;
  handleChangeBackState?: () => void;
  handleChangeNextState?: () => void;
  cardDetails?: {
    user_product_id?: string | undefined;
    nick_name?: string;
    image_url?: string;
    product_name?: string | undefined;
  };
};


export const AddedProductCard = (props: AddedProductCardProps): JSX.Element => {
  const { className = '', isNavIcon = false, ShowChangeText = false, isChangeText = false, cardDetails, cardLoading = false, handleChangeBackState = () => false, handleChangeNextState = () => false, sx = {}, ...rest } = props;

  return (
    <Box sx={[{ ...addedProductCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>

      {cardLoading ?
        (<Box sx={addedProductCardStyle.skeltonMainBoxSx}>
          <Box sx={addedProductCardStyle.skeltonRoot}>
            <Skeleton sx={addedProductCardStyle.skeltonText} animation="wave" height={50} width={44} />
            <Box flexGrow={1}>
              <Box sx={addedProductCardStyle.skeltonRoot} justifyContent={'space-between'}>
                <Skeleton sx={addedProductCardStyle.skeltonText} animation="wave" height={20} width={228} />
                <Skeleton
                  sx={addedProductCardStyle.skeltonText}
                  variant="circular"
                  animation="wave"
                  height={20}
                  width={20}
                />
              </Box>
              <Skeleton sx={addedProductCardStyle.skeltonText} animation="wave" height={20} width={117} />
            </Box>
          </Box>
        </Box>) :
        (<Stack direction="row"
          onClick={() => handleChangeNextState()}
          divider={<Divider sx={addedProductCardStyle.dividerSx} orientation="vertical" flexItem />} 
          sx={addedProductCardStyle.stackBoxSx}>
          <Stack alignItems={'center'} sx={{ padding: '12px' }}>
            <img
              src={cardDetails?.image_url || `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`}
              style={{ width: '44px', height: '44px', objectFit:'contain' }}
              alt="productImage"
            />
          </Stack>
          {isNavIcon &&
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={addedProductCardStyle.StackFlex}>
              <Stack direction={'column'}>
                <Typography variant='subtitle2' sx={addedProductCardStyle.productName}>{cardDetails?.nick_name}</Typography>
                <Typography sx={addedProductCardStyle.productSpecSx}>{cardDetails?.product_name}</Typography>
              </Stack>
              <Box sx={{ marginLeft: '16px' }}>
                <NevIconProduct />
              </Box>
            </Stack>
          }
          {isChangeText &&
            <Stack direction={'row'} justifyContent={'space-between'} sx={addedProductCardStyle.StackFlex}>
              <Stack direction={'column'}>
                <Typography variant='subtitle2' sx={addedProductCardStyle.productName}>{cardDetails?.nick_name}</Typography>
                <Typography sx={addedProductCardStyle.productSpecSx}>{cardDetails?.product_name}</Typography>
              </Stack>
              {ShowChangeText &&
                <Typography onClick={() => handleChangeBackState()} variant='subtitle2' sx={addedProductCardStyle.changeTextSx}>
                  change
                </Typography>}
            </Stack>}
        </Stack>)}
    </Box >
  );
}





