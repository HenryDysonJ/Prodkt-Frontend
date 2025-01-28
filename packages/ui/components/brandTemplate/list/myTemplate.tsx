import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Popover,
  SelectChangeEvent,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { listStyle } from "./style";
import { Sort } from "@components/brandSort";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { CustomTooltip } from "@atoms/customTooltip";
import { Button } from "@atoms/button";
import { Search } from "@crayond_dev/ui_search";
import FilterIcon, { FilterIconGrey } from "@assets/brandAssets/filter";
import CreateTemplate from "@assets/brandAssets/createTemplete";
import { Table, TableProps } from "@crayond_dev/ui_table";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { Pagination } from "@crayond_dev/ui_pagination";
import Dots from "@assets/brandAssets/threedots";
import { useNavigate } from "react-router-dom";
import LeftPaginationArrow from "@assets/brandAssets/paginationLeftArrow";
import RightPaginationArrow from "@assets/brandAssets/paginationRightArrow";
import DownPagenationArrow from "@assets/brandAssets/paginationDownArrow";
import { TickIcon } from "@assets/brandAssets/tickIcon";
import { SelectChip } from "@crayond_dev/ui_select-chip";
import { useOffersStore, useTemlateStore } from "@core/store/brand-app";
import { brandRoutes } from "@core/routes/brand-app";
import moment from "moment";
import { localStorageKeys } from "@core/utils";
import OpenBox from "@assets/brandAssets/openBox";
import { DeleteDialog } from "@atoms/deleteDialog";

const MenuOption = [
  {
    id: 1,
    label: "View",
  },
  {
    id: 3,
    label: "Duplicate",
  },
  {
    id: 4,
    label: "Delete",
  },
];
const statusValue = [
  { label: "Approved", value: "7" },
  { label: "Draft", value: "5" },
  { label: "Rejected", value: "8" },
  { label: "Pending approval", value: "6" },
];

