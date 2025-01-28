import InputFeildComponent from "@pages/brandCreateWebForm/components/inputFeild";
import { Box, Popover, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Checkbox } from "@crayond_dev/ui_checkbox";

import { broadcastMsgStyle } from "../style";
import { DefaultRondUnCheck } from "../../../assets/defaultRondUnCheck";
import { DefaultRoundChecked } from "../../../assets/defaultRoundChecked";
import CalenderIcon from "../../../assets/calender";
import { TimerIcon } from "../../../assets/timerIcon";
import { TimePicker } from "@crayond_dev/ui_time-picker";
import { useBroadCastMessage } from "@core/store/brand-app";
import dayjs from 'dayjs';
import moment from 'moment';
import { DateRangeSelector } from '@crayond_dev/ui_date-range-selector';
import { InputField } from '@crayond_dev/ui_input-field';
import { addDays, subDays } from 'date-fns';

export const SheduleAndPublish = () => {
  const { broadCasteState, setScheduleAndPublish, error } = useBroadCastMessage();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDateRangeSubmit = (date: any) => {
    setScheduleAndPublish("startDate", date);
    setAnchorEl(null);
  };


  const handleStartTimeChange = (value: any | null) => {

    const date = new Date(value);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    let period = 'AM';
    if (hours >= 12) {
      period = 'PM';
    }

    let formattedHours = hours % 12;
    formattedHours = formattedHours || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    setScheduleAndPublish('startTime', formattedTime);
  };

  const handleDateClick = (event: React.MouseEvent<HTMLButtonElement>, type: string) => {
    if (broadCasteState?.sheduleAndPublish?.deliveryType != 'Immediate') {
      setAnchorEl(event.currentTarget);
    }
    // setAnchorEl(null);
    // setDateKey(type);
  };


  return (
    <>
      <Stack>
        <Typography sx={broadcastMsgStyle.sublabelStyle} mb={"1.2rem"}>
          Schedule & publish
        </Typography>
        <Typography sx={broadcastMsgStyle.temTitleStyle}>
          Delivery type
        </Typography>
        <Stack direction={"row"} columnGap={2} mt={1.5}>
          <Checkbox
            id={"Checkbox_i"}
            className={""}
            label={"Immediate"}
            checked={Boolean(broadCasteState?.sheduleAndPublish?.deliveryType === 'Immediate')}
            indeterminate={false}
            onChange={(e) =>
              setScheduleAndPublish("deliveryType", 'Immediate')
            }
            labelStyle={{
              ...broadcastMsgStyle.statusTitle,
              color: "text.main",
            }}
            checkedIcon={<DefaultRoundChecked />}
            icon={<DefaultRondUnCheck />}
          />
          <Checkbox
            id={"Checkbox_i"}
            className={""}
            label={"Schedule"}
            checked={Boolean(broadCasteState?.sheduleAndPublish?.deliveryType === 'Scheduled')}
            indeterminate={false}
            onChange={(e) =>
              setScheduleAndPublish("deliveryType", 'Scheduled')
            }
            labelStyle={{
              ...broadcastMsgStyle.statusTitle,
              color: "text.main",
            }}
            checkedIcon={<DefaultRoundChecked />}
            icon={<DefaultRondUnCheck />}
          />
        </Stack>
        <Stack direction={"row"} columnGap={2} mt={1.5} width={"100%"}>

          <InputField
            variant='filled'
            label={"Start date"}
            value={broadCasteState?.sheduleAndPublish?.startDate ? moment(broadCasteState?.sheduleAndPublish?.startDate, 'YYYY-MM-DD')?.format('DD-MM-YYYY') : 'dd-mm-yyyy'}
            onClick={(e: any) => handleDateClick(e, 'start')}
            // onChange={(e: any) => onChangeStartDate(e)}
            sx={{ ...broadcastMsgStyle.dateInputStyle, width: '500px' }}
            InputProps={{
              placeholder: "DD-MM-YYYY",
              sx: {
                "& input::placeholder": {
                  fontSize: "14px"
                },
                fontSize: "14px"
              },
              endAdornment: (
                <Box sx={{ cursor: 'pointer' }}>
                  <CalenderIcon />
                </Box>
              ),
            }}
            fullWidth
            error={error?.startDate?.length ? true : false}
            isErrorRequired={error?.startDate?.length ? true : false}
            errorMessage={error?.startDate}
            disabled={broadCasteState?.sheduleAndPublish?.deliveryType === 'Immediate' ? true : false}
          />
          <TimePicker
            value={broadCasteState?.sheduleAndPublish?.startTime ? dayjs(moment()?.format('YYYY-MM-DD') + 'T' + broadCasteState?.sheduleAndPublish?.startTime) : '' as any}
            onChange={(val: any | null) => handleStartTimeChange(val)}
            onAccept={(val: any | null) => console.log(val, "iui")}
            headerData={[
              { id: "1", label: "HH" },
              { id: "2", label: "MM" },
              { id: "3", label: "SS" },
            ]}
            label="Start time"
            variant="filled"
            placeholder="hh-mm"
            fullWidth
            sx={{ width: "34rem" }}
            submitButtonStyle={{ color: '#fff', backgroundColor: '#1363DF' }}
            error={error?.startTime?.length ? true : false}
            isErrorRequired={error?.startTime?.length ? true : false}
            errorMessage={error?.startTime}
            errorStyle={{ fontSize: '1rem' }}
            disabled={broadCasteState?.sheduleAndPublish?.deliveryType === 'Immediate' ? true : false}
          />
        </Stack>
      </Stack>

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
          sx: broadcastMsgStyle.datePopoverStyle,
        }}
      >
        <DateRangeSelector
          selectsRange={false}
          getStartDate={broadCasteState?.sheduleAndPublish?.startDate ? new Date(moment(broadCasteState?.sheduleAndPublish?.startDate, 'YYYY-MM-DD')?.format('YYYY-MM-DD')) : new Date()}

          // getStartDate={broadCasteState?.sheduleAndPublish?.startDate}
          onSubmit={(e) => handleDateRangeSubmit(e)}
          secondButton
          firstButton
          sx={broadcastMsgStyle.dateCalenderStyle}
          subRootStyle={{ width: '300px' }}
          selectedBackgroundColor={'primary.main'}
          selectedColor={'primary.contrastText'}
          cancelButtonStyle={broadcastMsgStyle.cancelButtonStyle}
          doneButtonStyle={broadcastMsgStyle.doneButtonStyle}
          onCancelClick={() => setAnchorEl(null)}
          minDate={addDays(new Date(), 0)}
        />
      </Popover>
    </>
  );
};
