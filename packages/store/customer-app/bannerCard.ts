import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { OfferCardInterface } from '../interface';

export const useBannerCard = create<OfferCardInterface>((set) => ({
  offerData: [
    {
      offer_id: 1,
      bg_color: '/',
      title: '',
      content: '',
      btn_name: '',
      btn_text_color: '',
      btn_bg: '',
      image_url: '',
      redirect_url: '',
      title_color: '',
      content_color: '',
      img_padding_left: '',
      img_padding_right: '',
      img_padding_top: '',
    },
    {
      offer_id: 2,
      bg_color: '/',
      title: '',
      content: '',
      btn_name: '',
      btn_text_color: '',
      btn_bg: '',
      image_url: '',
      redirect_url: '',
      title_color: '',
      content_color: '',
      img_padding_left: '',
      img_padding_right: '',
      img_padding_top: '',
    },
  ],
  offerCardLoading: false,

  getOfferDetails: async () => {
    set({ offerCardLoading: true });
    try {
      await httpRequest('get', `${envConfig.api_url}/products/offers`, {}, true)
        .then((res) => {
          set({
            offerData: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({ offerCardLoading: false });
    }
  },
}));
