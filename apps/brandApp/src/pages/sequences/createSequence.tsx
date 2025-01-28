import { brandRoutes } from "@core/routes";
import { useBroadCastMessage, useOffersStore, useSequenceStore } from "@core/store";
import { TopBar } from "@core/ui/components";
import { localStorageKeys } from "@core/utils";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { Checkbox } from "@crayond_dev/ui_checkbox";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { RadioButton } from "@crayond_dev/ui_radio-button";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputFeildComponent from "@pages/brandCreateWebForm/components/inputFeild";
import { ChooseTemplate } from "@pages/broadcastMessage/helperComponents/selectTemplate";
import Templats from "@pages/broadcastMessage/helperComponents/templats";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddRoundedIcon from "../../assets/addRounded";
import CheckedIcon from "../../assets/checkedIcon";
import CheckIcon from "../../assets/checkIcon";
import DeleteIcon from "../../assets/delete";
import DuriationIcon from "../../assets/duriation";
import Triangle from "../../assets/triangle";
import { Templates } from "./helperComponents/template";
import { sequencestyle } from "./style";
import { EmptyCheckedIcon } from "../../assets/emptyCheck";
import { CheckedWithTick } from "../../assets/checkWithTick";

const Root = styled("div")(({ theme }) => ({
  width: "40%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));


const radioOptions = [
  {
    label: "Match any of the conditions",
    value: 1,
  },
  {
    label: "Match all of the conditions",
    value: 2,
  },
];

const conditionOptions = [
  {
    "label": "Location",
    "value": "location"
  },
  {
    "label": "Customer tag",
    "value": "customer_tag"
  },
  {
    "label": "Product name",
    "value": "product_name"
  },
  {
    "label": "Month of purchase",
    "value": "month_of_purchase"
  },
  {
    "label": "Categories",
    "value": "categories"
  },
  {
    "label": "Warranty end month",
    "value": "warranty_end_month"
  },
  {
    "label": "Warranty status",
    "value": "warranty_status"
  }
]

const isConditonOption = [
  {
    label: "Is",
    value: 1,
  },
  {
    label: "Is Not",
    value: 2,
  },
];
const CreateSequence = () => {

  const { sequenceState,
    handleBasicInfo,
    getDaysData,
    getDurationData,
    handleConditionData,
    handleTemplateData,
    createSequence,
    addCondition,
    setDeclareVariable,
    setFieldError,
    currentTemplateIndexFnc,
    error, handleDeleteCondition, addTemplate, handleDeleteTemplate, clearField, clearDialog, handleDialogData, updateModalDataToStore } = useSequenceStore()
  const { basicInfo, daysData, conditions, conditionData, messageData, templateData, dialogData } = sequenceState
  const { broadCasteState, setSelectTemplates, setHandleSearch, getTemplateList } = useBroadCastMessage();
  const { exchangeBrandList, getExchangeBrandList } = useOffersStore()

  const navigate = useNavigate();
  const [openTemp, setOpenTemp] = useState(false);
  const [step, setstep] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);

  const handleChooseTemplate = (val: boolean, item: any) => {
    const changeSelect = dialogData?.templateList?.find((list: any) => {
      if (list.id === item?.id) {
        list.select = val;
        return true;
      } else {
        list.select = false;
      }
      return false;
    });

    handleDialogData('template_id', changeSelect?.id);
    handleDialogData('template_json', changeSelect);
  };


  const handleOpenPickTemplate = (index: any) => {
    currentTemplateIndexFnc(index)
    setOpenTemp(true);

  };


  const token = localStorage?.getItem(localStorageKeys.authToken)
  const brandId = exchangeBrandList?.brand?.id


  const handleCancelDialog = () => {
    setOpenTemp(false), setstep(1), clearDialog()
    getTemplateList(brandId)
  }

  const handleDiscard = () => {
    setOpenAlert(false)
  };

  const handleDraft = () => {
    navigate(-1),
      clearField()
  };

  const validateValues = () => {
    let isValid = true;
    if (basicInfo?.name === '') {
      setFieldError("name", "Name is required");
      isValid = false;
    }
    if (basicInfo?.days?.label === '') {
      setFieldError("days", "Days is required");
      isValid = false;
    }
    if (templateData?.[0]?.duration_number === '') {
      setFieldError("duration_number", "Send number is required");
      isValid = false;
    }
    if (templateData?.[0]?.duration_type?.label === '') {
      setFieldError("duration_type", "Duration is required");
      isValid = false;
    }
    if (sequenceState?.conditions?.[0]?.condition_logic === '') {
      setFieldError("condition_logic", "Condition is required");
      isValid = false;
    }
    if (sequenceState?.conditions?.[0]?.condition_type === '') {
      setFieldError("condition_type", "Condition is required");
      isValid = false;
    }
    if (sequenceState?.conditions?.[0]?.condition_value === '') {
      setFieldError("condition_value", "Condition is required");
      isValid = false;
    }
    if (sequenceState?.templateData?.[0]?.template_id === '') {
      setFieldError("template_id", "Template is required");
      isValid = false;
    }
    return isValid;
  };

  const handleChangeTemp = () => {
    setOpenTemp(true)
  }

  const handleClickSave = () => {
    if (validateValues()) {
      createSequence()
      navigate(brandRoutes?.sequences)
      clearField()
      clearDialog()
    }
  }

  const daysOptions = daysData?.rows?.map((val: any) => ({
    label: val?.name,
    value: val?.id,
  })) ?? [];


  const constructDropdownData = (data: { map: (arg0: (val: any) => { label: any; value: any; }) => never[]; }) => {
    const selectOptions = data?.map((val: any) => ({
      label: val?.name,
      value: val?.id,
    })) ?? [];
    return selectOptions
  }


  const templateList = broadCasteState?.templatesList?.rows?.map((val: any) => {
    return {
      id: val?.id ?? '',
      title: val?.name ?? '',
      status: val?.status?.status === "Approved" ? true : true,
      select: false,
      chats: [
        {
          message: val?.template_json?.find((val: any) => val?.type === 'BODY')?.text
        },
      ],
    }
  })

  const selectTemp = templateList?.find((item: any) =>
    dialogData?.template_id?.includes(item.id)
  );

  const handleSaveDialog = () => {
    if (step === 1) {
      selectTemp?.id && setstep(step + 1)
    } else if (step === 2) {
      updateModalDataToStore()
      getTemplateList(brandId)
      setOpenTemp(false)
      clearDialog()
      setstep(1)
    }
  }

  useEffect(() => {
    getDaysData();
  }, []);

  useEffect(() => {
    const trueIds: any = dialogData?.templateList
      ?.filter((item: any) => item.select === true)
      ?.map((item: any) => item.id);
    handleDialogData('template_id', trueIds)
  }, []);

  useEffect(() => {
    if (broadCasteState?.templatesList?.count > 0) {
      const templateList = broadCasteState?.templatesList?.rows?.map((val: any) => {
        return {
          ...val,
          id: val?.id ?? '',
          title: val?.name ?? '',
          status: val?.status?.status === "Approved" ? true : true,
          select: false,
          chats: [
            {
              message: val?.template_json?.find((val: any) => val?.type === 'BODY')?.text
            },
          ],
        }
      })
      handleDialogData('templateList', templateList)

    }
  }, [broadCasteState?.templatesList])

  useEffect(() => {
    getDurationData()
  }, [broadCasteState?.search])


  useEffect(() => {
    getExchangeBrandList(token);
    if (brandId) {
      getTemplateList(brandId)
    }
  }, [token, brandId, broadCasteState?.search])

  return (
    <Box>
      <TopBar
        title="Create new sequence"
        backBtn={true}
        backBtnFunc={() => { navigate(-1), clearField() }}
        containButtonText="Save"
        outlineButtonText="Cancel"
        rootStyle={{ zIndex: 1 }}
        handleClickContainButton={() => handleClickSave()}
        handleClickOutlineButton={() => setOpenAlert(true)}
      />
      <Stack sx={sequencestyle.rootCreateCntainer}>
        <Stack sx={sequencestyle.createSequenceCardStyle} mb={"20px !important"}>
          <Typography sx={sequencestyle.titleStyle} mb={"1rem"}>
            Basic information
          </Typography>
          <Stack direction="row" spacing={2}>
            <InputFeildComponent
              required={false}
              inputValue={basicInfo?.name ?? ''}
              labelName="Sequence name"
              handleInputChange={(e) => handleBasicInfo('name', e)}
              error={error?.name?.length ? true : false}
              errorMessage={error?.name}
              isErrorRequired={error?.name?.length ? true : false}

            />
            <SelectAndautocomplete
              options={daysOptions}
              variant="filled"
              selectType="chip"
              placeholder={""}
              multiple
              limitTags={3}
              optionSelectedIconShow={false}
              onChange={(e: any, value: any) => handleBasicInfo('days', value)}
              value={basicInfo?.days ?? {}}
              label={"Select delivery days"}
              isError={error?.days?.length ? true : false}
              helperText={error?.days}
              optionStyle={{ fontSize: "1.4rem" }}
              labelSx={{ fontSize: "2.2rem" }}
              labelStyleProps={{
                fontSize: "1.6rem !important",
                color: "#4E585E",
              }}
              sx={sequencestyle.selectinptStyle}
            />
          </Stack>
          {/* <Stack direction={'row'} columnGap={0} alignItems={'center'} mt={1}>
            <Checkbox
              id={"Checkbox_i"}
              size={"medium"}
              label={""}
              icon={<EmptyCheckedIcon />}
              checkedIcon={<CheckedWithTick />}
              checked={basicInfo?.allowEntry}
              labelStyle={{ display: "none" }}
              onChange={(e) => handleBasicInfo('allowEntry', e.target.checked)}
              indeterminate={false}
            />
            <Typography ml={-2} sx={sequencestyle.subTitle}>
              Allow user to enter this sequence only once
            </Typography>
          </Stack> */}
          <Typography sx={sequencestyle.subTitle} mt={1.5}>
            Set conditions to start sequence
          </Typography>
          <Stack sx={sequencestyle.formlayout} mt={"1rem"}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
            >
              <Grid item xs={12} display={'flex'} direction={"row"} alignItems={"center"} gap={"2rem"}>
                {radioOptions.map(
                  (
                    val: { label: string; value: string | number },
                    index: number
                  ) => {
                    return (
                      <RadioButton
                        key={index}
                        buttonRootStyle={{
                          p: 0,
                        }}
                        activeBtnColor={"#1363DF"}
                        radioBtnSize={22}
                        checked={basicInfo?.is_match_all_conditions === val?.value}
                        label={val.label}
                        icon={undefined}
                        // disabled={basicInfo?.is_match_all_conditions ? true : false}
                        handleChange={(e) => {
                          handleBasicInfo('is_match_all_conditions', val?.value)
                        }}
                        value={undefined}
                        checkedIcon={undefined}
                        rootButtonId={""}
                        defaultBtnColor={""}
                        labelRootStyle={null}
                        labelFontColor={""}
                        labelFontSize={""}
                        labelPlacement={undefined}
                      />
                    );
                  }
                )}
              </Grid>
              {/** forms  */}
              {sequenceState?.conditions?.map((items: any, index: any) => (
                <>
                  <Grid item xs={2} sm={4} md={4}>
                    <Stack sx={sequencestyle.itemContiner}>
                      <Typography sx={sequencestyle.subTitle}>If</Typography>
                      <SelectAndautocomplete
                        options={conditionOptions}
                        variant="filled"
                        limitTags={1}
                        onChange={(e, val) => handleConditionData("condition_type", val, index)}
                        value={items?.condition_type}
                        label={"Select condition"}
                        labelSx={sequencestyle.selectLabelStyle}
                        placeholder=""
                        isError={error?.condition_logic?.length ? true : false}
                        optionStyle={{ fontSize: "1.4rem" }}
                        labelStyleProps={{ fontSize: "1.6rem !important" }}
                        sx={{ ...sequencestyle.selectinptStyle }}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <SelectAndautocomplete
                      options={isConditonOption}
                      variant="filled"
                      limitTags={1}
                      onChange={(e, val) => handleConditionData("condition_logic", val, index)}
                      value={items?.condition_logic}
                      label={"Select condition"}
                      labelSx={sequencestyle.selectLabelStyle}
                      placeholder=""
                      isError={error?.condition_type?.length ? true : false}
                      optionStyle={{ fontSize: "1.4rem" }}
                      labelStyleProps={{ fontSize: "1.6rem !important" }}
                      sx={{ ...sequencestyle.selectinptStyle }}
                    />
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Stack sx={sequencestyle.itemContiner}>
                      <SelectAndautocomplete
                        options={Array.isArray(items?.dropdownData) && items?.dropdownData?.length > 0 ? constructDropdownData(items?.dropdownData) : []}
                        variant="filled"
                        limitTags={1}
                        onChange={(e, val) => handleConditionData("condition_value", val, index)}
                        value={items?.condition_value}
                        label={"Select condition"}
                        labelSx={sequencestyle.selectLabelStyle}
                        placeholder=""
                        isError={error?.condition_value?.length ? true : false}
                        optionStyle={{ fontSize: "1.4rem" }}
                        labelStyleProps={{ fontSize: "1.6rem !important" }}
                        sx={{ ...sequencestyle.selectinptStyle }}
                      />
                      {

                        sequenceState?.conditions?.length > 1 &&
                        <IconButton onClick={() => handleDeleteCondition(index)}>
                          <DeleteIcon />
                        </IconButton>
                      }
                    </Stack>
                  </Grid>
                  {sequenceState.conditions.length !== index + 1 && (
                    <Grid item xs={12}>
                      <Stack sx={sequencestyle.centerAlign}>
                        <Root>
                          <Divider
                            sx={{
                              ...sequencestyle.subTitle,
                              columnGap: "1.6rem",
                            }}
                          >
                            {sequenceState?.basicInfo.is_match_all_conditions === 1 ? 'OR' : "AND"}
                          </Divider>
                        </Root>
                      </Stack>
                    </Grid>
                  )}
                </>
              ))}
            </Grid>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid sx={sequencestyle.footerButton} item xs={2} sm={4} md={4}>
                <BasicButton
                  variant="text"
                  sx={sequencestyle.addNewConditionStyle}
                  onClick={() => addCondition()}
                  startIcon={<AddRoundedIcon />}
                >
                  Add new condition
                </BasicButton>
              </Grid>
            </Grid>
          </Stack>
        </Stack>

        {sequenceState?.templateData?.map((items: any, index: number) => (
          <>
            <Box>
              <Templates
                items={items}
                index={index}
                chatList={items}
                handleDeleteTemplate={() => handleDeleteTemplate(index)}
                handleOpenPickTemplate={handleOpenPickTemplate}
                handleChangeTemp={handleChangeTemp}
              // if need validate pick template button style 
              // pickBtnStyle={error?.template_id?.length ? { borderColor: "red",color:"red" } : {}}
              />
            </Box>
            {
              sequenceState?.templateData?.length > 1 && index !== templateData.length - 1 && (<>
                <Stack sx={sequencestyle.centerAlign} width={"100%"} mt={0}>
                  <Divider orientation="vertical" sx={{ height: "30px" }}></Divider>
                  <BasicButton
                    startIcon={<DuriationIcon />}
                    disableRipple
                    sx={sequencestyle.dividerStepStyle}
                    onClick={() => addTemplate(index)}
                  >
                    After {`${items?.duration_number + ' ' + items?.duration_type?.label}`}
                  </BasicButton>
                  <Divider orientation="vertical" sx={{ height: "30px" }}></Divider>
                </Stack>
              </>)
            }
          </>
        ))}

        {sequenceState?.templateData?.length !== 0 && (
          <Stack sx={sequencestyle.centerAlign} width={"100%"}>
            <Divider orientation="vertical" sx={{ height: "30px" }}></Divider>
            <BasicButton
              disableRipple
              sx={sequencestyle.addStepStyle}
              onClick={() => addTemplate()}
            >
              Add step
            </BasicButton>
          </Stack>
        )}
      </Stack>

      <DialogBox
        title={step === 1 ? "Choose Template" : "Preview"}
        closeIcon={<></>}
        titleStyle={sequencestyle.addNewModalTitleStyle}
        open={openTemp}
        handleClose={() => setOpenTemp(false)}
        titleVariant={"inherit"}
        maxWidth="xs"
        dialogmodalBoxStyle={sequencestyle.teplateDialogmodalBoxSx}
        Body={
          <>
            {step === 1 ?
              <>
                <Grid container sx={sequencestyle.gridContainer} mt={"1.2rem"}>
                  <Grid item md={8} lg={9.8}>
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
                      rootStyle={sequencestyle.searchTemplateStyle}
                    />
                  </Grid>
                  <Grid item md={3.8} lg={2}>
                    {/* <BasicButton
                      variant="outlined"
                      sx={sequencestyle.outlneButonStyle}
                      onClick={() => undefined}
                    >
                      Add new template
                    </BasicButton> */}
                  </Grid>
                </Grid>

                <Stack mt={"1.2rem"}>
                  <Grid container gap={"1rem"}>
                    {dialogData &&
                      dialogData?.templateList?.length > 0 &&
                      dialogData?.templateList?.map((item: any) => (
                        <Grid item md={3.9}>
                          <Templats
                            title={item?.title}
                            status={item?.status}
                            select={item?.select}
                            chats={item?.chats}
                            setHandleSelect={(val) => handleChooseTemplate(val, item)}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Stack>
              </>
              :
              <Grid
                container
                sx={sequencestyle.gridContainer}
                gap={"2.4rem"}
                mt={"1.2rem"}
              >
                <Grid item md={4} display={'grid'} gap={2}>
                  {selectTemp &&
                    <Box >
                      <Templats
                        title={selectTemp?.title}
                        status={selectTemp?.status}
                        select={selectTemp?.select}
                        changeTemp={'Change'}
                        chats={selectTemp?.chats}
                        setHandleSelect={(val) => undefined}
                      // handleChangeTemp={() => handleChangeTemp()}
                      />
                    </Box>
                  }
                </Grid>
                <Grid item md={7.5}>
                  <Typography sx={sequencestyle.subTitle}>Variqables</Typography>
                  <Grid
                    container
                  >
                    <Grid
                      container
                      spacing={2}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Grid item xs={5.9} mt={2}>
                        <Box sx={sequencestyle.variableBox}>
                          <Typography sx={sequencestyle.varSx}>
                            {" "}
                            Variable Name
                          </Typography>
                          <Typography sx={sequencestyle.cusSx}>
                            Customer name
                          </Typography>
                        </Box>
                        <Box sx={sequencestyle.variableBox} mt={2}>
                          <Typography sx={sequencestyle.varSx}>
                            {" "}
                            Variable Name
                          </Typography>
                          <Typography sx={sequencestyle.cusSx}>Offer name</Typography>
                        </Box>
                        <Box sx={sequencestyle.variableBox} mt={2}>
                          <Typography sx={sequencestyle.varSx}>
                            {" "}
                            Variable Name
                          </Typography>
                          <Typography sx={sequencestyle.cusSx}>
                            Purchase date
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid xs={5.9} mt={2}>
                        <Stack mt={2} rowGap={2}>
                          <InputField
                            variant="filled"
                            label="Variable Value"
                            placeholder="Enter Customer Name"
                            fullWidth
                            onChange={(e) =>
                              setDeclareVariable("customerName", e.target.value)
                            }
                            value={sequenceState?.declareVariables?.customerName}
                            inputStyle={sequencestyle.inputStyle}
                            sx={sequencestyle.inputSxStyle}
                            labelStyle={sequencestyle.labelStyle}
                            errorStyle={{ fontSize: "1.0rem" }}
                            // disabled={viewType === 'view' ? true : false}
                            error={error?.customerName?.length ? true : false}
                            errorMessage={error?.customerName}
                            isErrorRequired={error?.customerName?.length ? true : false}
                          />
                          <InputField
                            variant="filled"
                            label="Variable Value"
                            placeholder="Enter Offer Name"
                            fullWidth
                            onChange={(e) =>
                              setDeclareVariable("offerName", e.target.value)
                            }
                            value={sequenceState?.declareVariables?.offerName}
                            inputStyle={sequencestyle.inputStyle}
                            sx={sequencestyle.inputSxStyle}
                            labelStyle={sequencestyle.labelStyle}
                            errorStyle={{ fontSize: "1.0rem" }}
                            error={error?.offerName?.length ? true : false}
                            errorMessage={error?.offerName}
                            isErrorRequired={error?.offerName?.length ? true : false}


                          />
                          <InputField
                            variant="filled"
                            label="Variable Value"
                            placeholder="Enter  Purchase date"
                            fullWidth
                            onChange={(e) =>
                              setDeclareVariable("maxPurchaseAmount", e.target.value)
                            }
                            value={sequenceState?.declareVariables?.maxPurchaseAmount}
                            inputStyle={sequencestyle.inputStyle}
                            sx={sequencestyle.inputSxStyle}
                            labelStyle={sequencestyle.labelStyle}
                            errorStyle={{ fontSize: "1.0rem" }}
                            error={error?.maxPurchaseAmount?.length ? true : false}
                            errorMessage={error?.maxPurchaseAmount}
                            isErrorRequired={error?.maxPurchaseAmount?.length ? true : false}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            }
          </>
        }
        footerComponent={
          <>
            <Box sx={sequencestyle.footerContainer}>
              <BasicButton
                sx={{ ...sequencestyle.outlneButonStyle, width: "100%" }}
                rootSx={{ width: "100%", borderRadius: "0.8rem" }}
                onClick={() => handleCancelDialog()}
                variant="outlined"
              >
                {"Cancel"}
              </BasicButton>
              <BasicButton
                sx={sequencestyle.addNewButonStyle}
                rootSx={{ width: "100%", borderRadius: "0.8rem" }}
                onClick={() => handleSaveDialog()}
              >
                {step === 1 ? "Next" : 'Save'}
              </BasicButton>
            </Box>
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
        dialogBodyStyle={sequencestyle.mismatchDialog}
        dialogmodalBoxStyle={sequencestyle.mismatchDialogBodySx}
        Body={
          <>
            <Stack sx={sequencestyle.mismatchBodyContainer}>
              <Box sx={sequencestyle.warnigIconStle}>
                <Triangle />
              </Box>
              <Typography sx={sequencestyle.breakdownTitle}>
                Save details as draft ?
              </Typography>
              <Typography
                textAlign={"center"}
                mt={"1rem"}
                sx={sequencestyle.stockInKeyText}
              >
                Are you sure want to cancel New sequence details & save as draft
              </Typography>
              <Stack direction={"row"} gap={2} mt={"2.4rem"}>
                <BasicButton
                  sx={{
                    ...sequencestyle.missMatchButtonStyle,
                    borderColor: "custom.surfaceBlue",
                  }}
                  variant="outlined"
                  onClick={handleDiscard}
                >
                  Discard
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
                  onClick={handleDraft}
                >
                  Dont Save
                </BasicButton>
              </Stack>
            </Stack>
          </>
        }
      />
    </Box >
  );
};

export default CreateSequence;
