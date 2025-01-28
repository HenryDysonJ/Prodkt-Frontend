import { useProductDetails, useScanproduct } from '@core/store';
import { Button, CloseIcon, CustomTextfield, ToggleButton, UploadDocumentType } from '@core/ui/atoms';
import { InfoGreyIcon, ThunderIcon } from '@core/ui/atoms/icons/serviceReminderIcon';
import { DocumentUploadComponent, DrawerComponent, ModalHeader } from '@core/ui/components';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { recordScheduleServiceStyle } from './style';
import { track } from '@amplitude/analytics-browser';
export interface RecordScheduleServiceProps {
  drawerOpen: boolean;
  toggleChip?: boolean;
  onServiceInvoiceFnc?: () => void;
  getUpdateActionRequired?: () => void;
  productId?: string;
  id: string;
}

export const RecordScheduleService = (props: RecordScheduleServiceProps): JSX.Element => {
  const {
    getUpdateActionRequired = () => false,
    onServiceInvoiceFnc = () => false,
    drawerOpen = false,
    toggleChip = false,
    id = '',
    productId,
  } = props;

  const {
    loading,
    invoiceDocument,
    uploadFile,
    serviceTypeOptions,
    onUploadCaptureFile,
    onDeleteUploadFile,
    getSummaryProduct,
    updateProduct,
    updateServiceDocument,
    clearScan,
    clearExternalDocumentState,
    externalDocumentProductDetails,
    updateServiceRecordDrawerState,
    serviceDocumentUpdateState,
    getServiceTypes,
    openServiceRecordType,
  } = useScanproduct();

  const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

  const { getMaintenanceDetails } = useProductDetails();

  const [openDrawers, setOpenDrawers] = useState(false);

  const onUploadClickFnc = (val: any) => {
    onUploadCaptureFile(val);
    setOpenDrawers(true);
  };

  const handleCloseDrawer = () => {
    if (
      externalDocumentProductDetails?.service_details?.name ||
      externalDocumentProductDetails?.service_details?.date_of_service ||
      externalDocumentProductDetails?.service_details?.service_provider ||
      externalDocumentProductDetails?.service_details?.service_bill.length > 0
    ) {
      enqueueSnackbar(`Data will not be saved`, {
        variant: 'error',
      });
      updateServiceRecordDrawerState('openServiceRecordDrawer', false);
      updateServiceRecordDrawerState('openServiceRecordType', false);
      clearExternalDocumentState();
      clearScan();


    } else {
      updateServiceRecordDrawerState('openServiceRecordDrawer', false);
      updateServiceRecordDrawerState('openServiceRecordType', false);
      clearExternalDocumentState();
      clearScan();


    }
  };

  const handleUpdateApi = () => {
    if (
      externalDocumentProductDetails?.service_details?.name &&
      externalDocumentProductDetails?.service_details?.date_of_service &&
      externalDocumentProductDetails?.service_details?.service_provider
      // externalDocumentProductDetails?.service_details?.service_bill.length > 0
    ) {
      updateServiceDocument(productId ?? '');
      getUpdateActionRequired();
      setTimeout(() => {
        getMaintenanceDetails(productId);
      }, 4000);
      clearExternalDocumentState();
      clearScan();
    } else
      enqueueSnackbar(`Fill all the fields to save the details`, {
        variant: 'error',
      });
  };

  const onWarrantyFileUpload = async () => {
    getSummaryProduct({ uploadFile: uploadFile }, 'service_invoice');
    setOpenDrawers(false);
  };
  const handleWarrantyDeleteClose = (i: number) => {
    onDeleteUploadFile(uploadFile?.filter((val: any, index: number) => index !== i));
  };

  useEffect(() => {
    getServiceTypes();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Record schedule service page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={recordScheduleServiceStyle.root}>
      <DrawerComponent
        open={drawerOpen}
        showHeader={true}
        heightStyle={{ padding: '0' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={'Record Service Details'}
            onClose={() => handleCloseDrawer()}
          />
        }
      >
        <Divider sx={{ color: 'divider.100' }} />
        <Box sx={{ px: 2.5, py: 2.5 }}>
          <Box mb={2} sx={recordScheduleServiceStyle.fileUploadSx}>
            <Typography sx={recordScheduleServiceStyle.uploadTextSx}>Upload Service Invoice/ Bill</Typography>
            <Box sx={{ pt: '20px', px: '12px' }}>
              <Box>
                <UploadDocumentType
                  id={id}
                  onUploadClick={onUploadClickFnc}
                  onScanClick={onServiceInvoiceFnc}
                  textStyle={{ fontSize: '12px', textAlign: 'center', paddingLeft: '0px' }}
                  circleStyle={{ width: '48px', height: '48px' }}
                  iconStyle={{ width: '30px', height: '30px' }}
                />
              </Box>
              {(uploadFile?.length || 0) > 0 && (
                <Box mb={2}>
                  {uploadFile?.map((val: any, i: number) => {
                    return (
                      <DocumentUploadComponent
                        key={i}
                        testid="uploadWarrantyDocument"
                        handleDelete={() => handleWarrantyDeleteClose(i)}
                        file={val}
                      />
                    );
                  })}
                </Box>
              )}
            </Box>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'8px'}
              sx={recordScheduleServiceStyle.stackFileSx}
            >
              <ThunderIcon />
              <Typography sx={recordScheduleServiceStyle.invoiceSx}>
                Upload document to fetch the below details instantly
              </Typography>
            </Stack>
          </Box>

          <Box pb={1}>
            <CustomTextfield
              testid="serviceName"
              value={externalDocumentProductDetails?.service_details?.name}
              onChange={(e) => serviceDocumentUpdateState('name', e.target.value as never)}
              definitionName="Service Name"
              isRequired
            //   placeholder="XXXXXXXXX"
            />
          </Box>
          <Stack pb={2} direction={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={'4px'}>
            <InfoGreyIcon />
            <Typography sx={recordScheduleServiceStyle.exampleSx}>
              Examples for service name can be AC first service
            </Typography>
          </Stack>

          {toggleChip && (
            <>
              <Typography mb={'12px'} sx={recordScheduleServiceStyle.serviceTypeSx}>
                Service Type <span>*</span>
              </Typography>
              <ToggleButton
                toggleStyle={{ mb: 2 }}
                buttonActiveStyle={{ whiteSpace: 'nowrap' }}
                buttonInactiveStyle={{ whiteSpace: 'nowrap' }}
                fullResponse={true}
                onChange={(val: any) => serviceDocumentUpdateState('type', val?.value)}
                value={externalDocumentProductDetails?.service_details?.type ?? ''}
                options={serviceTypeOptions}
              />
            </>
          )}

          <Box pb={2}>
            <CustomTextfield
              testid="serviceDate"
              value={externalDocumentProductDetails?.service_details?.date_of_service}
              onChange={(e) => serviceDocumentUpdateState('date_of_service', e.target.value as never)}
              definitionName="Service Date"
              isRequired
              maxDate={maxDate}
              variant="dateField"
            />
          </Box>
          <Box pb={'33px'}>
            <CustomTextfield
              testid="serviceProvider"
              value={externalDocumentProductDetails?.service_details?.service_provider}
              onChange={(e) => serviceDocumentUpdateState('service_provider', e.target.value as never)}
              definitionName="Service Provider"
              isRequired
              type="text"
            />
          </Box>
          <Button
            data-testid="submit"
            loading={loading}
            onClick={() => handleUpdateApi()}
            sx={recordScheduleServiceStyle.btnSx}
            disabled={
              externalDocumentProductDetails?.service_details?.name?.length > 0 &&
                externalDocumentProductDetails?.service_details?.date_of_service?.length > 0 &&
                externalDocumentProductDetails?.service_details?.service_provider?.length > 0
                ? false : true
            }
          >
            submit
          </Button>
        </Box>
      </DrawerComponent >

      {/* service file upload */}
      < DrawerComponent
        borderBottom
        showHeader={true}
        open={openDrawers}
        headerComponent={
          < ModalHeader
            icon={< CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText="Uploaded Service Document Files"
            onClose={() => setOpenDrawers(false)}
          />
        }
      >
        {uploadFile?.map((x: any, i: number) => {
          return (
            <Box pb={1.5} key={i}>
              <Box sx={recordScheduleServiceStyle.boxSx}>
                <Typography variant="subtitle2" sx={recordScheduleServiceStyle.uploadDocumentNameSx}>
                  {x?.name}
                </Typography>
                <Box sx={{ cursor: 'pointer' }} onClick={() => handleWarrantyDeleteClose(i)}>
                  <CloseIcon rootStyle={{ color: 'text.A100' }} />
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box pt={1}>
          <Button
            sx={recordScheduleServiceStyle.updateButtonSx}
            fullWidth
            disabled={(uploadFile?.length || 0) > 0 ? false : true}
            onClick={() => onWarrantyFileUpload()}
          >
            Update
          </Button>
        </Box>
      </DrawerComponent >
    </Box >
  );
};
