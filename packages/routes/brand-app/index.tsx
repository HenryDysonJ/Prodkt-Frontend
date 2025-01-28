export const brandRoutes = {
  login: "/login",
  forgotPassword :'/forgot-password',
  changePasswords: '/reset-password',

  home:"/",

  // Customers
  customers: "/customers",
  manageCustomers: "/customers/manage-customers",
  customerSegments: "/customers/manage-segments",
  viewCustomer: '/customers/view-customers',
  opportunities: '/customers/view-customer/opportunities',

  // Products
  productList: '/product-list',
  addProduct: '/add-product',

  // Marketing
  templates: '/marketing/templates',
  createBroast:"/marketing/create-broadcast",
  broadcastMsg: '/marketing/broadcast-messages',
  sequences: '/marketing/sequences',
  createSequence:"/marketing/create-sequences",
  manageOptOuts: '/marketing/manage-opt-outs',
  createTemplate:'/marketing/create-template',

  // Support
  suport:"/support",
  webformRequest: "/support/:webform_id",
  moduleMaster: '/support/module-master',

  // Offers
  offers: '/offers',
  createOffers:'/offers/create-offers',

  // settings
  configureWebforms: '/settings/configure-webforms',
  usewebform:'/settings/use-webforms',
  createNewWebForm: "/settings/configure-webforms/create-new",
  userManageMent: '/settings/user-management',
  configureWhatsApp: '/settings/configure-whatsapp',
  configureWhatsAppDetails: '/settings/configure-whatsapp-details',
  configureSMS: '/settings/configure-SMS',
};
