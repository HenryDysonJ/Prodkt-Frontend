import BasicInfo from "@assets/brandAssets/basicInfo";
import BatchInfo from "@assets/brandAssets/batchInfo";
import ProductInfo from "@assets/brandAssets/productInfo";
import Triangle from "@assets/brandAssets/triangle";
import TopBar from "@components/brandTopBar";
import { useProductStore } from "@core/store";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BasicInformation } from "./basicInfo";
import { BatchInformation } from "./batchInfo";
import { ProductDocument } from "./productDocument";
import { AddProductStyle } from "./style";

export const AddPRoduct = () => {
  const {
    setClearAll,
    addProduct,
    setFieldError,
    addNewProduct,
    updateProduct,
    productView,
    type,
    setType,
    setClearProductModal,
  } = useProductStore();
  const [openAlert, setOpenAlert] = useState(false);
  const [activeItem, setActiveItem] = useState("Basic information");
  const [isLoading, setisLoading] = useState(true);
  const { state } = useLocation();

  const IndividualDatas = [
    {
      title: "Basic information",
      hrefid: "",
      icon: (
        <BasicInfo
          color={
            activeItem === "Basic information" && !productView?.data?.id
              ? "#1363DF"
              : "#4E585E"
          }
          style={{ marginTop: "0.4rem    " }}
        />
      ),
    },
    {
      title: "Batch information",
      hrefid: "",
      icon: (
        <BatchInfo
          color={
            activeItem === "Batch information" && !productView?.data?.id
              ? "#1363DF"
              : "#4E585E"
          }
        />
      ),
    },
    {
      title: "Product documents",
      hrefid: "",
      icon: (
        <ProductInfo
          color={
            activeItem === "Product documents" && !productView?.data?.id
              ? "#1363DF"
              : "#4E585E"
          }
        />
      ),
    },
  ];
  const handleItemClick = (title: string) => {
    setActiveItem(title);

    // Find the element with the corresponding id
    const element = document.getElementById(title);

    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const history = useNavigate();

  const validateValues = () => {
    let isValid = true;
    if (!addNewProduct.productCode) {
      setFieldError("productCode", "Product Code is required");
      isValid = false;
    }
    if (!addNewProduct.productCategory) {
      setFieldError("productType", "Product Type is required");
      isValid = false;
    }
    if (!addNewProduct.productCategory) {
      setFieldError("productCategory", "Product Category is required");
      isValid = false;
    }
    if (!addNewProduct.productName) {
      setFieldError("productName", "Product Name is required");
      isValid = false;
    }
    if (!addNewProduct.productName) {
      setFieldError("productName", "ProductName is required");
      isValid = false;
    }
    if (!addNewProduct.mrp) {
      setFieldError("mrp", "MRP is required");
      isValid = false;
    }
    // if (!addNewProduct.description) {
    //   setFieldError("description", "Description is required");
    //   isValid = false;
    // }
    return isValid;
  };

  const handleSave = async () => {
    if (type === "edit" && validateValues()) {
      await updateProduct(state?.id, state?.status);
      history("/product-list");
      setClearAll();
      setClearProductModal()
    } else if (validateValues()) {
      await addProduct(state?.status);
      history("/product-list");
      setClearAll();
      setClearProductModal()
    }
    setType('')
  };

  const handleCancel = () => {
    setOpenAlert(true);
  };
  const handleConfirm = async () => {
    const response: any = state?.id
      ? await updateProduct(state?.id, 5)
      : await addProduct(5);
    history("/product-list");
    // if (response?.status == 200) {
    // }
  };

  const handleBackFn = () => {
    history(-1);
    setClearAll();
    setType('')
  };

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 1000);

  }, []);

  return (
    <>
      {productView?.data?.id && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" sx={{ marginLeft: "200px" }} />
        </Backdrop>
      )}
      <TopBar
        backBtnFunc={handleBackFn}
        backBtn={true}
        title={
          type === "view" ? "View product info" : type === "edit" ? "Edit product info" : "Add new product"
        }
        outlineButtonText={"Cancel"}
        containButtonText={type === "edit" ? "Update" : "Save"}
        handleClickContainButton={handleSave}
        handleClickOutlineButton={handleCancel}
          activeBtn={type === "view" && true}
      ></TopBar>
      <Box sx={AddProductStyle.rootSx}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box sx={AddProductStyle.leftSegment}>
                {IndividualDatas.map((data) => (
                  <Box
                    key={data.title}
                    sx={{
                      ...AddProductStyle.aligns,
                      // Apply active styles based on the activeItem state
                      cursor: "pointer",
                      backgroundColor:
                        activeItem === data.title && !productView?.data?.id
                          ? "#E9F3FF"
                          : "transparent",
                      borderRadius: "0.8rem",
                      color:
                        activeItem === data.title && !productView?.data?.id
                          ? "primary.main"
                          : "custom.onSurfaceVariant",
                      fontWeight: activeItem === data.title ? 600 : 500,
                      ":hover": {
                        backgroundColor: "custom.primaryContainer",
                        borderRadius: "0.8rem",
                        color: "custom.primary",
                        fontWeight: 500,
                      },
                    }}
                    onClick={() => handleItemClick(data.title)}
                  >
                    <Box>{data.icon}</Box>
                    <Typography
                      sx={{
                        ...AddProductStyle.titleClr,
                        fontWeight: activeItem === data.title ? 600 : 500,
                      }}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box sx={AddProductStyle.rightAligmscroll}>
                <Box
                  sx={{ ...AddProductStyle.rightSegment, mb: "2.4rem" }}
                  id="Basic information"
                >
                  <BasicInformation />
                </Box>
                <Box
                  sx={{ ...AddProductStyle.rightSegment, mb: "2.4rem" }}
                  id="Batch information"
                >
                  <BatchInformation />{" "}
                </Box>
                <Box
                  sx={{ ...AddProductStyle.rightSegment, mb: "2.4rem" }}
                  id="Product documents"
                >
                  <ProductDocument />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/** open alert modal */}
      <DialogBox
        title={""}
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        titleVariant={"inherit"}
        maxWidth="sm"
        titleStyle={{ display: "none" }}
        closeIcon={false}
        sx={{
          backgroundColor: "red !important",
        }}
        dialogBodyStyle={AddProductStyle.mismatchDialog}
        dialogmodalBoxStyle={AddProductStyle.mismatchDialogBodySx}
        Body={
          <>
            <Stack sx={AddProductStyle.mismatchBodyContainer}>
              <Box sx={AddProductStyle.warnigIconStle}>
                <Triangle />
              </Box>
              <Typography sx={AddProductStyle.breakdownTitle}>
                {" "}
                Save details as draft ?
              </Typography>
              <Typography
                textAlign={"center"}
                mt={"1rem"}
                sx={AddProductStyle.stockInKeyText}
              >
                Are you sure want to cancel the product details & save as draft
              </Typography>
              <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                <BasicButton
                  sx={{
                    ...AddProductStyle.missMatchButtonStyle,
                    borderColor: "custom.surfaceBlue",
                  }}
                  variant="outlined"
                  onClick={() => {
                    setOpenAlert(false), history(-1), setClearAll();
                  }}
                >
                  Discard
                </BasicButton>

                <BasicButton
                  sx={{
                    ...AddProductStyle.missMatchButtonStyle,
                    ":hover": {
                      backgroundColor: "custom.surfaceLightBlue",
                    },
                    backgroundColor: "custom.surfaceLightBlue",
                  }}
                  variant="contained"
                  rootSx={{ width: "100%" }}
                  onClick={() => handleConfirm()}
                >
                  Save draft
                </BasicButton>
              </Stack>
            </Stack>
          </>
        }
      />
    </>
  );
};
