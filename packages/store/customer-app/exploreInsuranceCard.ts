import { envConfig } from '@core/envconfig';
import { RightIcon, WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ExploreInsurance, ExploreInsuranceCardInterface } from '../interface';

export const useExploreInsurance = create<ExploreInsuranceCardInterface>((set) => ({
  exploreInsuranceState: [],

  tabData: [],

  searchTerm: '',

  exploreInsuranceLoading: false,

  exploreInsuranceMessage: '',

  exploreInsuranceError: false,

  pricingData: false,

  updateState: (value: string) => {
    set({ searchTerm: value });
  },

  updateSortState: (value: boolean) => {
    set({ pricingData: value });
  },

  getInsuranceExploreData: async (id: string) => {
    set({ exploreInsuranceLoading: true, exploreInsuranceError: true });
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
          const data = res?.data?.data?.map((value: ExploreInsurance) => {
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
            exploreInsuranceState: res?.data?.data,
            tabData: tabData || [],
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ exploreInsuranceError: true });
    } finally {
      set({ exploreInsuranceLoading: false });
    }
  },

  initialStoreFnc: () => {
    set({
      exploreInsuranceError: false,
      searchTerm: '',
    });
  },
}));
