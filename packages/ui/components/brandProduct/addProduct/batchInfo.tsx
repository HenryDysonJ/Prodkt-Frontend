import AddIcon from "@assets/brandAssets/addIcon";
import DownloadIcon from "@assets/brandAssets/downloadIcon";
import NoData from "@assets/brandAssets/nodata";
import UploadIcon from "@assets/brandAssets/uploadIcon";
import { Button } from "@atoms/button";
import { useProductStore } from "@core/store";
import { DialogBox } from "@crayond_dev/ui_dialog";
// import { FileUpload } from "@crayond_dev/ui_file-upload";
import { Table, TableProps } from "@crayond_dev/ui_table";
import { Box, IconButton, Popover, SxProps, Typography } from "@mui/material";
import { useState } from "react";

import Dots from "@assets/brandAssets/threedots";
import { AddProductStyle } from "./style";
import { DeleteDialog } from "@atoms/deleteDialog";
import { FileUpload } from "@atoms/fileUpload";

type fileItem = {
  id?: number | string;
  file: File | any;
  loading?: number;
  uploadProgress: number;
  isPaused?: boolean;
};

const MenuOption = [
  {
    id: 1,
    label: "Download batch details",
  },
  {
    id: 2,
    label: "Delete",
  },
];
export const BatchInformation = () => {
  const [open, setOpen] = useState(false);
  const {
    batchUpload,
    batchInfo,
    handleChangeProduct,
    addNewProduct,
    productView,
    batchInfoData,
    updateBatchInfoData,
    deletedBatchInfo,
    type,
  } = useProductStore();
  const [totalFileSelected, setTotalFileSelected] = useState('');
  const [rowData, setRowData] = useState<any>();
  const [openDialog, setOpenDialog] = useState(false);

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const openPop = Boolean(anchorElRow);

  const TreeTableData = addNewProduct?.batchInfo?.map((items: any) => ({
    ...items,
    inquiryDateTime: (items?.batchNumber?.length > 0 ? items?.batchNumber : (items?.batch_no?.length > 0 ? items?.batch_no : "-")),
    inquiryTitle: items?.ManufacturerName?.length > 0 ? items?.ManufacturerName : (items?.manufacturer_name?.length > 0 ? items?.manufacturer_name : "-"),
    inquiryDescription: items?.quantity ?? "-",

  }));

  const tableData: TableProps = {
    Header: [
      {
        id: "add-on",
        align: "left",
        disablePadding: false,
        label: "Batch number",
        isSortable: false,
      },
      {
        id: "add-on",
        align: "left",
        disablePadding: false,
        label: "Manufacturer name",
        isSortable: false,
      },
      {
        id: "add-on",
        align: "left",
        disablePadding: false,
        label: "Quantity",
        isSortable: false,
      },
      {
        id: "add-on",
        align: "left",
        disablePadding: false,
        label: " ",
        isSortable: false,
      },
    ],
    dataList: TreeTableData,
    tableData: [
      { type: ["TEXT"], name: "inquiryDateTime", width: 130 },
      { type: ["TEXT"], name: "inquiryTitle", width: 190 },
      { type: ["TEXT"], name: "inquiryDescription", width: 190 },
      {
        type: ["ACTION"],
        name: "action",
        width: 20,
        variant: [
          {
            method: (id: string | number, rowData: object, event: Event) =>
              handleMoreFunction(id, rowData, event),
            icon:
              type !== "view" ? (
                <IconButton disabled>
                  <Dots />
                </IconButton>
              ) : (
                <></>
              ),
          },
        ],
      },
    ],
    headerOptions: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#4E585E",
      bgColor: "#f0f3f6",
      borderBottom: "0rem solid #E6E6E6",
      padding: "1.2rem",
      borderRadius: "0.4rem",
    },
    rowOptions: {
      rowOddBgColor: "#fff",
      rowEvenBgColor: "#fff",
      paddingTop: "0.8rem",
      paddingBottom: "0.2rem",
      borderRadius: "0.4rem",
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
  };

  const handleAddBatch = () => {
    setOpen(true);
  };

  const handleMoreFunction = (
    id: string | number,
    rowData: object,
    event: any
  ) => {
    setAnchorElRow(event.currentTarget);
    setRowData(rowData);
  };

  const onFileChange = async (data: any) => {
    setTotalFileSelected(data?.target?.files[0])
    // handleChangeProduct('batchInfo', addNewProduct?.batchInfo)
  };

  const handleSaveDialog = async () => {
    const response: any = await batchUpload(totalFileSelected, null);
    if (response?.status === 200) {
      setOpen(false);
      updateBatchInfoData();
    }
    setTotalFileSelected('')

  };

  const handleClosePopover = () => {
    setAnchorElRow(null);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    handleCloseDialog();
  };

  const handleDelete = () => {
    deletedBatchInfo(rowData);
    handleCloseDialog();
  };

  const handleClickMenu = async (item: any) => {
    if (item?.id === 1) {
      window.location.href = rowData?.url ?? rowData?.batch_details_url
    } else if (item?.id === 2) {
      setOpenDialog(true)
    }
    setAnchorElRow(null);
  };

  // console.log(addNewProduct, 'addNewProduct');

  return (
    <>
      <Typography sx={AddProductStyle.infoTitle} mb={2}>
        Batch information
      </Typography>
      <Box
        sx={
          {
            height:
              TreeTableData?.length === 0
                ? "20rem"
                : TreeTableData?.length > 3
                  ? "30rem"
                  : "",
            overflow: "scroll",
          } as SxProps
        }
      >
        {TreeTableData?.length > 0 ? (
          <Table {...tableData} tableMaxHeight={"100%"} />
        ) : (
          <Box sx={AddProductStyle.nodataSx}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"10rem"}
            >
              <NoData />
            </Box>
            <Typography sx={AddProductStyle.uploadText}>
              Add your batch details information
            </Typography>
            <Button onClick={handleAddBatch} sx={AddProductStyle.uploadSx} disabled={type === "view"}>
              Add batch details
            </Button>
          </Box>
        )}
      </Box>
      {type !== 'view' ||
        !(
          addNewProduct?.batchInfo?.length > 0 && (
            <Button
              sx={AddProductStyle.addSx}
              startIcon={<AddIcon />}
              onClick={handleAddBatch}
              variant="text"
            >
              Add batch details
            </Button>
          )
        )}
      {type !== 'view' && addNewProduct?.batchInfo?.length > 0 && (
        <Button
          sx={{ ...AddProductStyle.addSx, ml: '0px', mt: '0px', fontFamily: 'Sarabun' }}
          startIcon={<AddIcon />}
          onClick={handleAddBatch}
          variant="text"
        >
          Add batch details
        </Button>
      )}

      <DialogBox
        open={open}
        handleClose={() => setOpen(false)}
        title={"Add batch details"}
        titleStyle={AddProductStyle.titleStyleDialog}
        maxWidth="sm"
        dialogmodalBoxStyle={AddProductStyle.dialogmodal1}
        dialogBodyStyle={AddProductStyle.dialogBodyStyle}
        Body={
          <>
            <Typography sx={AddProductStyle.statusSx}>
              Download our template and fill it out with batch details and
              upload the file
            </Typography>
            <Button
              sx={AddProductStyle.downloadBtn}
              startIcon={<DownloadIcon />}
              variant="contained"
              href={
                "https://prodkt-dev.objectstore.e2enetworks.net/BatchInformations_Templates.xlsx"
              }
            >
              Download batch details template
            </Button>
            <FileUpload
              placeholder="Drag and drop your file here"
              files={totalFileSelected}
              uploadButtonText={"Upload"}
              handleFileChange={(file) => onFileChange(file)}
              handleDeleteFile={() => setTotalFileSelected(null)}
              acceptedFileTypes={{ accept: '.xlsx' }}
            />
          </>
        }
        footerComponent={
          <>
            <Button
              sx={AddProductStyle.applyFilterButtonSx}
              onClick={handleSaveDialog}
              variant="contained"
            >
              Save
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
          sx: AddProductStyle.popoverStyle,
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
                ...AddProductStyle.viewTextStyle,
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
        bodyText="Delete batch details?"
        subText={`batch number ${rowData?.batch_no ?? rowData?.batchNumber}` ?? '-'}
        cancelButtonText="Cancel"
        saveButtonText="Delete"
        onCancel={handleCancel}
        onDelete={handleDelete}
        subtextStyle={{ fontWeight: 600, color: "black" }}
      />
    </>
  );
};
