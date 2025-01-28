import { Box, Stack, Typography } from '@mui/material';

import { webRoutes } from '@core/routes';
import { useArchiveProduct, useHome, useScheduleServiceReminder } from '@core/store';
import { ArchivedProductDataInterface } from '@core/store/interface';
import { BackCircleIcon, PageHeader } from '@core/ui/atoms';
import { ServiceReminderSearchIcon, UnarchiveProductIcon } from '@core/ui/atoms/icons/serviceReminderIcon';
import { ArchivedProductCard, DrawerComponent, FooterButtonComponent } from '@core/ui/components';
import { ScheduleServiceReminder } from '@pages/scheduleServiceReminder';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { archivedProductsStyle } from './style';
import { track } from '@amplitude/analytics-browser';

export default function ArchivedProducts() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ArchivedProductDataInterface>();

  const navigate = useNavigate();

  const { clearState, updateDrawerState, updateServiceReminderData } = useScheduleServiceReminder();

  const {
    loading,
    archivedProductDataDetails,
    updateUnarchivedProduct,
    getArchivedProductDetails,
  } = useArchiveProduct();
  
  const { getDisplayActionRequired } = useHome();

  const handleCloseScheduleReminderDrawer = () => {
    updateDrawerState('openScheduleReminderDrawer', false);
    clearState();
  };

  const unArchivedClick = (val: ArchivedProductDataInterface) => {
    setData(val);
    setOpen(true);
  };

  const handleUnarchiveProduct = () => {
    if (data) {
      updateUnarchivedProduct(data?.user_product_id);
      setOpen(false);
      if (data?.is_amc_eligible) {
        updateDrawerState('openScheduleReminderDrawer', true);
        updateDrawerState('isShowAmc', data?.is_amc_eligible);
        updateServiceReminderData('user_product_id', data?.user_product_id);

        navigate(webRoutes.home);
      } else {
        navigate(webRoutes.home);
      }
    }
  };

  const getUpdateActionRequired = () => {
    getDisplayActionRequired();
  };

  const viewDocumentClick = (val: ArchivedProductDataInterface) => {
    navigate(`/viewProductDocument/${val?.user_product_id}`, {
      state: {
        shareIcon: false,
        archiveTrue: true
      }
    });
  };

  useEffect(() => {
    getArchivedProductDetails();
  }, []);

  // Amplitude tracking
  useEffect(() => {
    track('Archived Product page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <>
      <Box sx={archivedProductsStyle.rootSx}>
        <Box>
          <PageHeader
            subRootStyle={{ width: '88%' }}
            icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon
            header
            headerText="Archived Products"
          />
        </Box>

        {
          archivedProductDataDetails?.length > 0 ?
            <Box>
              <ArchivedProductCard
                archivedProductData={archivedProductDataDetails}
                handleDocumentClick={viewDocumentClick}
                handleClick={unArchivedClick}
                loading={loading}
              />
            </Box>
            :
            // Empty state
            <Box sx={{
              display: 'grid',
              minHeight: '90vh',
              placeItems: 'center',
              alignContent: 'center'
            }}>
              <Stack padding="20px" direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <ServiceReminderSearchIcon />
                <Typography sx={{ color: 'text.A100' }} mt={1.5} fontWeight="600" variant="subtitle2">
                  No Archived Product found!
                </Typography>
              </Stack>
            </Box>
        }
      </Box>

      {open && (
        <DrawerComponent
          open={open}
          footer
          footerComponent={
            <FooterButtonComponent
              handleClickPrevious={() => setOpen(false)}
              handleClickNext={() => handleUnarchiveProduct()}
              showLeftBtn={true}
              showRightBtn={true}
              leftButton="No, Cancel"
              rightButton="Yes, Unarchive"
              paddingTopRemove
            />
          }
        >
          <Box sx={archivedProductsStyle.cardInnerSx}>
            <Box sx={{ mt: '10px', mb: '15px' }}>
              <UnarchiveProductIcon />
            </Box>
            <Typography sx={archivedProductsStyle.titleSx}>Unarchive Product?</Typography>
            <Typography sx={archivedProductsStyle.subTitleSx}>
              Are you sure want to unarchive <Box sx={{ color: 'text.A100' }} component="span">{data?.nick_name}</Box>
            </Typography>
          </Box>
        </DrawerComponent>
      )}

      {/* Schedule Sevice Remainder Drawer */}

      <ScheduleServiceReminder
        getUpdateActionRequired={getUpdateActionRequired}
        handleNavigate={handleCloseScheduleReminderDrawer}
      />
    </>
  );
}
