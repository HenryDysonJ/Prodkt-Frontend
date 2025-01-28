import { CustomTextfield } from '@atoms/customTextfield';
import { WarrantyCoverage } from '@atoms/warantyCoverage';
import { useUpdateProductService } from '@core/store';
import { UpdateInsuranceInterface } from '@core/store/interface';
import { DocumentUploadComponent, FooterButtonComponent } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { insuranceDrawerFormStyle } from './style';
import { CheckBox } from '@atoms/checkbox';

export interface InsuranceForm {
  insurer_name: string;
  insurance_policy_no?: string;
  policy_no?: string;
  insurance_purchased_on?: string;
  insurance_valid_from?: string;
  purchased_on?: string;
  insurance_coverage: string | number;
  insurance_coverage_type?: string;
  insurance_document_url?: string | File;
  coverage_type?: string;
  document_url?: string | File;
}

export interface OptionsInterface {
  value: string;
  label: string;
}

export interface InsuranceFormInterface {
  stateValue: UpdateInsuranceInterface;
  updateValue: InsuranceForm;
  handleChange: (key: keyof UpdateInsuranceInterface, value: never) => void;
  previousClick?: () => void;
  handleClickNext: () => void;
  options: OptionsInterface[];
  noPrevious?: boolean;
  showDocumentUpload?: boolean;
  leftLoading?: boolean;
  rightLoading?: boolean;
  rightButton?: string;
  noInsurance?: boolean;
  disabled?: boolean;
  handleClickInsuranceCheckBox?: (isChecked: any) => void
}

export const InsuranceDrawerForm = (props: InsuranceFormInterface) => {
  const {
    stateValue,
    updateValue,
    options,
    handleClickInsuranceCheckBox = () => false,
    noInsurance = false,
    handleChange = () => false,
    previousClick = () => false,
    handleClickNext = () => false,
    noPrevious = false,
    showDocumentUpload = true,
    leftLoading = false,
    rightLoading = false,
    rightButton = '',
    disabled

  } = props;

  const { updateInsuranceDetails } = useUpdateProductService();

  const insurer_name = updateValue?.insurer_name ? updateValue?.insurer_name : updateValue?.insurer_name;
  const insurance_policy_no = updateValue?.insurance_policy_no
    ? updateValue?.insurance_policy_no
    : updateValue?.policy_no;
  const insurance_purchased_on = updateValue?.insurance_purchased_on
    ? updateValue?.insurance_purchased_on
    : updateValue?.purchased_on;
  const insurance_start_date = updateValue?.insurance_valid_from
    ? updateValue?.insurance_valid_from
    : '';
  const insurance_coverage = updateValue?.insurance_coverage
    ? updateValue?.insurance_coverage
    : updateValue?.insurance_coverage;
  const insurance_coverage_type = updateValue?.insurance_coverage_type
    ? updateValue?.insurance_coverage_type
    : updateValue?.coverage_type;
  const insurance_document_url = updateValue?.insurance_document_url
    ? updateValue?.insurance_document_url
    : updateValue?.document_url;

  useEffect(() => {
    updateInsuranceDetails('insurer_name', insurer_name as never);
    updateInsuranceDetails('policy_no', insurance_policy_no as never);
    updateInsuranceDetails('insurance_purchased_on', insurance_purchased_on as never);
    updateInsuranceDetails('insurance_start_date', insurance_start_date as never);
    updateInsuranceDetails('insurance_coverage', insurance_coverage as never);
    updateInsuranceDetails('insurance_coverage_type', insurance_coverage_type as never);
    updateInsuranceDetails('insurance_document_url', insurance_document_url as never);
  }, []);

  return (
    <Box>
      <Box>
        <Box pb={1.5}>
          <CustomTextfield
            testid="insurerName"
            value={stateValue?.insurer_name}
            onChange={(e) => handleChange('insurer_name', e.target.value as never)}
            definitionName="Insurer Name"
            placeholder="XXXXXXXXX"
            type="text"
          />
        </Box>
        <Box pb={1.5}>
          <CustomTextfield
            testid="policyNumber"
            value={stateValue?.policy_no}
            onChange={(e) => handleChange('policy_no', e.target.value, 15 as never)}
            definitionName="Policy Number"
            placeholder="XXXXXXXXX"
          />
        </Box>
        <Box>
          <CustomTextfield
            testid="purchasedOn"
            value={stateValue?.insurance_start_date}
            onChange={(e) => handleChange('insurance_start_date', e.target.value as never)}
            definitionName="Start date"
            placeholder="Name"
            variant="dateField"
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: '12px', color: 'text.700', pt: 1, pb: 1 }}>Insurance Coverage</Typography>
          <WarrantyCoverage
            testData="insuranceCoverage"
            value={stateValue?.insurance_coverage}
            toggleValue={stateValue?.insurance_coverage_type}
            onChange={(e) => handleChange('insurance_coverage', e.target.value, 2 as never)}
            handleToggle={(value: string | number) => {
              handleChange('insurance_coverage_type', value as never);
            }}
            options={options}
            isError={stateValue?.insurance_coverage?.length === 0 ? true : false}
            errorMessage='please enter a insurance coverage'
          />
        </Box>
      </Box>
      {showDocumentUpload && (
        <Box>
          <DocumentUploadComponent
            handleFileChange={(file) => handleChange('insurance_document_url', file as never)}
            handleDelete={() => handleChange('insurance_document_url', null as never)}
            file={stateValue?.insurance_document_url}
            headerText="Upload Insurance Document"
            text="Click to browse and upload"
          />
        </Box>
      )}
      {
        noInsurance && (
          <Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <CheckBox data-testid="drawerCheck" isSquare onChange={(isChecked: any) => handleClickInsuranceCheckBox(isChecked)} />
              <Typography sx={{color: 'text.A100', fontSize: '14px'}}>No, I don't have Insurance</Typography>
            </Box>
          </Box>
        )
      }
      <Box sx={insuranceDrawerFormStyle.footerBtn}>
        <FooterButtonComponent
          showLeftBtn={noPrevious ? true : false}
          showRightBtn={true}
          leftButton="Previous"
          rightButton={rightButton ? rightButton : "Update"}
          handleClickPrevious={previousClick}
          handleClickNext={handleClickNext}
          rightLoading={rightLoading}
          leftLoading={leftLoading}
          disabled={disabled}
        />
      </Box>
    </Box>
  );
};
