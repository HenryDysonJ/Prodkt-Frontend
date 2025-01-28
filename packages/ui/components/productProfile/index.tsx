import {
  AmcColorIcon,
  CloseIcon,
  CopyIcon,
  InfoIcon,
  InsuranceColorIcon,
  RightForwardIcon,
  WarrantyColorIcon,
} from '@atoms/icons';
import { useProductDetails, useScanproduct, useSecureProduct, useUpdateProductService } from '@core/store';
import { isFutureDate } from '@core/utils';
import { Box, Card, Divider, Skeleton, Stack, SxProps, Theme, Typography } from '@mui/material';
import moment from 'moment';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';

import { AmcDrawerForm, CaptureImage, DocumentUploadComponent, DrawerComponent, InsuranceDrawerForm, ModalHeader, ProductProtectionForm } from '..';
import { productProfileStyle } from './style';
import { EditDocument } from '@atoms/editDocument';
import { Button } from '@atoms/button';

export interface productProfileInterface {
  warranty: any;
  amc: JSX.Element;
  insurance: JSX.Element;
  warrantyDate: string;
  amcDate: string;
  insuranceDate: string;
  amc_details: any;
  length: number;
  insurance_details: any;
  std_warranty_details: any;
  extended_warranty_details: any;
  insurer_id: string;
  insurance_valid_to: string;
  insurance_policy_no: string;
  insurer_name: string;
  warranty_id: string;
  warranty_valid_to: string;
  is_extended: boolean;
  amc_serial_no: string;
  amc_valid_to: string;
  amc_id?: string;
  title: string;
  subTitleSince: string;
  subTitleSinceColor: string;
  icon: JSX.Element;
  subTitleTill?: string;
  subTitleTillColor?: string;
  date?: any;
  product_details: {
    product_id: string;
  }
}
export interface ProductProfileProps {
  className?: string;
  sx?: SxProps<Theme>;
  productName: string;
  purchaseText: string;
  serialNumber: string;
  productImage: string;
  onInfoClick?: () => void;
  navigateViewProduct: () => void;
  onScanAmcClick: () => void;
  onUploadAmcClick: (val: any) => void;
  onScanInsuranceClick: () => void;
  onUploadInsuranceClick: (val: any) => void;
  productProfiles: any;
  documentShown?: any;
  skelton?: boolean;
}

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

