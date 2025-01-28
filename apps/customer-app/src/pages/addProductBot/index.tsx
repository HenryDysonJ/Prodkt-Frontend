/* eslint-disable react/jsx-key */

import { webRoutes } from '@core/routes';
import { addProductDetails, useScanproduct } from '@core/store';
import MascotFrame from '@assets/MascotFrame.gif';
import { HappyRoboIcon, StepOneCurve, StepTwoCurve, TourBot } from '@core/ui/atoms/icons/onboardIcons';
import Frowning from '@core/ui/assets/Frowning.png';
import StarStruck from '@core/ui/assets/StarStruck.png';
import ScrollUpImage from '@core/ui/assets/scrollUp.gif'
import cardImage from '@core/ui/assets/Union.png'
import dummy from '@core/ui/assets/InclExcl.svg'
import {
  AddProductCardIcon,
  BackCircleIcon,
  Button,
  CloseIcon,
  DeleteIcon,
  PageHeader,
  ProductInvoiceAddedDrawer,
  Scanner,
  ScrollCard,
  TrashIcon,
  UploadDeleteIcon,
  UploadDocumentType,
  UploadTypeFooter,
} from '@core/ui/atoms';
import { BotUploadDocument, CaptureImage, DrawerComponent, ModalHeader, ScreenLayout } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { isAfter } from 'date-fns';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';

// import BotScreenBackGround from '@core/ui/assets/botScreen.svg'
import moment from 'moment';
import { addProductBotStyle } from './style';

