interface LoginProp {
  email: string;
  password: string;
  error: {
    email: string;
    password: string;
  };
}
interface ForgotPassword {
  email: string;
  error: {
    email: string;
  };
}
interface ResetPassword {
  newPassword: string;
  confirmPassword: string;
  error: {
    newPassword: string;
    confirmPassword: string;
  };
}

interface labelOptions {
  label: string;
  value: string | number;
}

interface BasicForm {
  formName: string;
  formCategory: labelOptions;
}

interface SegmentsList {
  count: number;
  message: string;
  status: string;
  result: {
    id: number;
    tag_name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }[];
}
interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  mobile_no: string;
  region: string;
  customer_products: {
    id: string;
    purchase_date: string;
    product: {
      id: string;
      product_name: string;
    };
  }[];
  customer_segments: {
    id: string;
    segment: {
      id: string;
      tag_name: string;
    };
  }[];
  created_at: string;
  updated_at: string;
  is_active: boolean;
}
interface CustomerList {
  count: number;
  message: string;
  status: string;
  rows: Customer[];
}
interface ViewCustomerList {
  data: any;
  api_status: string;
  message: string;
  status: string;
}
export interface ListOption {
  label: string;
  icon: React.ReactNode;
  id: number;
}

export interface Componet {
  [key: string]: any;
  id: number;
  updateId: string | any;
  componentType: ListOption;
  isMandatory: boolean;
  questions: string;
  initials?: boolean;
  compValue?: any;
  componetVal?: string | labelOptions | null | any;
  previewFormsValue?: any;
  setValueHandlePreviewForms?: (key: any, i: number, val: any) => void;
  isPrimary?: any;
}

interface Templates {
  broadcastName: string;
  searchTemplate: string;
  templates: number[];
}

interface BroadCustomer {
  tags: labelOptions;
  selectedTags: labelOptions[];
}

interface sheduleAndPunlish {
  deliveryType: string;
  startDate: string;
  startTime: string;
}
export interface BrandLogin {
  resetToken: string;
  accessToken: string;
  loginState: LoginProp;
  forgotPassword: ForgotPassword;
  resetPassword: ResetPassword;

  setBrandLogin: () => void;
  setResetPassord: () => void;
  setResetToken: (token: string) => void;
  setForgotPassordSendLinkEmail: () => void;
  setResetHandleChange: (key: string, eValue: string) => void;
  setHandeloginChange: (key: string, eValue: string) => void;
  setError: (error: any) => void;
  clearAll: () => void;
}

export interface IproductStore {
  isEdit: boolean;
  setIsEdit: (val: boolean) => void;
  addNewProduct: any;
  addNewProductModalData: any;
  batchInfo: [];
  batchInfoData: any;
  batchUpload: (file: any, callback: any) => Promise<void>;
  handleChangeProduct: (key: string, value: object | string) => void;
  handleChangeDocumentProduct: (
    parent: string,
    key: string,
    value: object | string
  ) => void;
  addProduct: (status: number) => void;
  clearFieldError: (val: any) => void;
  error: any;
  setError: (isValid: boolean) => void;
  setClearAll: () => void;
  selectedOptions: any;
  appliedSelectedOptions: any;
  loading: boolean,
  getProductList: (
    offset: number,
    limit: number,
    search: string,
    sortItem: string,
    offerType: any,
    offerStatus: any
  ) => void;
  setFilterData: (type: string, value: any) => void;
  initializeFilterData: () => void;
  setFilterDataIntoModal: () => void;
  handleOffsetLimitData: (key: string, val: any) => void;
  applyFilterData: () => void;
  productList: any;
  setHandleSearch: (e: string) => void;
  searchValue: string;
  offset: number;
  limit: number;
  sortItem: string;
  productView: any;
  sethandleSortItem: (E: string) => void;
  updateproductStatus: (id: string, status: boolean | string) => void;
  setOffset: (offset: number) => void;
  setLimit: (limit: number) => void;
  setEditProductForm: (editData: any) => void;
  updateProduct: (id: string, status: number) => void;
  getproductView: (rowData: string) => any;
  setViewproductForm: (viewData: any) => void;
  productDocumentEdit: (id: string) => void;
  setFieldError: (fieldName: string, error: any) => void;
  bulkUpload: (file: any, callback: any) => void;
  updateModalDataToStore: () => void;
  updateStoreDataToModal: () => void;
  updateBatchInfoData: () => void;
  clearModalData: () => void;
  getCategoryList: () => void;
  categoryList: any;
  // filterData: any;
  // handleChangeFilter: (key: string, value: object | any) => void;
  setClearFilter: () => void;
  deletedBatchInfo: (rowData: any) => void;
  productTypeList: any;
  getProductType: () => void;
  setType: (val: any) => void;
  type: string;
  setClearProductModal: () => void;
  deleteProductInfo: (deleteData: any) => void;
}
export interface WebFormStore {
  isLoading: boolean;
  offset: number;
  limit: number;
  searchValue: string;
  sortItem: string;
  webformsLists: any;
  selectedStatus: labelOptions[];
  modudlelist: any[];
  formBasicInfo: BasicForm;
  chooseFormCategory: labelOptions;
  addComponetInfo: Componet;
  updateComponents: Componet[];
  initialComponents: Componet[];
  dropDownValue: string;
  drpDownOptions: { label: string }[];
  statusMuduleList: labelOptions[];
  webFormmMaster: any;
  changemodule: boolean;

