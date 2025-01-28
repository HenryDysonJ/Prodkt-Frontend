import { chatBotAmcStore, useAvailableInsuranceDetails, useInsuranceDetails, useScanproduct } from '@core/store';
import { BackCircleIcon, Button, CloseIcon, PageHeader, UploadDocumentType } from '@core/ui/atoms';
import {
  BubbleArrow,
  ChatBotCutIcon,
  ChatBotIcon,
  CopyIcon,
  ViewDocumentIcon
} from '@core/ui/atoms/icons/productSearchIconsLists';
import {
  CaptureImage,
  CommonSkeleton,
  DrawerComponent,
  LabelImageCard,
  ModalHeader,
  SwitchTabs
} from '@core/ui/components';

import InsuranceLogo from '@core/ui/assets/InsuranceLogo.svg';
// import { CardDataInterface } from '@core/ui/components/exploreCardComponent';
import { Box, Container, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { webRoutes } from '@core/routes';
import { insuranceDetailsStyle } from './style';

// const insuranceData = {
//   footerSection: {
//     scheduleService: true,
//     title: 'Ongoing Insurance',
//     subTitle: 'Samsung Brand Insurance',
//     buttonText: 'Track Insurance',
//   },
// };

export default function InsuranceDetails() {
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
    onInsuranceType,
    onDeleteUploadFile,
    getInsuranceDrawerUpdate,
    clearScan,
    onUpdateCaptureImage,
    dataURIs,
    getWarrantyDetailsInclusionExclusion,
  } = useScanproduct();

  const {
    getInsurancecDetails,
    nick_name,
    tabData,
    insurance_valid_from,
    insurance_document_url,
    insurance_valid_to,
    product_serial_no,
    insuranceDetailsLoading,
    provider_name,
    is_chat_bot,
    provider_logo,
  } = useInsuranceDetails();


  const { availableInsurance, getAvailableInsuranceDetails } = useAvailableInsuranceDetails();

  const { chatBotHistory, chatBotHistoryState, clearChatBotHistory, chatBotState } = chatBotAmcStore();

  const from_date = moment(insurance_valid_from).format('D MMM, YYYY');
  const to_date = moment(insurance_valid_to).format('D MMM, YYYY');

  const expirationDate = moment(insurance_valid_to).subtract(7, 'day');

  const today = moment();

  // Check if the insurance is expiring soon
  const isExpiringSoon = expirationDate.isSameOrBefore(today, 'day');

  const onMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  // const activityLogClose = () => {
  //   setAnchorEl(null);
  // };

  const setextAfterDelay = () => {
    setTimeout(() => {
      updateExpandAddProductBtn(false);
    }, 4000);
  };

  const routeToChatBotInsurance = async () => {

    // Amplitude Track 
    track('User Interacts with bot for the first time', { name: 'customer-app' })

    const response = await chatBotHistory({
      id: product_id || '',
      type: 'insurance',
    })

    // if(response === 200){
    navigate(`/chatBotInsurance/${product_id}`);
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

  const onRouteGallery = () => {
    navigate(webRoutes.uploadedgallery, {
      state: { product_id: product_id },
    });
  };

  // Warranty upload section
  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };
  const onScanClickFnc = (type: string) => {
    setShowComponent(true);
    onInsuranceType(type);
  };


  const onWarrantyFileUpload = () => {
    getWarrantyDetailsInclusionExclusion({ uploadFile: uploadFile, product_id: product_id }, 'insurance', () => {
      getInsurancecDetails(product_id || '');
      setOpenDrawers(false);
      clearScan();
    });
  };

  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const onBackRoute = () => {
    setShowComponent(false)
  }
  const onBackRouteProductDetailPage = () => {
    getInsuranceDrawerUpdate(false);
    navigate(`/productDetails/${product_id}`)
  }
  useEffect(() => {
    setextAfterDelay();
  }, []);

  useEffect(() => {
    if (product_id) {
      getInsurancecDetails(product_id);
      getAvailableInsuranceDetails(product_id);
    }
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('Insurance page', {
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
          {insuranceDetailsLoading ? (
            <CommonSkeleton />
          ) : (
            <Box>
              <Box sx={insuranceDetailsStyle.rootSx}>
                <Box sx={insuranceDetailsStyle.headerSx}>
                  <Box sx={insuranceDetailsStyle.headerSectionSx}>
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
                  <Box sx={insuranceDetailsStyle.imageCardSx}>
                    {/* lable image card */}
                    <LabelImageCard
                      image={provider_logo ? provider_logo : InsuranceLogo}
                      providerName={provider_name}
                      from_date={from_date}
                      to_date={to_date}
                      viewIcon={<ViewDocumentIcon />}
                      viewText="View Insurance Document"
                      viewUrl={insurance_document_url}
                      labelText="Insurance"
                      product_serial_no={product_serial_no}
                      copyIcon={<CopyIcon />}
                    />
                  </Box>
                  {tabData?.length > 0 ? (
                    <Box sx={insuranceDetailsStyle.tabsSectionSx}>
                      <SwitchTabs tabData={tabData} />
                    </Box>
                  ) : (
                    <Box sx={{ pt: 1, pb: 4 }}>
                      <Box sx={insuranceDetailsStyle.uploadSx}>
                        <Typography sx={insuranceDetailsStyle.attachsx}>Attach warranty document</Typography>
                        <UploadDocumentType
                          id={'insurance'}
                          onUploadClick={onUploadClickFnc}
                          onScanClick={() => onScanClickFnc('insurance')}
                        />
                      </Box>
                    </Box>
                  )}
                  <Box sx={insuranceDetailsStyle.fixedBotSx}>
                    <Box sx={{ position: 'relative' }}>
                      <Box sx={uppendClass ? insuranceDetailsStyle.chatIconSx : insuranceDetailsStyle.chatRotateIconSx}>
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
                                onClick={() => routeToChatBotInsurance()}
                                sx={uppendClass ? insuranceDetailsStyle.botSx : insuranceDetailsStyle.botRotateSx}
                              >
                                {
                                  uppendClass ?
                                    <ChatBotIcon />
                                    :
                                    <ChatBotCutIcon rootStyle={insuranceDetailsStyle.botIconMoveSx} />
                                }
                              </Box>
                              {expandAddProductBtn && (
                                <Box sx={{ position: 'relative' }}>
                                  <Box sx={insuranceDetailsStyle.chatTextSx}>
                                    <Box sx={insuranceDetailsStyle.bubbleTextSx}>
                                      <Typography>Ask me anything about your Insurance</Typography>
                                    </Box>
                                  </Box>
                                  <Box sx={insuranceDetailsStyle.bubbleArrowSx}>
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
              {/* <Box sx={insuranceDetailsStyle.footerSectionSx}>
            <FixedFooterComponent scheduleService={true} footerData={insuranceData?.footerSection} />
          </Box> */}
            </Box>
          )}
        </>
      )}
      {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        sx={insuranceDetailsStyle.menuSx}
        anchorEl={anchorEl}
        open={open}
        onClose={() => activityLogClose()}
      >
        <MenuItem onClick={handleSupport} sx={{ ...insuranceDetailsStyle.menuItemSx, pb: 2 }}>
          <PhoneIcon />
          Help & Support
        </MenuItem>
        <MenuItem sx={insuranceDetailsStyle.menuItemSx}>
          <SupportIcon />
          Invoice
        </MenuItem>
      </Menu> */}


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
              <Box sx={insuranceDetailsStyle.boxSx}>
                <Typography variant="subtitle2" sx={insuranceDetailsStyle.uploadDocumentNameSx}>
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
            sx={insuranceDetailsStyle.updateButtonSx}
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
