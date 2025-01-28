import DeleteIcon from "@assets/brandAssets/delete";
import HoverArrow from "@assets/brandAssets/hoverArrow";
import { InputField } from "@crayond_dev/ui_input-field";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Switch } from "@crayond_dev/ui_switch";
import { UploadButton } from "@crayond_dev/ui_uploadbutton";
import { Avatar, Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useAddProduct, useProductStore } from "@core/store";
import { UploadFiles } from "@core/utils";
import { AddProductStyle } from "./style";

const tooltipContent = [
  "Upload a medium–large size picture(640 x 480 px minimum) in .jpg or .png format.",
  "Use a picture with just the brand logo in it, preferably with a white or solid background.",
];

interface CustomSwitchBoxProps {
  id: string | number;
  initialValue: boolean;
}

export const CustomSwitchBox: React.FC<CustomSwitchBoxProps> = ({
  id,
  initialValue,
}) => {
  const [switches, setSwitches] = React.useState([
    { id, isChecked: initialValue },
  ]);
  const { handleChangeProduct, type } = useProductStore();

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: any = e.target.checked;
    handleChangeProduct("status", newValue);
    // Update the state based on the switch id
    setSwitches((prevSwitches) =>
      prevSwitches.map((switchObj) =>
        switchObj.id === id ? { ...switchObj, isChecked: newValue } : switchObj
      )
    );
  };

  // Find the switch based on the id
  const currentSwitch = switches.find((switchObj) => switchObj.id === id);

  // Extract isChecked from the found switch or default to false
  const isChecked = currentSwitch ? currentSwitch.isChecked : false;

  return (
    <Switch
      label={isChecked ? "" : ""}
      labelPlacement="end"
      isLabel={true}
      onChange={handleSwitchChange}
      checked={isChecked}
      sx={AddProductStyle.switchBoxStyle}
      labelStyle={AddProductStyle.labelSwitchStyle}
      disabled={type === "view" ? true : false}
    //   switchTrackDefaultStyle={AddProductStyle.switchInactiveStyle}
    />
  );
};
export const BasicInformation = () => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const {
    handleChangeProduct,
    addNewProduct,
    getCategoryList,
    categoryList,
    error,
    productView,
    getProductType,
    productTypeList,
    type,
  } = useProductStore();
  const { getCategoriesAPI, addProductState } = useAddProduct();

  const handleChange = async (event: any) => {
    setUploadLoading(true);
    const file = event.target.files[0];

    try {
      const res = await UploadFiles([file], "fileName");

      setTimeout(() => {
        handleChangeProduct("image", res[0].url);
        setUploadLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error uploading files:", error);
      setUploadLoading(false);
    }
  };

  const onDeleteClick = () => {
    handleChangeProduct("image", "");
  };

  const productCategoryOptions = Array.isArray(categoryList?.rows)
    ? categoryList?.rows?.map((val: any) => ({
      label: val?.name,
      id: val?.id,
    }))
    : [];

  const productTypeOptions = Array.isArray(productTypeList?.rows)
    ? productTypeList?.rows?.map((val: any) => ({
      label: val?.name,
      value: val?.id,
    }))
    : [];

  const optionsType = addNewProduct?.productCategory?.label?.length > 0
    ? productTypeOptions : [];

  useEffect(() => {
    getProductType();
    getCategoryList();
    getCategoriesAPI({
      search: "",
      offset: 0,
      limit: 100,
    });
  }, []);

  return (
    <>
      <Typography sx={AddProductStyle.infoTitle}>Basic information</Typography>
      <Grid container spacing={3}>
        <Grid item xs={3.5}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2, mt: 2 }}
          >
            {uploadLoading ? (
              <Box sx={AddProductStyle.image}>
                <Box
                  sx={{ display: "grid", placeItems: "center", height: "16vh" }}
                >
                  <CircularProgress />
                </Box>
              </Box>
            ) : (
              <Avatar
                src={addNewProduct?.image ?? ""}
                sx={AddProductStyle.image}
              />
            )}

            {type !== 'view' && (
              <Box sx={{ display: "flex" }}>
                <Box>
                  <UploadButton
                    sx={AddProductStyle.button}
                    endIcon={null}
                    inputProps={{}}
                    onFileChange={handleChange}
                    variant="outlined"
                  >
                    {"Change image"}
                  </UploadButton>
                  <Box sx={AddProductStyle.deleteAlign} onClick={onDeleteClick}>
                    <DeleteIcon />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={7.5}>
          {!productView?.data?.id && (
            <Box sx={AddProductStyle.toolTipStyle}>
              {tooltipContent &&
                tooltipContent.map((text: string) => (
                  <Box key={text} sx={AddProductStyle.tooltipContentStyle}>
                    <span style={AddProductStyle.dotStyle} />
                    <Typography sx={AddProductStyle.toolTipText}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              <Box sx={AddProductStyle.hoverArrowStyle}>
                <HoverArrow />
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>

      <Grid container display={"flex"} justifyContent={"space-between"}>
        <Grid item xs={5.9}>
          <SelectAndautocomplete
            options={productCategoryOptions}
            variant="filled"
            selectType="chip"
            limitTags={1}
            onChange={(e: any, value: any) =>
              handleChangeProduct("productCategory", value)
            }
            value={addNewProduct?.productCategory}
            label={"Product category"}
            addOptionAction={() => console.log("hih")}
            rootStyleSx={AddProductStyle.selectLabelStyle}
            optionStyle={{ fontSize: "1.4rem" }}
            labelSx={{ fontSize: "2.2rem" }}
            labelStyleProps={{
              fontSize: "1.6rem !important",
              color: "#4E585E",
            }}
            isError={error?.productCategory?.length ? true : false}
            helperText={error?.productCategory}
            disabled={type === "view" ? true : false}
          />
          <InputField
            variant="filled"
            label="Product Code"
            placeholder="Enter Product Code"
            fullWidth
            onChange={(e) => handleChangeProduct("productCode", e.target.value)}
            value={addNewProduct?.productCode}
            error={error?.productCode?.length ? true : false}
            errorMessage={error?.productCode}
            isErrorRequired={error?.productCode?.length ? true : false}
            errorStyle={{ fontSize: "1.0rem" }}
            disabled={type === "view" ? true : false}
            inputStyle={{
              width: "100%",
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
                color: "#4E585E",
                mt: "0.5rem",
              },
            }}
            sx={{
              "& .MuiFilledInput-root": {
                "& .MuiFilledInput-input": {
                  fontSize: "1.4rem",
                },
              },
              mt: 2,
            }}
            labelStyle={{
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
                color: "#4E585E",
                mt: "0.5rem",
              },
            }}
          />
          <InputField
            variant="filled"
            label="MRP"
            placeholder="Enter MRP"
            fullWidth
            onChange={(e) => handleChangeProduct("mrp", e.target.value)}
            value={addNewProduct?.mrp}
            error={error?.mrp?.length ? true : false}
            errorMessage={error?.mrp}
            isErrorRequired={error?.mrp?.length ? true : false}
            disabled={type === "view" ? true : false}
            type="number"
            inputStyle={{
              width: "100%",
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
                color: "#4E585E",
                mt: "0.5rem",
              },
            }}
            sx={{
              "& .MuiFilledInput-root": {
                "& .MuiFilledInput-input": {
                  fontSize: "1.4rem",
                },
              },
              mt: 2,
            }}
            labelStyle={{
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
                color: "#4E585E",
                mt: "0.5rem",
              },
            }}
            errorStyle={{ fontSize: "1.0rem" }}
          />
        </Grid>
        <Grid item xs={5.9}>
          <SelectAndautocomplete
            options={optionsType}
            variant="filled"
            selectType="chip"
            limitTags={1}
            onChange={(e: any, value: any) =>
              handleChangeProduct("productType", value)
            }
            value={addNewProduct?.productType}
            label={"Product Type"}
            addOptionAction={() => console.log("hih")}
            rootStyleSx={AddProductStyle.selectLabelStyle}
            optionStyle={{ fontSize: "1.4rem" }}
            labelSx={{ fontSize: "2.2rem" }}
            labelStyleProps={{
              fontSize: "1.6rem !important",
              color: "#4E585E",
            }}
            isError={error?.productType?.length ? true : false}
            helperText={error?.productType}
            disabled={type === "view" ? true : false}
          />
          <InputField
            variant="filled"
            label="Product Name / Model Number"
            placeholder="Enter Product Name / Model Number"
            fullWidth
            onChange={(e) => handleChangeProduct("productName", e.target.value)}
            value={addNewProduct?.productName}
            error={error?.productName?.length ? true : false}
            errorMessage={error?.productName}
            isErrorRequired={error?.productName?.length ? true : false}
            disabled={type === "view" ? true : false}
            inputStyle={{
              width: "100%",
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
                color: "#4E585E",
                mt: "0.5rem",
              },
            }}
            sx={{
              "& .MuiFilledInput-root": {
                "& .MuiFilledInput-input": {
                  fontSize: "1.4rem",
                },
              },
              mt: 2,
              pb: 2,
            }}
            labelStyle={{
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
                color: "#4E585E",
                mt: "0.5rem",
              },
            }}
            errorStyle={{ fontSize: "1.0rem" }}
          />
          <Typography sx={AddProductStyle.statusSx}>Product Status</Typography>
          <CustomSwitchBox id={1} initialValue={addNewProduct?.status} />
        </Grid>
      </Grid>
      <InputField
        variant="filled"
        label="Product Description"
        placeholder="Enter Product Description"
        fullWidth
        onChange={(e) => handleChangeProduct("description", e.target.value)}
        value={addNewProduct?.description}
        // error={error?.description?.length ? true : false}
        // errorMessage={error?.description}
        // isErrorRequired={error?.description?.length ? true : false}
        disabled={type === "view" ? true : false}
        inputStyle={{
          width: "100%",
          "& .MuiInputLabel-root": {
            fontSize: "1.2rem",
            color: "#4E585E",
            mt: "0.5rem",
          },
        }}
        sx={{
          "& .MuiFilledInput-root": {
            "& .MuiFilledInput-input": {
              fontSize: "1.4rem",
            },
          },
          mt: 2,
          pb: 2,
        }}
        labelStyle={{
          "& .MuiInputLabel-root": {
            fontSize: "1.2rem",
            color: "#4E585E",
            mt: "0.5rem",
          },
        }}
        errorStyle={{ fontSize: "1.0rem" }}
      />
    </>
  );
};
