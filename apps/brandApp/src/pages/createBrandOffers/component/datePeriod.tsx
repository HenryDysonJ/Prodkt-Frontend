import { Box, Typography, Popover, Grid } from '@mui/material';
import React, { useState } from 'react';
import { InputField } from '@crayond_dev/ui_input-field';
import { PeriodStyle } from './style';
import { TimePicker } from '@crayond_dev/ui_time-picker';
import { DateRangeSelector } from '@crayond_dev/ui_date-range-selector';
import CalenderIcon from '../../../assets/calender';
import dayjs from 'dayjs';
import moment from 'moment';
import { addDays, subDays } from 'date-fns';
export interface PeriodCardProps {
  title: string;
  startDateLabel: string;
  endDateLabel: string;
  startDate: string | any;
  endDate: string | any;
  onChangeStartDate: (value: any) => void;
  onChangeEndDate: (value: any) => void;
  startTime: dayjs.Dayjs | null | any;
  endTime: dayjs.Dayjs | null | any;
  onChangeStartTime: (value: any | null) => void;
  onChangeEndTime: (value: dayjs.Dayjs | null) => void;
  startDateInputStyle?: React.CSSProperties;
  endDateInputStyle?: React.CSSProperties;
  startDateIcon?: React.ReactNode;
  endDateIcon?: React.ReactNode;
  onDateRangeSelectorOpen?: () => void;
  isEditable?: boolean;
  editedData?: any;
  startDateError?: boolean;
  endDateError?: boolean;
  handleDateRangeSubmit?: any;
  handleEndDateSubmit?: any;
  anchorEl?: any;
  setAnchorEl?: any;
  anchorE?: any;
  setAnchorE?: any;
  startDateErrorMessage?: any;
  isErrorRequired?: any;
  startTimeErrorMessage?: any;
  isErrorRequiredStartTime?: any;
  startTimeError?: any;
  status?: any;
  isErrorRequiredEndDate?: any
  endDateErrorMesssage?: any
  endTimeError?: any
  endTimeErrorMessage?: any
  isErrorRequiredEndTime?: any
}

