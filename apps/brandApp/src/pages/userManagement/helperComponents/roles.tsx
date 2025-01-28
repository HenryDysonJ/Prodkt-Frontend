import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Switch } from "@crayond_dev/ui_switch";
import { Table } from "@crayond_dev/ui_table";
import { TextAreaAutoSize } from "@crayond_dev/ui_textarea-autosize";
import { Backdrop, Box, CircularProgress, Popover, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { userManagementStore } from "@core/store";
import OpenBox from "@core/ui/assets/brandAssets/openBox";
import DownPagenationArrow from "../../../assets/paginationDownArrow";
import LeftPaginationArrow from "../../../assets/paginationLeftArrow";
import RightPaginationArrow from "../../../assets/paginationRightArrow";
import { ThreeDotIcon } from "../../../assets/threeDotIcon";
import { userManagementStyle } from "../style";

const MenuOPtion = [
  {
    id: 1,
    label: "View",
  },
  {
    id: 2,
    label: "Edit",
  },
];

export const Roles = () => {

  const { getRoleData,
    userManagementState,
    setAddRole,
    getPermissionData,
    setHandleSearch,
    setOffset,
    setLimit,
    createRole,
    setFieldError,
    clearPermissionField,
    setEditRoleData,
    editRole,
    setViewRoleData,
    setType,
    type,
    error } = userManagementStore()
  const { permissionData, roleData, limit, offset, searchRole, addRole, } = userManagementState

  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [anchorElRow, setAnchorElRow] = useState<any>(null);
  const [rowData, setRowData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);

  const open = Boolean(anchorElRow);


  // console.log(userManagementState?.addRole, 'roleData');

  // debugger
  const TreeTableData = roleData?.rows?.map((item: any) => {
    const permissions = item?.role_permission_mappings?.map((val: any) => val?.permission?.name ?? '').join(', ');
    return {
      ...item,
      roleName: item?.name ?? '-',
      description: item?.description ?? '-',
      permission: permissions ?? '-',
      status: [
        {
          label: item?.is_active === true ? 'Active' : "Inactive",
          color:
            (item?.is_active === true && "#008545") ||
            (item?.is_active === false && "#3D0600"),
          bgColor:
            (item?.is_active === true && "#CBF2E0") ||
            (item?.is_active === false && "#FFDAD3"),
        },
      ],
    };
  });
  // console.log(TreeTableData, 'TreeTableData');

  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);

  };

  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
    setOffset(0)
  };
  const totalCount = roleData?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();


  const handleClickMenu = async (item: any) => {
    if (item.id == 1) {
      setViewRoleData(rowData)
      setOpenAddTag(true);
      getPermissionData()
    }
    else if (item?.id === 2) {
      setEditRoleData(rowData)
      setOpenAddTag(true);
      getPermissionData()
    }
    setAnchorElRow(null);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };




  const tableDataService = {
    Header: [
      {
        id: "roleName",
        align: "left",
        disablePadding: false,
        label: "Role name",
        isSortable: false,
      },
      {
        id: "description",
        align: "left",
        disablePadding: false,
        label: "Description",
        isSortable: false,
      },
      {
        id: "permission",
        align: "left",
        disablePadding: false,
        label: "Permission",
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
        align: "center",
        disablePadding: false,
        label: "",
        isSortable: false,
      },
    ],
    dataList: TreeTableData,
    tableData: [
      { type: ["TEXT"], name: "roleName", width: 130 },
      { type: ["TEXT"], name: "description", width: 300 },
      { type: ["TEXT"], name: "permission", width: 200 },
      { type: ["LABEL"], name: "status", width: 100 },
      {
        type: ["ACTION"],
        name: "action",
        width: 50,
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


  // console.log(permissionData, 'permissionData');

  const permissionOptions = permissionData?.map((val: any) => ({
    label: val?.name,
    value: val?.id,
  })) ?? [];


  // console.log(addRole, 'addRole');

  const validate = () => {
    let isValid = true;
    if (addRole?.roleName?.length === 0) {
      setFieldError('roleName', 'Role name is required');
      isValid = false;
    }
    if (addRole?.description?.length === 0) {
      setFieldError('description', 'Description is required');
      isValid = false;
    }
    if (addRole?.permission?.label?.length === 0 || addRole?.permission?.length === 0) {
      setFieldError('permission', 'Permission is required');
      isValid = false;
    }
    return isValid;
  };

  const handleSave = () => {
    setAnchorElRow(null)
    if (type === 'edit' && validate()) {
      editRole()
      clearPermissionField()
      setOpenAddTag(false)
    } else if (validate()) {
      createRole()
      clearPermissionField()
      setOpenAddTag(false)
    }
  }

  const handleCloseDialog = () => {
    clearPermissionField()
    setOpenAddTag(false),
      setType('')
  }

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      await getRoleData();
      setisLoading(false);
    };

    fetchData();
  }, [limit, offset])

  // console.log(addRole, 'addRole');


  return (
    <>

      <Stack sx={userManagementStyle.rolesCardStyle}>
        <Box>
          <Stack sx={userManagementStyle.navContainer}>
            <Search
              value={searchRole ?? ''}
              variant={"isSearchInput"}
              inputWidth="100%"
              minExpandWidth="100%"
              placeHolderText="Search by role name"
              placeHolderSize={14}
              placeHolderColor="#4E585E"
              onSelectSearchDataFun={() => false}
              handleOptionChange={() => false}
              handleInputOnChange={(e) => setHandleSearch(e.target?.value)}
              inputBorderHoverColor="#D9DBDD"
              inputBorderDefaultColor="#D9DBDD"
              inputBorderFocusColor="#D9DBDD"
              rootStyle={userManagementStyle.searchRootStyle}
            />

            <Box sx={userManagementStyle.navContainer}>
              <BasicButton
                variant="contained"
                sx={userManagementStyle.addNewButonStyle}
                onClick={() => {
                  setOpenAddTag(true),
                    getPermissionData()
                }}
              >
                Add role
              </BasicButton>
            </Box>
          </Stack>
          <Stack mt={"1.6rem"}>
            {

              isLoading ? (
                <>
                  {[...Array(roleData?.rows?.length || 0)].map((_, index) => (
                    <Skeleton key={index} width="100%" height={70} />
                  ))}
                </>
              )
                :
                
                TreeTableData?.length > 0 ? (
                  <Table {...(tableDataService as any)} tableMaxHeight={"50vh"} />
                ) : (
                  <Box sx={userManagementStyle.centerItem}>
                    <Box sx={userManagementStyle.itemBox}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <OpenBox />
                      </Box>
                      <Box>
                        <Typography
                          sx={userManagementStyle.productInfo}
                          textAlign={"center"}
                        >
                          No Data!
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
          </Stack>
        </Box>
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
          paginationBoxStyle={userManagementStyle.paginationBoxStyle}
          pageCount={false}
          pageText={"Page"}
          showPaginationBottomCountText={
            <>
              <Typography sx={userManagementStyle.paginationCountTextStyle}>
                {`showing ${offset * limit + 1} - ${totalCount < (offset + 1) * limit
                  ? totalCount
                  : (offset + 1) * limit
                  } of ${totalCount} records`}
              </Typography>
            </>
          }
        />

      </Stack>

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
        title={type === 'edit' ? "Edit role data" : (type === 'view' ? 'View role data' : "Add role")}
        titleStyle={userManagementStyle.addNewModalTitleStyle}
        open={openAddTag}
        handleClose={handleCloseDialog}
        titleVariant={"inherit"}
        maxWidth="xs"
        dialogmodalBoxStyle={userManagementStyle.dialogmodalBoxSx}
        Body={
          <Stack>
            <InputField
              variant="filled"
              label="Role name"
              placeholder=""
              onChange={(e: any) => setAddRole('roleName', e.target.value)}
              value={addRole?.roleName ?? ''}
              isLabelRequired={false}
              helperText=""
              fullWidth
              required
              error={error?.roleName?.length ? true : false}
              errorMessage={error?.roleName}
              isErrorRequired={error?.roleName?.length ? true : false}
              inputStyle={{
                "& .MuiFilledInput-root.Mui-disabled": {
                  backgroundColor: "#E6EAEB !important",
                },
              }}
              errorStyle={{ fontSize: "1.0rem" }}
              sx={userManagementStyle.formInputStyle}
              disabled={type === "view" ? true : false}
            />
            <TextAreaAutoSize
              error={error?.description?.length ? true : false}
              errorMessage={error?.description}
              isErrorRequired={error?.description?.length ? true : false}
              multiline
              rows={5}
              value={addRole?.description ?? ''}
              onChange={(e: any) => setAddRole('description', e.target.value)}
              variant="filled"
              label="Reason"
              placeholder="Add description"
              inputStyle={{
                mt: "1.6rem",
                'width': '100%',
                '& .MuiFilledInput-root': {
                  borderColor: error && error?.description ? '#DF3813' : '#D9DBDD',
                },
              }}
              disabled={type === "view" ? true : false}
            />
            <SelectAndautocomplete
              options={permissionOptions}
              variant="filled"
              selectType="chip"
              placeholder={""}
              multiple
              limitTags={3}
              optionSelectedIconShow={false}
              onChange={(e: any, value: any) => setAddRole('permission', value)}
              value={addRole?.permission}
              label={"Select permission"}
              required
              isError={error?.permission?.length ? true : false}
              helperText={error?.permission}
              optionStyle={{ fontSize: "1.4rem" }}
              labelSx={{ fontSize: "2.2rem" }}
              labelStyleProps={{
                fontSize: "1.6rem !important",
                color: "#4E585E",
              }}
              sx={userManagementStyle.selectinptStyle}
              disabled={type === "view" ? true : false}
            />

            <Switch
              sx={{ mt: "1.6rem", ml: "1rem" }}
              label={"Mark as active"}
              labelPlacement="end"
              isLabel={true}
              switchSx={{}}
              checked={addRole?.status}
              labelStyle={userManagementStyle.titleStyle}
              onChange={(e) => setAddRole("status", e.target.checked)}
              disabled={type === "view" ? true : false}
            />
          </Stack>
        }
        footerComponent={
          <>
            <Box sx={userManagementStyle.footerContainer}>
              <BasicButton
                sx={userManagementStyle.addNewButonStyle}
                rootSx={{ width: "100%" }}
                onClick={() => handleSave()}
                disabled={type === 'view' ? true : false}
              >
                {"Save"}
              </BasicButton>
            </Box>
          </>
        }
      />
    </>
  );
};
