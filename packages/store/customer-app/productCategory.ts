import { envConfig } from '@core/envconfig';
import { webRoutes } from '@core/routes';
import { httpRequest, routeTo } from '@core/utils';
import { create } from 'zustand';

import { useRouting } from '../common';
import { ProductCategoryInterface, SelectProductInterface } from '../interface';
import { enqueueSnackbar } from 'notistack';

export const useProductCategory = create<ProductCategoryInterface>((set) => ({
  productCategoryState: [],

  productCategoryLoading: false,

  addProductError: false,

  addProductMessage: '',

  getProduct: async () => {
    set({ productCategoryLoading: true });
    try {
      await httpRequest('get', `${envConfig.api_url}/products/display_master_product_category`, {}, true)
        .then((res) => {
          set({
            productCategoryState: res?.data?.data,
          });
          // routeTo(useRouting, webRoutes.productCategory);
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({ productCategoryLoading: false });
    }
  },

  addProduct: async (product: SelectProductInterface[]) => {

    set({ addProductMessage: '', addProductError: false });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/add_products_category`,
        {
          favourite_categories: product,
        },
        true,
      )
        .then((res) => {
          enqueueSnackbar('Product Added Successfully', {
            variant: 'success',
            autoHideDuration: 3000,
          });
          routeTo(useRouting, webRoutes.signupSuccessful);
        })
        .catch((err) => {
          enqueueSnackbar(`${err?.response?.data?.message}`, {
            variant: 'error',
          });
        });
    } catch (error) {
      enqueueSnackbar('Oops! Something went wrong', {
        variant: 'error',
      });
    } finally {
      set({});
    }
  },
}));
