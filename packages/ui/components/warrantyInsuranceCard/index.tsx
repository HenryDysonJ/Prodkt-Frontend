import { Box, Grid, SxProps, Theme, Typography } from '@mui/material';

import { AmcAvailableIcon, WarrantyShieldIcon } from '@atoms/icons';
import { CheckBoxProps } from '@components/questionCard';
import { addProductDetails } from '@core/store';
import { QuestionCard } from '..';
import { warrantyInsuranceCardStyle } from './style';
interface WarrantyCardProps {
  icon: JSX.Element;
  showCoverage: boolean;
  showInsurance: boolean;
  warrantyShow: boolean;
  show: boolean;
  label: string;
  firstText: string;
  secondText: string;
  thirdText: string;
}
export interface WarrantyInsuranceCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  header?: string;
  data: WarrantyCardProps[];
  selected?: any;
  whatsAppData?: any;
  isScan: boolean;
}

export const WarrantyInsuranceCard = (props: WarrantyInsuranceCardProps): JSX.Element => {
  const { isScan, selected, whatsAppData, className = '', sx = {}, header = '', data, ...rest } = props;

  const {
    documentDetails,
    updateDocumentDetails,
    updateExtendedWarrantyDetails,
    getProductState,
    whatsAppProductDetails,
    whatsAppCoverage_id
  } = addProductDetails();

  const newData = data.filter((data) => {
    if (data?.firstText === 'null null Coverage' ? '' : data?.firstText) {
      return true;
    } else if (data?.secondText) {
      return true;
    } else if (data?.thirdText === 'null null' ? '' : data?.thirdText && data?.thirdText === 'null year' ? '' : data?.thirdText) {
      return true;
    }
  });

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


  return (
    <Box
      sx={[{ ...warrantyInsuranceCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={warrantyInsuranceCardStyle.cardSx}>
        <Typography sx={warrantyInsuranceCardStyle.headerTextSx}>{header}</Typography>
        <Grid container>
          {newData?.map((val, index) => {
            return (
              <Grid item xs={12} key={index}>
                <Box sx={warrantyInsuranceCardStyle.boxSx}>
                  <Box sx={warrantyInsuranceCardStyle.iconSx}>{val?.icon}</Box>
                  <Typography sx={warrantyInsuranceCardStyle.textSx}>{val?.label}</Typography>
                  <Box sx={warrantyInsuranceCardStyle.detailsSx}>
                    {val?.firstText && (
                      <Typography
                        sx={
                          val?.showCoverage
                            ? warrantyInsuranceCardStyle.warrantyEllipsisSx
                            : warrantyInsuranceCardStyle.warrantyNumberSx
                        }
                      >
                        {
                          whatsAppCoverage_id ? whatsAppProductDetails?.standard_warranty_details?.warranty_coverage
                            :
                            !!isScan ? selected?.standard_warranty_details?.warranty_coverage
                              : val?.firstText === 'null null Coverage' ? ''
                                : val?.firstText === "undefined undefined Coverage"
                                  ? '1 coverage'
                                  : val?.firstText
                        }
                        <span style={{
                          background: 'none',
                          marginLeft: '3px'
                        }}>
                          {
                            whatsAppCoverage_id ? whatsAppProductDetails?.standard_warranty_details?.warranty_coverage_type
                              :
                              !!isScan ?
                                selected?.standard_warranty_details?.warranty_coverage_type : ''}
                        </span>
                        <span style={{
                          background: 'none',
                          marginLeft: '3px'
                        }}>
                          {
                            !!isScan ?
                              'Coverage' : ''}
                        </span>
                      </Typography>
                    )}
                    <Box sx={warrantyInsuranceCardStyle.endSx}>
                      {val?.secondText && (
                        <>
                          <Box component="span"></Box>
                          <Typography sx={warrantyInsuranceCardStyle.insureDetailsSx}>{val?.secondText}</Typography>
                        </>
                      )}
                      {val?.thirdText === 'null null'
                        ? ''
                        : val?.thirdText && (
                          <>
                            {val?.thirdText === '0 year' || val?.thirdText === 'null year' ? '' :
                              <>
                                <Box component="span"></Box>
                                <Typography sx={warrantyInsuranceCardStyle.insureDetailsTextSx}>
                                  {val?.thirdText}
                                </Typography>
                              </>
                            }
                          </>
                        )}
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box py={1}>
                    {
                      whatsAppProductDetails?.product_details?.ext_warranty === false ? null :
                        <QuestionCard
                          icon={<WarrantyShieldIcon />}
                          testidCheck="ExtendedWarranty"
                          title="Extended Warranty Coverage"
                          isRequired={true}
                          radioButtons={giveMeRadioButtons('isWarrantyApplicable', documentDetails?.extended_warranty, true)}
                          titleStyle={warrantyInsuranceCardStyle.titleStyleSx}
                        />
                    }
                  </Box>
                  <Box
                    py={1}
                    pb={selected?.product_details?.amc ? 2 : 1}
                  >
                    {
                      whatsAppProductDetails?.product_details?.insurance === false ? null :
                        <QuestionCard
                          icon={<AmcAvailableIcon />}
                          testidCheck="insuranceYes"
                          title="Insurance Protected"
                          isRequired={true}
                          radioButtons={giveMeRadioButtons('isInsuranceApplicable', documentDetails.isInsuranceApplicable)}
                          titleStyle={warrantyInsuranceCardStyle.titleStyleSx}
                        />
                    }
                  </Box>
                  {
                    selected?.product_details?.amc ||
                      getProductState?.amc === true ||
                      whatsAppProductDetails?.product_details?.amc === true ?
                      <Box pt={1} pb={2}>
                        <QuestionCard
                          icon={<AmcAvailableIcon />}
                          title="AMC Covered"
                          isRequired={true}
                          radioButtons={giveMeRadioButtons('isAMCApplicable', documentDetails.isAMCApplicable)}
                          titleStyle={warrantyInsuranceCardStyle.titleStyleSx}
                        />
                      </Box> : null

                  }
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box >
  );
};
