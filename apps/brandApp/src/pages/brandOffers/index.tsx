import { brandRoutes } from "@core/routes";
import { useOffersStore } from "@core/store";
import { CustomTooltip } from "@core/ui/atoms";
import { PopoverComponent, Sort, TopBar } from "@core/ui/components";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { SelectChip } from "@crayond_dev/ui_select-chip";
import { Table } from "@crayond_dev/ui_table";
import {
  Badge,
  Box,
  Divider,
  Grid,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography
} from "@mui/material";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../../../../packages/ui/assets/brandAssets/filter";
import OpenBox from "../../../../../packages/ui/assets/brandAssets/openBox";
import { DeleteDialog } from "../../../../../packages/ui/atoms/deleteDialog";
import { EmptyStateIcon } from "../../assets/offersEmptyState";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { TickIcon } from "../../assets/tickIcon";
import { ActiveModal } from "./ActiveModalComponent/activeModal";
import { offerListStyle } from "./style";
interface Offer {
  name: string;
  offer_type: string;
  start_date: string;
  end_date: string;
  status: {
    status: string;
    id: number;
  };
  start_time: string;
  end_time?: string;
}
export interface BrandOffersProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export interface StatusProps {
  text?: string;
}
const status = [
  { label: "Active", value: 1 },
  { label: "InActive", value: 2 },
  { label: "Scheduled", value: 9 },
];

const OfferType = [
  { label: "Basic offer", value: 1 },
  { label: "Exchange offer", value: 2 },
];

