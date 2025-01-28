import { BadgeIcon, CloseIcon, ErrorBadgeIcon } from '@atoms/icons';
import { AMCBlurIcon, PrizeBlurIcon, ShieldBlurIcon } from '@atoms/icons/productSearchIconsLists';
import { CheckBoxProps } from '@components/questionCard';
import { webRoutes } from '@core/routes';
import { addProductDetails, useScanproduct } from '@core/store';
import { FooterButtonComponent, ProductListCard, QuestionCard } from '@core/ui/components';
import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';
import { isAfter } from 'date-fns';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addCoverageDetailsStyle } from './style';

export interface AddCoverageDetailsProps {
  className?: string;
  sx?: SxProps<Theme>;
  data?: any;
  whatsAppState?: any;
};


export const AddCoverageDetailsComponent = (props: AddCoverageDetailsProps): JSX.Element => {

  // props Handling
  const { data, whatsAppState, className = '', sx = {}, ...rest } = props;

  // General Hooks
  const location = useLocation();
  const navigate = useNavigate();
  const [isWarrantyUnder, setIsWarrantyUnder] = useState(false);


  // Store
  const { product_details, standardLoadingNew, getStandardWarrantyLoading, updateServiceRecordDrawerState } = useScanproduct();
  const { whatsAppProductDetails, whatsAppCoverage_id, getProduct, getProductState, standard_warranty_details, productDetails, updateProducts, documentDetails, updateDocumentDetails, updateWarrantyDetails, updateExtendedWarrantyDetails, } = addProductDetails();


  // location Data
  const isScan = location?.state?.data?.isScan
  const typeId = location?.state?.typeId

  // which product i selected
  const getWhatProductISelected = data


  // functionality
  const getStrandedWarranty = () => {
    updateWarrantyDetails('units', getWhatProductISelected?.standard_warranty_details?.warranty_coverage_type);
    updateWarrantyDetails('coverage', getWhatProductISelected?.standard_warranty_details?.warranty_coverage);
    updateWarrantyDetails('applied', true)
    updateDocumentDetails('isWarrantyApplicable', true as never)
      const warrantyCoverageDate = moment(getWhatProductISelected?.product_details?.purchase_date).add(moment(getWhatProductISelected?.standard_warranty_details?.warranty_coverage), getWhatProductISelected?.standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('YYYY, MM, DD')
      const isActive = isAfter(new Date(warrantyCoverageDate), new Date())
      setIsWarrantyUnder(isActive)
  }

  const currentDate = new Date();
  const getCurrentYear = currentDate.getFullYear();


  const getStrandedWarrantyAdd = () => {
    updateWarrantyDetails('units', standard_warranty_details?.warranty_coverage_type);
    updateWarrantyDetails('coverage', standard_warranty_details?.warranty_coverage);
    updateWarrantyDetails('applied', true)
    updateDocumentDetails('isWarrantyApplicable', true as never)
    if(productDetails?.approx_years !>= 0 && productDetails?.data_of_purchase){

      const warrantyCoverageDate = moment(productDetails?.data_of_purchase).add(moment(standard_warranty_details?.warranty_coverage), standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('YYYY, MM, DD')
      const isActive = isAfter(new Date(warrantyCoverageDate), new Date())
      
      setIsWarrantyUnder(isActive)
    } else {
      const currentDate = new Date();
      const getCurrentYear = currentDate.getFullYear();
      const getHowOld = moment(`1 Jan ${getCurrentYear}`).subtract(productDetails?.approx_years, 'year').format('D MMM YY')
      
      const warrantyCoverageDate = moment(getHowOld).add(moment(standard_warranty_details?.warranty_coverage), standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('YYYY, MM, DD')
      
      const isActive = isAfter(new Date(warrantyCoverageDate), new Date())
      setIsWarrantyUnder(isActive)
    }

  }

  const onPreviousButtonClick = () => {
    if (isScan) {
      navigate(webRoutes.addproductBot);
      updateServiceRecordDrawerState('openInvoiceDrawer', true)
    } else {
      navigate(webRoutes.addProductDetails, {
        state: {
          open: true,
        },
      });
      updateProducts('currentStep', 1);
    }
  }

  
  const onNextButtonClick = () => {
    if (isScan) {
      navigate(webRoutes.productSummary, {
        state: { data: { isScan: true, data: product_details, getWhatProductISelected: getWhatProductISelected } },
      });
    } else {
      navigate(webRoutes.productSummary, {
        state: { data: { isScan: false, data: productDetails } }
      })
    }

  }

  const giveMeRadioButtons = (
    key: 'isWarrantyApplicable' | 'isInsuranceApplicable' | 'isAMCApplicable',
    isChecked: boolean | null,
    isExtend?: boolean = false,
  ): CheckBoxProps[] => [
      {
        label: 'Yes',
        onChange: (isChecked: boolean) => {
          if (isExtend) {
            updateExtendedWarrantyDetails('applied', true as never)
          } else {
            updateDocumentDetails(key, (isChecked === true ? true : false) as never)
          }
        },
        checked: isExtend ? documentDetails?.extended_warranty?.applied === true : isChecked === true,
      },
      {
        label: 'No',
        onChange: (isChecked: boolean) => {
          if (isExtend) {
            updateExtendedWarrantyDetails('applied', false as never)
          } else {
            updateDocumentDetails(key, (isChecked === false ? true : false) as never)
          }
        },
        checked: isExtend ? documentDetails?.extended_warranty?.applied === false : isChecked === false,

      },
    ];

  const scanOrWhatsAppBoolean = (): string | undefined => {
    if (whatsAppCoverage_id) {
      return whatsAppProductDetails?.product_details?.product_name;
    } else if (isScan) {
      return getWhatProductISelected?.product_details?.product_name;
    } else {
      return (
        productDetails?.product_details?.product_name ??
        productDetails?.product_details?.name
      );
    }
  };

  const getImageUrl = (): string | undefined => {
    return (
      whatsAppCoverage_id
        ? whatsAppProductDetails?.product_details?.image_url
        : isScan
          ? getWhatProductISelected?.product_details?.image_url
          : productDetails?.product_details?.url
    );
  };
  // true or false state of product name
  const productName = scanOrWhatsAppBoolean();

  // true or false state of image
  const imageUrl = getImageUrl();
  


  useEffect(() => {
    if (isScan) {
      getStrandedWarranty();
      
    } else {
      getStrandedWarrantyAdd()
      getProduct(typeId);
    }
  }, []);


  return (
    <Box sx={[{ ...addCoverageDetailsStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      <Box sx={addCoverageDetailsStyle.subRootSx}>
        <>
          {
            getStandardWarrantyLoading ?
              <Box>
                <Skeleton sx={{p:3}} width="100%" height="40px" animation="wave" />
              </Box>
              :
              <>
                <Box px={2} pt={2}>
                  <>
                    {isWarrantyUnder ? (
                      <Box
                        sx={{
                          bgcolor: 'background.surface.B300',
                          py: 2,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          pl: 2,
                        }}
                      >
                        <BadgeIcon />
                        <>
                          <Typography sx={{ color: 'primary.main', fontSize: '12px', fontWeight: 600 }}>
                            Product is under warranty till{' '}
                            
                            {
                                !productDetails?.approx_years && (getWhatProductISelected?.product_details?.purchase_date||productDetails?.data_of_purchase) ?
                                moment(new Date(
                              isScan
                                ? getWhatProductISelected?.product_details?.purchase_date
                                : productDetails?.data_of_purchase
                            ))
                              .add(moment(
                                (isScan
                                  ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage
                                  : standard_warranty_details?.warranty_coverage)
                              ),
                                isScan
                                  ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage_type
                                  : standard_warranty_details?.warranty_coverage_type
                                  === 'year' ? 'year' : 'months')
                              .format('D MMM YY')
                            :

                            moment(moment(`1 Jan ${productDetails?.approx_years === 0 ? (getCurrentYear + 1) : getCurrentYear}`).subtract(productDetails?.approx_years === 0 ? 1 : productDetails?.approx_years, 'year').format('D MMM YY')).add(moment
                              (isScan
                                ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage
                                : standard_warranty_details?.warranty_coverage)
                            , isScan
                              ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage_type
                              : standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('D MMM YY')
                          }
                          </Typography>
                        </>
                      </Box>
                    )
                      : (
                        <Box
                          sx={{
                            bgcolor: '#F9EAEB',
                            py: 2,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            pl: 2,
                          }}
                        >
                          <ErrorBadgeIcon />
                          <>
                            <Typography sx={{ color: 'error.900', fontSize: '12px', fontWeight: 600 }}>
                              Warranty is expired on{' '}

                              {
                                !productDetails?.approx_years && (getWhatProductISelected?.product_details?.purchase_date||productDetails?.data_of_purchase) ?
                                  moment(new Date(
                                    isScan
                                      ? getWhatProductISelected?.product_details?.purchase_date
                                      : productDetails?.data_of_purchase
                                  ))
                                    .add(moment(
                                      (isScan
                                        ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage
                                        : standard_warranty_details?.warranty_coverage)
                                    ),
                                      (isScan
                                        ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage_type
                                        : standard_warranty_details?.warranty_coverage_type)
                                        === 'year' ? 'year' : 'months')
                                    .format('D MMM YY')
                                  :

                                  moment(moment(`1 Jan ${productDetails?.approx_years === 0 ? (getCurrentYear + 1) : getCurrentYear}`).subtract(productDetails?.approx_years === 0 ? 1 : productDetails?.approx_years, 'year').format('D MMM YY')).add(moment
                                    (isScan
                                      ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage
                                      : standard_warranty_details?.warranty_coverage)
                                  , isScan
                                    ? getWhatProductISelected?.standard_warranty_details?.warranty_coverage_type
                                    : standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('D MMM YY')
                                                                      }
                            </Typography>
                          </>
                        </Box>
                      )
                    }
                  </>
                </Box>
              </>
          }
        </>
        <Box sx={{ pt: 2, pb: 0.5, px: 2 }}>
          <ProductListCard
            imageURL={imageUrl}
            productDescription={productName}
          />
        </Box>

        {/* CheckBox */}
        <Box px={2}>
          {
            whatsAppProductDetails?.product_details?.ext_warranty === false ? null :
              <Box sx={addCoverageDetailsStyle.questionCardSubSx}>
                <QuestionCard
                  icon={<PrizeBlurIcon />}
                  testidCheck="ExtendedWarranty"
                  title="Extended Warranty"
                  isRequired={true}
                  radioButtons={giveMeRadioButtons('isWarrantyApplicable', documentDetails?.extended_warranty, true)}
                />
              </Box>
          }
        </Box>
        <Box px={2} sx={addCoverageDetailsStyle.questionCardSubSx}>
          {
            whatsAppProductDetails?.product_details?.insurance === false ? null :
              <QuestionCard
                icon={<ShieldBlurIcon />}
                testidCheck="insuranceYes"
                title="Insurance Protected"
                isRequired={true}
                radioButtons={giveMeRadioButtons('isInsuranceApplicable', documentDetails.isInsuranceApplicable)}
              />
          }
        </Box>
        {
          (getWhatProductISelected?.product_details?.amc
            || getProductState?.amc === true || whatsAppProductDetails?.product_details?.amc === true)
            ?
            <Box px={2} sx={addCoverageDetailsStyle.questionCardSubSx}>
              <QuestionCard
                icon={<AMCBlurIcon />}
                title="AMC Covered"
                isRequired={true}
                radioButtons={giveMeRadioButtons('isAMCApplicable', documentDetails.isAMCApplicable)}
              />
            </Box>
            : null
        }
        <Box sx={{ pt: 1.5, px: 2 }}>
          <FooterButtonComponent
            handleClickPrevious={() => onPreviousButtonClick()}
            handleClickNext={() => onNextButtonClick()}
            showLeftBtn={whatsAppCoverage_id ? false : true}
            showRightBtn={true}
            leftButton="Previous"
            rightButton="Next"
            paddingTopRemove
            disabled={
              getProductState?.amc === true
                ? !documentDetails.isWarrantyApplicable === null ||
                documentDetails.isInsuranceApplicable === null ||
                documentDetails.isAMCApplicable === null
                : !documentDetails.isWarrantyApplicable === null
                  || documentDetails.isInsuranceApplicable === null
                  ? true : false
            }
          />
        </Box>
      </Box>
    </Box>
  );
}





