import { webRoutes } from '@core/routes';
import { chatBotAmcStore, useExtendedWarrantyDetails, useScanproduct } from '@core/store';
import WarrantyLogo from '@core/ui/assets/WarrantyLogo.svg';
import { BackCircleIcon, Button, CloseIcon, PageHeader, UploadDocumentType } from '@core/ui/atoms';
import {
  BubbleArrow,
  ChatBotCutIcon,
  ChatBotIcon,
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
import { Box, Container, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { extendedWarrantyDetailsStyle } from './style';
import { track } from '@amplitude/analytics-browser';



export default function ExtendedWarrantyDetails() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawers, setOpenDrawers] = useState(false);
  const [openUrlDrawer, setOpenUrlDrawer] = useState<boolean>(false);
  const [showComponent, setShowComponent] = useState(false);

  // const open = Boolean(anchorEl);
  const { product_id } = useParams();
  const navigate = useNavigate();

  const [expandAddProductBtn, updateExpandAddProductBtn] = useState<boolean>(false);
  const [uppendClass, setUppendClass] = useState(false);

  const {
    getExtendedWarrantyDetails,
    nick_name,
    warranty_valid_from,
    warranty_valid_to,
    warranty_document_url,
    provider_logo,
    provider_name,
    tabData,
    is_chat_bot,
    extendedWarrantyDetailsLoading,
  } = useExtendedWarrantyDetails();

  const {
    loading,
    product_details,
    invoiceDocument,
    uploadFile,
    onUploadCaptureFile,
    onDeleteUploadFile,
    getExtendedDrawer,
    updateProduct,
    clearScan,
    onUpdateCaptureImage,
    dataURIs,
    onExtendedWarrantyType,
    getWarrantyDetailsInclusionExclusion,
  } = useScanproduct();
  const { chatBotHistory, chatBotHistoryState, chatBotState } = chatBotAmcStore();

  const extended_from_date = moment(warranty_valid_from).format('D MMM, YYYY');
  const extended_to_date = moment(warranty_valid_to).format('D MMM, YYYY');

  const onMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };


  const setextAfterDelay = () => {
    setTimeout(() => {
      updateExpandAddProductBtn(false);
    }, 4000);
  };

  const routeToChatBotExtendedWarranty = async () => {

    // Amplitude Track 
    track('User Interacts with bot for the first time', { name: 'customer-app' })

    const response = await chatBotHistory({
      id: product_id || '',
      type: 'ext_warranty',
    })
    // if(response === 200){
    navigate(`/chatBotExtendedWarranty/${product_id}`);
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

  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };
  const onScanClickFnc = (type: string) => {
    setShowComponent(true);
    onExtendedWarrantyType(type);
  };
  const onWarrantyFileUpload = async () => {
    getWarrantyDetailsInclusionExclusion({ uploadFile: uploadFile, product_id: product_id }, 'ext_warranty', () => {
      getExtendedWarrantyDetails(product_id || '');
      setOpenDrawers(false);
      clearScan();
    });
  };

  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const onRouteGallery = () => {
    navigate(webRoutes.uploadedgallery, {
      state: { product_id: product_id },
    });
  };

  const onBackRoute = () => {
    setShowComponent(false)
  }

  const onBackRouteProductDetailPage = () => {
    getExtendedDrawer(false)
    navigate(`/productDetails/${product_id}`)
  }

  useEffect(() => {
    setextAfterDelay();
  }, []);

  useEffect(() => {
    if (product_id) {
      getExtendedWarrantyDetails(product_id);
    }
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('Extended warranty page', {
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
          {extendedWarrantyDetailsLoading ? (
            <CommonSkeleton />
          ) : (
            <Box>
              <Box sx={extendedWarrantyDetailsStyle.rootSx}>
                <Box sx={extendedWarrantyDetailsStyle.headerSx}>
                  <Box sx={extendedWarrantyDetailsStyle.headerSectionSx}>
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
                  <Box sx={extendedWarrantyDetailsStyle.imageCardSx}>
                    <LabelImageCard
                      image={provider_logo ? provider_logo : WarrantyLogo}
                      providerName={provider_name}
                      from_date={extended_from_date}
                      to_date={extended_to_date}
                      viewIcon={<ViewDocumentIcon />}
                      viewText="View Ext Warranty Document"
                      viewUrl={warranty_document_url}
                      labelText="Ext Warranty"
                    />
                  </Box>
                  {tabData?.length > 0 ? (
                    <Box sx={extendedWarrantyDetailsStyle.tabsSectionSx}>
                      <SwitchTabs tabData={tabData} />
                    </Box>
                  ) : (
                    <Box sx={{ pt: 1, pb: 4 }}>
                      <Box sx={extendedWarrantyDetailsStyle.uploadSx}>
                        <Typography sx={extendedWarrantyDetailsStyle.attachsx}>Attach warranty document</Typography>
                        <UploadDocumentType
                          id={'ext_warranty'}
                          onUploadClick={onUploadClickFnc}
                          onScanClick={() => onScanClickFnc('ext_warranty')}
                        />
                      </Box>
                    </Box>
                  )
                  }
                  <Box sx={extendedWarrantyDetailsStyle.fixedBotSx}>
                    <Box sx={{ position: 'relative' }}>
                      <Box sx={
                        uppendClass
                          ? extendedWarrantyDetailsStyle.chatIconSx
                          : extendedWarrantyDetailsStyle.chatRotateIconSx
                      }>
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
                                onClick={() => routeToChatBotExtendedWarranty()}
                                sx={
                                  uppendClass
                                    ? extendedWarrantyDetailsStyle.botSx
                                    : extendedWarrantyDetailsStyle.botRotateSx
                                }
                              >
                                {
                                  uppendClass ?
                                    <ChatBotIcon />
                                    :
                                    <ChatBotCutIcon rootStyle={extendedWarrantyDetailsStyle.botIconMoveSx} />
                                }
                              </Box>
                              {expandAddProductBtn && (
                                <Box sx={{ position: 'relative' }}>
                                  <Box sx={extendedWarrantyDetailsStyle.chatTextSx}>
                                    <Box sx={extendedWarrantyDetailsStyle.bubbleTextSx}>
                                      <Typography>Ask me anything about your Ext Warranty</Typography>
                                    </Box>
                                  </Box>
                                  <Box sx={extendedWarrantyDetailsStyle.bubbleArrowSx}>
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
              <Box sx={extendedWarrantyDetailsStyle.boxSx}>
                <Typography variant="subtitle2" sx={extendedWarrantyDetailsStyle.uploadDocumentNameSx}>
                  {x?.name}
                </Typography>
                <Box sx={{ cursor: 'pointer' }} onClick={() => handleWarrantyDeleteClose(i)}>
                  <CloseIcon />
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box pt={1}>
          <Button
            sx={extendedWarrantyDetailsStyle.updateButtonSx}
            fullWidth
            disabled={(uploadFile?.length || 0) > 0 ? false : true}
            onClick={() => onWarrantyFileUpload()}
            loading={loading}
          >
            Update
          </Button>
        </Box>
      </DrawerComponent>
    </Container>
  );
}
