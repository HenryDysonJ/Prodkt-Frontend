import { useBrandWebForm, useProductStore } from "@core/store/brand-app";
import { FileUpload } from "@core/ui/atoms";
import TopBar from "@core/ui/components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { Checkbox } from "@crayond_dev/ui_checkbox";
import { DialogBox } from "@crayond_dev/ui_dialog";
// import { FileUpload } from "@crayond_dev/ui_file-upload";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AddRoundedIcon from "../../assets/addRounded";
import ButtonIcon from "../../assets/button";
import CalenderIcon from "../../assets/calender";
import { CheckedWithTick } from "../../assets/checkWithTick";
import CloseIcon from "../../assets/closeIcon";
import CustomerPreviewEmptyIcon from "../../assets/customerPreview";
import DatePickerIcon from "../../assets/datePicker";
import DropDownIcon from "../../assets/dropDown";
import { EmptyCheckedIcon } from "../../assets/emptyCheck";
import FileUploadIcon from "../../assets/fileUpload";
import Handicon from "../../assets/hand";
import InputIcon from "../../assets/input";
import Triangle from "../../assets/triangle";
import UploadDocumentIcon from "../../assets/uploadIcon";
import ComponentLayout from "./components/componentlayout";
import InputFeildComponent from "./components/inputFeild";
import { renderPreviewComponents } from "./components/previewComponents";
import { componentStyle } from "./components/style";
import { webFormStyle } from "./style";
export interface webFormProps {
  className?: string;
  sx?: SxProps<Theme>;
}
interface ListOption {
  label: string;
  icon: React.ReactNode;
  id: number;
}

interface ListCompo {
  isPrimary: boolean;
  id: number;
  updateId: string | any;
  componentType: ListOption;
  isMandatory: boolean;
  questions: string;
  buttonLink?: string;
  initials?: boolean;
  dropDownOption?: { label: string; value: string }[];
}

const components = [
  { label: "Input field", icon: <InputIcon />, id: 1 },
  { label: "Dropdown", icon: <DropDownIcon />, id: 2 },
  { label: "File upload", icon: <FileUploadIcon />, id: 3 },
  { label: "Date picker", icon: <DatePickerIcon />, id: 4 },
  { label: "Button", icon: <ButtonIcon />, id: 5 },
  { label: "Mobile field", icon: <InputIcon />, id: 6 },
];

const inputComponents = [
  { label: "Input field", id: 1 },
  { label: "Dropdown", id: 2 },
  { label: "File upload", id: 3 },
  { label: "Date picker", id: 4 },
  { label: "Button", id: 5 },
  { label: "Mobile field", id: 6 },
];

const InitialComponets = [
  {
    id: 0,
    updateId: new Date().toISOString() + 1,
    componentType: {
      id: 1,
      icon: {},
      label: "Input field",
    },
    isMandatory: true,
    questions: "Customer name",
    initials: true,
  },
  {
    id: 5,
    updateId: new Date().toISOString() + 2,
    componentType: {
      id: 6,
      icon: {},
      label: "Mobile field",
    },
    isMandatory: true,
    questions: "Phone number",
    initials: true,
  },
  {
    id: 2,
    updateId: new Date().toISOString() + 3,
    componentType: {
      id: 2,
      icon: {},
      label: "Dropdown",
    },
    isMandatory: true,
    questions: "Product Name",
    initials: true,
  },
];

