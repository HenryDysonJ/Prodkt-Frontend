import { CustomTextfield } from '@atoms/customTextfield';
import { WarrantyCoverage } from '@atoms/warantyCoverage';
import { useUpdateProductService } from '@core/store';
import { UpdateExtendedWarrantyInterface } from '@core/store/interface';
import { DocumentUploadComponent, FooterButtonComponent } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { extWarrantyDrawerFormStyle } from './style';
import { CheckBox } from '@atoms/checkbox';

export interface ExtWarrantyForm {
  provider_name?: string;
  warranty_provider?: string;
  warranty_valid_from?: string;
  valid_from?: string;
  warranty_coverage: string | number;
  warranty_coverage_type?: string;
  warranty_document_url?: string | File;
  coverage_type?: string;
  document_url?: string | File;
}

export interface OptionsInterface {
  value: string;
  label: string;
}

export interface ExtWarrantyFormInterface {
  stateValue: UpdateExtendedWarrantyInterface;
  updateValue: ExtWarrantyForm;
  handleChange: (key: keyof UpdateExtendedWarrantyInterface, value: never) => void;
  previousClick?: () => void;
  handleClickNext: () => void;
  options: OptionsInterface[];
  noPrevious?: boolean;
  showDocumentUpload?: boolean;
  leftLoading?: boolean;
  rightLoading?: boolean;
  rightButton?: string;
  noExtended?: boolean;
  handleClickExtendedCheckBox: (isChecked: any) => void
}

export const ExtWarrantyDrawerForm = (props: ExtWarrantyFormInterface) => {
  const {
    stateValue,
    updateValue,
    options,
    showDocumentUpload = true,
    rightButton = '',
    handleChange = () => false,
    previousClick = () => false,
    handleClickNext = () => false,
    leftLoading = false,
    rightLoading = false,
    noPrevious = false,
    noExtended = false,
    handleClickExtendedCheckBox = () => false,
  } = props;

  const { updateExtendedWarrantyDetails } = useUpdateProductService();

  const warranty_coverage = updateValue?.warranty_coverage
    ? updateValue?.warranty_coverage
    : updateValue?.warranty_coverage;
  const warranty_coverage_type = updateValue?.warranty_coverage_type
    ? updateValue?.warranty_coverage_type
    : updateValue?.coverage_type;
  const warranty_document_url = updateValue?.warranty_document_url
    ? updateValue?.warranty_document_url
    : updateValue?.document_url;
  const provider_name = updateValue?.provider_name ? updateValue?.provider_name : updateValue?.warranty_provider;
  const warranty_valid_from = updateValue?.warranty_valid_from
    ? updateValue?.warranty_valid_from
    : updateValue?.valid_from;

  useEffect(() => {
    updateExtendedWarrantyDetails('service_provider_name', provider_name as never);
    updateExtendedWarrantyDetails('extended_start_date', warranty_valid_from as never);
    updateExtendedWarrantyDetails('warranty_coverage', warranty_coverage as never);
    updateExtendedWarrantyDetails('warranty_coverage_type', warranty_coverage_type as never);
    updateExtendedWarrantyDetails('warranty_document_url', warranty_document_url as never);
  }, []);

  return (
    <Box>
      <Box>
        <Box pb={1.5}>
          <CustomTextfield
            testid="serviceProviderName"
            value={stateValue?.service_provider_name}
            onChange={(e) => handleChange('service_provider_name', e.target.value as never)}
            definitionName="Service Provider Name"
            placeholder="Placeholder"
          />
        </Box>
        <CustomTextfield
          testid="purchaseDate"
          value={stateValue?.extended_start_date}
          onChange={(e) => handleChange('extended_start_date', e.target.value as never)}
          definitionName="Purchase Date"
          placeholder="Name"
          variant="dateField"
        />
        <Box>
          <Typography sx={{ fontSize: '12px', color: 'text.700', pt: 1, pb: 1 }}>Warranty Coverage</Typography>
          <WarrantyCoverage
            testData="warrantyCoverage"
            value={stateValue?.warranty_coverage}
            toggleValue={stateValue?.warranty_coverage_type}
            onChange={(e) => handleChange('warranty_coverage', e.target.value as never)}
            handleToggle={(value: string | number) => {
              handleChange('warranty_coverage_type', value as never);
            }}
            options={options}
            isError={stateValue?.warranty_coverage?.length === 0 ? true : false}
            errorMessage='please enter a warranty coverage'
          />
        </Box>
      </Box>


      {
        showDocumentUpload && (
          <Box>
            <DocumentUploadComponent
              handleFileChange={(file) => handleChange('warranty_document_url', file as never)}
              handleDelete={() => handleChange('warranty_document_url', null as never)}
              file={stateValue?.warranty_document_url}
              headerText="Upload Extended Warranty Document"
              text="Click to browse and upload"
            // isAll={true}
            />
          </Box>
        )}
      {
        noExtended && (
          <Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <CheckBox data-testid="drawerCheck" isSquare onChange={(isChecked: any) => handleClickExtendedCheckBox(isChecked)} />
              <Typography sx={{color: 'text.A100', fontSize: '14px'}}>No, I don't have Extended Warranty</Typography>
            </Box>
          </Box>
        )
      }

      <Box sx={extWarrantyDrawerFormStyle.footerBtn}>
        <FooterButtonComponent
          showLeftBtn={noPrevious ? false : true}
          showRightBtn={true}
          leftButton="Previous"
          rightButton={rightButton ? rightButton : 'update'}
          handleClickPrevious={previousClick}
          handleClickNext={handleClickNext}
          rightLoading={rightLoading}
          leftLoading={leftLoading}
          rightButtonStyle={{
            py: 1.8,
            px: 0
          }}
        />
      </Box>
    </Box>
  );
};
