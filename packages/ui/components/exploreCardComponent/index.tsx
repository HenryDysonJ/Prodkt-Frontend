import { Button } from '@atoms/button';
import { OrangeLabel } from '@atoms/icons/productSearchIconsLists';
import { Box, Stack, SxProps, Theme, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { exploreCardComponentStyle } from './style';

export interface CardDataInterface {
  id?: string;
  nick_name?: string;
  provider_name?: string;
  price?: number;
  no_of_Service_avilable?: number;
  provider_logo?: string | undefined;
  amc_coverage?: number;
  coverage_type?: string;
  inclusion: string[];
  exclusion: string[];
}

export interface ExploreCardComponentProps {
  className?: string;
  sx?: SxProps<Theme>;
  header: string;
  seeText: string;
  icon: JSX.Element;
  cardData: CardDataInterface[];
  alreadyPurchase: boolean;
  extended?: boolean;
  handleClick: (data: CardDataInterface) => void;
  handleNavigate?: () => void;
}

export const ExploreCardComponent = (props: ExploreCardComponentProps): JSX.Element => {
  const { product_id } = useParams();

  const {
    header = '',
    seeText = '',
    icon,
    cardData,
    alreadyPurchase = false,
    extended = false,
    handleClick = () => false,
    handleNavigate = () => false,
    ...rest
  } = props;

  const validate = () => {
    if (window.location.pathname === `/warrantyDetails/${product_id}` && (!extended || (extended && alreadyPurchase))) {
      return true;
    } else if (window.location.pathname === `/insuranceDetails/${product_id}` && alreadyPurchase) {
      return true;
    } else if (window.location.pathname === `/amcDetails/${product_id}` && alreadyPurchase && extended) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box sx={exploreCardComponentStyle.rootSx} {...rest}>
      {validate() ? (
        <Box>
          <Box>
            {header && cardData?.length > 0 && (
              <Box sx={exploreCardComponentStyle.headerSectionSx}>
                <Typography variant="subtitle2" fontWeight="700" sx={exploreCardComponentStyle.headerSx}>
                  {header}
                </Typography>
                <Box onClick={handleNavigate} sx={exploreCardComponentStyle.seeTextIconSx}>
                  <Typography sx={exploreCardComponentStyle.seeTextSx}>{seeText}</Typography>
                  {icon}
                </Box>
              </Box>
            )}
            <Stack
              gap="8px"
              sx={exploreCardComponentStyle.totalCardSx}
              spacing={1}
              flexWrap="nowrap"
              justifyContent="space-between"
            >
              {cardData?.map((data, i) => {
                return (
                  <Box key={i} sx={{ minWidth: '45%', marginTop: '0px !important' }}>
                    <Box sx={exploreCardComponentStyle.cardSx}>
                      <Box sx={exploreCardComponentStyle.insideCardSx}>
                        <Box sx={exploreCardComponentStyle.imageSectionSx}>
                          <Box sx={exploreCardComponentStyle.imageSx}>
                            <img src={data?.provider_logo} alt="Brand Name" />
                          </Box>
                          {alreadyPurchase && (
                            <Box sx={exploreCardComponentStyle.labelSectionSx}>
                              <Box sx={exploreCardComponentStyle.labelBackgroundSx}>
                                <OrangeLabel />
                              </Box>
                              <Typography sx={exploreCardComponentStyle.labelSx}>Previously Bought</Typography>
                            </Box>
                          )}
                        </Box>
                        <Typography sx={exploreCardComponentStyle.brandNameSx}>{data?.provider_name}</Typography>
                        <Typography sx={exploreCardComponentStyle.benefitsTextSx}>
                          {data?.inclusion?.length} Benefits
                        </Typography>
                      </Box>
                      <Button onClick={() => handleClick(data)} fullWidth sx={exploreCardComponentStyle.buttonSx}>
                        Buy Now
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
