import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { AvailableAmcDetailsInterface } from '../interface';

export const useAvailableAmcDetails = create<AvailableAmcDetailsInterface>((set) => ({
  availableAmc: [],

  availableAmcDetailsLoading: false,

  availableAmcmcDetailsMessage: '',

  availableAmcmcDetailsError: false,

  getAvailableAmcDetails: async (id: string) => {
    set({ availableAmcDetailsLoading: true, availableAmcmcDetailsError: true });

    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/explore/available_amc`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            availableAmc: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ availableAmcmcDetailsError: true });
    } finally {
      set({ availableAmcDetailsLoading: false });
    }
  },
}));
