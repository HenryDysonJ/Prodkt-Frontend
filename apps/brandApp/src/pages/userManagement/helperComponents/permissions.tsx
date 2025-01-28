import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Switch } from "@crayond_dev/ui_switch";
import { TextAreaAutoSize } from "@crayond_dev/ui_textarea-autosize";
import { TreeView } from "@crayond_dev/ui_tree-view";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import AddRoundedIcon from "../../../assets/addRounded";
import CollapseIcon from "../../../assets/collapseIcon";
import ExpandIcon from "../../../assets/expandIcon";
import InfoIcon from "../../../assets/infoIcon";
import SettingIcon from "../../../assets/settings";
import { userManagementStyle } from "../style";
import { PermissionList, TreeViewComponent } from "./comonents";
import { userManagementStore } from "@core/store";


const MenuOPtion = [
  {
    id: 1,
    label: "Edit",
  },
  // {
  //   id: 2,
  //   label: "Make active",
  // },
  // {
  //   id: 3,
  //   label: "Delete",
  // },
];



export const Permissions = () => {

  const { userManagementState,
    getPermissionData,
    setPermissionData,
    clearPermissionField,
    updatePermission,
    addPermission,
    setFieldError,
    error,
    deletePermissionData,
    setEditData,
    editPermission, type, setType, userStateUpdate } = userManagementStore()
  const { permissionData, permissionField, permissionDetailData, getPermissionCheckData } = userManagementState
  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [anchorElRow, setAnchorElRow] = useState<any>(null);
  const [selectedPermissionId, setSelectedPermissionId] = useState<number | null>(null);
  const [selectedPermissionData, setSelectedPermissionData] = useState<any>(null);
  const [isLoading, setisLoading] = useState(false);


  const [repolist, setRepolist] = useState<any>()
  const open = Boolean(anchorElRow);

  const handleClickDotMenu = (e: any, val: any) => {
    setAnchorElRow(e.currentTarget);
    setRepolist(val)
  };

  // set permission access function
  const handlePermissionAccess = (item: any) => {
    setisLoading(true);
    setTimeout(() => {
      userStateUpdate('getPermissionCheckData', item?.data?.data);
      userStateUpdate('selectedPermissionId', item?.id);
      setisLoading(false);
    }, 500);
  }

  // Permission label click
  const handleClicklabel = (e: any, permissionId: number, item: any) => {
    setSelectedPermissionId(permissionId);
    const selectedData = permissionData.find((val: any) => val.id === permissionId);
    setSelectedPermissionData(selectedData);
    handlePermissionAccess(item)
  };

  // Permission dot click menu
  const handleClickMenu = async (item: any) => {
    if (item?.id === 1) {
      setOpenAddTag(true)
      setEditData(repolist)
    }
    else if (item.id === 3) {
      deletePermissionData(repolist?.id)
    }
    setAnchorElRow(null);
  };

  // Handle close permission popover
  const handleClose = () => {
    setAnchorElRow(null);
    clearPermissionField()
    setRepolist('')
  };

  // Validate permission field
  const validate = () => {
    let isValid = true;
    if (permissionField?.name?.length === 0) {
      setFieldError('name', 'Permission name is required');
      isValid = false;
    }
    if (permissionField?.description?.length === 0) {
      setFieldError('description', 'Description is required');
      isValid = false;
    }
    return isValid;
  };
  // Save amd edit permission field dialog function
  const handleSavePermission = () => {
    setAnchorElRow(null)
    if (permissionField?.permission_id?.length > 0 && validate()) {
      editPermission()
      clearPermissionField()
      setOpenAddTag(false)
    }
    else if (validate()) {
      addPermission()
      clearPermissionField()
      setOpenAddTag(false)
    }
  }

  const handleCloseDialog = () => {
    setOpenAddTag(false)
    clearPermissionField()
    setRepolist('')
  }

  const getPermissionFn = () => {
    setisLoading(true);
    setTimeout(() => {
      getPermissionData()
      setisLoading(false);
    }, 500);
  }
  const handleConfirm = () => {
    updatePermission()
    handlePermissionAccess(selectedPermissionData);
  }

  const handleCancel = () => {
    getPermissionFn()
  }

  // Set initial permission data
  const initialData = async () => {
    const res: any = await getPermissionData();
    if (res?.status === 200) {
      userStateUpdate('getPermissionCheckData', res?.data?.data?.data?.[0]?.data?.data ?? []);
      userStateUpdate('selectedPermissionId', res?.data?.data?.data?.[0]?.id);
    }
  };

  useEffect(() => {
    initialData();
  }, []);


  useEffect(() => {
    getPermissionFn()
  }, [])

  useEffect(() => {
    if (permissionData && permissionData.length > 0) {
      setSelectedPermissionId(permissionData[0].id);
    }
  }, [permissionData]);


  return (
    <Stack
      sx={{
        ...userManagementStyle.rolesCardStyle,
        padding: "0",
        backgroundColor: "",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Stack sx={userManagementStyle.infoCntainer}>
            <Stack sx={userManagementStyle.repTitlecontainer}>
              <Typography sx={userManagementStyle.repTitle} fontWeight={600}>
                Permissions
              </Typography>
              <IconButton
                sx={{ p: "1.2rem" }}
                onClick={() => setOpenAddTag(true)}
              >
                <AddRoundedIcon />
              </IconButton>
            </Stack>
            <Stack p={"1.6rem"} rowGap={"0.6rem"} height="calc(100vh - 27rem)" overflow={'auto'}>
              {permissionData &&
                permissionData?.map((item: any, i: number) => (
                  <PermissionList
                    key={i}
                    color={item?.is_active}
                    bgcolor={item?.is_active}
                    lable={item?.name}
                    onClickMenu={(e) => handleClickDotMenu(e, item)}
                    onClickLabel={(e) => handleClicklabel(e, item.id, item)}
                    isSelected={selectedPermissionId === item.id}
                  />
                ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Stack sx={userManagementStyle.infoCntainer}>
            <Stack sx={userManagementStyle.repTitlecontainer}>
              <Typography sx={userManagementStyle.repTitle} fontWeight={600}>
                {selectedPermissionData?.name ?? ''}
              </Typography>
              <Stack direction={"row"} columnGap={1}>
                <BasicButton
                  variant="outlined"
                  sx={userManagementStyle.outlineButonStyle}
                  onClick={() => handleCancel()}
                >
                  Cancel
                </BasicButton>

                <BasicButton
                  variant="contained"
                  sx={userManagementStyle.addNewButonStyle}
                  rootSx={{ width: "100%" }}
                  onClick={() => handleConfirm()}
                >
                  Save
                </BasicButton>
              </Stack>
            </Stack>
            <Stack p={"1.6rem"}>

              {isLoading &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>

                  <CircularProgress color="inherit" sx={{ color: '#0E70EB' }} />
                </Box>}
              {!isLoading &&
                <TreeViewComponent
                  state={getPermissionCheckData ?? []}
                  checkboxsection={true}
                  setPermissionData={setPermissionData}
                />
              }
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Popover
        open={open}
        anchorEl={anchorElRow}
        onClose={handleClose}
        PaperProps={{
          sx: userManagementStyle.popoverStyle,
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
                ...userManagementStyle.viewTextStyle,
                color: item?.label === "Delete" ? "#F44F5A" : "#02111A",
              }}
              onClick={() => handleClickMenu(item)}
            >
              {item?.label}
            </Typography>
          ))}
      </Popover>

      <DialogBox
        title={repolist?.id?.length > 0 ? "Edit permission" : "Add permission"}
        titleStyle={userManagementStyle.addNewModalTitleStyle}
        open={openAddTag}
        handleClose={handleCloseDialog}
        titleVariant={"inherit"}
        maxWidth="xs"
        dialogmodalBoxStyle={userManagementStyle.dialogmodalpermissionBoxSx}
        Body={
          <Stack>
            <InputField
              variant="filled"
              label="Permission name"
              placeholder=""
              onChange={(e: any) => setPermissionData('name', e.target.value)}
              value={permissionField?.name ?? ''}
              isLabelRequired={false}
              helperText=""
              fullWidth
              required
              error={error?.name?.length ? true : false}
              errorMessage={error?.name}
              isErrorRequired={error?.name?.length ? true : false}
              errorStyle={{ fontSize: "1.0rem" }}
              inputStyle={{
                "& .MuiFilledInput-root.Mui-disabled": {
                  backgroundColor: "#E6EAEB !important",
                },
              }}
              sx={userManagementStyle.formInputStyle}
            />
            <TextAreaAutoSize
              error={error?.description?.length ? true : false}
              errorMessage={error?.description}
              multiline
              rows={5}
              placeholder="Add description"
              value={permissionField?.description ?? ''}
              onChange={(e: any) => setPermissionData('description', e.target.value)}
              variant="filled"
              label="Description"
              inputStyle={{
                mt: "1.6rem",
                width: "100%",
                "& .MuiFilledInput-root": {
                  borderColor: error.description?.length ? 'red' : '#E9E9E9'
                },
                '& textarea': {
                  overflow: 'scroll',
                },
              }}
            />
            <Switch
              sx={{ mt: "1.6rem", ml: "1rem" }}
              label={"Mark as active"}
              labelPlacement="end"
              isLabel={true}
              switchSx={{}}
              checked={permissionField?.status}
              labelStyle={userManagementStyle.titleStyle}
              onChange={(e) => setPermissionData("status", e.target.checked)}
            />
          </Stack>
        }
        footerComponent={
          <>
            <Box sx={userManagementStyle.footerContainer}>
              <BasicButton
                sx={userManagementStyle.addNewButonStyle}
                rootSx={{ width: "100%" }}
                onClick={handleSavePermission}
              >
                {"Save"}
              </BasicButton>
            </Box>
          </>
        }
      />
    </Stack>
  );
};
