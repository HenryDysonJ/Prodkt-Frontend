import { brandRoutes } from "@core/routes";
import { useBroadCastMessage } from "@core/store/brand-app";
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
import { broadcastMsgStyle } from "./style";
import { ViewModal } from "./viewModal";

interface ListingBroadcastProp {
  className?: string;
  sx?: SxProps<Theme>;
}

export function ListingBroadcast(props: ListingBroadcastProp): JSX.Element {
  const {

    setOffset,
    setLimit,
    setHandleSearch,
    sethandleSortItem,
    broadCasteState,
    getBroadcastList,
    getTemplateView,
    deleterowData,
    setEditBroadcastData,
    clearAll,

  } = useBroadCastMessage();

  const navigate = useNavigate();

  const [anchorElRow, setAnchorElRow] = useState<HTMLButtonElement | null>(null);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(broadCasteState?.offset);
  const [openViewDialog, setOpenViewDialog] = useState(false)
  const [rowData, setRowData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  // This Part helps to pagination
  const totalCount = broadCasteState?.broadCastList?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(broadCasteState?.limit), 10));
  const currentPageString = broadCasteState?.limit?.toString();

  const open = Boolean(anchorElRow);

  const MenuOption = [

    ...(rowData?.status[0]?.label === 'Sent' || rowData?.status[0]?.label === 'Scheduled'
      ?
      [{
        id: 1,
        label: "View",
      }] : []
    ),
    ...(rowData?.status[0]?.label === 'Sent' ?
      [{
        id: 2,
        label: "Download analytics ",
      }] : []),
    ...(rowData?.status[0]?.label === 'Draft' || rowData?.status[0]?.label === 'Scheduled' ?
      [{
        id: 3,
        label: "Edit",
      }] : []),
    ...(rowData?.status[0]?.label === 'Draft' || rowData?.status[0]?.label === 'Scheduled' ?
      [{
        id: 4,
        label: "Delete",
        color: "#DF3813",
      }] : []),
  ];

  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
  };

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);
  };

  const handleChangeSort = (label: string) => {
    if (label?.length > 0) {
      sethandleSortItem(label);
      setSortbadge(true);
    }
  };

  const handleCreateBroadcast = () => {
    clearAll()
    navigate(brandRoutes.createBroast)
  };


  const handleDelete = () => {
    deleterowData(rowData?.id)
    setOpenAlert(false);
  }

  const handleCancel = () => {
    setOpenAlert(false);
  }

  const TreeTableData = (
    broadCasteState?.limit > 0
      ? broadCasteState?.broadCastList?.rows?.slice(broadCasteState?.offset * broadCasteState?.limit, broadCasteState?.offset * broadCasteState?.limit + broadCasteState?.limit)
      : broadCasteState?.broadCastList?.rows
  )?.map((item: any) => {
    return {
      ...item,
      statusId: item?.status,
      broadcastName: item?.name,
      broadcastType: item?.is_immediate === true ? 'Immediate' : 'Scheduled',
      broadcastDateTime:
        `${moment(item?.schedule_state_date).format("DD-MM-YYYY")}, ${moment(item?.schedule_start_time, "h:mm A").format("h:mm A")}`,
      status: [
        {
          label: item?.status?.status,
          color:
            (item?.status?.id === 10 && "#008545") ||
            (item?.status?.id === 2 && "#3D0600") ||
            (item?.status?.id === 5 && "#D17800") ||
            (item?.status?.id === 9 && "#4E585E"),
          bgColor:
            (item?.status?.id === 10 && "#CBF2E0") ||
            (item?.status?.id === 2 && "#FFDAD3") ||
            (item?.status?.id === 5 && "#FFDDB8") ||
            (item?.status?.id === 9 && "#E6E8E9"),
        },
      ],
    };
  });

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
        id: "broadcastType",
        align: "left",
        disablePadding: false,
        label: "Broadcast type",
        isSortable: false,
      },
      {
        id: "broadcastDateTime",
        align: "left",
        disablePadding: false,
        label: "Broadcast date & time",
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
      // {
      //   id: "totalOptOut",
      //   align: "left",
      //   disablePadding: false,
      //   label: "Total opt outs",
      //   isSortable: false,
      // },
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
      { type: ["TEXT"], name: "broadcastName", width: 100 },
      { type: ["TEXT"], name: "broadcastType", width: 100 },
      { type: ["TEXT"], name: "broadcastDateTime", width: 140 },
      // { type: ["TEXT"], name: "Sent", width: 60 },
      // { type: ["TEXT"], name: "delivered", width: 60 },
      // { type: ["TEXT"], name: "read", width: 60 },
      // { type: ["TEXT"], name: "totalOptOut", width: 100 },
      { type: ["LABEL"], name: "status", width: 100 },

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


  const handleClickMenu = async (item: any) => {
    if (item.id == 1) {
      getTemplateView(rowData)
      setOpenViewDialog(true)
    } else if (item?.id == 2) {
    } else if (item?.id == 3) {
      navigate(brandRoutes.createBroast);
      setEditBroadcastData(rowData);
    } else if (item?.id == 4) {
      setOpenAlert(true)
    }

    setAnchorElRow(null);
  };

  const useDebounce = (value: any, delay: any) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearch = useDebounce(broadCasteState?.search, 500);
  const debouncedSortItem = useDebounce(broadCasteState?.sortItem, 500);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      await getBroadcastList();
      setisLoading(false);
    };

    fetchData();
  }, [debouncedSearch, debouncedSortItem]);

  return (
    <>
      <Box sx={broadcastMsgStyle.rootSx}>
        <TopBar title="Broadcast messages" backBtn={false} />
        <Stack sx={broadcastMsgStyle.tableCardStyle}>
          <Grid container sx={broadcastMsgStyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={broadcastMsgStyle.navContainer}>
                {!broadCasteState?.search && broadCasteState?.broadCastList?.count === 0 &&
                  (broadCasteState?.broadCastList?.count === 0) ? (
                  <Box></Box>
                ) :
                  <Search
                    value={broadCasteState?.search}
                    variant={"isSearchInput"}
                    inputWidth="100%"
                    minExpandWidth="100%"
                    placeHolderText="Search by template name"
                    placeHolderSize={14}
                    placeHolderColor="#4E585E"
                    onSelectSearchDataFun={() => false}
                    handleOptionChange={() => false}
                    handleInputOnChange={(e) => setHandleSearch(e?.target?.value)}
                    inputBorderHoverColor="#D9DBDD"
                    inputBorderDefaultColor="#D9DBDD"
                    inputBorderFocusColor="#D9DBDD"
                    rootStyle={broadcastMsgStyle.searchRootStyle}
                  />
                }
                <Box sx={broadcastMsgStyle.navContainer}>
                  <Sort
                    badge={sortBadge}
                    sortItem={broadCasteState?.sortItem}
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
                    //   disableRipple
                    sx={broadcastMsgStyle.addNewButonStyle}
                    onClick={() => handleCreateBroadcast()}
                  >
                    Create new broadcast
                  </BasicButton>
                </Box>
              </Stack>
              <Stack>
                {
                  isLoading ? (
                    <>
                      {[...Array(broadCasteState?.broadCastList?.rows?.length || 0)].map((_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      ))}
                    </>
                  )
                    :
                    broadCasteState?.broadCastList?.count > 0 ? (
                      <Table
                        {...(tableData as any)}
                        tableMaxHeight={{ md: "54vh", lg: "56vh", xl: "60vh" }}
                        sx={{ marginTop: 2 }}
                      />
                    ) :
                      <>
                        {(broadCasteState?.search && broadCasteState?.broadCastList?.count === 0)
                          || (broadCasteState?.broadCastList?.count === 0) ?
                          (
                            <Box sx={broadcastMsgStyle.centerItem}>
                              <Box sx={broadcastMsgStyle.itemBox}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                  <OpenBox />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={broadcastMsgStyle.productInfo}
                                    textAlign={"center"}
                                  >
                                    No Data!
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          )
                          :
                          (
                            <Box sx={broadcastMsgStyle.emptyContainer}>
                              <Box sx={{ display: "grid", placeItems: "center" }}>
                                <EmptyStateIcon />
                                <Typography
                                  sx={{
                                    ...broadcastMsgStyle.viewTextStyle,
                                    color: "#02111A",
                                  }}
                                >
                                  Select templates, schedule and broadcast messages
                                </Typography>
                                <BasicButton
                                  variant="contained"
                                  sx={broadcastMsgStyle.addNewButonStyle}
                                  onClick={() => handleCreateBroadcast()}
                                  rootSx={{ width: "fit-content", mt: 2 }}
                                >
                                  Create broadcast
                                </BasicButton>
                              </Box>
                            </Box>
                          )
                        }
                      </>
                }
              </Stack>
            </Grid>
            <Grid item xs={12} sx={broadcastMsgStyle.childGrid}>
              {!(broadCasteState?.search && broadCasteState?.broadCastList.count === 0)
                && (broadCasteState?.broadCastList?.count === 0) ?
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
                  perPage={broadCasteState?.offset}
                  value={parseInt(currentPageString, 10).toString()}
                  handleChange={handlePerPageChange}
                  handleChangePage={handlePageChange}
                  paginationBoxStyle={broadcastMsgStyle.paginationBoxStyle}
                  sx={{ width: "100%" }}
                  disableVisibleTotalCountSelectMenu={false}
                  pageText={"Page"}
                  pageCount={false}
                  showPaginationBottomCountText={
                    <>
                      <Typography sx={broadcastMsgStyle.paginationCountTextStyle}>
                        {" "}
                        {`showing ${broadCasteState?.offset * broadCasteState?.limit + 1} - ${totalCount < (broadCasteState?.offset + 1) * broadCasteState?.limit
                          ? totalCount
                          : (broadCasteState?.offset + 1) * broadCasteState?.limit
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
          onClose={() => setAnchorElRow(null)}
          PaperProps={{
            sx: broadcastMsgStyle.popoverStyle,
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
          {MenuOption && MenuOption.map((item) => (
            <Typography
              key={item.id}
              sx={{
                ...broadcastMsgStyle.viewTextStyle,
                color: item?.label === "Delete" ? "#F44F5A" : "#02111A",
              }}
              onClick={() => handleClickMenu(item)}
            >
              {item?.label}
            </Typography>
          ))}
        </Popover>


        <DialogBox
          title={"View broadcast message"}
          titleStyle={broadcastMsgStyle.addNewModalTitleStyle}
          open={openViewDialog}
          handleClose={() => setOpenViewDialog(false)}
          titleVariant={"inherit"}
          maxWidth="md"
          dialogmodalBoxStyle={broadcastMsgStyle.dialogmodal}
          dialogBodyStyle={broadcastMsgStyle.dialogBodyStyle}
          Body={
            <>
              <ViewModal />
            </>
          }
        />

        <DialogBox
          title={""}
          open={openAlert}
          handleClose={() => setOpenAlert(false)}
          titleVariant={"inherit"}
          maxWidth="sm"
          titleStyle={{ display: "none" }}
          closeIcon={false}
          dialogBodyStyle={broadcastMsgStyle.mismatchDialog}
          dialogmodalBoxStyle={broadcastMsgStyle.mismatchDialogBodySx}
          Body={
            <>
              <Stack sx={broadcastMsgStyle.mismatchBodyContainer}>
                <Box sx={{ ...broadcastMsgStyle.warnigIconStle, backgroundColor: '#FFD7DA' }}>
                  <DeleteIcon />
                </Box>
                <Typography sx={broadcastMsgStyle.breakdownTitle}>
                  Delete {rowData?.name}?
                </Typography>
                <Typography
                  textAlign={"center"}
                  mt={"1rem"}
                  sx={broadcastMsgStyle.stockInKeyText}
                >
                  Are you sure want to delete Broadcast message, make sure to deleting
                </Typography>
                <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                  <BasicButton
                    sx={{
                      ...broadcastMsgStyle.missMatchButtonStyle,
                      borderColor: "custom.surfaceBlue",
                    }}
                    variant="outlined"
                    onClick={handleCancel}
                  >
                    Cancel
                  </BasicButton>

                  <BasicButton
                    sx={{
                      ...broadcastMsgStyle.missMatchButtonStyle,
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
