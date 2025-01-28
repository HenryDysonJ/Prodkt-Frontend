import NoteIcon from "@assets/brandAssets/noteIcon";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { FileUpload } from "@crayond_dev/ui_file-upload";
import { InputField } from "@crayond_dev/ui_input-field";
import { Avatar, Box, Button, Grid, Popover, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ActiveProcess from "@assets/brandAssets/activeProcess";
import DeleteRoundIcon from "@assets/brandAssets/deleteRoundIcon";
import NotProcessIcon from "@assets/brandAssets/notProcessIcon";
import StartProcess from "@assets/brandAssets/startProcesIcon";
import Dots from "@assets/brandAssets/threedots";
import { UploadIconBlue } from "@assets/brandAssets/uploadIcon";
import { CustomStepper } from "@atoms/stepper";
import { useProductStore } from "@core/store";
import { UploadFiles } from "@core/utils";
import { AddProductStyle } from "./style";
import { enqueueSnackbar } from "notistack";

const orderData = [
  {
    id: 1,
    label: "Warranty details",
    icon: <StartProcess />,
    color: "custom.primary",
  },
  {
    id: 2,
    label: "User manual",
    icon: <NotProcessIcon />,
    color: "custom.onSurfaceVariant",
  },
  {
    id: 3,
    label: "Other documents",
    icon: <NotProcessIcon />,
    color: "custom.onSurfaceVariant",
  },
];

const MenuOption = [
  {
    id: 1,
    label: "Edit",
  },
  {
    id: 2,
    label: "Delete",
  },
];

export const OtherDocument = () => {
  const { addNewProductModalData, handleChangeDocumentProduct } =
    useProductStore();

  const handleDeleteFile = (key: string) => {
    if (key === "otherDocument") {
      handleChangeDocumentProduct("otherDocument", "url", "");
    }
  };

  const handleImageUpload = async (event: any, key: string) => {
    const file = event.totalFile[0]?.file;
    try {
      const res = await UploadFiles([file], "fileName");

      setTimeout(() => {
        if (key === "otherDocument") {
          handleChangeDocumentProduct("otherDocument", "url", res[0]?.url);
          handleChangeDocumentProduct(
            "otherDocument",
            "fileName",
            res[0]?.name
          );
        }
      }, 1000);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };
  return (
    <>
      <Typography sx={AddProductStyle.statusSx}>Other documents</Typography>
      {addNewProductModalData?.otherDocument?.url?.length === 0 ? (
        <FileUpload
          variant={3}
          onClickUpload={(e) => handleImageUpload(e, "otherDocument")}
          selectedFileUrl={addNewProductModalData?.otherDocument?.url ?? ""}
          isMultiple={false}
          maxSize={"3MB"}
          removeIcon={<></>}
          allowedTypes={["jpg", "png", "pdf"]}
          fileSizeErrorMsg={"File size is exceeded 3MB"}
          errorMsgStyle={{ color: "red" }}
          errorStyle={{ color: "red" }}
          fileTypeErrorMsg={"File type not suported"}
          uploadButtonText={"Upload"}
          uploadButtonStyle={AddProductStyle.uploadButtonSx}
          cardStyle={AddProductStyle.cardStyle}
          placeHolder={"Drag and drop your file here"}
          placeHolderStyle={AddProductStyle.placeHolderStyle}
          isOrPlaceholder
          bottomRenderComponent={<>{"Max file size-3 MB"}</>}
          bottomRenderComponentStyle={
            AddProductStyle.bottomRenderComponentStyle
          }
          bottomTextLabel={"JPG, PNG, PDF only"}
          // bottomTextLabelStyle={AddProductStyle.bottomTextLabelStyle}
          startIcon={<UploadIconBlue />}
          showUploadFile={true}
          rootStyle={AddProductStyle.bannerComponentContainer}
          setTotalFileSelected={() => undefined}
          deleteUploadFile={() => handleDeleteFile("otherDocument")}
        />
      ) : (
        <>
          <Box sx={AddProductStyle.imageBox}>
            <Avatar
              sx={AddProductStyle.avatarSx}
              src={addNewProductModalData?.otherDocument?.url}
            />
            <Box
              sx={AddProductStyle.deleteSx}
              onClick={() => handleDeleteFile("otherDocument")}
            >
              <DeleteRoundIcon />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export const ProductDocument = () => {
  const {
    addNewProduct,
    updateModalDataToStore,
    addNewProductModalData,
    handleChangeDocumentProduct,
    updateStoreDataToModal,
    setFieldError,
    error,
    productView,
    productDocumentEdit,
    deleteProductInfo,
    type,
  } = useProductStore();

  const [open, setOpen] = useState(false);
  const [selectOrder, setSelectOrder] = useState<any>(orderData);
  const [progressWidth, setProgressWidth] = useState(0);

  const initialCount = 1; // Initial step count
  const [count, setCount] = useState(initialCount);

  const [formType, setFormType] = useState("");

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const openPop = Boolean(anchorElRow);

  const handleClickDots = (event: any, formType: string) => {
    setFormType(formType);
    setAnchorElRow(event.currentTarget);
  };

  const handleUpload = () => {
    setCount(1);
    setOpen(true);
  };

  const handleImageUpload = async (event: any, key: string) => {
    const file = event.totalFile[0]?.file;
    try {
      const res = await UploadFiles([file], "fileName");

      setTimeout(() => {
        if (key === "warranty") {
          handleChangeDocumentProduct("warranty", "fileName", res[0]?.name);
          handleChangeDocumentProduct("warranty", "url", res[0]?.url);
        } else if (key === "usermanual") {
          handleChangeDocumentProduct("usermanual", "fileName", res[0]?.name);
          handleChangeDocumentProduct("usermanual", "url", res[0]?.url);
        } else if (key === "otherDocument") {
          handleChangeDocumentProduct(
            "otherDocument",
            "fileName",
            res[0]?.name
          );
          handleChangeDocumentProduct("otherDocument", "url", res[0]?.url);
        }
      }, 1000);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleDeleteFile = (key: string) => {
    if (key === "warranty") {
      handleChangeDocumentProduct("warranty", "url", "");
    } else if (key === "usermanual") {
      handleChangeDocumentProduct("usermanual", "url", "");
    } else if (key === "otherDocument") {
      handleChangeDocumentProduct("otherDocument", "url", "");
    }
  };

  const validateValues = () => {
    let isValid = true;
    if (!addNewProductModalData?.warranty?.duration) {
      setFieldError("duration", "Warranty duration is required");
      isValid = false;
    }
    return isValid;
  };


  const handleNext = () => {
    if (validateValues() && count === 1 && addNewProductModalData?.warranty?.url?.length > 0) {
      if (count < selectOrder.length) {
        setCount(count + 1);
        // changeStatus(count + 1);
        setProgressWidth((count / selectOrder.length) * 120);
      }
    } else if(count === 1 && addNewProductModalData?.warranty?.url?.length === 0) {
      enqueueSnackbar("Please upload warranty document", {
        variant: "error",
        style: { fontSize: "1.4rem" },
      });
    }

    
    if (count === 2) {
      if (addNewProductModalData?.usermanual?.url?.length > 0) {
        setCount(count + 1);
      } else {
        enqueueSnackbar("Please upload user manual data", {
          variant: "error",
          style: { fontSize: "1.4rem" },
        });
      }
    }
    if (count === 3) {
      updateModalDataToStore();
      setOpen(false);
      setCount(1);
    }
  };

  const handleUpdate = async () => {
    await updateModalDataToStore();
    setOpen(false);
    setFormType("");
  };

  const handleBack = () => {
    if (count > 1) {
      setCount(count - 1);
      // changeStatus(count - 1);
      setProgressWidth(((count - 2) / selectOrder.length) * 110);
    }
  };

  const changeStatus = (countValue: any) => {
    const updatedOrders = orderData?.map((order: any) => {
      if (order?.id === countValue) {
        return { ...order, icon: <StartProcess />, color: "#FF980E" };
      } else if (order?.id < countValue) {
        return { ...order, icon: <ActiveProcess />, color: "success.main" };
      } else if (order?.id < countValue) {
        return {
          ...order,
          icon: <NotProcessIcon />,
          color: "custom.onSurfaceVariant",
        };
      } else {
        return order;
      }
    });
    setSelectOrder(updatedOrders);
    return updatedOrders;
  };

  const handleEdit = async () => {
    await updateStoreDataToModal();
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
    setCount(1);
  };

  const handleClosePopover = () => {
    setAnchorElRow(null);
  };

  const handleClickMenu = async (item: any) => {
    if (item?.id === 1) {
      handleEdit();
    } else if (item?.id === 2) {
      deleteProductInfo(formType)
    };
    setAnchorElRow(null);
  }

  useEffect(() => {
    changeStatus(count);
  }, [count]);

  return (
    <>
      <Typography sx={AddProductStyle.infoTitle}>
        Product information
      </Typography>

      {addNewProduct?.id?.length > 0
        || addNewProduct?.warranty?.duration?.length > 0
        || addNewProduct?.usermanual?.url?.length > 0
        || addNewProduct?.otherDocument?.url?.length > 0
        ? (
          <>
            {/* WARRANTY DETAILS */}
            <Box sx={AddProductStyle.detailsSx}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"}>
                  {/* <BatchIcon /> */}
                  <Typography sx={AddProductStyle.subtitleSx}>
                    Warranty details
                  </Typography>
                </Box>
                {type !== "view" &&
                  <Box
                    sx={AddProductStyle.editbox}
                    onClick={(event: Event) =>
                      handleClickDots(event, "warranty")
                    }
                  >
                    <Dots />
                  </Box>
                }
              </Box>
              {addNewProduct?.warranty?.duration?.length > 0 ? (
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography sx={AddProductStyle.durationSx}>
                        Duration
                      </Typography>
                      <Typography sx={AddProductStyle.yearSx}>
                        {addNewProduct?.warranty?.duration ?? "0"} years
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={AddProductStyle.durationSx}>
                        Eligible Kilometers
                      </Typography>
                      <Typography sx={AddProductStyle.yearSx}>
                        {addNewProduct?.warranty?.kilometer?.length > 0 ? addNewProduct?.warranty?.kilometer : "-"}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={AddProductStyle.durationSx}>
                        Document
                      </Typography>
                      <Typography sx={{
                        ...AddProductStyle.pdfSx, maxWidth: addNewProduct?.warranty?.name?.length > 0 ||
                          addNewProduct?.warranty?.fileName?.length > 0 ? '10rem' : '20px'
                      }}>
                        {addNewProduct?.warranty?.name ||
                          addNewProduct?.warranty?.fileName ||
                          "-"}
                        {/* <span>
                          <DeleteIcon
                            style={{
                              height: "1rem",
                              width: "1rem",
                              marginLeft: "1.2rem",
                            }}
                          />
                        </span> */}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box sx={{ textAlign: "center" }}>
                  <Box>
                    <NoteIcon />
                  </Box>
                  <Typography sx={AddProductStyle.uploadText}>
                    Upload warranty documnent related to the product
                  </Typography>
                </Box>
              )}
            </Box>

            {/* USER MANUAL */}
            <Box sx={AddProductStyle.detailsSx}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"}>
                  <Typography sx={AddProductStyle.subtitleSx}>
                    User manual{" "}
                  </Typography>
                </Box>
                {type !== "view" &&
                  <Box
                    sx={AddProductStyle.editbox}
                    onClick={(event) => handleClickDots(event, 'userManual')}
                  >
                    <Dots />
                  </Box>
                }
              </Box>

              {addNewProduct?.usermanual?.fileName?.length > 0 ? (
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography sx={AddProductStyle.durationSx}>
                        Document
                      </Typography>
                      <Typography sx={{
                        ...AddProductStyle.pdfSx, maxWidth: addNewProduct?.usermanual?.name ||
                          addNewProduct?.usermanual?.fileName ? '10rem' : '10px'
                      }}>
                        {addNewProduct?.usermanual?.name ||
                          addNewProduct?.usermanual?.fileName ||
                          "-"}
                        {/* {addNewProduct?.usermanual?.name ||
                          addNewProduct?.usermanual?.fileName &&
                          <span>
                            <DeleteIcon
                              style={{
                                height: "1rem",
                                width: "1rem",
                                marginLeft: "1.2rem",
                              }}
                            />
                          </span>} */}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box sx={{ textAlign: "center" }}>
                  <Box>
                    <NoteIcon />
                  </Box>
                  <Typography sx={AddProductStyle.uploadText}>
                    Upload user manual documents related to the product
                  </Typography>
                </Box>
              )}
            </Box>

            {/* OTHER DOCUMENT */}
            <Box sx={AddProductStyle.detailsSx}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"}>
                  <Typography sx={AddProductStyle.subtitleSx}>
                    Other document{" "}
                  </Typography>
                </Box>
                {type !== "view" &&
                  <Box
                    sx={AddProductStyle.editbox}
                    onClick={(event) => handleClickDots(event, 'otherDocuments')}
                  >
                    <Dots />
                  </Box>
                }
              </Box>

              {addNewProduct?.otherDocument?.fileName?.length > 0 ? (
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography sx={AddProductStyle.durationSx}>
                        Document
                      </Typography>
                      <Typography sx={{
                        ...AddProductStyle.pdfSx, maxWidth: addNewProduct?.otherDocument?.name ||
                          addNewProduct?.otherDocument?.fileName ? '10rem' : '20px'
                      }}>
                        {addNewProduct?.otherDocument?.name ||
                          addNewProduct?.otherDocument?.fileName ||
                          "-"}
                        {/* <span>
                          <DeleteIcon
                            style={{
                              height: "1rem",
                              width: "1rem",
                              marginLeft: "1.2rem",
                            }}
                          />
                        </span> */}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box sx={{ textAlign: "center" }}>
                  <Box>
                    <NoteIcon />
                  </Box>
                  <Typography sx={AddProductStyle.uploadText}>
                    Upload other documents related to the product
                  </Typography>
                </Box>
              )}
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <NoteIcon />
              </Box>
              <Typography sx={AddProductStyle.uploadText}>
                Upload documents such as user manual, warranty documnent & DIY or
                any other documents related to the product
              </Typography>
              <Box>
                <Button
                  sx={AddProductStyle.uploadSx}
                  variant="contained"
                  onClick={() => handleUpload()}
                >
                  Upload documents
                </Button>
              </Box>
            </Box>
          </>
        )}
      <DialogBox
        open={open}
        handleClose={() => modalClose()}
        title={
          formType === "warranty"
            ? "Edit warranty deatils"
            : formType === 'userManual' ? "Edit User manual details"
              : formType === 'otherDocuments' ? "Edit Other documents " : "Add product information"
        }
        titleStyle={AddProductStyle.titleStyleDialog}
        maxWidth="sm"
        dialogmodalBoxStyle={AddProductStyle.dialogmodal}
        dialogBodyStyle={AddProductStyle.dialogBodyStyle}
        Body={
          formType === 'warranty' ? (
            <>
              <Typography sx={AddProductStyle.statusSx}>
                Warranty details
              </Typography>
              <Grid container display={"flex"} justifyContent={"space-between"}>
                {/* Warranty duration */}
                <Grid item xs={5.9}>
                  <InputField
                    variant="filled"
                    label="Warranty duration"
                    placeholder="Enter Warranty duration"
                    fullWidth
                    required
                    onChange={(e) =>
                      handleChangeDocumentProduct(
                        "warranty",
                        "duration",
                        e.target.value
                      )
                    }
                    value={addNewProductModalData?.warranty?.duration}
                    error={error?.duration?.length ? true : false}
                    errorMessage={error?.duration}
                    isErrorRequired={error?.duration?.length ? true : false}
                    errorStyle={{ fontSize: "1.0rem" }}
                    inputStyle={{
                      width: "100%",
                      "& .MuiInputLabel-root": {
                        fontSize: "12px",
                        color: "#4E585E",
                        mt: "5px",
                      },
                    }}
                    sx={{
                      "& .MuiFilledInput-root": {
                        "& .MuiFilledInput-input": {
                          fontSize: "14px",
                        },
                      },
                      mt: 1.5,
                    }}
                    labelStyle={{
                      "& .MuiInputLabel-root": {
                        fontSize: "12px",
                        color: "#4E585E",
                        mt: "5px",
                      },
                    }}
                  />
                </Grid>
                {/* Enter kilometers */}
                {addNewProduct?.productCategory?.label === 'Automobiles' &&

                  <Grid item xs={5.9}>
                    <InputField
                      variant="filled"
                      label="Enter kilometers"
                      placeholder="Enter kilometers"
                      fullWidth
                      onChange={(e) =>
                        handleChangeDocumentProduct(
                          "warranty",
                          "kilometer",
                          e.target.value
                        )
                      }
                      value={addNewProductModalData?.warranty?.kilometer}
                      error={error?.kilometer?.length ? true : false}
                      errorMessage={error?.kilometer}
                      isErrorRequired={error?.kilometer?.length ? true : false}
                      errorStyle={{ fontSize: "1.0rem" }}
                      inputStyle={{
                        width: "100%",
                        "& .MuiInputLabel-root": {
                          fontSize: "12px",
                          color: "#4E585E",
                          mt: "5px",
                        },
                      }}
                      sx={{
                        "& .MuiFilledInput-root": {
                          "& .MuiFilledInput-input": {
                            fontSize: "14px",
                          },
                        },
                        mt: 1.5,
                      }}
                      labelStyle={{
                        "& .MuiInputLabel-root": {
                          fontSize: "12px",
                          color: "#4E585E",
                          mt: "5px",
                        },
                      }}
                    />
                  </Grid>
                }
              </Grid>
              {/* Warranty document */}
              <Typography sx={AddProductStyle.statusSx} mt={3}>
                Warranty document <span style={{ color: "#DF3813" }}>*</span>
              </Typography>
              {addNewProductModalData?.warranty?.url?.length === 0 ? (
                <FileUpload
                  variant={3}
                  onClickUpload={(e) => handleImageUpload(e, "warranty")}
                  selectedFileUrl={addNewProductModalData?.warranty?.url ?? ""}
                  isMultiple={false}
                  maxSize={"3MB"}
                  removeIcon={<></>}
                  allowedTypes={["jpg", "png", "pdf"]}
                  fileSizeErrorMsg={"File size is exceeded 3MB"}
                  errorMsgStyle={{ color: "red" }}
                  errorStyle={{ color: "red" }}
                  fileTypeErrorMsg={"File type not supported"}
                  uploadButtonText={"Upload"}
                  uploadButtonStyle={AddProductStyle.uploadButtonSx}
                  cardStyle={AddProductStyle.cardStyle}
                  placeHolder={"Drag and drop your file here"}
                  placeHolderStyle={AddProductStyle.placeHolderStyle}
                  isOrPlaceholder
                  bottomRenderComponent={<>{"Max file size-3 MB"}</>}
                  bottomRenderComponentStyle={
                    AddProductStyle.bottomRenderComponentStyle
                  }
                  bottomTextLabel={"JPG, PNG, PDF only"}
                  startIcon={<UploadIconBlue />}
                  showUploadFile={true}
                  rootStyle={AddProductStyle.bannerComponentContainer}
                  setTotalFileSelected={() => undefined}
                  deleteUploadFile={() => handleDeleteFile("warranty")}
                />
              ) : (
                <Box sx={AddProductStyle.imageBox}>
                  <Avatar
                    sx={AddProductStyle.avatarSx}
                    src={addNewProductModalData?.warranty?.url ?? ""}
                  />
                  <Box
                    sx={AddProductStyle.deleteSx}
                    onClick={() => handleDeleteFile("warranty")}
                  >
                    <DeleteRoundIcon />
                  </Box>
                </Box>
              )}
            </>
          ) : formType === 'userManual' ? (
            <>
              <Typography sx={AddProductStyle.statusSx}>
                User manual <span style={{ color: "#DF3813" }}>*</span>
              </Typography>
              {/* User manual file upload */}
              {addNewProductModalData?.usermanual?.url?.length === 0 ? (
                <FileUpload
                  variant={3}
                  onClickUpload={(e) => handleImageUpload(e, "usermanual")}
                  selectedFileUrl={addNewProductModalData?.usermanual?.url ?? ""}
                  isMultiple={false}
                  maxSize={"3MB"}
                  removeIcon={<></>}
                  allowedTypes={["jpg", "png", "pdf"]}
                  fileSizeErrorMsg={"File size is exceeded 3MB"}
                  errorMsgStyle={{ color: "red" }}
                  errorStyle={{ color: "red" }}
                  fileTypeErrorMsg={"File type not supported"}
                  uploadButtonText={"Upload"}
                  uploadButtonStyle={AddProductStyle.uploadButtonSx}
                  cardStyle={AddProductStyle.cardStyle}
                  placeHolder={"Drag and drop your file here"}
                  placeHolderStyle={AddProductStyle.placeHolderStyle}
                  isOrPlaceholder
                  bottomRenderComponent={<>{"Max file size-3 MB"}</>}
                  bottomRenderComponentStyle={
                    AddProductStyle.bottomRenderComponentStyle
                  }
                  bottomTextLabel={"JPG, PNG, PDF only"}
                  startIcon={<UploadIconBlue />}
                  showUploadFile={true}
                  rootStyle={AddProductStyle.bannerComponentContainer}
                  setTotalFileSelected={() => undefined}
                  deleteUploadFile={() => handleDeleteFile("usermanual")}
                />
              ) : (
                <Box sx={AddProductStyle.imageBox}>
                  <Avatar
                    sx={AddProductStyle.avatarSx}
                    src={addNewProductModalData?.usermanual?.url ?? ""}
                  />
                  <Box
                    sx={AddProductStyle.deleteSx}
                    onClick={() => handleDeleteFile("usermanual")}
                  >
                    <DeleteRoundIcon />
                  </Box>
                </Box>
              )}
            </>
          ) : formType === 'otherDocuments' ? (
            <OtherDocument />
          ) : (
            <CustomStepper
              selectOrder={selectOrder}
              progressWidth={progressWidth}
              count={count}
              renderComponent={
                count === 1 ? (
                  <>
                    <Typography sx={AddProductStyle.statusSx}>
                      Warranty details
                    </Typography>
                    <Grid
                      container
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Grid item xs={5.9}>
                        <InputField
                          variant="filled"
                          label="Warranty duration"
                          placeholder="Enter Warranty duration"
                          fullWidth
                          required
                          onChange={(e) =>
                            handleChangeDocumentProduct(
                              "warranty",
                              "duration",
                              e.target.value
                            )
                          }
                          value={
                            addNewProductModalData?.warranty?.duration
                          }
                          error={error?.duration?.length ? true : false}
                          errorMessage={error?.duration}
                          isErrorRequired={
                            error?.duration?.length ? true : false
                          }
                          errorStyle={{ fontSize: "1.0rem" }}
                          inputStyle={{
                            width: "100%",
                            "& .MuiInputLabel-root": {
                              fontSize: "12px",
                              color: "#4E585E",
                              mt: "5px",
                            },
                          }}
                          sx={{
                            "& .MuiFilledInput-root": {
                              "& .MuiFilledInput-input": {
                                fontSize: "14px",
                              },
                            },
                            mt: 1.5,
                          }}
                          labelStyle={{
                            "& .MuiInputLabel-root": {
                              fontSize: "12px",
                              color: "#4E585E",
                              mt: "5px",
                            },
                          }}
                        />
                      </Grid>
                      {addNewProduct?.productCategory?.label === 'Automobiles' &&
                        <Grid item xs={5.9}>
                          <InputField
                            variant="filled"
                            label="Enter kilometers"
                            placeholder="Enter kilometers"
                            fullWidth
                            onChange={(e) =>
                              handleChangeDocumentProduct(
                                "warranty",
                                "kilometer",
                                e.target.value
                              )
                            }
                            value={addNewProductModalData?.warranty?.kilometer}
                            error={error?.kilometer?.length ? true : false}
                            errorMessage={error?.kilometer}
                            isErrorRequired={
                              error?.kilometer?.length ? true : false
                            }
                            errorStyle={{ fontSize: "1.0rem" }}
                            inputStyle={{
                              width: "100%",
                              "& .MuiInputLabel-root": {
                                fontSize: "12px",
                                color: "#4E585E",
                                mt: "5px",
                              },
                            }}
                            sx={{
                              "& .MuiFilledInput-root": {
                                "& .MuiFilledInput-input": {
                                  fontSize: "14px",
                                },
                              },
                              mt: 1.5,
                            }}
                            labelStyle={{
                              "& .MuiInputLabel-root": {
                                fontSize: "12px",
                                color: "#4E585E",
                                mt: "5px",
                              },
                            }}
                          />
                        </Grid>
                      }
                    </Grid>
                    <Typography sx={AddProductStyle.statusSx} mt={3}>
                      Warranty document{" "}
                      <span style={{ color: "#DF3813" }}>*</span>
                    </Typography>
                    {addNewProductModalData?.warranty?.url?.length === 0 ? (
                      <FileUpload
                        variant={3}
                        onClickUpload={(e) => handleImageUpload(e, "warranty")}
                        selectedFileUrl={
                          addNewProductModalData?.warranty?.url ?? ""
                        }
                        isMultiple={false}
                        maxSize={"3MB"}
                        removeIcon={<></>}
                        allowedTypes={["jpg", "png", "pdf"]}
                        fileSizeErrorMsg={"File size is exceeded 3MB"}
                        errorMsgStyle={{ color: "red" }}
                        errorStyle={{ color: "red" }}
                        fileTypeErrorMsg={"File type not suported"}
                        uploadButtonText={"Upload"}
                        uploadButtonStyle={AddProductStyle.uploadButtonSx}
                        cardStyle={AddProductStyle.cardStyle}
                        placeHolder={"Drag and drop your file here"}
                        placeHolderStyle={AddProductStyle.placeHolderStyle}
                        isOrPlaceholder
                        bottomRenderComponent={<>{"Max file size-3 MB"}</>}
                        bottomRenderComponentStyle={
                          AddProductStyle.bottomRenderComponentStyle
                        }
                        bottomTextLabel={"JPG, PNG, PDF only"}
                        // bottomTextLabelStyle={AddProductStyle.bottomTextLabelStyle}
                        startIcon={<UploadIconBlue />}
                        showUploadFile={true}
                        rootStyle={AddProductStyle.bannerComponentContainer}
                        setTotalFileSelected={() => undefined}
                        deleteUploadFile={() => handleDeleteFile("warranty")}
                      />
                    ) : (
                      <>
                        <Box sx={AddProductStyle.imageBox}>
                          <Avatar
                            sx={AddProductStyle.avatarSx}
                            src={addNewProductModalData?.warranty?.url ?? ""}
                          />
                          <Box
                            sx={AddProductStyle.deleteSx}
                            onClick={() => handleDeleteFile("warranty")}
                          >
                            <DeleteRoundIcon />
                          </Box>
                        </Box>
                      </>
                    )}
                  </>
                ) : count === 2 ? (
                  <>
                    <Typography sx={AddProductStyle.statusSx}>
                      User manual <span style={{ color: "#DF3813" }}>*</span>
                    </Typography>
                    {addNewProductModalData?.usermanual?.url?.length === 0 ? (
                      <FileUpload
                        variant={3}
                        onClickUpload={(e) =>
                          handleImageUpload(e, "usermanual")
                        }
                        selectedFileUrl={
                          addNewProductModalData?.usermanual?.url ?? ""
                        }
                        isMultiple={false}
                        maxSize={"3MB"}
                        removeIcon={<></>}
                        allowedTypes={["jpg", "png", "pdf"]}
                        fileSizeErrorMsg={"File size is exceeded 3MB"}
                        errorMsgStyle={{ color: "red" }}
                        errorStyle={{ color: "red" }}
                        fileTypeErrorMsg={"File type not suported"}
                        uploadButtonText={"Upload"}
                        uploadButtonStyle={AddProductStyle.uploadButtonSx}
                        cardStyle={AddProductStyle.cardStyle}
                        placeHolder={"Drag and drop your file here"}
                        placeHolderStyle={AddProductStyle.placeHolderStyle}
                        isOrPlaceholder
                        bottomRenderComponent={<>{"Max file size-3 MB"}</>}
                        bottomRenderComponentStyle={
                          AddProductStyle.bottomRenderComponentStyle
                        }
                        bottomTextLabel={"JPG, PNG, PDF only"}
                        // bottomTextLabelStyle={AddProductStyle.bottomTextLabelStyle}
                        startIcon={<UploadIconBlue />}
                        showUploadFile={true}
                        rootStyle={AddProductStyle.bannerComponentContainer}
                        setTotalFileSelected={() => undefined}
                        deleteUploadFile={() => handleDeleteFile("usermanual")}
                      />
                    ) : (
                      <>
                        <Box sx={AddProductStyle.imageBox}>
                          <Avatar
                            sx={AddProductStyle.avatarSx}
                            src={addNewProductModalData?.usermanual?.url ?? ""}
                          />
                          <Box
                            sx={AddProductStyle.deleteSx}
                            onClick={() => handleDeleteFile("usermanual")}
                          >
                            <DeleteRoundIcon />
                          </Box>
                        </Box>
                      </>
                    )}
                  </>
                ) : count === 3 ? (
                  <OtherDocument />
                ) : (
                  <></>
                )
              }
            />
          )
        }
        footerComponent={
          <>
            {formType?.length > 0 ? (
              <Button
                sx={AddProductStyle.applyFilterButtonSx}
                onClick={() => handleUpdate()}
                variant="contained"
              >
                Update
              </Button>
            ) : count === 1 ? (
              <Button
                sx={AddProductStyle.applyFilterButtonSx}
                onClick={() => handleNext()}
                variant="contained"
              >
                Next
              </Button>
            ) : (
              <>
                <Button
                  sx={AddProductStyle.resetButtonSx}
                  onClick={() => handleBack()}
                  variant="outlined"
                >
                  Back
                </Button>
                <Button
                  sx={AddProductStyle.applyFilterButtonSx}
                  onClick={() => handleNext()}
                  variant="contained"
                >
                  {count === 3 ? "Save" : "Next"}
                </Button>
              </>
            )}
          </>
        }
      />

      {/** Documents row popover */}
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
    </>
  );
};
