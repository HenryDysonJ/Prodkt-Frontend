import { BadgeIcon, ErrorBadgeIcon, VectorIcon } from '@atoms/icons';
import { AMCBlurIcon, PrizeBlurIcon, ShieldBlurIcon } from '@atoms/icons/productSearchIconsLists';
import { CheckBoxProps } from '@components/questionCard';
import { addProductDetails, useSearchProduct } from '@core/store';
import { DrawerLayout, QuestionCard } from '@core/ui/components';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { securityDocumentsStyle } from './style';
import moment from 'moment';
import { isAfter, isBefore } from 'date-fns';

export interface SecurityDocumentsProps {
  className?: string;
  sx?: SxProps<Theme>;
  id: string;
  productId: string;
}

export const SecurityDocuments = (props: SecurityDocumentsProps): JSX.Element => {
  const { id = '', productId = '', className = '', sx = {}, ...rest } = props;

  const [isWarrantyUnder, setIsWarrantyUnder] = useState(false);

  const {
    documentDetails,
    productDetails,
    getProductState,
    getProduct,
    currentStep,
    updateDocumentDetails,
    updateWarrantyDetails,
    updateExtendedWarrantyDetails,
    standard_warranty_details,
  } = addProductDetails();


  const getStrandedWarranty = () => {

    updateWarrantyDetails('units', standard_warranty_details?.warranty_coverage_type);
    updateWarrantyDetails('coverage', standard_warranty_details?.warranty_coverage);
    updateWarrantyDetails('applied', true)
    updateDocumentDetails('isWarrantyApplicable', true as never)
    const warrantyCoverageDate = moment(productDetails?.data_of_purchase).add(moment(standard_warranty_details?.warranty_coverage), standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months').format('YYYY, MM, DD')
    const isActive = isAfter(new Date(warrantyCoverageDate), new Date())
    setIsWarrantyUnder(isActive)

  }

  const giveMeCheckBox = (): CheckBoxProps[] => {
    const checkBoxOptions: CheckBoxProps[] = [];

    if (getProductState?.std_warranty === true) {
      checkBoxOptions.push({
        label: 'Standard',
        onChange: (isChecked) => updateWarrantyDetails('applied', true as never),
        checked: documentDetails?.warranty?.applied || false,
      });
    }

    if (getProductState?.ext_warranty === true) {
      checkBoxOptions.push({
        label: 'Extended',
        onChange: (isChecked) => updateExtendedWarrantyDetails('applied', isChecked as never),
        checked: documentDetails?.extended_warranty?.applied || false,
      });
    }

    return checkBoxOptions;
  };

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

  useEffect(() => {
    if (currentStep === 2) {
      getProduct(id);
    }
  }, [currentStep]);

  useEffect(() => {
    if (productId) {
      // updateDocumentDetails('isWarrantyApplicable', true as never);
      updateWarrantyDetails('applied', true as never);
    }
  }, []);

  useEffect(() => {
    getStrandedWarranty();
  }, []);

  return (
    <Box
      sx={[{ ...securityDocumentsStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <DrawerLayout>
        {productId && (
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
                    {moment(new Date(productDetails?.data_of_purchase))
                      .add(moment(standard_warranty_details?.warranty_coverage), standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months')
                      .format('D MMM YY')}
                  </Typography>
                </>
              </Box>
            ) : (
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
                    {moment(new Date(productDetails?.data_of_purchase))
                      .add(moment(standard_warranty_details?.warranty_coverage), standard_warranty_details?.warranty_coverage_type === 'year' ? 'year' : 'months')
                      .format('D MMM YY')}
                  </Typography>
                </>
              </Box>
            )}
          </>
        )}

        {productId ? (
          <Box>
            {getProductState?.ext_warranty === true && (
              <Box sx={securityDocumentsStyle.questionCardSubSx}>
                <QuestionCard
                  icon={<PrizeBlurIcon />}
                  testidCheck="ExtendedWarranty"
                  title="Extended Warranty"
                  isRequired={true}
                  radioButtons={giveMeRadioButtons('isWarrantyApplicable', documentDetails?.isWarrantyApplicable, true)}
                />
              </Box>
            )}
          </Box>
        ) : (
          <QuestionCard
            icon={<VectorIcon />}
            title="Under Warranty"
            testidStand="standYes"
            testidCheck="warrantyYes"
            isRequired={true}
            radioButtons={giveMeRadioButtons('isWarrantyApplicable', documentDetails.isWarrantyApplicable)}
            checkBox={documentDetails.isWarrantyApplicable === true ? giveMeCheckBox() : []}
          />
        )}

        {getProductState?.insurance === true && (
          <Box sx={securityDocumentsStyle.questionCardSubSx}>
            <QuestionCard
              icon={<ShieldBlurIcon />}
              testidCheck="insuranceYes"
              title="Insurance Protected"
              isRequired={true}
              radioButtons={giveMeRadioButtons('isInsuranceApplicable', documentDetails.isInsuranceApplicable)}
            />
          </Box>
        )}

        {getProductState?.amc === true && (
          <Box sx={securityDocumentsStyle.questionCardSubSx}>
            <QuestionCard
              icon={<AMCBlurIcon />}
              title="AMC Covered"
              isRequired={true}
              radioButtons={giveMeRadioButtons('isAMCApplicable', documentDetails.isAMCApplicable)}
            />
          </Box>
        )}
      </DrawerLayout>
    </Box>
  );
};
