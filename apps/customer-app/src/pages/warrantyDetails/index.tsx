import { webRoutes } from '@core/routes';
import { chatBotAmcStore, useAvailableWarrantyDetails, useScanproduct, useWarrantyDetails } from '@core/store';
import Bajaj from '@core/ui/assets/bajaj.png';
import { BackCircleIcon, Button, CloseIcon, Input, MoreIcon, PageHeader, UploadDocumentType } from '@core/ui/atoms';
import { PhoneIcon, SupportIcon } from '@core/ui/atoms/icons/productIcons';
import {
  BubbleArrow,
  ChatBotCutIcon,
  ChatBotIcon,
  RightBlueArrow,
  RightCircleIcon,
  ViewDocumentIcon,
  WarrantyLogoIcon,
} from '@core/ui/atoms/icons/productSearchIconsLists';
import {
  CaptureImage,
  CommonSkeleton,
  DrawerComponent,
  ExploreCardComponent,
  ExtendedWarrantyCard,
  FixedFooterComponent,
  LabelImageCard,
  ModalHeader,
  SwitchTabs,
} from '@core/ui/components';
import { Box, Container, Menu, MenuItem, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { warrantyDetailsStyle } from './style';
import { enqueueSnackbar } from 'notistack';

export default function WarrantyDetails() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<string>('');
  const [openDrawers, setOpenDrawers] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [expandAddProductBtn, updateExpandAddProductBtn] = useState<boolean>(false);
  const [uppendClass, setUppendClass] = useState(false);
  const { product_id } = useParams();

  const navigate = useNavigate();

  const {
    loading,
    product_details,
    invoiceDocument,
    uploadFile,
    onUploadCaptureFile,
    onDeleteUploadFile,
    updateProduct,
    clearScan,
    onUpdateCaptureImage,
    dataURIs,
    onWarrantyType,
    getWarrantyDetailsInclusionExclusion,
  } = useScanproduct();

  const { getWarrantyDetails, standardWarrantyState, extendedWarrantyState, tabData, warrantyDetailsLoading } =
    useWarrantyDetails();

  const { chatBotHistory, chatBotHistoryState, chatBotState } = chatBotAmcStore();

  // const { getAvailableWarrantyDetails, availableWarranty } = useAvailableWarrantyDetails();

  const standard_from_date = moment(standardWarrantyState?.warranty_valid_from).format('D MMM, YYYY');
  const standard_to_date = moment(standardWarrantyState?.warranty_valid_to).format('D MMM, YYYY');

  const extended_from_date = moment(extendedWarrantyState?.warranty_valid_from).format('D MMM, YYYY');
  const extended_to_date = moment(extendedWarrantyState?.warranty_valid_to).format('D MMM, YYYY');

  const expirationDate = moment(extendedWarrantyState?.warranty_valid_to).subtract(1, 'months');

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

  const handleClick = () => {
    navigate(`/extendedWarranty/${product_id}`);
  };


  const routeToChatBotWarranty = async () => {

    // Amplitude Track 
    track('User Interacts with bot for the first time', { name: 'customer-app' })

    const response = await chatBotHistory({
      id: product_id || '',
      type: 'std_warranty',
    })

    // if(response === 200){
    navigate(`/chatBotWarranty/${product_id}`);
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

  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };
  const onScanClickFnc = (type: string) => {
    setShowComponent(true);
    onWarrantyType(type);
  };

  // const handleUpdateInsurance = async () => {
  //   await updateInsuranceService(product_id).then(() => {
  //     getProductDetails(product_id);
  //     setInsuranceDrawerOpen(false);
  //     setInsurDrawerOpen(false);
  //   });
  // };

  const onWarrantyFileUpload = () => {
    getWarrantyDetailsInclusionExclusion({ uploadFile: uploadFile, product_id: product_id }, 'std_warranty', () => {
      getWarrantyDetails(product_id || '');
      setOpenDrawers(false);
      clearScan();
    })
  };
  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val, index: number) => index !== i));
  };

  const onBackRoute = () => {
    setShowComponent(false)
  }

  useEffect(() => {
    setextAfterDelay();
  }, []);

  useEffect(() => {
    setextAfterDelay();
  }, []);

  useEffect(() => {
    getWarrantyDetails(product_id || '');
    // getAvailableWarrantyDetails(product_id || '');
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('Warranty page', {
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
          {warrantyDetailsLoading ? (
            <CommonSkeleton />
          ) : (
            <Box>
              <Box sx={warrantyDetailsStyle.rootSx}>
                <Box sx={warrantyDetailsStyle.headerSx}>
                  <Box sx={warrantyDetailsStyle.headerSectionSx}>
                    <PageHeader
                      showIcon
                      icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                      onMoreClick={onMoreClick}
                      header
                      headerText={standardWarrantyState?.nick_name}
                    />
                  </Box>
                </Box>
                <Box sx={{ padding: '16px 20px' }}>
                  <Box sx={warrantyDetailsStyle.imageCardSx}>
                    <LabelImageCard
                      image={
                        standardWarrantyState?.provider_logo ? (
                          standardWarrantyState?.provider_logo
                        ) : (
                          `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`
                        )
                      }
                      providerName={standardWarrantyState?.provider_name}
                      from_date={standard_from_date}
                      to_date={standard_to_date}
                      viewIcon={<ViewDocumentIcon />}
                      viewText="View Warranty Document"
                      viewUrl={standardWarrantyState?.warranty_document_url}
                      labelText="Warranty"
                    />
                  </Box>
                  {tabData?.length > 0 ? (
                    <Box sx={warrantyDetailsStyle.tabsSectionSx}>
                      <SwitchTabs tabData={tabData} />
                    </Box>
                  ) : (
                    <Box sx={{ pt: 1, pb: 4 }}>
                      <Box sx={warrantyDetailsStyle.uploadSx}>
                        <Typography sx={warrantyDetailsStyle.attachsx}>Attach warranty document</Typography>
                        <UploadDocumentType
                          id={'std_warranty'}
                          onUploadClick={onUploadClickFnc}
                          onScanClick={() => onScanClickFnc('std_warranty')}
                        />
                      </Box>
                    </Box>
                  )}
                  <Box sx={warrantyDetailsStyle.extendedSx}>
                    <ExtendedWarrantyCard
                      header="Extended Warranty Details"
                      image={Bajaj}
                      handleClick={handleClick}
                      title={extendedWarrantyState?.provider_name}
                      extended_from_date={extended_from_date}
                      extended_to_date={extended_to_date}
                      icon={<RightCircleIcon />}
                      extended={extendedWarrantyState?.warranty_valid_to}
                    />
                  </Box>
                  <Box sx={warrantyDetailsStyle.fixedBotSx}>
                    <Box sx={{ position: 'relative' }}>
                      <Box sx={uppendClass ? warrantyDetailsStyle.chatIconSx : warrantyDetailsStyle.chatRotateIconSx}>
                        <Container
                          sx={{
                            maxWidth: { sm: '425px', xs: '425px', md: '425px' },
                            display: 'flex',
                            justifyContent: 'end',
                          }}
                        >
                          {/* {standardWarrantyState?.is_chat_bot && ( */}
                            <>
                              <Box
                                onClick={() => routeToChatBotWarranty()}
                                sx={uppendClass ? warrantyDetailsStyle.botSx : warrantyDetailsStyle.botRotateSx}
                              >
                                {
                                  uppendClass ?
                                    <ChatBotIcon />
                                    :
                                    <ChatBotCutIcon rootStyle={warrantyDetailsStyle.botIconMoveSx} />
                                }
                              </Box>

                              {expandAddProductBtn && (
                                <Box sx={{ position: 'relative' }}>
                                  <Box sx={warrantyDetailsStyle.chatTextSx}>
                                    <Box sx={warrantyDetailsStyle.bubbleTextSx}>
                                      <Typography>Ask me anything about your Warranty</Typography>
                                    </Box>
                                  </Box>
                                  <Box sx={warrantyDetailsStyle.bubbleArrowSx}>
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
              <Box sx={warrantyDetailsStyle.boxSx}>
                <Typography variant="subtitle2" sx={warrantyDetailsStyle.uploadDocumentNameSx}>
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
            sx={warrantyDetailsStyle.updateButtonSx}
            fullWidth
            disabled={(uploadFile?.length || 0) > 0 ? false : true}
            onClick={() => onWarrantyFileUpload()}
          >
            Update
          </Button>
        </Box>
      </DrawerComponent>

      {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        sx={warrantyDetailsStyle.menuSx}
        anchorEl={anchorEl}
        open={open}
        onClose={() => activityLogClose()}
      >
        <MenuItem onClick={handleSupport} sx={{ ...warrantyDetailsStyle.menuItemSx, pb: 2 }}>
          <PhoneIcon />
          Help & Support
        </MenuItem>
        <MenuItem sx={warrantyDetailsStyle.menuItemSx}>
          <SupportIcon />
          Invoice
        </MenuItem>
      </Menu> */}
    </Container>
  );
}
