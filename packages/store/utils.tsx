import offer from '@core/ui/assets/offer_1_banner.png';
import { AddProductStateInterface, CategoryStateInterface } from './interface';

export const offerBanner = [
  {
    id: 1,
    link: '/',
    src: offer,
    alt: '',
    width: '',
    height: '',
    caption: '',
  },
  {
    id: 2,
    link: '/',
    // src: Offer_2,
    alt: '',
    width: '',
    height: '',
    caption: '',
  },
];

export const giveMeAddProductIntialState = (): AddProductStateInterface => {
  return {
    id: '',
    category: {
      name: '',
      id: null,
    },
    icon: null,
    title: '',
    brand: '',
    brand_value: {
      name: '',
      value: ''
    },
    category_value: {
      name: '',
      value: '',
      product_id: '',
      specifications: [{
        label: '',
        value: ''
      }],
      category_id: '',
      amc: false,
      extended_warranty: false,
      insurance: false,
    },
    model: '',
    warranty_details: {
      coverage_type: null,
      coverage: '',
      warranty_summary: '',
      covered: '',
      notCovered: '',
      serviceType: '',
      document_url: []
    },
    product_id: [],
    specifications: [],
    error: {
      category_value: '',
      model: '',
      warranty_details: '',
      img: '',
      document_url: '',
      brand_value: '',
    }
  }
};

export const  giveMeCategoryIntialState = (): CategoryStateInterface => {
  return {
    error: {
      category_name: '',
      category_type: '',
      specifications: '',
      image_url: '',
      icon: '',
      serial_no: ''
    },
    category_type_value: {},
    category_name: '',
    icon: {
      url: '',
      name: ''
    },
    serial_no: {
      title: '',
      info_text: '',
      info_image_url: '',
      button_name: '',
      redirect_url: ''
    },
    image_url: {
      url: '',
      name: ''
    },
    warranty: false,
    extended_warranty: false,
    insurance: false,
    amc: false,
    category_id: '',
    customSpecs: '',
    category_type: [],
    specifications: [{
      label: 'Model Number',
      value: 'Model Number',
      is_active: true
    },{
      label: 'Brand Name',
      value: 'Brand Name',
      is_active: true

    }],
  }
};
