import { CloseIcon } from '@atoms/icons';
import { AmcDrawerForm } from '@components/amcDrawerForm';
import { useProductDetails, useScanproduct, useSecureProduct, useUpdateProductService } from '@core/store';
import BajajIcon from '@core/ui/assets/bajajIcon.png';
import AmcLogo from '@core/ui/assets/AmcLogo.svg';
import WarrantyLogo from '@core/ui/assets/WarrantyLogo.svg';
import InsuranceLogo from '@core/ui/assets/InsuranceLogo.svg'
import {
  DrawerComponent,
  ExtWarrantyDrawerForm,
  InsuranceDrawerForm,
  ModalHeader,
  ProductProtectionForm,
  WarrantyDrawerForm,
} from '@core/ui/components';
import { Box, Grid, Stack, SxProps, Theme, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { companyWarrantyCardStyle } from './style';
import { EditDocument } from '@atoms/editDocument';
import { CheckBox } from '@atoms/checkbox';

interface CompanyWarrantyInterface {
  amc: string;
  insurancePolicyNo: string;
  warranty: string;
  src?: string | undefined;
  companyText: string;
  expiredTextdate: string;
  icon: JSX.Element;
  warrantyId: string;
  insurance: string;
  amc_id: string;
  amc_serial_no: string;
  amc_valid_to: string;
  insurer_id: string;
  insurer_name: string;
  insurance_policy_no: string;
  insurance_valid_to: string;
  insurance_details: string;
  amc_details: object | string;
  warranty_id: string;
  warranty_valid_to: string;
  is_extended: boolean;
  service_name: string;
  date: string;
  provider_name: string;
  id: string;
  policyNo?: string;
  brandLogo: string;
  document: string;
  product_details: string;
  serialNo?: string;
  title: string;
  subTitle: string;
  isCompleted: boolean;
  path: string;
}

export interface CompanyWarrantyCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  companyWarrantyCards: any;
  onScanAmcClick: () => void;
  onUploadAmcClick: (val: any) => void;
  onUploadExtendedClick: (val: any) => void;
  onScanExtendedClick: () => void;
  onScanInsuranceClick: () => void;
  documentShown?: any
  onUploadInsuranceClick: (val: any) => void;
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

export const CompanyWarrantyCard = (props: CompanyWarrantyCardProps): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [drawerValue, setDrawerValue] = useState<CompanyWarrantyInterface | undefined>(undefined);

  const {
    onScanInsuranceClick = () => false,
    onUploadInsuranceClick = () => false,
    onUploadAmcClick = () => false,
    onScanAmcClick = () => false,
    onUploadExtendedClick = () => false,
    onScanExtendedClick = () => false,
    companyWarrantyCards,
    className = '',
    documentShown,
    sx = {},
    ...rest } = props;

  const navigate = useNavigate();

  const { product_id } = useParams();

  const {
    onDeleteUploadFile,
    uploadFile,
    updateAmcDrawer,
    updateAmcViewDetails,
    updateAmcProductViewDetails,
    updateExtendedWarrantyViewDetails,
    updateInsuranceViewDetails,
    updateInsuranceDrawer,
    amcDrawerType,
    amcDrawerUpdate,
    insuranceDrawerUpdate,
    updateExtendedDrawer,
    getInsuranceDrawer,
    getExtendedDrawer,
    getAmcDrawerUpdate,
    getInsuranceDrawerUpdate,
    getAmcUpdate,
    product_details,
    amcLoading,
    insuranceLoading,
    extWarrantyLoading,
    clearScan,
    externalDocumentProductDetails
  } = useScanproduct();

  const {
    amc_details: service_amc_details,
    insurance_details: service_insurance_details,
    standard_warranty_details,
    extended_warranty_details: service_extended_details,
    no_extWarranty,
    no_insurance,
    updateInsuranceService,
    no_amc,
    updateAmcDetails,
    updateInsuranceDetails,
    updateWarrantyDetails,
    updateExtendedWarrantyDetails,
    updateNoAmcCheckBox,
    updateNoInsuranceCheckBox,
    updateNoExtWarrantyCheckBox,
    updateAmcService,
    updateWarrantyService,
    updateExtWarrantyService,
  } = useUpdateProductService();

  const { amc_details, insurance_details, extended_warranty_details } = useSecureProduct();
  const {
    getProductDetails,
    insurance_details: productInsuranceDetails,
    amc_details: productAmcDetails,
    std_warranty_details: productStdWarrantyDetails,
    extended_warranty_details: productExtWarrantyDetails,
  } = useProductDetails();

  const date = Object.values(companyWarrantyCards)
    ?.map((v: any) => {
      let obj = {};
      if (v?.amc_id) {
        let tempV = { ...v };
        delete tempV.provider_logo;
        delete tempV.amc_purchased_on;
        delete tempV.standard_qus_and_ans;
        delete tempV.amc_document_url;
        obj = {
          title: 'Update AMC Details',
          subTitle: 'Update details for AMC to keep your product in track',
          service_name: 'Amc',
          date: v?.amc_valid_to,
          provider_name: v?.provider_name,
          id: v?.amc_id,
          serialNo: v?.amc_serial_no,
          brandLogo: v?.provider_logo ? v?.provider_logo : AmcLogo,
          document: v?.amc_document_url,
          path: `/amcDetails/${companyWarrantyCards?.product_details?.product_id}`,
          isCompleted: Object.values(tempV).filter(_ => !_).length === 0

        }
      }
      if (v?.is_extended === false) {
        obj = {
          title: 'Update Warranty Details',
          subTitle: 'Update details for Warranty to keep your product in track',
          service_name: 'Warranty',
          date: v?.warranty_valid_to,
          provider_name: v?.provider_name,
          id: v?.warranty_id,
          serialNo: v?.warranty_serial_no,
          brandLogo: v?.provider_logo ? v?.provider_logo : WarrantyLogo,
          document: v?.warranty_document_url,
          path: `/warrantyDetails/${companyWarrantyCards?.product_details?.product_id}`,
          isCompleted: true
        };
      }
      if (v?.is_extended) {
        let tempV = { ...v };
        delete tempV.provider_logo;
        delete tempV.standard_qus_and_ans;
        delete tempV.warranty_document_url;
        obj = {
          title: 'Update Extended Warranty Details',
          subTitle: 'Update details for Extended Warranty to keep your product in track',
          service_name: 'Extended Warranty',
          date: v?.warranty_valid_to,
          provider_name: v?.provider_name,
          id: v?.warranty_id,
          serialNo: v?.warranty_serial_no,
          brandLogo: v?.provider_logo ? v?.provider_logo : WarrantyLogo,
          document: v?.warranty_document_url,
          path: `/extendedWarranty/${companyWarrantyCards?.product_details?.product_id}`,
          isCompleted: Object.values(tempV).filter(_ => !_).length === 0
        };
      }
      if (v?.insurer_id) {
        let tempV = { ...v };
        delete tempV.provider_logo;
        delete tempV.insurance_purchased_on;
        delete tempV.standard_qus_and_ans;
        delete tempV.insurance_document_url;
        obj = {
          title: 'Update Insurance Details',
          subTitle: 'Update details for Insurance to keep your product in track',
          service_name: 'Insurance',
          date: v?.insurance_valid_to,
          provider_name: v?.insurer_name,
          policyNo: v?.insurance_policy_no,
          id: v?.insurer_id,
          brandLogo: v.provider_logo ? v.provider_logo : InsuranceLogo,
          document: v?.insurance_document_url,
          path: `/insuranceDetails/${companyWarrantyCards?.product_details?.product_id}`,
          isCompleted: Object.values(tempV).filter(_ => !_).length === 0
        };
      }

      return {
        ...obj,
      };
    })
    .filter((v) => JSON.stringify(v) !== '{}');

  const onRightArrowIconClick = (val: CompanyWarrantyInterface) => {
    navigate(val?.path);
  };


  const getHeaderText = () => {
    if (drawerValue?.service_name === 'Insurance') {
      return 'Update Insurance Details';
    } else if (drawerValue?.service_name === 'Amc') {
      return 'Update AMC Details';
    } else if (drawerValue?.service_name === 'Warranty') {
      return 'Update Warranty Details';
    } else {
      return 'Update Extended Warranty Details';
    }
  };

  const previousClick = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClick = (value: CompanyWarrantyInterface) => {
    setOpenDrawer(true);
    setDrawerValue(value);
  };

  const onRoute = () => {
    setActiveStep(activeStep + 1);
  };

  // const handleUpdateAmc = () => {
  //   updateAmcService(product_id, () => {
  //     getProductDetails(product_id);
  //     setOpenDrawer(false);
  //   });
  // };
  // amc_coverage: 0,
  //     amc_purchased_on: '',
  //     amc_document_url: [],
  //     amc_service_provider_name: '',
  //     amc_serial_no: '',

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
        getAmcUpdate(false);
        setOpenDrawer(false);
      });
    } else {
      updateAmcService(product_id, {}, () => {
        getProductDetails(product_id);
        getAmcUpdate(false);
        setOpenDrawer(false);
      });
    }
  };


  // const handleUpdateInsurance = () => {
  //   updateInsuranceService(product_id, {}, () => {
  //     getProductDetails(product_id);
  //     setOpenDrawer(false);
  //   });
  // };
  const handleUpdateInsurance = () => {
    if (
      (product_details.insurance_details?.insurer_name
        || product_details.insurance_details?.insurance_coverage
        || product_details.insurance_details?.insurance_coverage_type
        || product_details.insurance_details?.insurance_start_date
        || product_details.insurance_details?.policy_no)
        ?.length > 0) {
      var product_details_copy = product_details;
      product_details_copy = {
        ...product_details_copy,
        ...product_details.insurance_details,
      };
      updateInsuranceService(product_id, product_details_copy, () => {
        getProductDetails(product_id);
        getInsuranceDrawerUpdate(false);
        setOpenDrawer(false);
      });
    } else {
      updateInsuranceService(product_id, {}, () => {
        getProductDetails(product_id);
        getInsuranceDrawerUpdate(false);
        setOpenDrawer(false);
      });
    }

  };

  const handleUpdateWarranty = () => {
    updateWarrantyService(product_id, () => {
      getProductDetails(product_id);
      setOpenDrawer(false);
    });
  };

  const handleUpdateExtWarranty = () => {
    if ((externalDocumentProductDetails.extended_warranty_details?.service_provider_name
      || externalDocumentProductDetails.extended_warranty_details?.extended_start_date
      || externalDocumentProductDetails.extended_warranty_details?.warranty_coverage
      || externalDocumentProductDetails.extended_warranty_details?.warranty_coverage_type)
      ?.length > 0) {
      var product_details_copy = externalDocumentProductDetails;
      product_details_copy = { ...product_details_copy, ...externalDocumentProductDetails.extended_warranty_details },
        updateExtWarrantyService(product_id, product_details_copy, () => {
          getProductDetails(product_id);
          getExtendedDrawer(false)
          setOpenDrawer(false);
        })
    } else {
      updateExtWarrantyService(product_id, {}, () => {
        getProductDetails(product_id);
        getExtendedDrawer(false)
        setOpenDrawer(false);
      });
    }

  };

  const handleDrawerClose = () => {
    if (drawerValue?.service_name === 'Insurance') {
      setActiveStep(1);
    } else if (drawerValue?.service_name === 'Amc') {
      setActiveStep(1);
    } else if (drawerValue?.service_name === 'Warranty') {
      setActiveStep(1);
    } else if (drawerValue?.service_name === 'Extended Warranty') {
      setActiveStep(1);
    }

    setOpenDrawer(false);
  };

  const handleUpdateNoInsurance = async () => {
    await updateInsuranceService(product_id).then(() => {
      getProductDetails(product_id);
      setOpenDrawer(false);
    });
  };

  const handleUpdateNoAmc = () => {
    updateAmcService(product_id, {}, () => {
      getProductDetails(product_id);
      setOpenDrawer(false);
    });
  };

  const handleUpdateNoExtWarranty = async () => {
    await updateExtWarrantyService(product_id).then(() => {
      getProductDetails(product_id);
      setOpenDrawer(false);
    });
  };

  const handleExtendClick = () => {
    getExtendedDrawer(true)
    clearScan();
  }

  const handleInsuranceClick = () => {
    getInsuranceDrawerUpdate(true)
    clearScan();
  }

  const handleAmcClick = () => {
    getAmcUpdate(true)
    clearScan();
  }

  const handleClickAmcCheckBox = (isChecked: any) => {
    updateNoAmcCheckBox(isChecked);
  }

  const handleClickExtendedCheckBox = (isChecked: any) => {
    updateNoExtWarrantyCheckBox(isChecked)
  }

  const handleClickInsuranceCheckBox = (isChecked: any) => {
    updateNoInsuranceCheckBox(isChecked)
  }


  const getDrawerComponent = () => {

    if (drawerValue?.service_name === 'Insurance') {
      if (activeStep === 1) {
        return (
          <Box>
            {/* <InsuranceDrawerForm
              stateValue={insurance_details}
              updateValue={productInsuranceDetails}
              handleChange={updateInsuranceDetails}
              handleClickNext={handleUpdateInsurance}
              previousClick={previousClick}
              options={options}
            /> */}

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
                showDocumentUpload={true}
                rightButton='Save'
                rightLoading={insuranceLoading}
                noPrevious={false}
              // disabled={
              //   product_details.insurance_details?.insurer_name?.length
              //   ||  product_details.insurance_details?.in
              // }
              // noPrevious
              />
            </Box>
          </Box>
        );
      }
    } else if (drawerValue?.service_name === 'Amc') {
      if (activeStep === 1) {
        return (
          <Box>
            {/* <ProductProtectionForm
              checkBoxText="No, I don't have AMC"
              buttonText="Update"
              no_service={no_amc}
              handleClick={onRoute}
              handleChange={updateNoAmcCheckBox}
              handleUpdate={handleUpdateNoAmc}
            /> */}

            {/* <Box>
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
                  externalDocumentProductDetails?.amc_details
                    ? externalDocumentProductDetails?.amc_details
                    : service_amc_details
                    && service_amc_details
                }
                updateValue={
                  amc_details
                    ? amc_details
                    : externalDocumentProductDetails?.amc_details
                    && externalDocumentProductDetails?.amc_details
                }
                handleChange={updateAmcProductViewDetails}
                handleClickNext={handleUpdateAmc}
                noPrevious
                showDocumentUpload={false}
                rightButton='Save'
                rightLoading={amcLoading}
                noAmc={true}
                dontHaveAmc={
                  <ProductProtectionForm
                    checkBoxText="No, I don't have AMC"
                    buttonText="Update"
                    no_service={no_amc}
                    handleClick={onRoute}
                    handleChange={updateNoAmcCheckBox}
                    handleUpdate={handleUpdateNoAmc}
                  />
                }
              />
            </Box> */}

          </Box>
        );
      }
    } else if (drawerValue?.service_name === 'Warranty') {
      if (activeStep === 1) {
        return (
          <Box>
            <ProductProtectionForm handleClick={onRoute} />
          </Box>
        );
      } else if (activeStep === 2) {
        return (
          <Box>
            <WarrantyDrawerForm
              stateValue={standard_warranty_details}
              updateValue={productStdWarrantyDetails}
              handleChange={updateWarrantyDetails}
              handleClickNext={handleUpdateWarranty}
              previousClick={previousClick}
              options={options}
              showDocumentUpload
            />
          </Box>
        );
      }
    } else if (drawerValue?.service_name === 'Extended Warranty') {
      if (activeStep === 1) {
        return (
          // <Box>
          //   {/* <ProductProtectionForm
          //     checkBoxText="No, I don't have Extended Warranty"
          //     buttonText="Update"
          //     no_service={no_extWarranty}
          //     handleClick={onRoute}
          //     handleChange={updateNoExtWarrantyCheckBox}
          //     handleUpdate={handleUpdateNoExtWarranty}
          //   /> */}
          //   <EditDocument
          //     isRequired
          //     title='Extended'
          //     id={'extended'}
          //     onUploadClick={onUploadExtendedClick}
          //     onScanClick={onScanExtendedClick}
          //     documentShown={documentShown}
          //   />
          //   <ExtWarrantyDrawerForm
          //     stateValue={
          //       externalDocumentProductDetails?.extended_warranty_details
          //         ? externalDocumentProductDetails?.extended_warranty_details
          //         : service_extended_details
          //         && service_extended_details
          //     }
          //     updateValue={
          //       extended_warranty_details
          //         ? extended_warranty_details
          //         : externalDocumentProductDetails?.extended_warranty_details
          //         && externalDocumentProductDetails?.extended_warranty_details
          //     }
          //     handleChange={updateExtendedWarrantyViewDetails}
          //     handleClickNext={handleUpdateExtWarranty}
          //     noPrevious
          //     options={options}
          //     showDocumentUpload={false}
          //     rightButton='Save'
          //     rightLoading={extWarrantyLoading}
          //   />
          // </Box>
          <>
          </>
        );
      }
    }
  };

  return (
    <Box
      sx={[{ ...companyWarrantyCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Grid container spacing={2}>
        {date?.map((val: CompanyWarrantyInterface, index: number) => {
          return (
            <Grid key={index} item xs={6}>
              <Box
                sx={
                  (val?.provider_name || val?.insurer_name) && val?.brandLogo && val?.date && val?.document
                    ? companyWarrantyCardStyle.mainSubBoxSx
                    : companyWarrantyCardStyle.mainBoxSx
                }
                onClick={() => {
                  if (val?.isCompleted) {
                    onRightArrowIconClick(val)
                  }

                }}
              >
                <Stack
                  sx={companyWarrantyCardStyle.svgImageSx}
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img
                      style={{
                        height: '26px',
                        maxWidth: '60px',
                        textAlign: 'left',
                        objectFit: 'contain'
                      }}
                      src={val?.brandLogo} alt="companyImg" />
                      </Box>
                  <Box sx={companyWarrantyCardStyle.radiusBoxSx}>
                    <Typography variant="subtitle2" sx={companyWarrantyCardStyle.radiusSx}>
                      {val?.service_name === 'Extended Warranty' ? 'Ext Warranty' : val?.service_name}
                    </Typography>
                  </Box>
                </Stack>
                <Stack sx={{ pb: 1.6, px: 1.6 }} direction={'column'}>
                  <Typography onClick={
                    () => {
                      if (val?.service_name === 'Amc') {
                        handleAmcClick()
                      } else if (val?.service_name === 'Extended Warranty') {
                        handleExtendClick()
                      } else if (val?.service_name === 'Insurance') {
                        handleInsuranceClick()
                      } else {
                        handleClick(val)
                      }
                    }
                  } mb={1} sx={companyWarrantyCardStyle.updateNameSx}>
                    {val?.isCompleted ? val?.provider_name?.charAt(0).toUpperCase() + val?.provider_name?.slice(1).toLowerCase() : 'Update Details'}
                  </Typography>
                  {val.isCompleted ? (
                    <Typography
                      sx={{
                        ...companyWarrantyCardStyle.emptyContentSx,
                        color: moment(val?.date) > moment() ? 'text.400' : 'error.800',
                      }}
                    >
                      {moment(val?.date) > moment() ? 'Expiring On  ' : 'Expired  on '}
                      {moment(val?.date).format('DD MMM YY')}
                    </Typography>
                  ) : (
                    <Typography sx={companyWarrantyCardStyle.emptyContentSx}>
                      {'Complete the details to keep product in track.'}
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <DrawerComponent
        heightStyle={companyWarrantyCardStyle.drawerHeight}
        borderBottom
        showHeader={true}
        open={openDrawer}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={getHeaderText()}
            onClose={handleDrawerClose}
          />
        }
      >
        <Box>{getDrawerComponent()}</Box>
      </DrawerComponent>

      <DrawerComponent
        heightStyle={companyWarrantyCardStyle.drawerHeight}
        borderBottom
        showHeader={true}
        open={amcDrawerUpdate}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={'Update Amc Details'}
            onClose={() => getAmcUpdate(false)}
          />
        }
      >
        <Box>
          <EditDocument
            title='Amc'
            id={'amc'}
            onUploadClick={onUploadAmcClick}
            onScanClick={onScanAmcClick}
            documentShown={documentShown}
          />
          <AmcDrawerForm
            isCoverageRequired={false}
            isProviderRequired={false}
            isSerialRequired={false}
            isPurchasedRequired={false}
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
            noAmc={true}
            handleClickAmcCheckBox={handleClickAmcCheckBox}
          />
        </Box>
      </DrawerComponent>

      <DrawerComponent
        heightStyle={companyWarrantyCardStyle.drawerHeight}
        borderBottom
        showHeader={true}
        open={updateExtendedDrawer}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={'Update Extended warranty Details'}
            onClose={() => getExtendedDrawer(false)}
          />
        }
      >
        <Box>
          <EditDocument
            title='Extended'
            id={'extended'}
            onUploadClick={onUploadExtendedClick}
            onScanClick={onScanExtendedClick}
            documentShown={documentShown}
          />
          <ExtWarrantyDrawerForm
            stateValue={
              (externalDocumentProductDetails?.extended_warranty_details
                ? externalDocumentProductDetails?.extended_warranty_details
                : service_extended_details
                && service_extended_details)
            }
            updateValue={
              (extended_warranty_details
                ? extended_warranty_details
                : externalDocumentProductDetails?.extended_warranty_details
                && externalDocumentProductDetails?.extended_warranty_details)
            }
            handleChange={updateExtendedWarrantyViewDetails}
            handleClickNext={handleUpdateExtWarranty}
            noPrevious
            options={options}
            showDocumentUpload={false}
            rightButton='Save'
            rightLoading={extWarrantyLoading}
            noExtended={true}
            handleClickExtendedCheckBox={handleClickExtendedCheckBox}
          />
        </Box>
      </DrawerComponent>

      <DrawerComponent
        heightStyle={companyWarrantyCardStyle.drawerHeight}
        borderBottom
        showHeader={true}
        open={insuranceDrawerUpdate}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={'Update Insurance  Details'}
            onClose={() => getInsuranceDrawerUpdate(false)}
          />
        }
      >
        <Box>
          <EditDocument
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
              noPrevious={false}
              noInsurance={true}
              handleClickInsuranceCheckBox={handleClickInsuranceCheckBox}
            // noPrevious
            // disabled={
            //   product_details.insurance_details?.insurer_name?.length
            //     && product_details.insurance_details?.insurance_start_date
            //     && product_details.insurance_details?.insurance_coverage_type
            //     && product_details.insurance_details?.insurance_coverage?.length > 0
            //     ? false : true
            // }
            />
          </Box>
        </Box>
      </DrawerComponent>
    </Box>
  );
};
