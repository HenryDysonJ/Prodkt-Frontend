import { InfoIcon, RightArrowIcon } from '@atoms/icons';
import { Divider, Skeleton, Stack, SxProps, Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import moment from 'moment';

import { chooseProductCardStyle } from './style';
import { RightArrowCircleIon } from '@atoms/icons/productSearchIconsLists';

export interface ChooseProductCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  cardDetails?: {
    id?: string;
    category_type_id?: string;
    nick_name?: string;
    image_url?: string;
    product_name?:string;
    next_service_date?: string;
    is_service_available?: boolean;
  };
  loading?: boolean;
  onClickCard?: (id: string) => void;
}

export const ChooseProductCard = (props: ChooseProductCardProps): JSX.Element => {
  const { className = '', sx = {}, cardDetails, loading = false, onClickCard = () => false, ...rest } = props;

  return (
    <Box
      sx={[
        { ...chooseProductCardStyle.rootSx },
        { cursor: cardDetails?.is_service_available ? 'pointer' : 'inherit' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      onClick={() => {
        cardDetails?.is_service_available ? onClickCard(cardDetails?.id || '') : '';
      }}
      {...rest}
    >
      {loading ? (
        <Box
          sx={{
            bgcolor: 'background.surface.200',
            borderRadius: '8px',
          }}
        >
          <Box sx={chooseProductCardStyle.skeltonRoot}>
            <Skeleton sx={chooseProductCardStyle.skeltonText} animation="wave" height={50} width={44} />
            <Box flexGrow={1}>
              <Box sx={chooseProductCardStyle.skeltonRoot} justifyContent={'space-between'}>
                <Skeleton sx={chooseProductCardStyle.skeltonText} animation="wave" height={20} width={228} />
                <Skeleton
                  sx={chooseProductCardStyle.skeltonText}
                  variant="circular"
                  animation="wave"
                  height={20}
                  width={20}
                />
              </Box>
              <Skeleton sx={chooseProductCardStyle.skeltonText} animation="wave" height={20} width={117} />
            </Box>
          </Box>
        </Box>
      ) : (
        <Stack direction="column" gap="6px" divider={<Divider sx={chooseProductCardStyle.cardDivider} />}>
          <Stack direction="row" gap="4px" alignContent="center">
            <Box sx={{display:'flex',alignItems:'center'}}>
            <img
              src={cardDetails?.image_url || `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`}
              style={{ width: '44px', height: '44px', objectFit:'contain', padding: '0px 6px' }}
              alt="productImage"
            />
            </Box>
            <Box sx={chooseProductCardStyle.detailsContainer}>
              <Typography sx={chooseProductCardStyle.productName}>{cardDetails?.nick_name}</Typography>
              <Typography sx={chooseProductCardStyle.nextService}>
                {cardDetails?.product_name}
              </Typography>
            </Box>
            {cardDetails?.is_service_available && (
              <Box sx={chooseProductCardStyle.rightIcon}>
                <RightArrowCircleIon rootStyle={{ minWidth: '20px', minHeight: '20px' }} />
              </Box>
            )}
          </Stack>
          {!cardDetails?.is_service_available && (
            <Box sx={chooseProductCardStyle.infoContainer}>
              <InfoIcon sx={chooseProductCardStyle.infoIcon} />
              <Typography sx={chooseProductCardStyle.infoText}>Currently no service providers available</Typography>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
};
