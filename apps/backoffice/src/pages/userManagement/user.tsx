import { Box, Button, Grid, Stack, TablePagination, Typography, } from "@mui/material";
import { userManagementStyle } from './style';
import { TableHeader } from "../../components/tableHeader";
import { InSightsData } from "./inSights";
import { useEffect, useState, useRef } from "react";
import { Drawer } from "../../components/drawer";
import { Table } from '@crayond_dev/ui_table'
import { ListProducts } from "./components/listProducts";
import { EditProduct } from "./components/editProduct";
import SearchIcon from '@mui/icons-material/Search';
import { InSights } from "../../components/inSights";
import { Header, dataList, tableData } from "./utils";
import { useUser } from "@core/store/backOffice";
import { CustomTablePagination } from "./components/tablePagination";
import { LoadingButton } from "@mui/lab";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TooltipComp } from "../../components/tooltip";



export default function UserManagement() {

  const debounceTimer = useRef<any>(null);
  const { userInsights,
    tableDataListingCall,
    setUserEditDetails,
    tableDataList,
    filterData,
    handleChangeFilter,
    userBlockApiCall,
    updateUserDetails,
    handleChangeEditUser,
    userInsightsData,
    updateUserDetailsLoading,
    rowPerPage,
    page,
    tableCount,
    handleChangeRowsPerPage,
    handleChangePage,
    editorUserData } = useUser();



  const [products, setProducts] = useState([])
  const [switchList, setSwitchList] = useState<any>([]);

  const [collapse, setCollapse] = useState<any>(false);
  const [isEdit, setIsEdit] = useState<Boolean>(false)
  const [open, setOpen] = useState({
    viewDrawer: false,
    editDrawer: false,
    editPopover: false
  })

  const handleDrawerClose = () => {
    setOpen({
      ...open,
      viewDrawer: false,
      editDrawer: false,
      editPopover: false,
    })
    setIsEdit(false)
  }

  const handleCollapseOpen = (index: number) => {
    setCollapse(index === collapse ? -1 : index)
  };


  const updateProductDetails = () => {
    updateUserDetails(() => {
      setOpen({
        ...open,
        editDrawer: false
      })
      tableDataListingCall('');
    })
  }


  const handleViewProducts = (val: any) => {
    setProducts(val?.products)
    setOpen({
      ...open,
      viewDrawer: true
    })
  }

  const filterOnchange = (value: string) => {
    handleChangeFilter('filterData', value)

    clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      tableDataListingCall(value);
    }, 300);

  }

  const handleSwitch = (id: any, data: any, e: any) => {
    userBlockApiCall(data)

    if (!switchList.includes(id)) {
      setSwitchList([...switchList, id]);
    }
    else {
      const index = switchList.indexOf(id);
      if (index > -1) {
        switchList.splice(index, 1);
        setSwitchList([...switchList]);
      }
    }
  };



  const handleStatus = () => {
    if (tableDataList?.length > 0) {
      const status = tableDataList?.filter((val: any) => val?.is_blocked === true)?.map((val: any) => val?.id);
      setSwitchList(status);
    }
  };

  const handleEditPopOver = (val: any) => {
    setUserEditDetails(val);
    setIsEdit(true)
    setOpen({
      ...open,
      editPopover: false,
      editDrawer: true,

    })
  }

  const handleEditProducts = () => {
    setOpen({
      ...open,
      editPopover: false,
      editDrawer: true,
    })
  }


  const tableDataListCustom = tableDataList?.map((e: any) => {
    return {
      ...e,
      products: <Typography sx={{
        textDecoration: 'underline',
        color: '#0E70EB',
        textTransform: 'capitalize',
        opacity: 1,
        fontSize: '14px',
        cursor: 'pointer'
      }} onClick={() => handleViewProducts(e)}>{`${e?.products?.length ?? 0} products`}</Typography>,
      edit: <Box sx={{ cursor: 'pointer', position: 'relative' }} id='more' onClick={() => handleEditPopOver(e)}>
        <MoreVertIcon />
        <TooltipComp
          handleView={() => handleEditProducts()}
          handleTooltipClose={handleDrawerClose}
          open={open?.editPopover}
          btnText={'Edit'}
        />
      </Box>,

    }
  })

  useEffect(() => {
    handleStatus();
  }, [tableDataList]);


  useEffect(() => {
    userInsights();
  }, [])

  useEffect(() => {
    tableDataListingCall('');
  }, [rowPerPage, page])



  return (
    <Box height={'100%'} p={3}>
      <Box sx={userManagementStyle?.rootSx}>
        <Box>
          <Typography sx={userManagementStyle?.titleSx}>Insights</Typography>
          <Grid container>
            <InSights
              data={userInsightsData} />
          </Grid>
          <Box sx={{
            '& .MuiTableSortLabel-icon': {
              opacity: 1,
              color: '#60666F'
            },
          }}>
            <Table
              Header={Header}
              dataList={tableDataListCustom}
              tableData={tableData}
              switchList={switchList}
              handleSwitch={handleSwitch}
              headerOptions={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#818181',
                bgColor: '#F9F9F9',
                borderBottom: '5px',
                padding: '11px 16px 12px 29px',
                style: {
                  textAlign: 'center'
                }
              }}
              cellOptions={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#60666F',
                borderBottom: '0px',
                padding: '18px 16px 18px 16px',
                style: {
                  textAlign: 'center'
                }
              }}
              rowOptions={{
              }}
              tableMinWidth={'80px'}
              stickyOptions={{
                stickyHeader: true,
                stickyLeft: [],
                stickyRight: [],
              }}
              tableMinHeight={'310px'}
              tableMaxHeight={'310px'}
              paddingAll={'0px'}
              marginAll={'0px 0px 0px'}
              dense={'small'}
              paginationOption={{
                isEnable: false,
                rowPerPage: 10,
                rowsPerPageOptions: [5, 10, 25],
              }}
              HeaderComponent={{
                variant: 'CUSTOM',
                component: (
                  <TableHeader
                    title={`Users Management (${tableCount < 9 ? `0${tableCount}` : tableCount})`}
                    style={userManagementStyle?.inputSx}
                    searchText={filterData}
                    handleSearch={filterOnchange}
                    placeholder="Search customer by name, phone & email"
                    startAdornment={<SearchIcon />}
                  />
                ),
              }}
            />
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={tableCount}
              rowsPerPage={rowPerPage}
              page={page}
              onPageChange={(e, newPage) => handleChangePage(e, newPage)}
              onRowsPerPageChange={(event) => handleChangeRowsPerPage(event.target.value as never)}
            />
          </Box>
        </Box>
      </Box>

      <Drawer
        show={isEdit ? open?.editDrawer : open?.viewDrawer}
        onCloseDrawer={handleDrawerClose}
        anchor="right"
        drawerStyleSX={{ padding: '16px', overflow: 'auto' }}
        height={'calc(100vh - 150px) !important'}
        drawerRightClose
        header={isEdit ? 'Edit User Details' : 'Added Product Details'}
        headerStyle={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#101010',
          textTransform: 'capitalize',
        }}
        rootStyle={{
          '& .MuiDrawer-paperAnchorRight': {
            width: '450px',
          },
        }}
        footer={
          isEdit ?
            <Box p={2}>
              <LoadingButton
                loading={updateUserDetailsLoading}
                sx={userManagementStyle?.submitBtn}
                fullWidth
                variant="contained"
                onClick={() => updateProductDetails()}>
                Update User Details
              </LoadingButton>
            </Box> : null
        }
        footerStyle={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          pl: 0,
          pr: 0,
        }}
      >
        <Box>
          {
            isEdit ?
              <EditProduct
                editProduct={editorUserData}
                handleChange={handleChangeEditUser}
              /> :
              <ListProducts
                products={products}
                collapse={collapse}
                handleCollapseOpen={handleCollapseOpen} />
          }
        </Box>
      </Drawer>
    </Box>
  )
}