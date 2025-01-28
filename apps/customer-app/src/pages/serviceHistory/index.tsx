/* eslint-disable react/jsx-key */
import { useProductDetails, useScanproduct } from '@core/store';
import { BackCircleIcon, Button, PageHeader } from '@core/ui/atoms';
import { CaptureImage, MaintenanceCard } from '@core/ui/components';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { serviceHistoryStyle } from './style';
import { NewAddIcon } from '@core/ui/atoms/icons/serviceReminderIcon';
import { RecordScheduleService } from '@pages/recordScheduleService';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';

export default function ServiceHistory() {
  const { productMaintenance, product_details, getMaintenanceDetails } = useProductDetails();

  const maintenanceData = [
    {
      headerText: 'General Maintenance',
      subText: 'Service Type',
      amountText: 'Service Provider',
      dateText: '16 Apr, 23',
      downloadText: '4500',
      ServiceProviderText: 'Download',
    },
    {
      headerText: 'Overall Maintenance',
      subText: 'Service Type',
      amountText: 'Service Provider',
      dateText: '16 Apr, 23',
      downloadText: '4500',
      ServiceProviderText: 'Download',
    },
    {
      headerText: 'General Maintenance',
      subText: 'Service Type',
      amountText: 'Service Provider',
      dateText: '16 Apr, 23',
      downloadText: '4500',
      ServiceProviderText: 'Download',
    },
    {
      headerText: 'Overall Maintenance',
      subText: 'Service Type',
      amountText: 'Service Provider',
      dateText: '16 Apr, 23',
      downloadText: '4500',
      ServiceProviderText: 'Download',
    },
  ];

  const { openServiceRecordDrawer, onUpdateCaptureImage, dataURIs, openServiceRecordType, updateServiceRecordDrawerState, getAmcUpdate } = useScanproduct();

  const navigate = useNavigate();

  // insurance
  const [showInsuranceComponent, setShowInsuranceComponent] = useState(false);
  const [openInsuranceDrawer, setOpenInsuranceDrawer] = useState(false);


  const openRecordDrawer = () => {
    updateServiceRecordDrawerState('openServiceRecordDrawer', true);
    updateServiceRecordDrawerState('openServiceRecordType', true);
  };

  const onServiceInvoiceFnc = (type: string) => {
    setShowInsuranceComponent(true)
    updateServiceRecordDrawerState('openServiceRecordDrawer', false);
    updateServiceRecordDrawerState('serviceHistoryUploadType', type);
    updateServiceRecordDrawerState('productDetailsProductId', product_details?.product_id);
    // onServiceType(type);
  };

  const onBackRoute = () => {
    navigate(`/serviceHistory`);
    setShowInsuranceComponent(false);
    updateServiceRecordDrawerState('openServiceRecordDrawer', false);
  };
  const onBackRouteProductDetails = () => {
    getAmcUpdate(false)
    navigate(`/productDetails/${product_details?.product_id}`);
    setShowInsuranceComponent(false);

    updateServiceRecordDrawerState('openServiceRecordDrawer', false);
  };

  const onRouteGallery = () => {
    navigate('/uploadedgallery', {
      state: {
        drawerProductId: product_details?.product_id,
      },
    });
  };

  useEffect(() => {
    getMaintenanceDetails();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Service history page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <>
      {
        showInsuranceComponent ? (
          <>
            <CaptureImage
              backRequired
              useBackBtnClick
              onBackBtnClick={onBackRoute}
              dataURIs={dataURIs}
              onGalleryGo={onRouteGallery}
              UploadImage={(val: string) => onUpdateCaptureImage(val)}
            />
          </>) :
          <>
            <Box sx={serviceHistoryStyle.rootSx}>
              <Box py={3} px={2.5}>
                <PageHeader
                  useBackBtnClick
                  onBackBtnClick={onBackRouteProductDetails}
                  showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Service History" />
              </Box>
              <Box py={2} px={2.5} sx={{ height: 'calc(100vh - 175px)', overflowY: 'scroll' }}>
                <Typography sx={{ color: 'text.A100' }} variant="subtitle2" fontWeight={700}>
                  Services ({productMaintenance.length})
                </Typography>
                <MaintenanceCard sx={{ bgcolor: 'none' }} maintenance={productMaintenance} />
              </Box>
            </Box>
            <Box sx={serviceHistoryStyle.btnBox}>
              <Button sx={serviceHistoryStyle.btnSx} onClick={() => openRecordDrawer()}>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'6px'}>
                  <NewAddIcon />
                  <>Add Service Record</>
                </Stack>
              </Button>
            </Box>
            <RecordScheduleService
              drawerOpen={openServiceRecordDrawer}
              toggleChip={openServiceRecordType}
              id='service_invoice'
              onServiceInvoiceFnc={() => onServiceInvoiceFnc('service_invoice')}
              productId={product_details?.product_id}
            />
          </>
      }
    </>
  );
}
