import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { enqueueSnackbar } from 'notistack';
import { create } from 'zustand';
import { ArchiveProductInterface } from '../interface';

export const useArchiveProduct = create<ArchiveProductInterface>((set, get) => ({
  archiveProductData: {
    type: null,
    otherDescription: '',
  },
  loading: false,

  archivedProductDataDetails: [],

  productSpecification: {},

  updateArchiveProductData: (key: string, value: any) => {
    set((state) => ({
      archiveProductData: {
        ...state?.archiveProductData,
        [key]: value,
      },
    }));
  },

  updateArchiveProduct: async (product_id: string) => {
    set({ loading: true });

    try {
      const archiveProduct = get();

      const payload = {
        user_product_id: product_id,
        archive_remarks: archiveProduct?.archiveProductData?.type,
      };

      if (archiveProduct?.archiveProductData?.type === 'Others') {
        payload.archive_remarks = archiveProduct?.archiveProductData?.otherDescription;
      }

      httpRequest('POST', `${envConfig.api_url}/archives/archive_product`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  getArchivedProductDetails: async () => {
    set({ loading: true });

    try {
      await httpRequest('get', `${envConfig.api_url}/archives/archive_product_details`, {}, true)
        .then((res) => {
          set({
            archivedProductDataDetails: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
    } finally {
      set({ loading: false });
    }
  },

  updateUnarchivedProduct: async (product_id: string) => {
    set({ loading: true });

    try {
      const payload = {
        user_product_id: product_id,
      };

      await httpRequest('POST', `${envConfig.api_url}/archives/unarchive_product`, payload, true)
        .catch((err) => {
          console.log('Error on add product: ', err);
          throw err;
        })
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
        });
    } catch (error) {
      set({});
    } finally {
      set({ loading: false });
    }
  },

  clearArchiveState: () => {
    set({
      archiveProductData: {
        type: null,
        otherDescription: '',
      },
    });
  },
}));
