import { envConfig } from '@core/envconfig';
import { httpRequest, LocationData } from '@core/utils';
import moment from 'moment';
import { create } from 'zustand';

import { ServiceProvidersInterface, ServiceProvidersListProps, SlotProps } from '../interface';
import { enqueueSnackbar } from 'notistack';

const filterInitialState = (): ServiceProvidersInterface['filterDataState'] => {
  return {
    searchInput: {
      value: '',
      badge: false,
    },
    priceRange: {
      value: [500, 1000],
      badge: false,
    },
    inspectionCharge: {
      value: [500, 1000],
      badge: false,
    },
    experience: {
      value: '',
      badge: false,
    },
    operatingHours: {
      value: '',
      badge: false,
    },
  };
};
export const useServiceProviders = create<ServiceProvidersInterface>((set, get) => ({
  productList: [],
  chooseProductLoading: false,
  editServiceLoading: false,
  editServiceError: false,
  chooseProductError: false,

  productDetails: {
    product_info: {
      id: '',
      category_type_id: '',
      is_preferred_service_provider: false,
      category_id: '',
      product_name: '',
      nick_name: '',
      image_url: '',
    },

    product_specification: {
      product_serial_no: '',
      product_name: '',
      purchased_on: '',
      model_no: '',
      specifications: '',
      invoice_no: '',
      invoice_document_url: '',
    },
  },
  productDetailsLoading: false,
  productDetailsError: false,

  serviceProvidersList: [],
  serviceProvidersListLoading: false,
  serviceProvidersListError: false,
  filterServiceProvidersList: [],

  openRegularServiceDrawer: false,
  openAddServiceProviderDrawer: false,
  openEditServiceProviderDrawer: false,
  openWorkingHoursDrawer: false,
  showMoreResult: false,
  isShowMoreResult: false,
  openPrimaryServiceDrawer: false,
  showSecondaryMobileField: false,
  addProviderLoading: false,
  removePreferableDrawer: false,

  addServiceProvider: {
    providers_name: '',
    primary_mobile_no: null,
    sec_mobile_no: null,
    location_name: '',
    primary_service_provider: false,
  },

  addPreferableData: {
    providers_name: '',
    primary_mobile_no: 0,
    sec_mobile_no: 0,
    location_name: '',
    reference_id: '',
    location_latitude: '',
    location_longitude: '',
  },
  removePreferableDate: {
    provider_id: '',
    google_ref_id: '',
    user_product_id: '',
  },
  editPreferableData: {
    provider_id: '',
    providers_name: '',
    user_product_id: '',
    is_primary: false,
  },

  removePreferableService: (index: number, callback: any = () => false) => {
    const { serviceProvidersList, removePreferableDate } = get();
    serviceProvidersList[index].is_bookmark = !serviceProvidersList[index].is_bookmark;
    removePreferableDate.google_ref_id = serviceProvidersList[index].google_ref_id ?? '';
    removePreferableDate.provider_id = serviceProvidersList[index].provider_id ?? '';
    set({ removePreferableDate, serviceProvidersList });
    get().updateRemovePreferableApi(callback);
  },

  openGoogleResponse: () => {
    const { productDetails } = get();
    productDetails.product_info.is_preferred_service_provider = false;
    set({ productDetails, openRegularServiceDrawer: false, showMoreResult: false, isShowMoreResult: true });
    get().getServiceProvidersList();
  },

  checkUnCheckBookmark: (index: number) => {
    const { serviceProvidersList, addPreferableData } = get();

    serviceProvidersList[index].is_bookmark = !serviceProvidersList[index].is_bookmark;
    addPreferableData.providers_name = serviceProvidersList[index].provider_name ?? '';
    addPreferableData.primary_mobile_no = Number(serviceProvidersList[index].mobile_no) ?? null;
    addPreferableData.location_name = serviceProvidersList[index].location_name ?? '';
    addPreferableData.reference_id = serviceProvidersList[index].google_ref_id ?? '';
    addPreferableData.location_latitude = serviceProvidersList[index].location_coordinate?.lat ?? '';
    addPreferableData.location_longitude = serviceProvidersList[index].location_coordinate?.lng ?? '';
    addPreferableData.reference_id = serviceProvidersList[index].google_ref_id ?? '';
    set({ serviceProvidersList, addPreferableData });
    get().updateAddPreferableApi();
  },

  editMarkAsPrimary: (index: number) => {
    const { serviceProvidersList, editPreferableData } = get();

    editPreferableData.is_primary = !serviceProvidersList[index].is_primary ?? null;
    editPreferableData.providers_name = serviceProvidersList[index].provider_name ?? '';
    editPreferableData.provider_id = serviceProvidersList[index].provider_id ?? '';
    set({ serviceProvidersList, editPreferableData });
    get().editServiceProviders();
  },


  serviceProviderUpdateState: (key: string, val: any, limit?: number) => {

    if (limit) {
      if (val.length > limit) {
        return;
      }
    }

    set((state) => ({
      addServiceProvider: {
        ...state?.addServiceProvider,
        [key]: val,
      },
    }));
  },

  updateServiceProviderList: (key: string, val: any) => {
    const { serviceProvidersList } = get();

    const copyServiceProvidersList = JSON.parse(JSON.stringify(serviceProvidersList));
    copyServiceProvidersList[0][key] = val;
    set({ serviceProvidersList: copyServiceProvidersList });
  },

  updateDrawerState: (key: string, val: any) => {
    set((state) => ({
      ...state,
      [key]: val,
    }));
  },

  setFilterServiceProvidersList: (data: ServiceProvidersListProps[]) => {
    set({ filterServiceProvidersList: data });
  },

  selectedProvider: {},
  setSelectedProvider: (data: ServiceProvidersListProps) => {
    set({ selectedProvider: data });
  },
  selectedFilterStateCount: 0,
  filterDataState: { ...filterInitialState() },
  currentLocation: {},
  setCurrentLocation: (data: LocationData) => {
    set({ currentLocation: data });
  },
  updateSelectedFilterStateCount: () => {
    set((state) => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      selectedFilterStateCount: Object.keys(state?.filterDataState).filter((key) => state?.filterDataState?.[key].badge)
        ?.length as number,
    }));
  },
  updateFilterState: ({
    key,
    value,
  }: {
    key: keyof ServiceProvidersInterface['filterDataState'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
  }): void => {
    const state: ServiceProvidersInterface['filterDataState'] = get().filterDataState;
    state[key].value = value;
    if (key !== 'searchInput') {
      state[key].badge = true;
    } else {
      state[key].badge = false;
    }
    set({ filterDataState: state });
    get().updateSelectedFilterStateCount();
  },
  clearFilterState: () => {
    set({ selectedFilterStateCount: 0, filterDataState: { ...filterInitialState() } });
  },
  getProductList: async () => {
    set({ chooseProductLoading: true });

    try {
      await httpRequest('get', `${envConfig.api_url}/schedule_service/products_service_list`, '', true)
        .then((res) => {
          set({
            productList: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ chooseProductError: true });
    } finally {
      set({ chooseProductLoading: false });
    }
  },

  editServiceProviders: async (callback: any = () => false) => {
    set({ editServiceLoading: true, editServiceError: false });
    try {
      const editProviderData = get()
      const { productDetails } = get();
      const { editPreferableData } = get();
      const { serviceProvidersList } = get();

      let payload: any;
      if (editPreferableData?.is_primary) {
        payload = {
          user_product_id: productDetails?.product_info?.id,
          is_primary_service_provider: editPreferableData?.is_primary,
          provider_id: editPreferableData?.provider_id,
        };
      } else {
        payload = {
          providers_name: editProviderData?.serviceProvidersList?.[0]?.provider_name,
          primary_mobile_no: editProviderData?.serviceProvidersList?.[0]?.mobile_no,
          sec_mobile_no: editProviderData?.serviceProvidersList?.[0]?.sec_mobile_no,
          location_name: editProviderData?.serviceProvidersList?.[0]?.location_name,
          user_product_id: productDetails?.product_info?.id,
          is_primary_service_provider:
            editProviderData?.serviceProvidersList?.[0]?.primary_service_provider ??
            serviceProvidersList?.[0]?.is_primary,
          location_latitude: editProviderData?.serviceProvidersList?.[0]?.location_coordinate?.lat,
          location_longitude: editProviderData?.serviceProvidersList?.[0]?.location_coordinate?.lng,
          provider_id: editProviderData?.serviceProvidersList?.[0]?.provider_id,
        };
      }

      await httpRequest('post', `${envConfig.api_url}/schedule_service/edit_service_provider`, payload, true)
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          if (editPreferableData?.is_primary) {
            set({
              openEditServiceProviderDrawer: false,
              editPreferableData: {
                provider_id: '',
                providers_name: '',
                user_product_id: '',
                is_primary: false,
              },
            });
          } else {
            set({ openEditServiceProviderDrawer: false });
          }

          get().getServiceProvidersList();
          callback();
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ editServiceError: true });
    } finally {
      set({ editServiceLoading: false });
    }
  },

  getProductDetails: async (id: string) => {
    set({ productDetailsLoading: true, isShowMoreResult: false });

    try {
      await httpRequest('post', `${envConfig.api_url}/schedule_service/product_info`, { id: id }, true)
        .then((res) => {
          set({
            productDetails: {
              product_info: { ...res?.data?.data?.product_info },
              product_specification: { ...res?.data?.data?.product_specification },
            },
          });
          get().getServiceProvidersList();
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ productDetailsError: true });
    } finally {
      set({ productDetailsLoading: false });
    }
  },
  getServiceProvidersPayLoad: (LocationData?: any): object => {
    const { productDetails, currentLocation } = get();
    const payload = {
      type_id: productDetails?.product_info?.category_type_id,
      show_preferred_service_provider: productDetails?.product_info?.is_preferred_service_provider,
      user_product_id: productDetails?.product_info?.id,
      location_name: currentLocation?.address ?? LocationData?.address,
      location_latitude: currentLocation?.latitude ?? LocationData?.latitude,
      location_longitude: currentLocation?.longitude ?? LocationData?.longitude,
    };
    return payload;
  },
  getServiceProvidersList: async (payload?: any) => {
    set({ serviceProvidersListLoading: true });

    try {
      await httpRequest(
        'post',
        `${envConfig.api_url}/schedule_service/service_providers`,
        get().getServiceProvidersPayLoad(payload),
        true,
      )
        .then((res) => {
          set({
            serviceProvidersList: res?.data?.data,
            filterServiceProvidersList: res?.data?.data,
          });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ serviceProvidersListError: true });
    } finally {
      set({ serviceProvidersListLoading: false });
    }
  },

  updateAddProviderServiceApi: async (id: any) => {
    set({ addProviderLoading: true });

    try {
      const addProviderData = get();
      const payload = {
        providers_name: addProviderData?.addServiceProvider?.providers_name,
        primary_mobile_no: addProviderData?.addServiceProvider?.primary_mobile_no,
        sec_mobile_no: addProviderData?.addServiceProvider?.sec_mobile_no,
        location_name: addProviderData?.addServiceProvider?.location_name,
        user_product_id: addProviderData?.productDetails?.product_info?.id,
        primary_service_provider: addProviderData?.addServiceProvider?.primary_service_provider,
        type_id: addProviderData?.productDetails?.product_info?.category_id,
      };
      await httpRequest('post', `${envConfig.api_url}/schedule_service/add_service_provider_details`, payload, true)
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });

          set({ openAddServiceProviderDrawer: false });
          get().getProductDetails(id);
          get().clearAddProviderState();
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({ addProviderLoading: false });
    }
  },

  updateAddPreferableApi: async () => {
    try {
      const addPreferableData = get();
      const payload = {
        user_product_id: addPreferableData?.productDetails?.product_info?.id,
        type_id: addPreferableData?.productDetails?.product_info?.category_id,
        providers_name: addPreferableData?.addPreferableData?.providers_name,
        primary_mobile_no: addPreferableData?.addPreferableData?.primary_mobile_no,
        sec_mobile_no: undefined,
        location_name: addPreferableData?.addPreferableData?.location_name,
        reference_id: addPreferableData?.addPreferableData?.reference_id,
        location_latitude: addPreferableData?.addPreferableData?.location_latitude,
        location_longitude: addPreferableData?.addPreferableData?.location_longitude,
      };
      await httpRequest('post', `${envConfig.api_url}/schedule_service/add_preferable`, payload, true)
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          // get().getServiceProvidersList();
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({});
    }
  },

  updateRemovePreferableApi: async (callback: any = () => false) => {
    try {
      const removePreferableData = get();
      let payload: any;
      if (removePreferableData?.removePreferableDate?.google_ref_id === '') {
        payload = {
          provider_id: removePreferableData?.removePreferableDate?.provider_id ?? undefined,
          user_product_id: removePreferableData?.productDetails?.product_info?.id,
        };
      } else {
        payload = {
          google_ref_id: removePreferableData?.removePreferableDate?.google_ref_id ?? undefined,
          user_product_id: removePreferableData?.productDetails?.product_info?.id,
        };
      }

      await httpRequest('post', `${envConfig.api_url}/schedule_service/remove_preferable`, payload, true)
        .then((res) => {
          enqueueSnackbar(`${res?.data?.message}`, {
            variant: 'success',
          });
          callback();
          // get().getServiceProvidersList();
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({});
    } finally {
      set({});
    }
  },

  //booking Slot state
  selectedDate: new Date(),
  setSelectedDate: (date: string | Date) => {
    set({ selectedDate: date });
  },

  selectedSlot: [],
  setSelectedSlot: (data: SlotProps) => {
    const slots = get().selectedSlot;
    const ids: Array<string | number> = slots?.map((slot: SlotProps) => slot?.id);
    if (!ids.includes(data?.id)) {
      set({ selectedSlot: [...slots, data] });
    } else {
      const index = ids.indexOf(data?.id);
      if (index > -1) {
        slots.splice(index, 1);
        set({ selectedSlot: [...slots] });
      }
    }
  },
  bookingSlotLoading: false,
  bookingSlotError: false,
  bookingSlot: async () => {
    try {
      set({ bookingSlotLoading: true });
      const slots = get().selectedSlot;
      const selectedProvider = get().selectedProvider;
      const selectedDate = get().selectedDate;
      await httpRequest(
        'post',
        `${envConfig.api_url}/schedule_service/book_slot`,
        {
          provider_id: selectedProvider?.id,
          preferred_time_slots: slots?.map(({ date_time }) => date_time),
          date: moment(selectedDate).format('YYYY-MM-DD'),
        },
        true,
      )
        .then(() => {
          set({ bookingSlotError: false });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      set({ bookingSlotError: true });
    } finally {
      set({ bookingSlotLoading: false });
    }
  },

  clearAddProviderState: () => {
    set({
      addServiceProvider: {
        providers_name: '',
        primary_mobile_no: null,
        sec_mobile_no: null,
        location_name: '',
        primary_service_provider: false,
      },
    });
  },
}));
