import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { AvailableWarrantyDetailsInterface } from '../interface';

// export const useAvailableWarrantyDetails = create<AvailableWarrantyDetailsInterface>((set) => ({
//   availableWarranty: [],

//   availableWarrantyDetailsLoading: false,

//   availableWarrantymcDetailsMessage: '',

//   availableWarrantymcDetailsError: false,

//   getAvailableWarrantyDetails: async (id: string | undefined) => {
//     set({ availableWarrantyDetailsLoading: true, availableWarrantymcDetailsError: true });

//     try {
//       await httpRequest(
//         'post',
//         `${envConfig.api_url}/explore/available_warranty`,
//         {
//           product_id: id,
//         },
//         true,
//       )
//         .then((res) => {
//           set({
//             availableWarranty: res?.data?.data,
//           });
//         })
//         .catch((err) => {
//         });
//     } catch (error) {
//       set({ availableWarrantymcDetailsError: true });
//     } finally {
//       set({ availableWarrantyDetailsLoading: false });
//     }
//   },
// }));

export const useAvailableWarrantyDetails = create<AvailableWarrantyDetailsInterface>((set) => ({
  availableWarranty: [],

  availableWarrantyDetailsLoading: false,

  availableWarrantymcDetailsMessage: '',

  availableWarrantymcDetailsError: false,

  getAvailableWarrantyDetails: async (id: string) => {
    set({ availableWarrantyDetailsLoading: true, availableWarrantymcDetailsError: true });

    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/explore/available_warranty`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          set({
            availableWarranty: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ availableWarrantymcDetailsError: true });
    } finally {
      set({ availableWarrantyDetailsLoading: false });
    }
  },
}));