  clearFIlter: () => void;
  setLoading: (val: boolean) => void;
  clearAll: () => void;
  addBrandWebForms: (status: number) => void;
  getWebFormList: () => void;
  getWebFormMaster: () => void;
  getWebFormStatusList: () => void;
  dublicateBrandWebForms: (id: string) => void;
  updateBrandWebForm: (id: string, status: number) => void;
  deleteWebFormStatus: (id: string, stats: number) => void;
  getWebFormModuleList: () => void;
  setSelectedStatus: (value: any) => void;
  setHandleSelectForm: (value: any) => void;
  setHandleSearch: (E: string) => void;
  setHandleAddDropVal: (E: string) => void;
  setOffset: (offset: number) => void;
  setLimit: (limit: number) => void;
  setHandleBasicInfo: (key: string, E: string) => void;
  sethandleSortItem: (E: string) => void;
  setHandleAddComponents: (type: ListOption, ids: number) => void;
  setHandleInitialComponents: (item: Componet[]) => void;
  setHandleUpdateComponents: (item: Componet[]) => void;
  setHandleDeleteComponents: (ids: number) => void;
  setHandleAddComponetInfo: (key: keyof Componet, i: number, val: any) => void;
  setHandleAddDropDownVal: (key: string, E: any) => void;
  setHandleDeleteDropItem: (indx: number, id: any) => void;
  setEditBrandWebForm: (id: string) => void;
  setDefaultProduct: (val: any) => void;
  setValueHandlePreviewForms: (
    key: keyof Componet,
    i: number,
    val: any
  ) => void;
}

export interface CustomerSegment {
  loading: boolean;
  tag: { tagName: string; id?: any };
  error: string;
  offset: number;
  limit: number;
  search: string;
  sortItem: string;
  segmentsTagLists: SegmentsList;
  segmentsTagListsCount: any
  addSegments: () => void;
  updateSegments: () => void;
  deleteSegments: (id: number) => void;
  getSegmentsList: (
    search: string,
    sortItem: string,
    offset: number,
    limit: number
  ) => void;
  getSegmentsListCount: (
    search: string,
    sortItem: string,
    offset: number,
    limit: number
  ) => void;
  clearAll: () => void;
  setLoading: (val: boolean) => void;
  setHandleChangeTag: (E: string) => void;
  setError: (Eror: string) => void;
  setHandleSearch: (E: string) => void;
  setEditTagName: (editVal: string, id: number) => void;
  handleOffsetLimitData: (key: string, val: any) => void
}

export interface ManageCustomers {
  loading: boolean;
  offset: number;
  limit: number;
  search: string;
  sortItem: string;
  segments: labelOptions[];
  customersList: CustomerList;
  viewCustomersList: ViewCustomerList;

