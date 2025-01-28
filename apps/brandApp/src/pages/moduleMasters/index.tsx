import { useModuleMasters } from "@core/store/brand-app";
import TopBar from "@core/ui/components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Search } from "@crayond_dev/ui_search";
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
import { useEffect, useState } from "react";

import { Sort } from "@core/ui/components/brandSort";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Table } from "@crayond_dev/ui_table";
import moment from "moment";
import EmptyStateIcon from "../../assets/emptyState";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { moduleStyle } from "./style";

export interface SegmentProp {
  className?: string;
  sx?: SxProps<Theme>;
}

export function ModuleMaster(props: SegmentProp): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;

  const {
    limit,
    offset,
    search,
    sortItem,
    error,
    moduleName,
    moduleList,

    setLimit,
    setOffset,
    clearAll,
    sethandleSortItem,
    setHandleSearch,
    setModuleName,
    setError,
    getModuleMasterList,
    deleteModule,
    addNewModule,
  } = useModuleMasters();

  const [openModule, setOpenModule] = useState<boolean>(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState(true);
  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const [rowData, setRowData] = useState<any>();

  const open = Boolean(anchorElRow);

  // This Part helps to pagination
  const totalCount = moduleList?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);
  };

  const handleChangeSort = (label: string) => {
    sethandleSortItem(label);
    setSortbadge(true);
  };

  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
  };

  const handleClickMenu = async () => {
    setAnchorElRow(null)
    deleteModule(rowData?.id);
  };

  const handleSaveModule = async () => {
    if (!moduleName) {
      setError("Enter module name");
    } else {
      const res: any = await addNewModule();
      if (res === 200) {
        clearAll();
        setOpenModule(false);
        setError("");
      }
    }
  };

  const handleClose = () => {
    setOpenModule(false)
  }

  const tableItems = moduleList?.rows?.map((item) => ({
    id: item?.id,
    tagName: item?.name,
    createdOn: moment(item?.created_at).format("DD-MM-YYYY, hh:mm A"),
    updatedOn: moment(item?.updated_at).format("DD-MM-YYYY, hh:mm A"),
    action: "action",
  }));

  const tableData = {
    Header: [
      {
        id: "tagName",
        align: "left",
        disablePadding: false,
        label: "Module name",
        isSortable: false,
      },
      {
        id: "createdOn",
        align: "left",
        disablePadding: false,
        label: "Created on",
        isSortable: false,
      },
      {
        id: "updatedOn",
        align: "left",
        disablePadding: false,
        label: "Updated on",
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
      { type: ["TEXT"], name: "tagName", width: 160 },
      { type: ["TEXT"], name: "createdOn", width: 150 },
      { type: ["TEXT"], name: "updatedOn", width: 150 },
      {
        type: ["ACTION"],
        name: "action",
        width: 28,
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

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      await getModuleMasterList();
      setisLoading(false);
    };
    fetchData();
  }, [search, sortItem, offset, limit]);

  return (
    <>
      <Box
        sx={[
          {
            ...moduleStyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        className={`${className}`}
        {...rest}
      >
        <TopBar title="Module masters" backBtn={false} />
        <Stack sx={moduleStyle.tableCardStyle}>
          <Grid container sx={moduleStyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={moduleStyle.navContainer}>
                <Search
                  value={search}
                  variant={"isSearchInput"}
                  inputWidth="100%"
                  minExpandWidth="100%"
                  placeHolderText="Search by tag name"
                  placeHolderSize={14}
                  placeHolderColor="#4E585E"
                  onSelectSearchDataFun={() => false}
                  handleOptionChange={() => false}
                  handleInputOnChange={(e) => setHandleSearch(e?.target?.value)}
                  inputBorderHoverColor="#D9DBDD"
                  inputBorderDefaultColor="#D9DBDD"
                  inputBorderFocusColor="#D9DBDD"
                  rootStyle={moduleStyle.searchRootStyle}
                />
                <Box sx={moduleStyle.navContainer}>
                  {moduleList?.rows?.length < 0 ? (
                    <></>
                  ) : (
                    <>
                      <Sort
                        badge={sortBadge}
                        sortItem={sortItem}
                        handleChange={handleChangeSort}
                        sx={{ mr: 2 }}
                      />
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{ mr: 2, height: "3rem" }}
                      />
                    </>
                  )}
                  <BasicButton
                    variant="contained"
                    //   disableRipple
                    sx={moduleStyle.addNewButonStyle}
                    onClick={() => setOpenModule(true)}
                  >
                    Add new module
                  </BasicButton>
                </Box>
              </Stack>
              <Stack mt={1.4}>
                {

                  isLoading ? (
                    <>
                      {[...Array(moduleList?.rows?.length || 0)].map((_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      ))}
                    </>
                  )
                    :
                    moduleList?.rows?.length > 0 ? (
                      <Table
                        {...(tableData as any)}
                        tableMaxHeight={{ md: "54vh", lg: "56vh", xl: "60vh" }}
                      />
                    ) : (
                      <Box sx={moduleStyle.emptyContainer}>
                        <Box sx={{ display: "grid", placeItems: "center" }}>
                          <EmptyStateIcon />
                          <Typography
                            sx={{ ...moduleStyle.viewTextStyle, color: "#02111A" }}
                          >
                            Give a unique tag to customers groups
                          </Typography>
                          <BasicButton
                            variant="contained"
                            //   disableRipple
                            sx={moduleStyle.addNewButonStyle}
                            onClick={() => setOpenModule(true)}
                            rootSx={{ width: "fit-content", mt: 2 }}
                          >
                            Add new module
                          </BasicButton>
                        </Box>
                      </Box>
                    )}
              </Stack>
            </Grid>
            <Grid item xs={12} sx={moduleStyle.childGrid}>
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
                perPage={offset === 0 ? 1 : 0}
                value={parseInt(currentPageString, 10).toString()}
                handleChange={handlePerPageChange}
                handleChangePage={handlePageChange}
                paginationBoxStyle={moduleStyle.paginationBoxStyle}
                sx={{ width: "100%" }}
                disableVisibleTotalCountSelectMenu={false}
                pageText={"Page"}
                pageCount={false}
                showPaginationBottomCountText={
                  <>
                    <Typography sx={moduleStyle.paginationCountTextStyle}>
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

        {/** Add new tag modal */}
        <DialogBox
          title={"Add New Module"}
          titleStyle={moduleStyle.addNewModalTitleStyle}
          open={openModule}
          handleClose={handleClose}
          titleVariant={"inherit"}
          maxWidth="xs"
          dialogmodalBoxStyle={moduleStyle.dialogmodalBoxSx}
          Body={
            <>
              <Box>
                <InputField
                  variant="filled"
                  label="Module Name"
                  placeholder=""
                  onChange={(e: any) => setModuleName(e.target.value)}
                  value={moduleName}
                  isLabelRequired={false}
                  helperText=""
                  fullWidth
                  required
                  error={Boolean(error)}
                  errorMessage={error}
                  isErrorRequired={Boolean(error)}
                  sx={moduleStyle.formInputStyle}
                  errorStyle={moduleStyle.errorStyle}
                  inputStyle={{
                    "& .MuiFilledInput-root.Mui-disabled": {
                      backgroundColor: "#E6EAEB !important",
                    },
                  }}
                />
              </Box>
            </>
          }
          footerComponent={
            <>
              <Box sx={{ display: "flex", width: "100%" }}>
                <BasicButton
                  sx={moduleStyle.addNewButonStyle}
                  rootSx={{ width: "100%" }}
                  onClick={handleSaveModule}
                >
                  {"Save"}
                </BasicButton>
              </Box>
            </>
          }
        />

        {/** table row popover */}
        <Popover
          open={open}
          anchorEl={anchorElRow}
          onClose={() => setAnchorElRow(null)}
          PaperProps={{
            sx: moduleStyle.popoverStyle,
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
          <Typography
            sx={{
              ...moduleStyle.viewTextStyle,
              color: "#F44F5A",
            }}
            onClick={() => handleClickMenu()}
          >
            Delete
          </Typography>
        </Popover>
      </Box>
    </>

  );
}