export default function AddProductBot() {
  const {
    onUploadCaptureFile,
    onDeleteUploadFile,
    uploadFile,
    invoiceDocument,
    onUpdateCaptureImage,
    currentStatus,
    dataURIs,
    getScanProduct,
    onUpdateSkip,
    product_details,
    updateCheckedIndex,
    clearScan,
    clearSerialNo,
    updateSerialNo,
    loading,
    serialIndex,
    onUpdateSerialNo,
    onUpdateImeiNo,
    onScanType,
    scanType,
    updateStandardWarrantyDocument,
    clearInvoice,
  } = useScanproduct();

  const { clearDocumentState } = addProductDetails();

  const cardNameChange: any = {
    0: 'Invoice',
    1: 'Extended Warranty',
    2: 'Insurance',
    3: 'Amc',
  };

// loading data

const [loadingData, setLoadingData] = useState(false)

  // Scrolling State

  // const [addProductState, setAddProductState] = useState(productInvoiceAdd);
  const [showComponent, setShowComponent] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [show, setShow] = useState(false);
  // serial number state
  const [openCamera, setOpenCamera] = useState(false);

  const [isWarrantyUnder, setIsWarrantyUnder] = useState(false);

  // const [scanResult, setScanResult] = useState(null);

  const navigate = useNavigate();

  const onScanClickFnc = () => {
    setShowComponent(true);
  };
  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawer(true);
  };

  const handleDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const onFileUpload = async () => {
    setOpenDrawer(false);
    await getScanProduct([], uploadFile);
    // clearScan();
  };

  const onQrScanClick = (val: number, type: string) => {
    setShow(true);
    setOpenCamera(false);
    onScanType(type);
    onUpdateSerialNo(val);
  };
  const onQrImeiClick = (val: number, type: string) => {
    setShow(true);
    setOpenCamera(false);
    onScanType(type);
    onUpdateImeiNo(val);
  };

  const onSkipClickFnc = () => {
    onUpdateSkip([...currentStatus?.skip, cardNameChange[currentStatus?.step]]);
  };

  const a = product_details?.invoice_details?.find(
    (v: { standard_warranty_details: any }) => v?.standard_warranty_details,
  );



  const onProceedDrawer = () => {
    setLoadingData(true)
    updateStandardWarrantyDocument(() => {
      setOpenCamera(false);
      setLoadingData(false)
      navigate(webRoutes.addCoverageDetails, {
        state: { data: { isScan: true, data: getWarrantyExpireDate, drawerState: openCamera } },
      });
    });
    // if (!a?.standard_warranty_details) {
    // }
  };

  const getWarrantyExpireDate = product_details?.invoice_details?.filter((x: { checked: boolean }) => {
    return x.checked === true;
  });


  const onViewSummaryFnc = () => {
    navigate(webRoutes.productSummary, {
      state: { data: { isScan: true, data: product_details } },
    });
  };



  const onRouteGallery = () => {
    navigate(webRoutes.uploadedgallery);
  };

  const onCaptureImage = (val: any) => {
    onUpdateCaptureImage(val)
    // clearScan();
  }

  const handleClickAdvanced = () => {
    setShow(false);
    setOpenCamera(true);
    clearSerialNo();
  };

  const onCaptureClick = (val: any) => {
    if (scanType === 'serial_no') {
      updateSerialNo('serial_no', val, serialIndex);
    } else {
      updateSerialNo('imei_no', val, serialIndex);
    }
  };

  const onbackRoute = () => {
    clearScan();
    navigate(webRoutes.home);
  };
  const onBackRouteScreenLayout = () => {
    setShow(false);
    setOpenCamera(true);
  };

  const getStrandedWarranty = () => {
    const warrantyCoverageDate = moment(getWarrantyExpireDate?.[0]?.product_details?.purchase_date).add(moment(getWarrantyExpireDate?.[0]?.standard_warranty_details?.warranty_coverage), getWarrantyExpireDate?.[0]?.standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('DD MM YYYY')
    const isActive = isAfter(new Date(warrantyCoverageDate), new Date())
    setIsWarrantyUnder(isActive)
  };


  const onCloseDrawer = () => {
    setOpenCamera(false);
    navigate(webRoutes.addproductBot);
    clearInvoice();
    clearDocumentState();
  };

  useEffect(() => {
    if (currentStatus?.step === 1) {
      setOpenCamera(true);
    }
  }, [currentStatus?.step]);

  useEffect(() => {
    getStrandedWarranty();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Add Product page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={{
      ...addProductBotStyle.rootSx,
      background: (theme) => theme.palette.background.surface?.default
    }}>
      {
        show ? (
          <>
            <Box position="relative">
              <ScreenLayout
                title="Scan Serial Number"
                backRequired
                useBackBtnClick
                onBackBtnClick={onBackRouteScreenLayout}
                childrenStyle={{
                  ...addProductBotStyle.screenlayoutSx,
                }}
              >
                <Box>
                  <Scanner isOnchange onChange={(val: any) => onCaptureClick(val)} />
                </Box>
                <Box
                  sx={{
                    py: 2,
                    px: 2,
                    bgcolor: 'none',
                    position: 'absolute',
                    bottom: '0px',
                    left: '0px',
                    right: '0px',
                  }}
                >
                  <Button
                    sx={{
                      ...addProductBotStyle.homeSx,
                    }}
                    fullWidth
                    onClick={() => handleClickAdvanced()}
                    disabled={invoiceDocument?.serial_no || invoiceDocument?.imei_no?.length > 0 ? false : true}
                  >
                    Capture
                  </Button>
                </Box>
              </ScreenLayout>
            </Box>
          </>
        ) : (
          <>
            {showComponent ? (
              <>
                <CaptureImage
                  onGalleryGo={onRouteGallery}
                  dataURIs={dataURIs}
                  UploadImage={(val: any) => onCaptureImage(val)}
                />
              </>
            ) : (
              <>
                <Box sx={{ background: (theme) => theme.palette.background.surface?.default, height: '100vh' }}>
                  <Box sx={{ px: 2.5, py: 2.5 }}>
                    <PageHeader
                      onBackBtnClick={() => onbackRoute()}
                      useBackBtnClick={true}
                      showIcon
                      icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                      header
                      headerText="Add product in a single go!"
                    />
                  </Box>
                  {
                    loading ? null :
                      <>
                        {/* <Box textAlign={'right'} px={10} pt={2}>
                          <img src={cardImage} alt='cardImage' />
                          <Typography>Feel free to provide your product documents, I will handle the rest</Typography>
                        </Box> */}
                        <Box sx={addProductBotStyle.sectionSx}>
                          <Box sx={{ position: 'absolute', left: '116px' }}>
                            {/* <img src={cardImage} alt='cardImage' /> */}
                            <AddProductCardIcon rootStyle={{ height: '100px', width: '200px !important' }} />
                            <Typography sx={{ fontSize: '14px', position: 'absolute', top: '6px', left: '20px', color: 'text.B600', fontWeight: 700 }}>Feel free to provide your product documents, I will handle the rest</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Box>
                            <img src={ScrollUpImage} alt='scrollUpGid' />
                          </Box>
                          <img src={dummy} alt='scrollUpGid' />
                        </Box>
                      </>
                  }

                  {loading ? (
                    <Box sx={addProductBotStyle.scrollSx}>
                      <ScrollCard />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        bottom: '20px',
                        px: 3.5,
                      }}
                    >
                      <UploadTypeFooter
                        onSkipClick={() => onSkipClickFnc()}
                      >
                        <UploadDocumentType
                          id={
                            currentStatus?.step === 0
                              ? 'bot-invoice'
                              : currentStatus?.step === 1
                                ? 'bot-Extd_warranty'
                                : currentStatus?.step === 2
                                  ? 'bot-insurance'
                                  : currentStatus?.step === 3
                                    ? 'bot-amc'
                                    : ''
                          }
                          loading={loading}
                          onUploadClick={onUploadClickFnc}
                          onViewSummary={() => onViewSummaryFnc()}
                          onScanClick={onScanClickFnc}

                        />
                      </UploadTypeFooter>
                    </Box>
                  )}
                </Box>

                {/* upload file Drawer */}

                {
                  <DrawerComponent
                    borderBottom
                    showHeader={true}
                    open={openDrawer}
                    headerComponent={
                      <ModalHeader
                        icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                        showIcon={true}
                        showHeader={true}
                        headerText="Uploaded Files"
                        onClose={() => setOpenDrawer(false)}
                      />
                    }
                  >
                    {uploadFile?.map((x: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, i: number) => {
                      return (
                        <Box pb={1.5}>
                          <Box sx={addProductBotStyle.boxSx}>
                            <Typography variant="subtitle2" sx={addProductBotStyle.uploadDocumentNameSx}>
                              {x?.name}
                            </Typography>
                            <Box sx={{ cursor: 'pointer' }} onClick={() => handleDeleteClose(i)}>
                              <UploadDeleteIcon />
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                    <Box pt={1}>
                      <Button
                        data-testid="proceed"
                        sx={addProductBotStyle.updateButtonSx}
                        fullWidth
                        disabled={uploadFile?.length > 0 ? false : true}
                        onClick={() => onFileUpload()}
                      >
                        Proceed
                      </Button>
                    </Box>
                  </DrawerComponent>
                }

                {/* Invoice Drawer */}
                {
                  <DrawerComponent
                    heightStyle={{
                      // height: '450px',
                      // pb: 15
                    }}
                    borderBottom
                    showHeader={true}
                    open={openCamera}
                    headerComponent={
                      <ModalHeader
                        icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                        showIcon={true}
                        showHeader={true}
                        headerText="Choose the product that you want to add"
                        onClose={onCloseDrawer}
                      />
                    }
                  >
                    <Box>
                      <ProductInvoiceAddedDrawer
                        setOpenCamera={() => setOpenCamera()}
                        loading={loadingData}
                        addProductState={product_details?.invoice_details}
                        setAddProductState={(val: any, index: number) => updateCheckedIndex('invoice_details', val, index)}
                        // scanResult={scanResult}
                        onScanCameraClick={onQrScanClick}
                        onScanSerialNumber={onQrImeiClick}
                        disabled={getWarrantyExpireDate?.[0]?.checked === true ? false : true}
                        onProceedDrawer={onProceedDrawer}
                      />
                    </Box>
                  </DrawerComponent>
                }
              </>
            )}
          </>
        )}
    </Box >
  );
}
