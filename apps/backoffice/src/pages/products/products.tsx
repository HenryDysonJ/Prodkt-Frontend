import { Box, Grid, Stack, TablePagination, Typography } from "@mui/material";
import { productsStyle } from './style';
import { InSights } from "../../components/inSights";
import { TableHeader } from "../../components/tableHeader";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { Drawer } from "../../components/drawer";
import { renderDrawerComponent } from "./components/renderDrawerComponent";
import { useAddProduct } from "@core/store";
import { Table } from '@crayond_dev/ui_table'
import { header, GiveMeRequestState, tableData, tabs } from "./utils";
import { AddProductStateInterface } from "@core/store/interface";
import { RenderDrawerFooter } from "./components/renderDrawerFooter";
import { CheckBox } from "@core/ui/atoms";
import { ModalPopupOver } from "../../components/modal";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TooltipComp } from "../../components/tooltip";

export default function Products() {

  const {
    updateAddProductState,
    handleAddSpecs,
    deleteImage,
    addProductState,
    viewProductDetials,
    viewProductFn,
    productInsightsAPI,
    listingProductsAPI,
    inSightsData,
    listingProductsState,
    listingProductsRequestAPI,
    getCategoriesAPI,
    productCount,
    applyFilterAPI,
    makeSingleRequest,
    requestEditFn,
    resetBtn,
    filterState,
    addProductAPI,
    clearAll,
    searchText,
    searchProductsAPI,
    handleChangeRowsPerPage,
    handleChangePage,
    rowPerPage,
    page,
  } = useAddProduct()

  const [drawerType, setDrawerType] = useState('')
  const [state, setState] = useState<AddProductStateInterface>({})

  const [selectedTabIndex, setSelectedTabIndex] = useState<number | null>(0)
  const [open, setOpen] = useState({
    modal: false,
    viewDrawer: false,
    filterDrawer: false,
    addDrawer: false,
    singleRequestDrawer: false,
    viewPopOver: false,
  })

  const handleDrawerClose = () => {
    setOpen({
      modal: false,
      viewDrawer: false,
      filterDrawer: false,
      addDrawer: false,
      singleRequestDrawer: false,
      viewPopOver: false,
    })
    clearAll()
  }

  const handleFilter = async () => {
    const status = await getCategoriesAPI({
      search: '',
      offset: 0,
      limit: 10
    })
    if (status === '200') {
      setDrawerType('filter')
      setOpen({
        ...open,
        filterDrawer: true
      })
    }
  }

  const addProduct = async () => {
    if (addProductState?.product_id &&
      addProductState?.product_id?.length > 0) {
      setOpen({
        ...open,
        modal: true
      })
    } else {
      const status = await getCategoriesAPI({
        search: '',
        offset: 0,
        limit: 10
      })
      if (status === '200') {
        setDrawerType('add')
        setOpen({
          ...open,
          addDrawer: true
        })
      }
    }
  }

  const handleChange = (key: string, value: string | number, index?: number, warrantItem?: string) => {
    updateAddProductState(key, value, index as number, warrantItem)
  }

  const openFn = (drawerType: string) => {
    if (drawerType === 'filter') {
      return open?.filterDrawer
    } else if (drawerType === 'add') {
      return open?.addDrawer
    } else if (drawerType === 'singleRequestDrawer') {
      return open?.singleRequestDrawer
    } else {
      return open?.viewDrawer
    }
  }

  const drawerTitleFn = (drawerType: string) => {
    if (drawerType === 'filter') {
      return 'Filter by'
    } else if (drawerType === 'add') {
      return 'Add New Product'
    } else {
      return 'Products Details'
    }
  }

  const switchTableTab = (data: AddProductStateInterface[], index: number) => {
    setSelectedTabIndex(index)
    clearAll()
  }

  useEffect(() => {
    productInsightsAPI()
    if (selectedTabIndex === 1) {
      listingProductsRequestAPI(filterState, searchText)
    } else {
      listingProductsAPI(filterState, searchText)
    }
  }, [selectedTabIndex, page, rowPerPage])

  const handleCheckBox = (event: any, isChecked: string, value: AddProductStateInterface) => {
    const data = GiveMeRequestState(value)
    setState(data)
    makeSingleRequest(value)

  }

  const applyFilter = () => {
    applyFilterAPI(selectedTabIndex as number);
    setOpen({
      ...open,
      filterDrawer: false
    })
  }

  const submitAddBtn = async () => {
    const isClose = await addProductAPI()
    if (isClose) {
      handleDrawerClose()
    }
  }
  const addAsSingleProduct = () => {
    setDrawerType('singleRequestDrawer')
    setOpen({
      ...open,
      modal: false,
      singleRequestDrawer: true
    })
    requestEditFn(state)
  }

  const handleSearch = (e: string) => {
    searchProductsAPI(e, selectedTabIndex as number)
  }

  const handleDeleteImage = (key: string) => {
    deleteImage(key)
  }

  const handleViewPopOver = (e: AddProductStateInterface) => {
    setOpen({
      ...open,
      viewPopOver: true
    })
    viewProductFn(e)
  }
  const handleTableTooltip = (index: number, val: AddProductStateInterface) => {
    setDrawerType('view')
    setOpen({
      ...open,
      viewPopOver: false,
      viewDrawer: true
    })
  }


  const customTableData = selectedTabIndex === 1 ? listingProductsState?.map((e) => {
    return {
      ...e,
      s_no: <Stack direction={'row'} alignItems={'center'}>
        <CheckBox
          value={''}
          isSquare
          onChange={(event, isChecked) => handleCheckBox(event, isChecked, e)}
        />
        <Typography>{e?.s_no}</Typography>
      </Stack>,
      id: <Box sx={{ cursor: 'pointer' }} id='more' onClick={() => handleViewPopOver(e)}>
        <MoreVertIcon />
      </Box>
    }
  }) : listingProductsState?.map((e) => {
    return {
      ...e,
      id: <Box sx={{ position: 'relative' }}>
        <Box sx={{ cursor: 'pointer' }} id='more' onClick={() => handleViewPopOver(e)}>
          <MoreVertIcon />
        </Box>
        <TooltipComp
          handleView={handleTableTooltip}
          handleTooltipClose={handleDrawerClose}
          open={open?.viewPopOver}
          btnText={'View'}
        />
      </Box>
    }
  })


  return (
    <Box height={'100%'} p={3}>
      <Box sx={productsStyle?.rootSx}>
        <Typography sx={productsStyle?.titleSx}>Insights</Typography>
        <Box sx={productsStyle?.overflowItemSx}>
          <Grid container>
            <InSights
              data={inSightsData} />
          </Grid>
          <Box>
            <TableHeader
              handleFilter={handleFilter}
              handleAdd={addProduct}
              title={`Products Management (${productCount})`}
              style={productsStyle?.inputSx}
              searchText={searchText}
              placeholder="Search product by name, category & brand"
              isFilterWithAddRequired
              isFilterRequired
              handleSearch={handleSearch}
              btnText={addProductState?.product_id &&
                addProductState?.product_id?.length > 0 ? "Add as single product" : "Add product"}
              startAdornment={<SearchIcon />
              }
            />
            <Stack direction={'row'} alignItems={'center'}>
              {
                tabs().map((val: any, index: number) => {
                  return (
                    <Box
                      sx={index === selectedTabIndex ? productsStyle?.clickedTabsBox : productsStyle?.tabsBox}
                      onClick={() => switchTableTab(val?.data, index)}
                    >
                      <Typography>{val?.label}</Typography>
                    </Box>
                  )
                })
              }
            </Stack>
            <Box sx={{
              '& .MuiTableSortLabel-icon': {
                opacity: 1,
                color: '#60666F'
              },
            }}>
              <Table
                Header={header}
                dataList={customTableData}
                tableData={tableData(handleTableTooltip)}
                headerOptions={productsStyle?.tableHeaderSx}
                cellOptions={productsStyle?.tableCellSx}
                tableMinWidth={'80px'}
                stickyOptions={{
                  stickyHeader: true,
                  stickyLeft: [],
                  stickyRight: [],
                }}
                tableMinHeight={'210px'}
                tableMaxHeight={'210px'}
                paddingAll={'0px'}
                marginAll={'0px 0px 0px'}
                dense={'small'}
                paginationOption={{
                  isEnable: false,
                }}
              />
            </Box>
          </Box>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={productCount ?? '0'}
            rowsPerPage={rowPerPage}
            page={page}
            onPageChange={(e, newPage) => handleChangePage(e, newPage)}
            onRowsPerPageChange={(event) => handleChangeRowsPerPage(event.target.value as never)}
          />
        </Box>

        <ModalPopupOver
          open={open?.modal}
          handleClose={handleDrawerClose}
          addProduct={addAsSingleProduct}
        />

        <Drawer
          show={openFn(drawerType)}
          onCloseDrawer={handleDrawerClose}
          anchor="right"
          drawerStyleSX={{ padding: '16px', overflow: 'auto' }}
          height={'calc(100vh - 150px) !important'}
          drawerRightClose
          header={drawerTitleFn(drawerType)}
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
            <RenderDrawerFooter
              drawerType={drawerType}
              applyFilter={applyFilter}
              addProduct={submitAddBtn}
              clearAll={() => resetBtn(selectedTabIndex as number)}
            />
          }
          footerStyle={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            pl: 0,
            pr: 0,
          }}
        >
          {renderDrawerComponent({
            drawerType: drawerType,
            viewProductDetials: viewProductDetials,
            addProductState: addProductState,
            handleChange: handleChange,
            handleFilter: handleFilter,
            handleAddSpecs: handleAddSpecs,
            handleDeleteImage: handleDeleteImage
          })}
        </Drawer>
      </Box >

    </Box >
  )
}