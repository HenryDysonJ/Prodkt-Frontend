import { Box, Typography } from '@mui/material';

import { SearchEmptyState } from '..';
import { availableAmcCardsStyle } from './style';

export interface CardDataInterface {
  id: string;
  nick_name?: string;
  provider_name: string;
  price: number;
  no_of_Service_avilable?: number;
  provider_logo: string;
  coverage?: number | string;
  coverage_type?: string;
  inclusion: string[];
  exclusion: string[];
}
export interface AvailableAmcCardsProps {
  cardData: CardDataInterface[];
  routeIcon: JSX.Element;
  inclusionIcon: JSX.Element;
  headerTitle: string;
  handleClick?: (data: CardDataInterface) => void;
  type?: string;
}

export const AvailableAmcCards = (props: AvailableAmcCardsProps): JSX.Element => {
  const { cardData, headerTitle = '', routeIcon, inclusionIcon, type, handleClick = () => false, ...rest } = props;

  return (
    <Box sx={availableAmcCardsStyle.rootSx} {...rest}>
      {cardData?.length > 0 && (
        <Box sx={availableAmcCardsStyle.headerTitleSx}>
          <Typography variant="subtitle2" fontWeight="700">
            {headerTitle}
          </Typography>
        </Box>
      )}
      <Box sx={cardData?.length === 0 ? availableAmcCardsStyle.cardEmptyBoxSx : availableAmcCardsStyle.cardBoxSx}>
        <Box>
          {cardData?.length === 0 ? (
            <SearchEmptyState title={type ? 'No ' + type + ' Found' : undefined} />
          ) : (
            <>
              {cardData?.map((data, index) => {
                return (
                  <Box
                    data-testId={'card' + index}
                    onClick={() => handleClick(data)}
                    key={index}
                    sx={availableAmcCardsStyle.cardSectionSx}
                  >
                    <Box sx={availableAmcCardsStyle.cardSx}>
                      <Box sx={availableAmcCardsStyle.imageSx}>
                        <img src={data?.provider_logo} alt="Brand" />
                      </Box>
                      <Box sx={availableAmcCardsStyle.titleSx}>
                        <Box sx={availableAmcCardsStyle.serviceSx}>
                          <Typography sx={availableAmcCardsStyle.nameSx}>{data?.provider_name}</Typography>
                          <Typography sx={availableAmcCardsStyle.chargeSx}>&#8377;&nbsp;{data?.price}</Typography>
                        </Box>
                        <Box sx={availableAmcCardsStyle.iconSx}>{routeIcon}</Box>
                      </Box>
                    </Box>
                    {data?.inclusion?.slice(0, 2)?.map((points, index) => {
                      return (
                        <Box key={index} sx={availableAmcCardsStyle.iconSectionSx}>
                          <Box sx={availableAmcCardsStyle.pointsIconSx}>{inclusionIcon}</Box>
                          <Box sx={availableAmcCardsStyle.pointsSectionSx}>
                            <Typography sx={availableAmcCardsStyle.pointsSx}>{points}</Typography>
                            {index === data?.inclusion?.slice(0, 2)?.length - 1 && (
                              <Box component="span" sx={availableAmcCardsStyle.moreTextSx}>
                                +{data?.inclusion?.length - 2} more
                              </Box>
                            )}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