export function CreateNewWebform(props: webFormProps): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;
  const {
    isLoading,
    modudlelist,
    formBasicInfo,
    dropDownValue,
    updateComponents,
    drpDownOptions,

    setLoading,
    setHandleAddDropVal,
    setHandleAddDropDownVal,
    setHandleDeleteDropItem,
    setHandleDeleteComponents,
    setHandleUpdateComponents,
    setHandleAddComponents,
    setHandleAddComponetInfo,
    setHandleInitialComponents,
    setHandleBasicInfo,
    getWebFormModuleList,
    addBrandWebForms,
    updateBrandWebForm,
    getWebFormStatusList,
    clearAll,
    setValueHandlePreviewForms,
    setDefaultProduct
  } = useBrandWebForm();

  const { productList, getProductList } = useProductStore();

  const navigate = useNavigate();
  const { state } = useLocation();

  const [fieldComponets, setFieldComponet] = useState<any[]>(components);
  const [error, setError] = useState({ formName: "", category: "" });

  const [openAlert, setOpenAlert] = useState(false);
  const [showInputDropDownValue, setShowInputDropDownValue] = useState(false);
  const [variant, setVariant] = useState(false)
  const customerList = modudlelist?.map((list) => ({
    label: list?.name,
    value: list?.id,
  }));

  const validateFormInfo = () => {
    let isValid = true;

    if (!formBasicInfo?.formName && !formBasicInfo?.formCategory?.label) {
      isValid = false;
      setError({
        formName: "Form name is Required",
        category: "Form Category is Required",
      });
    }
    if (!formBasicInfo?.formName && formBasicInfo?.formCategory?.label) {
      isValid = false;
      setError({ formName: "Form name is Required", category: "" });
    }
    if (formBasicInfo?.formName && !formBasicInfo?.formCategory?.label) {
      isValid = false;
      setError({ formName: "", category: "Form Category is Required" });
    }
    if (formBasicInfo?.formName && formBasicInfo?.formCategory?.label) {
      isValid = true;
      setError({ formName: "", category: "" });
    }

    return { isValid };
  };

  const handlePublish = async () => {
    setLoading(true);
    const { isValid } = validateFormInfo();
    if (isValid) {
      const resStatus: any = state?.id
        ? await updateBrandWebForm(state?.id, 1)
        : await addBrandWebForms(1);

      if (resStatus == 200) {
        navigate(-1);
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
      setTimeout(() => { setLoading(false) }, 900)
    }
  };

  const handleCancel = () => {
    setOpenAlert(true);
  };

  const handleSaveDraft = async () => {
    const resStatus: any = state?.id
      ? await updateBrandWebForm(state?.id, 5)
      : await addBrandWebForms(5);

    if (resStatus == 200) {
      navigate(-1);
    }
  };

  const handleImageUpload = async (e: any) => {
    // const image = await fileUploadFetch({
    //   file: e?.target?.files[0],
    // });
    const image = "";
    const fileType = e?.target?.files[0]?.type.replace(/^.*\//, "");

    const response = await fetch(image);
    const blob = await response.blob();
    const sizeInBytes = blob.size;
    const sizeInKB = sizeInBytes / 1024; // convert to KB
    const sizeInMB = sizeInKB / 1024;
    console.log(fileType, sizeInMB);
  };

  const handleOnDragEndField = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(fieldComponets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFieldComponet(items);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(updateComponents);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setHandleUpdateComponents(items);
  };

  const handleAddDropDownVal = (key: string, id: number) => {
    setShowInputDropDownValue(false);
    setHandleAddDropDownVal(key, id);
  };

  const handleAddNewDropVal = () => {
    setShowInputDropDownValue(true);
  };

  const renderComponents = (
    type: number,
    updateId: number,
    item: ListCompo
  ) => {
    switch (type) {
      case 1:
        return (
          <InputFeildComponent
            required={item?.isMandatory}
            inputValue={item?.questions}
            labelName="Type question here"
            handleInputChange={(value: string) =>
              !item?.initials &&
              setHandleAddComponetInfo(`questions`, updateId, value)
            }
          />
        );
      case 2:
        return (
          <>
            <InputFeildComponent
              required={item?.isMandatory}
              inputValue={item?.questions}
              labelName="Type question here"
              handleInputChange={(value: string) =>
                setHandleAddComponetInfo(`questions`, updateId, value)
              }
            />
            <Typography mt={"1.2rem"} sx={webFormStyle.selectLabelStyle}>
              Upload warranty document
            </Typography>
            <Stack mt={"1.2rem"} gap={"1.2rem"}>
              {item?.dropDownOption &&
                item?.dropDownOption?.map((item, i: number) => (
                  <Box key={i} sx={webFormStyle.listStyle}>
                    <Typography sx={webFormStyle.selectLabelStyle}>
                      {item?.label}
                    </Typography>
                    <IconButton
                      sx={{ cursor: "pointer" }}
                      onClick={() => setHandleDeleteDropItem(i, updateId)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                ))}
            </Stack>
            {showInputDropDownValue && (
              <Stack mt={"1.2rem"}>
                <InputFeildComponent
                  required={item?.isMandatory}
                  inputValue={dropDownValue}
                  labelName="Type here"
                  handleInputChange={(value: string) =>
                    setHandleAddDropVal(value)
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleAddDropDownVal(`dropDownOption`, updateId)
                        }
                        position="end"
                      >
                        <Typography
                          sx={{
                            ...webFormStyle.selectLabelStyle,
                            color: "#0E70EB",
                          }}
                        >
                          Add
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            )}
            {!showInputDropDownValue && (
              <Stack
                sx={webFormStyle.addNewContainer}
                onClick={handleAddNewDropVal}
              >
                <Box>
                  <AddRoundedIcon />
                </Box>
                <Typography
                  sx={{
                    ...webFormStyle.selectLabelStyle,
                    color: "#0E70EB",
                    mt: "-0.4rem",
                  }}
                >
                  Add value
                </Typography>
              </Stack>
            )}
          </>
        );
      case 3:
        return (
          <>
            <InputFeildComponent
              required={item?.isMandatory}
              inputValue={item?.questions}
              labelName="Type question here"
              handleInputChange={(value: string) =>
                setHandleAddComponetInfo(`questions`, updateId, value)
              }
            />
            {/* <FileUpload
              variant={3}
              setTotalFileSelected={setTotalFileSelected}
              onClickUpload={(file: any) => handleImageUpload(file?.event)}
              TotalFileSelected={totalFileSelected}
              isMultiple={false}
              maxSize={"1MB"}
              removeIcon={<></>}
              allowedTypes={["jpg", "jpeg", "png", "svg", "pdf"]}
              fileSizeErrorMsg={"File size is exceeded 1MB"}
              errorMsgStyle={{ color: "red" }}
              errorStyle={{ color: "red" }}
              fileTypeErrorMsg={"File type not allowed types"}
              uploadButtonText={"Upload"}
              uploadButtonStyle={webFormStyle.uploadButtonStyle}
              cardStyle={webFormStyle.cardStyle}
              placeHolder={"Drag and drop your file here"}
              placeHolderStyle={webFormStyle.placeHolderStyle}
              isOrPlaceholder
              bottomRenderComponent={<>{"Max file size-3 MB"}</>}
              bottomRenderComponentStyle={
                webFormStyle.bottomRenderComponentStyle
              }
              bottomTextLabel={"JPG, PNG only"}
              bottomTextLabelStyle={webFormStyle.bottomTextLabelStyle}
              startIcon={<UploadDocumentIcon />}
              showUploadFile={true}
              selectedFileUrl={""}
              rootStyle={webFormStyle.bannerComponentContainer}
            /> */}
            <Box sx={{ mt: 2 }}>
              <FileUpload
                isViewOnly={true}
                placeholder="Drag and drop your file here"
                files={null}
                uploadButtonText={"Upload"}
                bottomTextLabel={"JPG, PNG only"}
                handleFileChange={() => undefined}
                handleDeleteFile={() => undefined}
                startIcon={<UploadDocumentIcon />}
                buttonStyle={webFormStyle.uploadButtonStyle}
                bottomTextLabelStyle={webFormStyle.bottomTextLabelStyle as any}
                bottomRenderText={"Max file size-3 MB"}
              />
            </Box>
          </>
        );
      case 4:
        return (
          <InputFeildComponent
            required={item?.isMandatory}
            inputValue={item?.questions}
            labelName="Type question here"
            handleInputChange={(value: string) =>
              setHandleAddComponetInfo(`questions`, updateId, value)
            }
            InputProps={{
              endAdornment: (
                <Box>
                  {" "}
                  <CalenderIcon />
                </Box>
              ),
            }}
            sx={{ marginBottom: 2 }}
          // onClick={handleClickDateInput}
          />
        );
      case 5:
        return (
          <>
            <Stack direction={"row"} columnGap={2}>
              <InputFeildComponent
                required={item?.isMandatory}
                inputValue={item?.questions}
                labelName="Button Text"
                handleInputChange={(value: string) =>
                  setHandleAddComponetInfo(`questions`, updateId, value)
                }
              // sx={{ marginBottom: 2 }}
              />
              <InputFeildComponent
                required={item?.isMandatory}
                inputValue={item?.buttonLink ? item?.buttonLink : ""}
                labelName="Landing url"
                handleInputChange={(value: string) =>
                  setHandleAddComponetInfo(`buttonLink`, updateId, value)
                }
                sx={{ marginBottom: 2 }}
                isErrorRequired={false}
              />
            </Stack>
            <Checkbox
              id={"Checkbox_i"}
              size={"medium"}
              label={"Make as primary button"}
              icon={<EmptyCheckedIcon />}
              checkedIcon={<CheckedWithTick />}
              labelStyle={componentStyle.labelStyle}
              checked={item?.isPrimary}
              onChange={(e) => setValueHandlePreviewForms(
                "isPrimary",
                item?.updateId,
                e.target.checked
              )}
              indeterminate={false}
            />
          </>
        );
      case 6:
        return (
          <InputFeildComponent
            required={item?.isMandatory}
            inputValue={item?.questions}
            labelName="Type question here"
            handleInputChange={(value: string) =>
              !item?.initials &&
              setHandleAddComponetInfo(`questions`, updateId, value)
            }
          />
        );
    }
  };

  useEffect(() => {
    getWebFormModuleList();
    getWebFormStatusList();
    if (!state?.id) {
      setHandleUpdateComponents([...InitialComponets] as any);
    }
  }, []);

  // INITIAL CALL GET PRODUCTLIST
  // useEffect(() => {
  //   getProductList(0, 10, "", "", {}, []);
  //   if (productList?.data?.rows) {
  //     const dropOp = productList?.data?.rows?.map((item: any) => ({ label: item?.product_name }))
  //     setDefaultProduct(dropOp)
  //     handleAddDropDownVal(`dropDownOption`, InitialComponets?.[2]?.updateId)
  //   }
  // }, [productList?.status])

  return (
    <Box
      sx={[
        {
          ...webFormStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <TopBar
        title={state?.id ? `${state?.formName}` : "Create new webform"}
        backBtn={true}
        backBtnFunc={() => setOpenAlert(true)}
        outlineButtonText="Cancel"
        handleClickOutlineButton={() => handleCancel()}
        containButtonText={
          isLoading ? (
            <CircularProgress size={20} sx={{ color: "#ffff" }} />
          ) : state?.id ? (
            "Update form"
          ) : (
            ("Publish form" as any)
          )
        }
        handleClickContainButton={() => handlePublish()}
      />
      <Stack sx={webFormStyle.formContainerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={2.8}>
            <Stack sx={webFormStyle.infoCntainer}>
              <Box>
                <Typography sx={webFormStyle.titleStyle}>
                  Basic information
                </Typography>
                <Box mt={2}>
                  <InputFeildComponent
                    error={Boolean(error?.formName)}
                    inputValue={formBasicInfo?.formName}
                    labelName="Form Name"
                    handleInputChange={(value: string) =>
                      setHandleBasicInfo("formName", value)
                    }
                  />
                </Box>
                <Box mt={2}>
                  <SelectAndautocomplete
                    options={customerList}
                    variant="filled"
                    limitTags={1}
                    onChange={(e: any, val: any) => {
                      setHandleBasicInfo("formCategory", val);
                    }}
                    value={formBasicInfo?.formCategory}
                    label={"Form Category"}
                    labelSx={webFormStyle.selectLabelStyle}
                    placeholder=""
                    isError={Boolean(error?.category)}
                    optionStyle={{ fontSize: "1.4rem" }}
                    labelStyleProps={{ fontSize: "1.6rem !important" }}
                    sx={{ ...webFormStyle.selectinptStyle, mb: 2 }}
                  />
                </Box>
              </Box>
              <Box mt={0}>
                <Typography sx={webFormStyle.titleStyle}>
                  Form components
                </Typography>
                <Stack sx={webFormStyle.componetContainer} mt={"1.2rem"}>
                  <DragDropContext onDragEnd={handleOnDragEndField}>
                    <Droppable droppableId="updateFeild">
                      {(provided: any) => (
                        <Stack sx={webFormStyle.componetContainer} ref={provided.innerRef}>

                          {fieldComponets?.map((item, i) => {
                            return (
                              <Draggable
                                key={item?.id}
                                draggableId={String(item?.id)}
                                index={i}
                              >
                                {(provided: any) => (
                                  <Box
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Box
                                      key={item?.id}
                                      sx={webFormStyle.components}
                                      onClick={() => setHandleAddComponents(item, i)}
                                    >
                                      <Box>{item?.icon}</Box>
                                      <Typography sx={webFormStyle.componentName}>
                                        {item?.label}
                                      </Typography>
                                    </Box>

                                  </Box>
                                )}
                              </Draggable>
                            )
                          })}

                          {provided.placeholder}
                        </Stack>

                      )}
                    </Droppable>
                  </DragDropContext>
                  {/* {components?.map((item, i) => (
                    <IconButton
                      key={item?.id}
                      sx={webFormStyle.components}
                      onClick={() => setHandleAddComponents(item, i)}
                    >
                      <Box>{item?.icon}</Box>
                      <Typography sx={webFormStyle.componentName}>
                        {item?.label}
                      </Typography>
                    </IconButton>
                  ))} */}
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6.4}>
            <Stack
              sx={{
                ...webFormStyle.infoCntainer,
                backgroundColor: "",
                padding: 0,
              }}
            >
              {InitialComponets?.length !== 0 ? (
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="updateComponents">
                    {(provided: any) => (
                      <Stack
                        sx={{ width: "100%" }}
                        gap={"1.2rem"}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {updateComponents &&
                          updateComponents?.length > 0 &&
                          updateComponents?.map((item, index) => {
                            return (
                              <Draggable
                                key={item?.id}
                                draggableId={String(item?.id)}
                                index={index}
                              >
                                {(provided: any) => (
                                  <Box
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <ComponentLayout
                                      key={item?.id}
                                      showMandatory={
                                        item?.componentType?.id !== 5
                                      }
                                      isDelete={!item?.initials}
                                      isDisabledSelect={item.initials}
                                      isMandatory={item?.isMandatory}
                                      setHandleMandatory={(e) =>
                                        !item?.initials &&
                                        setHandleAddComponetInfo(
                                          `isMandatory`,
                                          item?.updateId,
                                          e?.target?.checked
                                        )
                                      }
                                      componentVal={item?.componentType}
                                      setCmponetVal={(val) =>
                                        !item?.initials &&
                                        setHandleAddComponetInfo(
                                          "componentType",
                                          item?.updateId,
                                          val
                                        )
                                      }
                                      componentsList={inputComponents}
                                      childrenComponents={renderComponents(
                                        item?.componentType?.id,
                                        item?.updateId,
                                        item
                                      )}
                                      handleDeleteComponets={() =>
                                        !item?.initials &&
                                        setHandleDeleteComponents(index)
                                      }
                                    />
                                  </Box>
                                )}
                              </Draggable>
                            );
                          })}
                        {provided.placeholder}
                      </Stack>
                    )}
                  </Droppable>
                </DragDropContext>
              ) : (
                <Box sx={webFormStyle.previewContainer}>
                  <Box>
                    <Handicon />
                  </Box>
                  <Typography
                    sx={webFormStyle.componentName}
                    width={"28rem"}
                    fontWeight={800}
                  >
                    Select or drag any form components to customize the fields
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>
          <Grid item xs={2.8}>
            <Stack sx={{ ...webFormStyle.infoCntainer, p: 0 }}>
              <Typography sx={webFormStyle.customerPreview}>
                Customer Preview
              </Typography>
              {InitialComponets?.length !== 0 ? (
                <Stack
                  p={"1.6rem 1.6rem 1.6rem 1.6rem"}
                  sx={webFormStyle.spaceContainer}
                >
                  <Box>
                    {updateComponents &&
                      updateComponents?.length > 0 &&
                      updateComponents?.map((item) =>
                        renderPreviewComponents(item, '', variant)
                      )}

                  </Box>
                </Stack>
              ) : (
                <Stack sx={webFormStyle.previewContainer}>
                  <Box sx={webFormStyle.previewContainer}>
                    <Box>
                      <CustomerPreviewEmptyIcon />
                    </Box>
                    <Typography
                      sx={{
                        ...webFormStyle.componentName,
                        width: { md: "13rem", lg: "20rem" },
                      }}
                    >
                      Customize the fields to show the preview here
                    </Typography>
                  </Box>
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      {/** open alert modal */}
      <DialogBox
        title={""}
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        titleVariant={"inherit"}
        maxWidth="sm"
        titleStyle={{ display: "none" }}
        closeIcon={false}
        dialogBodyStyle={webFormStyle.mismatchDialog}
        dialogmodalBoxStyle={webFormStyle.mismatchDialogBodySx}
        Body={
          <>
            <Stack sx={webFormStyle.mismatchBodyContainer}>
              <Box sx={webFormStyle.warnigIconStle}>
                <Triangle />
              </Box>
              <Typography sx={webFormStyle.breakdownTitle}>
                {" "}
                Save form as draft ?
              </Typography>
              <Typography
                textAlign={"center"}
                mt={"1rem"}
                sx={webFormStyle.stockInKeyText}
              >
                Are you sure want to cancel the form or save as draft
              </Typography>
              <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                <BasicButton
                  sx={{
                    ...webFormStyle.missMatchButtonStyle,
                    borderColor: "custom.surfaceBlue",
                  }}
                  variant="outlined"
                  onClick={() => { setOpenAlert(false), navigate(-1) }}
                >
                  Discard
                </BasicButton>

                <BasicButton
                  sx={{
                    ...webFormStyle.missMatchButtonStyle,
                    ":hover": {
                      backgroundColor: "custom.surfaceBlue",
                    },
                    backgroundColor: "custom.surfaceBlue",
                  }}
                  variant="contained"
                  rootSx={{ width: "100%" }}
                  onClick={() => handleSaveDraft()}
                >
                  {isLoading ? (
                    <CircularProgress size={20} sx={{ color: "#ffff" }} />
                  ) : (
                    "Save draft"
                  )}
                </BasicButton>
              </Stack>
            </Stack>
          </>
        }
      />
    </Box>
  );
}
