import DownloadIcon from "@assets/brandAssets/downloadIcon";
import FilterIcon from "@assets/brandAssets/filter";
import OpenBox from "@assets/brandAssets/openBox";
import DownPagenationArrow from "@assets/brandAssets/paginationDownArrow";
import LeftPaginationArrow from "@assets/brandAssets/paginationLeftArrow";
import RightPaginationArrow from "@assets/brandAssets/paginationRightArrow";
import Dots from "@assets/brandAssets/threedots";
import UploadIcon from "@assets/brandAssets/uploadIcon";
import { CustomTooltip } from "@atoms/customTooltip";
import { Sort } from "@components/brandSort";
import TopBar from "@components/brandTopBar";
import { useProductStore } from "@core/store";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { Table, TableProps } from "@crayond_dev/ui_table";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Backdrop,
  Badge,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Popover,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AddProductStyle } from "../addProduct/style";
import { FilterModal } from "./filterModal";
import { productListStyle } from "./style";
import { FileUpload } from "@atoms/fileUpload";
import { ErrorDialog } from "@atoms/importErrorDialog";

type fileItem = {
  id?: number | string;
  file: File | any;
  loading?: number;
  uploadProgress: number;
  isPaused?: boolean;
};

export const ProductList = () => {
  const {
    getProductList,
    productList,
    setHandleSearch,
    searchValue,
    sortItem,
    updateproductStatus,
    limit,
    offset,
    setEditProductForm,
    getproductView,
    setViewproductForm,
    setClearAll,
    bulkUpload,
    handleOffsetLimitData,
    applyFilterData,
    selectedOptions,
    initializeFilterData,
    setFilterDataIntoModal,
    loading
  } = useProductStore();

  const [openUpload, setOpenUpload] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>();
  const [filterBadge, setFilterBadge] = useState<boolean>(false);
  const [uploadFiles, setuploadFiles] = useState<any>('');
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [bulkData, setBulkData] = useState('')
  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const openPop = Boolean(anchorElRow);

  const TreeTableData = productList?.data?.rows?.map((item: any) => {
    return {
      ...item,
      inquiryDateTime: item?.product_name,
      inquiryTitle: item?.category?.name,
      inquiryDescription: item?.product_code,
      status: [
        {
          label: item?.status?.status,
          color:
            (item?.status?.id === 1 && "#008545") ||
            (item?.status?.id === 2 && "#3D0600") ||
            (item?.status?.id === 5 && "#D17800"),
          bgColor:
            (item?.status?.id === 1 && "#CBF2E0") ||
            (item?.status?.id === 2 && "#FFDAD3") ||
            (item?.status?.id === 5 && "#FFDDB8"),
        },
      ],
    };
  });
  const tableData: TableProps = {
    Header: [
      {
        id: "add-on",
        align: "left",
        disablePadding: false,
        label: "Product name",
        isSortable: false,
      },
      {
        id: "item",
        align: "left",
        disablePadding: false,
        label: "Product category",
        isSortable: false,
      },
      {
        id: "created-on",
        align: "left",
        disablePadding: false,
        label: "Product code",
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
      { type: ["TEXT"], name: "inquiryDateTime", width: 130 },
      { type: ["TEXT"], name: "inquiryTitle", width: 150 },
      { type: ["TEXT"], name: "inquiryDescription", width: 250 },
      { type: ["LABEL"], name: "status", width: 80 },
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
      paddingBottom: "2px",
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

  const handlePageChange = (e: any, page: any) => {
    handleOffsetLimitData("offset", page - 1);

  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    handleOffsetLimitData("limit", perPage);
  };

  const totalCount = productList?.data?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const handleMoreFunction = (
    id: string | number,
    rowData: object,
    event: any
  ) => {
    setAnchorElRow(event.currentTarget);
    setRowData(rowData);
  };

  const handleClosePopover = () => {
    setAnchorElRow(null);
  };

  const handleClickMenu = async (item: any) => {
    if (item?.id == 1) {
      const res = await getproductView(rowData);
      if (res?.data?.status === "200") {
        await setViewproductForm(res?.data?.data);
        navigate("/add-product");
      }
    } else if (item?.id == 2) {
      const res = await getproductView(rowData);
      if (res?.data?.status === "200") {
        setEditProductForm(res?.data?.data);
        navigate("/add-product", { state: rowData });
      }
    } else if (item?.id == 3) {
      updateproductStatus(
        rowData?.id,
        rowData?.status[0]?.label === "Active" ? 2 : 1
      );
    }
    setAnchorElRow(null);
  };
  const handleChangeSort = (label: string) => {
    handleOffsetLimitData("sortItem", label);

    if (label?.length > 0) {
      setSortbadge(true);
    }
  };

  const navigate = useNavigate();

  const redirecToAddProduct = () => {
    navigate("/add-product");
    setClearAll();
  };

  const MenuOption = [
    {
      id: 1,
      label: "View",
    },
    {
      id: 2,
      label: "Edit",
    },
    {
      id: 3,
      label:
        rowData?.status[0]?.label === "Inactive"
          ? "Active"
          : rowData?.status[0]?.label === "Active"
            ? "Inactive"
            : rowData?.status[0]?.label === "draft"
              ? "Inactive"
              : "Active",
      color: rowData?.status[0]?.label === "Inactive" ? "#008545" : "#DF3813",
    },
  ];

  const onFileChange = async (data: any) => {
    setuploadFiles(data?.target?.files[0]);
  };
// HANDLE SAVE FILE UPLOAD
  const handleUploadSave = async () => {
    setIsLoadingBtn(true);

    const response: any = await bulkUpload(uploadFiles, null);
    if (response?.status === 200) {
      setOpenUpload(false);
      if (response?.data?.data?.url?.length > 0) {
        setOpenDialog(true);
        setBulkData(response.data.data.url ?? '');
      }
    }
    setIsLoadingBtn(false);
    setuploadFiles(null);

  }


  // To apply filter for offer data
  const handleApplyFilter = () => {
    // debugger
    setOpenFilter(false);
    if (
      selectedOptions?.statuses?.length > 0 ||
      selectedOptions?.categoryType?.label?.length > 0
    ) {
      setFilterBadge(true);
    }
    applyFilterData();
  };

  // To reset the offer filter modal
  const handleResetFilter = () => {
    // False badge filter dot
    setFilterBadge(false);
    // Close filter modal
    setOpenFilter(false);
    // Initialize badge filter data
    initializeFilterData();
  };

  const handleOpenFilter = () => {
    setFilterDataIntoModal()
    // Open filter modal
    setOpenFilter(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

// INITIAL CALL GET PRODUCTLIST
  useEffect(() => {
    getProductList(0, 5, "", "", {}, []);
  }, [])

  return (
    <>
      <TopBar title="Products" titleStyle={{ fontFamily: "Excon" }}></TopBar>
      <Box sx={productListStyle.rootSx}>
        <Box sx={productListStyle.mainBox}>
          {/* <Box> */}
          <Grid container >
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
                  {!searchValue && productList?.data?.count === 0 &&
                    (!filterBadge && productList?.data?.count === 0) ? (
                    <Box></Box>
                  ) :
                    <Search
                      variant={"isSearchInput"}
                      rootStyle={{
                        width: "250px",
                        borderColor: "1px solid #D9DBDD",
                      }}
                      inputWidth="100%"
                      minExpandWidth="100%"
                      placeHolderText="Search by product name"
                      handleInputOnChange={(e) => setHandleSearch(e?.target?.value)}
                      onSelectSearchDataFun={() => false}
                      handleOptionChange={() => false}
                      inputBorderHoverColor="#D9DBDD"
                      inputBorderDefaultColor="#D9DBDD"
                      inputBorderFocusColor="#D9DBDD"
                      value={searchValue}
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
                  sx={productListStyle.gridbutton}
                >
                  {!searchValue &&
                    productList?.data?.count === 0 &&
                    !filterBadge ? (
                    <Box></Box>
                  ) :
                    <CustomTooltip title={"Sort"} placement="bottom">
                      <BasicButton sx={productListStyle.buttonItemContainer}>
                        <Sort
                          badge={sortBadge}
                          sortItem={sortItem}
                          handleChange={handleChangeSort}
                        />
                      </BasicButton>
                    </CustomTooltip>
                  }
                  {!searchValue &&
                    productList?.data?.count === 0 &&
                    !filterBadge
                    ? (
                      <Box></Box>
                    ) :
                    <>
                      <CustomTooltip title={"Filter"} placement="bottom">
                        <BasicButton
                          sx={{
                            ...productListStyle.buttonItemContainer,
                            borderColor: "custom.outline",
                          }}
                          onClick={() => handleOpenFilter()}
                        >
                          <Badge
                            sx={productListStyle.badgeSx}
                            color="error"
                            variant={filterBadge ? "dot" : "standard"}
                          >
                            <FilterIcon />
                          </Badge>
                        </BasicButton>
                      </CustomTooltip>
                      <Divider
                        orientation={"vertical"}
                        sx={productListStyle.divider}
                      />
                    </>
                  }
                  <Button
                    variant={"outlined"}
                    sx={productListStyle.uploadBtn}
                    onClick={() => setOpenUpload(true)}
                  >
                    Bulk upload
                  </Button>
                  {

                    !filterBadge &&
                      !searchValue &&
                      productList?.data?.count === 0
                      ? (
                        <Box></Box>
                      )
                      : <Button
                        variant={"contained"}
                        sx={productListStyle.addNewButton}
                        onClick={redirecToAddProduct}
                      >
                        Add product
                      </Button>
                  }

                </Grid>
              </Grid>
              {
                loading ? (
                  <>
                    {[...Array(productList?.data?.rows?.length || 0)].map((_, index) => (
                      <Skeleton key={index} width="100%" height={70} />
                    ))}
                  </>
                )
                  :
                  productList?.data?.count > 0 ? (
                    <Table {...tableData} tableMaxHeight="58vh" />
                  ) : (
                    <>
                      {(searchValue && productList?.data?.count === 0)
                        || (filterBadge && productList?.data?.count === 0) ?
                        (
                          <Box sx={productListStyle.centerItem}>
                            <Box sx={productListStyle.itemBox}>
                              <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <OpenBox />
                              </Box>
                              <Box>
                                <Typography
                                  sx={productListStyle.productInfo}
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
                        !searchValue &&
                        productList?.data?.count === 0 &&
                        (
                          <Box sx={productListStyle.centerItem}>
                            <Box sx={productListStyle.itemBox}>
                              <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <OpenBox />
                              </Box>
                              <Box>
                                <Typography
                                  sx={productListStyle.productInfo}
                                  textAlign={"center"}
                                >
                                  Add products information in a detailed manner for
                                </Typography>
                                <Box display={"flex"} alignItems={"center"} mt={2}>
                                  <FiberManualRecordIcon
                                    sx={{ height: "8px", color: "#4E585E" }}
                                  />
                                  <Typography
                                    sx={productListStyle.customerInfo}
                                    textAlign={"left"}
                                  >
                                    Customers can get to know about their products
                                  </Typography>
                                </Box>
                                <Box display={"flex"} alignItems={"center"} mt={0.5}>
                                  <Typography
                                    sx={productListStyle.customerInfo}
                                    textAlign={"left"}
                                  >
                                    <FiberManualRecordIcon
                                      sx={{ height: "8px", color: "#4E585E" }}
                                    />
                                    Another lorem ipsum text stating the benefit of adding
                                    product
                                  </Typography>
                                </Box>
                              </Box>
                              <Box display={"flex"} justifyContent={"center"}>
                                <Button
                                  variant="contained"
                                  sx={productListStyle.addNewSx}
                                  onClick={redirecToAddProduct}
                                >
                                  Add new product
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        )
                      }
                    </>
                  )}

            </Grid>
            <Grid item xs={12}>
              {/* Table pagination */}
              {!(searchValue && productList?.data?.count === 0)
                && (!filterBadge && productList?.data?.count === 0) ?
                ""
                :
                <Box sx={productListStyle.pageSx}>
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
                    paginationBoxStyle={productListStyle.paginationBoxStyle}
                    pageCount={false}
                    pageText={"Page"}
                    showPaginationBottomCountText={
                      <>
                        <Typography sx={productListStyle.paginationCountTextStyle}>
                          {`showing ${offset + 1} - ${offset + limit} of ${totalCount} records`}
                        </Typography>
                      </>
                    }
                  />

                </Box>
              }
            </Grid>
          </Grid>
        </Box>
        <DialogBox
          open={openFilter}
          handleClose={() => setOpenFilter(false)}
          title={"Filter"}
          titleStyle={productListStyle.titleStyleDialog}
          maxWidth="sm"
          dialogmodalBoxStyle={productListStyle.dialogmodal}
          dialogBodyStyle={productListStyle.dialogBodyStyle}
          Body={
            <>
              <FilterModal />
            </>
          }
          footerComponent={
            <>
              <Button
                variant="outlined"
                sx={productListStyle.resetButtonSx}
                onClick={() => handleResetFilter()}
              >
                Reset
              </Button>
              <Button
                sx={productListStyle.applyFilterButtonSx}
                onClick={() => handleApplyFilter()}
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
            sx: productListStyle.popoverStyle,
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
                  ...productListStyle.viewTextStyle,
                  color:
                    item?.label === "Inactive"
                      ? "#F44F5A"
                      : item?.label === "Active"
                        ? "#008545"
                        : "#02111A",
                }}
                onClick={() => handleClickMenu(item)}
              >
                {item?.label}
              </Typography>
            ))}
        </Popover>

        <DialogBox
          open={openUpload}
          handleClose={() => setOpenUpload(false)}
          title={"Bulk upload products"}
          titleStyle={AddProductStyle.titleStyleDialog}
          maxWidth="sm"
          dialogmodalBoxStyle={productListStyle.dialogmodal}
          dialogBodyStyle={AddProductStyle.dialogBodyStyle}
          Body={
            <>
              <Typography sx={AddProductStyle.statusSx}>
              Download our template and fill it out with product details and upload the file
              </Typography>
              <Button
                sx={AddProductStyle.downloadBtn}
                startIcon={<DownloadIcon />}
                variant="contained"
                href="https://prodkt-dev.objectstore.e2enetworks.net/bulk_produck_upload_template.xlsx"
              >
                Download template
              </Button>
              <FileUpload
                placeholder="Drag and drop your file here"
                files={uploadFiles}
                uploadButtonText={"Upload"}
                handleFileChange={(file) => onFileChange(file)}
                handleDeleteFile={() => setuploadFiles(null)}
                acceptedFileTypes={{ accept: '.xlsx' }}
              />
            </>
          }
          footerComponent={
            <>
              <Button
                sx={AddProductStyle.applyFilterButtonSx}
                onClick={handleUploadSave}
                variant="contained"
                disabled={uploadFiles?.length === 0 ? true : isLoadingBtn}
                startIcon={isLoadingBtn && <CircularProgress size={20} color="inherit" />}
              >
                Save
              </Button>
            </>
          }
        />

        <ErrorDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title=""
          bodyText="Error found while importing"
          subText={"Some columns in the uploaded file have mismatching data. Please download the error file, correct the details, and proceed accordingly."}
          cancelButtonText="Cancel"
          saveButtonText="Download file"
          onCancel={handleCancel}
          // onDelete={handleDowmload}
          hrefSave={bulkData}
          subtextStyle={{ fontWeight: 600, color: "#4E585E", width: '380px' }}
          btnWidth={'18rem'}

        />
      </Box >
    </>
  );
};
