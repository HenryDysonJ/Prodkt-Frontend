import { Box, Typography, Popover, Grid } from '@mui/material';
import React, { useState } from 'react';
import { InputField } from '@crayond_dev/ui_input-field';
import { ActiveModalStyle } from './style';
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

export const ActiveModal: React.FC<PeriodCardProps> = ({
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
    <Box sx={ActiveModalStyle.rootSx}>
      <Typography sx={{ ...ActiveModalStyle.titleSx }}>{title}</Typography>
      <Typography sx={ActiveModalStyle.subtext}>Please ensure to change the offer period to mark the offer as active</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} py={2}>
          <InputField
            variant='filled'
            label={startDateLabel}
            value={startDate?.start_date ? moment(startDate?.start_date, 'YYYY-MM-DD')?.format('DD-MM-YYYY') : ''}
            isErrorRequired={false}
            disabled={isEditable || (!isEditable && active === 'Active')}
            onClick={(e: any) => handleDateClick(e, 'start')}
            onChange={(e: any) => onChangeStartDate(e)}
            sx={{ ...ActiveModalStyle.dateInputStyle, ...startDateInputStyle }}
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
            submitButtonStyle={{ color: '#fff', backgroundColor: '#1363DF' }}
            error={false}
            value={dayjs(moment()?.format('YYYY-MM-DD') + 'T' + startDate?.start_time)}
            disabled={isEditable || (!isEditable && active === 'Active')}
            onChange={(val: any | null) => {
              onChangeStartTime(val);
            }}
            headerData={[
              { id: '1', label: 'HH' },
              { id: '2', label: 'MM' },
              { id: '2', label: 'Period' },
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
              '& .MuiInputLabel-root': { fontSize: '12px !important' },
              '& .MuiFormControl-root': { required: true },
              '& .MuiFilledInput-root': { paddingRight: '16px' },
            }}
            errorStyle={{ fontSize: '1rem' }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ paddingTop: '0px !important' }}>
          <InputField
            variant='filled'
            label={endDateLabel}
            disabled={isEditable}
            isErrorRequired={false}
            value={startDate?.end_date ? moment(startDate?.end_date, 'YYYY-MM-DD')?.format('DD-MM-YYYY') : ''}
            error={endDateError}
            onClick={(e: any) => handleEndDateClick(e, 'end')}
            onChange={(e: any) => {
              onChangeEndDate(e);
            }}
            sx={{ ...ActiveModalStyle.dateInputStyle, ...endDateInputStyle }}
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
            submitButtonStyle={{ color: '#fff', backgroundColor: '#1363DF' }}
            value={dayjs(moment()?.format('YYYY-MM-DD') + 'T' + endTime?.end_time)}
            disabled={isEditable}
            // onChange={onChangeEndTime}
            onChange={(val: any | null) => onChangeEndTime(val)}
            headerData={[
              { id: '1', label: 'HH' },
              { id: '2', label: 'MM' },
              { id: '2', label: 'Period' },
            ]}
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
              '& .MuiInputLabel-root': { fontSize: '12px !important' },
              '& .MuiFormControl-root': { required: true },
              '& .MuiFilledInput-root': { paddingRight: '16px' },
            }}
            label='End time'
            error={false}
            errorStyle={{ fontSize: '1rem' }}
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
      >
        <DateRangeSelector
          selectsRange={false}
          getStartDate={startDate?.start_date ? new Date(moment(startDate?.start_date, 'YYYY-MM-DD')?.format('YYYY-MM-DD')) : new Date()}
          onSubmit={(e) => handleDateRangeSubmit(e)}
          secondButton
          firstButton
          sx={ActiveModalStyle.dateCalenderStyle}
          selectedBackgroundColor={'primary.main'}
          selectedColor={'primary.contrastText'}
          cancelButtonStyle={ActiveModalStyle.cancelButtonStyle}
          doneButtonStyle={ActiveModalStyle.doneButtonStyle}
          onCancelClick={() => setAnchorEl(false)}
          initialSelectedBgcolor='#1363DF !important'
          minDate={addDays(new Date(), 0)}
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
       
      >
        <DateRangeSelector
          selectsRange={false}
          getStartDate={startDate?.end_date ? new Date(moment(startDate?.end_date, 'YYYY-MM-DD')?.format('YYYY-MM-DD')) : new Date()}
          onSubmit={(e) => handleEndDateSubmit(e)}
          secondButton
          firstButton
          sx={ActiveModalStyle.dateCalenderStyle}
          selectedBackgroundColor={'primary.main'}
          selectedColor={'primary.contrastText'}
          cancelButtonStyle={ActiveModalStyle.cancelButtonStyle}
          doneButtonStyle={ActiveModalStyle.doneButtonStyle}
          onCancelClick={() => setAnchorE(false)}
          initialSelectedBgcolor='#1363DF !important'
          minDate={addDays(new Date(), 0)}

        />
      </Popover>
    </Box>
  );
};