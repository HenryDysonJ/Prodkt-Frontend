import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { AvailableInsuranceDetailsInterface } from '../interface';

export const useAvailableInsuranceDetails = create<AvailableInsuranceDetailsInterface>((set) => ({
  availableInsurance: [],

  availableInsuranceDetailsLoading: false,

  availableInsurancemcDetailsMessage: '',

  availableInsurancemcDetailsError: false,

  getAvailableInsuranceDetails: async (id: string) => {
    set({ availableInsuranceDetailsLoading: true, availableInsurancemcDetailsError: true });

    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/explore/available_insurance`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            availableInsurance: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ availableInsurancemcDetailsError: true });
    } finally {
      set({ availableInsuranceDetailsLoading: false });
    }
  },
}));
