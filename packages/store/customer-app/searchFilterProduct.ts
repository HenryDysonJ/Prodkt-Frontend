import { create } from 'zustand';

import { searchProductFilterInterface } from '../interface';
import { httpRequest } from '@core/utils';
import { envConfig } from '@core/envconfig';

let initialData = [
  {
    value: 'product_type_id',
    label: 'Category',
    selectParent: null,
    selectChild: undefined,
    option: [],
    values: [],
  },
  {
    value: 'brand',
    label: "Brands",
    selectParent: null,
    selectChild: undefined,
    option: [],
    values: [],
  }
]

export const useSearchFilterProduct = create<searchProductFilterInterface>((set, get) => ({
  data: [...initialData],
  categoryData: [],
  loading: true,
  singleFilterData: null,
  selectedParent: 0,
  selectedParentValue: 1,
  brandData: {},


  initialStoreFnc: () => {
    initialData[1].values = [];
    initialData[0].values = [];
    set({
      data: [...initialData],
      loading: false,
      singleFilterData: null,
      selectedParent: 0,
      selectedParentValue: 1
    })
  },

  deleteFilter: (index: number) => {
    const { data } = get();
    if (index === 0) {
      initialData[1].values = [];
      initialData[0].values = [];
      set({
        data: [...initialData],
        loading: false,
        singleFilterData: null,
        selectedParent: 0,
        selectedParentValue: 1
      })
    } else {
      data[index].values = [];
      set({ data })
    }
  },

  updateCategoryAndBrand: (searchTerm: any) => {
    const { data } = get();

    if (typeof searchTerm === 'string') {
      data[1].values = data[1].option?.filter((_: any) => searchTerm?.toLowerCase()?.split(" ")?.includes(_?.value?.toLowerCase()))
      // set({ selectedParent: 1 });
      // get().handleClickChildFnc(data[1].option?.filter((_: any) => searchTerm.toLowerCase().split(" ").includes(_.label.toLowerCase()))[0])
    }
    set({ data });
  },

  handleClickChildFnc: (x: any, searchTerm?: string) => {
    const { data, selectedParent } = get();
    set({ brandData: x })
    data[selectedParent].values = [x];

    if (selectedParent === 0) {

      data.splice(2, data.length);
      x?.filter?.forEach((filter: any) => {

        data.push({
          value: filter.value,
          label: filter.label,
          selectParent: null,
          selectChild: undefined,
          option: filter.options,
          values: [],
        })
      });
      data[1].option = x?.brands
    }
    set({ data });
  },

  updateOnFilterParentIndex: (i: number, value: any) => {
    set({
      selectedParent: i,
      selectedParentValue: value,
    });
  },

  handleChipUpdateClick: (i: number) => {
    const { data } = get();
    set({
      singleFilterData: data[i],
      selectedParent: i,
    });
  },



  fetchCategory: async (selectedCategoryId: string) => {
    set({ loading: true });

    try {
      await httpRequest('post', `${envConfig.api_url}/products/get_filters`, {}, true)
        .then((res) => {
          let data = get().data;
          const dataForBrands = res.data?.data?.category?.filter(
            (i: { id: string; }) => selectedCategoryId?.includes(i?.id))?.[0]?.brands
          data[1].option = res.data?.data?.category ? dataForBrands : [];
          data[0].option = res.data?.data?.category ?? [];
          set({ data, categoryData: data[0].option });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      console.log('err', error);
    } finally {
      set({ loading: false });
    }
  },


  fetchCategoryFromProductName: async (brandName: string) => {
    set({ loading: true });
    try {
      await httpRequest('post', `${envConfig.api_url}/products/category_type_by_brand_name`, { brand: brandName }, true)
        .then((res) => {

          let data = get().data;

          data[0].option = res?.data?.data ?? [];
          data[0].option = data[0].option.length === 0 ? get().categoryData : data[0].option;

          set({ data });
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } catch (error) {
      console.log('err', error);
    } finally {
      set({ loading: false });
    }
  },

  setAFilterCategorySelected: (value: any, label: string, filterData: any, filterBrandData:any) => {
    const { data } = get();
    const copyData = data;
    copyData[0].values = [{ label: label, value: value, }]
    copyData[1].values = [{ label: filterBrandData?.label, value: filterBrandData?.value, }]
    copyData.splice(2, data.length);

    filterData?.forEach((filter: any) => {
      copyData.push({
        value: filter?.value,
        label: filter?.label,
        selectParent: null,
        selectChild: undefined,
        option: filter?.options ?? filter?.option,
        values: [],
      })
    });
    set({
      data: copyData,
    })
  }
}));
