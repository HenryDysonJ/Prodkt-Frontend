import { InputField } from "@crayond_dev/ui_input-field";
import CalenderIcon from "../../../assets/calender";
import { DateRangeSelector } from "@crayond_dev/ui_date-range-selector";
import { IconButton, Popover } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { webFormStyle } from "../style";

const DatePicker = (props: any) => {
  const { onsubmit, isPreView, item } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [dateShown, setDateShown] = useState<Date | null>(null);

  const openDate = Boolean(anchorEl);
  const id = openDate ? "simple-popover" : undefined;

  const formattedDate = !dateShown
    ? dateShown // Access the start date directly
      ? moment(dateShown).format("DD/MM/YYYY")
      : ""
    : `${moment(dateShown).format("DD/MM/YYYY")}`;

  const handleClickDateInput = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const buttonElement = event.currentTarget as unknown as HTMLButtonElement;
    setAnchorEl(buttonElement);
  };

  const handleDateDialogClose = () => {
    setAnchorEl(null);
  };

  const onSubmitDate = (date: any) => {
    setDateShown(date);
    setAnchorEl(null);
    onsubmit&&onsubmit(date);
  };

  return (
    <>
      <InputField
        sx={{...webFormStyle.textFeildStyle,mb:2}}
        value={formattedDate}
        fullWidth
        variant="filled"
        label={item?.questions}
        InputProps={{
          endAdornment: (
            <IconButton>
              <CalenderIcon />
            </IconButton>
          ),
        }}
        isErrorRequired={false}
        onClick={
          handleClickDateInput as (
            event: React.MouseEvent<HTMLDivElement, MouseEvent>
          ) => void
        }
      />

      <Popover
        id={id}
        open={isPreView&&openDate}
        elevation={0}
        anchorEl={anchorEl}
        onClose={handleDateDialogClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: webFormStyle.datePopoverStyle,
        }}
      >
        <DateRangeSelector
          selectsRange={false}
          getStartDate={dateShown}
          onSubmit={onSubmitDate}
          onCancelClick={() => setAnchorEl(null)}
          secondButton
          firstButton
          sx={webFormStyle.dateCalenderStyle}
          initialSelectedBgcolor="#1363DF !important"
          selectedBackgroundColor={"primary.main"}
          selectedColor={"primary.contrastText"}
          cancelButtonStyle={webFormStyle.cancelButtonStyle}
          doneButtonStyle={webFormStyle.doneButtonStyle}
        />
      </Popover>
    </>
  );
};

export default DatePicker;
