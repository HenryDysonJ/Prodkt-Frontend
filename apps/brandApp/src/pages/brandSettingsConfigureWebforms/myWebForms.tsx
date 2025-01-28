import { brandRoutes } from "@core/routes";
import { useBrandWebForm } from "@core/store/brand-app";
import { PopoverComponent } from "@core/ui/components";
import { Sort } from "@core/ui/components/brandSort";
import TopBar from "@core/ui/components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DateRangeSelector } from "@crayond_dev/ui_date-range-selector";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { fileItem, FileUpload } from "@crayond_dev/ui_file-upload";
import { InputField } from "@crayond_dev/ui_input-field";
import { MobileInput } from "@crayond_dev/ui_mobile-input";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { SelectChip } from "@crayond_dev/ui_select-chip";
import { Table } from "@crayond_dev/ui_table";
import {
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Popover,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { renderPreviewComponents } from "@pages/brandCreateWebForm/components/previewComponents";
import moment from "moment";
import { CSSProperties, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertDeleteIcon from "../../assets/alertDelete";
import CalenderIcon from "../../assets/calender";
import { EmptyIcon } from "../../assets/emptyIcon";
import FilterIcon from "../../assets/filter";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { TickIcon } from "../../assets/tickIcon";
import UploadDocumentIcon from "../../assets/uploadIcon";
import { configureWebformStyle } from "./style";

export interface ConfigureWebformsProp {
  className?: string;
  sx?: SxProps<Theme>;
}
const status = [
  { label: "Active", value: 1 },
  { label: "Inactive", value: 2 },
  { label: "Draft", value: 5 },
];

export function ConfigureWebforms(props: ConfigureWebformsProp): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;

  const {
    limit,
    offset,
    searchValue,
    sortItem,
    webformsLists,
    selectedStatus,
    modudlelist,
    chooseFormCategory,
    statusMuduleList,
    updateComponents,

    setLimit,
    setOffset,
    clearFIlter,
    clearAll,
    setHandleSearch,
    sethandleSortItem,
    setSelectedStatus,
    setHandleSelectForm,
    setEditBrandWebForm,
    getWebFormList,
    getWebFormModuleList,
    deleteWebFormStatus,
    updateBrandWebForm,
    dublicateBrandWebForms,
    getWebFormStatusList,
  } = useBrandWebForm();

  const navigate = useNavigate();
  const [openMisMatch, setOpenMisMatch] = useState(false);
  const [openPreview, setOpenpreview] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>();
  const [isLoading, setisLoading] = useState(true);

  // This Part helps to pagination
  const totalCount = webformsLists?.data?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const openDate = Boolean(anchorEl);

  const handleChangeSort = (label: string) => {
    sethandleSortItem(label);
    if (label === "Recently added") {
      setSortbadge(true);
    } else {
      setSortbadge(true);
    }
  };

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };

  const handleClickMenu = (id: number) => {
    if (id === 1) {
      console.log(1);
    }
    if (id === 2) {
      setEditBrandWebForm(rowData?.id);
      navigate(brandRoutes.createNewWebForm, { state: rowData });
    }
    if (id === 3) {
      setEditBrandWebForm(rowData?.id);
      setOpenpreview(true);
    }
    if (id === 4) {
      dublicateBrandWebForms(rowData?.id);
    }
    if (id === 5) {
      updateBrandWebForm(
        rowData?.id,
        rowData?.status[0]?.label === "Inactive" ? 1 : 2
      );
    }
    if (id === 6) {
      setEditBrandWebForm(rowData?.id);
      navigate(brandRoutes.usewebform, { state: rowData });
    }
    if (id === 7) {
      setOpenMisMatch(true);
    }
    setAnchorElRow(null);
  };

  const handleDeleteForm = async () => {
    const res: any = await deleteWebFormStatus(rowData?.id, 2);
    if (res == 200) {
      setOpenMisMatch(false);
    }
  };

  const handleRegisterWarranty = () => {
    getWebFormList();
    setOpenFilter(false);
  };

  const handleFilterReset = () => {
    setOpenFilter(false);
    clearFIlter();
    getWebFormList();
  };

  const onsubmit = (e: any) => {
    setAnchorEl(null);
  };

  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
  };

  const MenuItem = [
    { label: "Automate", id: 1 },
    { label: "Edit", id: 2 },
    { label: "Preview", id: 3 },
    { label: "Duplicate", id: 4 },
    {
      id: 5,
      label: rowData?.status[0]?.label === "Inactive" ? "Active" : "Inactive",
      color: rowData?.status[0]?.label === "Inactive" ? "#008545" : "#DF3813",
    },
    { label: "Use Form", id: 6 },
    { id: 7, label: "Delete", color: "#DF3813" },
  ];

  const customerList = modudlelist?.map((list) => ({
    label: list?.name,
    value: list?.id,
  }));

  const statusList = statusMuduleList?.map((list: any) => ({
    label: list?.status,
    value: list?.id,
  }));

  const brandTableListData =
    webformsLists?.data?.rows &&
    webformsLists?.data?.rows.length > 0 &&
    webformsLists?.data?.rows?.map((items: any) => ({
      id: items?.id,
      formName: items?.name,
      formCategoryId: items?.category?.id,
      formCategory: items?.category?.name,
      createdDate: moment(items?.created_at).format("DD-MM-YYYY"),
      updatedDate: moment(items?.updated_at).format("DD-MM-YYYY"),
      status: [
        {
          label: items?.status?.name,
          color:
            (items?.status?.id === 1 && "#008545") ||
            (items?.status?.id === 2 && "#3D0600") ||
            (items?.status?.id === 5 && "#D17800"),
          bgColor:
            (items?.status?.id === 1 && "#CBF2E0") ||
            (items?.status?.id === 2 && "#FFDAD3") ||
            (items?.status?.id === 5 && "#FFDDB8"),
        },
      ],
      action: "action",
    }));

  const tableData = {
    Header: [
      {
        id: "formName",
        align: "left",
        disablePadding: false,
        label: "Form name",
        isSortable: false,
      },
      {
        id: "formCategory",
        align: "left",
        disablePadding: false,
        label: "Form category",
        isSortable: false,
      },
      {
        id: "createdDate",
        align: "left",
        disablePadding: false,
        label: "Created date",
        isSortable: false,
      },
      {
        id: "updatedDate",
        align: "left",
        disablePadding: false,
        label: "Updated date",
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
    dataList: brandTableListData,
    tableData: [
      { type: ["TEXT"], name: "formName", width: 180 },
      { type: ["TEXT"], name: "formCategory", width: 130 },
      { type: ["TEXT"], name: "createdDate", width: 120 },
      { type: ["TEXT"], name: "updatedDate", width: 140 },
      { type: ["LABEL"], name: "status", width: 120 },
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

  useEffect(() => {
    getWebFormModuleList();
    getWebFormStatusList();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      await getWebFormList();
      setisLoading(false);
    };
    fetchData();
  }, [searchValue, sortItem, offset, limit]);

  return (
    <>
      <Box
        sx={[
          {
            ...configureWebformStyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        className={`${className}`}
        {...rest}
      >
        <Stack sx={configureWebformStyle.tableCardStyle}>
          <Grid container sx={configureWebformStyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={configureWebformStyle.navContainer}>
                <Search
                  value={searchValue}
                  variant={"isSearchInput"}
                  rootStyle={configureWebformStyle.searchRootStyle}
                  inputWidth="100%"
                  minExpandWidth="100%"
                  placeHolderText="Search by form name"
                  placeHolderColor="text.secondary"
                  placeHolderSize={14}
                  onSelectSearchDataFun={() => false}
                  handleOptionChange={() => false}
                  handleInputOnChange={(e) => setHandleSearch(e?.target?.value)}
                  inputBorderHoverColor="#D9DBDD"
                  inputBorderDefaultColor="#D9DBDD"
                  inputBorderFocusColor="#D9DBDD"
                />
                <Box sx={configureWebformStyle.navContainer}>
                  <Box
                    sx={configureWebformStyle.filterButton}
                    mr={2}
                    onClick={() => setOpenFilter(true)}
                  >
                    <FilterIcon />
                  </Box>

                  <Sort
                    badge={sortBadge}
                    sortItem={sortItem}
                    handleChange={handleChangeSort}
                    sx={{ marginRight: 2 }}
                  />
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ mr: 2, height: "3.6rem" }}
                  />

                  <BasicButton
                    variant="contained"
                    sx={configureWebformStyle.addNewButonStyle}
                    onClick={() => navigate(brandRoutes.createNewWebForm)}
                  >
                    Create new webform
                  </BasicButton>
                </Box>
              </Stack>
              <Stack height={"100%"} mt={1.4}>
                {
                  isLoading ? (
                    <>
                      {[...Array(webformsLists?.data?.rows?.length || 0)].map((_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      ))}
                    </>
                  )
                    :
                    webformsLists?.data?.rows.length > 0 ? (
                      <Table
                        {...(tableData as any)}
                        tableMaxHeight={{ md: "52vh", lg: "56vh", xl: "60vh" }}
                      />
                    ) : (
                      <Box sx={configureWebformStyle.emptyContainer}>
                        <EmptyIcon />
                        <Typography sx={configureWebformStyle.emptyTextStyle}>
                          No Data found
                        </Typography>
                      </Box>
                    )}
              </Stack>
            </Grid>
            <Grid item xs={12} sx={configureWebformStyle.childGrid}>
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
                paginationBoxStyle={configureWebformStyle.paginationBoxStyle}
                sx={{ width: "100%" }}
                disableVisibleTotalCountSelectMenu={false}
                pageText={"Page"}
                pageCount={false}
                showPaginationBottomCountText={
                  <>
                    <Typography
                      sx={configureWebformStyle.paginationCountTextStyle}
                    >
                      {`showing ${offset * limit + 1} - ${totalCount < (offset + 1) * limit
                        ? totalCount
                        : (offset + 1) * limit
                        } of ${totalCount} records`}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Stack>

        {/** table row popover */}
        <PopoverComponent
          handleClickMenuLabel={(e, val) => handleClickMenu(Number(val?.id))}
          actionMenu={MenuItem as any}
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

        {/** Preview component modal */}
        <DialogBox
          title={rowData?.formName}
          titleStyle={configureWebformStyle.addNewModalTitleStyle}
          open={openPreview}
          handleClose={() => {
            setOpenpreview(false), clearAll();
          }}
          titleVariant={"inherit"}
          maxWidth="xs"
          dialogmodalBoxStyle={configureWebformStyle.dialogmodalBoxSx}
          dialogBodyStyle={
            updateComponents?.length !== 0
              ? {}
              : configureWebformStyle.dialogBodySx
          }
          Body={
            updateComponents && updateComponents?.length !== 0 ? (
              <Box sx={{ pointerEvents: "none", cursor: "not-allowed" }}>
                {updateComponents?.map((item) => renderPreviewComponents(item))}
              </Box>
            ) : (
              <Box sx={configureWebformStyle.emptyContainer}>
                <EmptyIcon />
                <Typography sx={configureWebformStyle.emptyTextStyle}>
                  No Components found
                </Typography>
              </Box>
            )
          }
          footerComponent={<></>}
        />

        {/** filter modal */}
        <DialogBox
          title={"Filter"}
          titleStyle={configureWebformStyle.addNewModalTitleStyle}
          open={openFilter}
          handleClose={() => setOpenFilter(false)}
          titleVariant={"inherit"}
          maxWidth="xs"
          dialogmodalBoxStyle={configureWebformStyle.dialogmodalFilterBoxSx}
          Body={
            <>
              <Box>
                <SelectAndautocomplete
                  options={customerList}
                  variant="filled"
                  limitTags={1}
                  onChange={(e: any, value: any) => setHandleSelectForm(value)}
                  value={chooseFormCategory}
                  label={"Choose form category"}
                  labelSx={configureWebformStyle.selectLabelStyle}
                  placeholder=""
                  isError={false}
                  sx={{ ...configureWebformStyle.selectRootStyle, mb: 2 }}
                  optionStyle={{ fontSize: "1.4rem" }}
                  labelStyleProps={{ fontSize: "1.6rem !important" }}
                />
              </Box>
              <Box>
                <Typography sx={configureWebformStyle.statusText} mb={"0.8rem"}>
                  Status
                </Typography>
                <SelectChip
                  options={status as any}
                  selectChange={(value: any) => setSelectedStatus(value)}
                  isMultiple={true}
                  value={selectedStatus}
                  startIcon={<TickIcon />}
                  borderRadius={"0.8rem"}
                  textStyle={configureWebformStyle.textStyleSelet}
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
                  sx={{ '& .MuiToggleButtonGroup-root': { gap: "1.2rem" } }}
                />
              </Box>
            </>
          }
          footerComponent={
            <>
              <Stack sx={configureWebformStyle.buttonContainerStyle}>
                <BasicButton
                  variant="outlined"
                  sx={{
                    ...configureWebformStyle.addNewButonStyle,
                    backgroundColor: "",
                    ":hover": { backgroundColor: "" },
                  }}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleFilterReset()}
                >
                  Reset
                </BasicButton>
                <BasicButton
                  sx={configureWebformStyle.addNewButonStyle}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleRegisterWarranty()}
                >
                  Apply filter
                </BasicButton>
              </Stack>
            </>
          }
        />

        {/** open mismatch */}
        <DialogBox
          title={""}
          open={openMisMatch}
          handleClose={() => setOpenMisMatch(false)}
          titleVariant={"inherit"}
          maxWidth="sm"
          titleStyle={{}}
          dialogBodyStyle={configureWebformStyle.mismatchDialog}
          dialogmodalBoxStyle={configureWebformStyle.mismatchDialogBodySx}
          Body={
            <>
              <Stack sx={configureWebformStyle.mismatchBodyContainer}>
                <Box>
                  <AlertDeleteIcon />
                </Box>
                <Stack
                  maxWidth={"39rem"}
                  sx={configureWebformStyle.emptyIconCenter}
                  mt={"2.4rem"}
                >
                  <Typography sx={configureWebformStyle.titleStyle}>
                    Delete web form
                  </Typography>
                  <Typography
                    mt={"0.8rem"}
                    sx={configureWebformStyle.alertTextStyle}
                  >
                    Are you sure want to delete the
                    <span
                      style={configureWebformStyle.titleStyle as CSSProperties}
                    >
                      Warranty register form,
                    </span>{" "}
                    make sure to export the form data before deleting
                  </Typography>
                </Stack>
              </Stack>
            </>
          }
          closeIcon={false}
          footerComponent={
            <Stack sx={configureWebformStyle.buttonContainerStyle}>
              <BasicButton
                variant="outlined"
                sx={{
                  ...configureWebformStyle.addNewButonStyle,
                  backgroundColor: "",
                  ":hover": { backgroundColor: "" },
                }}
                rootSx={{ width: "100%" }}
                onClick={() => setOpenMisMatch(false)}
              >
                Cancel
              </BasicButton>
              <BasicButton
                sx={configureWebformStyle.addNewButonStyle}
                rootSx={{ width: "100%" }}
                onClick={() => handleDeleteForm()}
              >
                Delete
              </BasicButton>
            </Stack>
          }
        />

        {/**date picker popover */}
        <Popover
          open={openDate}
          elevation={0}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: configureWebformStyle.datePopoverStyle,
          }}
        >
          <DateRangeSelector
            selectsRange={false}
            getStartDate={new Date()}
            onSubmit={(e) => onsubmit(e)}
            secondButton
            firstButton
            sx={configureWebformStyle.dateCalenderStyle}
            subRootStyle={{ width: "30rem" }}
            selectedBackgroundColor={"custom.primary"}
            selectedColor={"custom.surfaceBright"}
            cancelButtonStyle={configureWebformStyle.cancelButtonStyle}
            doneButtonStyle={configureWebformStyle.doneButtonStyle}
          />
        </Popover>
      </Box>

    </>


  );
}
