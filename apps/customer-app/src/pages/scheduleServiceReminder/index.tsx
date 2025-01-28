import { webRoutes } from '@core/routes';
import { useScheduleServiceReminder } from '@core/store';
import { CheckBox, CloseIcon, CustomTextfield, ToggleButton } from '@core/ui/atoms';
import { ServiceReminderDateIcon, ServiceReminderIcon } from '@core/ui/atoms/icons/serviceReminderIcon';
import { DrawerComponent, FooterButtonComponent, ModalHeader } from '@core/ui/components';
import { Box, Divider, Stack, Typography } from '@mui/material';
import moment from 'moment';
import { enqueueSnackbar } from 'notistack';
import { scheduleServiceReminderStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { useEffect, useState } from 'react';
export interface ScheduleServiceReminderProps {
  // drawerOpen: boolean;
  // toggleChip?: boolean;
  // onServiceInvoiceFnc?: (type: string) => void;
  handleNavigate?: () => void;
  handleNavigates?: () => void;
  getUpdateActionRequired?: () => void;
}

export const ScheduleServiceReminder = (props: ScheduleServiceReminderProps): JSX.Element => {
  const { handleNavigates = () => false, handleNavigate = () => false, getUpdateActionRequired = () => false } = props;

  // export default function ScheduleServiceReminder() {
  const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

  const {
    openScheduleReminderDrawer,
    clearState,
    lastServiceDate,
    reminderDate,
    updateServiceReminderData,
    updateScheduleReminders,
    isShowAmc,
    showCustomMonth,
    serviceRemindersData,
    showLastService,
    updateDrawerState,
    nextStep,
  } = useScheduleServiceReminder();

  const navigate = useNavigate();
  const options = [
    {
      label: '3 Months',
      value: '3month',
      data: 3,
    },
    {
      label: '6 Months',
      value: '6month',
      data: 6,
    },
    {
      label: '12 Months',
      value: '12month',
      data: 12,
    },
    {
      label: 'Custom',
      value: 'custom',
      data: 1,
    },
  ];

  const handleChangeChecked = (isChecked: boolean, val: boolean) => {
    updateDrawerState('showLastService', val);
    updateServiceReminderData('amc_service_availed', 0);
    updateServiceReminderData('last_service', '');
  };
  const handleUpdatePeriodic = () => {
    updateServiceReminderData('is_maintenance_enabled', false);
    updateDrawerState('openScheduleReminderDrawer', false);
    updateScheduleReminders(() => {
      getUpdateActionRequired();
    });
    clearState();
    navigate(webRoutes.home);
  };

  const handleValidate = async () => {
    if (serviceRemindersData?.service_interval?.data === 0) {
      enqueueSnackbar(`Fill all the mandatory fields`, {
        variant: 'error',
      });
    } else if (
      showLastService ? serviceRemindersData?.last_service !== '' : serviceRemindersData?.last_service === ''
    ) {
      enqueueSnackbar(`Fill all the mandatory fields`, {
        variant: 'error',
      });
    } else if (
      isShowAmc ? serviceRemindersData?.total_amc_service === 0 : serviceRemindersData?.total_amc_service !== 0
    ) {
      enqueueSnackbar(`Fill all the mandatory fields`, {
        variant: 'error',
      });
    } else if (
      isShowAmc && !showLastService
        ? serviceRemindersData?.amc_service_availed === 0
        : serviceRemindersData?.amc_service_availed !== 0
    ) {
      enqueueSnackbar(`Fill all the mandatory fields`, {
        variant: 'error',
      });
    } else
      await updateScheduleReminders(() => {
        getUpdateActionRequired();
      });
  };

  const goToHomePage = () => {
    setTimeout(() => {
      if (nextStep) {
        window.location.replace(`${webRoutes.home}`);
      }
    }, 3000);
  };

  useEffect(() => {
    goToHomePage()
  }, [nextStep])


  // Amplitude tracking
  useEffect(() => {
    track('Schedule service Reminder page', {
      name: 'customer-app',
    });
  }, []);
  return (
    <Box sx={{ position: 'relative' }}>
      <DrawerComponent
        open={openScheduleReminderDrawer}
        showHeader={true}
        heightStyle={{ padding: '0', minHeight: '200px' }}
        headerStyle={{ paddingRight: '12px' }}
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100', cursor: 'pointer' }} />}
            showIcon={nextStep ? true : false}
            showHeader={true}
            headerText={nextStep ? '' : 'Schedule Periodic Service Reminders'}
            onClose={() => handleNavigates()}
          />
        }
      >
        {nextStep ? (
          <Box>
            <Box sx={{ position: 'absolute', width: '100%', top: '24px' }}>
              <Stack direction={'row'} mb={2.5} alignItems={'flex-start'} justifyContent={'center'}>
                <ServiceReminderIcon />
              </Stack>
              <Typography variant="subtitle2" sx={scheduleServiceReminderStyle.upcomingTextSx}>
                Upcoming service scheduled on
              </Typography>
              <Stack direction={'row'} mt={1.4} mb={2} alignItems={'flex-start'} justifyContent={'center'}>
                <ServiceReminderDateIcon />
                <Typography sx={scheduleServiceReminderStyle.dateTextSx}>
                  {moment(reminderDate).format('D MMM YY')}
                </Typography>
              </Stack>
              {/* serviceRemindersData?.last_service ? `Your first service should have completed on 24 July 23. Scheduling your first service in the next 10 days. We'll remind you 7 days prior` :  */}
              <Typography sx={scheduleServiceReminderStyle.subTextSx}>
                {lastServiceDate
                  ? `Your first service should have completed on ${moment(lastServiceDate).format(
                    'D MMM YY',
                  )}. Scheduling your first service in the next 10 days. We'll remind you 7 days prior`
                  : `We'll remind you 7 days prior`}
              </Typography>
            </Box>
          </Box>
        ) : (
          <>
            <Divider sx={scheduleServiceReminderStyle.divider} />
            <Box sx={{ px: 2.5, py: 2.5 }}>
              <Typography sx={scheduleServiceReminderStyle.intervalTextSx}>
                Set Preferred Service Intervals <span>*</span>
              </Typography>
              <ToggleButton
                toggleStyle={{ flexWrap: 'wrap' }}
                buttonActiveStyle={{ whiteSpace: 'nowrap' }}
                buttonInactiveStyle={{ whiteSpace: 'nowrap' }}
                fullResponse={true}
                onChange={(value: string | number) => {
                  updateServiceReminderData('service_interval', value as never);
                }}
                // onChange={(val) => handleChangeToggleValue(val as never)}
                value={serviceRemindersData?.service_interval?.value ?? ''}
                options={options}
              />

              {serviceRemindersData?.service_interval?.value === 'custom' && (
                <CustomTextfield
                  textFieldStyle={{ mb: 1, mt: 2 }}
                  definitionName="Enter Manually"
                  isRequired
                  yearValue={serviceRemindersData?.service_interval?.data}
                  yearText="Months"
                  variant="addYear"
                  handleIncrement={() =>
                    updateServiceReminderData('service_interval', {
                      ...serviceRemindersData?.service_interval,
                      data: serviceRemindersData?.service_interval?.data + 1,
                    } as never)
                  }
                  handleDecrement={() =>
                    serviceRemindersData?.service_interval?.data > 1
                      ? updateServiceReminderData('service_interval', {
                        ...serviceRemindersData?.service_interval,
                        data: serviceRemindersData?.service_interval?.data - 1,
                      } as never)
                      : null
                  }
                />
              )}
              {isShowAmc && (
                <CustomTextfield
                  testid="totalServices"
                  incrementId="plus1"
                  decrementId="minus1"
                  textFieldStyle={{ mb: 1, mt: 2 }}
                  definitionName="Total No. of Services in AMC"
                  isRequired
                  yearValue={serviceRemindersData?.total_amc_service}
                  variant="addYear"
                  handleIncrement={() =>
                    updateServiceReminderData(
                      'total_amc_service',
                      (serviceRemindersData?.total_amc_service + 1) as never,
                    )
                  }
                  handleDecrement={() =>
                    serviceRemindersData?.total_amc_service > 0
                      ? updateServiceReminderData(
                        'total_amc_service',
                        (serviceRemindersData?.total_amc_service - 1) as never,
                      )
                      : null
                  }
                />
              )}
              {!showLastService && isShowAmc && (
                <CustomTextfield
                  testid="availedServices"
                  incrementId="plus2"
                  decrementId="minus2"
                  textFieldStyle={{ mb: 1, mt: 2 }}
                  definitionName="No. of Services Availed in AMC"
                  isRequired
                  yearValue={serviceRemindersData?.amc_service_availed}
                  variant="addYear"
                  handleIncrement={() =>
                    updateServiceReminderData(
                      'amc_service_availed',
                      (serviceRemindersData?.amc_service_availed + 1) as never,
                    )
                  }
                  handleDecrement={() =>
                    serviceRemindersData?.amc_service_availed > 0
                      ? updateServiceReminderData(
                        'amc_service_availed',
                        (serviceRemindersData?.amc_service_availed - 1) as never,
                      )
                      : null
                  }
                />
              )}
              {!showLastService && (
                <CustomTextfield
                  inputProps={{ 'data-testid': 'lastService' }}
                  textFieldStyle={{ mb: 1, mt: 2 }}
                  definitionName="When was your last service?"
                  isRequired
                  variant="dateField"
                  maxDate={maxDate}
                  value={serviceRemindersData?.last_service}
                  onChange={(e) => updateServiceReminderData('last_service', e.target.value)}
                />
              )}

              <Stack direction={'row'} alignItems={'center'} mt={1.6} gap={'3px'}>
                <CheckBox
                  onChange={(isChecked: boolean, e: any) => handleChangeChecked(isChecked, e.target.checked)}
                  isSquare
                />
                <Typography sx={scheduleServiceReminderStyle.noNeedTextSx}>I haven't done any service yet</Typography>
              </Stack>
              <FooterButtonComponent
                sx={{ mt: 3 }}
                showLeftBtn={true}
                leftButtonStyle={{
                  fontWeight: '600',
                }}
                rightButtonStyle={{
                  fontWeight: '600',
                }}
                showRightBtn={true}
                leftButton="I'll do it later"
                handleClickPrevious={() => handleNavigate()}
                handleClickNext={() => handleValidate()}
                rightButton={'Set Reminder'}
                schduleService
              />
              <Typography onClick={handleUpdatePeriodic} sx={scheduleServiceReminderStyle.periodicSx}>
                I never do periodic maintenance
              </Typography>
            </Box>
          </>
        )}
      </DrawerComponent>
    </Box>
  );
};