  setLoading: (val: boolean) => void;
  getCustomersList: (
    search: string,
    sortItem: string,
    offset: number,
    limit: number
  ) => void;
  handleOffsetLimitData: (key: string, val: any) => void;
  updateCustomersTagList: (id: string) => void;
  uploadCustomersList: (file: any) => void;
  getViewCustomersList: (id: string) => void;
  setHandleSearch: (E: string) => void;
  sendInvoice: (e: any) => void
  setHandleSelectTag: (val: labelOptions[]) => void;
  clearAll: () => void;
}

export interface BroadCastMessage {
  broadCasteState: {
    offset: number;
    limit: number;
    search: string;
    sortItem: string;
    selectTags: any[];
    id: string;
    statusId: any;
    sheduleAndPublish: {
      deliveryType: string;
      startDate: string;
      startTime: string;
    };
    selectTemplates: {
      broadcastName: string;
      searchTemplate: string;
      templates: {};
      template_json: any;
    };
    selectCustomer: {
      tags: {
        label: string;
        value: string;
      };
      selectedTags: any[];
    };
    broadCastList: any;
    broadCastView: any;
    templatesList: any;
    templateId: string;
  };
  error: any;
  setLimit: (val: number) => void;
  setOffset: (val: number) => void;
  setHandleSearch: (val: string) => void;
  sethandleSortItem: (item: string) => void;
  setHandleSelectTag: (key: string, val: any) => void;
  setSelectTemplates: (key: string, val: string | boolean) => void;
  setScheduleAndPublish: (key: string, val: string | boolean) => void;
  clearAll: () => void;
  getBroadcastList: () => void;
  getTemplateView: (rowData: any) => void;
  deleterowData: (id: string) => void;
  addBroadcast: (status_id: number | string) => void;
  clearFieldError: (val: any) => void;
  setFieldError: (fieldName: string, error: any) => void;
  getTemplateList: (id: any) => void;
  editBroadcast: (statusId?: number) => void;
  setEditBroadcastData: (editData: any) => void
}

export interface IoffersStore {
  // error: any;
  offset: number;
  limit: number;
  searchValue: string;
  sortItem: string;

  selectedOptions: any;
  appliedSelectedOptions: any;

  offersList: any;
  addOffers: any;
  loading: boolean;
  getOffersList: (
    offset: number,
    limit: number,
    search: string,
    sortItem: string,
    offerType: any,
    offerStatus: any
  ) => Promise<void>;

  setFilterData: (type: string, value: any) => void;
  initializeFilterData: () => void;
  setFilterDataIntoModal: () => void;
  handleOffsetLimitData: (key: string, val: any) => void;
  applyFilterData: () => void;

  setHandleSearch: (val: string) => void;
  deleterowData: (id: string) => void;
  clearFieldError: (val: any) => void;
  setFieldError: (fieldName: string, error: any) => void;
  handleChangeOffer: (key: string, value: object | string) => void;
  createOffers: () => void;
  getOffersView: (rowData: any) => void;
  setClearAll: () => void;
  editOffers: () => void;
  setEditData: (editData: any) => any;
  productTypeList: any;
  getProductType: (category_id: any) => void;
  getBrandList: () => void;
  brandList: any;
  getBrandCategories: (brand_id: number) => void;
  brandCategories: any;
  exchangeBrandList: any;
  getExchangeBrandList: (token: any) => void;
  productBrandList: any;
  getProductForDiscountType: (id: any) => void;
  updateOfferError: (error: string) => void;
  isIamValidToSave: () => any;
  clearErrors: () => void
}
export interface Modulemasters {
  error: string;
  offset: number;
  limit: number;
  search: string;
  sortItem: string;
  moduleName: string;
  webFormId: string;
  formCategoryId: number | null;
  // moduleId: number;
  moduleList: {
    rows: any[];
    count: number;
  };
  moduleDatasList: {
    rows: any[];
    count: number;
  };
  WebformResponseList: {
    webformResponseData: any[];
    count: number;
  };
  exportData: string;
  importData: string;

