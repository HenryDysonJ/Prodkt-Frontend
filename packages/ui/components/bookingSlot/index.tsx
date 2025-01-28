import { Button } from '@atoms/button';
import { DataTabs } from '@atoms/dataTabs';
import { CalenderIcon, LeftCircleArrowIcon, RightCircleArrowIcon, TimeIcon } from '@atoms/icons';
import { webRoutes } from '@core/routes';
import { useServiceProviders } from '@core/store';
import { SlotProps } from '@core/store/interface';
import { Box, Divider, Grid, IconButton, Stack, SxProps, Theme, Typography, useMediaQuery } from '@mui/material';
import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  differenceInCalendarMonths,
  eachDayOfInterval,
  endOfWeek,
  format,
  isAfter,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
} from 'date-fns';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { bookingSlotStyle } from './style';

export function getDateFormat(date: Date | string, format: string) {
  return moment(date).format(format ?? 'YYYY-MM-DD');
}
export interface BookingSlotProps {
  className?: string;
  sx?: SxProps<Theme>;
  handleBookServiceDrawer: (status: boolean) => void;
}

export const BookingSlot = (props: BookingSlotProps): JSX.Element => {
  const { className = '', sx = {}, handleBookServiceDrawer, ...rest } = props;
  const { selectedDate, setSelectedDate, selectedSlot, setSelectedSlot, bookingSlot } = useServiceProviders();
  const [tabIndex, setTabIndex] = useState<number | string>(1);
  const media = useMediaQuery('(max-width:360px)');
  const navigate = useNavigate();
  const [weekList, setWeekList] = useState<Array<string | Date>>([]);
  const [showMonthAndYear, setShowMonthAndYear] = useState<string>('');

  const getCurrentWeek = () => {
    setShowMonthAndYear(getDateFormat(new Date(), 'MMM, YYYY'));
    const currentDate = new Date(); // get current date
    const first = currentDate.getDate() - currentDate.getDay(); // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6
    const WeekFirstDay = new Date(currentDate.setDate(first)).toUTCString();
    const weekLastDay = new Date(currentDate.setDate(last)).toUTCString();
    const weekList: Array<string | Date> = eachDayOfInterval({
      start: new Date(WeekFirstDay),
      end: new Date(weekLastDay),
    });
    setWeekList(weekList);
  };
  // GET NEXT WEEK DATA
  const nextWeek = () => {
    const start = format(addDays(new Date(weekList[0]), 7), 'yyyy,L,dd');
    const end = format(addDays(new Date(weekList[weekList?.length - 1]), 7), 'yyyy,L,dd');
    const betweenDates = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    });
    setShowMonthAndYear(getDateFormat(new Date(betweenDates[0]), 'MMM, YYYY'));
    setWeekList(betweenDates);
  };

  // GET PREVIOUS WEEK DATA
  const previousWeek = () => {
    const start = format(subDays(new Date(new Date(weekList[0])), 7), 'yyyy,L,dd');
    const end = format(subDays(new Date(weekList[weekList?.length - 1]), 7), 'yyyy,L,dd');
    const betweenDates = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    });
    setShowMonthAndYear(getDateFormat(new Date(betweenDates[0]), 'MMM, YYYY'));
    setWeekList(betweenDates);
  };

  // GET PREVIOUS MONTH DATA
  const previousMonth = () => {
    const current_month = subMonths(new Date(weekList[weekList?.length - 1]), 1);
    const start_of_month = startOfMonth(new Date(current_month));
    const start_week = startOfWeek(new Date(start_of_month));
    const end_week = endOfWeek(new Date(start_of_month));
    const betweenDates = eachDayOfInterval({
      start: new Date(format(start_week, 'yyyy,L,dd')),
      end: new Date(format(end_week, 'yyyy,L,dd')),
    });
    setShowMonthAndYear(getDateFormat(new Date(betweenDates[0]), 'MMM, YYYY'));
    // SET START_OF_WEEK, END_OF_WEEK & BETWEEN_DATES IN STORE
    setWeekList(betweenDates);
  };

  // GET NEXT MONTH 7 DATA
  const nextMonth = () => {
    const current_month = addMonths(new Date(weekList[weekList?.length - 1]), 1);
    const start_of_month = startOfMonth(new Date(current_month));
    const start_week = startOfWeek(new Date(start_of_month));
    const end_week = endOfWeek(new Date(start_of_month));
    const betweenDates = eachDayOfInterval({
      start: new Date(format(start_week, 'yyyy,L,dd')),
      end: new Date(format(end_week, 'yyyy,L,dd')),
    });
    setShowMonthAndYear(getDateFormat(new Date(betweenDates[0]), 'MMM, YYYY'));
    // SET START_OF_WEEK, END_OF_WEEK & BETWEEN_DATES IN STORE
    setWeekList(betweenDates);
  };

  useEffect(() => {
    getCurrentWeek();
  }, []);
  const breaks = [
    {
      value: 1,
      label: 'morning',
    },
    {
      value: 2,
      label: 'afternoon',
    },
    {
      value: 3,
      label: 'evening',
    },
  ];
  // Generate all slot
  const generateSlot = (hours = 9) => {
    // const newDate: Date = new Date(selectedDate);
    const generateSlotList = [];
    for (let index = 0; index < 4; index++) {
      const dateTime = new Date(getDateFormat(selectedDate, 'YYYY-MM-DD'));
      const ISO_time = addMinutes(addHours(dateTime, hours - 6 + index), 30).toISOString();
      const generateSlot = {
        id: ISO_time,
        date: selectedDate,
        date_time: ISO_time,
      };
      generateSlotList.push(generateSlot);
    }
    return generateSlotList;
  };

  // SELECT DATE FUNCTION
  const onSelectDate = (val: string) => {
    setSelectedDate(val);
  };

  const slotsList = {
    morningSlotData: generateSlot(9),
    afternoonSlotData: generateSlot(13),
    eveningSlotData: generateSlot(17),
  };

  const returnTimeSlot = (type: number | string) => {
    switch (type) {
      case 1:
        return slotsList?.morningSlotData;
      case 2:
        return slotsList?.afternoonSlotData;
      case 3:
        return slotsList?.eveningSlotData;
      default:
        return slotsList?.morningSlotData;
    }
  };

  const returnSlotType = (type: number | string) => {
    switch (type) {
      case 1:
        return 'morning';
      case 2:
        return 'afternoon';
      case 3:
        return 'evening';

      default:
        return 'morning';
    }
  };

  // SELECT SLOT FUNCTION
  const onSelectSlot = (value: SlotProps) => {
    setSelectedSlot(value);
  };

  const callBookingApi = () => {
    bookingSlot();
    handleBookServiceDrawer(false);
    navigate(webRoutes?.bookServiceProviderSuccessfully);
  };

  return (
    <Box sx={[{ ...bookingSlotStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`} {...rest}>
      <Stack direction={'column'} gap={'4px'} height="100%">
        <Box flexGrow={1}>
          <Stack justifyContent={'space-between'} gap="12px" direction={'row'} mb={1.5} alignItems={'center'}>
            <Stack direction="row" gap="6px" alignContent="center">
              <Box>
                <CalenderIcon rootStyle={bookingSlotStyle?.calenderIcon} />
              </Box>
              <Typography sx={bookingSlotStyle.monthAndYear}>{showMonthAndYear}</Typography>
            </Stack>
            <Box>
              <Stack direction="row" gap="8px" alignContent="center">
                <Box>
                  <IconButton
                    data-testid="previousMonth"
                    disableRipple
                    sx={{ padding: '0' }}
                    onClick={() => previousMonth()}
                    disabled={
                      differenceInCalendarMonths(
                        startOfMonth(new Date(new Date(weekList[weekList?.length - 1]))),
                        startOfMonth(new Date()),
                      ) <= 0
                    }
                  >
                    <LeftCircleArrowIcon
                      opacity={
                        differenceInCalendarMonths(
                          startOfMonth(new Date(new Date(weekList[weekList?.length - 1]))),
                          startOfMonth(new Date()),
                        ) <= 0
                          ? '0.4'
                          : '1'
                      }
                    />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton
                    disableRipple
                    data-testid="nextMonth"
                    onClick={() => nextMonth()}
                    sx={{ padding: '0' }}
                    disabled={
                      differenceInCalendarMonths(
                        startOfMonth(new Date(addMonths(new Date(weekList[weekList?.length - 1]), 1))),
                        startOfMonth(new Date()),
                      ) > 2
                    }
                  >
                    <RightCircleArrowIcon
                      opacity={
                        differenceInCalendarMonths(
                          startOfMonth(new Date(addMonths(new Date(weekList[weekList?.length - 1]), 1))),
                          startOfMonth(new Date()),
                        ) > 2
                          ? '0.4'
                          : '1'
                      }
                    />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Box sx={bookingSlotStyle.dateListContainer}>
            <Stack gap="2px" direction={'row'} alignItems={'center'}>
              <Box sx={bookingSlotStyle?.monthArrowIcon}>
                <IconButton
                  disableRipple
                  data-testid="previousWeek"
                  onClick={() => previousWeek()}
                  sx={{ padding: '0' }}
                  disabled={
                    differenceInCalendarMonths(
                      startOfMonth(new Date(new Date(weekList[weekList?.length - 1]))),
                      startOfMonth(new Date()),
                    ) < 0
                  }
                >
                  <LeftCircleArrowIcon
                    opacity={
                      differenceInCalendarMonths(
                        startOfMonth(new Date(new Date(weekList[weekList?.length - 1]))),
                        startOfMonth(new Date()),
                      ) < 0
                        ? '0.4'
                        : '1'
                    }
                  />
                </IconButton>
              </Box>
              <Box sx={bookingSlotStyle.dateList}>
                {Array.isArray(weekList) && weekList?.length > 0
                  ? weekList?.map((val: string | Date, i: number) => (
                      <Box
                        key={i}
                        sx={
                          {
                            ...bookingSlotStyle.dateSelectionSx,
                            ...(getDateFormat(new Date(val), 'YYYY-MM-DD') ===
                              getDateFormat(new Date(), 'YYYY-MM-DD') &&
                            getDateFormat(new Date(val), 'YYYY-MM-DD') ===
                              getDateFormat(new Date(selectedDate), 'YYYY-MM-DD')
                              ? bookingSlotStyle.todayButton
                              : getDateFormat(new Date(val), 'YYYY-MM-DD') === getDateFormat(new Date(), 'YYYY-MM-DD')
                              ? bookingSlotStyle.unSelectButton
                              : getDateFormat(new Date(val), 'YYYY-MM-DD') < getDateFormat(new Date(), 'YYYY-MM-DD')
                              ? bookingSlotStyle.pastButton
                              : getDateFormat(new Date(val), 'YYYY-MM-DD') ===
                                getDateFormat(new Date(selectedDate), 'YYYY-MM-DD')
                              ? bookingSlotStyle.todayButton
                              : bookingSlotStyle.unSelectButton),
                          } as SxProps<Theme>
                        }
                        onClick={() =>
                          !(getDateFormat(new Date(val), 'YYYY-MM-DD') < getDateFormat(new Date(), 'YYYY-MM-DD')) &&
                          onSelectDate(val as string)
                        }
                        data-testid={getDateFormat(val, 'DD') + ' ' + getDateFormat(val, 'ddd')}
                      >
                        <Box
                          sx={{
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          <Typography className="day" variant="body1" sx={{ fontSize: '14px', fontWeight: 600 }}>
                            {getDateFormat(val, 'DD')}
                          </Typography>
                          <Typography className="date" variant="body1" sx={{ fontSize: '10px', fontWeight: 600 }}>
                            {getDateFormat(val, 'ddd')}
                          </Typography>
                        </Box>
                      </Box>
                    ))
                  : null}
              </Box>
              <Box sx={bookingSlotStyle?.monthArrowIcon}>
                <IconButton
                  disableRipple
                  data-testid="nextWeek"
                  onClick={() => nextWeek()}
                  sx={{ padding: '0' }}
                  disabled={
                    differenceInCalendarMonths(
                      startOfMonth(new Date(addMonths(new Date(weekList[weekList?.length - 1]), 1))),
                      startOfMonth(new Date()),
                    ) > 2
                  }
                >
                  <RightCircleArrowIcon
                    opacity={
                      differenceInCalendarMonths(
                        startOfMonth(new Date(addMonths(new Date(weekList[weekList?.length - 1]), 1))),
                        startOfMonth(new Date()),
                      ) > 2
                        ? '0.4'
                        : '1'
                    }
                  />
                </IconButton>
              </Box>
            </Stack>
          </Box>
          <Divider sx={bookingSlotStyle.dashedDivider} />
          <Typography sx={bookingSlotStyle.monthAndYear}>
            {`Slots available on ${getDateFormat(selectedDate, 'Do MMM YYYY')}`}
          </Typography>
          {(slotsList?.morningSlotData?.length > 0 ||
            slotsList?.afternoonSlotData?.length > 0 ||
            slotsList?.eveningSlotData?.length > 0) && (
            <Box my={2}>
              <DataTabs
                tabIndex={tabIndex}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setTabIndex={setTabIndex}
                totalStyle={bookingSlotStyle.totalSx}
                tabStyle={bookingSlotStyle.tabSx}
                underTabSx={bookingSlotStyle.underTabCalenderStyle}
                tabs={breaks}
              />
            </Box>
          )}
          <Box
            sx={{
              width: '100%',
              display: 'grid',
            }}
          >
            <Box>
              {/* Morning Slot */}
              {/* {state?.data?.length > 0 && ( */}

              <Grid container spacing={2}>
                {returnTimeSlot(tabIndex).map((val: SlotProps, i: number) => (
                  <Grid key={i} item xs={media ? 6 : 4}>
                    <Box
                      sx={
                        {
                          ...bookingSlotStyle.timeSelectionSx,
                          ...(selectedSlot?.filter((slot) => slot?.id === val?.id)?.length > 0
                            ? bookingSlotStyle.selectTimeButton
                            : // : isAfter(new Date(), new Date(val?.client_date_time))
                            isAfter(addMinutes(new Date(), 15), new Date(val?.date_time))
                            ? bookingSlotStyle.pastTimeButton
                            : bookingSlotStyle.unSelectTimeButton),
                        } as SxProps<Theme>
                      }
                      onClick={() =>
                        // !isAfter(new Date(), new Date(val?.client_date_time)) &&
                        !isAfter(addMinutes(new Date(), 15), new Date(val?.date_time)) && onSelectSlot(val)
                      }
                      data-testid={getDateFormat(val?.date_time, 'LT')}
                    >
                      <Box sx={bookingSlotStyle.iconWithTimeSelectionSx}>
                        {selectedSlot?.filter((slot) => slot?.id === val?.id)?.length > 0 ? (
                          <IconButton disableRipple>
                            <TimeIcon rootStyle={bookingSlotStyle.SelectIconChange} />
                          </IconButton>
                        ) : (
                          <IconButton disableRipple>
                            <TimeIcon rootStyle={bookingSlotStyle.unSelectIconChange} />
                          </IconButton>
                        )}

                        <Typography className="slotTime" variant="body1" sx={bookingSlotStyle.timeTextSx}>
                          {getDateFormat(val?.date_time, 'LT')}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* // )} */}
            </Box>
          </Box>
          {(slotsList?.morningSlotData?.length > 0 ||
            slotsList?.afternoonSlotData?.length > 0 ||
            slotsList?.eveningSlotData?.length > 0) &&
            returnTimeSlot(tabIndex)?.length === 0 && (
              <Typography variant="body1" textAlign={'center'} sx={{ ...bookingSlotStyle.timeTextSx, mt: 1.6 }}>
                {`No slots available at ${returnSlotType(tabIndex)}`}
              </Typography>
            )}
        </Box>
        <Button
          data-testid="Book Slot"
          sx={bookingSlotStyle.primaryBtn}
          disabled={selectedSlot?.length <= 0}
          onClick={() => callBookingApi()}
        >
          Book Slot
        </Button>
      </Stack>
    </Box>
  );
};
