import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { SearchProductInterface } from '../interface';

export const useSearchProduct = create<SearchProductInterface>((set) => ({
  products: [],
  productsCopy: [],
  suggestion: [],
  specification: [],
  loading: false,
  error: false,
  searchTerm: '',
  suggestionTerm: '',

  getSearchProduct: async (search, type, isSuggestion, filter = {}) => {
    set({ loading: true, error: true });
    try {
      await httpRequest('post', `${envConfig.api_url}/products/search?search=${search}`, filter, true)
        .then((res) => {
          if (isSuggestion) {
            set({ suggestionTerm: search });
          }
          let productArray = [];
          // if (type === 'filter') {
          productArray =
            Array.isArray(res?.data?.data?.products) && res?.data?.data?.products?.length > 0
              ? res?.data?.data?.products
              : [];
          // set({ searchTerm: search });
          // } else {
          //   productArray =
          //     Array.isArray(res?.data?.data?.products) && res?.data?.data?.products?.length > 0
          //       ? res?.data?.data?.products?.filter((value: { product_name: string }) =>
          //         search
          //           ?.toLowerCase()
          //           ?.split(' ')
          //           .every((item) => value?.product_name?.toLowerCase()?.indexOf(item) > -1),
          //       )
          //       : [];
          // }

          set({
            products: res?.data?.data?.products,
            suggestion: res?.data?.data?.suggestion,
            specification: res?.data?.data?.specification,
            productsCopy: productArray,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  initialStoreFnc: () => {
    set({
      products: [],
      productsCopy: [],
      suggestion: [],
      specification: [],
      error: false,
      searchTerm: '',
      suggestionTerm: '',
    });
  },

  setSearchTermFnc: (val: string) => {
    set({
      searchTerm: val,
    });
  },

  setSuggestionTermFnc: (val: string) => {
    set({
      suggestionTerm: val,
    });
  },
  clearSearch: () => {
    set({
      products: [],
      productsCopy: [],
      suggestion: [],
      specification: [],
      loading: false,
      error: false,
      searchTerm: '',
      suggestionTerm: '',
    });
  },
}));
