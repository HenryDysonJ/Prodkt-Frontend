import { envConfig } from '@core/envconfig';
import { UploadFiles, httpRequest } from '@core/utils';
import { CategoriesInterface, CategoryStateInterface, categoryItemsValidate } from '../interface';
import { create } from 'zustand';
import { giveMeCategoryIntialState } from '../utils';
import { enqueueSnackbar } from 'notistack';

const initialState = giveMeCategoryIntialState()
export const useCategory = create<CategoriesInterface>((set, get) => ({
    categoryState: initialState,
    viewCategoryState: initialState,
    categoriesData: [],
    searchText: '',
    page: 0,
    rowPerPage: 10,
    totalCount: 0,

    handleChangePage: (event: any, newPage: number) => {
        set({ page: newPage })
    },

    handleChangeRowsPerPage: (value: any) => {
        set({ rowPerPage: parseInt(value, 10), page: 0 })
    },

    updateCategoryState: async (key: string, value: string | number | null, type?: string) => {
        const { categoryState } = get()
        if (key === 'image_url' || key === 'icon') {
            const url = await UploadFiles(value, 'fileName')
            set((state) => ({
                categoryState: {
                    ...state.categoryState,
                    [key]: {
                        ...state.categoryState[key],
                        url: url?.[0]?.url,
                        name: url?.[0]?.name
                    },
                    error: { ...state.categoryState.error, [key]: '' },
                }
            }));

        } else if (key === 'serial_no') {
            set((state) => ({
                categoryState: {
                    ...state.categoryState,
                    serial_no: {
                        ...state.categoryState.serial_no,
                        info_text: value as string
                    },
                    error: { ...state.categoryState.error, [key]: '' },
                }
            }));
        } else {
            set((state) => ({
                categoryState: {
                    ...state.categoryState,
                    [key]: value,
                    error: { ...state.categoryState.error, [key]: '' },
                }
            }));
        }

    },

    viewCategory: (val: CategoryStateInterface) => {
        const img_url = val?.image_url;
        const img_url_parts = img_url.split("/");
        const img_url_parts_Filename = img_url_parts[img_url_parts.length - 1];
        const img_url_Filename = decodeURIComponent(img_url_parts_Filename);

        const url = val?.icon;
        const parts = url.split("/");
        const encodedFilename = parts[parts.length - 1];
        const decodedFilename = decodeURIComponent(encodedFilename);
        set((state) => ({
            categoryState: {
                ...state.categoryState,
                ...val,
                image_url: {
                    url: val?.image_url,
                    name: img_url_Filename
                },
                icon: {
                    url: val?.icon,
                    name: decodedFilename
                }
            }
        }))
    },
    handleAddSpecs: () => {
        const { categoryState } = get()
        const addedSpecsValue = {
            label: categoryState?.customSpecs,
            value: categoryState?.customSpecs,
            is_active: true,
        }

        categoryState?.specifications?.push(addedSpecsValue);

        set((state) => ({
            categoryState: {
                ...state.categoryState,
                specifications: categoryState?.specifications
            }
        }))

    },

    handleUndoSpecs: (e: any, i: number, arr: []) => {
        const { categoryState } = get()

        const value = categoryState?.specifications?.map((v) => {
            return {
                ...v,
                is_active: v?.label === e?.label ? false : true
            }
        })
        set((state) => ({
            categoryState: {
                ...state?.categoryState,
                specifications: value
            }
        }))
    },

    getCategoriesAPI: async (search: string) => {
        const { page, rowPerPage } = get();
        const payload = {
            search: search,
            offset: (page * rowPerPage),
            limit: rowPerPage
        }
        try {
            await httpRequest('post', `${envConfig.api_url}/back_office/list_categories?search=${payload?.search ? payload?.search : ''}`, { ...payload }, true)
                .then((res) => {
                    set(({ categoriesData: res?.data?.data?.result, totalCount: res?.data?.data?.count }))
                })
                .catch((err) => {

                });
        } catch (error) {
            throw error
        }
    },

    getMasterCategoriesAPI: async () => {
        try {
            const res = await httpRequest('post', `${envConfig.api_url}/back_office/get_master_Category`, {}, true)
            if (res?.data?.status === "200"
            ) {
                set((state) => ({
                    categoryState: {
                        ...state.categoryState,
                        category_type: res?.data?.data
                    }
                }))
            }
            return res?.data?.status

        } catch (error) {
            return false
        }

    },

    deleteImage: (key: string) => {
        set((state) => ({
            categoryState: {
                ...state.categoryState,
                [key]: ''
            }
        }))
    },

    updateCategoryAPI: async () => {
        const { categoryState, getCategoriesAPI, searchText } = get()

        const { isValid, error } = categoryItemsValidate(categoryState)
        set((state) => ({
            categoryState: {
                ...state?.categoryState,
                error: error
            }
        }))
        if (isValid) {
            const payload = {
                "category_name": categoryState?.category_name,
                'id': categoryState?.id,
                "image_url": categoryState?.image_url?.url,
                "icon": categoryState?.icon?.url,
                "warranty": true,
                "extended_warranty": categoryState?.extended_warranty,
                "insurance": categoryState?.insurance,
                "amc": categoryState?.amc,
                "category_id": categoryState?.category_id.length > 0 ?
                    categoryState?.category_id : categoryState?.category_type_value?.id ?? '',
                "specifications": categoryState?.specifications,
                "serial_no": {
                    "title": "Serial Number",
                    "info_text": categoryState?.serial_no?.info_text,
                    "info_image_url": "",
                    "button_name": "",
                    "redirect_url": ""
                }
            }
            try {
                await httpRequest('post', `${envConfig.api_url}/back_office/upsert_product_category`, { ...payload }, true)
                    .then((res) => {
                        enqueueSnackbar(`${res?.data?.message}`, { variant: 'success' })
                        getCategoriesAPI(searchText as string)
                    })
                    .catch((err) => {
                        enqueueSnackbar(`${err?.message}`, { variant: 'error' })
                    });
            } catch (error) {
                throw error
            }
        } else {
            return isValid
        }
        return isValid
    },

    searchCategoryAPI: (e: string) => {
        const { getCategoriesAPI } = get()
        set({ searchText: e })
        setTimeout(() => {
            getCategoriesAPI(e)
        }, 1000);
    },

    clearAll: () => {
        set({
            categoryState: {
                ...initialState,
                error: {
                    category_name: '',
                    category_type: '',
                    specifications: '',
                    image_url: '',
                    icon: '',
                    serial_no: ''
                }
            },
            viewCategoryState: initialState
        })
    }
}))
