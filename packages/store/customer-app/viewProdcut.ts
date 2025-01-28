import { envConfig } from '@core/envconfig';
import { httpRequest } from '@core/utils';
import { create } from 'zustand';

import { ViewProductDetails } from '../interface';

export const useViewProductDetails = create<ViewProductDetails>((set) => ({
  responseData: [],
  viewCardLoading: false,

  getViewDocumentDetails: async (id: string | undefined) => {
    set({ viewCardLoading: true });
    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/products/view_doc_by_product_id`,
        {
          product_id: id,
        },
        true,
      )
        .then((res) => {
          if (res?.data?.status === 200) {
            const array = <any>[];

            Object.keys(res?.data?.data).forEach(function (key_, index) {
             
              const obj = {
                checked: false,
                isCheckIcon: false,
                isActive: false,
                nickName:
                  key_ === 'user_product_details'
                    ? res?.data?.data[key_]?.document_url
                    : res?.data?.data[key_]?.[0]?.document_url,

                purchasedOn:
                  key_ === 'user_product_details'
                    ? res?.data?.data[key_]?.purchased_on
                    : res?.data?.data[key_]?.[0]?.purchased_on,
                validTo:
                  key_ === 'user_product_details'
                    ? res?.data?.data[key_]?.valid_to
                    : res?.data?.data[key_]?.[0]?.valid_to,
                documentURL:
                  key_ === 'user_product_details'
                    ? res?.data?.data[key_]?.document_url
                    : res?.data?.data[key_]?.[0]?.document_url,
                cardName:
                  key_ === 'amc_details'
                    ? 'AMC'
                    : key_ === 'insurance_details'
                    ? 'Insurance'
                    : key_ === 'service'
                    ? 'Service'
                    : key_ === 'user_product_details'
                    ? 'Invoice'
                    : key_ === 'warranty_details'
                    ? 'Warranty'
                    : '',
                arrayData: res?.data?.data[key_],
                index: index,
                key_: key_,
              };

              array.push(obj);
            });

            set({ responseData: array ?? [] });
          }
          // set({ responseData: array ?? [] });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ viewCardLoading: true });
    } finally {
      set({ viewCardLoading: false });
    }
  },
}));
