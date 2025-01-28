import { CustomTextfield } from '@atoms/customTextfield';
import { ShieldIcon, WarrantySettingToolsIcon } from '@atoms/icons';
import { PathSecBoxIcon, PrizeIcon } from '@atoms/icons/productSearchIconsLists';
import { WarrantyCoverage } from '@atoms/warantyCoverage';
import { addProductDetails } from '@core/store';
import { DocumentUploadComponent, DrawerLayout, UploadDetailsLayout } from '@core/ui/components';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { uploadDocumentsStyle } from './style';
import { useState } from 'react';
import { isAlphaNumericCharacters } from '@core/utils';

export interface UploadDocumentsProps {
  className?: string;
  productId?: string;
  sx?: SxProps<Theme>;
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

const validateInput = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  const charCode = event.which || event.keyCode;
  if (charCode >= 48 && charCode <= 57) {
    event.preventDefault();
  }
};

export const UploadDocuments = (props: UploadDocumentsProps): JSX.Element => {
  const { className = '', productId = '', sx = {}, ...rest } = props;

  const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

  const {
    documentDetails,
    productDetails,
    updateWarrantyDetails,
    warrantyDocumentDelete,
    updateWarrantyDocumentDetails,
    updateExtendedWarrantyDetails,
    updateExtendedWarrantyDocument,
    updateInsuranceDocument,
    updateAmcDocument,
    amcDocumentDelete,
    insuranceDocumentDelete,
    documentDelete,
    updateInsuranceDetails,
    updateAmcDetails,
    updateInvoiceDocument,
    invoiceDocumentDelete,
    updateInvoiceDetails,
    error,
  } = addProductDetails();

  return (
    <Box
      sx={[{ ...uploadDocumentsStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <DrawerLayout>
        {/* Standard Warranty Details */}

        {productId ? null : (
          <>
            {documentDetails?.isWarrantyApplicable && documentDetails?.warranty?.applied && (
              <Box sx={uploadDocumentsStyle.questionCardSubSx}>
                <UploadDetailsLayout
                  showIcon={true}
                  showHeader={true}
                  isRequired={true}
                  header="Standard Warranty Details"
                  icon={<PrizeIcon rootStyle={{color:'text.A100'}} />}
                  bodyContent={
                    <>
                      <Box>
                        <Typography sx={{ fontSize: '12px', color: 'text.A100', pb: 1 }}>Warranty Coverage</Typography>
                        <WarrantyCoverage
                          testData="warrantyCoverage"
                          value={documentDetails?.warranty?.coverage ?? undefined}
                          toggleValue={documentDetails?.warranty?.units ?? undefined}
                          onChange={(e) => updateWarrantyDetails('coverage', e.target.value as never, 2)}
                          handleToggle={(value: string | number) => {
                            updateWarrantyDetails('units', value as never);
                          }}
                          options={options}
                          isError={documentDetails?.warranty?.coverage?.length === 0 ? true : false}
                          errorMessage="please enter a warranty coverage"
                        />
                      </Box>
                      <Box>
                        <DocumentUploadComponent
                          testid="uploadWarrantyDocument"
                          handleFileChange={(file) => updateWarrantyDocumentDetails('document', file as never)}
                          handleDelete={(index) => warrantyDocumentDelete('document', index)}
                          file={
                            documentDetails.warranty.document?.length > 0 ? documentDetails.warranty.document : null
                          }
                          headerText="Upload warranty document"
                          text="Click to browse and upload"
                          isAll={true}
                        />
                      </Box>
                    </>
                  }
                />
              </Box>
            )}
          </>
        )}

        {documentDetails?.isWarrantyApplicable === true && documentDetails?.extended_warranty?.applied
          ? (
            <Box sx={uploadDocumentsStyle.questionCardSubSx}>
              <UploadDetailsLayout
                showIcon={true}
                showHeader={true}
                header="Extended Warranty Details"
                icon={<PrizeIcon rootStyle={{color:'text.A100'}} />}
                bodyContent={
                  <>
                    <Box>
                      <CustomTextfield
                        textFieldStyle={{ mb: 1 }}
                        definitionName="Purchase Date"
                        variant="dateField"
                        minDate={maxDate}
                        // maxDate={maxDate}
                        // minDate={productDetails?.data_of_purchase}
                        darkText
                        value={documentDetails?.extended_warranty?.start_date}
                        onChange={(e) => updateExtendedWarrantyDetails('start_date', e.target.value as never)}
                      />
                      <Box>
                        <Typography sx={{ fontSize: '12px', color: 'text.A100', pt: 1, pb: 1 }}>
                          Ext Warranty Coverage
                        </Typography>
                        <WarrantyCoverage
                          value={documentDetails?.extended_warranty?.coverage ?? undefined}
                          toggleValue={documentDetails?.extended_warranty?.units ?? undefined}
                          onChange={(e) => updateExtendedWarrantyDetails('coverage', e.target.value as never, 2)}
                          handleToggle={(value: string | number) => {
                            updateExtendedWarrantyDetails('units', value as never);
                          }}
                          options={options}
                          isError={documentDetails?.extended_warranty?.coverage?.length === 0 ? true : false}
                          errorMessage="please enter a warranty units"
                        />
                      </Box>
                    </Box>
                    <Box>
                      <DocumentUploadComponent
                        handleFileChange={(file) => updateExtendedWarrantyDocument('document', file as never)}
                        handleDelete={(index) => documentDelete('document', index)}
                        file={
                          documentDetails.extended_warranty.document?.length > 0
                            ? documentDetails.extended_warranty.document
                            : null
                        }
                        headerText="Upload extended warranty document"
                        text="Click to browse and upload"
                        isAll={true}
                      />
                    </Box>
                  </>
                }
              />
            </Box>
          ) : null}

        {/* Insurance Details */}
        {documentDetails?.isInsuranceApplicable && (
          <Box sx={uploadDocumentsStyle.questionCardSubSx}>
            <UploadDetailsLayout
              infoShown={true}
              showIcon={true}
              showHeader={true}
              header="Insurance Details"
              icon={<ShieldIcon rootStyle={{color:'text.A100'}} />}
              bodyContent={
                <>
                  <Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        testid="insurerName"
                        value={documentDetails?.insurance?.insurer_name}
                        onChange={(e) => { isAlphaNumericCharacters(e.target.value) ? updateInsuranceDetails('insurer_name', e.target.value as never) : null }}
                        definitionName="Insurer Name"
                        onKeyPress={validateInput}
                        darkText
                        placeholder="XXXXXXXXX"
                        type="text"
                      />
                    </Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        testid="policyNumber"
                        value={documentDetails?.insurance?.policy_no}
                        onChange={(e) => { isAlphaNumericCharacters(e.target.value) ? updateInsuranceDetails('policy_no', e.target.value as never, 15) : null }}
                        definitionName="Policy Number"
                        darkText
                        placeholder="XXXXXXXXX"
                      />
                    </Box>
                    <Box>
                      <CustomTextfield
                        testid="purchasedOn"
                        // minDate={productDetails?.data_of_purchase}
                        // maxDate={maxDate}
                        minDate={maxDate}
                        value={documentDetails?.insurance?.purchased_on}
                        onChange={(e) => updateInsuranceDetails('purchased_on', e.target.value as never)}
                        definitionName="Start Date"
                        darkText
                        placeholder=""
                        variant="dateField"
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '12px', color: 'text.700', pt: 1, pb: 1 }}>
                        Insurance Coverage
                      </Typography>
                      <WarrantyCoverage
                        testData="insuranceCoverage"
                        value={documentDetails?.insurance?.coverage ?? undefined}
                        toggleValue={documentDetails?.insurance?.units ?? undefined}
                        onChange={(e) => updateInsuranceDetails('coverage', e.target.value as never, 2)}
                        handleToggle={(value: string | number) => {
                          updateInsuranceDetails('units', value as never);
                        }}
                        options={options}
                        isError={documentDetails?.insurance?.coverage?.length === 0 ? true : false}
                        errorMessage="please enter a warranty coverage"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <DocumentUploadComponent
                      handleFileChange={(file) => updateInsuranceDocument('document', file as never)}
                      handleDelete={(index) => insuranceDocumentDelete('document', index)}
                      file={documentDetails.insurance.document?.length > 0 ? documentDetails.insurance.document : null}
                      headerText="Upload Insurance document"
                      text="Click to browse and upload"
                      isAll={true}
                    />
                  </Box>
                </>
              }
            />
          </Box>
        )}
        {/* AMC Details */}
        {documentDetails?.isAMCApplicable && (
          <Box sx={uploadDocumentsStyle.questionCardSubSx}>
            <UploadDetailsLayout
              infoShown={true}
              showIcon={true}
              showHeader={true}
              header="AMC Details"
              icon={<WarrantySettingToolsIcon rootStyle={{color:'text.A100'}} />}
              bodyContent={
                <>
                  <Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        value={documentDetails?.amc?.serial_no}
                        onChange={(e) => { isAlphaNumericCharacters(e.target.value) ? updateAmcDetails('serial_no', e.target.value as never, 15) : null }}
                        definitionName="Serial Number"
                        darkText
                        placeholder="XXXXXXXXX"
                      />
                    </Box>
                    <Box pb={1.5}>
                      <CustomTextfield
                        definitionName="AMC Coverage"
                        darkText
                        handleIncrement={() =>
                          updateAmcDetails('coverage', (documentDetails?.amc?.coverage + 1) as never)
                        }
                        handleDecrement={() =>
                          documentDetails?.amc?.coverage > 0
                            ? updateAmcDetails('coverage', (documentDetails?.amc?.coverage - 1) as never)
                            : null
                        }
                        yearText="Year"
                        variant="addYear"
                        yearValue={documentDetails?.amc?.coverage}
                      />
                    </Box>
                    <Box>
                      <CustomTextfield
                        value={documentDetails?.amc?.purchased_on}
                        onChange={(e) => updateAmcDetails('purchased_on', e.target.value as never)}
                        definitionName="Purchased On"
                        // minDate={productDetails?.data_of_purchase}
                        // maxDate={maxDate}
                        minDate={maxDate}
                        darkText
                        placeholder="Name"
                        variant="dateField"
                      />
                    </Box>
                  </Box>
                  <Box pt={1.5}>
                    <DocumentUploadComponent
                      handleFileChange={(file) => updateAmcDocument('document', file as never)}
                      handleDelete={(index) => amcDocumentDelete('document', index)}
                      file={documentDetails.amc.document?.length > 0 ? documentDetails.amc.document : null}
                      headerText="Upload AMC document"
                      text="Click to browse and upload"
                      isAll={true}
                    />
                  </Box>
                </>
              }
            />
          </Box>
        )}
        {/* Invoice Document */}
        <Box sx={uploadDocumentsStyle.questionCardSubSx}>
          <UploadDetailsLayout
            showIcon={true}
            showHeader={true}
            header="Invoice Document"
            icon={<PathSecBoxIcon rootStyle={{color:'text.A100'}} />}
            bodyContent={
              <>
                <Box>
                  <DocumentUploadComponent
                    handleFileChange={(file) => updateInvoiceDocument('document', file as never)}
                    handleDelete={(index) => invoiceDocumentDelete('document', index)}
                    file={documentDetails.invoice.document?.length > 0 ? documentDetails.invoice.document : null}
                    headerText="Upload Invoice document"
                    text="Click to browse and upload"
                    isAll={true}
                  />
                </Box>
              </>
            }
          />
        </Box>
      </DrawerLayout>
    </Box>
  );
};
