import { brandRoutes } from "@core/routes";
import { SideBarLayout } from "@core/ui/components";
import { PageNotFound } from "@core/ui/components/pageNotFound";
import { RootLayout } from "@core/ui/components/rootLayout";
import { BrandAddProduct } from "@pages/brandAddProduct";
import { BrandCreateTemplate } from "@pages/brandCreateTemplate";
import { CreateNewWebform } from "@pages/brandCreateWebForm";
import { CustomerSegments } from "@pages/brandCustomerSegment";
import { ManageCustomer } from "@pages/brandManageCustomer";
import { BrandOffers } from "@pages/brandOffers";
import { Opportunities } from "@pages/brandOpportunities";
import { BrandProductList } from "@pages/brandProductList";
import Webforms from "@pages/brandSettingsConfigureWebforms";
import { UseCreatedForm } from "@pages/brandSettingsConfigureWebforms/useCreatedForm";
import { BrandSmsConfigure } from "@pages/brandSmsConfigure";
import { BrandTemplateList } from "@pages/brandTemplate";
import { ViewCustomer } from "@pages/brandViewCustomer";
import { BrandWhatsappConfigure } from "@pages/brandWhatsappConfigure";
import { BrandWhatsappConfigureDetails } from "@pages/brandWhatsappConfigureDetails";
import { CreateBroast, ListingBroadcast } from "@pages/broadcastMessage";
import { CreateBrandOffer } from "@pages/createBrandOffers";
import ErrorBoundary from "@pages/errorBoundary";
import { BrandLogin } from "@pages/login";
import { ManageOptOuts } from "@pages/manageOptOps";
import { ModuleMaster } from "@pages/moduleMasters";
import { Sequences } from "@pages/sequences";
import CreateSequence from "@pages/sequences/createSequence";
import { UserManagement } from "@pages/userManagement";
import { WebFormRequest } from "@pages/webFormRequest";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRouter } from "./privateRouter";

const router = createBrowserRouter([
  {
    path: brandRoutes.login,
    element: (
      // <PrivateRouter>
      <BrandLogin />
      //  </PrivateRouter>
    ),
  },
  {
    path: brandRoutes.forgotPassword,
    element: <BrandLogin />,
  },
  {
    path: brandRoutes.changePasswords,
    element: <BrandLogin />,
  },
  {
    path: brandRoutes.home,
    element: (
      <SideBarLayout>
        <RootLayout />
      </SideBarLayout>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      //customers
      {
        index: true,
        path: brandRoutes.home,
        element: (
          <PrivateRouter>
            <ManageCustomer />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.customerSegments,
        element: (
          <PrivateRouter>
            <CustomerSegments />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.viewCustomer,
        element: (
          <PrivateRouter>
            <ViewCustomer />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.opportunities,
        element: (
          <PrivateRouter>
            <Opportunities />
          </PrivateRouter>
        ),
      },

      //
      {
        path: brandRoutes.manageOptOuts,
        element: (
          <PrivateRouter>
            <ManageOptOuts />
          </PrivateRouter>
        ),
      },

      //Support
      {
        path: brandRoutes.webformRequest,
        element: (
          <PrivateRouter>
            <WebFormRequest />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.moduleMaster,
        element: (
          <PrivateRouter>
            <ModuleMaster />
          </PrivateRouter>
        ),
      },

      //settings
      {
        path: brandRoutes.configureWebforms,
        element: (
          <PrivateRouter>
            <Webforms />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.createNewWebForm,
        element: (
          <PrivateRouter>
            <CreateNewWebform />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.userManageMent,
        element: (
          <PrivateRouter>
            <UserManagement />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.configureWhatsApp,
        element: (
          <PrivateRouter>
            <BrandWhatsappConfigure />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.configureWhatsAppDetails,
        element: (
          <PrivateRouter>
            <BrandWhatsappConfigureDetails />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.configureSMS,
        element: (
          <PrivateRouter>
            <BrandSmsConfigure />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.usewebform,
        element: (
          <PrivateRouter>
            <UseCreatedForm />
          </PrivateRouter>
        ),
      },
      //product
      {
        path: brandRoutes.productList,
        element: (
          <PrivateRouter>
            <BrandProductList />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.addProduct,
        element: (
          <PrivateRouter>
            <BrandAddProduct />
          </PrivateRouter>
        ),
      },

      //Marketing
      {
        path: brandRoutes.broadcastMsg,
        element: (
          <PrivateRouter>
            <ListingBroadcast />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.templates,
        element: (
          <PrivateRouter>
            <BrandTemplateList />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.createBroast,
        element: (
          <PrivateRouter>
            <CreateBroast />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.createTemplate,
        element: (
          <PrivateRouter>
            <BrandCreateTemplate />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.sequences,
        element: (
          <PrivateRouter>
            <Sequences />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.createSequence,
        element: (
          <PrivateRouter>
            <CreateSequence />
          </PrivateRouter>
        ),
      },

      // offers
      {
        path: brandRoutes.offers,
        element: (
          <PrivateRouter>
            <BrandOffers />
          </PrivateRouter>
        ),
      },
      {
        path: brandRoutes.createOffers,
        element: (
          <PrivateRouter>
            <CreateBrandOffer />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
