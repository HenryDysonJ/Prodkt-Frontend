import { brandRoutes } from "@core/routes";
import { TopBar } from "@core/ui/components";
import { InputField } from "@crayond_dev/ui_input-field";
import { RadioButton } from "@crayond_dev/ui_radio-button";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Switch } from "@crayond_dev/ui_switch";
import {
  Backdrop,
  Box,
  CircularProgress,
  Stack,
  SxProps,
  Theme,
  Typography
} from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useOffersStore } from "@core/store";
import { localStorageKeys } from "@core/utils";
import DownArrowIcon from "../../assets/downArrow";
import { PercentageIcon } from "../../assets/vectorIcon";
import { PeriodCard } from "./component/datePeriod";
import { createOfferStyle } from "./style";
export interface CreateOfferProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const radioOptions = [
  {
    label: "Basic offer",
    value: 1,
  },
  {
    label: "Exchange offer",
    value: 2,
  },
];
const discountOptions = [
  {
    label: "Enter percentage",
    value: 1,
  },
  {
    label: "Enter amount",
    value: 2,
  },
];

export const CreateBrandOffer = (props: CreateOfferProps) => {
  const { className = "", sx = {}, ...rest } = props;

  const {
    handleChangeOffer,
    addOffers,
    createOffers,
    setClearAll,
    setFieldError,
    getBrandList,
    brandList,
    brandCategories,
    productTypeList,
    getExchangeBrandList,
    exchangeBrandList,
    productBrandList,
    isIamValidToSave,
    loading,
  } = useOffersStore();

  const { error } = addOffers;
  console.log(error?.exchange_category_id, "---");

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE, setAnchorE] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateRangeSubmit = (date: any) => {
    handleChangeOffer("start_date", date);
    setAnchorEl(null);
  };
  const handleEndDateSubmit = (date: any) => {
    handleChangeOffer("end_date", date);
    setAnchorE(null);
  };

  // percentage and amount
  const handleChangePercentageOffer = (value: any) => {
    handleChangeOffer("discount_amount", "");
    handleChangeOffer("discount_type", value?.label);
  };

  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    // setStartDateError(false);
  };

  const handleEndDateChange = (event: any) => {
    setEndDate(event);
    // setEndDateError(false);
  };

  const handleStartTimeChange = (value: any | null) => {
    const date = new Date(value);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    let period = "AM";
    if (hours >= 12) {
      period = "PM";
    }

    let formattedHours = hours % 12;
    formattedHours = formattedHours || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    handleChangeOffer("start_time", formattedTime);
  };

  const handleEndTimeChange = (value: dayjs.Dayjs | null | any) => {
    const date = new Date(value);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    let period = "AM";
    if (hours >= 12) {
      period = "PM";
    }

    let formattedHours = hours % 12;
    formattedHours = formattedHours || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

    handleChangeOffer("end_time", formattedTime);
  };

  const handleSaveOffer = async () => {
    if (isIamValidToSave()) {
      const response: any = await createOffers();
      if (response?.status === 200) {
        setClearAll();
        navigate(brandRoutes.offers);
      }
    }
  };

  const handleBack = () => {
    setClearAll();
    navigate(-1);
  };

  const handleCancelOffer = () => {
    setClearAll();
    navigate(brandRoutes.offers);
  };

  const brandOptions =
    Array.isArray(brandList) && brandList?.length > 0
      ? brandList?.map((val: any) => ({
          label: val?.name,
          id: val?.id,
        }))
      : [];

  const brandCategoriesOptions =
    Array.isArray(brandCategories) && brandCategories?.length > 0
      ? brandCategories?.map((val: any) => ({
          label: val?.name,
          id: val?.id,
        }))
      : [];

  const brandtypeOptions =
    Array.isArray(productTypeList?.rows) && productTypeList?.rows?.length > 0
      ? productTypeList?.rows?.map((val: any) => ({
          label: val?.name,
          id: val?.id,
        }))
      : [];

  const brandCategoriesDiscount =
    Array.isArray(exchangeBrandList?.categories) &&
    exchangeBrandList?.categories?.length > 0
      ? exchangeBrandList?.categories?.map((val: any) => ({
          label: val?.name,
          id: val?.id,
        }))
      : [];

  const token = localStorage?.getItem(localStorageKeys.authToken);

  const discountProductType =
    Array.isArray(productBrandList?.rows) && productBrandList?.rows?.length > 0
      ? productBrandList?.rows?.map((val: any) => ({
          label: val?.product_name,
          value: val?.id,
        }))
      : [];

  const initialCall = async () => {
    await getBrandList();
    await getExchangeBrandList(token);
  };

  useEffect(() => {
    initialCall();
  }, []);

  return (
    <Box
      sx={[
        {
          ...createOfferStyle.rootStyle,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {addOffers?.id && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" sx={{ marginLeft: "200px" }} />
        </Backdrop>
      )}
      <TopBar
        title={addOffers?.id ? "View offer details" : "Create new offer"}
        backBtn={true}
        activeBtn={addOffers?.id ? true : false}
        backBtnFunc={handleBack}
        containButtonText="Save"
        outlineButtonText="Cancel"
        rootStyle={{ zIndex: 9 }}
        handleClickContainButton={handleSaveOffer}
        handleClickOutlineButton={handleCancelOffer}
      />
      <Box sx={createOfferStyle.boxSx}>
        <Stack sx={createOfferStyle.baseInfo}>
          <Typography sx={createOfferStyle.infoText}>
            Basic information
          </Typography>
          <Stack direction={"row"} width={"100%"} gap={2}>
            <InputField
              variant="filled"
              label="Offer name"
              placeholder="Enter offer name"
              fullWidth
              onChange={(e) => handleChangeOffer("name", e.target.value)}
              value={addOffers?.name}
              required
              error={error?.name?.length ? true : false}
              errorMessage={error?.name}
              isErrorRequired={error?.name?.length ? true : false}
              errorStyle={{ fontSize: "1.0rem" }}
              disabled={addOffers?.id}
              inputStyle={createOfferStyle.inputLabel}
              sx={createOfferStyle.inputRoot}
              labelStyle={createOfferStyle.inputLabelRoot}
            />
            <InputField
              variant="filled"
              label="Offer code"
              placeholder="Enter offer code"
              fullWidth
              onChange={(e) => handleChangeOffer("offer_code", e.target.value)}
              value={addOffers?.offer_code}
              required
              error={error?.offer_code?.length ? true : false}
              errorMessage={error?.offer_code}
              isErrorRequired={error?.offer_code?.length ? true : false}
              errorStyle={{ fontSize: "1.0rem" }}
              disabled={addOffers?.id}
              inputStyle={createOfferStyle.inputLabel}
              sx={createOfferStyle.inputRoot}
              labelStyle={createOfferStyle.inputLabelRoot}
            />
          </Stack>
          <InputField
            variant="filled"
            label="Offer description"
            placeholder="Enter offer description"
            fullWidth
            onChange={(e) => handleChangeOffer("description", e.target.value)}
            value={addOffers?.description}
            error={error?.description?.length ? true : false}
            errorMessage={error?.description}
            isErrorRequired={error?.description?.length ? true : false}
            errorStyle={{ fontSize: "1.0rem" }}
            disabled={addOffers?.id}
            inputStyle={createOfferStyle.inputLabel}
            sx={createOfferStyle.inputSx}
            labelStyle={createOfferStyle.inputLabelRoot}
          />
        </Stack>

        <Box sx={createOfferStyle.offerTypeRoot}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography sx={createOfferStyle.offerText}>
              Offer type<span style={{ color: "#DF3813" }}>*</span>
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"2rem"}>
              {radioOptions.map(
                (
                  val: { label: string; value: string | number },
                  index: number
                ) => {
                  return (
                    <RadioButton
                      key={index}
                      buttonRootStyle={{
                        p: 0,
                      }}
                      activeBtnColor={addOffers?.id ? "#E6EAEB" : "#1363DF"}
                      radioBtnSize={22}
                      checked={addOffers?.offer_type === val?.label}
                      label={val.label}
                      icon={undefined}
                      disabled={addOffers?.id ? true : false}
                      handleChange={(e) => {
                        handleChangeOffer("offer_type", val?.label);
                      }}
                      value={undefined}
                      checkedIcon={undefined}
                      rootButtonId={""}
                      defaultBtnColor={""}
                      labelRootStyle={null}
                      labelFontColor={""}
                      labelFontSize={""}
                      labelPlacement={undefined}
                    />
                  );
                }
              )}
            </Stack>
          </Stack>
        </Box>
        {addOffers?.offer_type === "Exchange offer" ? (
          <Box sx={createOfferStyle.offerTypeRoot}>
            <Stack direction={"row"} mb={"1rem"}>
              <Typography sx={createOfferStyle.offerText}>
                Exchange offer condition{" "}
                <span style={{ color: "#DF3813" }}>*</span>
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              mb={"1rem"}
              gap={"1.6rem"}
            >
              <Typography sx={createOfferStyle.ifText}>
                If customer exchanges
              </Typography>
              <SelectAndautocomplete
                options={brandOptions ?? []}
                onChange={(e: any, value: any) =>
                  handleChangeOffer("exchange_brand_id", value)
                }
                value={addOffers?.exchange_brand_id}
                variant="filled"
                selectType="chip"
                limitTags={1}
                freeSolo
                endAdornmentIcon={<DownArrowIcon />}
                label={"Select brand"}
                addOptionAction={() => console.log("hih")}
                rootStyleSx={createOfferStyle.selectLabelStyle}
                optionStyle={{ fontSize: "1.4rem" }}
                labelSx={{ fontSize: "2.2rem" }}
                labelStyleProps={{
                  fontSize: "1.6rem !important",
                  color: "#4E585E",
                }}
                isError={error?.exchange_brand_id ? true : false}
                helperText={error?.exchange_brand_id}
                disabled={addOffers?.id}
              />
              <SelectAndautocomplete
                options={brandCategoriesOptions ?? []}
                value={addOffers?.exchange_category_id}
                onChange={(e: any, value: any) =>
                  handleChangeOffer("exchange_category_id", value)
                }
                variant="filled"
                selectType="chip"
                limitTags={1}
                label={"Select category"}
                freeSolo
                endAdornmentIcon={<DownArrowIcon />}
                addOptionAction={() => console.log("hih")}
                rootStyleSx={createOfferStyle.selectLabelStyle}
                optionStyle={{ fontSize: "1.4rem" }}
                labelSx={{ fontSize: "2.2rem" }}
                labelStyleProps={{
                  fontSize: "1.6rem !important",
                  color: "#4E585E",
                }}
                isError={error?.exchange_category_id ? true : false}
                helperText={error?.exchange_category_id}
                disabled={addOffers?.id}
              />
              <SelectAndautocomplete
                options={brandtypeOptions ?? []}
                value={addOffers?.exchange_product_type_id}
                onChange={(e: any, value: any) =>
                  handleChangeOffer("exchange_product_type_id", value)
                }
                variant="filled"
                selectType="chip"
                limitTags={1}
                freeSolo
                endAdornmentIcon={<DownArrowIcon />}
                label={"Select product"}
                addOptionAction={() => console.log("hih")}
                rootStyleSx={createOfferStyle.selectLabelStyle}
                optionStyle={{ fontSize: "1.4rem" }}
                labelSx={{ fontSize: "2.2rem" }}
                labelStyleProps={{
                  fontSize: "1.6rem !important",
                  color: "#4E585E",
                }}
                isError={error?.exchange_product_type_id ? true : false}
                helperText={error?.exchange_product_type_id}
                disabled={addOffers?.id}
              />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"1.6rem"}>
              <Typography sx={createOfferStyle.ifText}>
                Then customer gets discount on
              </Typography>
              <InputField
                variant="filled"
                label="Select brand"
                placeholder="Select brand"
                fullWidth
                value={addOffers?.discount_brand_id?.label}
                error={error?.productCode?.length ? true : false}
                errorMessage={error?.productCode}
                isErrorRequired={error?.productCode?.length ? true : false}
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={true}
                inputStyle={{
                  width: "100%",
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                    color: "#4E585E",
                    mt: "0.5rem",
                  },
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    "& .MuiFilledInput-input": {
                      fontSize: "1.4rem",
                    },
                  },
                  width: "100%",
                }}
                labelStyle={{
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                    color: "#4E585E",
                    mt: "0.5rem",
                  },
                }}
              />
              <SelectAndautocomplete
                options={brandCategoriesDiscount ?? []}
                value={addOffers?.discount_category_id}
                onChange={(e: any, value: any) =>
                  handleChangeOffer("discount_category_id", value)
                }
                variant="filled"
                selectType="chip"
                limitTags={1}
                freeSolo
                endAdornmentIcon={<DownArrowIcon />}
                label={"Select category"}
                addOptionAction={() => console.log("hih")}
                rootStyleSx={createOfferStyle.selectLabelStyle}
                optionStyle={{ fontSize: "1.4rem" }}
                labelSx={{ fontSize: "2.2rem" }}
                labelStyleProps={{
                  fontSize: "1.6rem !important",
                  color: "#4E585E",
                }}
                isError={error?.discount_category_id ? true : false}
                helperText={error?.discount_category_id}
                disabled={addOffers?.id}
              />
              <SelectAndautocomplete
                options={discountProductType ?? []}
                value={addOffers?.discount_product_id}
                onChange={(e: any, value: any) =>
                  handleChangeOffer("discount_product_id", value)
                }
                variant="filled"
                selectType="chip"
                limitTags={1}
                freeSolo
                endAdornmentIcon={<DownArrowIcon />}
                label={"Select product"}
                addOptionAction={() => console.log("hih")}
                rootStyleSx={createOfferStyle.selectLabelStyle}
                optionStyle={{ fontSize: "1.4rem" }}
                labelSx={{ fontSize: "2.2rem" }}
                labelStyleProps={{
                  fontSize: "1.6rem !important",
                  color: "#4E585E",
                }}
                isError={error?.discount_product_id ? true : false}
                helperText={error?.discount_product_id}
                disabled={addOffers?.id}
              />
            </Stack>
          </Box>
        ) : (
          <Box sx={createOfferStyle.offerTypeRoot}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography sx={createOfferStyle.offerText}>
                Minimum purchase requirement{" "}
                <span style={{ color: "#DF3813" }}>*</span>
              </Typography>
              <Switch
                isLabel={false}
                onChange={(e) =>
                  handleChangeOffer(
                    "minimum_purchase_is_required",
                    e.target.checked
                  )
                }
                checked={addOffers?.minimum_purchase_is_required}
                disabled={addOffers?.id}
                sx={{
                  // 'backgroundColor': 'red',
                  "& .MuiFormControlLabel-root": {
                    ml: "0",
                    direction: "rtl",
                  },
                  "& .MuiSwitch-root .MuiSwitch-track": {
                    backgroundColor: "#E6EAEB",
                  },
                }}
              />
            </Stack>
            {addOffers?.minimum_purchase_is_required === true && (
              <InputField
                variant="filled"
                label="Minimum purchase amount"
                placeholder="Enter Minimum purchase amount"
                fullWidth
                onChange={(e) =>
                  handleChangeOffer("minimum_purchase_amount", e.target.value)
                }
                value={addOffers?.minimum_purchase_amount}
                required
                error={error?.minimum_purchase_amount?.length ? true : false}
                errorMessage={error?.minimum_purchase_amount}
                isErrorRequired={
                  error?.minimum_purchase_amount?.length ? true : false
                }
                errorStyle={{ fontSize: "1.0rem" }}
                disabled={addOffers?.id}
                inputStyle={createOfferStyle.inputLabel}
                sx={createOfferStyle.inputSx}
                labelStyle={createOfferStyle.inputLabelRoot}
                type="number"
              />
            )}
          </Box>
        )}

        <Box sx={createOfferStyle.offerTypeRoot}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography sx={createOfferStyle.offerText}>
              Discount value<span style={{ color: "#DF3813" }}>*</span>
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"2rem"}>
              {discountOptions.map(
                (
                  val: { label: string; value: string | number },
                  index: number
                ) => {
                  return (
                    <RadioButton
                      key={index}
                      buttonRootStyle={{
                        p: 0,
                      }}
                      activeBtnColor={addOffers?.id ? "#E6EAEB" : "#1363DF"}
                      onChange={() => false}
                      radioBtnSize={22}
                      checked={addOffers?.discount_type === val?.label}
                      label={val?.label}
                      icon={undefined}
                      disabled={addOffers?.id ? true : false}
                      handleChange={(e) => {
                        handleChangePercentageOffer(val);
                      }}
                      value={undefined}
                      checkedIcon={undefined}
                      rootButtonId={""}
                      defaultBtnColor={""}
                      labelRootStyle={null}
                      labelFontColor={""}
                      labelFontSize={""}
                      labelPlacement={undefined}
                    />
                  );
                }
              )}
            </Stack>
          </Stack>
          <InputField
            variant="filled"
            label={
              addOffers?.discount_type === "Enter percentage"
                ? "Enter percentage"
                : "Enter amount"
            }
            placeholder={
              addOffers?.discount_type === "Enter percentage"
                ? "Enter percentage"
                : "Enter amount"
            }
            fullWidth
            onChange={(e) =>
              handleChangeOffer("discount_amount", e.target.value)
            }
            value={addOffers?.discount_amount}
            required
            error={error?.discount_amount?.length ? true : false}
            errorMessage={error?.discount_amount}
            isErrorRequired={error?.discount_amount?.length ? true : false}
            InputProps={{
              endAdornment:
                addOffers?.discount_type === "Enter percentage" ? (
                  <PercentageIcon />
                ) : (
                  ""
                ),
            }}
            errorStyle={{ fontSize: "1.0rem" }}
            disabled={addOffers?.id}
            inputStyle={createOfferStyle.inputLabel}
            sx={createOfferStyle.inputSx}
            labelStyle={createOfferStyle.inputLabelRoot}
            type="number"
          />
        </Box>
        <PeriodCard
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          setAnchorE={setAnchorE}
          anchorE={anchorE}
          title={"Discount period"}
          startDateLabel="Start date"
          endDateLabel="End date"
          startDate={addOffers}
          endDate={addOffers}
          // editedData={editedData}
          handleDateRangeSubmit={(e: any) => handleDateRangeSubmit(e)}
          handleEndDateSubmit={(e: any) => handleEndDateSubmit(e)}
          // endDateError={endDateError}
          onChangeStartDate={handleStartDateChange}
          onChangeEndDate={handleEndDateChange}
          startTime={addOffers}
          endTime={addOffers}
          onChangeStartTime={handleStartTimeChange}
          onChangeEndTime={handleEndTimeChange}
          isEditable={addOffers?.id}
          // status={tableid}
          startDateErrorMessage={error?.start_date}
          isErrorRequired={error?.start_date?.length ? true : false}
          startDateError={error?.start_date?.length ? true : false}
          endDateErrorMesssage={error?.end_date}
          isErrorRequiredEndDate={error?.end_date?.length ? true : false}
          endDateError={error?.end_date?.length ? true : false}
          startTimeErrorMessage={error?.start_time}
          isErrorRequiredStartTime={error?.start_time?.length ? true : false}
          startTimeError={error?.start_time?.length ? true : false}
          endTimeErrorMessage={error?.end_time}
          isErrorRequiredEndTime={error?.end_time?.length ? true : false}
          endTimeError={error?.end_time?.length ? true : false}
        />
      </Box>
    </Box>
  );
};
