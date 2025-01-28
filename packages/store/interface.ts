import { ActionRequired } from '@core/ui/components/actionRequiredCard';
import { myProductData } from '@core/ui/components/productCards';
import { productProfileInterface } from '@core/ui/components/productProfile';
import { LocationData } from '@core/utils';
import { BooleanCameraCapability } from 'html5-qrcode/esm/camera/core';
import React from 'react';

export interface AuthStoreInterface {
  mobile_no: number | string | null;
  otp: number | string | null;
  mobile: number | string | null;
  whatsapp_no: number | string | null;
  token: number | string | null;
  signUpState: profileInterface;
  isExistingUser: boolean;
  isInstallationBanner: boolean;
  isNewUser: boolean;
  isSwiper: boolean;
  onBoarding: boolean;
  drawerOpen: boolean;
  isSignUpOpenDrawer: boolean;
  isOtpVerification: boolean;
  currentSwipeStep: number | undefined;
  updateState: (key: string, value: number | string | null | boolean) => void;
  setSignUpState: (payload: { key: string; value: string }) => void;

  getOTPLoading: boolean;
  verifyOTPLoading: boolean;
  signUpLoading: boolean;
  resendOTPLoading: boolean;
  whatsAppVerificationLoading: boolean;
  refreshLoading: boolean;
  isRefresh: string;
  isRefreshToken: string;
  inviteUrl: inviteLink,
  inviteLoading: boolean,

  signUpError: boolean;
  whatsAppVerificationError: boolean;

  signUpMessage: string;

  getOTP: () => void;
  getInvite: () => void;
  verifyOTP: () => void;
  resendOTP: () => void;
  clearState: () => void;
  whatsAppVerification: (code: string | null) => void;
  refreshToken: () => void;
  signUpDetails: () => void;

  clearField: () => void;
  clearOTP: () => void;
}
interface inviteLink {
  link: string
}


export interface DarkThemeSetup {
  is_darkTheme: boolean;
  default_theme: string;

  updateDefaultTheme: (theme: string) => void;
  updateThemeByDefaultTheme: () => void;
  toggleDarkTheme: () => void;
  setLightTheme: () => void;
  updateTheme: () => void;
}

interface imgInterface {
  offer_id?: number;
  bg_color: string;
  title: string;
  content: string;
  btn_name: string;
  title_color: string;
  btn_text_color: string;
  btn_bg: string;
  image_url: string;
  redirect_url: string | URL | undefined;
  content_color: string;
  img_padding_left: string;
  img_padding_right: string;
  img_padding_top: string;
}
export interface OfferCardInterface {
  offerData: imgInterface[];
  offerCardLoading: boolean;
  getOfferDetails: () => void;
}

export interface LocationInterface {
  address: string;
  latitude: string;
  longitude: string;
}

interface profileInterface {
  name: string;
  emailId: string;
  mobileCode: 91;
  mobile_no: string;
  location: LocationInterface;
  error: {
    name: string;
    emailId: string;
    mobile_no: string;
    location: string;
    location_coordinates: string;
  };
}

interface editProfileInterface {
  first_name: string;
  email_id: string;
  mobile_code: number;
  mobile_no: string | number;
  location: LocationData | null;
  profile_image: string | File;
  error: {
    first_name: string;
    email_id: string;
    mobile_code: number;
    mobile_no: string;
    profile_image: string | File;
    location: LocationData | null;
  };
}