  setWebFormId: (E: string) => void;
  setModuleName: (E: string) => void;
  setHandleSearch: (E: string) => void;
  setOffset: (offset: number) => void;
  setLimit: (limit: number) => void;
  sethandleSortItem: (item: string) => void;
  deleteModule: (delId: number) => void;
  getWebformResponseList: (formId: string) => void;
  getWebformExportModule: (formId: any) => void;
  getWebformImportModule: (formId: any) => void;
  getModuleMasterList: () => void;
  addModuleListDatas: (
    id: string,
    formCategoryId: number,
    forms: Componet[]
  ) => void;
  getModuleListDatas: (formCategoryId: number) => void;
  setError: (va: string) => void;
  addNewModule: () => void;
  clearAll: () => void;
}

interface FormData {
  access_token: string;
  whatsapp_business_id: string;
  phone_number_id: string;
}
export interface IwhatsappConfig {
  clearFieldError: (val: any) => void;
  error: any;
  setError: (isValid: boolean) => void;
  whatappDetails: FormData;
  getWhatsappConfigureDetails: () => void;
  handleChangeWhatsappConfig: (key: string, value: object | string) => void;
  updateWhatsappConfig: () => void;
  setClearAll: () => void;
  setFieldError: (fieldName: string, error: any) => void;
}

export interface ComponentValue {
  [key: string]: any;
  id: string;
  updateId?: string | any;
  buttonType?: number;
  componetVal?: string | labelOptions | null | any;
}

export interface TemplateStore {
  viewType: string;
  offset: number;
  limit: number;
  search: string;
  sortItem: string;
  offersList: any
  offersView: any
  items: any
  basicInfo: {
    templateName: string;
    templateCategory: {
      label: string;
      value: number;
    };
    offerType: {
      label: string,
      value: string
    }
  };
  templateJson: {
    header: {
      type: string;
      value: string;
    };
    messageBody: string;
    declareVariables: {
      customerName: string,
      offerName: string,
      maxPurchaseAmount: string,
      subscribe: string,
      purchaseDateOffer: any,
      customerNameOffer: any,
      discountValueOffer: any,
      minimumAmtOffer: any,
      offerCode: any,
      offerNameOffer: any,
    },
    buttons: any[],
  },
  templatesList: {
    rows: any[];
    count: number;
  };
  templatesCategoryList: any[];
  filterData: {
    status: any[],
  }
  loading: boolean,
  selectedOptions: any;
  appliedSelectedOptions: any;

  setFilterData: (type: string, value: any) => void;
  initializeFilterData: (brandId: any) => void;
  setFilterDataIntoModal: () => void;
  handleOffsetLimitData: (key: string, val: any, brandId: any) => void;
  applyFilterData: (brandId: any) => void;
  setHandleSearch: (val: string, brandId: any) => void;
  setItemName: (newItemLabel: any) => void
  setViewType: (val: any) => void
  sethandleSortItem: (item: string) => void;
  setBasicInfo: (
    key: string,
    val: string | { lable: string; val: number }
  ) => void;
  setHeader: (key: string, val: string) => void;
  setMessageBody: (key: string, val: string) => void;
  setDeclareVariable: (key: string, val: string) => void;
  setHandleTypeValue: () => void;
  setAddButtons: (val: string) => void;
  setSelectButtons: (key: string, buttonType: any, id: string) => void;
  setDeleteButtons: (id: string) => void;
  setAddComponetInfo: (key: keyof any, id: string, val: string | any) => void;
  setViewTemplate: (viewData: any) => void;
  getTemplateList: (offset: number,
    limit: number,
    search: string,
    sortItem: string,
    templateStatus: any,
    brand_Id: any) => void;
  getTemplateCategoryList: () => void;
  getOffersList: () => void
  getOffersView: (rowData: any) => void
  dublicateTemplate: (status: string, brandId: any) => void;
  createNewTemplate: (status: number) => void;
  deleteTemplate: (status: number, id: string, brandId: any) => void;
  setClearAll: () => void;
  handleChangeFilter: (key: string, value: object | any) => void;
  clearFieldError: (val: any) => void;
  error: any;
  setError: (isValid: boolean) => void;
  setFieldError: (fieldName: string, error: any) => void;
  replacePlaceholders: (template: any) => void;
}