export function BrandOffers(props: BrandOffersProps): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;
  const {
    getOffersList,
    offersList,
    searchValue,
    setHandleSearch,
    sortItem,
    limit,
    offset,
    handleOffsetLimitData,
    deleterowData,
    getOffersView,
    addOffers,
    handleChangeOffer,
    editOffers,
    setEditData,
    setClearAll,
    selectedOptions,
    setFilterData,
    initializeFilterData,
    setFilterDataIntoModal,
    applyFilterData,
    loading,
  } = useOffersStore();

  // Sort badge indication
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  // Filter badge indication
  const [filterBadge, setFilterBadge] = useState<boolean>(false);

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  // Filter modal open/close state
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openFilterMark, setOpenFilterMark] = useState<boolean>(false);
  const open = Boolean(anchorElRow);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowData, setRowdata] = useState<any>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE, setAnchorE] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // To apply filter for offer data
  const handleFilter = () => {
    setOpenFilter(false);
    if (
      selectedOptions?.statuses?.length > 0 ||
      selectedOptions?.offerTypes?.length > 0
    ) {
      setFilterBadge(true);
    }
    applyFilterData();
  };

  // To reset the offer filter modal
  const handleReset = () => {
    // False badge filter dot
    setFilterBadge(false);
    // Close filter modal
    setOpenFilter(false);
    // Initialize badge filter data
    initializeFilterData();
  };

  const MenuOption = [
    {
      id: 1,
      label: "View",
    },
    ...(rowData?.status[0]?.label !== "Scheduled"
      ? [
        {
          id: 2,
          label:
            rowData?.status[0]?.label === "Inactive"
              ? "Mark as Active"
              : "Mark as Inactive",
          color:
            rowData?.status[0]?.label === "Active" ? "#DF3813" : "#008545",
        },
      ]
      : []),
    {
      id: 3,
      label: "Delete",
      color: "#DF3813",
    },
  ];

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    handleCloseDialog();
  };

  const handleDelete = () => {
    deleterowData(rowData?.id);
    handleCloseDialog();
  };
  const tableItems = offersList?.rows?.map((item: Offer) => ({
    ...item,
    broadcastName: item?.name,
    offerType: item?.offer_type,
    startDate: `${moment(item?.start_date).format("DD-MM-YYYY")}, ${moment(
      item.start_time,
      "h:mm A"
    ).format("h:mm A")}`,
    endDate: `${moment(item?.end_date).format("DD-MM-YYYY")}, ${moment(
      item.end_time,
      "h:mm A"
    ).format("h:mm A")}`,
    status: [
      {
        label: item?.status?.status,
        color:
          (item?.status?.id === 1 && "#008545") ||
          (item?.status?.id === 2 && "#3D0600") ||
          (item?.status?.id === 9 && "#D17800"),
        bgColor:
          (item?.status?.id === 1 && "#CBF2E0") ||
          (item?.status?.id === 2 && "#FFDAD3") ||
          (item?.status?.id === 9 && "#FFDDB8"),
      },
    ],
  }));

  const tableData = {
    Header: [
      {
        id: "broadcastName",
        align: "left",
        disablePadding: false,
        label: "Broadcast name",
        isSortable: false,
      },
      {
        id: "offerType",
        align: "left",
        disablePadding: false,
        label: "Offer type",
        isSortable: false,
      },
      {
        id: "startDate",
        align: "left",
        disablePadding: false,
        label: "Start date & time",
        isSortable: false,
      },
      {
        id: "endDate",
        align: "left",
        disablePadding: false,
        label: "End date & time",
        isSortable: false,
      },
      {
        id: "status",
        align: "left",
        disablePadding: false,
        label: "Status",
        isSortable: false,
      },
      {
        id: "action",
        align: "left",
        disablePadding: false,
        label: "",
        isSortable: false,
      },
    ],
    dataList: tableItems,
    tableData: [
      { type: ["TEXT"], name: "broadcastName", width: 230 },
      { type: ["TEXT"], name: "offerType", width: 200 },
      { type: ["TEXT"], name: "startDate", width: 220 },
      { type: ["TEXT"], name: "endDate", width: 220 },
      { type: ["LABEL"], name: "status", width: 200 },
      {
        type: ["ACTION"],
        name: "action",
        width: 20,
        variant: [
          {
            method: (id: string | number, rowData: object, e: Event) =>
              handleClickDotMenu(id, rowData, e),
            icon: <ThreeDotIcon />,
          },
        ],
      },
    ],
    headerOptions: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#4E585E",
      bgColor: "#F0F3F6",
      borderBottom: "0rem solid #D9DBDD",
      padding: "1.4rem 1.2rem",
      borderRadius: 8,
    },
    cellOptions: {
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "#02111A",
      bgColor: "#fff",
      padding: "1.6rem 1.2rem",
      borderBottom: "0.1rem solid #D9DBDD",
    },
    noDataFound: {
      fontSize: "1.6rem",
      fontWeight: "600",
      color: "#353448",
      bgColor: "#F7F7F7",
      text: "",
      component: null,
    },
    tableBackground: "#ffffff",
    tableMinWidth: "100%",
    tableName: " ",
    marginAll: "0rem",
    dense: "medium",
    paginationOption: {
      isEnable: false,
      rowPerPage: 25,
      rowsPerPageOptions: [5, 10, 25],
    },
    HeaderComponent: {
      variant: "CUSTOM",
      component: "",
    },
    stickyOptions: {
      stickyHeader: true,
      stickyLeft: [],
      stickyRight: ["action", "response"],
    },
  };

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowdata(rowData);
  };

  const handleClose = () => {
    setAnchorElRow(null);
    setClearAll();
  };
  const handleClickMenu = async (val: any) => {
    if (val?.id === 1) {
      const statusCode: any = await getOffersView(rowData);
      if (statusCode === "200") {
        navigate(brandRoutes.createOffers);
      }
    } else if (val?.id === 2 && val?.label === "Mark as Active") {
      setOpenFilterMark(true);
      setEditData(rowData);
    } else if (val?.id === 2 && val?.label === "Mark as Inactive") {
      setEditData(rowData);
      editOffers();
      setClearAll();
    } else if (val?.id === 3) {
      setOpenDialog(true);
      setClearAll();
    }
    setAnchorElRow(null);
  };

  const navigate = useNavigate();

  const handlePageChange = (e: any, page: any) => {
    handleOffsetLimitData("offset", page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    handleOffsetLimitData("limit", perPage);
  };

  const totalCount = offersList?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const handleChangeSort = (label: string) => {
    handleOffsetLimitData("sortItem", label);
    setSortbadge(true);
  };

  const openFilterModal = () => {
    setOpenFilter(true);
    setFilterDataIntoModal();
  };

  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    // setStartDateError(false);
  };

  const handleEndDateChange = (event: any) => {
    setEndDate(event);
    // setEndDateError(false);
  };

  const handleDateRangeSubmit = (date: any) => {
    handleChangeOffer("start_date", date);
    setAnchorEl(null);
  };
  const handleEndDateSubmit = (date: any) => {
    handleChangeOffer("end_date", date);
    setAnchorE(null);
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

  const handleActive = () => {
    editOffers();
    setOpenFilterMark(false);
    setClearAll();
  };

  const handleCancelFilter = () => {
    setOpenFilterMark(false);
    setClearAll();
  };

  useEffect(() => {
    getOffersList(0, 5, "", "", [], []);
  }, []);

  return (
    <>
      <Box
        sx={[
          {
            ...offerListStyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        className={`${className}`}
        {...rest}
      >
        <TopBar
          title="Offers"
          backBtn={false}
          backBtnFunc={() => navigate(-1)}
          containButtonText=""
          outlineButtonText=""
        />
        <Stack sx={offerListStyle.tableCardStyle}>
          <Grid container sx={offerListStyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={offerListStyle.navContainer}>
                {!searchValue &&
                  offersList?.count === 0 &&
                  !filterBadge &&
                  offersList?.count === 0 ? (
                  <Box></Box>
                ) : (
                  <Search
                    value={searchValue}
                    variant={"isSearchInput"}
                    inputWidth="100%"
                    minExpandWidth="100%"
                    placeHolderText="Search by offer name"
                    placeHolderSize={14}
                    placeHolderColor="#4E585E"
                    onSelectSearchDataFun={() => false}
                    handleOptionChange={() => false}
                    handleInputOnChange={(e) =>
                      setHandleSearch(e?.target?.value)
                    }
                    inputBorderHoverColor="#D9DBDD"
                    inputBorderDefaultColor="#D9DBDD"
                    inputBorderFocusColor="#D9DBDD"
                    rootStyle={offerListStyle.searchRootStyle}
                  />
                )}
                <Box></Box>
                <Box sx={offerListStyle.navContainer}>
                  {!searchValue && offersList?.count === 0 && !filterBadge ? (
                    <Box></Box>
                  ) : (
                    <CustomTooltip title={"Sort"} placement="bottom">
                      <BasicButton sx={offerListStyle.buttonItemContainer}>
                        <Sort
                          badge={sortBadge}
                          sortItem={sortItem}
                          handleChange={handleChangeSort}
                        />
                      </BasicButton>
                    </CustomTooltip>
                  )}

                  <CustomTooltip title={"Filter"} placement="bottom">
                    <BasicButton
                      sx={{
                        ...offerListStyle.buttonItemContainer,
                        borderColor: "custom.outline",
                      }}
                      onClick={() => openFilterModal()}
                    >
                      <Badge
                        sx={offerListStyle.badgeSx}
                        color="error"
                        variant={filterBadge ? "dot" : "standard"}
                      >
                        <FilterIcon />
                      </Badge>
                    </BasicButton>
                  </CustomTooltip>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={offerListStyle.divider}
                  />
                  <BasicButton
                    variant="contained"
                    sx={offerListStyle.addNewButonStyle}
                    onClick={() => { setClearAll(), navigate(brandRoutes.createOffers) }}
                  >
                    Create new offer
                  </BasicButton>
                </Box>
              </Stack>
              <Stack
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  mt: 2,
                }}
              >
                {loading ? (
                  <>
                    {[...Array(tableData?.dataList?.length || 0)].map(
                      (_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      )
                    )}
                  </>
                ) : tableData?.dataList?.length !== 0 ? (
                  <Table
                    {...(tableData as any)}
                    tableMaxHeight="56vh"
                  />
                ) : (
                  <>
                    {(searchValue && offersList?.count === 0) ||
                      (filterBadge && offersList?.count === 0) ? (
                      <Box sx={offerListStyle.centerItem}>
                        <Box sx={offerListStyle.itemBox}>
                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <OpenBox />
                          </Box>
                          <Box>
                            <Typography
                              sx={offerListStyle.productInfo}
                              textAlign={"center"}
                            >
                              No Data!
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      !searchValue &&
                      !filterBadge &&
                      offersList?.count === 0 && (
                        <Box sx={offerListStyle.emptyContainer}>
                          <EmptyStateIcon />
                          <Typography sx={offerListStyle.emptyTextStyle}>
                            Create exciting offers for your customers
                          </Typography>
                          <BasicButton
                            variant="contained"
                            sx={offerListStyle.addNewButtonStyle}
                            onClick={() => navigate(brandRoutes.createOffers)}
                          >
                            Create new offer
                          </BasicButton>
                        </Box>
                      )
                    )}
                  </>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12} sx={offerListStyle.childGrid}>
              {!(searchValue && offersList?.count === 0) &&
                !filterBadge &&
                offersList?.count === 0 ? (
                ""
              ) : (
                <Pagination
                  variant="text"
                  shape="rounded"
                  disabled={false}
                  size="small"
                  totalCount={["5", "10", "15", "20", "25"]}
                  startIcon={<LeftPaginationArrow />}
                  endIcon={<RightPaginationArrow />}
                  selectIcon={<DownPagenationArrow />}
                  count={pageCount}
                  perPage={offset}
                  value={parseInt(currentPageString, 10).toString()}
                  handleChange={handlePerPageChange}
                  handleChangePage={handlePageChange}
                  paginationBoxStyle={offerListStyle.paginationBoxStyle}
                  sx={{ width: "100%" }}
                  disableVisibleTotalCountSelectMenu={false}
                  pageText={"Page"}
                  pageCount={false}
                  showPaginationBottomCountText={
                    <>
                      <Typography sx={offerListStyle.paginationCountTextStyle}>
                        {" "}
                        {`showing ${offset + 1} - ${offset + limit} of ${totalCount} records`}
                      </Typography>
                    </>
                  }
                />
              )}
            </Grid>
          </Grid>
        </Stack>

        <PopoverComponent
          handleClickMenuLabel={(e, val) => handleClickMenu(val)}
          actionMenu={MenuOption as any}
          handleClose={handleClose}
          eventCuretTarget={anchorElRow}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
        />

        {/* filter dailog box */}
        <DialogBox
          title={"Filter"}
          titleStyle={offerListStyle.addNewModalTitleStyle}
          open={openFilter}
          handleClose={() => setOpenFilter(false)}
          titleVariant={"inherit"}
          maxWidth="xs"
          dialogmodalBoxStyle={offerListStyle.dialogmodalFilterBoxSx}
          Body={
            <>
              <Box>
                <Typography sx={offerListStyle.statusText} mb={"0.8rem"}>
                  Offer Type
                </Typography>
                <SelectChip
                  options={OfferType as any}
                  isMultiple={true}
                  value={selectedOptions?.offerTypes}
                  selectChange={(value) => setFilterData("offerTypes", value)}
                  startIcon={<TickIcon />}
                  borderRadius={"0.8rem"}
                  textStyle={offerListStyle.textStyleSelect}
                  bgColor={"#fff"}
                  selectedBgcolor={"#1363DF"}
                  selectedBorderColor={"#1363DF"}
                  borderColor={"#D9DBDD"}
                  bgColorHover={"#FFFFFF"}
                  selectedTextColor={"#ffff"}
                  selectedWithIcon={true}
                  selectChipStyles={{ height: "4.6rem", mb: "2rem" }}
                  iconStyle={{
                    marginInlineStart: "0.4rem",
                    marginInlineEnd: "0.4rem",
                  }}
                  isShowIcon={true}
                />
                <Typography sx={offerListStyle.statusText} mb={"0.8rem"}>
                  Status
                </Typography>
                <SelectChip
                  options={status as any}
                  selectChange={(value) => setFilterData("statuses", value)}
                  isMultiple={true}
                  value={selectedOptions?.statuses}
                  startIcon={<TickIcon />}
                  borderRadius={"0.8rem"}
                  textStyle={offerListStyle.textStyleSelect}
                  bgColor={"#fff"}
                  selectedBgcolor={"#1363DF"}
                  selectedBorderColor={"#1363DF"}
                  borderColor={"#D9DBDD"}
                  bgColorHover={"#FFFFFF"}
                  selectedTextColor={"#ffff"}
                  selectedWithIcon={true}
                  selectChipStyles={{ height: "4.6rem" }}
                  iconStyle={{
                    marginInlineStart: "0.4rem",
                    marginInlineEnd: "0.4rem",
                  }}
                  isShowIcon={true}
                />
              </Box>
            </>
          }
          footerComponent={
            <>
              <Stack sx={offerListStyle.buttonContainerStyle}>
                <BasicButton
                  variant="outlined"
                  sx={{
                    ...offerListStyle.addNewButtonStyle,
                    backgroundColor: "",
                    ":hover": { backgroundColor: "" },
                  }}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleReset()}
                >
                  Reset
                </BasicButton>
                <BasicButton
                  sx={offerListStyle.addNewButtonStyle}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleFilter()}
                >
                  Apply filter
                </BasicButton>
              </Stack>
            </>
          }
        />

        {/* Mark as active dialog */}
        <DialogBox
          title={""}
          titleStyle={offerListStyle.addNewModalTitleStyle}
          open={openFilterMark}
          handleClose={() => setOpenFilterMark(false)}
          titleVariant={"inherit"}
          closeIcon={false}
          maxWidth="md"
          dialogmodalBoxStyle={offerListStyle.dialogmodalFilterMarkSx}
          dialogBodyStyle={offerListStyle.dialogBodyStyle}
          Body={
            <>
              <ActiveModal
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
                setAnchorE={setAnchorE}
                anchorE={anchorE}
                title={"Change offer status to active?"}
                startDateLabel="Start Date"
                endDateLabel="End Date"
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
              // isEditable={addOffers?.id}
              // status={tableid}
              // startDateErrorMessage={error?.start_date}
              // isErrorRequired={error?.start_date?.length ? true : false}
              // startDateError={error?.start_date?.length ? true : false}
              // endDateErrorMesssage={error?.end_date}
              // isErrorRequiredEndDate={error?.end_date?.length ? true : false}
              // endDateError={error?.end_date?.length ? true : false}
              // startTimeErrorMessage={error?.start_time}
              // isErrorRequiredStartTime={error?.start_time?.length ? true : false}
              // startTimeError={error?.start_time?.length ? true : false}
              // endTimeErrorMessage={error?.end_time}
              // isErrorRequiredEndTime={error?.end_time?.length ? true : false}
              // endTimeError={error?.end_time?.length ? true : false}
              />
            </>
          }
          footerComponent={
            <>
              <Stack sx={offerListStyle.buttonContainerStyle}>
                <BasicButton
                  variant="outlined"
                  sx={{
                    ...offerListStyle.addNewButtonStyle,
                    backgroundColor: "",
                    ":hover": { backgroundColor: "" },
                  }}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleCancelFilter()}
                >
                  Cancel
                </BasicButton>
                <BasicButton
                  sx={offerListStyle.addNewButtonStyle}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleActive()}
                >
                  Mark as active
                </BasicButton>
              </Stack>
            </>
          }
        />
        {/* Delete dialog */}

        <DeleteDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title="Delete Confirmation"
          bodyText="Delete offer?"
          subText={`''${rowData?.name}''` ?? ""}
          cancelButtonText="Cancel"
          saveButtonText="Delete"
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      </Box>
    </>
  );
}
