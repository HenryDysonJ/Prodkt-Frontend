import { Box, Stack, TablePagination, Typography } from "@mui/material";
import { categoriesStyle } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { CategoryStateInterface } from "@core/store/interface";
import { TableHeader } from "../../components/tableHeader";
import { useCategory } from "@core/store";
import { Drawer } from "../../components/drawer";
import { useEffect, useState } from "react";
import { renderDrawerComponent } from "./components/renderDrawerComponent";
import { RenderDrawerFooter } from "./components/renderDrawerFooter";
import { CategoryDummyIcon } from "../../assets";

export default function Categories() {
  const { viewCategory,
    viewCategoryState,
    categoryState,
    updateCategoryState,
    categoriesData,
    getCategoriesAPI,
    searchCategoryAPI,
    searchText,
    updateCategoryAPI,
    getMasterCategoriesAPI,
    deleteImage,
    handleAddSpecs,
    handleChangeRowsPerPage,
    handleChangePage,
    handleUndoSpecs,
    clearAll,
    rowPerPage,
    page,
    totalCount } = useCategory()

  const [drawerType, setDrawerType] = useState('')

  const handleSearch = (e: any) => {
    searchCategoryAPI(e)
  }


  const [open, setOpen] = useState({
    viewDrawer: false,
    editDrawer: false,
    addDrawer: false
  })

  const addProduct = async () => {
    const statusCode = await getMasterCategoriesAPI()
    if (statusCode === "200") {
      setDrawerType('add')
      setOpen({
        ...open,
        addDrawer: true,
      })
    }
  }

  const editCategoryfn = async () => {
    const statusCode = await getMasterCategoriesAPI()
    if (statusCode === "200") {
      setDrawerType('edit')
      setOpen({
        ...open,
        editDrawer: true,
      })
    }
  }

  const viewSpecifications = (val: CategoryStateInterface) => {
    viewCategory && viewCategory(val)
    setDrawerType('view')
    setOpen({
      ...open,
      viewDrawer: true,
    })
  }

  const handleChange = (key: string, value: string) => {
    updateCategoryState(key, value)
  }

  const handleDrawerClose = () => {
    setOpen({
      viewDrawer: false,
      editDrawer: false,
      addDrawer: false
    })
    clearAll()
  }

  const openFn = (drawerType: string) => {
    if (drawerType === 'edit') {
      return open?.editDrawer
    } else if (drawerType === 'add') {
      return open?.addDrawer
    } else {
      return open?.viewDrawer
    }
  }

  const drawerTitleFn = (drawerType: string) => {
    if (drawerType === 'edit') {
      return 'Edit category details'
    } else if (drawerType === 'add') {
      return 'Add New Category'
    } else {
      return 'Specifications'
    }
  }

  const addCategoryfn = async () => {
    const isClose = await updateCategoryAPI()
    if (isClose) {
      handleDrawerClose()
    }
  }

  const handleDeleteImage = (key: string) => {
    deleteImage(key)
  }

  useEffect(() => {
    getCategoriesAPI(searchText as string)
  }, [rowPerPage, page])
  return (
    <Box height={'100%'} p={3}>
      <Box sx={categoriesStyle?.rootSx}>
        <TableHeader
          handleAdd={addProduct}
          title={`Categories (${totalCount < 9 ? `0${totalCount}` : totalCount})`}
          style={categoriesStyle?.inputSx}
          placeholder="Search category"
          isFilterWithAddRequired={true}
          btnText="Add category"
          searchText={searchText}
          testId={'addCategory'}
          handleSearch={handleSearch}
          startAdornment={<SearchIcon />
          }
        />
        <Stack direction={'row'} alignItems={'center'} sx={categoriesStyle?.categoryStackSx}>
          {
            categoriesData?.map((val: CategoryStateInterface, i: number) => {
              return (
                <Box sx={categoriesStyle?.parentBox}>
                  <Box sx={categoriesStyle?.specBox}>
                    <Box sx={categoriesStyle?.iconSx}>

                      {
                        val?.image_url ? <img src={val?.image_url} alt='specsCard'></img>
                          :
                          <CategoryDummyIcon />
                      }
                    </Box>
                    <Typography sx={categoriesStyle?.categoryNameSx}>{val?.category_name}</Typography>
                    <Typography sx={categoriesStyle?.viewBtn} id={`viewSpecifications${i}`}
                      onClick={() => viewSpecifications(val)}>View Specifications</Typography>
                  </Box>
                </Box>
              )
            })
          }
        </Stack>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount ?? '0'}
          rowsPerPage={rowPerPage}
          page={page}
          onPageChange={(e, newPage) => handleChangePage(e, newPage)}
          onRowsPerPageChange={(event) => handleChangeRowsPerPage(event.target.value as never)}
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
              editCategoryfn={editCategoryfn}
              addCategoryfn={addCategoryfn}
              drawerType={drawerType} />
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
            categoryState: categoryState,
            handleChange: handleChange,
            handleDeleteImage: handleDeleteImage,
            handleAddSpecs: handleAddSpecs,
            handleUndoSpecs: handleUndoSpecs
          })}
        </Drawer>
      </Box >
    </Box >
  )
}