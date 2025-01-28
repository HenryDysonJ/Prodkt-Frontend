import { brandRoutes } from "@core/routes/brand-app";
import { useSequenceStore } from "@core/store/brand-app";
import OpenBox from "@core/ui/assets/brandAssets/openBox";
import { TopBar } from "@core/ui/components";
import { Sort } from "@core/ui/components/brandSort";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { Table } from "@crayond_dev/ui_table";
import {
  Box,
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
import { useNavigate } from "react-router-dom";

import DeleteIcon from "../../assets/delete";
import EmptyStateIcon from "../../assets/emptyState";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { sequencestyle } from "./style";

export interface Sequencesprop {
  className?: string;
  sx?: SxProps<Theme>;
}
const MenuOPtion = [
  {
    id: 1,
    label: "Download analytics",
  },
  {
    id: 2,
    label: "Delete",
  },
];

export function Sequences(props: Sequencesprop): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;

  const {
    getSequenceData,
    sequenceState,
    setLimit,
    setOffset,
    sethandleSortItem,
    setHandleSearch,
    deleteSequenceData
  } = useSequenceStore()
  const { limit, offset, sequenceData, search, sortValue } = sequenceState

  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [rowsPerPage, setRowsPerPage] = useState<string>(String(limit));
  const [currentPage, setCurrentPage] = useState<number>(offset);
  const [rowData, setRowData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);

  const generateStableID = (item: any) => {
    const idString = `${item?.name}-${item?.category?.name}-${item?.created_at}`;
    const hashCode = idString.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return hashCode % 10000;
  };

  const tableItems = sequenceData?.rows?.map((item: any) => {
    return {
      ...item,
      sequenceName: item?.name ?? '-',
      sequenceID: generateStableID(item) ?? '-',
      createdDateTime:
        `${moment(item?.created_at).format("DD-MM-YYYY, hh:mm A")}`,

      status: [
        {
          label: item?.is_active === true ? 'Active' : "Inactive",
          color:
            (item?.is_active === true && "#008545") ||
            (item?.is_active === false && "#3D0600"),
          bgColor:
            (item?.is_active === true && "#CBF2E0") ||
            (item?.is_active === false && "#FFDAD3"),
        },
      ],
    };
  });

  // This Part helps to pagination
  const totalCount = sequenceData?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorElRow);
  const navigate = useNavigate();

  const handleChangeSort = (label: string) => {
    sethandleSortItem(label);
    if (label === "Recently added") {
      setSortbadge(true);
    } else {
      setSortbadge(true);
    }
  };

  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
    setOffset(0)
  };

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };

  const handleClickMenu = async (item: any) => {
    if (item?.id === 1) {
      console.log("download");
    } else if (item?.id === 2) {
      setOpenAlertDelete(true)
    }
    setAnchorElRow(null);
  };

  const handleDelete = () => {
    deleteSequenceData(rowData?.id)
    setOpenAlertDelete(false)
  }

  const handleCancel = () => {
    setOpenAlertDelete(false)
  }

  const tableData = {
    Header: [
      {
        id: "sequenceName",
        align: "left",
        disablePadding: false,
        label: "Sequence name",
        isSortable: false,
      },
      {
        id: "sequenceID",
        align: "left",
        disablePadding: false,
        label: "Sequence ID",
        isSortable: false,
      },
      {
        id: "createdDateTime",
        align: "left",
        disablePadding: false,
        label: "Created date & time",
        isSortable: false,
      },
      // {
      //   id: "sent",
      //   align: "left",
      //   disablePadding: false,
      //   label: "Sent",
      //   isSortable: false,
      // },
      // {
      //   id: "delivered",
      //   align: "left",
      //   disablePadding: false,
      //   label: "Delivered",
      //   isSortable: false,
      // },
      // {
      //   id: "read",
      //   align: "left",
      //   disablePadding: false,
      //   label: "Read",
      //   isSortable: false,
      // },
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
      { type: ["TEXT"], name: "sequenceName", width: 150 },
      { type: ["TEXT"], name: "sequenceID", width: 150 },
      { type: ["TEXT"], name: "createdDateTime", width: 200 },
      // { type: ["TEXT"], name: "sent", width: 100 },
      // { type: ["TEXT"], name: "delivered", width: 100 },
      // { type: ["TEXT"], name: "read", width: 100 },
      {
        type: ["ACTION"],
        name: "action",
        width: 80,
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
      await getSequenceData(null);
      setisLoading(false);
    };

    fetchData();
  }, [limit, offset, sortValue])

  return (

    <>
      <Box
        sx={[
          {
            ...sequencestyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        className={`${className}`}
        {...rest}
      >
        <TopBar title="Sequences" backBtn={false} />
        <Stack sx={sequencestyle.tableCardStyle}>
          <Grid container sx={sequencestyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={sequencestyle.navContainer}>
                {!search && sequenceData?.rows?.length === 0 ?
                  <Box></Box>
                  :
                  <Search
                    value={search}
                    variant={"isSearchInput"}
                    inputWidth="100%"
                    minExpandWidth="100%"
                    placeHolderText="Search by sequence name"
                    placeHolderSize={14}
                    placeHolderColor="#4E585E"
                    onSelectSearchDataFun={() => false}
                    handleOptionChange={() => false}
                    handleInputOnChange={(e) => setHandleSearch(e?.target?.value)}
                    inputBorderHoverColor="#D9DBDD"
                    inputBorderDefaultColor="#D9DBDD"
                    inputBorderFocusColor="#D9DBDD"
                    rootStyle={sequencestyle.searchRootStyle}
                  />
                }
                {!search && sequenceData?.rows?.length === 0 ? (
                  <Box></Box>
                ) :
                  <Box sx={sequencestyle.navContainer}>
                    <Sort
                      badge={sortBadge}
                      sortItem={sortValue}
                      handleChange={handleChangeSort}
                      sx={{ mr: 2 }}
                    />
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ mr: 2, height: "3rem" }}
                    />
                    <BasicButton
                      variant="contained"
                      sx={sequencestyle.addNewButonStyle}
                      onClick={() => navigate(brandRoutes.createSequence)}
                    >
                      Create new sequence
                    </BasicButton>
                  </Box>
                }
              </Stack>
              <Stack mt={1}>
                {
                  isLoading ? (
                    <>
                      {[...Array(sequenceData?.rows?.length || 0)].map((_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      ))}
                    </>
                  ) :
                    sequenceData?.rows?.length > 0 ? (
                      <Table
                        {...(tableData as any)}
                        tableMaxHeight={{ md: "54vh", lg: "56vh", xl: "60vh" }}
                      />
                    ) : (
                      <>
                        {(search && sequenceData?.rows?.length === 0) ?
                          (
                            <Box sx={sequencestyle.centerItem}>
                              <Box sx={sequencestyle.itemBox}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                  <OpenBox />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={sequencestyle.productInfo}
                                    textAlign={"center"}
                                  >
                                    No Data!
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          )
                          :
                          !search &&
                          sequenceData?.rows?.length === 0 &&
                          <Box sx={sequencestyle.emptyContainer}>
                            <Box sx={{ display: "grid", placeItems: "center" }}>
                              <EmptyStateIcon />
                              <Typography
                                sx={{ ...sequencestyle.viewTextStyle, color: "#02111A" }}
                              >
                                Select templates, schedule and broadcast messages
                              </Typography>
                              <BasicButton
                                variant="contained"
                                //   disableRipple
                                sx={sequencestyle.addNewButonStyle}
                                onClick={() => setOpenAddTag(true)}
                                rootSx={{ width: "fit-content", mt: 2 }}
                              >
                                Create sequence
                              </BasicButton>
                            </Box>
                          </Box>
                        }
                      </>
                    )}
              </Stack>
            </Grid>
            <Grid item xs={12} sx={sequencestyle.childGrid}>
              {!search &&
                sequenceData?.rows?.length === 0 ?
                ""
                :
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
                  paginationBoxStyle={sequencestyle.paginationBoxStyle}
                  sx={{ width: "100%" }}
                  disableVisibleTotalCountSelectMenu={false}
                  pageText={"Page"}
                  pageCount={false}
                  showPaginationBottomCountText={
                    <>
                      <Typography sx={sequencestyle.paginationCountTextStyle}>
                        {`showing ${offset * limit + 1} - ${totalCount < (offset + 1) * limit
                          ? totalCount
                          : (offset + 1) * limit
                          } of ${totalCount} records`}
                      </Typography>
                    </>
                  }
                />
              }
            </Grid>
          </Grid>
        </Stack>

        {/** table row popover */}
        <Popover
          open={open}
          anchorEl={anchorElRow}
          onClose={handleClose}
          PaperProps={{
            sx: sequencestyle.popoverStyle,
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
                  ...sequencestyle.viewTextStyle,
                  color: item?.label === "Delete" ? "#F44F5A" : "#02111A",
                }}
                onClick={() => handleClickMenu(item)}
              >
                {item?.label}
              </Typography>
            ))}
        </Popover>

        <DialogBox
          title={""}
          open={openAlertDelete}
          handleClose={() => setOpenAlertDelete(false)}
          titleVariant={"inherit"}
          maxWidth="md"
          titleStyle={{ display: "none" }}
          closeIcon={false}
          dialogBodyStyle={sequencestyle.mismatchDialog}
          dialogmodalBoxStyle={sequencestyle.mismatchDialogBodySx}
          Body={
            <>
              <Stack sx={sequencestyle.mismatchBodyContainer}>
                <Box sx={{ ...sequencestyle.warnigIconStle, backgroundColor: '#FFD7DA' }}>
                  <DeleteIcon />
                </Box>
                <Typography sx={sequencestyle.breakdownTitle}>
                  Delete sequences?
                </Typography>
                <Typography
                  textAlign={"center"}
                  mt={"1rem"}
                  sx={sequencestyle.stockInKeyText}
                >
                  Are you sure want to delete " {rowData?.name} "
                </Typography>
                <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                  <BasicButton
                    sx={{
                      ...sequencestyle.missMatchButtonStyle,
                      borderColor: "custom.surfaceBlue",
                    }}
                    variant="outlined"
                    onClick={handleCancel}
                  >
                    Cancel
                  </BasicButton>

                  <BasicButton
                    sx={{
                      ...sequencestyle.missMatchButtonStyle,
                      ":hover": {
                        backgroundColor: "custom.surfaceLightBlue",
                      },
                      backgroundColor: "custom.surfaceLightBlue",
                    }}
                    variant="contained"
                    rootSx={{ width: "100%" }}
                    onClick={handleDelete}
                  >
                    Delete
                  </BasicButton>
                </Stack>
              </Stack>
            </>
          }
        />
      </Box>
    </>

  );
}
