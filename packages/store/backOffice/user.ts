import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';
import { enqueueSnackbar } from 'notistack';
import { EditorUserDetails, UserInterface, editorUserValidate } from './interface';

export const useUser = create<UserInterface>((set, get) => ({
  userProducts: {
    icon: null,
    productTitle: '',
    modelNo: '',
    serialNo: '',
    purchaseDate: '',
    modeofPurchase: ''
  },

  tableDataList: [{
    email_id: '',
    is_blocked: false,
    phone_number: '',
    products: [],
    id:null,
    s_no: null,
    user_id: '',
    user_name: '',
    user_products_count: null,
  }
  ],
  userProductCount: [],
  userInsightsData: [{
    count: null,
    icon: '',
    name: '',
  }],

  editorUserData: {
    user_name: '',
    phone_number: null,
    email_id: '',
    user_id: '',
    error: {
      user_name: '',
      phone_number: null,
      email_id: '',
      user_id: ''
    }
  },
  filterData: '',
  inSightsLoading: false,
  isTableDataLoading: false,
  updateUserDetailsLoading: false,
  page: 0,
  rowPerPage: 5,
  tableCount: null,

  handleChangeEditUser: (key: string, value: string, limit?: number) => {

    if (limit) {
      if (value.length > limit) {
        return;
      }
    }

    set((state) => ({
      editorUserData: {
        ...state.editorUserData,
        [key]: value,
        error: { ...state.editorUserData.error, [key]: '' }
      }
    }))
  },

  setUserEditDetails: (val: EditorUserDetails) => {
    set((state) => ({
      editorUserData: {
        ...state.editorUserData,
        user_id: val.user_id,
        phone_number: val.phone_number,
        user_name: val.user_name,
        email_id: val.email_id
      }
    }))
  },

  handleChangePage: (event: any, newPage: number) => {
    set({ page: newPage })
  },

  handleChangeRowsPerPage: (value: any) => {
    set({ rowPerPage: parseInt(value, 10), page: 0 })
  },


  handleChangeFilter: (key: string, value: string) => {
    set({ [key]: value })
  },

  userInsights: async (callback: any = () => false) => {
    set({ inSightsLoading: true })

    try {

      await httpRequest('get', `${envConfig.api_url}/back_office/user_insights`, {}, true)
        .then((res) => {
          set({ userInsightsData: res?.data?.data })
          callback();
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
      set({ inSightsLoading: false });
    }






  },

  tableDataListingCall: async (value?: string) => {
    set({ isTableDataLoading: true })

    try {

      const { page, rowPerPage } = get();
      const payload = {
        search: value,
        offset: (page * rowPerPage),
        limit: rowPerPage
      }

      await httpRequest('post', `${envConfig.api_url}/back_office/list_users?search=${value ? value : ''}`, { ...payload }, true)
        .then((res) => {
          set({ tableDataList: res?.data?.data?.result, tableCount: res?.data?.data?.count })
          
          // enqueueSnackbar(`${res?.data?.message}`, {
          //   variant: 'success',
          // });
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
      set({ isTableDataLoading: false });
    }


  },


  userBlockApiCall: async (data: any) => {
    try {

      const payload = {
        user_id: data?.user_id,
        is_blocked: !data?.is_blocked
      }

      await httpRequest('post', `${envConfig.api_url}/back_office/block_user`, { ...payload }, true)
        .then((res) => {

          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
    }

  },


  updateUserDetails: async (callback: any = () => false) => {
    set({ updateUserDetailsLoading: true })

    try {
      const { editorUserData } = get();
      const { isValid, error } = editorUserValidate(editorUserData)
      if (!isValid) {
        set((state) => ({ editorUserData: { ...state.editorUserData, error } }));
        return false
      }

      const payload = {
        user_name: editorUserData.user_name,
        email_id: editorUserData.email_id,
        phone_number: editorUserData.phone_number,
        user_id: editorUserData.user_id
      }

      await httpRequest('post', `${envConfig.api_url}/back_office/update_user_details`, { ...payload }, true)
        .then((res) => {

          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          callback();
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong unable to send OTP', {
        variant: 'error',
      });
    } finally {
      set({ updateUserDetailsLoading: false });
    }


  },




}))
