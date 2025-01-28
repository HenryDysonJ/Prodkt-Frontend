import { brandRoutes } from "@core/routes";
import { useCustomerSegment, useManageCustomers } from "@core/store/brand-app";
import { ErrorDialog, FileUpload } from "@core/ui/atoms";
import { Sort } from "@core/ui/components/brandSort";
import TopBar from "@core/ui/components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Table } from "@crayond_dev/ui_table";
import {
  Box,
  CircularProgress,
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

import DownloadBtnIcon from "../../assets/downloadBtnIcon";
import { EmptyIcon } from "../../assets/emptyIcon";
import DownPagenationArrow from "../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { manageCustomerStyle } from "./style";
export interface ManageCustomerPros {
  className?: string;
  sx?: SxProps<Theme>;
}
interface Tags {
  tagitem: any;
  handleClickTag: () => void;
}
const TagComponent = (props: Tags) => {
  const { tagitem, handleClickTag } = props;

  return (
    <Stack direction={"row"} columnGap={"0.6rem"}>
      {tagitem &&
        tagitem?.map((item: any, i: number) => (
          item?.segment?.tag_name?.length > 0 && (
            <Typography key={i} sx={manageCustomerStyle.tagStyle}>
              {item?.segment?.tag_name}
            </Typography>
          )
        ))}
      <Typography
        sx={{ ...manageCustomerStyle.tagStyle, cursor: "pointer" }}
        onClick={handleClickTag}
      >
        Add tag
      </Typography>
    </Stack>
  );
};

export function ManageCustomer(props: ManageCustomerPros): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;
  const { segmentsTagLists, getSegmentsList } = useCustomerSegment();
  const {
    limit,
    offset,
    search,
    loading,
    sortItem,
    segments,
    customersList,
    handleOffsetLimitData,
    setHandleSearch,
    setHandleSelectTag,
    updateCustomersTagList,
    getCustomersList,
    uploadCustomersList,
  } = useManageCustomers();

  const navigate = useNavigate();
  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const [openUpload, setOpenUpload] = useState(false);
  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [sortBadge, setSortbadge] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>();
  const [customer, setCustomer] = useState<any>();
  const [tagError, setError] = useState({ tags: "" });
  const [uploadFiles, setuploadFiles] = useState<any>();
  const [openDialog, setOpenDialog] = useState(false);
  const [bulkData, setBulkData] = useState('')

  // This Part helps to pagination
  const totalCount = customersList?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const open = Boolean(anchorElRow);

  const handleChangeSort = (label: string) => {
    handleOffsetLimitData("sortItem", label);
    if (label?.length > 0) {
      setSortbadge(true);
    }
  };


  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setRowData(rowData);
    setAnchorElRow(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };
  const handleClickMenu = () => {
    navigate(brandRoutes.viewCustomer, {
      state: { data: { id: rowData?.id, customerName: rowData?.customerName } },
    });
    setAnchorElRow(null);
  };

  const handlePageChange = (e: any, page: any) => {
    handleOffsetLimitData("offset", page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    handleOffsetLimitData("limit", perPage);
  };

  const handleSaveTag = async () => {
    const res: any = await updateCustomersTagList(customer?.id);
    if (res === 200) {
      setError({ tags: "" });
      setOpenAddTag(false);
    }

  };

  const handleUploadFile = (e: any) => {
    setuploadFiles(e?.target?.files[0]);
  };

  const handleSaveUpload = async () => {
    const response: any = await uploadCustomersList(uploadFiles);
    if (response?.status === 200) {
      setOpenUpload(false);
      if (response?.data?.data?.url?.length > 0) {
        setOpenDialog(true);
        setBulkData(response.data.data.url ?? '');
      }
    } else if (response?.status === 400) {
      // setOpenUpload(false);
    }

    setuploadFiles(null);

  };

  const tagOptions =
    segmentsTagLists?.result?.map((item) => ({
      label: item.tag_name,
      value: item?.id,
    })) || [];

  const tableItems = customersList?.rows?.map((item) => {
    const tagopt: any = item?.customer_segments?.map((item) => ({
      label: item?.segment?.tag_name,
      value: item?.segment?.id,
    }));
    return {
      id: item?.id,
      customerName: `${item?.first_name} ${item?.last_name}`,
      phoneNumber: item?.mobile_no,
      location: item?.region,
      dateOfPurchase: moment(item?.created_at).format("DD-MM-YYYY"),
      productsPurchased:
        item?.customer_products?.length > 0
          ? item?.customer_products?.map(
            (list) => list?.product?.product_name + ", "
          )
          : "--",
      tag: (
        <TagComponent
          tagitem={item?.customer_segments}
          handleClickTag={() => {
            setHandleSelectTag(tagopt), setCustomer(item), setOpenAddTag(true);
          }}
        />
      ),
      action: "action",
    };
  });

  const tableData = {
    Header: [
      {
        id: "customerName",
        align: "left",
        disablePadding: false,
        label: "Customer name",
        isSortable: false,
      },
      {
        id: "phoneNumber",
        align: "left",
        disablePadding: false,
        label: "Phone number",
        isSortable: false,
      },
      {
        id: "location",
        align: "left",
        disablePadding: false,
        label: "Location",
        isSortable: false,
      },
      {
        id: "dateOfPurchase",
        align: "left",
        disablePadding: false,
        label: "Date of purchase",
        isSortable: false,
      },
      {
        id: "productsPurchased",
        align: "left",
        disablePadding: false,
        label: "Products purchased",
        isSortable: false,
      },
      {
        id: "tag",
        align: "left",
        disablePadding: false,
        label: "Tag",
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
      { type: ["TEXT"], name: "customerName", width: 130 },
      { type: ["TEXT"], name: "phoneNumber", width: 120 },
      { type: ["TEXT"], name: "location", width: 120 },
      { type: ["TEXT"], name: "dateOfPurchase", width: 120 },
      { type: ["TEXT"], name: "productsPurchased", width: 150 },
      { type: ["CUSTOM"], name: "tag", width: 200 },
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

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleDowmload = () => { }

  useEffect(() => {
    getSegmentsList('', '', 0, 5);
  }, [openAddTag]);


  useEffect(() => {
    getCustomersList('', '', 0, 5)
  }, [])

  return (
    <>
      <Box
        sx={[
          {
            ...manageCustomerStyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        className={`${className}`}
        {...rest}
      >
        <TopBar title="Manage customers" backBtn={false} />
        <Stack sx={manageCustomerStyle.tableCardStyle}>
          <Grid container sx={manageCustomerStyle.gridContainer}>
            <Grid item xs={12}>
              <Stack sx={manageCustomerStyle.navContainer}>
                <Search
                  value={search}
                  variant={"isSearchInput"}
                  inputWidth="100%"
                  minExpandWidth="100%"
                  placeHolderText="Search by customer name"
                  placeHolderSize={14}
                  placeHolderColor="#4E585E"
                  onSelectSearchDataFun={() => false}
                  handleOptionChange={() => false}
                  handleInputOnChange={(e) => setHandleSearch(e.target.value)}
                  inputBorderHoverColor="#D9DBDD"
                  inputBorderDefaultColor="#D9DBDD"
                  inputBorderFocusColor="#D9DBDD"
                  rootStyle={manageCustomerStyle.searchRootStyle}
                />
                <Box sx={manageCustomerStyle.navContainer}>
                  <Sort
                    badge={sortBadge}
                    sortItem={sortItem}
                    handleChange={handleChangeSort}
                    sx={{ marginRight: 2 }}
                  />

                  <BasicButton
                    variant="contained"
                    sx={manageCustomerStyle.addNewButonStyle}
                    onClick={() => setOpenUpload(true)}
                    component="span"
                  >
                    Bulk import customers
                  </BasicButton>
                </Box>
              </Stack>
              <Stack mt={1.4}>
                {
                  loading ? (
                    <>
                      {[...Array(tableData?.dataList?.length || 0)].map((_, index) => (
                        <Skeleton key={index} width="100%" height={70} />
                      ))}
                    </>
                  )
                    :

                    tableData?.dataList?.length !== 0 ? (
                      <Table
                        {...(tableData as any)}
                        tableMaxHeight={{ md: "54vh", lg: "56vh", xl: "60vh" }}
                      />
                    ) : (
                      <Box sx={manageCustomerStyle.emptyContainer}>
                        <EmptyIcon />
                        <Typography sx={manageCustomerStyle.emptyTextStyle}>
                          No Data found
                        </Typography>
                      </Box>
                    )}
              </Stack>
            </Grid>
            <Grid item xs={12} sx={manageCustomerStyle.childGrid}>
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
                paginationBoxStyle={manageCustomerStyle.paginationBoxStyle}
                sx={{ width: "100%" }}
                disableVisibleTotalCountSelectMenu={false}
                pageText={"Page"}
                pageCount={false}
                showPaginationBottomCountText={
                  <>
                    <Typography sx={manageCustomerStyle.paginationCountTextStyle}>
                      {`showing ${offset + 1} - ${totalCount < (offset + limit)
                        ? totalCount : offset + limit} of ${totalCount} records`}
                    </Typography>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Stack>

        {/** table row popover */}
        <Popover
          open={open}
          anchorEl={anchorElRow}
          onClose={handleClose}
          PaperProps={{
            sx: manageCustomerStyle.popoverStyle,
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
          sx={{}}
        >
          <Typography
            sx={manageCustomerStyle.viewTextStyle}
            onClick={handleClickMenu}
          >
            View details
          </Typography>
        </Popover>

        {/** Add new tag modal */}
        <DialogBox
          title={"Add tag"}
          titleStyle={manageCustomerStyle.addNewModalTitleStyle}
          open={openAddTag}
          handleClose={() => setOpenAddTag(false)}
          titleVariant={"inherit"}
          maxWidth="xs"
          dialogmodalBoxStyle={manageCustomerStyle.dialogmodalBoxSx}
          Body={
            <>
              <Box>
                <InputField
                  variant="filled"
                  label="Customer name"
                  placeholder=""
                  onChange={(e) => console.log(e.target.value)}
                  value={`${customer?.first_name} ${customer?.last_name}`}
                  isLabelRequired={false}
                  helperText=""
                  fullWidth
                  disabled={true}
                  required
                  error={false}
                  errorMessage={""}
                  isErrorRequired={false}
                  inputStyle={{
                    "& .MuiFilledInput-root.Mui-disabled": {
                      backgroundColor: "#E6EAEB !important",
                    },
                  }}
                  sx={manageCustomerStyle.formInputStyle}
                />
              </Box>
              <Box mt={2}>
                <SelectAndautocomplete
                  options={tagOptions}
                  variant="filled"
                  selectType="chip"
                  placeholder={""}
                  multiple
                  limitTags={4}
                  optionSelectedIconShow={true}
                  onChange={(e: any, value: any) => {
                    setHandleSelectTag(value), setError({ tags: "" });
                  }}
                  freeSolo
                  value={segments}
                  label={"Select customer tags"}
                  required
                  isError={Boolean(tagError.tags)}
                  optionStyle={{ fontSize: "1.4rem" }}
                  labelStyleProps={manageCustomerStyle.selectLabelStyle}
                  sx={{
                    ...manageCustomerStyle.filterSelectStyle,
                    ...{
                      "& .MuiInputLabel-root": {
                        fontWeight: "500",
                        transform: segments?.[0]?.label
                          ? "translate(1.2rem, 0.8rem) scale(1) !important"
                          : "translate(1.2rem, 1.6rem) scale(1) !important",
                        "&.Mui-focused": {
                          transform:
                            "translate(1.2rem, 0.6rem) scale(1) !important",
                        },
                      },
                    },
                  }}
                  chipStyle={{ fontSize: "1.4rem" }}
                />
              </Box>
            </>
          }
          footerComponent={
            <>
              <Box sx={manageCustomerStyle.footerContainer}>
                <BasicButton
                  sx={manageCustomerStyle.addNewButonStyle}
                  rootSx={{ width: "100%", borderRadius: "0.8rem" }}
                  onClick={() => handleSaveTag()}
                >
                  {loading ? (
                    <CircularProgress size={20} sx={{ color: "#ffff" }} />
                  ) : (
                    "Save"
                  )}
                </BasicButton>
              </Box>
            </>
          }
        />

        <DialogBox
          open={openUpload}
          handleClose={() => {
            setOpenUpload(false), setuploadFiles(null);
          }}
          title={"Bulk upload customers"}
          titleStyle={manageCustomerStyle.addNewModalTitleStyle}
          maxWidth="sm"
          dialogBodyStyle={manageCustomerStyle.dialogBodyStyle}
          dialogmodalBoxStyle={manageCustomerStyle.dialogmodalBoxSx}
          Body={
            <>
              <Typography sx={manageCustomerStyle.viewTextStyle} mb={"1.2rem"}>
                Download our template and fill it out with customer details and upload the file
              </Typography>
              <BasicButton
                sx={manageCustomerStyle.downloadBtn}
                startIcon={<DownloadBtnIcon />}
                variant="contained"
                rootSx={{ width: "20rem", mb: "2rem" }}
                href="https://prodkt-dev.objectstore.e2enetworks.net/bulk_customer_upload_template.xlsx"
              >
                Download template
              </BasicButton>
              <FileUpload
                placeholder="Drag and drop your file here"
                files={uploadFiles}
                uploadButtonText={"Upload"}
                handleFileChange={(file) => handleUploadFile(file)}
                handleDeleteFile={() => setuploadFiles(null)}
                acceptedFileTypes={{ accept: '.xlsx' }}
              />
            </>
          }
          footerComponent={
            <>
              <Box sx={manageCustomerStyle.footerContainer}>
                <BasicButton
                  sx={manageCustomerStyle.addNewButonStyle}
                  rootSx={{ width: "100%", borderRadius: "0.8rem" }}
                  onClick={handleSaveUpload}
                >
                  {loading ? (
                    <CircularProgress size={20} sx={{ color: "#ffff" }} />
                  ) : (
                    "Save"
                  )}
                </BasicButton>
              </Box>
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
          onDelete={handleDowmload}
          hrefSave={bulkData}
          subtextStyle={{ fontWeight: 600, color: "#4E585E", width: '380px' }}
          btnWidth={'18rem'}
        />
      </Box>

    </>



  );
}
