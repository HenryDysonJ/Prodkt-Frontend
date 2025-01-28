import { envConfig } from '@core/envconfig';
import { RightIcon, WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ExploreWarranty, ExploreWarrantyInterface } from '../interface';

export const useExploreWarranty = create<ExploreWarrantyInterface>((set) => ({
  exploreWarrantyState: [],

  tabData: [],

  searchTerm: '',

  exploreWarrantyLoading: false,

  exploreWarrantyMessage: '',

  exploreWarrantyError: false,

  pricingData: false,

  updateState: (value: string) => {
    set({ searchTerm: value });
  },

  updateSortState: (value: boolean) => {
    set({ pricingData: value });
  },

  getWarrantyExploreData: async (id: string) => {
    set({ exploreWarrantyLoading: true, exploreWarrantyError: true });
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
          const data = res?.data?.data?.map((value: ExploreWarranty) => {
            return {
              inclusion: value?.inclusion?.map((point) => {
                return {
                  pointIcon: RightIcon({}),
                  pointText: point,
                };
              }),
              exclusion: value?.exclusion?.map((point) => {
                return {
                  pointIcon: WrongIcon({}),
                  pointText: point,
                };
              }),
            };
          });
          const tabData = [
            {
              title: 'Inclusions',
              points: data,
            },
          ];

          set({
            exploreWarrantyState: res?.data?.data,
            tabData: tabData || [],
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ exploreWarrantyError: true });
    } finally {
      set({ exploreWarrantyLoading: false });
    }
  },

  initialStoreFnc: () => {
    set({
      exploreWarrantyError: false,
      searchTerm: '',
    });
  },
}));
