/* eslint-disable react/jsx-key */
import { webRoutes } from '@core/routes';
import {
  useAuth,
  useBannerCard,
  useHome,
  usePWAStore,
  useScanproduct,
  useScheduleServiceReminder,
  useSearchProduct,
  useTheme,
  useUserProfileDetails,
  useAddProductCategory
} from '@core/store';
import { chooseProductData } from '@core/store/interface';
import {
  AddedProductCard,
  Button,
  CustomTextfield,
  Input,
  InstallPwaDrawer,
  ProfileUpload,
  UploadDocumentType,
  WarrantyCoverage,
} from '@core/ui/atoms';
import {
  ChatIcon,
  CloseIcon,
  ColorUpDownIcon,
  ExtendedWarrantyIcon,
  ForwardIcon,
  MaintenanceIcon,
  NevIconProduct,
  NoProductsIllustration,
  ProductIcon,
  RepairServiceIcon,
  ReportMessage,
  ReportMessageIcon,
  UploadDeleteIcon,
} from '@core/ui/atoms/icons';
import { HappyRoboIcon, StepOneCurve, StepTwoCurve, TourBot } from '@core/ui/atoms/icons/onboardIcons';
import ProductInstallIcon from '@core/ui/atoms/icons/productInstallIcon';
import { ScanIcon } from '@core/ui/atoms/icons/scanIcon';
import ScheduleService from '@core/ui/atoms/icons/scheduleService';
import { SearchAddIcon } from '@core/ui/atoms/icons/searchProductIcon';
import {
  InfoCircleIcon,
  SearchBoughtIcon,
  ServiceReminderSearchIcon,
  ThunderIcon,
} from '@core/ui/atoms/icons/serviceReminderIcon';
import {
  AccordianCardLayout,
  ActionRequiredCard,
  CaptureImage,
  CorbanCalculateCard,
  CustomIconButton,
  DocumentUploadComponent,
  DrawerComponent,
  HomeTapCard,
  ModalHeader,
  PostponeScheduledServiceComponent,
  ProductAdded,
  ProductCards,
  ScheduleServiceCard,
  ScheduleServiceMaintenance,
} from '@core/ui/components';
import { getMobileOperatingSystem, localStorageKeys, parseJwt } from '@core/utils';
import { Box, Container, Divider, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { RecordScheduleService } from '@pages/recordScheduleService';
import { ScheduleServiceReminder } from '@pages/scheduleServiceReminder';
import AOS from 'aos';
import 'aos/dist/aos.css';
import moment from 'moment';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import Joyride, { Step } from 'react-joyride';
import { useNavigate } from 'react-router-dom';
import { homeStyle } from './style';
import { track } from '@amplitude/analytics-browser';
import { version } from '../../../package.json';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import PaintPic from '@core/ui/assets/smallPaint.png'
import Plug from '@core/ui/assets/smallPlug.png'
import Rain from '@core/ui/assets/smallRain.png'

export interface ToolTipProps {
  continuous: boolean;
  index: number;
  step: any;
  backProps: object;
  content?: any;
  closeProps: object;
  primaryProps: object;
  skipProps: object;
  tooltipProps: object;
}

export default function Home() {

  const toggleDrawer = (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
    setOpenDrawer(newOpen);
    clearSearch();
    clearCategoryFnc();
  };

  const addProductOnClick = () => {
    setOpenDrawer(true);
    localStorage.setItem(localStorageKeys?.isNewUser, 'true');
  };

  const onDoItLaterClick = () => {
    localStorage.setItem(localStorageKeys?.isNewUser, 'true');
  };

  // This hooks is only for Product Tour
  const [{ run, steps }] = useState<{ run: boolean; steps: Step[] }>({
    run: true,
    steps: [
      {
        content: (
          <Box
            sx={{
              bgcolor: 'none !important',
              position: 'relative',
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                color: 'text.900',
                fontSize: '12px',
              }}
            >
              Hey there! Welcome to Prodkt.Say goodbye to chaos. Manage your product's life effortlessly.
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: '31px',
                left: '190px',
                transform: 'rotate(-18deg)',
              }}
            >
              <StepOneCurve />
            </Box>
          </Box>
        ),
        locale: {
          next: (
            <Box
              sx={{
                // bgcolor: 'none !important',
                position: 'relative',
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={700}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                }}
              >
                Get Started
              </Typography>
            </Box>
          ),
          skip: <Box></Box>,
        },
        placement: 'left-start',
        target: '#step-1',
        styles: {
          spotlight: {
            background: 'none',
          },
        },
      },
      {
        content: (
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                color: 'text.900',
                fontSize: '12px',
              }}
            >
              Hey! Excited to get started? Install the app here and let's dive in together
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '190px',
                top: '19px',
                transform: 'rotate(-10deg)',
              }}
            >
              <StepTwoCurve />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '220px',
                top: '-14px',
              }}
            >
              <TourBot />
            </Box>
          </Box>
        ),
        locale: {
          next: (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                }}
              >
                Next
              </Typography>
            </Box>
          ),
          skip: (
            <Box>
              <Stack flexDirection={'row'} gap={'4px'}>
                <Box sx={homeStyle.dashSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
              </Stack>
            </Box>
          ),
        },
        placement: 'top-start',
        target: '#step-2',
      },
      {
        content: (
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                color: 'text.900',
                fontSize: '12px',
              }}
            >
              Way to go! Click here to schedule your product service in a snap!
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '189px',
                top: '19px',
                transform: 'rotate(-10deg)',
              }}
            >
              <StepTwoCurve />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '223px',
                top: '-14px',
              }}
            >
              <TourBot />
            </Box>
          </Box>
        ),
        locale: {
          next: (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                }}
              >
                Next
              </Typography>
            </Box>
          ),
          skip: (
            <Box>
              <Stack flexDirection={'row'} gap={'4px'} mb={5}>
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dashSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
              </Stack>
            </Box>
          ),
        },
        target: '#step-3',
        placement: 'top-start',
      },
      {
        content: (
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                color: 'text.900',
                fontSize: '12px',
              }}
            >
              Stay ahead effortlessly! Keep your documents updated on the go
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '189px',
                top: '19px',
                transform: 'rotate(-10deg)',
              }}
            >
              <StepTwoCurve />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '223px',
                top: '-14px',
              }}
            >
              <TourBot />
            </Box>
          </Box>
        ),
        locale: {
          next: (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                }}
              >
                Next
              </Typography>
            </Box>
          ),
          skip: (
            <Box>
              <Stack flexDirection={'row'} gap={'4px'} mb={5}>
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dashSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
              </Stack>
            </Box>
          ),
        },
        placement: 'top',
        target: '#step-4',
      },
      {
        content: (
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                color: 'text.900',
                fontSize: '12px',
              }}
            >
              Share your feedback here and let's make magic happen!
            </Typography>
            <Box sx={{ position: 'absolute', bottom: '68px', left: '264px' }}>
              <ReportMessage />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '190px',
                top: '19px',
                transform: 'rotate(-10deg)',
              }}
            >
              <StepTwoCurve />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '227px',
                top: '-14px',
              }}
            >
              <TourBot />
            </Box>
          </Box>
        ),
        locale: {
          next: (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                }}
              >
                Next
              </Typography>
            </Box>
          ),
          skip: (
            <Box>
              <Stack flexDirection={'row'} gap={'4px'} mb={5}>
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dotSx} />
                <Box sx={homeStyle.dashSx} />
                <Box sx={homeStyle.dotSx} />
              </Stack>
            </Box>
          ),
        },
        target: '#step-5',
        styles: {
          spotlight: {
            background: 'none',
          },
        },
      },
      {
        content: (
          <Box sx={{ position: 'relative' }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                color: 'text.900',
                fontSize: '12px',
              }}
            >
              Ready to level up your experience? Add your product now, and we'll serve you better!
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '246px',
                top: '19px',
                transform: 'rotate(-10deg)',
              }}
            >
              <StepTwoCurve />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                left: '273px',
                top: '-14px',
              }}
            >
              <TourBot />
            </Box>
          </Box>
        ),
        locale: {
          last: (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                  boxShadow: 'none !important',
                  "&:hover": {
                    bgcolor: 'primary.main',
                    boxShadow: 'none'
                  }
                }}
              >
                Add Product
              </Typography>
            </Box>
          ),
        },
        // placement: 'top',
        target: '#step-6',
      },
    ],
  });

  // product Tour
  const Tooltip = (props: ToolTipProps): JSX.Element => {
    const {
      continuous = false,
      index = 0,
      step = {},
      backProps = {},
      closeProps = {},
      primaryProps = {},
      skipProps = {},
      tooltipProps = {},
    } = props;

    return (
      <Box
        {...tooltipProps}
        sx={
          index === 0
            ? homeStyle.boxFirstStepCard
            : index === 1
              ? homeStyle.boxSecondStepCard
              : index === 2
                ? homeStyle.boxThirdStepCard
                : index === 3
                  ? homeStyle.boxFourthStepCard
                  : index === 4
                    ? homeStyle.boxFifthStepCard
                    : homeStyle.boxtoolTipSx
        }
      >
        <Box>{step?.content}</Box>
        <Box>
          {continuous && (
            <>
              {index === 0 ? (
                <Box sx={{ position: 'relative' }}>
                  <Typography
                    id="next"
                    {...primaryProps}
                    variant="subtitle2"
                    fontWeight={700}
                    sx={{
                      color: 'primary.main',
                      bgcolor: '#fff',
                      fontSize: '14px',
                      textAlign: 'end',
                      cursor: 'pointer',
                    }}
                  >
                    Get Started
                  </Typography>
                  <Box sx={{ position: 'absolute', left: '230px', top: '-107px' }}>
                    <HappyRoboIcon />
                  </Box>
                </Box>
              ) : index === 5 ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', pt: 1.5 }}>
                  <Button sx={homeStyle.buttonAddProdktSx} onClick={addProductOnClick}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Add Product
                    </Typography>
                  </Button>
                </Box>
              ) : (
                <Typography
                  id="next"
                  {...primaryProps}
                  variant="subtitle2"
                  fontWeight={700}
                  sx={{
                    color: 'primary.main',
                    bgcolor: '#fff',
                    fontSize: '14px',
                    textAlign: 'end',
                    cursor: 'pointer',
                    pt: 1.5,
                  }}
                >
                  Next
                </Typography>
              )}
            </>
          )}
          {skipProps && (
            <>
              {index === 0 ? (
                <Box></Box>
              ) : index === 1 ? (
                <Box>
                  <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                    <Box sx={homeStyle.dashSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                  </Stack>
                </Box>
              ) : index === 2 ? (
                <Box>
                  <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dashSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                  </Stack>
                </Box>
              ) : index === 3 ? (
                <Box>
                  <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dashSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                  </Stack>
                </Box>
              ) : index === 5 ? (
                <Box></Box>
              ) : (
                <Box>
                  <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dotSx} />
                    <Box sx={homeStyle.dashSx} />
                    <Box sx={homeStyle.dotSx} />
                  </Stack>
                </Box>
              )}
            </>
          )}
          {closeProps &&
            (index === 5 ? (
              <Box onClick={() => onDoItLaterClick()}>
                <Typography
                  {...closeProps}
                  id="back"
                  variant="subtitle1"
                  fontWeight={600}
                  color="GrayText"
                  marginTop={'-34px'}
                  sx={{ cursor: 'pointer' }}
                >
                  Do It Later
                </Typography>
              </Box>
            ) : (
              ''
            ))}
          {!continuous && (
            <Button {...closeProps}>
              <Typography id="close">Close</Typography>
            </Button>
          )}
        </Box>
      </Box>
    );
  };



  // general hooks
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openServiceMaintenance, setOpenServiceMaintenance] = useState(false);
  const [openDrawerPostPone, setOpenDrawerPostPone] = useState(false);
  const [pwaInstallDrawer, setPwaInstallDrawer] = useState<boolean>(false);
  const [scheduleServiceDrawer, setScheduleServiceDrawer] = useState<boolean>(false);
  const [expandAddProductBtn, updateExpandAddProductBtn] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(true);
  const navigate = useNavigate();


  // store
  const {
    actionCardLoading,
    myProductState,
    chooseProductDetails,
    getChooseProductUpdate,
    openChooseProductDrawer,
    getChooseProductDrawerUpdate,
    actionRequiredState,
    getCurrantDrawerUpdate,
    getMyProduct,
    getChooseYourProduct,
    chooseProductState,
    chooseProductLoading,
    currantDrawer,
    getDisplayActionRequired,
    productToBeAddedState
  } = useHome();

  const { updateThemeByDefaultTheme } = useTheme();
  const { getProfileDetails, profileDetails } = useUserProfileDetails();
  const { deferredPrompt, setDeferredPrompt } = usePWAStore();
  const { clearSearch } = useSearchProduct();
  const { clearCategoryFnc } = useAddProductCategory();


  const {
    loading,
    invoiceDocument,
    uploadFile,
    onHomeUpdateType,
    onUploadCaptureFile,
    onDeleteUploadFile,
    getSummaryProduct,
    updateProduct,
    clearScan,
    onUpdateCaptureImage,
    updateProductId,
    clearExternalDocumentState,
    clearUploadDocument,
    dataURIs,
    externalDocumentUpdateState,
    updateExtWarrantyDocument,
    updateInsuranceDocument,
    externalDocumentProductDetails,
    externalInsuranceDocumentUpdateState,
    externalAmcDocumentUpdateState,
    updateAmcDocument,
    onInsuranceUploadType,
    onAmcUploadType,
    updateServiceRecordDrawerState,
    onServiceType,
    openServiceRecordDrawer,
  } = useScanproduct();

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


  const { updateState, isNewUser, isInstallationBanner } = useAuth();

  const { getOfferDetails } = useBannerCard();

  // warranty card function
  const [openDrawers, setOpenDrawers] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  // insurance
  const [showInsuranceComponent, setShowInsuranceComponent] = useState(false);
  const [openInsuranceDrawer, setOpenInsuranceDrawer] = useState(false);
  const [openInsuranceUrlDrawer, setOpenInsuranceUrlDrawer] = useState<boolean>(false);

  // Amc
  const [showAmcComponent, setShowAmcComponent] = useState(false);
  const [openAmcDrawer, setOpenAmcDrawer] = useState(false);
  const [openAmcUrlDrawer, setOpenAmcUrlDrawer] = useState<boolean>(false);

  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };
  const onScanClickFnc = (type: string) => {
    setShowComponent(true);
    onHomeUpdateType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onWarrantyFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'ext_warranty');
    setOpenDrawers(false);
  };

  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  // Amc Card Function
  const onUploadAmcClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenAmcDrawer(true);
  };
  const onScanAmcClickFnc = (type: string) => {
    setShowAmcComponent(true);
    onAmcUploadType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onAmcFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'amc');
    setOpenAmcDrawer(false);
  };
  const onUrlUpdate = () => {
    setOpenAmcUrlDrawer(false);
    getSummaryProduct({ webUrl: invoiceDocument?.linkUrl }, 'amc');
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
    onInsuranceUploadType(type);
    getChooseProductDrawerUpdate(false);
  };
  const onFileUploadInsurance = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'insurance');
    setOpenInsuranceDrawer(false);
  };
  const handleDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

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

  const authToken = localStorage.getItem(localStorageKeys.authToken);
  const data = parseJwt(authToken);

  const setProductTextAfterDelay = () => {
    setTimeout(() => {
      updateExpandAddProductBtn(true);
    }, 2500);
  };

  const handleClick = () => {
    navigate(webRoutes.userProfile);
  };

  const handleOpenChooseProductDrawer = () => {
    getChooseProductDrawerUpdate(true);
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

  const handleUpdateExWarrantyDocument = () => {
    updateExtWarrantyDocument(() => {
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearExternalDocumentState();
      clearScan();
      getDisplayActionRequired();
    });
  };
  const handleUpdateInsuranceDocument = () => {
    updateInsuranceDocument(() => {
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearExternalDocumentState();
      clearScan();
      getDisplayActionRequired();
    });
  };
  const handleUpdateAmcDocument = () => {
    updateAmcDocument(() => {
      getChooseProductDrawerUpdate(false);
      getCurrantDrawerUpdate(1);
      clearExternalDocumentState();
      clearScan();
      getDisplayActionRequired();
    });
  };

  const handleUpdateMandatory = () => {
    enqueueSnackbar(`Fill all the fields to save the details`, {
      variant: 'error',
    });
  };

  const handlePwaInstallDrawer = (status: boolean) => {
    setPwaInstallDrawer(status);
  };

  const handleScheduleServiceDrawer = (status: boolean) => {
    setScheduleServiceDrawer(status);
  };

  const goToChooseProduct = () => {
    navigate(webRoutes.chooseProduct);
  };

  const onRouteGallery = () => {
    navigate(webRoutes.uploadedgallery);
  };

  const onRoute = () => {
    // navigate(webRoutes.searchproduct);
    navigate(webRoutes.productCategory, {
      state: { data: { isAddProduct: true } },
    });
  };
  const onRouteScan = () => {
    clearScan();
    navigate(webRoutes.addproductBot);
  };

  const handleChangeNextValue = (number: number, value: chooseProductData) => {
    getCurrantDrawerUpdate(number);
    getChooseProductUpdate(value);
    updateProductId(value?.user_product_id);
  };

  // schedule Service reminder
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
      getDisplayActionRequired();
    })
  }

  const goToScheduleService = (val: any) => {
    navigate(webRoutes.chooseServiceProviders + '?id=' + val?.user_product_id);
  };

  const handleOpenDrawerPostPone = () => {
    setOpenServiceMaintenance(false);
    setOpenDrawerPostPone(true);
  };

  const handleCloseOpenDrawerPostPone = () => {
    setOpenDrawerPostPone(false);
    clearNoActionRequiredData();
  };

  const handleCloseOpenServiceMaintenance = () => {
    setOpenServiceMaintenance(false);
  };

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

  const handleCloseScheduleReminderDrawer = () => {
    updateDrawerState('openScheduleReminderDrawer', false);
    clearState();
  };

  const getUpdateActionRequired = () => {
    getDisplayActionRequired();
  };

  // const handleClickExternalExtWarranty = (val: chooseProductData) => {
  //   getChooseProductDrawerUpdate(true);
  //   getChooseProductUpdate(val);
  //   updateProductId(val?.user_product_id);
  //   getCurrantDrawerUpdate(3);
  // };
  // const handleClickExternalInsurance = (val: chooseProductData) => {
  //   getChooseProductDrawerUpdate(true);
  //   getChooseProductUpdate(val);
  //   updateProductId(val?.user_product_id);
  //   getCurrantDrawerUpdate(4);
  // };
  // const handleClickExternalAmc = (val: chooseProductData) => {
  //   getChooseProductDrawerUpdate(true);
  //   getChooseProductUpdate(val);
  //   updateProductId(val?.user_product_id);
  //   getCurrantDrawerUpdate(5);
  // };

  const handleScheduleUpdate = (val: any) => {
    updateDrawerState('openScheduleReminderDrawer', true);
    updateServiceReminderData('user_product_id', val?.user_product_id);
    updateDrawerState('isShowAmc', val?.is_amc_applicable);
  };

  const handleServiceNotComplete = (val: any) => {
    updateDrawerState('openServicePostpone', true);
    updateServicePostponeData('scheduler_id', val?.schedules_id);
    updateServicePostponeData('is_postponed', true);
  };

  const handleServiceUpdate = (val: any) => {
    updateServiceRecordDrawerState('openServiceRecordDrawer', true);
    updateServiceRecordDrawerState('scheduler_id', val?.schedules_id);
  };

  const handleOpenServicePostpone = () => {
    updateDrawerState('openServicePostpone', false);
    updateDrawerState('openPostponeServiceDate', true);
  };

  const handleClosePostPoneService = () => {
    updateDrawerState('openPostponeServiceDate', false);
  };

  const handleUpdatePostponeServiceApi = () => {
    if (servicePostponeData?.service_date === '') {
      enqueueSnackbar(`Fill all the mandatory fields`, {
        variant: 'error',
      });
    } else updatePostponeServiceApi();
    getUpdateActionRequired();
  };

  const handleUpdateDatePostPoneServiceApi = () => {
    updateServicePostponeData('service_date', moment(new Date()).add(2, 'days').format('YYYY-MM-DD'));
    updatePostponeServiceApi();
    getUpdateActionRequired();
  };

  //

  const getNextStep = (key: number | undefined) => {
    switch (key) {
      case 1:
        return {
          title: 'Add Product Documents',
          component: (
            <Box>
              <Typography sx={homeStyle.questionSx}>Choose your product</Typography>
              {chooseProductState?.length === 0 ? (
                <Box sx={homeStyle.noProductContainer}>
                  <Box sx={homeStyle.noProductsAddedSx}>
                    <NoProductsIllustration />
                  </Box>
                  <Box sx={homeStyle.noProductsTextHeaderSx}>
                    <Typography variant="body1" sx={homeStyle.noProductsTextSx}>
                      No Products Found
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ height: 'calc(100vh - 400px)' }}>
                  {chooseProductState?.map((val) => {
                    return (
                      <AddedProductCard
                        handleChangeNextState={() => handleChangeNextValue(2, val)}
                        cardLoading={chooseProductLoading}
                        isNavIcon={true}
                        cardDetails={val}
                      />
                    );
                  })}
                </Box>
              )}
            </Box>
          ),
        };
      case 2:
        return {
          title: 'Add Product Documents',
          component: (
            <Box>
              <AddedProductCard
                handleChangeBackState={() => getCurrantDrawerUpdate(1)}
                cardLoading={chooseProductLoading}
                ShowChangeText={true}
                isChangeText={true}
                cardDetails={chooseProductDetails}
              />
              <Typography sx={homeStyle.questionSx}>Which document did you buy?</Typography>
              {chooseProductDetails?.is_ext_warranty_applicable && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(3)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={homeStyle.extendedSx}
                >
                  <Typography variant="subtitle2" sx={homeStyle.textWarrantySx}>
                    Extended Warranty
                  </Typography>
                  <NevIconProduct />
                </Stack>
              )}
              {chooseProductDetails?.is_insurance_applicable && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(4)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={homeStyle.extendedSx}
                >
                  <Typography variant="subtitle2" sx={homeStyle.textWarrantySx}>
                    Insurance
                  </Typography>
                  <NevIconProduct />
                </Stack>
              )}
              {chooseProductDetails?.is_amc_applicable && (
                <Stack
                  onClick={() => getCurrantDrawerUpdate(5)}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  sx={homeStyle.extendedSx}
                >
                  <Typography variant="subtitle2" sx={homeStyle.textWarrantySx}>
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
                  <Box sx={homeStyle.fileUploadSx}>
                    <Typography sx={homeStyle.uploadTextSx}>
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
                      sx={homeStyle.stackFileSx}
                    >
                      <ThunderIcon />
                      <Typography sx={homeStyle.invoiceSx}>
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
                      <Typography sx={homeStyle.coverageTextSx}>Extended Warranty Coverage</Typography>
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
                    fullWidth
                    loading={loading}
                    onClick={
                      externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage &&
                        externalDocumentProductDetails?.extended_warranty_details?.extended_start_date &&
                        externalDocumentProductDetails?.extended_warranty_details?.warranty_coverage_type &&
                        externalDocumentProductDetails?.extended_warranty_details?.warranty_document_url.length > 0
                        ? () => handleUpdateExWarrantyDocument()
                        : () => handleUpdateMandatory()
                    }
                    sx={homeStyle.btnSx}
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
                    <Box sx={homeStyle.fileUploadSx}>
                      <Typography sx={homeStyle.uploadTextSx}>
                        Upload insurance documents by <span>*</span>
                      </Typography>
                      <Divider sx={homeStyle.dividerFileSx} />
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
                        sx={homeStyle.stackFileSx}
                      >
                        <ThunderIcon />
                        <Typography sx={homeStyle.invoiceSx}>
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
                        <Typography sx={homeStyle.coverageTextSx}>Insurance Coverage</Typography>
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
                    loading={loading}
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
                    sx={homeStyle.btnSx}
                    disabled={
                      (externalDocumentProductDetails?.insurance_details?.insurance_coverage &&
                        externalDocumentProductDetails?.insurance_details?.policy_no &&
                        externalDocumentProductDetails?.insurance_details?.insurer_name &&
                        externalDocumentProductDetails?.insurance_details?.insurance_purchased_on)
                        ? false : true
                    }
                  >
                    Save
                  </Button>
                </>
              </Box>
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
                    <Box mb={1.5} sx={homeStyle.fileUploadSx}>
                      <Typography sx={homeStyle.uploadTextSx}>
                        Upload AMC documents by <span>*</span>
                      </Typography>
                      <Divider sx={homeStyle.dividerFileSx} />
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
                        sx={homeStyle.stackFileSx}
                      >
                        <ThunderIcon />
                        <Typography sx={homeStyle.invoiceSx}>
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

                  <Button
                    loading={loading}
                    onClick={
                      externalDocumentProductDetails?.amc_details?.amc_purchased_on &&
                        externalDocumentProductDetails?.amc_details?.amc_coverage &&
                        externalDocumentProductDetails?.amc_details?.amc_document_url.length > 0 &&
                        externalDocumentProductDetails?.amc_details?.amc_serial_no &&
                        externalDocumentProductDetails?.amc_details?.amc_service_provider_name
                        ? () => handleUpdateAmcDocument()
                        : () => handleUpdateMandatory()
                    }
                    sx={homeStyle.btnSx}
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
                </>
              </Box>
            </>
          ),
        };
    }
  };

  const onBackRoute = () => {
    setShowComponent(false);
    setShowAmcComponent(false);
    setShowInsuranceComponent(false);
  };

  const onRouteAddProduct = (productClickIndex: any, index: number) => {
    navigate(webRoutes.searchproduct, {
      state: { data: { productClickIndex: productClickIndex, home: true } },
    });
  }

  const onServiceInvoiceFnc = (type: string) => {
    updateServiceRecordDrawerState('openServiceRecordDrawer', false);
    setShowComponent(true);
    onServiceType(type);
  };

  const getDetails = getNextStep(currantDrawer);

  const handleMoveKarmaCalculate = () => {
    navigate(webRoutes.karmacalculator)
  }


  const carouselOptions = [
    {
      image: Plug,
      backgroundColor: '#F6E8D9',
      title: 'Unplug electronics before floods but stay dry around them.',
      width: '70%'
    },
    {
      image: PaintPic,
      backgroundColor: '#E2F6D9',
      title: `Don't touch electronics in water. Get an electrician for checks`,
      width: '60%'
    },
    {
      image: Rain,
      backgroundColor: '#D9E2F6',
      title: `Don't start a flood-damaged car. Risk more damage and insurance issues`,
      width: '60%'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };



  useEffect(() => {
    setProductTextAfterDelay();
    AOS.init();
  }, []);

  useEffect(() => {
    getMyProduct();
    setIsAndroid(getMobileOperatingSystem() !== 'iOS');
  }, []);

  useEffect(() => {
    getChooseYourProduct();
  }, []);
  useEffect(() => {
    getDisplayActionRequired();
  }, []);

  useEffect(() => {
    getProfileDetails();
  }, []);

  useEffect(() => {
    getOfferDetails();
    clearUploadDocument();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVerified(!data.is_verified);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  const installPwa = () => {

    // Amplitude Track a install button
    track('Tap to install Prodt', { name: 'customer-app' })

    // Show the system install prompt
    if (!deferredPrompt) {
      enqueueSnackbar('App Already installed!', {
        variant: 'info',
      });
      localStorage.setItem(localStorageKeys?.isInstallationBanner, 'true');
      handlePwaInstallDrawer(false);
      updateState('isInstallationBanner', false)
    }
    deferredPrompt && deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt?.userChoice &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      deferredPrompt?.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          enqueueSnackbar('App Installed successfully!', {
            variant: 'success',
          });
          handlePwaInstallDrawer(false);
          localStorage.setItem(localStorageKeys?.isInstallationBanner, 'true');
          updateState('isInstallationBanner', false)
        } else {
          enqueueSnackbar('Get an app like experience by installing it!', {
            variant: 'info',
          });
        }
        // Reset the deferredPrompt variable
        setDeferredPrompt(null);
      });
  };

  // Is new User Product Tour
  useEffect(() => {
    setTimeout(() => {
      const tourBtn: any = document.querySelector('.react-joyride__beacon');
      tourBtn?.click();
    }, 1000);
  }, []);

  useEffect(() => {
    const getInstallationBanner = localStorage.getItem(localStorageKeys.isInstallationBanner);
    if (getInstallationBanner) {
      updateState('isInstallationBanner', false)
    } else {
      updateState('isInstallationBanner', true)
    }
  }, [isInstallationBanner])

  useEffect(() => {
    updateThemeByDefaultTheme();
    localStorage.setItem(localStorageKeys?.version, version);
  }, [])


  // Amplitude tracking
  useEffect(() => {
    track('Homepage', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={homeStyle.rootSx}>
      <Container sx={{ maxWidth: '425px', padding: { sm: '0px', xs: '0px' } }}>
        {showComponent || showAmcComponent || showInsuranceComponent ? (
          <>
            <CaptureImage
              useBackBtnClick
              onBackBtnClick={onBackRoute}
              dataURIs={dataURIs}
              onGalleryGo={onRouteGallery}
              UploadImage={(val: string) => onUpdateCaptureImage(val)}
            />
          </>
        ) : (
          <>
            {' '}
            {isNewUser && (
              <Box
                sx={{
                  maxWidth: {
                    sm: 425,
                  },
                  mx: {
                    sm: 'auto',
                  },
                }}
              >
                <Joyride
                  continuous
                  tooltipComponent={Tooltip}
                  disableScrollParentFix
                  spotlightPadding={0}
                  disableOverlayClose
                  styles={{
                    options: {
                      arrowColor: '#fff',
                      width: '300px',
                      spotlightShadow: '0 0 15px rgba(0, 0, 0, 1)',
                    },
                    spotlight: {
                      borderRadius: '12px',
                    },
                    buttonNext: {
                      backgroundColor: '#fff',
                    },
                  }}
                  floaterProps={{
                    hideArrow: true,
                    // autoOpen: true,
                  }}
                  callback={() => { }}
                  run={run}
                  steps={steps}
                  hideCloseButton
                  showSkipButton
                  hideBackButton
                  scrollToFirstStep
                />
              </Box>
            )}
            <Box>
              <Box component="div" sx={homeStyle.topSectionSx}>
                <Box>
                  <ProductIcon />
                </Box>
                <Box sx={{ cursor: 'pointer', position: 'relative' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ReportMessageIcon id="step-5" onClick={() => navigate(webRoutes.feedbackReport)} />
                    <Box onClick={handleClick}>
                      <ProfileUpload
                        url={profileDetails.profile_image}
                        altText={profileDetails.first_name}
                        showIcon={false}
                        height="30px"
                        width="30px"
                        fontSize="18px"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Banner */}

              <Box sx={{ ...homeStyle.mainSx, background: (theme) => theme.palette.background.surface?.default }}>
                <Grid container>
                  <Grid item xs={7} sx={homeStyle.chatSectionSx}>
                    <Box sx={homeStyle.sectionSx}>
                      <ChatIcon rootStyle={{ color: 'primary.A500' }} />
                      <Box sx={homeStyle.DetailsSx}>
                        <Typography sx={{ color: 'text.A100' }} variant="subtitle2" fontWeight={700}>
                          {`Hi ${profileDetails?.first_name} !`}
                        </Typography>
                        <Typography component="span">Welcome to your digital product companion</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box sx={homeStyle.roboIcon}>
                      <HappyRoboIcon rootStyle={{ bgcolor: 'none' }} id="step-1" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Action Required */}
              {(actionRequiredState?.service_schedule?.length > 0 ||
                actionRequiredState?.service_remainder?.length > 0 ||
                actionRequiredState?.service_completed?.length > 0 ||
                actionRequiredState?.expired?.length > 0 ||
                actionRequiredState?.expiring?.length > 0) && (
                  <Box px={2.5}>
                    <Typography sx={{ color: 'text.A100', mt: 1.3 }} variant="subtitle2" fontWeight={700}>
                      Actions Required
                    </Typography>
                    <Box
                      sx={{
                        overflowY: 'hidden',
                        overflowX: 'overlay',
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '12px',
                      }}
                    >
                      <Box>
                        <ActionRequiredCard
                          skelton={actionCardLoading}
                          handleServiceUpdate={handleServiceUpdate}
                          handleUpdate={handleUpdate}
                          goToScheduleService={goToScheduleService}
                          handleServiceNotComplete={handleServiceNotComplete}
                          handleScheduleUpdate={handleScheduleUpdate}
                          cardStyle={{ width: '171px' }}
                          rootStyle={{
                            display: 'flex',
                            flexDirection: 'row',
                            minWidth: '375px',
                            minHeight: '145px',
                            width: '100%',
                            gap: '15px',
                            paddingRight: '20px',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
            </Box>

            <Box>
              {isInstallationBanner &&
                <Box sx={{ px: '22px', pt: '10px' }}>
                  <HomeTapCard
                    id="step-2"
                    icon={<ProductInstallIcon />}
                    data-testid={'Click to Install Prodkt'}
                    title="Tap to Install Prodkt. "
                    secondTitle="It won't take up any space"
                    onClickCard={handlePwaInstallDrawer}
                  />
                </Box>
              }

              {/* schedule service */}
              <Box sx={homeStyle.scheduleServiceContainer}>
                <Grid spacing={2} container>
                  <Grid item xs={6}>
                    <CorbanCalculateCard
                      handleClick={handleMoveKarmaCalculate}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ScheduleServiceCard
                      id="step-3"
                      sx={{ '& .MuiTypography-root': { padding: '9px 0px' }, mb: '12px' }}
                      cardStyle={{ padding: "10px" }}
                      icon={<ScheduleService />}
                      title="Schedule service"
                      ShowNavIcon={true}
                      handleScheduleServiceDrawer={goToChooseProduct}
                    />
                    <ScheduleServiceCard
                      id="step-4"
                      sx={{ '& .MuiTypography-root': { padding: '9px 0px' } }}
                      imgStyle={{ minWidth: '0px', alignSelf: 'center', mt: '5px' }}
                      cardStyle={{ backgroundColor: "#E6EEFA ", borderColor: '#C5D5EE', padding: '10px' }}
                      icon={<ExtendedWarrantyIcon />}
                      title="Add Product Documents.."
                      handleScheduleServiceDrawer={handleOpenChooseProductDrawer}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Product To be Added */}

              <Box sx={{ ...homeStyle.thirdlayerSx, paddingBottom: { xs: '0px', md: '0px', lg: '0px' } }}>
                <Box sx={homeStyle.productTextSx}>
                  <Typography sx={{ color: 'text.A100' }} variant="subtitle2" fontWeight={700}>
                    Products To Be Added
                  </Typography>
                </Box>
                <Box
                  sx={{
                    overflowY: 'hidden !important',
                    overflowX: 'overlay',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '12px',
                    paddingBottom: { xs: '12px', md: '12px', lg: '4px' },
                  }}
                >
                  <Box>
                    <ProductAdded
                      skelton={actionCardLoading}
                      handleClick={(productToBeAddedState: any, index: number) => onRouteAddProduct(productToBeAddedState, index)}
                      rootStyle={{
                        paddingRight: '20px',
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Offers For you */}

              {/* <Box sx={homeStyle.fourthlayerSx}>
                {!offerCardLoading && (
                  <Box sx={homeStyle.offersBoxSx}>
                    <Box sx={homeStyle.offerTextSx}>
                      <Typography variant="subtitle2" fontWeight={700}>
                        Offers For You!
                      </Typography>
                    </Box>
                    <Box sx={homeStyle.seeAllTextSx}>
                      <Typography>See all Offers</Typography>
                      <Box sx={{ display: 'flex' }}>
                        <ForwardIcon />
                      </Box>
                    </Box>
                  </Box>
                )}

                <Box sx={homeStyle.bannerSx}>
                  <Box
                    sx={{
                      overflowY: 'hidden',
                      overflowX: 'overlay',
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '12px',
                    }}
                  >
                    {offerCardLoading ? (
                      <Box sx={homeStyle.boxShadow}>
                        <Box flexGrow={1}>
                          <Skeleton sx={homeStyle.skeltonSx} animation="wave" height={30} width={'100%'} />
                          <Skeleton sx={homeStyle.skeltonSx} animation="wave" height={30} width={'90%'} />
                          <Skeleton sx={homeStyle.skeltonSx} animation="wave" height={20} width={'60%'} />
                        </Box>
                        <Box flexGrow={1}>
                          <Skeleton
                            sx={homeStyle.skeltonSx}
                            animation="wave"
                            variant="rounded"
                            height={100}
                            width={'100%'}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <OfferCard offerData={offerData} />
                    )}
                  </Box>
                </Box>
              </Box> */}



              <Box sx={homeStyle.fourthlayerSx}>
                <Box sx={homeStyle.offersBoxSx}>
                  <Box sx={homeStyle.offerTextSx}>
                    <Typography variant="subtitle2" fontWeight={700}>
                      Flood Safety Essentials: Electronics & Vehicle Tips
                    </Typography>
                  </Box>
                </Box>

                {/* <Box
                    sx={{
                      overflowY: 'hidden',
                      overflowX: 'overlay',
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '12px',
                    }}
                  > */}
                <Box sx={{ width: '100%' }}>
                  <Box sx={homeStyle.bannerSx}>
                    <Slider {...settings}>
                      {carouselOptions.map((val, index) => (
                        <Box key={index} sx={{ ...homeStyle.offerBoxSx, backgroundImage: `url(${val.image})`, backgroundColor: `${val.backgroundColor}` }}>
                          <Typography sx={{ ...homeStyle.awarenessTextSx, width: val.width }}>{val.title}</Typography>
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </Box>


                {/* </Box> */}
              </Box>

              {/* My Products */}

              <Box sx={homeStyle.fifthlayerSx}>
                <Box sx={homeStyle.myPoductTextSx}>
                  <Typography sx={{ color: 'text.A100' }} variant="subtitle2" fontWeight={700} pb={1.5}>
                    My Products
                  </Typography>
                </Box>
                {myProductState?.length > 0 ? (
                  <Box pb={2}>{myProductState && <ProductCards productCardData={myProductState} />}</Box>
                ) : (
                  <>
                    <Box sx={homeStyle.noProductsAddedSx}>
                      <NoProductsIllustration />
                    </Box>
                    <Box sx={homeStyle.noProductsTextHeaderSx}>
                      <Typography sx={homeStyle.noProductsTextSx}>No Products Found</Typography>
                      <Typography sx={homeStyle.addProductsTextSx}>Add Products to keep them in track</Typography>
                    </Box>
                  </>
                )}
              </Box>

              {/* Button */}
              <Box
                sx={{
                  ...homeStyle.fixedButtonSX,
                }}
              >
                <Box sx={homeStyle.addPro}>
                  <Container
                    sx={{ maxWidth: { sm: '425px', xs: '425px', md: '425px' }, display: 'flex', justifyContent: 'end' }}
                  >
                    {
                      <Box
                        id="step-6"
                        data-testid="addNewProduct"
                        sx={expandAddProductBtn ? homeStyle.plusButtonSx : homeStyle.plusTextButtonSx}
                        onClick={toggleDrawer(true)}
                      >
                        <RiAddFill />
                        {!expandAddProductBtn && <Typography noWrap>Add Product</Typography>}
                      </Box>
                    }
                  </Container>
                </Box>
              </Box>
            </Box>
          </>
        )}

        {/* Search and Scan Drawer */}

        <DrawerComponent
          heightStyle={homeStyle.drawerHeightHome}
          borderBottom
          showHeader={true}
          open={openDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Add Product"
              onClose={() => setOpenDrawer(false)}
            />
          }
        >
          <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
            <Grid item xs={6} sx={homeStyle.leftButtonSX}>
              <CustomIconButton
                onClickIconButton={() => onRouteScan()}
                icon={<ScanIcon />}
                iconBottomText="Scan/Upload"
                data-testid="scan"
                showIcon={true}
                showText={true}
                topIcon={<ThunderIcon rootStyle={{ width: '10.069px', height: '20.795px' }} />}
              />
            </Grid>
            <Grid item xs={6} sx={homeStyle.rightButtonSX}>
              <CustomIconButton
                onClickIconButton={() => onRoute()}
                icon={<SearchAddIcon />}
                iconBottomText="Search & Add"
                showIcon={true}
                showText={true}
                data-testid="searchAdd"
              />
            </Grid>
          </Grid>
          <Box>
            <AccordianCardLayout
              icon={<ColorUpDownIcon />}
              title="Kindly keep the following documents in hand for a seamless process"
              backgroundColor
              startIcon={<InfoCircleIcon />}
              component={
                <Stack sx={{ padding: '16px 14px' }} rowGap="12px">
                  <Typography sx={homeStyle.pointsSectionSx}>1. Product invoice and warranty documents</Typography>
                  <Typography sx={homeStyle.pointsSectionSx}>
                    2. Ext. Warranty invoice and policy document (if applicable)
                  </Typography>
                  <Typography sx={homeStyle.pointsSectionSx}>
                    3. Insurance invoice and policy document (if applicable)
                  </Typography>
                  <Typography sx={homeStyle.pointsSectionSx}>
                    4. AMC invoice and policy document (if applicable)
                  </Typography>
                </Stack>
              }
            />
          </Box>
        </DrawerComponent>

        {/* Schedule Service Drawer */}
        <DrawerComponent
          heightStyle={homeStyle.drawerHeight}
          borderBottom
          showHeader={true}
          open={scheduleServiceDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Choose Service Type"
              onClose={() => handleScheduleServiceDrawer(false)}
            />
          }
        >
          <Stack direction="row" gap="15px" justifyContent="center" sx={{ '& p': { padding: '0 8px' } }}>
            <CustomIconButton
              onClickIconButton={() => goToChooseProduct()}
              icon={
                <Box mt={1.3}>
                  <MaintenanceIcon />
                </Box>
              }
              iconBottomText="General Maintenance Service"
              showIcon={true}
              showText={true}
              data-testid="General Maintenance Service"
            />
            <CustomIconButton
              onClickIconButton={() => goToChooseProduct()}
              icon={<RepairServiceIcon />}
              iconBottomText="Repair Service"
              showIcon={true}
              showText={true}
              data-testid="Repair Service"
            />
          </Stack>
        </DrawerComponent>

        {/* Install PWA  Drawer */}
        <DrawerComponent
          heightStyle={{ height: '250px' }}
          borderBottom
          showHeader={true}
          open={pwaInstallDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Install Prodkt"
              onClose={() => handlePwaInstallDrawer(false)}
            />
          }
        >
          <InstallPwaDrawer
            handlePwaInstallDrawer={() => handlePwaInstallDrawer(false)}
            installPwa={installPwa}
            isAndroid={isAndroid}
          />
        </DrawerComponent>

        {/* extended warranty Drawer */}
        <DrawerComponent
          borderBottom
          showHeader={true}
          open={openChooseProductDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={loading ? false : true}
              showHeader={true}
              headerText={getDetails?.title}
              onClose={() => handleCloseChooseProductDrawer()}
            />
          }
        >
          {getDetails?.component}
        </DrawerComponent>

        {/* warranty file upload */}
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
                <Box sx={homeStyle.boxSx}>
                  <Typography variant="subtitle2" sx={homeStyle.uploadDocumentNameSx}>
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
              sx={homeStyle.updateButtonSx}
              fullWidth
              disabled={(uploadFile?.length || 0) > 0 ? false : true}
              onClick={() => onWarrantyFileUpload()}
            >
              Update
            </Button>
          </Box>
        </DrawerComponent>

        {/* insurance drawer */}
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
                <Box sx={homeStyle.boxSx}>
                  <Typography variant="subtitle2" sx={homeStyle.uploadDocumentNameSx}>
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
              sx={homeStyle.updateButtonSx}
              fullWidth
              disabled={(uploadFile?.length || 0) > 0 ? false : true}
              onClick={() => onFileUploadInsurance()}
            >
              Update
            </Button>
          </Box>
        </DrawerComponent>

        {/*insurance Url Upload */}
        <DrawerComponent
          borderBottom
          showHeader={true}
          open={openInsuranceUrlDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Capture Insurance URL Link"
              onClose={() => setOpenInsuranceUrlDrawer(false)}
            />
          }
        >
          <Box>
            <Typography gutterBottom sx={{ color: 'text.700', fontSize: '12px' }}>
              Enter or Paste Web URL Link
            </Typography>
            <Input value={invoiceDocument?.linkUrl ?? ''} onChange={(e) => updateProduct('linkUrl', e.target.value)} />

            <Box pt={2}>
              <Button
                sx={homeStyle.updateButtonSx}
                fullWidth
                disabled={(invoiceDocument?.linkUrl?.length || 0) > 0 ? false : true}
                onClick={() => false}
              >
                Update
              </Button>
            </Box>
          </Box>
        </DrawerComponent>

        {/* amc  */}
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
              <Box pb={1.5} key={i}>
                <Box sx={homeStyle.boxSx}>
                  <Typography variant="subtitle2" sx={homeStyle.uploadDocumentNameSx}>
                    {x?.name}
                  </Typography>
                  <Box sx={{ cursor: 'pointer' }} onClick={() => handleAmcDeleteClose(i)}>
                    <UploadDeleteIcon />
                  </Box>
                </Box>
              </Box>
            );
          })}
          <Box pt={1}>
            <Button
              sx={homeStyle.updateButtonSx}
              fullWidth
              disabled={(uploadFile?.length || 0) > 0 ? false : true}
              onClick={() => onAmcFileUpload()}
            >
              Update
            </Button>
          </Box>
        </DrawerComponent>

        {/*amc Url Upload */}
        <DrawerComponent
          borderBottom
          showHeader={true}
          open={openAmcUrlDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Capture Amc URL Link"
              onClose={() => setOpenAmcUrlDrawer(false)}
            />
          }
        >
          <Box>
            <Typography gutterBottom sx={{ color: 'text.700', fontSize: '12px' }}>
              Enter or Paste Web URL Link
            </Typography>
            <Input value={invoiceDocument?.linkUrl ?? ''} onChange={(e) => updateProduct('linkUrl', e.target.value)} />

            <Box pt={2}>
              <Button
                sx={homeStyle.updateButtonSx}
                fullWidth
                disabled={(invoiceDocument?.linkUrl?.length || 0) > 0 ? false : true}
                onClick={() => onUrlUpdate()}
              >
                Update
              </Button>
            </Box>
          </Box>
        </DrawerComponent>

        {/* schedule service reminder */}
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

        {/* no action required */}
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

        {/* schedule service postpone */}
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
          id="service_invoice"
          onServiceInvoiceFnc={() => onServiceInvoiceFnc('service_invoice')}
          drawerOpen={openServiceRecordDrawer}
        />
        <ScheduleServiceReminder
          getUpdateActionRequired={getUpdateActionRequired}
          handleNavigate={handleCloseScheduleReminderDrawer}
        />
      </Container>
    </Box >
  );
}
