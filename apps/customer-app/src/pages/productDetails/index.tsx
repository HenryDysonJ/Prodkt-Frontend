import BarCode from '@assets/barcode.png';
import Imes from '@assets/imes.png';
import { webRoutes } from '@core/routes';
import {
  addProductDetails,
  chatBotAmcStore,
  useArchiveProduct,
  useBannerCard,
  useHome,
  useProductDetails,
  useScanproduct,
  useScheduleServiceReminder,
  useServiceProviders,
} from '@core/store';
import { chooseProductData } from '@core/store/interface';
import {
  ActivityLogIcon,
  AddedProductCard,
  BackCircleIcon,
  Button,
  CallIcon,
  CloseIcon,
  CustomTextfield,
  DataTabs,
  ExtendedWarrantyIcon,
  Input,
  MoreIcon,
  NevIconProduct,
  PageHeader,
  PenIcon,
  Scanner,
  SearchIconColor,
  SerialNumber,
  ToggleButton,
  UploadDeleteIcon,
  UploadDocumentType,
  WarrantyCoverage,
} from '@core/ui/atoms';
import { IconSetting } from '@core/ui/atoms/icons/preferService';
import { PhoneIcon } from '@core/ui/atoms/icons/productIcons';
import { BubbleArrow, ChatBotCutIcon, ChatBotIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import ScheduleService from '@core/ui/atoms/icons/scheduleService';
import {
  ArchiveProductIcon,
  MaintenanceEmptyState,
  NewAddIcon,
  SearchBoughtIcon,
  ServiceReminderSearchIcon,
  ThunderIcon,
} from '@core/ui/atoms/icons/serviceReminderIcon';
import { track } from '@amplitude/analytics-browser';
import {
  ActionRequiredCard,
  CaptureImage,
  CompanyWarrantyCard,
  DocumentUploadComponent,
  DrawerComponent,
  FooterButtonComponent,
  MaintenanceCard,
  ModalHeader,
  ModeOfPurchase,
  PostponeScheduledServiceComponent,
  PrimaryServiceProviderComponent,
  ProductProfile,
  ScheduleServiceCard,
  ScheduleServiceMaintenance,
  ScreenLayout,
  SpecificationCard,
} from '@core/ui/components';
import { Box, Container, Divider, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { RecordScheduleService } from '@pages/recordScheduleService';
import { ScheduleServiceReminder } from '@pages/scheduleServiceReminder';
import moment from 'moment';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productDetailsStyle } from './style';

export default function ProductDetails() {
  const { getOfferDetails } = useBannerCard();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(1);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [expandAddProductBtn, updateExpandAddProductBtn] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [data, setdata] = useState([]);
  const [editDetails, setEditDetails] = useState(false);
  const [drawerImeiOpen, setDrawerImeiOpen] = useState<boolean>(false);
  const [drawerSerialOpen, setDrawerSerialOpen] = useState<boolean>(false);
  const { product_id } = useParams();


  const open = Boolean(anchorEl);
  const {
    productMaintenance,
    product_specification,
    warrantyDetailsState,
    product_details,
    edit_product_details,
    editProductDetails,
    updateEditProductDetails,
    getProductDetails,
    getMaintenanceDetails,
    getActivityDetails,
    updateEditSerialNo,
    is_primary_service_provider,
    loading: productDetailsLoading,
  } = useProductDetails();


  const { archiveProductData, updateArchiveProductData, updateArchiveProduct, clearArchiveState } = useArchiveProduct();

  const { updateDrawerState: updateDrawerStatePrimary, openPrimaryServiceDrawer } = useServiceProviders();

  const {
    openPostponeServiceDate,
    openServicePostpone,
    servicePostponeData,
    updateServicePostponeData,
    updatePostponeServiceApi,
    updateServiceReminderData,
    actionRequiredData,
    clearState,
    updateDrawerState,
    updateNoActionRequired,
    noAction_required,
    updateNoActionRequiredApi,
    clearNoActionRequiredData,
  } = useScheduleServiceReminder();

  const {
    actionCardLoading,
    chooseProductDetails,
    getChooseProductUpdate,
    openChooseProductDrawer,
    getChooseProductDrawerUpdate,
    openMyProductDrawer,
    getMyProductDrawer,
    actionRequiredState,
    getCurrantDrawerUpdate,
    chooseProductState,
    chooseProductLoading,
    currantDrawer,
    getDisplayActionRequired,
  } = useHome();

  // const { actionRequiredState, actionCardLoading, getDisplayActionRequired } = useHome();

  const {
    // loading,
    invoiceDocument,
    uploadFile,
    onUploadCaptureFile,
    onDeleteUploadFile,
    getSummaryProduct,
    clearScan,
    onUpdateCaptureImage,
    updateProductId,
    clearExternalDocumentState,
    dataURIs,
    externalDocumentUpdateState,
    updateExtWarrantyDocument,
    updateInsuranceDocument,
    externalDocumentProductDetails,
    externalInsuranceDocumentUpdateState,
    externalAmcDocumentUpdateState,
    updateAmcDocument,
    updateInvoiceDocument,
    updateServiceRecordDrawerState,
    openServiceRecordDrawer,
    extWarrantyLoading,
    amcLoading,
    invoiceLoading,
    insuranceLoading,
    clearSerialNo,
    onUpdateSerialNo,
    onScanType,
    serialIndex,
    onAmcDrawerType,
    onAmcDrawerUpdate,
    onInsuranceDrawerType,
    onInsuranceUpdateType,
    onExtendedDrawerType,
    openServiceRecordType,
    product_details: product
  } = useScanproduct();

  const { chatBotHistory, chatBotHistoryState, chatBotState } = chatBotAmcStore();

  // external
  const [show, setShow] = useState(false);
  const [openQr, setOpenQr] = useState(false);

  // calculate a max Date its means a future date
  const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);


  // invoice
  const [invoiceDocumentDrawer, setInvoiceDocumentDrawer] = useState(false);

  // warranty card function
  const [openDrawers, setOpenDrawers] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  // insurance
  const [showInsuranceComponent, setShowInsuranceComponent] = useState(false);
  const [openInsuranceDrawer, setOpenInsuranceDrawer] = useState(false);

  // Amc
  const [showAmcComponent, setShowAmcComponent] = useState(false);
  const [openAmcDrawer, setOpenAmcDrawer] = useState(false);

  // Amc Drawer
  const [amcUpdateComponent, setAmcUpdateComponent] = useState(false);
  const [amcUpdateComponentDrawer, setAmcUpdateComponentDrawer] = useState(false);

  // Insurance Drawer

  const [insuranceUpdateComponent, setInsuranceUpdateComponent] = useState(false);
  const [insuranceUpdateComponentDrawer, setInsuranceUpdateComponentDrawer] = useState(false);

  // Extended drawer
  const [extendedUpdateComponent, setExtendedUpdateComponent] = useState(false);
  const [extendedUpdateComponentDrawer, setExtendedUpdateComponentDrawer] = useState(false);

  // Archive Product Drawer
  const [archiveDrawer, setArchiveDrawer] = useState(false);

  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };
  const onScanClickFnc = (type: string) => {
    setShowComponent(true);
    updateServiceRecordDrawerState('extWarrantyProductUploadType', type);
    updateServiceRecordDrawerState('productDetailsProductId', product_id);
    // onHomeUpdateType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onWarrantyFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'ext_warranty');
    setOpenDrawers(false);
  };
  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  // Invoice Card Function
  const onUploadinvoiceClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setInvoiceDocumentDrawer(true);
  };
  const onScanInvoiceClickFnc = (type: string) => {
    setShowAmcComponent(true);
    // updateServiceRecordDrawerState('amcProductUploadType', type);
    updateServiceRecordDrawerState('productDetailsProductId', product_id);
    // onAmcUploadType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onInvoiceFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'invoice');
    setInvoiceDocumentDrawer(false);
  };
  const handleInvoiceDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  // Amc Card Function
  const onUploadAmcClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenAmcDrawer(true);
  };
  const onScanAmcClickFnc = (type: string) => {
    setShowAmcComponent(true);
    updateServiceRecordDrawerState('amcProductUploadType', type);
    updateServiceRecordDrawerState('productDetailsProductId', product_id);
    // onAmcUploadType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onAmcFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'amc');
    setOpenAmcDrawer(false);
  };
  const handleAmcDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  // insurance Card function
  const onUploadInsuranceClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenInsuranceDrawer(true);
  };
  const onScanInsuranceClickFnc = (type: string) => {
    setShowInsuranceComponent(true);
    updateServiceRecordDrawerState('insuranceProductUploadType', type);
    updateServiceRecordDrawerState('productDetailsProductId', product_id);
    // onInsuranceUploadType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onFileUploadInsurance = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'insurance');
    setOpenInsuranceDrawer(false);
  };
  const handleDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const handleCloseChooseProductDrawer = () => {
    getChooseProductDrawerUpdate(false);
    getCurrantDrawerUpdate(1);
    clearExternalDocumentState();
    clearScan();
    if (
      externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage ||
      externalDocumentProductDetails?.extended_warranty_details?.extended_start_date ||
      externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage_type ||
      externalDocumentProductDetails?.extended_warranty_details?.warranty_document_url.length > 0
    ) {
      enqueueSnackbar(`Data will not be saved`, {
        variant: 'error',
      });
    } else if (
      externalDocumentProductDetails?.insurance_details?.insurance_coverage ||
      externalDocumentProductDetails?.insurance_details?.insurance_coverage_type ||
      externalDocumentProductDetails?.insurance_details?.insurance_document_url.length > 0 ||
      externalDocumentProductDetails?.insurance_details?.insurance_purchased_on ||
      externalDocumentProductDetails?.insurance_details?.insurer_name ||
      externalDocumentProductDetails?.insurance_details?.policy_no
    ) {
      enqueueSnackbar(`Data will not be saved`, {
        variant: 'error',
      });
    } else if (
      externalDocumentProductDetails?.amc_details?.amc_purchased_on ||
      externalDocumentProductDetails?.amc_details?.amc_coverage ||
      externalDocumentProductDetails?.amc_details?.amc_document_url.length > 0 ||
      externalDocumentProductDetails?.amc_details?.amc_serial_no ||
      externalDocumentProductDetails?.amc_details?.amc_service_provider_name
    ) {
      enqueueSnackbar(`Data will not be saved`, {
        variant: 'error',
      });
    }
  };

  const handleCloseScheduleReminderDrawer = () => {
    updateDrawerState('openScheduleReminderDrawer', false);
    clearState();
  };

  /// reminder

  const [openServiceMaintenance, setOpenServiceMaintenance] = useState(false);
  const [openDrawerPostPone, setOpenDrawerPostPone] = useState(false);
  const [uppendClass, setUppendClass] = useState(false);

  const handleCloseOpenServiceMaintenance = () => {
    setOpenServiceMaintenance(false);
  };

  const handleCloseOpenDrawerPostPone = () => {
    setOpenDrawerPostPone(false);
    clearNoActionRequiredData();
  };

  const handleOpenDrawerPostPone = () => {
    setOpenServiceMaintenance(false);
    setOpenDrawerPostPone(true);
  };

  const handleOpenServicePostpone = () => {
    updateDrawerState('openServicePostpone', false);
    updateDrawerState('openPostponeServiceDate', true);
  };

  const handleUpdateDatePostPoneServiceApi = () => {
    updateServicePostponeData('service_date', moment(new Date()).add(2, 'days').format('YYYY-MM-DD'));
    updatePostponeServiceApi();
    getDisplayActionRequired(product_id);
  };

  const handleUpdatePostponeServiceApi = () => {
    if (servicePostponeData?.service_date === '') {
      enqueueSnackbar(`Fill all the mandatory fields`, {
        variant: 'error',
      });
    } else updatePostponeServiceApi();
    getDisplayActionRequired(product_id);
  };

  const handleClosePostPoneService = () => {
    updateDrawerState('openPostponeServiceDate', false);
  };

  const handleServiceUpdate = (val: any) => {
    updateServiceRecordDrawerState('openServiceRecordDrawer', true);
    updateServiceRecordDrawerState('scheduler_id', val?.schedules_id);
  };
  const handleUpdate = (val: any) => {
    setOpenServiceMaintenance(true);
    updateDrawerState('actionRequiredData', val);
    updateNoActionRequired('warranty_id', val?.warranty_id)
    updateNoActionRequired('insurance_id', val?.insurance_id)
    updateNoActionRequired('amc_id', val?.amc_id)
  };

  // no action required fun
  const handleUpdateNoActionRequired = () => {
    updateNoActionRequiredApi(() => {
      setOpenDrawerPostPone(false)
      clearNoActionRequiredData()
      getDisplayActionRequired(product_id);
    })
  }

  const goToScheduleService = (val: any) => {
    navigate(webRoutes.chooseServiceProviders + '?id=' + val?.user_product_id);
  };

  const handleServiceNotComplete = (val: any) => {
    updateDrawerState('openServicePostpone', true);
    updateServicePostponeData('scheduler_id', val?.schedules_id);
    updateServicePostponeData('is_postponed', true);
  };

  const handleScheduleUpdate = (val: any) => {
    updateDrawerState('openScheduleReminderDrawer', true);
    updateServiceReminderData('user_product_id', val?.user_product_id);
    updateDrawerState('isShowAmc', val?.is_amc_applicable);
  };

  // const onServiceInvoiceFnc = (type: string) => {
  //   updateServiceRecordDrawerState('openServiceRecordDrawer', false)
  //   setShowComponent(true);
  //   onServiceType(type);
  // };

  const handleOpenRecordDrawer = () => {
    setOpenServiceMaintenance(false);
    if (actionRequiredData?.warranty_valid_to) {
      getChooseProductDrawerUpdate(true);
      getChooseProductUpdate(actionRequiredData);
      updateProductId(actionRequiredData?.user_product_id);
      getCurrantDrawerUpdate(3);
    } else if (actionRequiredData?.insurance_valid_to) {
      getChooseProductDrawerUpdate(true);
      getChooseProductUpdate(actionRequiredData);
      updateProductId(actionRequiredData?.user_product_id);
      getCurrantDrawerUpdate(4);
    } else if (actionRequiredData?.amc_valid_to) {
      getChooseProductDrawerUpdate(true);
      getChooseProductUpdate(actionRequiredData);
      updateProductId(actionRequiredData?.user_product_id);
      getCurrantDrawerUpdate(5);
    }
  };

  // external

  const handleChangeNextValue = (number: number, value: chooseProductData) => {
    getCurrantDrawerUpdate(number);
    getChooseProductUpdate(value);
    updateProductId(value?.user_product_id);
  };

  const handleUpdateExWarrantyDocument = () => {
    updateExtWarrantyDocument(() => {
      getProductDetails(product_id);
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearExternalDocumentState();
      clearScan();
      getDisplayActionRequired(product_id);
    });
  };
  const handleUpdateInsuranceDocument = () => {
    updateInsuranceDocument(() => {
      getProductDetails(product_id);
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearExternalDocumentState();
      clearScan();
      getDisplayActionRequired(product_id);
    });
  };
  const handleUpdateAmcDocument = () => {
    updateAmcDocument(() => {
      getProductDetails(product_id);
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearExternalDocumentState();
      clearScan();
      getDisplayActionRequired(product_id);
    });
  };

  const handleUpdateInvoiceDocument = () => {

    updateInvoiceDocument([], uploadFile, () => {
      getProductDetails(product_id);
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearScan();
    });
    // getDisplayActionRequired(product_id);
  };

  const getUpdateActionRequired = () => {
    getDisplayActionRequired(product_id);
  };

  const handleUpdateMandatory = () => {
    enqueueSnackbar(`Fill all the fields to save the details`, {
      variant: 'error',
    });
  };

  const onServiceInvoiceFnc = (type: string) => {
    updateServiceRecordDrawerState('openServiceRecordDrawer', false);
    setShowComponent(true);
    updateServiceRecordDrawerState('serviceProductUploadType', type);
    updateServiceRecordDrawerState('productDetailsProductId', product_id);
    // onServiceType(type);
  };

  const onRouteGallery = () => {
    navigate('/uploadedgallery', {
      state: {
        drawerProductId: product_id,
      },
    });
  };

  const { getCategory } = addProductDetails();

  const breaks = [
    {
      value: 1,
      label: 'Warranty, Insurance & AMC',
      width: '100%',
    },
    {
      value: 2,
      label: 'Maintenance',
      width: '67%',
    },
  ];

  // //for primary provider service
  // const onUpdatePrimaryService = () => {
  //   updateDrawerStatePrimary('openPrimaryServiceDrawer', true);
  // };

  const openRecordDrawer = () => {

    track('When user schedules service from the App', { name: 'customer-app' })

    updateServiceRecordDrawerState('openServiceRecordDrawer', true);
    updateServiceRecordDrawerState('openServiceRecordType', true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateExpandAddProductBtn(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onOpenInfoDrawer = () => {
    setOpenDrawer(true);
  };


  const onMoreClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleArchiveDrawer = () => {
    setArchiveDrawer(true);
    activityLogClose();
  };

  const activityLogClose = () => {
    setAnchorEl(null);
  };

  const navigateDocumentPage = () => {
    navigate(`/viewProductDocument/${product_id}`);
  };
  const activityLogRouteClick = () => {
    navigate(`/activityLogs/${warrantyDetailsState?.product_details?.product_id}`);
  };

  const onClickServiceHistory = () => {
    navigate(webRoutes.serviceHistory);
  };

  const routeToChatBotProductDetails = async () => {

    // Amplitude Track 
    track('Click on pre-listed question', { name: 'customer-app' })

    const response = await chatBotHistory({
      id: product_details?.product_id || '',
      type: 'product_details',
    })
    // if(response === 200){
    navigate(`/chatBotProductDetails/${warrantyDetailsState?.product_details?.product_id}`);
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

  // const onInsuranceClick = () => {
  //   navigate(`/availableInsurance/${warrantyDetailsState?.product_details?.product_id}`);
  // };

  // const onExtendedWarrantyClick = () => {
  //   navigate(`/availableWarranty/${product_details?.product_id}`, {
  //     state: {
  //       data: product_details,
  //     },
  //   });
  // };

  const options = [
    {
      value: 'months',
      label: 'Months',
      condition: 61,
    },
    {
      value: 'year',
      label: 'Year',
      condition: 6,
    },
  ];

  const archiveOptionsOne = [
    {
      value: 'Upgraded my product',
      label: 'Upgraded my product',
    },
    {
      value: 'Malfunction/Repair',
      label: 'Malfunction/Repair',
    },
  ];

  const archiveOptionsTwo = [
    {
      value: 'Lost my product',
      label: 'Lost my product',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ];

  const getNextStep = (key: number | undefined) => {
    switch (key) {
      case 1:
        return {
          title: 'Add external documents',
          component: (
            <Box>
              <Typography sx={productDetailsStyle.questionSx}>Choose your product</Typography>
              <Box sx={{ height: 'calc(100vh - 400px)' }}>
                {chooseProductState?.map((val, index) => {
                  return (
                    <AddedProductCard
                      key={index}
                      handleChangeNextState={() => handleChangeNextValue(2, val)}
                      cardLoading={chooseProductLoading}
                      isNavIcon={true}
                      cardDetails={val}
                    />
                  );
                })}
              </Box>
            </Box>
          ),
        };
      case 2:
        return {
          title: 'Add external documents',
          component: (
            <Box>
              <AddedProductCard
                handleChangeBackState={() => getCurrantDrawerUpdate(1)}
                cardLoading={chooseProductLoading}
                ShowChangeText={true}
                isChangeText={true}
                cardDetails={chooseProductDetails}
              />
              <Typography sx={productDetailsStyle.questionSx}>Choose the document, you want to add</Typography>
              {product_details?.is_invoice && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(6)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={productDetailsStyle.extendedSx}
                >
                  <Typography data-testId='invoice' variant="subtitle2" sx={productDetailsStyle.textWarrantySx}>
                    Invoice
                  </Typography>
                  <NevIconProduct />
                </Stack>
              )}
              {product_details?.is_ext_warranty_applicable && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(3)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={productDetailsStyle.extendedSx}
                >
                  <Typography variant="subtitle2" sx={productDetailsStyle.textWarrantySx}>
                    Extended Warranty
                  </Typography>
                  <NevIconProduct />
                </Stack>
              )}
              {product_details?.is_insurance_applicable && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(4)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={productDetailsStyle.extendedSx}
                >
                  <Typography variant="subtitle2" sx={productDetailsStyle.textWarrantySx}>
                    Insurance
                  </Typography>
                  <NevIconProduct />
                </Stack>
              )}
              {product_details?.is_amc_applicable && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(5)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={productDetailsStyle.extendedSx}
                >
                  <Typography variant="subtitle2" sx={productDetailsStyle.textWarrantySx}>
                    AMC
                  </Typography>
                  <NevIconProduct />
                </Stack>
              )}
            </Box>
          ),
        };
      case 3:
        return {
          title: 'Add Warranty Details',
          component: (
            <>
              <Box>
                <AddedProductCard
                  handleChangeBackState={() => getCurrantDrawerUpdate(1)}
                  cardLoading={chooseProductLoading}
                  isChangeText={true}
                  cardDetails={chooseProductDetails}
                />
                <>
                  <Box sx={productDetailsStyle.fileUploadSx}>
                    <Typography sx={productDetailsStyle.uploadTextSx}>
                      Upload Ext Warranty documents by <span>*</span>
                    </Typography>
                    <Box sx={{ pt: '20px', px: '12px' }}>
                      <Box>
                        <UploadDocumentType
                          id={'warranty'}
                          onUploadClick={onUploadClickFnc}
                          onScanClick={() => onScanClickFnc('ext_warranty')}
                          textStyle={{ fontSize: '12px', textAlign: 'center', paddingLeft: '0px' }}
                          circleStyle={{ width: '40px', height: '40px' }}
                          iconStyle={{ width: '24px', height: '24px' }}
                        />
                      </Box>
                      {(uploadFile?.length || 0) > 0 && (
                        <Box mb={2}>
                          {uploadFile?.map((val: any, i: number) => {
                            return (
                              <DocumentUploadComponent
                                key={i}
                                testid="uploadWarrantyDocument"
                                handleDelete={() => handleAmcDeleteClose(i)}
                                file={val}
                              />
                            );
                          })}
                        </Box>
                      )}
                    </Box>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      gap={'8px'}
                      sx={productDetailsStyle.stackFileSx}
                    >
                      <ThunderIcon />
                      <Typography sx={productDetailsStyle.invoiceSx}>
                        Upload document to fetch the below details instantly
                      </Typography>
                    </Stack>
                  </Box>
                  <Box pt={2} pb={2.8}>
                    <CustomTextfield
                      testid="insurerName"
                      value={externalDocumentProductDetails?.extended_warranty_details?.extended_start_date}
                      onChange={(e) => externalDocumentUpdateState('extended_start_date', e.target.value as never)}
                      definitionName="Purchase Date"
                      darkText
                      isRequired
                      placeholder="XXXXXXXXX"
                      variant="dateField"
                    />
                  </Box>
                  <Box>
                    <Stack direction={'row'} gap={'4px'}>
                      <Typography sx={productDetailsStyle.coverageTextSx}>Extended Warranty Coverage</Typography>
                      <Box component="span" sx={{ color: 'error.900' }}>
                        *
                      </Box>
                    </Stack>
                    <WarrantyCoverage
                      testData="warrantyCoverage"
                      value={externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage ?? undefined}
                      toggleValue={
                        externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage_type ?? undefined
                      }
                      onChange={(e) => externalDocumentUpdateState('warranty_coverage', e.target.value as never, 2)}
                      handleToggle={(value: string | number) => {
                        externalDocumentUpdateState('warranty_coverage_type', value as never);
                      }}
                      options={options}
                    />
                  </Box>

                  <Button
                    loading={extWarrantyLoading}
                    onClick={
                      externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage &&
                        externalDocumentProductDetails?.extended_warranty_details?.extended_start_date &&
                        externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage_type &&
                        externalDocumentProductDetails?.extended_warranty_details?.warranty_document_url.length > 0
                        ? () => handleUpdateExWarrantyDocument()
                        : () => handleUpdateMandatory()
                    }
                    sx={productDetailsStyle.btnSx}
                    disabled={
                      (externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage &&
                        externalDocumentProductDetails?.extended_warranty_details?.extended_start_date && externalDocumentProductDetails?.extended_warranty_details?.extended_start_date) ?
                        false : true
                    }
                  >
                    Save
                  </Button>
                </>
              </Box>
            </>
          ),
        };
      case 4:
        return {
          title: 'Add Insurance Details',
          component: (
            <>
              <Box>
                <AddedProductCard
                  handleChangeBackState={() => getCurrantDrawerUpdate(1)}
                  cardLoading={chooseProductLoading}
                  isChangeText={true}
                  cardDetails={chooseProductDetails}
                />
                <>
                  <Box>
                    <Box sx={productDetailsStyle.fileUploadSx}>
                      <Typography sx={productDetailsStyle.uploadTextSx}>
                        Upload insurance documents by <span>*</span>
                      </Typography>
                      <Divider sx={productDetailsStyle.dividerFileSx} />
                      <Box sx={{ pt: '20px', px: '12px' }}>
                        <Box>
                          <UploadDocumentType
                            id="insurance"
                            onUploadClick={onUploadInsuranceClickFnc}
                            onScanClick={() => onScanInsuranceClickFnc('insurance')}
                            textStyle={{ fontSize: '12px', textAlign: 'center', paddingLeft: '0px' }}
                            circleStyle={{ width: '40px', height: '40px' }}
                            iconStyle={{ width: '24px', height: '24px' }}
                          />
                        </Box>
                        {(uploadFile?.length || 0) > 0 && (
                          <Box mb={2}>
                            {uploadFile?.map((val: any, i: number) => {
                              return (
                                <DocumentUploadComponent
                                  key={i}
                                  testid="uploadWarrantyDocument"
                                  handleDelete={() => handleAmcDeleteClose(i)}
                                  file={val}
                                />
                              );
                            })}
                          </Box>
                        )}
                      </Box>
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'8px'}
                        sx={productDetailsStyle.stackFileSx}
                      >
                        <ThunderIcon />
                        <Typography sx={productDetailsStyle.invoiceSx}>
                          Upload document to fetch the below details instantly
                        </Typography>
                      </Stack>
                    </Box>
                    <Box pt={2} pb={1.5}>
                      <CustomTextfield
                        testid="insurerName"
                        value={externalDocumentProductDetails?.insurance_details?.insurer_name}
                        onChange={(e) => externalInsuranceDocumentUpdateState('insurer_name', e.target.value as never)}
                        definitionName="Insurer Name"
                        darkText
                        isRequired
                        placeholder="XXXXXXXXX"
                        type="text"
                      />
                    </Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        testid="policyNumber"
                        value={externalDocumentProductDetails?.insurance_details?.policy_no}
                        onChange={(e) => externalInsuranceDocumentUpdateState('policy_no', e.target.value as never, 15)}
                        definitionName="Policy Number"
                        darkText
                        isRequired
                        placeholder="XXXXXXXXX"
                      />
                    </Box>
                    <Box pb={2.5}>
                      <CustomTextfield
                        testid="purchasedOn"
                        value={externalDocumentProductDetails?.insurance_details?.insurance_purchased_on}
                        onChange={(e) =>
                          externalInsuranceDocumentUpdateState('insurance_purchased_on', e.target.value as never)
                        }
                        definitionName="Start Date"
                        darkText
                        isRequired
                        placeholder="Name"
                        variant="dateField"
                      />
                    </Box>
                    <Box>
                      <Stack direction={'row'} gap={'4px'}>
                        <Typography sx={productDetailsStyle.coverageTextSx}>Insurance Coverage</Typography>
                        <Box component="span" sx={{ color: 'error.900' }}>
                          *
                        </Box>
                      </Stack>
                      <WarrantyCoverage
                        testData="insuranceCoverage"
                        value={externalDocumentProductDetails?.insurance_details?.insurance_coverage ?? undefined}
                        toggleValue={
                          externalDocumentProductDetails?.insurance_details?.insurance_coverage_type ?? undefined
                        }
                        onChange={(e) =>
                          externalInsuranceDocumentUpdateState('insurance_coverage', e.target.value as never, 2)
                        }
                        handleToggle={(value: string | number) => {
                          externalInsuranceDocumentUpdateState('insurance_coverage_type', value as never);
                        }}
                        options={options}
                      />
                    </Box>
                  </Box>

                  <Button
                    loading={insuranceLoading}
                    onClick={
                      externalDocumentProductDetails?.insurance_details?.insurance_coverage &&
                        externalDocumentProductDetails?.insurance_details?.insurance_coverage_type &&
                        externalDocumentProductDetails?.insurance_details?.insurance_document_url.length > 0 &&
                        externalDocumentProductDetails?.insurance_details?.insurance_purchased_on &&
                        externalDocumentProductDetails?.insurance_details?.insurer_name &&
                        externalDocumentProductDetails?.insurance_details?.policy_no
                        ? () => handleUpdateInsuranceDocument()
                        : () => handleUpdateMandatory()
                    }
                    sx={productDetailsStyle.btnSx}
                    disabled={
                      (externalDocumentProductDetails?.insurance_details?.insurance_coverage &&
                        externalDocumentProductDetails?.insurance_details?.policy_no &&
                        externalDocumentProductDetails?.insurance_details?.insurer_name &&
                        externalDocumentProductDetails?.insurance_details?.insurance_purchased_on) ?
                        false : true
                    }
                  >
                    Save
                  </Button>

                </>
              </Box >
            </>
          ),
        };
      case 5:
        return {
          title: 'Add AMC Details',
          component: (
            <>
              <Box>
                <AddedProductCard
                  handleChangeBackState={() => getCurrantDrawerUpdate(1)}
                  cardLoading={chooseProductLoading}
                  isChangeText={true}
                  cardDetails={chooseProductDetails}
                />
                <>
                  <Box>
                    <Box mb={1.5} sx={productDetailsStyle.fileUploadSx}>
                      <Typography sx={productDetailsStyle.uploadTextSx}>
                        Upload AMC documents by <span>*</span>
                      </Typography>
                      <Divider sx={productDetailsStyle.dividerFileSx} />
                      <Box sx={{ pt: '20px', px: '12px' }}>
                        <Box>
                          <UploadDocumentType
                            id={'amc'}
                            onUploadClick={onUploadAmcClickFnc}
                            onScanClick={() => onScanAmcClickFnc('amc')}
                            textStyle={{ fontSize: '12px', textAlign: 'center', paddingLeft: '0px' }}
                            circleStyle={{ width: '40px', height: '40px' }}
                            iconStyle={{ width: '24px', height: '24px' }}
                          />
                        </Box>

                        {(uploadFile?.length || 0) > 0 && (
                          <Box mb={2}>
                            {uploadFile?.map((val: any, i: number) => {
                              return (
                                <DocumentUploadComponent
                                  key={i}
                                  testid="uploadWarrantyDocument"
                                  handleDelete={() => handleAmcDeleteClose(i)}
                                  file={val}
                                />
                              );
                            })}
                          </Box>
                        )}
                      </Box>
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'8px'}
                        sx={productDetailsStyle.stackFileSx}
                      >
                        <ThunderIcon />
                        <Typography sx={productDetailsStyle.invoiceSx}>
                          Upload document to fetch the below details instantly
                        </Typography>
                      </Stack>
                    </Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        value={externalDocumentProductDetails?.amc_details?.amc_service_provider_name}
                        onChange={(e) =>
                          externalAmcDocumentUpdateState('amc_service_provider_name', e.target.value as never, 15)
                        }
                        definitionName="Service Provider Name"
                        darkText
                        isRequired
                        placeholder="Provider Name"
                      />
                    </Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        value={externalDocumentProductDetails?.amc_details?.amc_serial_no}
                        onChange={(e) => externalAmcDocumentUpdateState('amc_serial_no', e.target.value as never, 15)}
                        definitionName="Serial Number"
                        darkText
                        isRequired
                        placeholder="XXXXXXXXX"
                      />
                    </Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        definitionName="AMC Coverage"
                        darkText
                        handleIncrement={() =>
                          externalAmcDocumentUpdateState(
                            'amc_coverage',
                            (externalDocumentProductDetails?.amc_details?.amc_coverage + 1) as never,
                          )
                        }
                        handleDecrement={() =>
                          externalDocumentProductDetails?.amc_details?.amc_coverage > 0
                            ? externalAmcDocumentUpdateState(
                              'amc_coverage',
                              (externalDocumentProductDetails?.amc_details?.amc_coverage - 1) as never,
                            )
                            : null
                        }
                        yearText="Year"
                        isRequired
                        variant="addYear"
                        yearValue={externalDocumentProductDetails?.amc_details?.amc_coverage}
                      />
                    </Box>
                    <Box>
                      <CustomTextfield
                        value={externalDocumentProductDetails?.amc_details?.amc_purchased_on}
                        onChange={(e) => externalAmcDocumentUpdateState('amc_purchased_on', e.target.value as never)}
                        definitionName="Start Date"
                        darkText
                        isRequired
                        placeholder="Name"
                        variant="dateField"
                      />
                    </Box>
                  </Box>
                  <Box pt={2}>
                    <Button
                      loading={amcLoading}
                      onClick={
                        externalDocumentProductDetails?.amc_details?.amc_purchased_on &&
                          externalDocumentProductDetails?.amc_details?.amc_coverage &&
                          externalDocumentProductDetails?.amc_details?.amc_document_url.length > 0 &&
                          externalDocumentProductDetails?.amc_details?.amc_serial_no &&
                          externalDocumentProductDetails?.amc_details?.amc_service_provider_name
                          ? () => handleUpdateAmcDocument()
                          : () => handleUpdateMandatory()
                      }
                      sx={productDetailsStyle.btnSx}
                      disabled={
                        externalDocumentProductDetails?.amc_details?.amc_purchased_on &&
                          externalDocumentProductDetails?.amc_details?.amc_coverage &&
                          externalDocumentProductDetails?.amc_details?.amc_serial_no &&
                          externalDocumentProductDetails?.amc_details?.amc_service_provider_name ?
                          false : true
                      }
                    >
                      Save
                    </Button>
                  </Box>
                </>
              </Box>
            </>
          ),
        };
      case 6:
        return {
          title: 'Add invoice document',
          component: (
            <>
              <Box>
                <AddedProductCard
                  handleChangeBackState={() => getCurrantDrawerUpdate(1)}
                  cardLoading={chooseProductLoading}
                  isChangeText={true}
                  cardDetails={chooseProductDetails}
                />
                <>
                  <Box>
                    <Box mb={1.5} sx={productDetailsStyle.fileUploadSx}>
                      <Typography sx={productDetailsStyle.uploadTextSx}>
                        Upload Invoice documents by <span>*</span>
                      </Typography>
                      <Divider sx={productDetailsStyle.dividerFileSx} />
                      <Box sx={{ pt: '20px', px: '12px' }}>
                        <Box>
                          <UploadDocumentType
                            id={'invoice'}
                            onUploadClick={onUploadinvoiceClickFnc}
                            onScanClick={() => onScanInvoiceClickFnc('invoice')}
                            textStyle={{ fontSize: '12px', textAlign: 'center', paddingLeft: '0px' }}
                            circleStyle={{ width: '40px', height: '40px' }}
                            iconStyle={{ width: '24px', height: '24px' }}
                          />
                        </Box>

                        {(uploadFile?.length || 0) > 0 && (
                          <Box mb={2}>
                            {uploadFile?.map((val: any, i: number) => {
                              return (
                                <DocumentUploadComponent
                                  key={i}
                                  testid="uploadWarrantyDocument"
                                  handleDelete={() => handleAmcDeleteClose(i)}
                                  file={val}
                                />
                              );
                            })}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    loading={invoiceLoading}
                    onClick={handleUpdateInvoiceDocument}
                    sx={productDetailsStyle.btnSx}>
                    Save
                  </Button>
                </>
              </Box>
            </>
          ),
        };
    }
  };

  const getDetails = getNextStep(currantDrawer);

  const ConstructProductSpecification = (data: { [key: string]: any }): { title: string; value: string }[] => {
    // data.model_no = 'dummyNumber';
    const arr: { title: string; value: string }[] = [];
    Object?.keys(data)?.map((key) =>
      typeof data[key] === 'string'
        ? arr?.push({ title: ConstructTitle(key), value: data[key] })
        : typeof data[key] === 'object'
          ? Object?.keys(data[key] || [])?.map((key_) =>
            typeof data[key][key_] === 'string' ? arr?.push({ title: key_, value: data[key][key_] }) : null,
          )
          : null,
    );
    return arr.filter((val) => val.title !== 'Serial Number' && val.title !== 'Invoice Document');
  };

  const ConstructTitle = (name: string) => {
    return name === 'product_name'
      ? 'Product Name'
      : name === 'product_serial_no'
        ? 'Serial Number'
        : name === 'invoice_document_url'
          ? 'Invoice Document'
          : name === 'model_no'
            ? 'Model Number'
            : name === 'invoice_no'
              ? 'Invoice Number'
              : name;
  };

  const goToServiceProvider = () => {
    navigate(webRoutes.chooseServiceProviders + '?id=' + product_id);
  };

  const goToPreferredServiceProvider = () => {
    navigate(webRoutes.manageServiceProviders + '?id=' + product_id);
    // updateDrawerStatePrimary('openPrimaryServiceDrawer', false);
  };

  const editProductDetials = () => {
    setAnchorEl(null);
    setEditDetails(true);
  };

  const handleImeiDrawerOpen = () => {
    getCategory(() => {
      setDrawerImeiOpen(true);
    });
  };

  const handleSerialDrawerOpen = () => {
    getCategory(() => {
      setDrawerSerialOpen(true);
    });
  };

  const handleDialPadClick = () => {
    window.open(`tel:${'*#06#'}`);
  };

  const updateEditProductDetailsFunc = () => {
    updateEditProductDetails(() => {
      getProductDetails(product_id);
      setEditDetails(false);
    });
  };

  const serialNumber = () => {
    setOpenQr(true);
    // setOpenImei(false)
  };

  const onQrScanClick = (val: number, type: string) => {
    setShow(true);
    onScanType(type);
    onUpdateSerialNo(val);
  };

  const onCaptureClick = (val: any) => {
    updateEditSerialNo('product_serial_no', val, serialIndex);
  };

  const onScanAmcClickFunc = (type: string) => {

    setAmcUpdateComponent(true);
    onAmcDrawerUpdate(type);
  };

  // Amc Card Drawer
  const onUploadAmcClick = (val: any) => {
    onUploadCaptureFile(val);
    setAmcUpdateComponentDrawer(true);
  };
  const onScanAmcClick = (type: string) => {
    setAmcUpdateComponent(true);
    onAmcDrawerType(type);
  };

  const handleClickAdvanced = () => {
    setShow(false);
    // setOpenCamera(true);
    clearSerialNo();
  };

  const amcFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'amc');
    setAmcUpdateComponentDrawer(false);
  };
  const amcDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const onBackRoute = () => {
    navigate(`/productDetails/${product_id}`);
    setShowComponent(false);
    setShowAmcComponent(false);
    setShowInsuranceComponent(false);
    setAmcUpdateComponent(false);
    setInsuranceUpdateComponent(false);
    setExtendedUpdateComponent(false);
  };

  const onBackRouteSerialNumber = () => {
    setShow(false);
  };

  const handleOpenChooseProductDrawer = () => {
    getChooseProductDrawerUpdate(true);
    getChooseProductUpdate(product_details);
    updateProductId(product_details?.product_id);
    getCurrantDrawerUpdate(2);
  };


  // extended Card Drawer 
  const onScanExtendedClick = (type: string) => {

    setExtendedUpdateComponent(true);
    onExtendedDrawerType(type)
  }
  const onUploadExtendedClick = (val: any) => {

    onUploadCaptureFile(val);
    setExtendedUpdateComponentDrawer(true);
  }

  const handleDeleteExtended = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const fileUploadExtended = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'ext_warranty');
    setExtendedUpdateComponentDrawer(false);
  };


  const onScanInsuranceClickFncs = (type: string) => {

    setInsuranceUpdateComponent(true);
    onInsuranceUpdateType(type);
  };
  // insurance Card Drawer
  const onUploadInsuranceClick = (val: any) => {
    onUploadCaptureFile(val);
    setInsuranceUpdateComponentDrawer(true);
  };
  const onScanInsuranceClick = (type: string) => {

    setInsuranceUpdateComponent(true);
    onInsuranceDrawerType(type);
  };

  const fileUploadInsurance = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'insurance');
    setInsuranceUpdateComponentDrawer(false);
  };
  const handleDeleteInsurance = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };


  const handleArchiveProduct = () => {
    if ((archiveProductData?.type?.length || 0) > 0) {
      updateArchiveProduct(product_id ?? '');
      setArchiveDrawer(false);
      clearArchiveState();
      navigate(webRoutes.home);
    }
  };

  const handleCloseArchiveDrawer = () => {
    setArchiveDrawer(false);
    clearArchiveState();
  };
  const isButtonDisabled = !(
    edit_product_details?.nick_name?.length || product_details?.nick_name?.length &&
    edit_product_details?.date_of_purchase?.length || product_details?.date_of_purchase?.length &&
    edit_product_details?.product_serial_no?.length || product_details?.product_serial_no?.length &&
    edit_product_details?.mode_of_purchase?.length || product_details?.mode_of_purchase?.length
  );


  useEffect(() => {
    if (product_id) {
      getProductDetails(product_id);
    }
  }, [product_id]);

  useEffect(() => {
    if (product_id) {
      getMaintenanceDetails(product_id);
    }
  }, [product_id]);

  useEffect(() => {
    getDisplayActionRequired(product_id);
  }, [product_id]);

  useEffect(() => {
    const cardData: any = [];
    Object?.entries(actionRequiredState)?.map((v) => {
      return v?.[1]?.length > 0
        ? [
          ...v?.[1]?.map((c: any) => {
            return cardData.push({ ...c, [v[0]]: true });
          }),
        ]
        : [];
    });
    setdata(cardData);
  }, [actionRequiredState]);

  useEffect(() => {
    getOfferDetails();
  }, []);


  // Amplitude tracking
  useEffect(() => {
    track('Product detail page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <>
      {show ? (
        <>
          <Box position="relative">
            <ScreenLayout
              title="Scan Serial Number"
              backRequired
              useBackBtnClick
              onBackBtnClick={onBackRouteSerialNumber}
              childrenStyle={{
                ...productDetailsStyle.screenlayoutSx,
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
                    ...productDetailsStyle.homeSx,
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
          {showComponent ||
            showAmcComponent ||
            showInsuranceComponent ||
            amcUpdateComponent ||
            extendedUpdateComponent ||
            insuranceUpdateComponent ? (
            <>
              <CaptureImage
                backRequired
                useBackBtnClick
                onBackBtnClick={onBackRoute}
                dataURIs={dataURIs}
                onGalleryGo={onRouteGallery}
                UploadImage={(val: string) => onUpdateCaptureImage(val)}
              />
            </>
          ) : (
            <Box bgcolor="primary.900">
              <Box pt={2} px={2.5}>
                <PageHeader
                  showIcon
                  useBackBtnClick
                  onBackBtnClick={() => navigate(webRoutes?.home)}
                  // showShareIcon={is_primary_service_provider}
                  showMoreIcon
                  icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                  moreIcon={<MoreIcon />}
                  // rootStyle={{ color: 'grey.200' }}
                  onMoreClick={onMoreClick}
                  // shareIcon={<PhoneIcon onClick={() => onUpdatePrimaryService()} />}
                  header
                  headerText="Product Details"
                />
              </Box>
              <Box px={2.5}>
                <ProductProfile
                  onScanInsuranceClick={() => onScanInsuranceClick('insurance')}
                  onUploadInsuranceClick={onUploadInsuranceClick}
                  onScanAmcClick={() => onScanAmcClick('amc')}
                  onUploadAmcClick={onUploadAmcClick}
                  documentShown={
                    <>
                      {(uploadFile?.length || 0) > 0 && (
                        <Box mt={2}>
                          {uploadFile?.map((val: any, i: number) => {
                            return (
                              <DocumentUploadComponent
                                key={i}
                                handleDelete={() => handleAmcDeleteClose(i)}
                                file={val}
                              />
                            );
                          })}
                        </Box>
                      )}
                    </>
                  }
                  skelton={productDetailsLoading}
                  onInfoClick={() => onOpenInfoDrawer()}
                  navigateViewProduct={navigateDocumentPage}
                  productProfiles={warrantyDetailsState}
                  productImage={
                    product_details?.image_url ??
                    `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`
                  }
                  productName={product_details?.nick_name}
                  serialNumber={product_details?.product_serial_no}
                  purchaseText={`${`Purchased on ${moment(product_details?.date_of_purchase).format('DD MMM YY')}`}`}
                />
              </Box>
              <Box
                pt={1.5}
                sx={{
                  marginTop: '20px',
                  bgcolor: 'background.surface.B500',
                  borderTopRightRadius: '24px',
                  borderTopLeftRadius: '24px',
                }}
              >
                {data?.length > 0 && (
                  <Box pt={1}>
                    <Box px={2.5} py={1}>
                      <Typography sx={{ color: 'text.A100' }} variant="subtitle2" fontWeight={700}>
                        Actions Required
                      </Typography>
                    </Box>
                    <Box sx={productDetailsStyle.actionRequiredRootSx}>
                      <ActionRequiredCard
                        skelton={actionCardLoading}
                        handleServiceUpdate={handleServiceUpdate}
                        handleUpdate={handleUpdate}
                        goToScheduleService={goToScheduleService}
                        handleServiceNotComplete={handleServiceNotComplete}
                        handleScheduleUpdate={handleScheduleUpdate}
                        id={product_id}
                        cardStyle={{ width: '171px' }}
                        rootStyle={{
                          display: 'flex',
                          flexDirection: 'row',
                          minWidth: '375px',
                          minHeight: '188px',
                          width: '100%',
                          gap: '15px',
                          paddingRight: '20px',
                          pl: 2.5,
                        }}
                      />
                    </Box>
                  </Box>
                )}
                <Box sx={productDetailsStyle.scheduleServiceContainer}>
                  <Grid spacing={2} container>
                    <Grid item xs={6}>
                      <ScheduleServiceCard
                        sx={{ '& .MuiTypography-root': { padding: '9px 0px' } }}
                        icon={<ScheduleService />}
                        title="Schedule service"
                        ShowNavIcon={true}
                        handleScheduleServiceDrawer={goToServiceProvider}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ScheduleServiceCard
                        data-testId='addProductDocuments'
                        sx={{ '& .MuiTypography-root': { padding: '9px 0px' } }}
                        imgStyle={{ minWidth: '0px', alignSelf: 'center', mt: '5px' }}
                        icon={<ExtendedWarrantyIcon />}
                        title="Add Product Documents"
                        handleScheduleServiceDrawer={handleOpenChooseProductDrawer}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={productDetailsStyle.tabRootSx}>
                  <DataTabs
                    tabStyle={{
                      fontFamily: 'excon',
                    }}
                    tabs={breaks}
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex}
                  />
                  {tabIndex === 1 ? (
                    <>
                      <Box>
                        <CompanyWarrantyCard
                          onScanInsuranceClick={() => onScanInsuranceClickFncs('insurance')}
                          onUploadInsuranceClick={onUploadInsuranceClick}
                          onScanAmcClick={() => onScanAmcClickFunc('amc')}
                          onUploadAmcClick={onUploadAmcClick}
                          onScanExtendedClick={() => onScanExtendedClick('ext_warranty')}
                          onUploadExtendedClick={onUploadExtendedClick}
                          documentShown={
                            <>
                              {(uploadFile?.length || 0) > 0 && (
                                <Box mt={2}>
                                  {uploadFile?.map((val: any, i: number) => {
                                    return (
                                      <DocumentUploadComponent
                                        key={i}
                                        handleDelete={() => handleAmcDeleteClose(i)}
                                        file={val}
                                      />
                                    );
                                  })}
                                </Box>
                              )}
                            </>
                          }
                          companyWarrantyCards={warrantyDetailsState}
                        />
                      </Box>
                    </>
                  ) : (
                    <>
                      {productMaintenance.length > 0 ? (
                        <>
                          <Box py={1.5}>
                            <MaintenanceCard
                              // sx={{ bgcolor: 'background.surface.100' }}
                              maintenance={productMaintenance?.slice(0, 3)}
                            />
                          </Box>
                          <Box py={1} onClick={() => onClickServiceHistory()}>
                            <Typography data-testid="seeAllServices" sx={productDetailsStyle.seeAllServicesTextSx}>
                              {`See all ${productMaintenance.length} Services`}
                            </Typography>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Stack padding="20px" direction={'column'} alignItems={'center'} justifyContent={'center'}>
                            <MaintenanceEmptyState />
                            <Typography sx={{ color: 'text.A100' }} mt={1} fontWeight="600" variant="subtitle2">
                              No service record found
                            </Typography>
                            <Typography mt={1.7} sx={productDetailsStyle.subTitleTextSx}>
                              Add your service records for better documentation
                            </Typography>
                          </Stack>
                          <Box sx={productDetailsStyle.btnBoxSx}>
                            <Button
                              data-testid="addServiceRecord"
                              sx={productDetailsStyle.btnsSx}
                              onClick={() => openRecordDrawer()}
                            >
                              <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'6px'}>
                                <NewAddIcon />
                                <Typography>Add Service Record</Typography>
                              </Stack>
                            </Button>
                          </Box>
                        </>
                      )}
                    </>
                  )}
                </Box>

                <Box sx={productDetailsStyle.fixedBotSx}>
                  <Box sx={{ position: 'relative' }}>
                    <Box sx={uppendClass ? productDetailsStyle.chatIconSx : productDetailsStyle.chatRotateIconSx}>
                      <Container
                        sx={{
                          maxWidth: { sm: '425px', xs: '425px', md: '425px' },
                          display: 'flex',
                          justifyContent: 'end',
                        }}
                      >
                        <Box
                          onClick={() => routeToChatBotProductDetails()}
                          sx={uppendClass ? productDetailsStyle.botSx : productDetailsStyle.botRotateSx}
                        >
                          {
                            uppendClass ?
                              <ChatBotIcon />
                              :
                              <ChatBotCutIcon rootStyle={productDetailsStyle.botIconMoveSx} />
                          }
                        </Box>
                        {expandAddProductBtn && (
                          <Box sx={{ position: 'relative' }}>
                            <Box sx={productDetailsStyle.chatTextSx}>
                              <Box sx={productDetailsStyle.bubbleTextSx}>
                                <Typography>Ask me anything about your Product</Typography>
                              </Box>
                            </Box>
                            <Box sx={productDetailsStyle.bubbleArrowSx}>
                              <BubbleArrow rootStyle={{ color: 'background.surface.C200' }} />
                            </Box>
                          </Box>
                        )}
                      </Container>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {openDrawer && (
            <DrawerComponent
              heightStyle={{ p: 0 }}
              borderBottom
              showHeader={true}
              open={openDrawer}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText="Product Specification"
                  onClose={() => setOpenDrawer(false)}
                />
              }
            >
              <SpecificationCard
                valueTextStyle={{
                  width: '250px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                copyIconShown
                spectificationTextStyle={{ p: 0 }}
                specification={ConstructProductSpecification(product_specification) ?? []}
                paddingStyle
              />
            </DrawerComponent>
          )}
          {
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              sx={productDetailsStyle.menuSx}
              anchorEl={anchorEl}
              open={open}
              onClose={() => activityLogClose()}
            >
              <MenuItem
                data-testid="archiveProduct"
                sx={productDetailsStyle.menuItemSx}
                onClick={() => handleArchiveDrawer()}
              >
                <ArchiveProductIcon />
                Archive Product
              </MenuItem>
              <MenuItem
                data-testid="editDetails"
                sx={productDetailsStyle.menuItemSx}
                onClick={() => editProductDetials()}
              >
                &nbsp;&nbsp;
                <PenIcon /> &nbsp; Edit Details
              </MenuItem>
              <MenuItem
                data-testid="ManageServiceProvider"
                sx={productDetailsStyle.menuItemSx}
                onClick={goToPreferredServiceProvider}
              >
                &nbsp;
                <IconSetting />
                Manage Service Providers
              </MenuItem>
              <MenuItem sx={productDetailsStyle.menuItemSx} onClick={() => activityLogRouteClick()}>
                <ActivityLogIcon />
                Activity Log
              </MenuItem>
            </Menu>
          }

          {archiveDrawer && (
            <DrawerComponent
              borderBottom
              showHeader={true}
              open={archiveDrawer}
              headerComponent={<ModalHeader showHeader={true} headerText="Archive Product" />}
              footer
              footerComponent={
                <FooterButtonComponent
                  handleClickPrevious={() => handleCloseArchiveDrawer()}
                  handleClickNext={() => handleArchiveProduct()}
                  showLeftBtn={true}
                  showRightBtn={true}
                  leftButton="No, Cancel"
                  rightButton="Yes, Archive"
                  paddingTopRemove
                  disabled={(archiveProductData?.type?.length || 0) > 0 ? false : true}
                />
              }
            >
              <Box>
                <Typography sx={productDetailsStyle.remarksText}>
                  Remarks <Box component="span">*</Box>
                </Typography>
                <Box>
                  <ToggleButton
                    value={archiveProductData?.type ?? ''}
                    sx={{ mb: 2 }}
                    fullResponse={true}
                    onChange={(val: any) => updateArchiveProductData('type', val?.value)}
                    options={archiveOptionsOne}
                  />
                  <ToggleButton
                    value={archiveProductData?.type ?? ''}
                    sx={{ mb: 2 }}
                    fullResponse={true}
                    onChange={(val: any) => updateArchiveProductData('type', val?.value)}
                    options={archiveOptionsTwo}
                  />
                  {archiveProductData?.type === 'Others' && (
                    <Input
                      data-testid="text"
                      placeholder="Type here..."
                      value={archiveProductData?.otherDescription}
                      onChange={(e) => updateArchiveProductData('otherDescription', e.target.value)}
                      minRows={'3'}
                      multiline={true}
                    />
                  )}
                </Box>
              </Box>
            </DrawerComponent>
          )}

          {editDetails && (
            <DrawerComponent
              heightStyle={{ p: 0 }}
              borderBottom
              showHeader={true}
              open={editDetails}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText="Edit Product Details"
                  onClose={() => setEditDetails(false)}
                />
              }
            >
              <Box sx={{ px: 2, py: 2 }}>
                <CustomTextfield
                  textFieldStyle={{ mb: 1.5 }}
                  testid="nickName1"
                  definitionName="Nick Name"
                  isRequired
                  variant="textField"
                  value={edit_product_details?.nick_name}
                  onChange={(e) => editProductDetails('nick_name', e.target.value as never)}
                />
                <CustomTextfield
                  textFieldStyle={{ mb: 1 }}
                  testid="dateOfPurchase1"
                  definitionName="Date Of Purchase"
                  isRequired
                  maxDate={maxDate}
                  variant="dateField"
                  value={edit_product_details?.date_of_purchase}
                  onChange={(e) => editProductDetails('date_of_purchase', e.target.value as never)}
                />

                {/* Serial Number */}
                <Box
                  data-testid="findTheSerialNumber"
                  onClick={() => handleSerialDrawerOpen()}
                  sx={productDetailsStyle.searchBoxSx}
                >
                  <Box>
                    <SearchIconColor />
                  </Box>
                  <Typography sx={productDetailsStyle.typeSx}>{`Where to find Serial Number?`}</Typography>
                </Box>
                {/* <CustomTextfield
                  testid="serialNumber"
                  textFieldStyle={{ mb: 2 }}
                  definitionName={edit_product_details?.serial_no?.title}
                  isRequired
                  variant="textField"
                  placeholder={edit_product_details?.serial_no?.title}
                  value={edit_product_details?.product_serial_no}
                  onChange={(e) => editProductDetails('product_serial_no', e.target.value)}
                /> */}

                <SerialNumber
                  open={openQr}
                  setOpen={() => serialNumber()}
                  value={edit_product_details?.product_serial_no}
                  updateSerialNo={(e: any) => editProductDetails('product_serial_no', e.target.value as never)}
                  onScanCameraClick={() => onQrScanClick(serialIndex, 'product_serial_no')}
                  variant="textField"
                  definitionName="Serial Number"
                  placeholder="Serial Number"
                  serialText="Scan Serial Number"
                  index={serialIndex}
                />

                {/* imei Number */}

                {edit_product_details?.category_type_name === 'Mobile' ||
                  edit_product_details?.category_type_name === 'Tablet' ? (
                  <Box>
                    <Box
                      data-testid="findTheSerialNumber"
                      sx={productDetailsStyle.searchBoxSx}
                    >
                      <Box>
                        <SearchIconColor />
                      </Box>
                      <Typography sx={productDetailsStyle.typeSx} onClick={() => handleImeiDrawerOpen()}>
                        {/* ${productDetails.category.serial_no.title} */}
                        {`Where to find IMEI Number ?`}
                      </Typography>
                    </Box>
                    <SerialNumber
                      value={edit_product_details?.imei_no}
                      updateSerialNo={(e: any) => {
                        editProductDetails('imei_no', e.target.value as never);
                      }}
                      variant="textField"
                      definitionName="IMEI Number"
                      placeholder="IMEI Number"
                      serialText="Scan IMEI Number"
                      index={serialIndex}
                    />
                  </Box>
                ) : null}

                <ModeOfPurchase
                  sx={{ pb: 1 }}
                  modeTitle="Mode of Purchase"
                  isRequired={true}
                  mode={edit_product_details?.mode_of_purchase}
                  handleChange={(mode) => editProductDetails('mode_of_purchase', mode as never)}
                  location={edit_product_details?.purchase_location}
                  handleLocation={(location) => editProductDetails('purchase_location', location as never)}
                />
                <Box py={1}>
                  <Button
                    sx={productDetailsStyle.drawerButtons}
                    fullWidth
                    disabled={isButtonDisabled}
                    onClick={() => updateEditProductDetailsFunc()}
                  >
                    Update
                  </Button>
                </Box>
              </Box>
            </DrawerComponent>
          )}

          {/*Find serial Number */}
          {
            <DrawerComponent
              heightStyle={{ height: '100%' }}
              borderBottom
              showHeader={true}
              open={drawerSerialOpen}
              footer
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText={`Where to find Serial Number?`}
                  onClose={() => setDrawerSerialOpen(false)}
                />
              }
              footerComponent={
                <Box px={1.5} pb={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ bgcolor: 'text.700', borderRadius: '8px', py: 0.4, width: '150px' }}></Box>
                </Box>
              }
            >
              <Box px={1}>
                <Box px={0.2}>
                  <img src={BarCode} width="100%" alt="serial Number number" />
                </Box>
                <Box>
                  <Typography sx={productDetailsStyle.textSSx}>
                    Locate your device's serial number easily by checking the box label, inspecting the device itself,
                    or navigating to Settings&#62;System&#62;About&#62;Status&#62;Serial No.
                  </Typography>
                </Box>
              </Box>
            </DrawerComponent>
          }

          {/* find Imei number */}
          {
            <DrawerComponent
              heightStyle={{ height: '100%' }}
              borderBottom
              showHeader={true}
              open={drawerImeiOpen}
              footer
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText={`Where to find IMEI Number?`}
                  onClose={() => setDrawerImeiOpen(false)}
                />
              }
              footerComponent={
                <Box px={1.5} pb={1}>
                  <Button
                    sx={productDetailsStyle.drawerButton}
                    fullWidth
                    startIcon={<CallIcon />}
                    onClick={() => handleDialPadClick()}
                  >
                    {/* {`Get your ${productDetails.category.serial_no.title}`} */}
                    {`Get Your IMEI Number`}
                  </Button>
                </Box>
              }
            >
              <Box px={1}>
                <Box px={0.2} pb={1}>
                  <img
                    src={Imes}
                    width="100%"
                    alt="imes number"
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: 'text.A100', fontSize: '12px', mb: 1, fontWeight: 'bold' }}>
                    Check your phone's Settings app.
                  </Typography>
                  <Typography sx={{ color: 'text.A100', fontSize: '12px', pb: 0.3, pl: 1.5 }}>
                    1. Tap About phone.
                  </Typography>
                  <Typography sx={{ color: 'text.A100', fontSize: '12px', pl: 1.5 }}>
                    2. Scroll down until you find "IMEI."
                  </Typography>
                </Box>
              </Box>
            </DrawerComponent>
          }

          {/* extended warranty Drawer */}
          {openChooseProductDrawer && (
            <DrawerComponent
              borderBottom
              showHeader={true}
              open={openChooseProductDrawer}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={extWarrantyLoading || amcLoading || insuranceLoading ? false : true}
                  showHeader={true}
                  headerText={getDetails?.title}
                  onClose={() => handleCloseChooseProductDrawer()}
                />
              }
            >
              {getDetails?.component}
            </DrawerComponent>
          )}

          {/* Add document for my product */}
          <DrawerComponent
            borderBottom
            showHeader={true}
            open={openMyProductDrawer}
            headerComponent={
              <ModalHeader
                icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                showIcon={extWarrantyLoading || amcLoading || insuranceLoading ? false : true}
                showHeader={true}
                headerText={getDetails?.title}
                onClose={() => getMyProductDrawer(false)}
              />
            }
          >
            {getDetails?.component}
          </DrawerComponent>

          {/* warranty file upload */}
          {openDrawers && (
            <DrawerComponent
              borderBottom
              showHeader={true}
              open={openDrawers}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText="Uploaded Files"
                  onClose={() => setOpenDrawers(false)}
                />
              }
            >
              {uploadFile?.map((x: any, i: number) => {
                return (
                  <Box pb={1.5} key={i}>
                    <Box sx={productDetailsStyle.boxSx}>
                      <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
                        {x?.name}
                      </Typography>
                      <Box sx={{ cursor: 'pointer' }} onClick={() => handleWarrantyDeleteClose(i)}>
                        <UploadDeleteIcon />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
              <Box pt={1}>
                <Button
                  sx={productDetailsStyle.updateButtonSx}
                  fullWidth
                  disabled={(uploadFile?.length || 0) > 0 ? false : true}
                  onClick={() => onWarrantyFileUpload()}
                >
                  Update
                </Button>
              </Box>
            </DrawerComponent>
          )}

          {/* insurance drawer */}
          {openInsuranceDrawer && (
            <DrawerComponent
              borderBottom
              showHeader={true}
              open={openInsuranceDrawer}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText="Uploaded Files"
                  onClose={() => setOpenInsuranceDrawer(false)}
                />
              }
            >
              {uploadFile?.map((x: any, i: number) => {
                return (
                  <Box pb={1.5} key={i}>
                    <Box sx={productDetailsStyle.boxSx}>
                      <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
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
                  sx={productDetailsStyle.updateButtonSx}
                  fullWidth
                  disabled={(uploadFile?.length || 0) > 0 ? false : true}
                  onClick={() => onFileUploadInsurance()}
                >
                  Update
                </Button>
              </Box>
            </DrawerComponent>
          )}

          <DrawerComponent
            borderBottom
            showHeader={true}
            open={insuranceUpdateComponentDrawer}
            headerComponent={
              <ModalHeader
                icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                showIcon={true}
                showHeader={true}
                headerText="Uploaded Files"
                onClose={() => setInsuranceUpdateComponentDrawer(false)}
              />
            }
          >
            {uploadFile?.map((x: any, i: number) => {
              return (
                <Box pb={1.5} key={i}>
                  <Box sx={productDetailsStyle.boxSx}>
                    <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
                      {x?.name}
                    </Typography>
                    <Box sx={{ cursor: 'pointer' }} onClick={() => handleDeleteInsurance(i)}>
                      <UploadDeleteIcon />
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Box pt={1}>
              <Button
                sx={productDetailsStyle.updateButtonSx}
                fullWidth
                disabled={(uploadFile?.length || 0) > 0 ? false : true}
                onClick={() => fileUploadInsurance()}
              >
                Update
              </Button>
            </Box>
          </DrawerComponent>

          {/* Invoice */}

          <DrawerComponent
            borderBottom
            showHeader={true}
            open={invoiceDocumentDrawer}
            headerComponent={
              <ModalHeader
                icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                showIcon={true}
                showHeader={true}
                headerText="Uploaded Files"
                onClose={() => setInvoiceDocumentDrawer(false)}
              />
            }
          >
            {uploadFile?.map((x: any, i: number) => {
              return (
                <Box pb={1.5} key={i}>
                  <Box sx={productDetailsStyle.boxSx}>
                    <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
                      {x?.name}
                    </Typography>
                    <Box sx={{ cursor: 'pointer' }} onClick={() => handleInvoiceDeleteClose(i)}>
                      <UploadDeleteIcon />
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Box pt={1}>
              <Button
                sx={productDetailsStyle.updateButtonSx}
                fullWidth
                disabled={(uploadFile?.length || 0) > 0 ? false : true}
                onClick={() => onInvoiceFileUpload()}
                loading={invoiceLoading}
              >
                Update
              </Button>
            </Box>
          </DrawerComponent>

          {/* Amc Drawer */}
          <DrawerComponent
            borderBottom
            showHeader={true}
            open={amcUpdateComponentDrawer}
            headerComponent={
              <ModalHeader
                icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                showIcon={true}
                showHeader={true}
                headerText="Uploaded Files"
                onClose={() => setAmcUpdateComponentDrawer(false)}
              />
            }
          >
            {uploadFile?.map((x: any, i: number) => {
              return (
                <Box pb={1.5} key={i}>
                  <Box sx={productDetailsStyle.boxSx}>
                    <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
                      {x?.name}
                    </Typography>
                    <Box sx={{ cursor: 'pointer' }} onClick={() => amcDeleteClose(i)}>
                      <UploadDeleteIcon />
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Box pt={1}>
              <Button
                sx={productDetailsStyle.updateButtonSx}
                fullWidth
                disabled={(uploadFile?.length || 0) > 0 ? false : true}
                onClick={() => amcFileUpload()}
              >
                Update
              </Button>
            </Box>
          </DrawerComponent>

          {/* Extended Drawer */}
          <DrawerComponent
            borderBottom
            showHeader={true}
            open={extendedUpdateComponentDrawer}
            headerComponent={
              <ModalHeader
                icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                showIcon={true}
                showHeader={true}
                headerText="Uploaded Extended Document Files"
                onClose={() => setExtendedUpdateComponentDrawer(false)}
              />
            }
          >
            {uploadFile?.map((x: any, i: number) => {
              return (
                <Box pb={1.5} key={i}>
                  <Box sx={productDetailsStyle.boxSx}>
                    <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
                      {x?.name}
                    </Typography>
                    <Box sx={{ cursor: 'pointer' }} onClick={() => handleDeleteExtended(i)}>
                      <CloseIcon rootStyle={{ color: 'text.A100' }} />
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Box pt={1}>
              <Button
                sx={productDetailsStyle.updateButtonSx}
                fullWidth
                disabled={(uploadFile?.length || 0) > 0 ? false : true}
                onClick={() => fileUploadExtended()}
              >
                Update
              </Button>
            </Box>
          </DrawerComponent>


          {/* amc  */}
          {openAmcDrawer && (
            <DrawerComponent
              borderBottom
              showHeader={true}
              open={openAmcDrawer}
              headerComponent={
                <ModalHeader
                  icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                  showIcon={true}
                  showHeader={true}
                  headerText="Uploaded Files"
                  onClose={() => setOpenAmcDrawer(false)}
                />
              }
            >
              {uploadFile?.map((x: any, i: number) => {
                return (
                  <Box>
                    <Box pb={1.5} key={i}>
                      <Box sx={productDetailsStyle.boxSx}>
                        <Typography variant="subtitle2" sx={productDetailsStyle.uploadDocumentNameSx}>
                          {x?.name}
                        </Typography>
                        <Box sx={{ cursor: 'pointer' }} onClick={() => handleAmcDeleteClose(i)}>
                          <UploadDeleteIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
              <Box pt={1}>
                <Button
                  sx={productDetailsStyle.updateButtonSx}
                  fullWidth
                  disabled={(uploadFile?.length || 0) > 0 ? false : true}
                  onClick={() => onAmcFileUpload()}
                >
                  Update
                </Button>
              </Box>
            </DrawerComponent>
          )}

          {/* schedule service reminder */}
          {openServiceMaintenance && (
            <ScheduleServiceMaintenance
              openDrawerServiceReminder={openServiceMaintenance}
              icon={<SearchBoughtIcon />}
              drawerTitle={
                actionRequiredData?.warranty_valid_to
                  ? 'Have you bought Ext-Warranty?'
                  : actionRequiredData?.insurance_valid_to
                    ? 'Have you bought Insurance?'
                    : actionRequiredData?.amc_valid_to
                      ? 'Have you bought AMC?'
                      : ''
              }
              leftButtonName={'Later'}
              showDrawerSubtitle={true}
              showBottomText={true}
              bottomText={
                actionRequiredData?.warranty_valid_to
                  ? `I don't have plans to renew Ext-Warranty`
                  : actionRequiredData?.insurance_valid_to
                    ? `I don't have plans to renew Insurance`
                    : actionRequiredData?.amc_valid_to
                      ? `I don't have plans to renew AMC`
                      : ''
              }
              drawerSubtitle={
                actionRequiredData?.expiring
                  ? actionRequiredData?.warranty_valid_to
                    ? 'Seems your ext-warranty is expiring soon, have you bought it'
                    : actionRequiredData?.insurance_valid_to
                      ? 'Seems your insurance is expiring soon, have you bought it'
                      : actionRequiredData?.amc_valid_to
                        ? 'Seems your amc is expiring soon, have you bought it'
                        : ''
                  : actionRequiredData?.warranty_valid_to
                    ? 'Seems your ext-warranty is expired, have you bought it'
                    : actionRequiredData?.insurance_valid_to
                      ? 'Seems your insurance is expired, have you bought it'
                      : actionRequiredData?.amc_valid_to
                        ? 'Seems your amc is expired, have you bought it'
                        : ''
              }
              rightButtonName={'Yes, Update Details'}
              handleClickPrevious={() => handleCloseOpenServiceMaintenance()}
              handleClickNext={() => handleOpenRecordDrawer()}
              handleClickBottom={() => handleOpenDrawerPostPone()}
            />
          )}

          {/* no action required */}
          {openDrawerPostPone && (
            <PostponeScheduledServiceComponent
              definitionNameDate="Select New Service Date"
              showPostponeDrawer={openDrawerPostPone}
              descriptionValue={noAction_required?.remarks}
              drawerHeaderText="Reason"
              handleChangeDescriptionValue={(e) => updateNoActionRequired('remarks', e.target.value)}
              handleSubmit={() => handleUpdateNoActionRequired()}
              handleCloseDrawer={() => handleCloseOpenDrawerPostPone()}
              showInput={false}
              showDescription={true}
            />
          )}

          {/* schedule service postpone */}
          {openServicePostpone && (
            <ScheduleServiceMaintenance
              openDrawerServiceReminder={openServicePostpone}
              icon={<ServiceReminderSearchIcon />}
              drawerTitle="Would you like to postpone the service?"
              leftButtonName={'Postpone the service'}
              showDrawerSubtitle={false}
              showBottomText={false}
              rightButtonName={'Remind me in 2 days'}
              handleClickPrevious={() => handleOpenServicePostpone()}
              handleClickNext={() => handleUpdateDatePostPoneServiceApi()}
            // handleClickBottom={() => handleCloseOpenServiceMaintenance()}
            />
          )}

          <PostponeScheduledServiceComponent
            definitionNameDate="Select New Service Date"
            showPostponeDrawer={openPostponeServiceDate}
            descriptionValue={servicePostponeData?.remarks}
            drawerHeaderText="Would you like to postpone the service?"
            handleChangeDescriptionValue={(e) => updateServicePostponeData('remarks', e.target.value)}
            handleChangeInput={(e) => updateServicePostponeData('service_date', e.target.value)}
            inputValue={servicePostponeData?.service_date}
            handleSubmit={() => handleUpdatePostponeServiceApi()}
            handleCloseDrawer={() => handleClosePostPoneService()}
            showInput={true}
            showDescription={true}
          />

          <RecordScheduleService
            getUpdateActionRequired={getUpdateActionRequired}
            onServiceInvoiceFnc={() => onServiceInvoiceFnc('service_invoice')}
            drawerOpen={openServiceRecordDrawer}
            id="service_invoice"
            toggleChip={openServiceRecordType}
            productId={product_id}
          />
          <ScheduleServiceReminder
            getUpdateActionRequired={getUpdateActionRequired}
            handleNavigate={handleCloseScheduleReminderDrawer}
          />
          {/* primary service provider */}
          <PrimaryServiceProviderComponent
            handleNavigatePage={goToPreferredServiceProvider}
            openServiceProvider={openPrimaryServiceDrawer}
            handleCloseDrawer={() => updateDrawerStatePrimary('openPrimaryServiceDrawer', false)}
          />
        </>
      )}
    </>
  );
}
