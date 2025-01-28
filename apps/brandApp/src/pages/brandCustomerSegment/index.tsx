import { useCustomerSegment } from "@core/store/brand-app";
import { Sort } from "@core/ui/components/brandSort";
import TopBar from "@core/ui/components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { Table } from "@crayond_dev/ui_table";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Popover,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";

import { DeleteDialog } from "@core/ui/atoms";
import { EmptyIcon } from "../../assets/emptyIcon";
import EmptyStateIcon from "../../assets/emptyState";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { segmentStyle } from "./style";

export interface SegmentProp {
  className?: string;
  sx?: SxProps<Theme>;
}

const MenuOPtion = [
  {
    id: 1,
    label: "Edit",
  },
  {
    id: 2,
    label: "Delete",
  },
];

export function CustomerSegments(props: SegmentProp): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;

  const {
    limit,
    offset,
    search,
    sortItem,
    tag,
    error,
    loading,
    segmentsTagLists,
    setError,
    clearAll,
    setLoading,
    setHandleChangeTag,
    handleOffsetLimitData,
    setHandleSearch,
    setEditTagName,
    addSegments,
    updateSegments,
    deleteSegments,
    getSegmentsList,
  } = useCustomerSegment();

  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(offset);
  const [rowData, setRowData] = useState<any>();
  const [openDialog, setOpenDialog] = useState(false);

  // This Part helps to pagination
  const totalCount = segmentsTagLists?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorElRow);

  const handleChangeSort = (label: string) => {

    handleOffsetLimitData("sortItem", label);
    if (label?.length > 0) {
      setSortbadge(true);
    }
  };


  const handlePageChange = (e: any, page: any) => {
    handleOffsetLimitData("offset", page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    handleOffsetLimitData("limit", perPage);
  };

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };

  const handleModalClose = () => {
    setOpenAddTag(false);
    clearAll();
  };

  const handleClickMenu = async (item: any) => {
    if (item.id == 1) {
      setEditTagName(rowData?.tagName, rowData?.id);
      setOpenAddTag(true);
    } else {
      setOpenDialog(true);
    }
    setAnchorElRow(null);
  };

  const validation = () => {
    let isValid = false;
    if (!tag?.tagName) {
      setError("Tag name is required");
      isValid = false;
    } else {
      setError("");
      isValid = true;
    }
    return isValid;
  };

  const handleSaveTagModal = async () => {
    if (validation() && tag?.id) {
      const res: any = await updateSegments()
      if (res?.status === 200) {
        setOpenAddTag(false);
        clearAll();
      }
    } else if (validation()) {
      addSegments()
      clearAll();
      setOpenAddTag(false);
    }

  };

  const tableItems = segmentsTagLists?.result?.map((item) => ({
    id: item?.id,
    tagName: item?.tag_name,
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
        label: "Tag name",
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
      { type: ["TEXT"], name: "tagName", width: 100 },
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

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    handleCloseDialog();
  };

  const handleDelete = () => {
    deleteSegments(rowData?.id);
    handleCloseDialog();
  };

  useEffect(() => {
    getSegmentsList('', '', 0, 5)
  }, [])

  return (

    <>
      <Box
        sx={[
          {
            ...segmentStyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        className={`${className}`}
        {...rest}
      >
        <TopBar title="Customer segments" backBtn={false} />
        <Stack sx={segmentStyle.tableCardStyle}>
          <Grid container sx={segmentStyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={segmentStyle.navContainer}>
                {!search && segmentsTagLists?.result?.length === 0 ? (
                  <Box></Box>
                ) : (
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
                    rootStyle={segmentStyle.searchRootStyle}
                  />
                )}

                <Box sx={segmentStyle.navContainer}>
                  {segmentsTagLists?.result?.length < 0 ? (
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
                    sx={segmentStyle.addNewButonStyle}
                    onClick={() => setOpenAddTag(true)}
                    id="Add new tag"
                  >
                    Add new tag
                  </BasicButton>
                </Box>
              </Stack>
              <Stack mt={1.4}>
                {
                  loading ? (
                    <>
                      {[...Array(segmentsTagLists?.result?.length || 0)].map((_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      ))}
                    </>
                  )
                    :
                    segmentsTagLists?.result?.length > 0 ? (
                      <Table
                        {...(tableData as any)}
                        tableMaxHeight={{ md: "54vh", lg: "56vh", xl: "60vh" }}
                      />
                    ) : (
                      <>
                        {search && segmentsTagLists?.result?.length === 0 && (
                          <Box sx={segmentStyle.emptyContainer}>
                            <EmptyIcon />
                            <Typography sx={segmentStyle.emptyTextStyle}>
                              No Data found
                            </Typography>
                          </Box>
                        )}
                        {!search && segmentsTagLists?.result?.length === 0 && (
                          <Box sx={segmentStyle.emptyContainer}>
                            <Box sx={{ display: "grid", placeItems: "center" }}>
                              <EmptyStateIcon />
                              <Typography
                                sx={{
                                  ...segmentStyle.viewTextStyle,
                                  color: "#02111A",
                                }}
                              >
                                Give a unique tag to customers groups
                              </Typography>
                              <BasicButton
                                variant="contained"
                                //   disableRipple
                                sx={segmentStyle.addNewButonStyle}
                                onClick={() => setOpenAddTag(true)}
                                rootSx={{ width: "fit-content", mt: 2 }}
                              >
                                Add new tag
                              </BasicButton>
                            </Box>
                          </Box>
                        )}
                      </>
                    )}
              </Stack>
            </Grid>
            <Grid item xs={12} sx={segmentStyle.childGrid}>
              {!search && segmentsTagLists?.result?.length === 0 ? (
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
                  perPage={currentPage === 0 ? 1 : 0}
                  value={parseInt(currentPageString, 10).toString()}
                  handleChange={handlePerPageChange}
                  handleChangePage={handlePageChange}
                  paginationBoxStyle={segmentStyle.paginationBoxStyle}
                  sx={{ width: "100%" }}
                  disableVisibleTotalCountSelectMenu={false}
                  pageText={"Page"}
                  pageCount={false}
                  showPaginationBottomCountText={
                    <>
                      <Typography sx={segmentStyle.paginationCountTextStyle}>
                        {`showing ${offset + 1} - ${totalCount < (offset + limit)
                          ? totalCount : offset + limit} of ${totalCount} records`}
                      </Typography>
                    </>
                  }
                />
              )}
            </Grid>
          </Grid>
        </Stack>

        {/** table row popover */}
        <Popover
          open={open}
          anchorEl={anchorElRow}
          onClose={handleClose}
          PaperProps={{
            sx: segmentStyle.popoverStyle,
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
          {MenuOPtion &&
            MenuOPtion?.map((item) => (
              <Typography
                key={item.id}
                sx={{
                  ...segmentStyle.viewTextStyle,
                  color: item?.label === "Delete" ? "#F44F5A" : "#02111A",
                }}
                onClick={() => handleClickMenu(item)}
              >
                {item?.label}
              </Typography>
            ))}
        </Popover>

        {/** Add new tag modal */}
        <DialogBox
          title={tag?.id ? "Edit tag" : "Add tag"}
          titleStyle={segmentStyle.addNewModalTitleStyle}
          open={openAddTag}
          handleClose={() => {
            handleModalClose(), clearAll();
          }}
          titleVariant={"inherit"}
          maxWidth="xs"
          dialogmodalBoxStyle={segmentStyle.dialogmodalBoxSx}
          Body={
            <>
              <Box>
                <InputField
                  variant="filled"
                  label="Tag name"
                  placeholder=""
                  onChange={(e: any) => setHandleChangeTag(e.target.value)}
                  value={tag?.tagName}
                  isLabelRequired={false}
                  helperText=""
                  fullWidth
                  required
                  error={Boolean(error)}
                  errorMessage={error}
                  errorStyle={{ fontSize: "1.4rem" }}
                  isErrorRequired={Boolean(error)}
                  inputStyle={{
                    "& .MuiFilledInput-root.Mui-disabled": {
                      backgroundColor: "#E6EAEB !important",
                    },
                  }}
                  sx={segmentStyle.formInputStyle}
                />
              </Box>
            </>
          }
          footerComponent={
            <>
              <Box sx={segmentStyle.footerContainer}>
                <BasicButton
                  sx={segmentStyle.addNewButonStyle}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleSaveTagModal()}
                >
                  {loading ? (
                    <CircularProgress size={20} sx={{ color: "#ffff" }} />
                  ) : tag?.id ? (
                    "Update"
                  ) : (
                    "Save"
                  )}
                </BasicButton>
              </Box>
            </>
          }
        />
        <DeleteDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title="Delete Confirmation"
          bodyText="Delete customer segments?"
          subText={`''${rowData?.tagName}''` ?? ""}
          cancelButtonText="Cancel"
          saveButtonText="Delete"
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      </Box>

    </>

  );
}
