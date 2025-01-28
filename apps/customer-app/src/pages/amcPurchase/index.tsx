import { useExploreAmc } from '@core/store';
import { ExploreAmc } from '@core/store/interface';
import { BackCircleIcon, CustomizedButton, MoreIcon, PageHeader, RightArrowIcon } from '@core/ui/atoms';
import { PhoneIcon } from '@core/ui/atoms/icons/productIcons';
import {
  AmcLogoIcon,
  ChatBotIcon,
  RightIcon,
  ViewDocumentIcon,
  WrongIcon,
} from '@core/ui/atoms/icons/productSearchIconsLists';
import { CommonSkeleton, LabelImageCard, SwitchTabs } from '@core/ui/components';
import { Box, Container, Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { amcPurchaseStyle } from './style';

export default function AmcPurchase() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const location = useLocation();

  const { exploreAmcLoading } = useExploreAmc();

  const onMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const activityLogClose = () => {
    setAnchorEl(null);
  };

  const purchaseData = location?.state?.data;
  const product_details = location?.state.product_details;
  const data = {
    inclusion: purchaseData?.inclusion?.map((point: ExploreAmc) => {
      return {
        pointIcon: RightIcon({}),
        pointText: point,
      };
    }),
    exclusion: purchaseData?.exclusion?.map((point: ExploreAmc) => {
      return {
        pointIcon: WrongIcon({}),
        pointText: point,
      };
    }),
  };

  const tabsData = [
    {
      title: 'Inclusions',
      points: data?.inclusion,
    },
    {
      title: 'Exclusions',
      points: data?.exclusion,
    },
  ];

  // Amplitude tracking
  useEffect(() => {
    track('AMC purchase page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container
      sx={{
        position: 'relative',
        maxWidth: { sm: '425px', xs: '425px', md: '425px' },
        padding: { sm: '0px', xs: '0px' },
      }}
    >
      {exploreAmcLoading ? (
        <CommonSkeleton />
      ) : (
        <Box sx={amcPurchaseStyle.rootSx}>
          <Box sx={amcPurchaseStyle.headerSx}>
            <Box sx={amcPurchaseStyle.headerSectionSx}>
              <PageHeader
                showIcon
                showMoreIcon
                icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                moreIcon={<MoreIcon rootStyle={{ color: 'text.A100' }} />}
                onMoreClick={onMoreClick}
                header
                headerText={product_details?.nick_name || purchaseData?.nick_name}
              />
            </Box>
          </Box>
          <Box sx={{ padding: '16px 20px' }}>
            <Box sx={amcPurchaseStyle.imageCardSx}>
              <LabelImageCard
                image={purchaseData?.provider_logo ? purchaseData?.provider_logo : <AmcLogoIcon />}
                providerName={purchaseData?.provider_name}
                viewIcon={<ViewDocumentIcon />}
                viewText="View AMC Document"
                labelText={location?.state?.labelText}
                amc_coverage={purchaseData?.coverage}
                coverage_type={purchaseData?.coverage_type}
                no_of_Service_avilable={purchaseData?.no_of_Service_avilable}
              />
            </Box>
            <Box sx={amcPurchaseStyle.tabsSectionSx}>
              <SwitchTabs tabData={tabsData} />
            </Box>
            <Box sx={amcPurchaseStyle.fixedBotSx}>
              <Box sx={amcPurchaseStyle.chatIconSx}>
                <Container
                  sx={{ maxWidth: { sm: '425px', xs: '425px', md: '425px' }, display: 'flex', justifyContent: 'end' }}
                >
                  <ChatBotIcon />
                </Container>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...amcPurchaseStyle.footerButtonSx, padding: '16px 20px', paddingBottom: '25px' }}>
            <CustomizedButton
              title="Price Amount (Excluding GST)"
              subTitle={purchaseData?.price}
              buttonText="Purchase"
              icon={<RightArrowIcon />}
              newAmc
              purchase={true}
            />
          </Box>
        </Box>
      )}
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        sx={amcPurchaseStyle.menuSx}
        anchorEl={anchorEl}
        open={open}
        onClose={() => activityLogClose()}
      >
        <MenuItem sx={amcPurchaseStyle.menuItemSx}>
          <PhoneIcon />
          Help & Support
        </MenuItem>
      </Menu>
    </Container>
  );
}