export const MyTemplateList = () => {
  const {
    offset,
    limit,
    search,
    sortItem,
    setHandleSearch,
    getTemplateList,
    deleteTemplate,
    dublicateTemplate,
    templatesList,
    setClearAll,
    setViewTemplate,
    selectedOptions,
    setFilterData,
    initializeFilterData,
    setFilterDataIntoModal,
    applyFilterData,
    loading,
    handleOffsetLimitData,
    setViewType
  } = useTemlateStore();

  const { exchangeBrandList, getExchangeBrandList } = useOffersStore()

  const [sortBadge, setSortbadge] = useState<boolean>(false);

  const [openFilter, setOpenFilter] = React.useState(false);
  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [tableRowData, setTableRowData] = React.useState<any>(null);
  const [filterBadge, setFilterBadge] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState(false);

  const token = localStorage?.getItem(localStorageKeys.authToken)
  const brandId = exchangeBrandList?.brand?.id
  

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const openPop = Boolean(anchorElRow);

  const generateStableID = (item: any) => {
    const idString = `${item?.name}-${item?.category?.name}-${item?.created_at}`;
    const hashCode = idString.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return hashCode % 10000;
  };

  const TreeTableData = templatesList?.rows?.map((item: any) => {
    return {
      ...item,
      Templatename: item?.name,
      TemplateID: generateStableID(item),
      Templatecategory: item?.category?.name,
      Createddate: moment(item?.created_at).format('DD-MM-YYYY'),
      status: [
        {
          label: item?.status?.name,
          color:
            (item?.status?.id === 1 && "#008545") ||
            (item?.status?.id === 2 && "#3D0600") ||
            (item?.status?.id === 5 && "#4E585E") ||
            (item?.status?.id === 6 && "#D17800") ||
            (item?.status?.id === 8 && "#3D0600") ||
            (item?.status?.id === 7 && "#008545"),
          bgColor:
            (item?.status?.id === 1 && "#CBF2E0") ||
            (item?.status?.id === 2 && "#FFDAD3") ||
            (item?.status?.id === 5 && "#E6E8E9") ||
            (item?.status?.id === 6 && "#FFDDB8") ||
            (item?.status?.id === 8 && "#FFDAD3") ||
            (item?.status?.id === 7 && "#CBF2E0"),
        },
      ],
    };
  });

  const tableData: TableProps = {
    Header: [
      {
        id: "Templatename",
        align: "left",
        disablePadding: false,
        label: "Template name",
        isSortable: false,
      },
      {
        id: "TemplateID",
        align: "left",
        disablePadding: false,
        label: "Template ID",
        isSortable: false,
      },
      {
        id: "Templatecategory",
        align: "left",
        disablePadding: false,
        label: "Template category",
        isSortable: false,
      },
      {
        id: "Createddate",
        align: "left",
        disablePadding: false,
        label: "Created date",
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
    dataList: TreeTableData,
    tableData: [
      { type: ["TEXT"], name: "Templatename", width: 150 },
      { type: ["TEXT"], name: "TemplateID", width: 150 },
      { type: ["TEXT"], name: "Templatecategory", width: 150 },
      { type: ["TEXT"], name: "Createddate", width: 150 },
      { type: ["LABEL"], name: "status", width: 100 },
      {
        type: ["ACTION"],
        name: "action",
        width: 20,
        variant: [
          {
            method: (id: string | number, rowData: object, event: Event) =>
              handleMoreFunction(id, rowData, event),
            icon: <Dots />,
          },
        ],
      },
    ],
    headerOptions: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#4E585E",
      bgColor: "#f0f3f6",
      borderBottom: "0px solid #E6E6E6",
      padding: "12px",
      borderRadius: "4px",
    },
    rowOptions: {
      rowOddBgColor: "#fff",
      rowEvenBgColor: "#fff",
      // paddingTop: "8px",
      // paddingBottom: "2px",
      borderRadius: "4px",
    },
    cellOptions: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#02111A",
      bgColor: "#fff",
      borderBottom: "1px solid #D9DBDD",
    },
    noDataFound: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#353448",
      bgColor: "#F7F7F7",
      text: "",
      component: null,
    },
    tableBackground: "#ffffff",
    tableMinWidth: "100%",
    tableName: " ",
    marginAll: "0px",
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
      stickyRight: ['action', 'response'],
    },
  };

  // PAGINATION 
  const handlePageChange = (e: any, page: any) => {
    handleOffsetLimitData("offset", page - 1, brandId);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    handleOffsetLimitData("limit", perPage, brandId);
  };

  const totalCount = templatesList?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  // HANDLE MORE FUNCTION
  const handleMoreFunction = (
    id: string | number,
    rowData: object,
    event: any
  ) => {
    setTableRowData(rowData);
    setAnchorElRow(event.currentTarget);
  };

  // HANDLE SORT FUNCTION
  const handleSort = (label: string) => {
    handleOffsetLimitData("sortItem", label, brandId);
    if (label?.length > 0) {
      setSortbadge(true);
    }
  };

  const handleClosePopover = () => {
    setAnchorElRow(null);
  };

  // HANDLE CLICK MENU 
  const handleClickMenu = (item: any) => {
    if (item.id == 1) {
      navigate(brandRoutes?.createTemplate);
      setViewTemplate(tableRowData)
      setOpenAddTag(true);
    }
    if (item?.id === 4) {
      setOpenDialog(true);
    }
    if (item?.id === 3) {
      dublicateTemplate(tableRowData?.id, brandId)
    }
    setAnchorElRow(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    handleCloseDialog();
  };
  // Delete table row data
  const handleDelete = () => {
    deleteTemplate(2, tableRowData?.id, brandId)
    handleCloseDialog();
  };

  const navigate = useNavigate();

  const redirectToNewTemplate = () => {
    setClearAll()
    setViewType('')
    navigate(brandRoutes?.createTemplate);
  };

  // To apply filter for offer data
  const handleAppliFilter = () => {
    setOpenFilter(false);
    if (
      selectedOptions?.statuses?.length > 0 ||
      selectedOptions?.offerTypes?.length > 0
    ) {
      setFilterBadge(true);
    }
    applyFilterData(brandId);
  };

  // To reset the offer filter modal
  const handleResetFilter = () => {
    // False badge filter dot
    setFilterBadge(false);
    // Close filter modal
    setOpenFilter(false);
    // Initialize badge filter data
    initializeFilterData(brandId);
  };

  useEffect(() => {
    getExchangeBrandList(token)
    setTimeout(async () => {
      await getTemplateList(0, 5, "", "", [], brandId);
    },);

  }, [token, brandId])


  return (
    <>
      <Box sx={listStyle.rootSx}>
        <Box sx={listStyle.mainBox}>
          {/* <Box> */}
          <Grid container>
            <Grid item xs={12}>

              <Grid container mb={2}>
                {/* Search input */}
                <Grid
                  item
                  xs={2}
                  sm={3}
                  md={6}
                  lg={6}
                  xl={6}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  {!search && templatesList?.count === 0 &&
                    (!filterBadge && templatesList?.count === 0) ? (
                    <Box></Box>
                  ) : <Search
                    variant={"isSearchInput"}
                    rootStyle={{
                      width: "250px",
                      borderColor: "1px solid #D9DBDD",
                    }}
                    inputWidth="135%"
                    minExpandWidth="135%"
                    placeHolderText="Search by template name or category name"
                    handleInputOnChange={(e) => setHandleSearch(e?.target?.value, brandId)}
                    onSelectSearchDataFun={() => false}
                    handleOptionChange={() => false}
                    inputBorderHoverColor="#D9DBDD"
                    inputBorderDefaultColor="#D9DBDD"
                    inputBorderFocusColor="#D9DBDD"
                    placeHolderColor="#4E585E"
                    placeHolderSize={14}
                    value={search}
                  />
                  }
                </Grid>

                {/* sort and add new button */}
                <Grid
                  item
                  xs={10}
                  sm={9}
                  md={6}
                  lg={6}
                  xl={6}
                  sx={listStyle.gridbutton}
                >
                  {!search && templatesList?.count === 0 &&
                    !filterBadge ? (
                    <Box></Box>
                  ) :
                    <CustomTooltip title={"Sort"} placement="bottom">
                      <BasicButton sx={listStyle.buttonItemContainer}>
                        <Sort
                          badge={sortBadge}
                          sortItem={sortItem}
                          handleChange={handleSort}
                        />
                      </BasicButton>
                    </CustomTooltip>
                  }
                  {!search &&
                    templatesList?.count === 0 &&
                    !filterBadge
                    ? (
                      <Box></Box>
                    ) :
                    <>
                      <CustomTooltip title={"Filter"} placement="bottom">
                        <BasicButton
                          sx={{
                            ...listStyle.buttonItemContainer,
                            borderColor: "custom.outline",
                          }}
                          onClick={() => {
                            setOpenFilter(true), setFilterDataIntoModal()
                          }}
                        >
                          <Badge
                            sx={listStyle.badgeSx}
                            color="error"
                            variant={filterBadge ? "dot" : "standard"}
                          >
                            <FilterIcon />
                          </Badge>
                        </BasicButton>
                      </CustomTooltip>
                      <Divider orientation={"vertical"} sx={listStyle.divider} />
                    </>
                  }
                  <Button
                    variant={"contained"}
                    sx={listStyle.addNewButton}
                    onClick={redirectToNewTemplate}
                  >
                    Create new template
                  </Button>
                </Grid>
              </Grid>
              {
                loading ? (
                  <>
                    {[...Array(templatesList?.rows?.length || 0)].map((_, index) => (
                      <Skeleton key={index} width="100%" height={70} />
                    ))}
                  </>
                )
                  :
                  templatesList?.count > 0 ? (
                    <Table
                      {...tableData}
                      tableMaxHeight="52vh"
                    />
                  ) : (
                    <>

                      {(search && templatesList?.count === 0)
                        || (filterBadge && templatesList?.count === 0) ?
                        (
                          <Box sx={listStyle.centerItem}>
                            <Box sx={listStyle.itemBox}>
                              <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <OpenBox />
                              </Box>
                              <Box>
                                <Typography
                                  sx={listStyle.productInfo}
                                  textAlign={"center"}
                                >
                                  No Data!
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        )
                        :
                        !filterBadge &&
                        !search &&
                        templatesList?.count === 0 &&
                        (
                          <Box sx={listStyle.centerItem}>
                            <Box>
                              <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <CreateTemplate />
                              </Box>
                              <Box>
                                <Typography sx={listStyle.productInfo} textAlign={"center"}>
                                  Create new templates for whatsapp message
                                </Typography>
                              </Box>
                              <Box display={"flex"} justifyContent={"center"}>
                                <Button
                                  variant="contained"
                                  sx={listStyle.addNewSx}
                                  onClick={redirectToNewTemplate}
                                >
                                  Create new template
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        )
                      }
                    </>
                  )}
            </Grid>
            {/* </Box> */}
            {/* Table pagination */}
            <Grid item xs={12}>
              {!(search && templatesList?.count === 0)
                && (!filterBadge && templatesList?.count === 0) ?
                ""
                : (
                  <Box sx={listStyle.pageSx}>

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
                      disableVisibleTotalCountSelectMenu={false}
                      paginationBoxStyle={listStyle.paginationBoxStyle}
                      pageCount={false}
                      pageText={"Page"}
                      showPaginationBottomCountText={
                        <>
                          <Typography sx={listStyle.paginationCountTextStyle}>
                            {" "}
                            {`showing ${offset * limit + 1} - ${totalCount < (offset + 1) * limit
                              ? totalCount
                              : (offset + 1) * limit
                              } of ${totalCount} records`}
                          </Typography>
                        </>
                      }
                    />
                  </Box>

                )}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <DialogBox
        open={openFilter}
        handleClose={() => setOpenFilter(false)}
        title={"Filter"}
        titleStyle={listStyle.titleStyleDialog}
        maxWidth="xs"
        dialogmodalBoxStyle={listStyle.dialogmodal}
        dialogBodyStyle={listStyle.dialogBodyStyle}
        Body={
          <>
            <Stack
              direction={"column"}
              width={"100%"}
              gap={2}
              mb={2}
              justifyContent={"space-between"}
            >
              <Box mb={4}>
                {/* <Typography mb={1} sx={listStyle.selectChipHeaderTextSx}>
                  Template category
                </Typography>
                <SelectChip
                  options={TemplateCategoryValue}
                  selectChange={(e: any, value: any) => handleChangeFilter('CategoryType', value)}
                  isMultiple={true}
                  value={filterData?.CategoryType}
                  isShowIcon={true}
                  startIcon={<TickIcon />}
                  borderRadius={"8px"}
                  textStyle={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                    marginInline: "4px",
                  }}
                  bgColor={"#1363DF"}
                  selectedBgcolor={"#fff"}
                  selectedBorderColor={"#D9DBDD"}
                  borderColor={"#1363DF"}
                  bgColorHover={"#1363DF"}
                  selectedTextColor={"#02111A"}
                  selectChipStyles={{ height: "46px" }}
                  iconStyle={{
                    marginInlineStart: "4px",
                    marginInlineEnd: "4px",
                  }}
                /> */}
                <Typography mb={1} mt={2} sx={listStyle.selectChipHeaderTextSx}>
                  Status
                </Typography>
                <SelectChip
                  options={statusValue}
                  selectChange={(value: any) => setFilterData('statuses', value)}
                  isMultiple={true}
                  value={selectedOptions?.statuses}
                  isShowIcon={true}
                  startIcon={<TickIcon />}
                  borderRadius={"0.8rem"}
                  textStyle={listStyle.textStyleSelect}
                  bgColor={"#fff"}
                  selectedBgcolor={"#1363DF"}
                  selectedBorderColor={"#1363DF"}
                  borderColor={"#D9DBDD"}
                  bgColorHover={"#FFFFFF"}
                  selectedTextColor={"#ffff"}
                  selectedWithIcon={true}
                  selectChipStyles={{ height: "4.6rem" }}
                  iconStyle={{ marginInlineStart: "0.4rem", marginInlineEnd: "0.4rem" }}
                />
              </Box>
            </Stack>
          </>
        }
        footerComponent={
          <>
            <Button
              variant="outlined"
              sx={listStyle.resetButtonSx}
              onClick={() => handleResetFilter()}
            >
              Reset
            </Button>
            <Button
              sx={listStyle.applyFilterButtonSx}
              onClick={() => handleAppliFilter()}
              variant="contained"
            >
              Apply filter
            </Button>
          </>
        }
      />


      {/** table row popover */}
      <Popover
        open={openPop}
        anchorEl={anchorElRow}
        onClose={handleClosePopover}
        PaperProps={{
          sx: listStyle.popoverStyle,
        }}
        elevation={2}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        {MenuOption &&
          MenuOption.map((item) => (
            <Typography
              key={item.id}
              sx={{
                ...listStyle.viewTextStyle,
                color: item?.label === "Delete" ? "#F44F5A" : "#02111A",
              }}
              onClick={() => handleClickMenu(item)}
            >
              {item?.label}
            </Typography>
          ))}
      </Popover>


      {/* Delete dialog */}
      <DeleteDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="Delete Confirmation"
        bodyText="Delete template?"
        subText={`''${tableRowData?.Templatename}''` ?? ""}
        cancelButtonText="Cancel"
        saveButtonText="Delete"
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
    </>
  );
};