export interface IuserManagementStore {
  userManagementState: {
    limit: any;
    offset: any;
    searchRole: string;
    repositoryData: any;
    permissionData: any;
    permissionDetailData: any;
    getPermissionCheckData: any;
    selectedPermissionId: string;
    roleData: any;
    permissionField: {
      name: string;
      description: string;
      status: boolean;
      permission_id: string;
    };
    addRole: {
      roleName: string;
      description: string;
      permission: {
        label: any;
        value: any;
      };
      status: false;
      id: string;
    };
  };
  error: any;
  type: string;
  userStateUpdate: (key: any, value: any) => void;
  updatePermission: () => void;
  setViewRoleData: (editData: any) => void;
  editRole: () => void;
  setEditRoleData: (editData: any) => void;
  createRole: () => void;
  setHandleSearch: (E: string) => void;
  setOffset: (offset: number) => void;
  setLimit: (limit: number) => void;
  setAddRole: (key: string, val: string | boolean) => void;
  getRoleData: (val: any) => void;
  setEditData: (editData: any) => void;
  editPermission: () => void;
  setType: (val: any) => void;
  getRepositoryData: () => void;
  getPermissionData: () => void;
  clearPermissionField: () => void;
  addPermission: () => void;
  clearFieldError: (val: any) => void;
  deletePermissionData: (id: string) => void;
  setPermissionData: (key: string, val: string | boolean) => void;
  setFieldError: (fieldName: string, error: any) => void;
}

export interface IroleMappingStore {
  roleMappingState: {
    offset: number;
    limit: number;
    searchRole: string;
    roleMapData: any;
    addRole: {
      name: string;
      mobileNo: any;
      email: any;
      role: {
        label: string;
        value: string;
      };
      status: false;
      id: "";
    };
  };
  type: string;
  loading: true;
  error: any;
  setViewUserData: (viewData: any) => void;
  setEditData: (editData: any) => void;
  editRole: () => void;
  addUser: () => void;
  setType: (val: any) => void;
  getRoleMapData: (val: any) => void;
  setFieldError: (fieldName: string, error: any) => void;
  clearFieldError: (fieldName: any) => void;
  clearErrors: () => void;
  setError: (isValid: any) => void;
  setHandleSearch: (val: string) => void;
  setLimit: (val: number) => void;
  setOffset: (val: number) => void;
  clearField: () => void;
  handleRoleData: (key: string, val: string | boolean) => void;
}

export interface IsequenceStore {
  sequenceState: {
    offset: number;
    limit: number;
    search: string;
    sequenceData: any;
    daysData: any;
    sortValue: string;
    durationData: any;
    conditions: any;
    conditionData: any;
    templateData: any;
    messageData: any;
    basicInfo: {
      name: string;
      is_match_all_conditions: any;
      days: {
        label: string;
        value: string;
      };
    };
    declareVariables: {
      customerName: string;
      offerName: string;
      maxPurchaseAmount: string;
    };
    dialogData: any;
    currentTemplateIndex: any;
  };
  error: any;
  updateModalDataToStore: () => void;
  clearDialog: () => void;
  handleDialogData: (key: any, val: any) => void;
  createSequence: () => void;
  addCondition: () => void;
  clearField: () => void;
  getConditionData: (val: any, index: number) => void;
  handleConditionData: (key: string, val: any, index: number) => void;
  handleDeleteCondition: (index: number) => void;
  getSequenceData: (val: any) => void;
  setFieldError: (fieldName: string, error: any) => void;
  clearFieldError: (val: any) => void;
  handleBasicInfo: (key: any, val: any) => void;
  handleTemplateData: (key: any, val: any, index: string | number) => void;
  setHandleSearch: (val: string) => void;
  setLimit: (val: number) => void;
  setOffset: (val: number) => void;
  sethandleSortItem: (item: string) => void;
  deleteSequenceData: (id: string) => void;
  getDaysData: () => void;
  getDurationData: () => void;
  setDeclareVariable: (key: string, val: string) => void;
  addTemplate: () => void;
  handleDeleteTemplate: (index: number) => void;
  currentTemplateIndexFnc: (index: number) => void;
}

export interface IManageOptOuts {
  manageOptsOutState: {
    offset: number;
    limit: number;
    search: string;
    sortValue: string;
    listData: any;
  };
  getManageOptsOut: () => void;
}