export const validateSignUpData = (values: profileInterface) => {
  let isValid = true;
  const error = values.error;

  //  Checking username
  if (values.name.length === 0) {
    isValid = false;
    error.name = 'Enter a valid name';
  } else {
    error.name = '';
  }

  // Checking email
  const ValidateEmail = (email: string) => {
    const isUpper = Boolean(/[A-Z]/.test(email));
    if (isUpper) {
      return false;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return Boolean(re.test(email.trim()));
  };

  if (values?.emailId?.length > 0) {
    if (!ValidateEmail(values?.emailId)) {
      isValid = false;
      error.emailId = 'Please enter the valid mail';
    } else {
      error.emailId = '';
    }
  } else {
    isValid = false;
    error.emailId = 'Please enter the mail';
  }

  return { isValid, error };
};

export const validateEditProfile = (values: editProfileInterface) => {
  let isValid = true;
  const error = values.error;

  //  Checking username
  if (values.first_name.length === 0) {
    isValid = false;
    error.first_name = 'Enter a valid name';
  } else {
    error.first_name = '';
  }

  // Checking email
  const ValidateEmail = (email: string) => {
    const isUpper = Boolean(/[A-Z]/.test(email));
    if (isUpper) {
      return false;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return Boolean(re.test(email.trim()));
  };

  if (values?.email_id?.length > 0) {
    if (!ValidateEmail(values?.email_id)) {
      isValid = false;
      error.email_id = 'Please enter the valid mail';
    } else {
      error.email_id = '';
    }
  } else {
    isValid = false;
    error.email_id = 'Please enter the mail';
  }

  return { isValid, error };
};

export const giveMeAuthInitialState = (): {
  signUpState: profileInterface;
} => {
  return {
    signUpState: {
      name: '',
      emailId: '',
      mobile_no: '',
      mobileCode: 91,
      location: {
        address: '',
        latitude: '',
        longitude: '',
      },

      error: { name: '', emailId: '', mobile_no: '', location: '', location_coordinates: '' },
    },
  };
};

export interface productInterface {
  id: number;
  category_name: any | string | undefined;
  document_url: string;
  is_primary: boolean
}

export interface SelectProductInterface {
  id: number | string | null;
}
export interface ProductCategoryInterface {
  productCategoryState: productInterface[];

  productCategoryLoading: boolean;

  addProductMessage: string;

  addProductError: boolean;

  addProduct: (product: SelectProductInterface[]) => void;
  getProduct: () => void;
}

export interface productSearchInterface {
  id: string | undefined;
  url: string | undefined;
  product_name: string | undefined;
}

export interface productSpecificationInterface {
  title: string | undefined;
  value: string | undefined;
}
export interface SearchProductInterface {
  suggestion: string[];
  products: productSearchInterface[];
  productsCopy: productSearchInterface[];
  specification: productSpecificationInterface[];
  loading: boolean;
  error: boolean;
  searchTerm: string;
  suggestionTerm: string;
  setSearchTermFnc: (val: string) => void;
  initialStoreFnc: () => void;
  setSuggestionTermFnc: (val: string) => void;
  getSearchProduct: (search: string, type: string, isSuggestion: boolean, filter?: any) => void;
  clearSearch: () => void;
}

interface OptionInterface {
  value: string;
  label: string;
  Brands: any[];
}

interface ValueInterface {
  value: string;
  label: string;
  Brands?: any[];
}

export interface SearchFilter {
  value: string;
  label: string;
  selectParent: null | undefined;
  selectChild: null | undefined;
  option: OptionInterface[];
  values: ValueInterface[];
}

export interface searchProductFilterInterface {
  data: SearchFilter[];
  categoryData: OptionInterface[];
  loading: boolean;
  selectedParent: number;
  updateCategoryAndBrand: (firstObj: any) => void;
  handleClickChildFnc: (x: object, searchTerm?: string) => void;
  updateOnFilterParentIndex: (i: number, value: any) => void;
  handleChipUpdateClick: (i: number) => void;
  fetchCategory: (categoryId: string) => void;
  fetchCategoryFromProductName: (brandName: string) => void;
  setAFilterCategorySelected: (value: any, label: string, filterData: any, filterBrandData?: any) => void
  initialStoreFnc: () => void;
  deleteFilter: (index: number) => void;
  singleFilterData: SearchFilter | null;
  selectedParentValue: number;
  brandData: any;
}

export interface SummaryProductInterface {
  title: string;
  value: string;
}

export interface WarrantyData {
  icon: JSX.Element;
  showCoverage: boolean;
  showInsurance: boolean;
  label: string;
  firstText: string;
  secondText: string;
  thirdText: string;
  warrantyShow: boolean;
  show: boolean;
}

export interface DocumentInterface {
  icon: JSX.Element;
  title: string;
  subTitle: string;
}
export interface ProductSummaryInterface {
  productSummary: SummaryProductInterface[];
  warrantyInsuranceAmcData: WarrantyData[];
  documentData: DocumentInterface[];
  genProductSummary: (addProductDetails: AddProductDetailsInterface) => void;
}

export interface SpecificationsInterface {
  label: string;
  value: never | any;
  options: { value: any; label: string }[];
}

export interface CategoryInterface {
  label: string;
  value: string;
  specifications: SpecificationsInterface[];
  category_id: string;
  id: string;
  category_name: string;
  serial_no?: { title: any; info_text: string; info_image_url: string };
}

export interface DetailsOfProductInterface {
  name: string;
  url: string;
  category_id?: string;
  category_name?: string;
  approx_years: number;
  brand: string;
  type_id?: string;
  description?: string;
  serial_no: any;
  product_name: any;
  specifications: { [key: string]: string };
}

export interface ProductDetailsInterface {
  nick_name: string;
  product_id: string;
  category: CategoryInterface;
  product_name: string;
  brand_name: string;
  category_id: string;
  type_id: string;
  description: string;
  approx_years: number;
  reference_id: string;
  location_latitude: string | number;
  location_longitude: string | number;
  specifications: object;
  brand: string;
  product_details: DetailsOfProductInterface;
  date_of_purchase: string;
  data_of_purchase: string;
  approximateAge: number;
  product_serial_no: string;
  image_url: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  serial_no: string;
  location_name: string;
  imei_no: string;
  mode_of_purchase: string;
  dateofpurchase: string;
  purchase_location: LocationData;
  std_warranty: boolean;
  ext_warranty: boolean;
  insurance: boolean;
  amc: boolean | null;
}

export interface editProductDetails {
  nick_name: string;
  product_id: string;
  serial_no: string;
  date_of_purchase: string;
  mode_of_purchase: string;
  purchase_location: LocationData;
  imei_no: string;
  product_serial_no: string;
  category_type_name: string;
}

export interface WarrantyInterface {
  applied: boolean | null;
  start_date?: string | null;
  coverage: string | null;
  units: string | null;
  document: File | any;
}

export interface InsuranceInterface {
  insurer_name: string | null;
  policy_no: string | null;
  purchased_on: string | null;
  insurance_start_date?: string | null;
  coverage: string | null;
  units: string | null;
  document: File | any;
}

export interface AMCInterface {
  serial_no: any;
  purchased_on: any;
  coverage: any;
  units: any;
  document: File | any;
}

export interface InvoiceInterface {
  document: File | any;
}
export interface DocumentDetailsInterface {
  isWarrantyApplicable: boolean | null;
  isInsuranceApplicable: boolean | null;
  isAMCApplicable: boolean | null;
  warranty: WarrantyInterface;
  extended_warranty: WarrantyInterface;
  insurance: InsuranceInterface;
  amc: AMCInterface;
  invoice: InvoiceInterface;
}

export interface categoryData {
  label: string;
  value: string;
  fields: specificationData[];
}

export interface specificationData {
  label: string;
  value: string;
}

export interface InitialState {
  userProductId: string;
  documentMultiple?: string;
  scanType: string;
  currentStep: number;
  productDetails: ProductDetailsInterface;
  documentDetails: DocumentDetailsInterface;
  category: { loading: boolean; error: boolean; data: categoryData[] };
  error: boolean;
  loading: boolean;
  success: boolean;
  getProductState: getProductDetailsInterface;
}

export interface StdWarrantyDetails {
  warranty_coverage: number | null;
  warranty_coverage_type: string;
  warranty_document_url: [];
}

export interface productNicknameInterface {
  id: string;
  category_type_id: string;
  nick_name: string;
}

export interface AddProductDetailsInterface {
  userProductId: string;
  whats_app_media_id: string | null;
  documentMultiple?: string;
  scanType: string;
  currentStep: number;
  productDetails: ProductDetailsInterface;
  documentDetails: DocumentDetailsInterface;
  productNickname: productNicknameInterface[];
  whatsAppCoverage_id: string | null;
  whatsAppProductDetails: any;
  getWhatsAppProduct: () => void;
  updateProducts: (key: keyof AddProductDetailsInterface, value: any) => void;
  onScanType: (val: string) => void;
  OnWhatsAppCoverageId: (id: string | null) => void;
  addCategoryproduct: () => void;

  updateProductDetails: (key: keyof ProductDetailsInterface, value: never | any) => void;
  updateProductSerialNo: (key: keyof ProductDetailsInterface, value: never) => void;
  updateProductDetailsSpecification: (key: string, value: any, limit?: number | string) => void;
  updateProductDetailsName: (name: string) => void;
  updateDocumentDetails: (key: keyof DocumentDetailsInterface, value: never) => void;
  onUploadCaptureFile?: (val: any) => void;
  productYearIncrementDecrement?: (key: string, value: any,) => void

  // standard warranty
  updateWarrantyDetails: (key: keyof WarrantyInterface, value: any | never, limit?: number) => void;
  updateWarrantyDocumentDetails: (key: keyof WarrantyInterface, value: any | never, limit?: number) => void;
  warrantyDocumentDelete: (key: keyof WarrantyInterface, value: any | never, index?: number) => void;

  // Extended warranty
  updateExtendedWarrantyDetails: (key: keyof WarrantyInterface, value: any | never, limit?: number) => void;
  updateExtendedWarrantyDocument: (key: keyof WarrantyInterface, value: any | never, limit?: number) => void;
  documentDelete: (key: keyof WarrantyInterface, value: any | never, index?: number) => void;

  // Insurance
  updateInsuranceDetails: (key: keyof InsuranceInterface, value: any | never, limit?: number) => void;
  updateInsuranceDocument: (key: keyof InsuranceInterface, value: any | never, limit?: number) => void;
  insuranceDocumentDelete: (key: keyof InsuranceInterface, value: any | never, index?: number) => void;

  // amc
  updateAmcDetails: (key: keyof AMCInterface, value: any | never, limit?: number) => void;
  updateAmcDocument: (key: keyof AMCInterface, value: any | never, limit?: number) => void;
  amcDocumentDelete: (key: keyof AMCInterface, value: any | never, index?: number) => void;

  // invoice
  updateInvoiceDetails: (key: keyof InvoiceInterface, value: never) => void;
  updateInvoiceDocument: (key: keyof InvoiceInterface, value: never) => void;
  invoiceDocumentDelete: (key: keyof InvoiceInterface, value: any | never, index?: number) => void;
  setApproxYears: (key: any, value: any | never, index?: number) => void;
  getCategory: (callback?: any) => void;

  // get warranty details
  getStandardWarrantyDetails: (payload: any) => void;
  standard_warranty_details: StdWarrantyDetails;
  category: { loading: boolean; error: boolean; data: categoryData[] };
  error: boolean;
  loading: boolean;
  success: boolean;
  getProductState: getProductDetailsInterface;
  addProduct: () => void;
  getProduct: (id: string) => void;
  getProductNicknames: (id: string) => void;
  clearProfile: () => void;
  clearDocumentState: () => void;
}

export interface UpdateStandardWarrantyInterface {
  warranty_document_url: File | null;
  warranty_coverage_type: string;
  warranty_coverage: number | null;
  warranty_serial_no: string;
  is_std_warranty_applicable: boolean;
}


export interface addProductCategoryDetails {
  // product_id: string,
  // date_of_purchase: string,
  // serial_no: string,
  // approx_years: number,
  // mode_of_purchase: string,
  // imei_no: string,
  // location_name: string,
  // location_latitude: number,
  // location_longitude: number,
  // nick_name: string,
  // std_warranty: boolean,
  // ext_warranty: boolean,
  // insurance: boolean,
  // amc: boolean,
  // specifications: object,
  // product_name: string
  // brand_name: string
  // category_id: string
  // type_id: string
  // description: string
  nick_name: string;
  product_id: string;
  category?: CategoryInterface;
  product_name: string;
  brand_name: string;
  category_id: string;
  type_id: string;
  description: string;
  approx_years: number;
  reference_id: string;
  location_latitude: string | number;
  location_longitude: string | number;
  specifications: object;
  brand: string;
  product_details?: DetailsOfProductInterface;
  date_of_purchase: string;
  data_of_purchase: string;
  approximateAge: number;
  product_serial_no: string;
  image_url: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  serial_no: string;
  location_name: string;
  imei_no: string;
  mode_of_purchase: string;
  purchase_location: LocationData;
  std_warranty: boolean;
  ext_warranty: boolean;
  insurance: boolean;
  amc: boolean | null;

}


export interface AddProductCategoryInterface {
  categoryProduct: string;
  currentStep: number;
  userProductId: string;
  error: boolean;
  loading: boolean;
  standard_warranty_details: StdWarrantyDetails;
  productDetails: addProductCategoryDetails;
  documentDetails: DocumentDetailsInterface;
  setSearchCategoryFnc: (val: any) => void;
  clearCategoryFnc: () => void
  updateProductDetails: (key: any, value: never | any) => void
  // addCategoryproduct: () => void;
  updateProducts: (key: keyof AddProductCategoryInterface, value: any) => void
}

export interface UpdateExtendedWarrantyInterface {
  service_provider_name: string;
  warranty_document_url: File | null;
  warranty_coverage_type: string;
  warranty_coverage: number | null;
  extended_start_date: string;
  warranty_serial_no: string;
  is_ext_warranty_applicable: boolean;
}

export interface UpdateInsuranceInterface {
  insurance_document_url: File | null;

  insurer_name: string | any;
  policy_no: string | any;
  insurance_purchased_on: string | any;
  insurance_start_date: string;
  insurance_coverage: number | null;
  insurance_coverage_type: string;
  is_insurance_applicable: boolean;
}

export interface UpdateAMCInterface {
  amc_document_url: File | null;
  amc_serial_no: string | any;
  amc_coverage: number | null;
  amc_purchased_on: string | any;
  amc_service_provider_name: string | any;
  is_amc_applicable: boolean;
}

export interface UpdateProductServiceInterface {
  amc_details: UpdateAMCInterface;
  no_amc: boolean;
  insurance_details: UpdateInsuranceInterface;
  no_insurance: boolean;
  no_warranty: boolean;
  standard_warranty_details: UpdateStandardWarrantyInterface | any;
  no_extWarranty: boolean;
  extended_warranty_details: UpdateExtendedWarrantyInterface;
  updateWarrantyDetails: (key: keyof UpdateStandardWarrantyInterface, value: never) => void;
  updateExtendedWarrantyDetails: (key: keyof UpdateExtendedWarrantyInterface, value: never) => void;
  updateInsuranceDetails: (key: keyof UpdateInsuranceInterface, value: never, limit?: number) => void;
  updateAmcDetails: (key: keyof UpdateAMCInterface | any, value: never | any | string, limit?: number) => void;

  updateNoAmcCheckBox: (value: boolean) => void;
  updateNoInsuranceCheckBox: (value: boolean) => void;
  updateNoExtWarrantyCheckBox: (value: boolean) => void;
  updateAmcCoverage: (key: string, value: string, key1: string, value1: string, key2: string, value2: string) => void;
  updateInsuranceCoverage: (
    key: string,
    value: string,
    key1: string,
    value1: string,
    key2: string,
    value2: string,
    key3: string,
    value3: string,
  ) => void;
  updateStandardCoverage: (key: string, value: any) => void;

  error: boolean;
  loading: boolean;
  success: boolean;

  updateAmcService: (id: string | undefined, amc?: any, callback?: any) => void;

  updateInsuranceService: (id: string | undefined, insurance?: any, callback?: any) => void;

  updateWarrantyService: (id: string | undefined, callback?: any) => void;

  updateExtWarrantyService: (id: string | undefined, extended?: any, callback?: any) => void;
}

export interface getProductDetailsInterface {
  amc: any | never[];
  ext_warranty: any | never[];
  insurance: any | never[];
  std_warranty: any | never[];
}
export interface productIconInterface {
  light_theme: string;
  dark_theme: string;
}

export interface productToBeAdded {
  icon: productIconInterface;
  category_name: string;
  category_id: string;
}

export interface chooseProductData {
  image_url: string;
  nick_name: string;
  product_name: string;
  user_product_id: string;
  is_amc_applicable: boolean;
  is_ext_warranty_applicable: boolean;
  is_insurance_applicable: boolean;
  is_invoice_applicable: boolean;
}

export interface actionRequiredInterface {
  actionRequiredState: ActionRequired;
  productToBeAddedState: productToBeAdded[];
  myProductState: myProductData[];
  actionCardLoading: boolean;
  error: boolean;
  actionRequired: any;
  handleUpdateState: (data: ActionRequired) => void;
  getDisplayActionRequired: (id?: string) => void;
  getProductToBeAdded: () => void;
  getMyProduct: () => void;

  //choose product
  chooseProductState: chooseProductData[];
  chooseProductDetails: chooseProductData;
  chooseProductLoading: boolean;
  openChooseProductDrawer: boolean;
  openMyProductDrawer: boolean;
  currantDrawer: number;
  getChooseYourProduct: () => void;
  getCurrantDrawerUpdate: (val: number) => void;
  getChooseProductUpdate: (val: chooseProductData) => void;
  getChooseProductDrawerUpdate: (val: boolean) => void;
  getMyProductDrawer: (val: boolean) => void;
}

interface productDetail {
  nick_name: string;
  image_url: string;
  serial_no: any;
  product_id: string;
  product_serial_no: string;
  imei_no: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  date_of_purchase: string;
  mode_of_purchase: string;
  purchase_location: LocationData;
  category: CategoryInterface;
  location_name: string;
  std_warranty?: boolean;
  ext_warranty?: boolean;
  insurance?: boolean;
  amc?: boolean | null;
  brand?: string;
  is_invoice: boolean;
  is_ext_warranty_applicable: boolean;
  is_insurance_applicable: boolean;
  is_amc_applicable: boolean;
  product_name: string;
  user_product_id: string;
  is_invoice_applicable: boolean;
  category_type_name: string;
  // product_details: DetailsOfProductInterface;
}
interface amcExpiringInterface {
  insurance_details: {
    insurer_name: string;
    insurance_valid_to: string;
    insurance_policy_no: string;
    insurer_id: string;
  };
  amc_details: {
    amc_id: string;
    amc_serial_no: string;
    amc_valid_to: string;
  };
  warranty_id: string;
  warranty_valid_to: string;
  is_extended: boolean;
  product_details: {
    product_id: string;
  };
}

interface productSpecification {
  id: string;
  name: string;
  description: string;
  brand: string;
  specifications: object;
}

interface productMaintenanceInterface {
  document_url: string;
  maintenance_name: string;
  service_cost: string;
  service_date: string;
  service_type: string;
}

interface activityInterface {
  product_id: string;
  activity_date: string;
  activity_name: string;
  product_name: string;
}
interface activityLogInterface {
  activity_logs: activityInterface[];
  product_image: string;
  product_name: string;
  // activity_logs:
}

interface selectCardInterface {
  productSpecificationCard: boolean;
  insuranceCard: boolean;
  amcCard: boolean;
  activityLogCard: boolean;
}

export interface productInsuranceDetailsInterface {
  insurance_document_url: File | null;
  insurer_name: string;
  insurance_policy_no: string;
  insurance_purchased_on: string;
  insurance_start_date?: string;
  insurance_coverage: number;
  insurance_coverage_type: string;
}

export interface standardWarrantyDetailsInterface {
  is_extended: boolean;
  provider_logo: string;
  provider_name: string;
  warranty_coverage: number;
  warranty_coverage_type: string;
  warranty_id: string;
  warranty_serial_no: string;
  warranty_valid_from: string;
  warranty_document_url: File | null;
  warranty_valid_to: string;
  WarrantyForm?: any;
}

export interface extendedWarrantyDetailsInterface {
  is_extended: boolean;
  provider_logo: string;
  provider_name: string;
  warranty_coverage: number;
  warranty_coverage_type: string;
  warranty_id: string;
  warranty_serial_no: string;
  warranty_document_url: File | null;
  warranty_valid_from: string;
  warranty_valid_to: string;
}

export interface amcDetailsInterface {
  provider_logo: string;
  provider_name: string;
  amc_id: string;
  amc_serial_no: string;
  amc_valid_to: string;
  amc_document_url: File | null;
  amc_coverage: number;
  amc_purchased_on: string;
  amc_valid_from: string;
  amc_service_provider_name: string;
  is_amc_applicable: boolean;
}
export interface PrimaryService {
  is_whats_app: boolean;
  location_name: string;
  primary_mobile_no: null | number;
  provider_name: string;
}

export interface productDetailsInterface {
  loading: boolean;
  error: boolean;
  getProductDetails: (id: string | undefined) => void;
  updateProductDetails: (key: keyof ProductDetailsInterface, value: never) => void;
  editProductDetails: (key: keyof ProductDetailsInterface, value: never) => void;
  updateEditSerialNo: (key: any, value: never | any, index: string | number) => void;
  updateEditProductDetails: (callback?: any) => void;
  getMaintenanceDetails: (id?: string | undefined) => void;
  getActivityDetails: (id?: string | undefined) => void;
  product_details: productDetail;
  edit_product_details: editProductDetails;
  is_primary_service_provider: boolean;
  primary_service_provider: PrimaryService;
  product_specification: productSpecification;
  warrantyDetailsState: amcExpiringInterface;
  insurance_details: productInsuranceDetailsInterface;
  amc_details: amcDetailsInterface;
  std_warranty_details: standardWarrantyDetailsInterface;
  extended_warranty_details: extendedWarrantyDetailsInterface;
  productMaintenance: productMaintenanceInterface[];
  user_product_id: string;
  activityState: activityLogInterface;
  selectCard: selectCardInterface;
  selectAllCheckBoxClick: (value: boolean) => void;
  updateCard: (value: boolean, key: string) => void;
  updateAmcDetails?: (key: string, value: boolean) => void;
}

export interface PointsInterface {
  pointIcon: JSX.Element;
  pointText: string;
}

export interface TabDataInterface {
  title: any;
  points: PointsInterface[];
}

export interface AmcDetailsInterface {
  nick_name: string;
  provider_name: string;
  provider_logo: string;
  product_serial_no: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  amc_id: string;
  amc_document_url: string;
  amc_serial_no: string;
  amc_purchased_on: string;
  amc_valid_from: string;
  amc_valid_to: string;
  tabData: TabDataInterface[];

  amcDetailsLoading: boolean;

  amcDetailsMessage: string;

  amcDetailsError: boolean;

  getAmcDetails: (id: string) => void;
}

export interface ExploreAmc {
  id: string;
  nick_name: string;
  provider_name: string;
  price: number;
  no_of_Service_avilable: number;
  provider_logo: string;
  coverage: number;
  coverage_type: string;
  inclusion: string[];
  exclusion: string[];
}

export interface ExploreAmcCardInterface {
  exploreAmcState: ExploreAmc[];

  tabData: TabDataInterface[];

  exploreAmcLoading: boolean;

  exploreAmcMessage: string;

  exploreAmcError: boolean;

  searchTerm: string;

  pricingData: boolean;

  initialStoreFnc: () => void;
  clearSearch: () => void;

  getAmcExploreData: (id: string) => void;

  updateState: (value: string) => void;
  updateSortState: (value: boolean) => void;
}

// Explore Available Insurance

export interface ExploreInsurance {
  id: string;
  nick_name: string;
  provider_name: string;
  price: number;
  provider_logo: string;
  coverage: string;
  coverage_type: string;
  inclusion: string[];
  exclusion: string[];
}

export interface ExploreInsuranceCardInterface {
  exploreInsuranceState: ExploreInsurance[];

  tabData: TabDataInterface[];

  exploreInsuranceLoading: boolean;

  exploreInsuranceMessage: string;

  exploreInsuranceError: boolean;

  searchTerm: string;

  pricingData: boolean;

  initialStoreFnc: () => void;

  getInsuranceExploreData: (id: string) => void;

  updateState: (value: string) => void;

  updateSortState: (value: boolean) => void;
}

// Explore Available Warranty

export interface ExploreWarranty {
  id: string;
  provider_name: string;
  price: number;
  provider_logo: string;
  inclusion: string[];
  exclusion: string[];
}

export interface ExploreWarrantyInterface {
  exploreWarrantyState: ExploreWarranty[];

  tabData: TabDataInterface[];

  exploreWarrantyLoading: boolean;

  exploreWarrantyMessage: string;

  exploreWarrantyError: boolean;

  searchTerm: string;

  pricingData: boolean;

  initialStoreFnc: () => void;

  getWarrantyExploreData: (id: string) => void;

  updateState: (value: string) => void;

  updateSortState: (value: boolean) => void;
}

export interface InsuranceDetailsInterface {
  nick_name: string;
  product_serial_no: string;
  provider_name: string;
  provider_logo: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  product_id: string;
  category_type_id: string;
  insurance_id: string;
  insurer_name: string;
  insurance_document_url: string;
  insurance_policy_no: string;
  insurance_purchased_on: string;
  insurance_start_date: string;
  insurance_valid_from: string;
  insurance_valid_to: string;
  tabData: TabDataInterface[];
  policy_no: string | any;
  insurance_coverage: any;
  insurance_coverage_type: any;
  is_insurance_applicable: any;
  insuranceDetailsLoading: boolean;

  insuranceDetailsMessage: string;

  insuranceDetailsError: boolean;

  getInsurancecDetails: (id: string) => void;
}

export interface StandardWarrantyInterface {
  nick_name: string;
  product_serial_no: string;
  provider_name: string;
  provider_logo: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  product_id: string;
  category_type_id: string;
  warranty_id: string;
  warranty_document_url: string;
  is_extended: boolean;
  warranty_valid_from: string;
  warranty_valid_to: string;
}

export interface ExtendedWarrantyInterface {
  nick_name: string;
  product_serial_no: string;
  provider_name: string;
  provider_logo: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  product_id: string;
  category_type_id: string;
  warranty_id: string;
  warranty_document_url: string;
  is_extended: boolean;
  warranty_valid_from: string;
  warranty_valid_to: string;
}

export interface WarrantyDetailsInterface {
  standardWarrantyState: StandardWarrantyInterface;
  extendedWarrantyState: ExtendedWarrantyInterface;
  tabData: TabDataInterface[];

  warrantyDetailsLoading: boolean;

  warrantyDetailsMessage: string;

  warrantyDetailsError: boolean;

  getWarrantyDetails: (id: string) => void;
}

export interface ExtendedWarrantyDetailsInterface {
  nick_name: string;
  product_serial_no: string;
  product_id: string;
  category_type_id: string;
  standard_qus_and_ans: questionInterface[];
  is_chat_bot: boolean;
  provider_logo: string;
  provider_name: string;
  warranty_id: string;
  warranty_document_url: string;
  is_extended: boolean;
  warranty_valid_from: string;
  warranty_valid_to: string;
  tabData: TabDataInterface[];

  extendedWarrantyDetailsLoading: boolean;

  extendedWarrantyDetailsMessage: string;

  extendedWarrantyDetailsError: boolean;

  getExtendedWarrantyDetails: (id: string) => void;
}
export interface ProfileDetailsInterface {
  first_name: string;
  email_id: string;
  mobile_code: number;
  mobile_no: string;
  location: LocationData | null;
  profile_image: string | File;
  theme: string;
  error: {
    first_name: string;
    email_id: string;
    mobile_code: number;
    mobile_no: string;
    profile_image: string | File;
    location: LocationData | null;
    theme: string;
  };
}

export interface UserProfileInterface {
  profileDetails: ProfileDetailsInterface;

  notification: boolean;

  profileLoading: boolean;
  profileSuccessMessage: boolean;
  profileErrorMessage: boolean;

  editProfileUpdateState: (
    key: keyof ProfileDetailsInterface,
    value: string | number | LocationData | File | null,
  ) => void;

  getProfileDetails: () => void;
  editProfileDetails: () => void;
  getWhatsAppNotification: () => void;
  updateNotification: () => void;
  updateWhatsAppNotification: (value: boolean) => void;
}

// AVAILABLE INSURANCE DETAILS

export interface AvailableInsurance {
  id: string;
  insurance_provider_name: string;
  provider_name: string;
  price: number;
  provider_logo: string;
  inclusion: string[];
  exclusion: string[];
}

export interface AvailableInsuranceDetailsInterface {
  availableInsurance: AvailableInsurance[];

  availableInsuranceDetailsLoading: boolean;

  availableInsurancemcDetailsMessage: string;

  availableInsurancemcDetailsError: boolean;

  getAvailableInsuranceDetails: (id: string) => void;
}

// AVAILABLE AMC DETAILS

export interface AvailableAmc {
  id: string;
  nick_name: string;
  provider_name: string;
  price: number;
  no_of_Service_avilable: string;
  provider_logo: string;
  amc_coverage: number;
  coverage_type: string;
  inclusion: string[];
  exclusion: string[];
}

export interface AvailableAmcDetailsInterface {
  availableAmc: AvailableAmc[];

  availableAmcDetailsLoading: boolean;

  availableAmcmcDetailsMessage: string;

  availableAmcmcDetailsError: boolean;

  getAvailableAmcDetails: (id?: string | undefined) => void;
}

// AVAILABLE WARRANTY DETAILS

export interface AvailableWarranty {
  id?: string;
  warranty_provider_name?: string;
  provider_name: string;
  price?: number;
  provider_logo?: string;
  inclusion: string[];
  exclusion: string[];
}

export interface AvailableWarrantyDetailsInterface {
  availableWarranty: AvailableWarranty[];

  availableWarrantyDetailsLoading: boolean;

  availableWarrantymcDetailsMessage: string;

  availableWarrantymcDetailsError: boolean;

  getAvailableWarrantyDetails: (id: string) => void;
}

// SECURE PRODUCT INTERFACE

export interface AmcDetails {
  amc_provider: string;
  document_url: string | File;
  serial_no: string;
  amc_coverage: number | string;
  purchased_on: string;
  valid_from: string;
  valid_to: string;
}

export interface InsuranceDetails {
  document_url: string | File;
  insurer_name: string;
  policy_no: string | any;
  purchased_on: string;
  insurance_start_date: string;
  insurance_coverage: number | string;
  coverage_type: string;
  valid_from: string;
  valid_to: string;
}

export interface StandardWarrantyDetails {
  warranty_provider: string;
  document_url: string | File;
  coverage_type: string;
  warranty_coverage: number | string;
  is_extended: boolean;
  valid_from: string;
  valid_to: string;
}

export interface ExtendedWarrantyDetails {
  warranty_provider: string;
  document_url: string | File;
  coverage_type: string;
  warranty_coverage: number | string;
  is_extended: boolean;
  valid_from: string;
  valid_to: string;
}

export interface SecureData {
  extended_warranty_details?: ExtendedWarrantyDetails;
  amc_details?: AmcDetails;
  insurance_details?: InsuranceDetails;
  standard_warranty_details?: StandardWarrantyDetails;
  nick_name?: string;
}

export interface SecureProductInterface {
  nick_name: string;
  secureData: SecureData;
  amc_details: AmcDetails;
  insurance_details: InsuranceDetails;
  standard_warranty_details: StandardWarrantyDetails;
  extended_warranty_details: ExtendedWarrantyDetails;

  clear: () => void;
  getSecureProduct: (id: string) => void;

  secureProductLoading: boolean;

  secureProductError: boolean;

  secureProductMessage: string;
}

// AVAILABLE INSURANCE DETAILS

export interface AvailableInsurance {
  id: string;
  insurance_provider_name: string;
  price: number;
  provider_logo: string;
  inclusion: string[];
  exclusion: string[];
}

// AVAILABLE AMC DETAILS

export interface AvailableAmc {
  id: string;
  nick_name: string;
  amc_provider_name: string;
  price: number;
  no_of_Service_avilable: string;
  provider_logo: string;
  amc_coverage: number;
  coverage_type: string;
  inclusion: string[];
  exclusion: string[];
}

export interface EmailVerificationInterface {
  email_id: string;
  otp: string;
  emailLoading: boolean;
  emailError: boolean;
  editEmail: boolean;
  drawerOpen: boolean;
  isVerified: boolean;
  setEditEmail: (value: boolean) => void;
  setIsVerified: (value: boolean) => void;
  setDrawerClose: (value: boolean) => void;
  setEditEmailClose: () => void;
  updateOtpState: (value: string) => void;
  clearStateEmpty: () => void;
  sentEmailCode: (email_id: string) => void;
  getVerifyCode: (otp: string) => void;
  editEmailUpdateState: (value: string) => void;
}
export interface productListProps {
  map(arg0: (list: productListProps) => JSX.Element): React.ReactNode;
  id?: string;
  category_type_id?: string;
  nick_name?: string;
  image_url?: string;
  next_service_date?: string;
  is_service_available?: boolean;
}

export interface ServiceProvidersListProps {
  id?: string;
  provider_name?: string;
  provider_logo?: string;
  google_ref_id?: string;
  provider_id?: string;
  location_name?: string;
  is_bookmark?: boolean;
  location_coordinate?: {
    lat: number | null;
    lng: number | null;
  };
  mobile_no?: number | null;
  sec_mobile_no?: number | null;
  store_start_date?: string;
  inspection_charge?: number;
  benefits?: Array<string>;
  type_id?: string;
  starts_from?: string;
  working_hours?: string;
  is_book_service?: boolean;
  is_active_amc?: boolean;
  is_primary?: boolean;
  is_primary_service_provider?: boolean;
  primary_service_provider?: boolean;
}

export interface productInfoProps {
  product_info: {
    id: string;
    category_type_id: string;
    is_preferred_service_provider: boolean;
    category_id: string;
    product_name: string;
    nick_name: string;
    image_url: string;
  };

  product_specification: {
    product_serial_no: string;
    product_name: string;
    purchased_on: string;
    model_no: string;
    specifications: string;
    invoice_no: string;
    invoice_document_url: string;
  };
}

export interface SlotProps {
  id: string | number;
  date: string | Date;
  date_time: string | Date;
}

export interface ServiceProvider {
  providers_name: string;
  primary_mobile_no: number | null;
  sec_mobile_no: number | null;
  location_name: string;
  primary_service_provider: boolean;
}

export interface AddPreferableData {
  providers_name: string;
  primary_mobile_no: number | null;
  sec_mobile_no?: number | null;
  location_name: string;
  reference_id: string;
  location_latitude: string | number;
  location_longitude: string | number;
}

export interface ServiceProvidersInterface {
  productList: productListProps[];
  getProductList: () => void;
  chooseProductLoading: boolean;
  chooseProductError: boolean;

  productDetails: productInfoProps;
  getProductDetails: (id: string) => void;
  editServiceProviders: (callback?: any, is_primary?: any) => void;
  editServiceLoading: boolean;
  editServiceError: boolean;
  productDetailsLoading: boolean;
  productDetailsError: boolean;

  serviceProvidersList: ServiceProvidersListProps[];
  getServiceProvidersList: (payload?: any) => void;
  serviceProvidersListLoading: boolean;
  serviceProvidersListError: boolean;

  selectedFilterStateCount: number;
  filterDataState: {
    searchInput: { value: string; badge: boolean };
    priceRange: { value: [number, number]; badge: boolean };
    inspectionCharge: { value: [number, number]; badge: boolean };
    experience: { value: string; badge: boolean };
    operatingHours: { value: string; badge: boolean };
  };

  // prefer service provider

  openRegularServiceDrawer: boolean;
  openAddServiceProviderDrawer: boolean;
  openEditServiceProviderDrawer: boolean;
  openWorkingHoursDrawer: boolean;
  openPrimaryServiceDrawer: boolean;
  showSecondaryMobileField: boolean;
  removePreferableDrawer: boolean;
  showMoreResult: boolean;
  addProviderLoading: boolean;
  isShowMoreResult: boolean;
  addServiceProvider: ServiceProvider;
  removePreferableDate: {
    provider_id?: string;
    google_ref_id: string;
    user_product_id?: string;
  };
  editPreferableData: {
    provider_id: string;
    providers_name: string;
    user_product_id: string;
    is_primary: boolean | null;
  };
  addPreferableData: AddPreferableData;
  serviceProviderUpdateState: (key: string, val: ServiceProvider, limit?: number) => void;
  updateServiceProviderList: (key: string, val: ServiceProvider) => void;
  updateDrawerState: (key: string, val: any) => void;
  updateAddProviderServiceApi: (id: any) => void;
  updateAddPreferableApi: () => void;
  checkUnCheckBookmark: (index: number) => void;
  editMarkAsPrimary: (index: number) => void;
  removePreferableService: (index: number, callback: any) => void;
  updateRemovePreferableApi: (callback: any) => void;
  openGoogleResponse: () => void;
  clearAddProviderState: () => void;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  updateFilterState: ({ key, value }: { key: keyof ServiceProvidersInterface['filterDataState']; value: any }) => void;
  clearFilterState: () => void;
  updateSelectedFilterStateCount: () => void;

  currentLocation: LocationData;
  setCurrentLocation: (data: LocationData) => void;
  getServiceProvidersPayLoad: (LocationData?: any) => object;

  selectedProvider: ServiceProvidersListProps;
  setSelectedProvider: (data: ServiceProvidersListProps) => void;

  filterServiceProvidersList: ServiceProvidersListProps[];
  setFilterServiceProvidersList: (data: ServiceProvidersListProps[]) => void;

  selectedDate: Date | string;
  setSelectedDate: (date: Date | string) => void;

  selectedSlot: SlotProps[];
  setSelectedSlot: (data: SlotProps) => void;
  bookingSlot: () => void;
  bookingSlotError: boolean;
  bookingSlotLoading: boolean;
}

// interface scanData {}
interface dataURIs {
  src: any;
}

export interface UploadFile {
  image: object;
  name: string;
}
export interface documentInvoiceInterface {
  serial_no: string;
  imei_no: string;
  linkUrl: string | null;
  nick_name: string;
}

interface currentStatus {
  step: number;
  status: string;
  skip?: Array<string>;
  isExtendedWarranty?: boolean;
}

interface ExtendedWarranty {
  extended_start_date: string;
  service_provider_name: string;
  warranty_coverage: number | null;
  warranty_coverage_type: string;
  warranty_document_url: [];
}
interface ExtendedInsurance {
  insurance_coverage: number | null;
  insurance_coverage_type: string;
  insurance_document_url: [];
  insurance_purchased_on: string;
  insurance_start_date: string;
  policy_no: string;
  insurer_name: string;
}
interface ExtendedAmc {
  amc_coverage: number;
  amc_purchased_on: string;
  amc_document_url: [];
  amc_service_provider_name: string | any;
  amc_serial_no: string;
}

interface Service {
  type: null | string;
  service_bill: [];
  name: string;
  date_of_service: string;
  service_provider: string;
}

interface invoiceDetails {
  invoice_details: {
    inovice_document_url: [];
  };
}
export interface ChooseProductDetails {
  extended_warranty_details: ExtendedWarranty | any;
  insurance_details: ExtendedInsurance | any;
  amc_details: ExtendedAmc | any;
  service_details: Service;
  invoice_details: invoiceDetails | undefined;
}

interface productDetailInterface {
  invoice_details: any;
  std_warrantyDetails: any;
  extd_warrantyDetails: any;
  insurance_details: any;
  amc_details: any;
}

export interface serviceTypesInterface {
  id: string;
  type_name: string;
}

export interface serviceInterface {
  label: string;
  value: string;
}

export interface maintenancePayload {
  scheduler_id: string;
  service_bill: any | undefined; // Update the type accordingly, e.g., string | undefined or some other type
  name: string;
  date_of_service: string;
  service_provider: string;
  service_type?: any | serviceTypesInterface[] | undefined; // Add the optional service_type property
  user_product_id?: string | number; // Add the optional user_product_id property
}

export interface scanProductDetailsInterface {
  product_details: productDetailInterface | any;
  scanType: string;
  specifications: SpecificationsInterface[];
  dataURIs: dataURIs[];
  uploadType: string;
  homeType: string;
  insuranceUploadType: string;
  amcUploadType: string;
  amc_drawerType: string;
  warrantyType: string;
  extendedType: string;
  insuranceType: string;
  amcType: string;
  uploadFile?: UploadFile[] | undefined | any;
  currentStatus: currentStatus | any | undefined | string;
  user_productId: string;
  standardWarrantyDetails: string;
  invoiceDocument: documentInvoiceInterface | any;
  active: object;
  inActive: object;
  loading: boolean;
  responseMessage: boolean;
  productLoading: boolean;
  standardLoadingNew: boolean;
  getStandardWarrantyLoading: boolean;
  ProductError: boolean;
  serialIndex: number | string | any;
  productSuccess: boolean;
  amcLoading: boolean;
  updateAmcDrawer: boolean;
  amcDrawerUpdate: boolean;
  amcDrawerType: boolean;
  insuranceDrawerType: string;
  insuranceUpdateType: string;
  extendedDrawerType: string;
  updateInsuranceDrawer: boolean;
  insuranceDrawerUpdate: boolean;
  updateExtendedDrawer: boolean;
  extWarrantyLoading: boolean;
  insuranceLoading: boolean;
  serviceLoading: boolean;
  invoiceLoading: boolean;
  openInvoiceDrawer: boolean;
  documentDetails: {
    isInsuranceApplicable: any,
    isAMCApplicable: any,
  }
  warrantyLoading: boolean;
  serviceTypeOptions: serviceTypesInterface[];
  getServiceTypes: () => void;
  onUpdateCaptureImage: (val: string) => void;
  getAmcDrawerUpdate: (val: boolean) => void;
  getAmcUpdate: (val: boolean) => void;
  getInsuranceDrawer: (val: boolean) => void;
  getExtendedDrawer: (val: boolean) => void;
  getInsuranceDrawerUpdate: (val: boolean) => void;
  onInsuranceDrawerType: (val: string) => void;
  onInsuranceUpdateType: (val: string) => void;
  onExtendedDrawerType: (val: string) => void;
  onAmcDrawerUpdate: (val: any) => void;
  onUpdateType: (val: string) => void;
  onAmcDrawerType: (val: string) => void;
  onWarrantyType: (val: string) => void;
  onInsuranceType: (val: string) => void;
  onExtendedWarrantyType: (val: string) => void;
  onDeleteCaptureImage: (val: any) => void;
  onScanType: (val: any) => void;
  onUploadCaptureFile: (val: object) => void;
  onUpdateSerialNo: (val: number) => void;
  onUpdateImeiNo: (val: number) => void;
  onDeleteUploadFile: (val: any) => void;
  updateProduct: (key: keyof documentInvoiceInterface, value: never | any) => void;
  updateSerialNo: (key: keyof documentInvoiceInterface, value: never | any, index: number) => void;
  serialCheckedIndex: any;
  updateCheckedIndex: (key: string, val: any, index: number) => void;
  getScanProduct: (
    uploadScanFiles?: any,
    uploadFile?: UploadFile[] | undefined,
    invoiceDocument?: documentInvoiceInterface | undefined,
  ) => void;
  updateNicknameDetails: (key: any | number, val: never) => void;
  addScanProduct: (isShow?: any, standardWarantyPayloadData?: any) => void;
  onUpdateSkip: (val: any) => void;
  setProductDetailResponse: (key: string, val: any) => void;
  getSummaryProduct: (payload: any, type: string) => void;
  getWarrantyDetailsInclusionExclusion: (payload: any, type: string, callback?: any) => void;
  clearScan: () => void;
  clearInvoice: () => void;

  // choose product details
  externalDocumentProductDetails: ChooseProductDetails | any;
  warranty_details: object;
  checkedIndex: any;
  updateStandardWarrantyDocument: (callback?: any) => void;
  product_id: string;
  extWarrantyProductUploadType: string;
  insuranceProductUploadType: string;
  amcProductUploadType: string;
  serviceProductUploadType: string;
  getStandardWarranty: any;
  getStandardWarrantyUpdate: (val: any) => void;

  updateExtWarrantyDocument: (callback: any) => void;
  updateInsuranceDocument: (callback: any) => void;
  clearExternalDocumentState: () => void;
  updateAmcDocument: (callback: any) => void;
  updateInvoiceDocument: (uploadScanFiles?: any, uploadFile?: UploadFile[] | undefined, callback?: any) => void;
  updateProductId: (val: string) => void;
  onCheckedIndexUpdate: (val: number) => void;
  onHomeUpdateType: (val: string) => void;
  onInsuranceUploadType: (val: string) => void;
  onAmcUploadType: (val: string) => void;
  setProductDetail: (key: string, val: any) => void;
  externalDocumentUpdateState: (key: string, val: any, limit?: number) => void;
  externalAmcDocumentUpdateState: (key: string, val: any, limit?: number) => void;
  externalInsuranceDocumentUpdateState: (key: string, val: any, limit?: number) => void;
  clearSerialNo: () => void;
  updateAmcViewDetails: (key: keyof amcDetailsInterface, value: any) => void;
  updateAmcProductViewDetails: (key: keyof amcDetailsInterface, value: any) => void;
  // updateWarrantyDetails: (key: keyof WarrantyDetailsInterface, value: any) => void;
  updateInsuranceViewDetails: (key: keyof InsuranceDetailsInterface, value: any) => void;
  updateExtendedWarrantyViewDetails: (key: keyof UpdateExtendedWarrantyInterface, value: any) => void;
  // updateInsuranceDetails: (key: keyof InsuranceDetailsInterface, value: any) => void;
  clearUploadDocument: () => void;

  // service
  openServiceRecordDrawer: boolean;
  openServiceRecordType: boolean;
  serviceHistoryUploadType: string;
  productDetailsProductId: string;
  onServiceType: (val: string) => void;
  serviceType: string;
  scheduler_id: string;
  updateServiceDocument: (product_id: string) => void;
  updateDocumentDetails: (key: any, value: any) => void;
  updateServiceRecordDrawerState: (key: string, val: any) => void;
  serviceDocumentUpdateState: (key: string, val: any, limit?: number) => void;
}

export interface questionInterface {
  id: number | string;
  content: any;
  ans?: string;
}

export interface chatArray {
  message: string;
  type: string;
  questions: questionInterface[] | never[];
  from: string;
  to: string;
  date: string | number;
  title: string;
  role: string;
}

export interface sendChatBotInterface {
  id: string;
  type: string;
  question: string;
}

export interface ChatBotAmcInterface {
  chatBotState: chatArray[];
  chatBotHistoryState: any;
  chatBotAssistance: chatArray[];
  chatBotThanksRespond: chatArray[];
  chatBotMessageLoading: boolean;
  productLoading: boolean;
  questionsValue: string;
  sendMessage: (message: chatArray) => void;
  setLoadingMessage: (value: boolean) => void;
  sentRequestChatBot: (payload: sendChatBotInterface) => void;
  productBot: (payload: any, callback?: any) => void;
  chatBotHistory: (payload: any) => void;
  setUpdateQuestionsValue: (value: string) => void;
  emptyUpdateState: () => void;
  clearChatBotHistory: () => void;
  getDefaultQuestion: (val: any) => void;
  updateInitialQuestionsState: (questions: questionInterface[]) => void;
}

// export interface DocumentDataProps {
//   checked?: boolean;
//   isCheckIcon?: boolean;
//   is_active?: boolean;
//   nick_name?: string;
//   purchased_on?: string;
//   valid_to?: string;
//   document_url?: string;
//   cardName?: string;
//   onChange?: ((isChecked: boolean, e: any) => void) | undefined;
// }

export interface ArrayData {
  checked: string;
  isCheckIcon: boolean;
  isActive: boolean;
  nickName: string;
  purchasedOn: string;
  validTo: string;
  documentURL: string;
  cardName: string;
  arrayData: [];
  index: number;
}

export interface ViewProductDetails {
  responseData: ArrayData[];
  // documentData: DocumentDataProps[];
  // cardName: string;
  // nickName: string;
  viewCardLoading: boolean;
  getViewDocumentDetails: (id: string | undefined) => void;
}

interface ReportErrorStateInterface {
  type: null | string;
  page_name: string;
  description: string;
}
export interface ReportInterface {
  type: null | string;
  page_name: string;
  description: string;
  errorMessage: ReportErrorStateInterface;
}
export interface FeedbackFormReport {
  attachments: [];
  feedbackReportData: ReportInterface;
  formLoading: boolean;
  updateFeedbackReportData: (key: string, value: any) => void;
  onUploadCaptureFile: (val: File | string) => void;
  updateFeedbackReport: () => void;
  validateFeedbackFrom: () => boolean;
  clearState: () => void;
}

export interface ArchiveInterface {
  type: null | string;
  otherDescription: string;
}

export interface ProductInnerSpecificationsInterface {
  RAM?: string;
  Storage?: string;
  Color?: string;
}

export interface ProductSpecificationInterface {
  product_serial_no?: string;
  product_name?: string;
  model_no?: string;
  purchased_on?: string;
  specifications?: ProductInnerSpecificationsInterface;
  invoice_no?: string;
  invoice_document_url?: string;
}

export interface SpecsDetailsInterface {
  product_serial_no?: string;
  product_name?: string;
  model_no?: string;
  purchased_on?: string;
  specifications?: ProductInnerSpecificationsInterface;
  invoice_no?: string;
  invoice_document_url?: string;
  RAM?: string;
  Storage?: string;
  Color?: string;
}

export interface ArchivedProductDataInterface {
  user_product_id: string;
  nick_name: string;
  serial_no: string;
  image_url: string;
  is_amc_eligible: boolean;
  product_specification: SpecsDetailsInterface;
  RAM?: string;
  Storage?: string;
  Color?: string;
}

export interface ArchiveProductInterface {
  archiveProductData: ArchiveInterface;
  productSpecification: ProductSpecificationInterface;
  archivedProductDataDetails: ArchivedProductDataInterface[];
  loading: boolean;
  updateArchiveProductData: (key: string, value: any) => void;
  updateArchiveProduct: (product_id: string) => void;
  updateUnarchivedProduct: (product_id: string) => void;
  getArchivedProductDetails: () => void;
  clearArchiveState: () => void;
}

export interface ServiceRemindersDataInterface {
  user_product_id: string;
  service_interval: {
    label: string;
    value: string;
    data: number;
  };
  total_amc_service: number;
  amc_service_availed: number;
  last_service: string;
  is_maintenance_enabled: boolean;
}

export interface postponeService {
  scheduler_id: string;
  service_date: string;
  remarks: string;
  is_postponed: boolean;
}

export interface ActionCardInterface {
  user_product_id: string;
  nick_name: string;
  warranty_valid_to: string;
  is_extended: boolean;
  warranty_id: string;
  category_type_id: string;
  is_std_warranty_applicable: boolean;
  is_ext_warranty_applicable: boolean;
  is_insurance_applicable: boolean;
  is_amc_applicable: boolean;
  is_invoice_applicable: boolean;
  product_id: string;
  is_maintenance_enabled: boolean;
  product_name: string;
  image_url: string;
  icon: {
    light_theme: string;
    dark_theme: string;
  };
  expired: boolean;
  amc_valid_to: string;
  insurance_valid_to: string;
  expiring: boolean;
}

export interface ScheduleServiceReminder {
  serviceRemindersData: ServiceRemindersDataInterface;
  servicePostponeData: postponeService;
  openScheduleReminderDrawer: boolean;
  nextStep: boolean;
  showLastService: boolean;
  reminderDate: string;
  actionRequiredData: ActionCardInterface;
  lastServiceDate: string;
  isShowAmc: boolean;
  showCustomMonth: boolean;
  openServicePostpone: boolean;
  openPostponeServiceDate: boolean;
  noAction_required: {
    warranty_id: string;
    insurance_id: string;
    amc_id: string;
    remarks: string;
  },


  clearState: () => void;
  clearNoActionRequiredData: () => void;
  updateDrawerState: (key: string, val: any) => void;
  updateScheduleReminders: (callback: any) => void;
  updatePostponeServiceApi: () => void;
  updateServiceReminderData: (key: string, val: any) => void;
  updateServicePostponeData: (key: string, val: any) => void;
  updateNoActionRequired: (key: string, val: any) => void;
  updateNoActionRequiredApi: (callback: any) => void;

}

// backOffice interfaces
export interface listingPayload {
  filter?: {
    id: string;
    brand_name: string
  }
  search?: string,
  offset?: string | number;
  limit?: string | number
}
export interface inSightsDataInterface {
  "total_no_products": {
    "count": number,
    "icon": string
  },
}

export interface AddProductStateInterface {
  product_name?: string;
  id?: string | number;
  category?: {
    name?: string,
    id?: number | null
  } | string;
  icon?: React.ReactElement | null;
  title?: string,
  brand?: string;
  model?: string;
  no_of_users?: string;
  img?: File | null;
  specifications: {
    name: string,
    value: string
  }[],
  customSpecs?: string;
  product_id: string[] | null,
  brand_value: {
    name: string,
    value: string
  },
  category_value: {
    name: string,
    value: string,
    product_id: string;
    specifications: {
      label: string,
      value: string
    }[],
    category_id: string;
    extended_warranty: boolean;
    amc: boolean;
    insurance: boolean;
  },
  warranty_details: {
    document_url: [
      File | null
    ],
    warranty_summary: string,
    covered: string,
    notCovered: string,
    serviceType: string,
    coverage_type?: number | null,
    coverage?: string
  }
  error: {
    category_value: string,
    model: string,
    warranty_details: string,
    img: string,
    document_url: string,
    brand_value: string,
  }
}

export const productItemsValidate = (value: AddProductStateInterface) => {
  const error = value.error;
  let isValid = true;
  if (!value?.category_value?.name) {
    isValid = false;
    error.category_value = 'Category Required';
  }
  if (!value?.brand_value?.name) {
    isValid = false;
    error.brand_value = 'Brand Name Required';
  }
  if (!value?.model) {
    isValid = false;
    error.model = 'Model Number Required';
  }
  if (!value?.img) {
    isValid = false;
    error.img = 'Product Image Required';

  }
  if (!value?.warranty_details?.document_url[0]?.url) {
    isValid = false;
    error.document_url = 'Warranty Document Required';

  }
  if (!value?.warranty_details?.coverage_type) {
    isValid = false;
    error.warranty_details = 'Warranty details Required';

  }
  return { isValid, error };
};

export interface listingProductsState {
  "s_no": string;
  "id": string;
  'brand': string;
  "category": string;
  "product_name": string,
  "img": string,
  "specifications": [
    {
      label: string,
      id: string | number,
    }
  ],
  "product_type_id": string,
  "category_id": string,
  "warranty_details": {
    "warranty_summary": string,
    "covered": string,
    "notCovered": string,
    "serviceType": string,
    "document_url": string
  },
  "no_of_user_added": 2,
}
export interface AddProductInterface {
  addProductState: AddProductStateInterface;
  productCount: number;
  category_value?: {
    id: string;
    name: string;
    product_id: string;
  }
  page: number;
  rowPerPage: number;
  searchText: string;
  listingProductsState?: AddProductStateInterface[];
  updateAddProductState: (key: string, value: string | number | null, index?: number, warrantItem?: string) => void;
  viewProductDetials: AddProductStateInterface;
  inSightsData: inSightsDataInterface[];
  viewProductFn: (val: AddProductStateInterface) => void;
  productInsightsAPI: () => void;
  listingProductsAPI: (filter: {}, search: string) => void;
  listingProductsRequestAPI: (filter: {}, search: string) => void;
  getCategoriesAPI: (value: listingPayload) => void;
  getBrandsAPI: (id: string) => void;
  applyFilterAPI: (index: number | null) => void;
  makeSingleRequest: (v: AddProductStateInterface) => void;
  requestEditFn: (val: AddProductStateInterface) => void;
  addProductAPI: () => boolean | void;
  filterState: {
    id: string,
    brand_name: string
  },
  clearAll: () => void;
  deleteImage: (key: string) => void;
  searchProductsAPI: (e: string, index: string | number) => void;
  handleChangePage: (event: any, newPage: number) => void;
  handleChangeRowsPerPage: (value: any) => void;
  resetBtn: (id: string) => void;
  handleAddSpecs: (key: string, value: string) => void;
}

export interface userProductsInterface {
  icon?: React.ReactElement | null,
  productTitle?: string,
  modelNo?: string,
  serialNo?: string,
  purchaseDate?: string,
  modeofPurchase?: string,
}
export interface UserInterface {
  userProducts: userProductsInterface
}
export interface CategoryStateInterface {
  image_url?: {
    url: string | null;
    name: string | null
  },
  category_name?: string,
  category_type?: {
    id: string,
    name: string,
  }[],
  category_type_value?: {
    id: string,
    name: string,
  },
  id?: string,
  specifications?: {
    label: string;
    value: string
  }[],
  warranty: boolean,
  extended_warranty: boolean,
  insurance: boolean,
  amc: boolean,
  category_id: string,
  icon: {
    url: string | null;
    name: string | null
  },
  serial_no: {
    title: string,
    info_text: string,
    info_image_url: string,
    button_name: string,
    redirect_url: string
  },
  customSpecs: string;
  error: {
    category_name: string;
    category_type: string;
    specifications: string;
    image_url: string;
    icon: string;
    serial_no: string
  }
}
export interface CategoriesInterface {
  searchText?: string;
  categoryState: CategoryStateInterface;
  categoriesData: CategoryStateInterface[];
  viewCategoryState?: CategoryStateInterface;
  viewCategory?: (val: CategoryStateInterface) => void;
  updateCategoryState: (key: string, value: string | number | null, type?: string) => void;
  getCategoriesAPI: (value: string) => void;
  searchCategoryAPI: (e: string) => void;
  updateCategoryAPI: () => false;
  handleAddSpecs: () => void;
  getMasterCategoriesAPI: () => void | boolean;
  deleteImage: (key: string) => void;
  handleChangePage: (event: any, newPage: number) => void;
  handleChangeRowsPerPage: (value: any) => void;
  handleUndoSpecs: (e: any, i: number, arr: []) => void;
  clearAll: () => void;
  page: number;
  rowPerPage: number;
  totalCount: number

}

export const categoryItemsValidate = (value: CategoryStateInterface) => {
  const error = value.error;
  let isValid = true;
  if (!value?.category_name) {
    isValid = false;
    error.category_name = 'category name required';
  }
  if (!value?.category_type_value) {
    isValid = false;
    error.category_type = 'Category type required';
  }
  if (!value?.icon) {
    isValid = false;
    error.icon = 'icon required';

  }
  if (!value?.image_url) {
    isValid = false;
    error.image_url = 'image url required';

  }
  if (!value?.serial_no?.info_text) {
    isValid = false;
    error.serial_no = 'serial no required';

  }
  return { isValid, error };
};

interface KarmaCalState {
  vehicles: number[];
  noOfVehicles: number;
  fuelType: number[];
  noOfKiloMeter: number;
  foodType: number[];
  homeAppliance: number[];
  unitsOfElectricity: number
}
interface Form {
  yourName: string;
  phoneNumber: string
  email: string
  location: string
  numOfPlantedTree: string
  nameToBePlanted: string
}

export interface KarmaCalkulatorInterface {
  karmaCalculatorState: KarmaCalState;
  treePlantinationForm: Form;

  handleChangeForm: (key: string, value: string) => void;
  handleChangeVehiclesCount: (e: any, val: number) => void;
  handleChangeKilometer: (e: any, val: number) => void;
  handleChangeUnits: (e: any, val: number) => void;
  handleClickVehicles: (item: { id: number, icon?: string, label: string, bgColor: string, borderColor: string }) => void;
  handleClickFuelType: (item: { id: number, icon?: string, label: string, bgColor: string, borderColor: string }) => void;
  handleClickFootType: (item: { id: number, icon?: string, label: string, bgColor: string, borderColor: string }) => void;
  handleClickHomeAppliance: (item: { id: number, label: string, bgColor: string, borderColor: string }) => void;
}