export const PeriodCard: React.FC<PeriodCardProps> = ({
  title,
  status,
  startDateLabel,
  startDateError = false,
  isErrorRequired = false,
  startDateErrorMessage,
  startTimeErrorMessage,
  isErrorRequiredStartTime,
  startTimeError,
  endDateError = false,
  endDateLabel,
  editedData,
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  startTime,
  endTime,
  isEditable = false,
  onChangeStartTime,
  onChangeEndTime,
  startDateInputStyle = {},
  endDateInputStyle = {},
  startDateIcon,
  endDateIcon,
  onDateRangeSelectorOpen,
  handleDateRangeSubmit,
  handleEndDateSubmit,
  anchorEl,
  setAnchorEl,
  anchorE,
  setAnchorE,
  isErrorRequiredEndDate,
  endDateErrorMesssage,
  endTimeError,
  endTimeErrorMessage,
  isErrorRequiredEndTime,
}) => {
  const [selectedEndDate, setSelectedEndDate] = useState<string | any>(endDate);
  const [dateKey, setDateKey] = React.useState('');
  // const [dateValue, setDateValue] = React.useState({
  //   start: editedData?.StartDate.split(',')[0],
  //   end: editedData?.EndDate.split(',')[0],
  // });
  const handleDateClick = (event: React.MouseEvent<HTMLButtonElement>, type: string) => {
    !isEditable && setAnchorEl(event.currentTarget);
    setAnchorE(null);
    setDateKey(type);
    if (type === 'start') onChangeStartDate(event.currentTarget);
    if (type === 'end') onChangeEndDate(event.currentTarget);
  };
  const handleEndDateClick = (event: any, type: any) => {
    setAnchorE(event.currentTarget, type);
    setAnchorEl(null);
  };

  const active = status?.status?.[0]?.label;


  return (
    <Box sx={PeriodStyle.rootSx}>
      <Typography sx={{ ...PeriodStyle.titleSx }}>{title}</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} py={2}>
          <InputField
            variant='filled'
            label={startDateLabel}
            // value={startDate?.start_date}
            value={startDate?.start_date ? moment(new Date(startDate?.start_date))?.format('DD-MM-YYYY') : ''}
            error={startDateError}
            isErrorRequired={isErrorRequired}
            errorMessage={startDateErrorMessage}
            // disabled={isEditable}
            disabled={isEditable || (!isEditable && active === 'Active')}
            onClick={(e: any) => handleDateClick(e, 'start')}
            onChange={(e: any) => onChangeStartDate(e)}
            sx={{ ...PeriodStyle.dateInputStyle, ...startDateInputStyle }}
            InputProps={{
              endAdornment: (
                <Box sx={{ cursor: 'pointer' }}>
                  <CalenderIcon />
                </Box>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TimePicker
            error={startTimeError}
            errorMessage={startTimeErrorMessage}
            isErrorRequired={isErrorRequiredStartTime}
            value={startTime?.start_time ? dayjs(moment()?.format('YYYY-MM-DD') + 'T' + startTime?.start_time) : ''}
            // disabled={isEditable}
            disabled={isEditable || (!isEditable && active === 'Active')}
            onChange={(val: any | null) => {
              onChangeStartTime(val);
            }}
            headerData={[
              { id: '1', label: 'HH' },
              { id: '2', label: 'MM' },
              { id: '3', label: 'Period' },
            ]}
            label='Start time'
            sx={{
              'width': '100%',
              '& .MuiOutlinedInput-root': {
                'borderRadius': '8px',
                'height': '62px',
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'red',
                },
                ':hover': {
                  borderColor: 'none',
                },
              },
              '& .MuiTextField-root': {
                width: '100%',
              },
              '& .MuiInputLabel-root': { fontSize: '14px !important' },
              '& .MuiFormControl-root': { required: true },
              '& .MuiFilledInput-root': { paddingRight: '16px' },
            }}
            errorStyle={{ fontSize: '1rem' }}
            submitButtonStyle={{ color: '#fff', backgroundColor: '#1363DF' }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ paddingTop: '0px !important' }}>
          <InputField
            variant='filled'
            label={endDateLabel}
            disabled={isEditable}
            isErrorRequired={isErrorRequiredEndDate}
            errorMessage={endDateErrorMesssage}
            // value={endDate?.end_date}
            value={endDate?.end_date ? moment(new Date(endDate?.end_date))?.format('DD-MM-YYYY') : ''}
            error={endDateError}
            onClick={(e: any) => handleEndDateClick(e, 'end')}
            onChange={(e: any) => {
              onChangeEndDate(e);
            }}
            sx={{ ...PeriodStyle.dateInputStyle, ...endDateInputStyle }}
            InputProps={{
              endAdornment: (
                <Box sx={{ cursor: 'pointer' }}>
                  <CalenderIcon />
                </Box>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingTop: '0px !important' }}>
          <TimePicker
            value={startTime?.end_time ? dayjs(moment()?.format('YYYY-MM-DD') + 'T' + startTime?.end_time) : ''}
            disabled={isEditable}
            // onChange={onChangeEndTime}
            onChange={(val: any | null) => onChangeEndTime(val)}
            headerData={[
              { id: '1', label: 'HH' },
              { id: '2', label: 'MM' },
              { id: '2', label: 'Period' },
            ]}
            // inputRootstyle={{
            //   '& .css-ndemya-MuiFormControl-root-MuiTextField-root': {
            //     width: '100%',
            //   },
            //   '.MuiFilledInput-root.Mui-disabled': {
            //     color: 'gray',
            //     backgroundColor: '#E6EAEB !important',
            //     borderColor: '#E6EAEB',
            //   },
            // }}
            sx={{
              'width': '100%',
              '& .MuiOutlinedInput-root': {
                'borderRadius': '8px',
                'height': '62px',
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'red',
                },
                ':hover': {
                  borderColor: 'none',
                },
              },
              '& .MuiTextField-root': {
                width: '100%',
              },
              '& .MuiInputLabel-root': { fontSize: '14px !important' },
              '& .MuiFormControl-root': { required: true },
              '& .MuiFilledInput-root': { paddingRight: '16px' },
            }}
            label='End time'
            error={endTimeError}
            errorMessage={endTimeErrorMessage}
            isErrorRequired={isErrorRequiredEndTime}
            errorStyle={{ fontSize: '1rem' }}
            submitButtonStyle={{ color: '#fff', backgroundColor: '#1363DF' }}
          />
        </Grid>
      </Grid>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: PeriodStyle.datePopoverStyle,
        }}
      >
        <DateRangeSelector
          selectsRange={false}
          getStartDate={startDate?.start_date}
          onSubmit={(e) => handleDateRangeSubmit(e)}
          secondButton
          firstButton
          sx={PeriodStyle.dateCalenderStyle}
          subRootStyle={{ width: '300px' }}
          selectedBackgroundColor={'primary.main'}
          selectedColor={'primary.contrastText'}
          cancelButtonStyle={PeriodStyle.cancelButtonStyle}
          doneButtonStyle={PeriodStyle.doneButtonStyle}
          onCancelClick={() => setAnchorEl(null)}
          minDate={addDays(new Date(), 0)}
          // maxDate={subDays(startDate?.fromDate, 0)}
        />
      </Popover>

      <Popover
        open={Boolean(anchorE)}
        anchorEl={anchorE}
        onClose={() => setAnchorE(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: PeriodStyle.datePopoverStyle,
        }}
      >
        <DateRangeSelector
          selectsRange={false}
          getStartDate={endDate?.end_date ?? new Date()}
          onSubmit={(e) => handleEndDateSubmit(e)}
          secondButton
          firstButton
          sx={PeriodStyle.dateCalenderStyle}
          subRootStyle={{ width: '300px' }}
          selectedBackgroundColor={'primary.main'}
          selectedColor={'primary.contrastText'}
          cancelButtonStyle={PeriodStyle.cancelButtonStyle}
          doneButtonStyle={PeriodStyle.doneButtonStyle}
          onCancelClick={() => setAnchorE(null)}
          minDate={addDays(startDate?.start_date, 0)}
        />
      </Popover>
    </Box>
  );
};