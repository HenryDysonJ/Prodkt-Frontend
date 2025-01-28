import { envConfig } from '@core/envconfig';
import { UploadFiles, httpRequest } from '@core/utils';
import { create } from 'zustand';
import { AddProductInterface, AddProductStateInterface, productItemsValidate } from '../interface';
import { giveMeAddProductIntialState } from '../utils';
import { listingPayload } from './interface';
import { enqueueSnackbar } from 'notistack';

const initialState = giveMeAddProductIntialState();

export const useAddProduct = create<AddProductInterface>((set, get) => ({
  addProductState: initialState,
  inSightsData: [],
  viewProductDetials: initialState,
  listingProductsState: [],
  searchText: '',
  filterState: {
    id: '',
    brand_name: ''
  },
  productCount: 0,
  page: 0,
  rowPerPage: 10,

  handleChangePage: (event: any, newPage: number) => {
    set({ page: newPage })
  },

  handleChangeRowsPerPage: (value: any) => {
    set({ rowPerPage: parseInt(value, 10), page: 0 })
  },

  resetBtn: async (index: number) => {
    const { listingProductsRequestAPI, listingProductsAPI, filterState, clearAll , getCategoriesAPI} = get()
    set(({
      filterState: {
        id: '',
        brand_name: ''
      }
    }))
    index === 1 ? listingProductsRequestAPI(filterState, '') : listingProductsAPI(filterState, '')
    clearAll()
    await getCategoriesAPI({
      search: '',
      offset: 0,
      limit: 10,
    })
  },

  updateAddProductState: async (key: string, value: string | number | null, index?: number, type?: string,) => {
    const { getBrandsAPI, addProductState } = get()
    if (key === 'warranty_details') {
      set((state) => ({
        addProductState: {
          ...state.addProductState, [key]: {
            ...state?.addProductState[key],
            [type as string]: value
          }
        }
      }));

    } else if (key === 'img') {
      const url = await UploadFiles(value, 'fileName')
      set((state) => ({
        addProductState: {
          ...state.addProductState,
          img: {
            ...state.addProductState[key],
            url: url?.[0]?.url,
            name: url?.[0]?.name
          }
        }
      }));
    } else if (key === 'document_url') {
      const url = await UploadFiles(value, 'fileName')
      set((state) => ({
        addProductState: {
          ...state.addProductState,
          warranty_details: {
            ...state.addProductState.warranty_details,
            [key]: [
              {
                url: url?.[0]?.url,
                name: url?.[0]?.name
              }
            ]
          }
        }
      }));
    }
    else if (key === 'category_value') {
      await getBrandsAPI(value?.product_id as string)

      set((state) => ({
        addProductState: {
          ...state.addProductState,
          category_value: {
            ...value,
            specifications: value?.specifications?.map((e: { label: string, value: string }) => {
              return {
                label: e?.label,
                value: ''
              }
            })
          }
        },
      }));
    } else if (type === "specifications") {

      const data = [...addProductState?.category_value?.specifications]
      data[index as number] = {
        ...data[index as number],
        value: value as string
      }

      set((state) => ({
        addProductState: {
          ...state.addProductState,
          category_value: {
            ...state?.addProductState?.category_value,
            specifications: data
          }
        },
      }));
    } else {
      set((state) => ({ addProductState: { ...state.addProductState, [key]: value } }));
    }
  },

  deleteImage: (key: string) => {
    set((state) => ({
      addProductState: {
        ...state.addProductState,
        [key]: ''
      }
    }))
  },

  handleAddSpecs: (key: string, value: string) => {
    const { addProductState } = get()
    addProductState?.specifications?.push({
      label: key,
      value: value
    })
    set((state) => ({
      addProductState: {
        ...state.addProductState,
        specifications: addProductState?.specifications
      }
    }))
  },

  viewProductFn: (value: AddProductStateInterface) => {
    set((state) => ({ viewProductDetials: { ...state.viewProductDetials, ...value } }));
  },

  productInsightsAPI: async () => {
    try {
      await httpRequest('get', `${envConfig.api_url}/back_office/products_insights`, {}, true)
        .then((res) => {
          set({ inSightsData: res?.data?.data })
        })
        .catch((err) => {

        });
    } catch (error) {
      throw error
    }
  },

  listingProductsAPI: async (filter: {}, search: string) => {
    const { page, rowPerPage } = get()
    const payload = {
      filter: filter,
      search: search,
      offset: (page * rowPerPage),
      limit: rowPerPage
    }
    try {
      await httpRequest('post', `${envConfig.api_url}/back_office/list_of_products?search=${search ? search : ''}`, { ...payload }, true)
        .then((res) => {
          set(({ listingProductsState: res?.data?.data?.result, productCount: res?.data?.data?.count }))
        })
        .catch((err) => {
        });
    } catch (error) {
      throw error
    }
  },

  listingProductsRequestAPI: async (filter: {}, search: string) => {
    const { page, rowPerPage } = get()
    const payload = {
      filter: filter,
      search: search,
      offset: (page * rowPerPage),
      limit: rowPerPage
    }
    try {
      await httpRequest('post', `${envConfig.api_url}/back_office/products_new_request?search=${search ? search : ''}`, { ...payload }, true)
        .then((res) => {
          set(({ listingProductsState: res?.data?.data?.result, productCount: res?.data?.data?.count }))
        })
        .catch((err) => {
        });
    } catch (error) {
      throw error
    }
  },

  searchProductsAPI: (e: string, index: string | number) => {
    const { filterState, listingProductsAPI, listingProductsRequestAPI } = get()

    set({ searchText: e })
    setTimeout(() => {
      index === 1 ?
        listingProductsRequestAPI(filterState, e) : listingProductsAPI(filterState, e)
    }, 1000);
  },

  getCategoriesAPI: async (value: listingPayload) => {
    const payload = {
      search: value?.search,
      offset: value?.offset,
      limit: value?.limit
    }
    try {
      const response = await httpRequest('post', `${envConfig.api_url}/back_office/list_categories?search=${payload?.search ? payload?.search : ''}`, { ...payload }, true)
      if (response?.data?.status === '200') {
        const categoryMappedItem = response?.data?.data?.result?.map((e) => {
          return {
            name: e?.category_name,
            product_id: e?.id,
            category_id: e?.category_id,
            value: e?.id,
            specifications: e?.specifications,
            insurance: e?.insurance,
            amc: e?.amc,
            extended_warranty: e?.extended_warranty,
          }
        })
        set((state) => ({
          addProductState: {
            ...state?.addProductState,
            category: categoryMappedItem,
          }
        }))
        return response?.data?.status
      }
      else {
        return false

      }
    } catch (error) {
      return false
    }
  },

  getBrandsAPI: async (id: string) => {
    const payload = {
      id: id
    }
    try {
      await httpRequest('post', `${envConfig.api_url}/back_office/list_of_brands`, { ...payload }, true)
        .then((res) => {
          const categoryMappedItem = res?.data?.data?.brands?.map((e) => {
            return {
              name: e,
              value: e,
            }
          })
          set((state) => ({
            addProductState: {
              ...state?.addProductState,
              brand: categoryMappedItem,
            }
          }))
        })
        .catch((err) => {

        });
    } catch (error) {
      throw error
    }
  },

  addProductAPI: async () => {
    const { addProductState, listingProductsAPI, listingProductsRequestAPI, filterState } = get()
    const { error, isValid } = productItemsValidate(addProductState)
    set((state) => ({
      addProductState: {
        ...state?.addProductState,
        error: error
      }
    }))
    if (isValid) {
      const payload = {
        "product_name": addProductState?.product_name ?? '',
        "brand": addProductState?.brand_value?.name,
        "model": addProductState?.model ?? '',
        "img": addProductState?.img?.url ?? '',
        "specifications": (addProductState?.product_id &&
          !addProductState?.product_id?.length) ? addProductState?.specifications : addProductState?.category_value?.specifications,
        "product_type_id": addProductState?.category_value?.category_id,
        "category_id": addProductState?.category_value?.category_id,
        "warranty_coverage": `${addProductState?.warranty_details?.coverage_type} ${addProductState?.warranty_details?.coverage}`,
        "warranty_details": (addProductState?.product_id &&
          !addProductState?.product_id?.length) ? {
          "document_url": addProductState?.document_url?.url ?? '',
          "warranty_summary": `Brand warranty ${addProductState?.warranty_details?.coverage_type} 
        ${addProductState?.warranty_details?.coverage} `,
          "covered": "",
          "notCovered": "",
          "serviceType": ""
        } : addProductState?.warranty_details,
        "brand_image": '',
        "product_ids": addProductState?.product_id
      }
      try {
        await httpRequest('post', `${envConfig.api_url}/back_office/add_product`, { ...payload }, true)
          .then((res) => {
            enqueueSnackbar(`${res?.data?.message}`, { variant: 'success' })
            addProductState?.product_id &&
              addProductState?.product_id?.length > 0 ? listingProductsRequestAPI(filterState, '') : listingProductsAPI(filterState, '')
          })
          .catch((err) => {
            enqueueSnackbar(`${err?.data?.message}`, { variant: 'error' })
          });
      } catch (error) {
        throw error
      }
    } else {
      return isValid
    }
  },

  applyFilterAPI: async (index: number | null) => {
    const { addProductState, listingProductsAPI, listingProductsRequestAPI, clearAll } = get()
    if (addProductState?.category_value?.product_id) {
      const filterValue = {
        id: addProductState?.category_value?.product_id ?? '',
        brand_name: addProductState?.brand_value?.name ?? ''
      }
      set(({ filterState: filterValue }))
      index === 1 ?
        listingProductsRequestAPI(filterValue, '') :
        listingProductsAPI(filterValue, '')
      clearAll()
    }

  },

  makeSingleRequest: (val: AddProductStateInterface) => {
    const { addProductState } = get()
    addProductState?.product_id?.push(val?.id as string)
    set((state) => ({
      addProductState: {
        ...state?.addProductState,
        product_id: addProductState?.product_id,
      }
    }))
  },

  requestEditFn: (val: AddProductStateInterface) => {
    const { addProductState } = get()
    set((state) => ({
      addProductState: {
        ...state?.addProductState,
        ...val,
        product_id: addProductState?.product_id,
      }
    }))
  },

  clearAll: () => {
    set({
      addProductState: {
        ...initialState,
        error: {
          category_value: '',
          model: '',
          warranty_details: '',
          img: '',
          document_url: '',
          brand_value: '',
        },
        product_id: []
      },
      viewProductDetials: initialState
    })
  }
}))
