import { brandRoutes } from "@core/routes";
import { Sort } from "@core/ui/components/brandSort";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { Table } from "@crayond_dev/ui_table";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

import { EmptyIcon } from "../../assets/emptyIcon";
import FilterIcon from "../../assets/filter";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { configureWebformStyle } from "./style";
import { useBrandWebForm } from "@core/store/brand-app";
import { useNavigate } from "react-router-dom";

const Library = () => {
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
    updateWebFormStatus,
    dublicateBrandWebForms,
  } = useBrandWebForm();
  
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [anchorElRow, setAnchorElRow] = useState<any>(null);
  const open = Boolean(anchorElRow);

  const totalCount = 12 || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(10), 10));
  const currentPageString = 10?.toString();
  const navigate = useNavigate();

  const handleClickMenu = async (item: any) => {
    if (item.id == 1) {
      setOpenAddTag(true);
    }
    setAnchorElRow(null);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };

  const handlePageChange = (e: any, page: any) => {
    console.log(page);
  };

  const handleFilterReset = () => {
    clearFIlter();
    getWebFormList();
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
  };

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
  };

  const handleChangeSort = (label: string) => {
    sethandleSortItem(label);
    if (label === "Recently added") {
      setSortbadge(true);
    } else {
      setSortbadge(true);
    }
  };

  const tableItemService = [
    {
      formName: "Warranty register",
      formCategory: "Service request",
      createdDate: "20-02-2020",
      action: "",
    },
    {
      formName: "Warranty register",
      formCategory: "Service request",
      createdDate: "20-02-2020",
      action: "",
    },
    {
      formName: "Warranty register",
      formCategory: "Service request",
      createdDate: "20-02-2020",
      action: "",
    },
    {
      formName: "Warranty register",
      formCategory: "Service request",
      createdDate: "20-02-2020",
      action: "",
    },
  ];

  const tableDataService = {
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
        id: "action",
        align: "center",
        disablePadding: false,
        label: "",
        isSortable: false,
      },
    ],
    dataList: tableItemService,
    tableData: [
      { type: ["TEXT"], name: "formName", width: 150 },
      { type: ["TEXT"], name: "formCategory", width: 150},
      { type: ["TEXT"], name: "createdDate", width: 300 },
      {
        type: ["ACTION"],
        name: "action",
        width: 50,
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
      borderRadius: "0.8rem",
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

  return (
    <Box>
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
              </Box>
            </Stack>
            <Stack height={"100%"} mt={1.4}>
              {webformsLists?.data?.rows.length > 0 ? (
                <Table
                  {...(tableDataService as any)}
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
                    {`showing ${offset * limit + 1} - ${
                      totalCount < (offset + 1) * limit
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
    </Box>
  );
};

export default Library;
