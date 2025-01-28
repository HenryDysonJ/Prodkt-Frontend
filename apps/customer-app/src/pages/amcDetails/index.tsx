import { webRoutes } from '@core/routes';
import { chatBotAmcStore, useAmcDetails, useExploreAmc, useScanproduct } from '@core/store';
import Bajaj from '@core/ui/assets/bajaj.png';
import Reliance from '@core/ui/assets/reliance.png';
import Samsung from '@core/ui/assets/samsung.png';
import {
  BackCircleIcon,
  Button,
  CloseIcon,
  PageHeader,
  RightArrowIcon,
  UploadDocumentType
} from '@core/ui/atoms';
import {
  BubbleArrow,
  ChatBotCutIcon,
  ChatBotIcon,
  OrangeToolsIcon,
  RightBlueArrow,
  ViewDocumentIcon
} from '@core/ui/atoms/icons/productSearchIconsLists';
import {
  CaptureImage,
  CommonSkeleton,
  DrawerComponent,
  LabelImageCard,
  ModalHeader,
  SwitchTabs,
  ViewHistoryComponent
} from '@core/ui/components';
// import { CardDataInterface } from '@core/ui/components/exploreCardComponent';
import AmcLogo from '@core/ui/assets/AmcLogo.svg';
import { Box, Container, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';

import { amcDetailsStyle } from './style';

const amcData = {
  amcHistoryCard: {
    currentStep: 4,
    maxStep: 5,
    size: 76,
    thickness: 4,
    icon: <OrangeToolsIcon />,
    text: 'Yay! You have increased your resale value.',
    buttonText: 'View Service History',
    viewServiceHistory: true,
  },
  exploreAMC: {
    amcExpire: true,
    cardHeader: {
      header: "Explore AMC's",
      seeText: 'See all',
      icon: RightBlueArrow({}),
    },
    amcCarddata: [
      {
        image: Samsung,
        prviouslyBought: true,
        brand: 'Samsung AMC',
        benefits: '4 Benefits',
        buttonText: 'Renew Now',
      },
      {
        image: Reliance,
        prviouslyBought: false,
        brand: 'Reliance AMC Service',
        benefits: '2 Benefits',
        buttonText: 'Buy Now',
      },
      {
        image: Bajaj,
        prviouslyBought: false,
        brand: 'Bajaj Finserv',
        benefits: '3 Benefits',
        buttonText: 'Buy Now',
      },
    ],
  },
  purchaseButton: {
    title: 'Price Amount (Excluding GST)',
    subTitle: '500',
    buttonText: 'Purchase',
    icon: RightArrowIcon({}),
  },
};

export default function AmcDetails() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const { product_id } = useParams();

  const [expandAddProductBtn, updateExpandAddProductBtn] = useState<boolean>(false);
  const [uppendClass, setUppendClass] = useState(false);
  const [openDrawers, setOpenDrawers] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const {
    loading,
    uploadFile,
    onUploadCaptureFile,
    onDeleteUploadFile,
    getAmcUpdate,
    clearScan,
    onUpdateCaptureImage,
    dataURIs,
    onWarrantyType,
    getWarrantyDetailsInclusionExclusion,
  } = useScanproduct();

  const {
    getAmcDetails,
    nick_name,
    tabData,
    provider_name,
    amc_valid_from,
    is_chat_bot,
    amc_valid_to,
    amc_document_url,
    amcDetailsLoading,
    provider_logo,
  } = useAmcDetails();
  const { getAmcExploreData, exploreAmcState } = useExploreAmc();

  const { chatBotHistory, chatBotState, chatBotHistoryState } = chatBotAmcStore();

  const from_date = moment(amc_valid_from).format('D MMM, YYYY');
  const to_date = moment(amc_valid_to).format('D MMM, YYYY');

  const expirationDate = moment(amc_valid_to).subtract(7, 'days');

  const today = moment();

  // Check if the insurance is expiring soon
  const isExpiringSoon = expirationDate.isSameOrBefore(today, 'day');

  const onMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const setextAfterDelay = () => {
    setTimeout(() => {
      updateExpandAddProductBtn(false);
    }, 4000);
  };



  const routeToChatBotAmc = async () => {

    // Amplitude Track 
    track('User Interacts with bot for the first time', { name: 'customer-app' })

    const response = await chatBotHistory({
      id: product_id || '',
      type: 'amc',
    })
    // if(response === 200){
    navigate(`/chatBotAmc/${product_id}`);
    // } else{
    //   enqueueSnackbar('Something went wrong please try again later')
    // }

  };

  setTimeout(() => {
    if (uppendClass === true) {
      setUppendClass(false);
      updateExpandAddProductBtn(false);
    }
  }, 5000);

  useEffect(() => {
    setTimeout(() => {
      setUppendClass(true);
      updateExpandAddProductBtn(true);
    }, 5000);
  }, []);

  const handlePurchase = () => {
    navigate(webRoutes.availableAmc);
  };

  // Warranty upload section
  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };
  const onScanClickFnc = (type: string) => {
    setShowComponent(true);
    onWarrantyType(type);
  };

  const onWarrantyFileUpload = () => {
    getWarrantyDetailsInclusionExclusion({ uploadFile: uploadFile, product_id: product_id }, 'amc', () => {
      getAmcDetails(product_id || '');
      setOpenDrawers(false);
      clearScan();
    });
  };

  const onRouteGallery = () => {
    navigate(webRoutes.uploadedgallery, {
      state: { product_id: product_id },
    });
  };

  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const onBackRoute = () => {
    setShowComponent(false);
  };

  const onBackRouteProductDetailPage = () => {
    getAmcUpdate(false)
    navigate(`/productDetails/${product_id}`)
  }

  useEffect(() => {
    setextAfterDelay();
  }, []);

  useEffect(() => {
    if (product_id) {
      getAmcDetails(product_id);
    }
  }, [product_id]);

  useEffect(() => {
    if (product_id) {
      getAmcExploreData(product_id);
    }
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('AMC page', {
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
      {showComponent ? (
        <>
          <CaptureImage
            backRequired
            useBackBtnClick
            onBackBtnClick={onBackRoute}
            onGalleryGo={onRouteGallery}
            dataURIs={dataURIs}
            UploadImage={(val: string) => onUpdateCaptureImage(val)}
          />
        </>
      ) : (
        <>
          {amcDetailsLoading ? (
            <CommonSkeleton />
          ) : (
            <Box>
              <Box sx={amcDetailsStyle.rootSx}>
                <Box sx={amcDetailsStyle.headerSx}>
                  <Box sx={amcDetailsStyle.headerSectionSx}>
                    <PageHeader
                      showIcon
                      useBackBtnClick
                      onBackBtnClick={onBackRouteProductDetailPage}
                      // showMoreIcon
                      icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                      // moreIcon={<MoreIcon />}
                      onMoreClick={onMoreClick}
                      header
                      headerText={nick_name}
                    />
                  </Box>
                </Box>
                <Box sx={{ padding: '16px 20px' }}>
                  <Box sx={amcDetailsStyle.imageCardSx}>
                    <LabelImageCard
                      image={provider_logo ? provider_logo : AmcLogo}
                      providerName={provider_name}
                      from_date={from_date}
                      to_date={to_date}
                      viewIcon={<ViewDocumentIcon />}
                      viewText="View AMC Document"
                      viewUrl={amc_document_url}
                      labelText="AMC"
                    />
                  </Box>
                  <Box sx={amcDetailsStyle.historySx}>
                    <ViewHistoryComponent cardData={amcData?.amcHistoryCard} />
                  </Box>

                  {tabData?.length > 0 ? (
                    <Box sx={amcDetailsStyle.tabsSectionSx}>
                      <SwitchTabs tabData={tabData} />
                    </Box>
                  ) : (
                    <Box sx={{ pt: 1, pb: 4 }}>
                      <Box sx={amcDetailsStyle.uploadSx}>
                        <Typography sx={amcDetailsStyle.attachsx}>Attach warranty document</Typography>
                        <UploadDocumentType
                          id={'amc'}
                          onUploadClick={onUploadClickFnc}
                          onScanClick={() => onScanClickFnc('amc')}
                        />
                      </Box>
                    </Box>
                  )}
                  <Box sx={amcDetailsStyle.fixedBotSx}>
                    <Box sx={{ position: 'relative' }}>
                      <Box sx={uppendClass ? amcDetailsStyle.chatIconSx : amcDetailsStyle.chatRotateIconSx}>
                        <Container
                          sx={{
                            maxWidth: { sm: '425px', xs: '425px', md: '425px' },
                            display: 'flex',
                            justifyContent: 'end',
                          }}
                        >
                          {/* {is_chat_bot && ( */}
                            <>
                              <Box
                                onClick={() => routeToChatBotAmc()}
                                sx={uppendClass ? amcDetailsStyle.botSx : amcDetailsStyle.botRotateSx}
                              >
                                {
                                  uppendClass ?
                                    <ChatBotIcon />
                                    :
                                    <ChatBotCutIcon rootStyle={amcDetailsStyle.botIconMoveSx} />
                                }
                              </Box>
                              {expandAddProductBtn && (
                                <Box sx={{ position: 'relative' }}>
                                  <Box sx={amcDetailsStyle.chatTextSx}>
                                    <Box sx={amcDetailsStyle.bubbleTextSx}>
                                      <Typography>Ask me anything about your AMC</Typography>
                                    </Box>
                                  </Box>
                                  <Box sx={amcDetailsStyle.bubbleArrowSx}>
                                    <BubbleArrow rootStyle={{ color: 'background.surface.C200' }} />
                                  </Box>
                                </Box>
                              )}
                            </>
                          {/* )} */}
                        </Container>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* <Box sx={amcDetailsStyle.footerSectionSx}>
            <FixedFooterComponent scheduleService={true} footerData={amcData?.footerSection} />
          </Box> */}
            </Box>
          )}
        </>
      )}

      {/* Warranty documents files */}
      <DrawerComponent
        borderBottom
        showHeader={true}
        open={openDrawers}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText="Uploaded Warranty Document Files"
            onClose={() => setOpenDrawers(false)}
          />
        }
      >
        {uploadFile?.map((x: any, i: number) => {
          return (
            <Box pb={1.5} key={i}>
              <Box sx={amcDetailsStyle.boxSx}>
                <Typography variant="subtitle2" sx={amcDetailsStyle.uploadDocumentNameSx}>
                  {x?.name}
                </Typography>
                <Box sx={{ cursor: 'pointer' }} onClick={() => handleWarrantyDeleteClose(i)}>
                  <CloseIcon rootStyle={{ color: 'text.A100' }} />
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box pt={1}>
          <Button
            loading={loading}
            sx={amcDetailsStyle.updateButtonSx}
            fullWidth
            disabled={(uploadFile?.length || 0) > 0 ? false : true}
            onClick={() => onWarrantyFileUpload()}
          >
            Update
          </Button>
        </Box>
      </DrawerComponent>
    </Container>
  );
}
