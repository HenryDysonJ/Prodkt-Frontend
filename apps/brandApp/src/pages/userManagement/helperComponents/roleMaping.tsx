import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { MobileInput } from "@crayond_dev/ui_mobile-input";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Switch } from "@crayond_dev/ui_switch";
import { Table } from "@crayond_dev/ui_table";
import {
  Backdrop,
  Box,
  CircularProgress,
  Popover,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";

import { userManagementStore, useroleMappingStore } from "@core/store";
import OpenBox from "@core/ui/assets/brandAssets/openBox";
import DownArrowIcon from "../../../assets/downArrow";
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

export const RoleMaping = () => {

  const { handleRoleData, roleMappingState, setHandleSearch, clearField,
    getRoleMapData, setOffset, setLimit, addUser, setFieldError, error, setEditData,
    editRole, setViewUserData, type, setType } = useroleMappingStore()
  const { getRoleData, userManagementState } = userManagementStore()
  const { limit, offset, addRole, searchRole, roleMapData } = roleMappingState

  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [anchorElRow, setAnchorElRow] = useState<any>(null);
  const [rowData, setRowData] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const open = Boolean(anchorElRow);


  const tableItemService = roleMapData?.rows?.map((item: any) => {
    return {
      ...item,
      userName: item?.user_name ?? '-',
      mobileNo: item?.mobile_no?.length > 0 ? `${item?.mobile_no ?? ''}` : '-',
      emailId: item?.email_id ?? '-',
      roleName: item?.idm_role_name ?? '-',
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



  const handlePageChange = (e: any, page: any) => {
    setOffset(page - 1);
  };

  const handlePerPageChange = (e: any) => {
    const perPage = parseInt(e.target.value, 10);
    setLimit(perPage);
    setOffset(0)
  };
  const totalCount = roleMapData?.count || 0;
  const pageCount = Math.ceil(totalCount / parseInt(String(limit), 10));
  const currentPageString = limit?.toString();

  const handleClickMenu = async (item: any) => {
    if (item?.id === 1) {
      setOpenAddTag(true);
      setViewUserData(rowData)

    }
    if (item?.id === 2) {
      setOpenAddTag(true);
      setEditData(rowData)

    }
    setAnchorElRow(null);
  };

  const handleClose = () => {
    setAnchorElRow(null);
  };


  const handleClickDotMenu = (id: any, rowData: any, e: any) => {
    setAnchorElRow(e.currentTarget);
    setRowData(rowData);

  };



  const tableDataService = {
    Header: [
      {
        id: "userName",
        align: "left",
        disablePadding: false,
        label: "User name",
        isSortable: false,
      },
      {
        id: "mobileNo",
        align: "left",
        disablePadding: false,
        label: "Mobile number",
        isSortable: false,
      },
      {
        id: "emailId",
        align: "left",
        disablePadding: false,
        label: "Email",
        isSortable: false,
      },
      {
        id: "roleName",
        align: "left",
        disablePadding: false,
        label: "Role name",
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
    dataList: tableItemService,
    tableData: [
      { type: ["TEXT"], name: "userName", width: 150 },
      { type: ["TEXT"], name: "mobileNo", width: 150 },
      { type: ["TEXT"], name: "emailId", width: 170 },
      { type: ["TEXT"], name: "roleName", width: 130 },
      { type: ["LABEL"], name: "status", width: 50 },
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

  const permissionOptions = userManagementState?.roleData?.rows?.map((val: any) => ({
    label: val?.name,
    id: val?.id,
  })) ?? [];

  // console.log(addRole, 'add');


  const validate = () => {
    let isValid = true;
    if (addRole?.name?.length === 0) {
      setFieldError('name', 'User name is required');
      isValid = false;
    }
    if (addRole?.mobileNo?.mobile?.length === 0) {
      setFieldError('mobileNo', 'Mobile No is required');
      isValid = false;
    }
    if (addRole?.email?.length === 0) {
      setFieldError('email', 'Email ID is required');
      isValid = false;
    }
    if (addRole?.role?.label?.length === 0) {
      setFieldError('role', 'Role is required');
      isValid = false;
    }
    return isValid;
  };

  const handleSave = () => {
    if (addRole?.id?.length > 0 && validate()) {
      editRole()
      clearField()
      setOpenAddTag(false)
    } else if (validate()) {
      addUser()
      clearField()
      setOpenAddTag(false)
    }
  }

  useEffect(() => {
    getRoleData()
    const fetchData = async () => {
      setisLoading(true);
      await getRoleMapData();
      setisLoading(false);
    };

    fetchData();
  }, [limit, offset])

  return (
    <>
      <Stack sx={userManagementStyle.rolesCardStyle}>
        <Box>
          <Stack sx={userManagementStyle.navContainer}>
            <Search
              value={searchRole}
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
                //   disableRipple
                sx={userManagementStyle.addNewButonStyle}
                onClick={() => setOpenAddTag(true)}
              >
                Add user
              </BasicButton>
            </Box>
          </Stack>
          <Stack mt={"1.6rem"}>

            {
              isLoading ? (
                <>
                  {[...Array(roleMapData?.rows?.length || 0)].map((_, index) => (
                    <Skeleton key={index} width="100%" height={70} />
                  ))}
                </>
              )
                :
                tableItemService?.length > 0 ? (
                  <Table {...(tableDataService as any)} tableMaxHeight={"48vh"} />
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
        title={type === 'view' ? "View user" : type === 'edit' ? "Edit user " : "Add user"}
        titleStyle={userManagementStyle.addNewModalTitleStyle}
        open={openAddTag}
        handleClose={() => { setOpenAddTag(false), clearField(), setType('') }}
        titleVariant={"inherit"}
        maxWidth="xs"
        dialogmodalBoxStyle={userManagementStyle.dialogmodalBoxSx}
        Body={
          <Stack>
            <InputField
              variant="filled"
              label="User name"
              placeholder=""
              onChange={(e) => handleRoleData('name', e.target.value)}
              value={addRole?.name}
              isLabelRequired={false}
              helperText=""
              fullWidth
              required
              disabled={type === 'view' ? true : false}
              error={error?.name?.length ? true : false}
              errorMessage={error?.name}
              isErrorRequired={error?.name?.length ? true : false}
              inputStyle={{
                "& .MuiFilledInput-root.Mui-disabled": {
                  backgroundColor: "#E6EAEB !important",
                },
              }}
              sx={userManagementStyle.formInputStyle}
              errorStyle={{ fontSize: "1.0rem" }}
            />
            <MobileInput
              onChange={(e) => {
                handleRoleData('mobileNo', e);
              }}
              variant={"filled"}
              placeholder={"Enter mobile number"}
              required
              label="Mobile number"
              popupIcon={<DownArrowIcon />}
              // countryCode={countryCode}
              numberLimit={10}
              countryPlaceHolder="Tests"
              value={addRole?.mobileNo}
              metanusInputStyle={{}}
              inputStyle={{
                '&:focus': {
                  border: '2px solid',
                  borderColor: error?.mobileNo?.length ? 'red' : '#D9DBDD',
                },
                '&:hover ': {
                  border: '1px solid',
                  borderColor: error?.mobileNo?.length ? 'red' : '#D9DBDD',
                },
                'height': '60px !important',
                borderRadius: '8px',
                'padding': '11px 16px',
                'borderColor': error?.mobileNo?.length ? 'red' : '#D9DBDD !important',
                '& .MuiInputLabel-root': {
                  color: '#4e585e !important',
                  mt: 0.2,
                }, mt: 2
              }}
              labelStyle={{
                '& span': {
                  color: '#F44F5A',
                },
                'fontSize': '12px',
              }}
              sx={{ width: '100%' }}
              error={error?.mobileNo?.length ? Boolean(true) : Boolean(false)}
              errorMessage={error?.mobileNo}
              disabled={type === 'view' ? true : false}
              helperTextStyle={{ fontSize: '1rem' }}
            />
            <InputField
              variant="filled"
              label="Email"
              placeholder=""
              onChange={(e) => handleRoleData('email', e.target.value)}
              value={addRole?.email}
              isLabelRequired={false}
              helperText=""
              fullWidth
              required
              disabled={type === 'view' ? true : false}
              error={error?.email?.length ? true : false}
              errorMessage={error?.email}
              isErrorRequired={error?.email?.length ? true : false}
              inputStyle={{
                "& .MuiFilledInput-root.Mui-disabled": {
                  backgroundColor: "#E6EAEB !important",
                },
                mt: 2
              }}
              errorStyle={{ fontSize: "1.0rem" }}
              sx={userManagementStyle.formInputStyle}
            />

            <SelectAndautocomplete
              options={permissionOptions}
              variant="filled"
              selectType="chip"
              placeholder={""}
              disabled={type === 'view' ? true : false}
              optionSelectedIconShow={false}
              onChange={(e: any, value: any) => handleRoleData('role', value)}
              value={addRole?.role}
              freeSolo
              label={"Select role"}
              required
              isError={error?.role?.length ? true : false}
              helperText={error?.role}
              optionStyle={{ fontSize: "1.4rem" }}
              labelStyleProps={{ fontSize: "1.6rem !important" }}
              sx={userManagementStyle.selectinptStyle}
            />
            <Switch
              sx={{ mt: "1.6rem", ml: "1rem" }}
              label={"Mark as active"}
              labelPlacement="end"
              isLabel={true}
              switchSx={{}}
              checked={addRole?.status}
              labelStyle={userManagementStyle.titleStyle}
              onChange={(e) => handleRoleData("status", e.target.checked)}
              disabled={type === 'view' ? true : false}
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
