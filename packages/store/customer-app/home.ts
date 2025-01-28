import { envConfig } from '@core/envconfig';
import { ActionRequired } from '@core/ui/components/actionRequiredCard';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { actionRequiredInterface } from '../interface';

export const useHome = create<actionRequiredInterface>((set) => ({
  actionRequiredState: {
    amc_valid_to: false,
    warranty_valid_to: false,
    insurance_valid_to: false,
    src: '',
    text: '',
    icon: {
      dark_theme: '',
      light_theme: '',
    },
    productText: '',
    productSubText: '',
    bottomText: '',
    image_url: '',
    product_name: '',
    user_product_id: '',
    nick_name: '',
    expiring: [],
    expired: [],
    available: [],
  },
  productToBeAddedState: [],
  myProductState: [],
  actionCardLoading: false,
  error: false,
  actionRequired: [],


  chooseProductState: [
    {
      image_url: '',
      nick_name: '',
      product_name: '',
      user_product_id: '',
      is_amc_applicable: false,
      is_ext_warranty_applicable: false,
      is_insurance_applicable: false,
      is_invoice_applicable: false
    }
  ],
  chooseProductDetails: {
    image_url: '',
    nick_name: '',
    product_name: '',
    user_product_id: '',
    is_amc_applicable: false,
    is_ext_warranty_applicable: false,
    is_insurance_applicable: false,
    is_invoice_applicable: false

  },
  currantDrawer: 1,
  chooseProductLoading: false,
  openChooseProductDrawer: false,
  openMyProductDrawer: false,

  getChooseProductUpdate: (val) => {
    set({ chooseProductDetails: val })
  },
  getCurrantDrawerUpdate: (number) => {
    set({ currantDrawer: number })
  },

  getChooseProductDrawerUpdate: (val) => {
    set({ openChooseProductDrawer: val })
  },

  getMyProductDrawer: (val) => {
    set({ openMyProductDrawer: val })
  },


  getChooseYourProduct: async () => {
    set({ chooseProductLoading: true });
    try {
      await httpRequest(
        'get',
        `${envConfig.api_url}/external_bought_doc/choose_your_product`, {}, true
      )
        .then((res) => {
          set({
            chooseProductState: res?.data?.data
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({ chooseProductLoading: false });
    }
  },

  getDisplayActionRequired: async (id?: string) => {
    set({ actionCardLoading: true, error: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/display_actions_required`,
        {
          user_product_id: id ? id : undefined,
        },
        true,
      )
        .then((res) => {
          set({
            actionRequiredState: res?.data?.data,
          });
          return res?.data?.data;
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ actionCardLoading: false });
    }
  },

  getProductToBeAdded: async () => {
    set({ actionCardLoading: true, error: true });
    try {
      await httpRequest('get', `${envConfig.api_url}/products/favourite_category`, {}, true)
        .then((res) => {
          set({
            productToBeAddedState: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ actionCardLoading: false });
    }
  },

  getMyProduct: async () => {
    set({ actionCardLoading: true, error: true });
    try {
      await httpRequest('get', `${envConfig.api_url}/products/my_products`, {}, true)
        .then((res) => {
          set({
            myProductState: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ actionCardLoading: false });
    }
  },



  handleUpdateState: async (data: ActionRequired) => {
    set({ actionCardLoading: true, actionRequired: data });
  },
}));