export const ProductProfile = (props: ProductProfileProps): JSX.Element => {
  const {
    productProfiles,
    onScanInsuranceClick = () => false,
    onUploadInsuranceClick = () => false,
    onUploadAmcClick = () => false,
    onScanAmcClick = () => false,
    productName = '',
    productImage = '',
    purchaseText = '',
    serialNumber = '',
    onInfoClick = () => false,
    navigateViewProduct = () => false,
    documentShown,
    className = '',
    sx = {},
    skelton = false,
    ...rest
  } = props;

  const {
    amc_details: service_amc_details,
    insurance_details: service_insurance_details,
    no_amc,
    no_insurance,
    updateInsuranceService,
    updateNoInsuranceCheckBox,
    updateAmcDetails,
    updateInsuranceDetails,
    updateAmcService,
    updateNoAmcCheckBox,
  } = useUpdateProductService();

  const {
    onDeleteUploadFile,
    uploadFile,
    updateAmcDrawer,
    updateAmcViewDetails,
    updateInsuranceViewDetails,
    updateInsuranceDrawer,
    getInsuranceDrawer,
    getAmcDrawerUpdate,
    product_details,
    amcLoading,
    insuranceLoading,
    externalDocumentProductDetails,
    updateAmcProductViewDetails
  } = useScanproduct();

  const { amc_details, insurance_details } = useSecureProduct();

  const { getProductDetails } = useProductDetails();

  const [insuranceDrawerOpen, setInsuranceDrawerOpen] = useState(false);
  const [insurDrawerOpen, setInsurDrawerOpen] = useState(false);
  const [amcDrawerOpen, setAmcDrawerOpen] = useState(false);
  const [amcScanDrawerOpen, setAmcScanDrawerOpen] = useState(false);
  const { product_id } = useParams();

  // insurance
  const [showInsuranceComponent, setShowInsuranceComponent] = useState(false);
  const [openInsuranceDrawer, setOpenInsuranceDrawer] = useState(false);
  const [openInsuranceUrlDrawer, setOpenInsuranceUrlDrawer] = useState<boolean>(false);

  // Amc 
  const [showAmcComponent, setShowAmcComponent] = useState(false);
  const [openAmcDrawer, setOpenAmcDrawer] = useState(false);
  const [openAmcUrlDrawer, setOpenAmcUrlDrawer] = useState<boolean>(false);


  const handleUpdateInsurance = () => {
    var product_details_copy = product_details;
    product_details_copy = {
      ...product_details_copy,
      ...product_details.insurance_details,
    };
    updateInsuranceService(product_id, product_details_copy, () => {
      getProductDetails(product_id);
      getInsuranceDrawer(false);
      setInsurDrawerOpen(false);
    });
  };

  const handleUpdateNoInsurance = () => {
    updateInsuranceService(product_id, () => {
      getProductDetails(product_id);
      // setInsuranceDrawerOpen(false);
      getInsuranceDrawer(false);
      setInsurDrawerOpen(false);
    });
  };

  const updateDetails = () => {
    getInsuranceDrawer(true);
  };

  const updateAmcDetail = () => {
    getAmcDrawerUpdate(true);
  };

  // const handleUpdateAmc = async () => {
  //   await updateAmcService(product_id);
  //   getProductDetails(product_id);
  //   getAmcDrawerUpdate(false);
  //   setAmcScanDrawerOpen(false);
  // };
  const handleUpdateAmc = () => {
    if (
      (externalDocumentProductDetails.amc_details?.amc_service_provider_name
        || externalDocumentProductDetails.amc_details?.amc_purchased_on
        || externalDocumentProductDetails.amc_details?.amc_coverage
        || externalDocumentProductDetails.amc_details?.amc_serial_no)
        ?.length > 0) {
      var product_details_copy = externalDocumentProductDetails;
      product_details_copy = {
        ...product_details_copy,
        ...externalDocumentProductDetails.amc_details,
      };
      updateAmcService(product_id, product_details_copy, () => {
        getProductDetails(product_id);
        getAmcDrawerUpdate(false);
        setAmcScanDrawerOpen(false);
      });
    } else {
      updateAmcService(product_id, {}, () => {
        getProductDetails(product_id);
        getAmcDrawerUpdate(false);
        setAmcScanDrawerOpen(false);
      });
    }
  };


  // const handleUpdateAmc = () => {
  //   updateAmcService(product_id, () => {
  //     getProductDetails(product_id);
  //     getAmcDrawerUpdate(false);
  //     setAmcScanDrawerOpen(false);
  //   });
  // };

  const handleUpdateNoAmc = () => {
    updateAmcService(product_id, () => {
      getProductDetails(product_id);
      setAmcScanDrawerOpen(false);
      setAmcDrawerOpen(false);
    });
  };

  const handleDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  const onRoute = () => {
    setInsurDrawerOpen(true);
  };
  const onAmcRoute = () => {
    setAmcScanDrawerOpen(true);
  };

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        enqueueSnackbar('Serial Number copied', {
          variant: 'success',
          autoHideDuration: 3000,
        });
      })
      .catch(() => {
        enqueueSnackbar('Failed to copy', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      });
  };

  const productProfileData = Object.values(productProfiles)
    ?.map((v) => {
      let obj = {};
      if (v?.is_extended === false) {
        obj = {
          warranty: 'In Warranty',
          warrantyDate: v?.warranty_valid_to ?? "",
        };
      }

      if (v?.insurer_id) {
        obj = {
          insurance: 'Under Insurance',
          insuranceDate: v?.insurance_valid_to,
        };
      }

      if (v?.amc_id) {
        obj = {
          amc: 'Under amc',
          amcDate: v?.amc_valid_to,
        };
      }
      return {
        ...obj,
      };
    })
    .filter((v) => JSON.stringify(v) !== '{}');



  return (
    <Box
      sx={[{ ...productProfileStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >

      {skelton ?
        <>
          <Box sx={productProfileStyle.boxStyleSx}>
            <Skeleton sx={productProfileStyle.headSx} width="80px" height="150px" animation="wave" />
          </Box>
          <Box sx={productProfileStyle.rootSkeletonSx}>
            <Stack alignItems={'center'} justifyContent={'center'}>
              <Skeleton sx={productProfileStyle.labelSkeletonSx} height="30px" width="100px" animation="wave" />
            </Stack>
            <Stack alignItems={'center'} justifyContent={'center'}>
              <Skeleton sx={productProfileStyle.labelSkeletonSx} height="30px" width="200px" animation="wave" />
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <Skeleton sx={productProfileStyle.labelSkeletonSx} width="80px" height="100px" animation="wave" />

              <Skeleton sx={productProfileStyle.labelSkeletonSx} width="80px" height="100px" animation="wave" />

              <Skeleton sx={productProfileStyle.labelSkeletonSx} width="80px" height="100px" animation="wave" />
            </Box>
          </Box>
        </> :

        <Box sx={productProfileStyle.subRootSx}>
          <Box display={'flex'} justifyContent={'center'}>
            <Box position="relative">
              <Card sx={productProfileStyle.smallCardSx}>
                <img
                  src={productImage}
                  style={{ width: '100%', objectFit: 'contain', height: '100%' }}
                  alt="productImage"
                />
              </Card>
              <Typography onClick={() => onInfoClick()} sx={productProfileStyle.productTextSx}>
                {productName}
                <Box component="span" pt={0.2} >
                  <InfoIcon />
                </Box>
              </Typography>
              <Stack direction={'row'} gap={'5px'} alignItems={'center'} justifyContent={'center'}>
                <Typography sx={productProfileStyle.purchasedTextSx}>{`Serial No: ${serialNumber}`}</Typography>
                <CopyToClipboard data-testid="copy" text={serialNumber} onCopy={() => handleCopy(serialNumber)}>
                  <CopyIcon sx={productProfileStyle.copyIconSx} />
                </CopyToClipboard>
              </Stack>
            </Box>
          </Box>
          <Stack
            pt={3}
            direction="row"
            divider={<Box sx={productProfileStyle.dividerSx} />}
            justifyContent="space-around"
            sx={{ backgroundColor: 'grey.B900', pb: 2.5 }}
          >
            {productProfileData?.map((val: productProfileInterface, index: number) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'transparent',
                    }}
                  >
                    <Box textAlign="center">
                      {(val?.insurance && <InsuranceColorIcon />) ||
                        (val?.amc && <AmcColorIcon />) ||
                        ((val?.warranty || val?.warranty) && <WarrantyColorIcon />)}
                    </Box>
                    <Typography sx={productProfileStyle.expiringTextSx}>
                      {val?.insurance
                        ? val?.insuranceDate === null
                          ? 'Insurance'
                          : isFutureDate(val?.insuranceDate)
                            ? 'Under Insurance'
                            : 'Out Of Insurance'
                        : ''}

                      {val?.warranty
                        ? val?.warrantyDate === null
                          ? ''
                          : isFutureDate(val?.warrantyDate)
                            ? 'In Warranty'
                            : 'Out Of Warranty'
                        : ''}

                      {val?.amc
                        ? val?.amcDate === null
                          ? 'AMC'
                          : isFutureDate(val?.amcDate)
                            ? 'Under AMC'
                            : 'Out Of AMC'
                        : ''}
                    </Typography>
                    <Typography
                      sx={{
                        color:
                          moment(val?.insuranceDate || val?.warrantyDate || val?.amcDate) > moment()
                            ? 'text.500'
                            : 'error.900',
                        fontSize: '12px',
                      }}
                    >
                      {!val?.insuranceDate && val?.insurance ? (
                        <>
                          <Typography sx={productProfileStyle.updateTextSx} onClick={() => updateDetails()}>
                            Update Details
                          </Typography>
                        </>
                      ) : val?.insuranceDate ? (
                        (moment(val?.insuranceDate) > moment() ? 'Till  ' : 'Since  ') +
                        moment(val?.insuranceDate).format('DD MMM YY')
                      ) : (
                        ''
                      )}
                      {!val?.warrantyDate && val?.warranty
                        ? ''
                        : val?.warrantyDate
                          ? (moment(val?.warrantyDate) > moment() ? 'Till  ' : 'Since  ') +
                          moment(val?.warrantyDate).format('DD MMM YY')
                          : ''}
                      {!val?.amcDate && val?.amc ? (
                        <>
                          <Typography sx={productProfileStyle.updateTextSx} onClick={() => updateAmcDetail()}>
                            Update Details
                          </Typography>
                        </>
                      ) : val?.amcDate ? (
                        (moment(val?.amcDate) > moment() ? 'Till  ' : 'Since  ') + val?.amc &&
                        moment(val?.amcDate).format('DD MMM YY')
                      ) : (
                        ''
                      )}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Stack>
          <Box sx={productProfileStyle.flexBoxSx}>
            <Box sx={productProfileStyle.commonDividerSx} />
            <Stack
              pt={1.4}
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              divider={<Box sx={productProfileStyle.inSideDividerSx} />}
            >
              <Typography sx={productProfileStyle.serialNoSx}>{purchaseText}</Typography>
              <Stack onClick={navigateViewProduct} direction={'row'} gap={'5px'} alignItems="baseline">
                <Typography sx={productProfileStyle.viewTextSx}>View Documents</Typography>
                <RightForwardIcon />
              </Stack>
            </Stack>
          </Box>
        </Box>

      }

      {/* Insurance Drawer */}
      {
        <DrawerComponent
          borderBottom
          showHeader={true}
          open={updateInsuranceDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Update Insurance Details"
              onClose={() => getInsuranceDrawer(false)}
            />
          }
        >
          <EditDocument
            isRequired
            title='Insurance'
            id={'insurance'}
            onUploadClick={onUploadInsuranceClick}
            onScanClick={onScanInsuranceClick}
            documentShown={documentShown}
          />
          <Box>
            <InsuranceDrawerForm
              stateValue={
                (product_details?.insurance_details
                  ? product_details?.insurance_details
                  : service_insurance_details
                  && service_insurance_details)
              }
              updateValue={
                (insurance_details
                  ? insurance_details
                  : product_details?.insurance_details
                  && product_details?.insurance_details)

              }
              handleChange={updateInsuranceViewDetails}
              handleClickNext={handleUpdateInsurance}
              options={options}
              showDocumentUpload={false}
              rightButton='Save'
              rightLoading={insuranceLoading}
            // noPrevious
            />
          </Box>
        </DrawerComponent>
      }

      {/* Amc Drawer */}
      {
        <DrawerComponent
          borderBottom
          showHeader={true}
          open={updateAmcDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Add Amc Details"
              onClose={() => getAmcDrawerUpdate(false)}
            />
          }
        >
          <Box>
            <EditDocument
              isRequired
              title='Amc'
              id={'amc'}
              onUploadClick={onUploadAmcClick}
              onScanClick={onScanAmcClick}
              documentShown={documentShown}
            />
            <AmcDrawerForm
              stateValue={
                (externalDocumentProductDetails?.amc_details
                  ? externalDocumentProductDetails?.amc_details
                  : service_amc_details
                  && service_amc_details)
              }
              updateValue={
                (amc_details
                  ? amc_details
                  : externalDocumentProductDetails?.amc_details
                  && externalDocumentProductDetails?.amc_details)
              }
              handleChange={updateAmcProductViewDetails}
              handleClickNext={handleUpdateAmc}
              noPrevious
              showDocumentUpload={false}
              rightButton='Save'
              rightLoading={amcLoading}
            />
          </Box>
        </DrawerComponent>
      }
    </Box>
  );
};