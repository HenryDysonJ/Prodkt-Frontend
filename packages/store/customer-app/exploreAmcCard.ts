import { envConfig } from '@core/envconfig';
import { RightIcon, WrongIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ExploreAmc, ExploreAmcCardInterface } from '../interface';

export const useExploreAmc = create<ExploreAmcCardInterface>((set) => ({
  exploreAmcState: [],

  tabData: [],

  searchTerm: '',

  exploreAmcLoading: false,

  exploreAmcMessage: '',

  exploreAmcError: false,

  pricingData: false,

  updateState: (value: string) => {
    set({ searchTerm: value });
  },

  updateSortState: (value: boolean) => {
    set({ pricingData: value });
  },

  getAmcExploreData: async (id: string) => {
    set({ exploreAmcLoading: true, exploreAmcError: true });
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
          const data = res?.data?.data?.map((value: ExploreAmc) => {
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
            exploreAmcState: res?.data?.data,
            tabData: tabData || [],
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ exploreAmcError: true });
    } finally {
      set({ exploreAmcLoading: false });
    }
  },

  initialStoreFnc: () => {
    set({
      // exploreAmcState: [],
      exploreAmcError: false,
      searchTerm: '',
    });
  },
}));
