import { CustomTextfield } from '@atoms/customTextfield';
import { useUpdateProductService } from '@core/store';
import { UpdateAMCInterface } from '@core/store/interface';
import { DocumentUploadComponent, FooterButtonComponent } from '@core/ui/components';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { amcDrawerFormStyle } from './style';
import { CheckBox } from '@atoms/checkbox';

export interface AmcFormInterface {
  provider_name?: string;
  amc_provider?: string;
  amc_serial_no?: string;
  serial_no?: string;
  amc_coverage?: string | number;
  amc_purchased_on?: string;
  purchased_on?: string;
  amc_document_url?: string | File;
  document_url?: string | File;
}

export interface AmcFormInterface {
  stateValue?: UpdateAMCInterface;
  updateValue?: any;
  handleChange?: (key: keyof UpdateAMCInterface, value: never | any | string, limit?: number | undefined) => void;
  previousClick?: () => void;
  handleClickNext: () => void;
  noPrevious?: boolean;
  showDocumentUpload?: boolean;
  rightButton?: string;
  disabled?: boolean;
  leftLoading?: boolean;
  rightLoading?: boolean;
  loading?: boolean;
  noAmc?: boolean;
  dontHaveAmc?: any
  isCoverageRequired?: boolean;
  isProviderRequired?: boolean;
  isPurchasedRequired?: boolean;
  isSerialRequired?: boolean;
  handleClickAmcCheckBox?: (isChecked: any) => void
}

export const AmcDrawerForm = (props: AmcFormInterface) => {
  const {
    stateValue,
    updateValue,
    rightButton = '',
    dontHaveAmc,
    noAmc = false,
    disabled = false,
    handleChange = () => false,
    previousClick = () => false,
    handleClickNext = () => false,
    noPrevious = false,
    showDocumentUpload = true,
    leftLoading = false,
    rightLoading = false,
    loading = false,
    isCoverageRequired = true,
    isProviderRequired = true,
    isSerialRequired = true,
    isPurchasedRequired = true,

    handleClickAmcCheckBox = () => false,
  } = props;


  const { updateAmcDetails } = useUpdateProductService();

  const provider_name = updateValue?.provider_name ? updateValue?.provider_name : updateValue?.amc_provider;
  const amc_serial_no = updateValue?.amc_serial_no ? updateValue?.amc_serial_no : updateValue?.serial_no;
  const amc_coverage = updateValue?.amc_coverage ? updateValue?.amc_coverage : updateValue?.amc_coverage;
  const amc_purchased_on = updateValue?.amc_purchased_on ? updateValue?.amc_purchased_on : updateValue?.purchased_on;
  const amc_document_url = updateValue?.amc_document_url ? updateValue?.amc_document_url : updateValue?.document_url;

  useEffect(() => {
    updateAmcDetails('amc_service_provider_name', provider_name as never);
    updateAmcDetails('amc_serial_no', amc_serial_no as never);
    updateAmcDetails('amc_coverage', amc_coverage as never);
    updateAmcDetails('amc_purchased_on', amc_purchased_on as never);
    updateAmcDetails('amc_document_url', amc_document_url as never);
  }, []);

  return (
    <Box>
      <Box>
        <Box pb={1.5}>
          <CustomTextfield
            value={stateValue?.amc_service_provider_name}
            onChange={(e) => handleChange('amc_service_provider_name', e.target.value as never)}
            definitionName="Service Provider Name"
            placeholder="Placeholder"
            isRequired={isProviderRequired}
          />
        </Box>
        <Box pb={1.5}>
          <CustomTextfield
            value={stateValue?.amc_serial_no}
            onChange={(e) => handleChange('amc_serial_no', e.target.value, 15 as never)}
            definitionName="Serial Number"
            placeholder="XXXXXXXXX"
            isRequired={isSerialRequired}
          />
        </Box>
        <Box pb={1.5}>
          <CustomTextfield
            isRequired={isCoverageRequired}
            definitionName="AMC Coverage"
            handleIncrement={() => handleChange('amc_coverage', (stateValue?.amc_coverage ? stateValue?.amc_coverage + 1 : 1) as never)}
            handleDecrement={() =>
              (stateValue?.amc_coverage || 0) > 0
                ? handleChange('amc_coverage', (stateValue?.amc_coverage ? stateValue?.amc_coverage - 1 : 0) as never)
                : null
            }
            yearText="year"
            variant="addYear"
            yearValue={stateValue?.amc_coverage ?? null}
          />
        </Box>
        <Box>
          <CustomTextfield
            isRequired={isPurchasedRequired}
            value={stateValue?.amc_purchased_on}
            onChange={(e) => handleChange('amc_purchased_on', e.target.value as never)}
            definitionName="Start Date"
            placeholder="Name"
            variant="dateField"
          />
        </Box>
      </Box>
      {showDocumentUpload && (
        <Box pt={1.5}>
          <DocumentUploadComponent
            handleFileChange={(file: any) => handleChange('amc_document_url', file as never)}
            handleDelete={() => handleChange('amc_document_url', null as never)}
            file={stateValue?.amc_document_url}
            headerText="Upload AMC document"
            text="Click to browse and upload"
          />
        </Box>
      )}

      {
        noAmc && (
          <Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <CheckBox data-testid="drawerCheck" isSquare onChange={(isChecked: any) => handleClickAmcCheckBox(isChecked)} />
              <Typography sx={{color: 'text.A100', fontSize: '14px'}}>No, I don't have AMC</Typography>
            </Box>
          </Box>
        )
      }
      <Box sx={amcDrawerFormStyle.footerBtn}>
        <FooterButtonComponent
          disabled={disabled}
          showLeftBtn={noPrevious ? false : true}
          showRightBtn={true}
          leftButton="Previous"
          rightButton={rightButton ? rightButton : 'update'}
          handleClickPrevious={previousClick}
          handleClickNext={handleClickNext}
          rightLoading={rightLoading}
          leftLoading={leftLoading}
        />
      </Box>
    </Box>
  );
};
