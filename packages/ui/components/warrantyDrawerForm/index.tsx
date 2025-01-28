import { WarrantyCoverage } from '@atoms/warantyCoverage';
import { useUpdateProductService } from '@core/store';
import { UpdateStandardWarrantyInterface } from '@core/store/interface';
import { DocumentUploadComponent, FooterButtonComponent } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { warrantyDrawerFormStyle } from './style';

export interface WarrantyForm {
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

export interface WarrantyFormInterface {
  stateValue: UpdateStandardWarrantyInterface | any;
  updateValue: WarrantyForm | any;
  handleChange: (key: keyof UpdateStandardWarrantyInterface, value: never) => void;
  previousClick?: () => void;
  handleClickNext: () => void;
  options: OptionsInterface[];
  noPrevious?: boolean;
  showDocumentUpload?: boolean;
}

export const WarrantyDrawerForm = (props: WarrantyFormInterface) => {
  const {
    stateValue,
    updateValue,
    options,
    handleChange = () => false,
    previousClick = () => false,
    handleClickNext = () => false,
    noPrevious = false,
    showDocumentUpload = true,
  } = props;

  const warranty_coverage = updateValue?.warranty_coverage
    ? updateValue?.warranty_coverage
    : updateValue?.warranty_coverage;
  const warranty_coverage_type = updateValue?.warranty_coverage_type
    ? updateValue?.warranty_coverage_type
    : updateValue?.coverage_type;
  const warranty_document_url = updateValue?.warranty_document_url
    ? updateValue?.warranty_document_url
    : updateValue?.document_url;

  const { updateWarrantyDetails } = useUpdateProductService();

  useEffect(() => {
    updateWarrantyDetails('warranty_coverage', warranty_coverage as never);
    updateWarrantyDetails('warranty_coverage_type', warranty_coverage_type as never);
    updateWarrantyDetails('warranty_document_url', warranty_document_url as never);
  }, []);

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '12px', color: 'text.700', pb: 1 }}>Warranty Coverage</Typography>
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
          errorMessage='Please enter a warranty coverage'
        />
      </Box>
      {showDocumentUpload && (
        <Box>
          <DocumentUploadComponent
            handleFileChange={(file) => handleChange('warranty_document_url', file as never)}
            handleDelete={() => handleChange('warranty_document_url', null as never)}
            file={stateValue?.warranty_document_url}
            headerText="Upload Warranty Document"
            text="Click to browse and upload"
          />
        </Box>
      )}
      <Box sx={warrantyDrawerFormStyle.footerBtn}>
        <FooterButtonComponent
          showLeftBtn={noPrevious ? false : true}
          showRightBtn={true}
          leftButton="Previous"
          rightButton="Update"
          handleClickPrevious={previousClick}
          handleClickNext={handleClickNext}
        />
      </Box>
    </Box>
  );
};
