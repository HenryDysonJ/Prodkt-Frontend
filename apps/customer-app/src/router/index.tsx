import { webRoutes } from '@core/routes';
import { RootLayout } from '@core/ui/components';
import { PageNotFound } from '@core/ui/components/pageNotFound';
import ActivityLogs from '@pages/activityLogs';
import AddCoverageDetails from '@pages/addCoverageDetails';
import AddProductBot from '@pages/addProductBot';
import AddProductDetails from '@pages/addProductDetails';
import AmcDetails from '@pages/amcDetails';
import AmcPurchase from '@pages/amcPurchase';
import ArchivedProducts from '@pages/archivedProducts';
import AvailableAMC from '@pages/availableAmc';
import AvailableWarranty from '@pages/availableExtWarranty';
import AvailableInsurance from '@pages/availableInsurance';
import BookServiceProviderSuccessfully from '@pages/bookServiceProviderSuccessfully';
import ChatBotAmc from '@pages/chatBotAmc';
import ChatBotExtendedWarranty from '@pages/chatBotExtendedWarranty';
import ChatBotInsurance from '@pages/chatBotInsurance';
import ChatBotProductDetails from '@pages/chatbotProductDetails';
import ChatBotWarranty from '@pages/chatBotWarranty';
import ChooseProduct from '@pages/chooseProduct';
import ChooseServiceProviders from '@pages/chooseServiceProviders';
import CompleteWhatsupAddProduct from '@pages/completeWhatsupAddProduct';
import CompleteWhatsAppAddProduct from '@pages/completeWhatsupAddProduct';
import EditProfile from '@pages/editProfile';
import EmailVerification from '@pages/emailVerification';
import ErrorBoundary from '@pages/errorBoundary';
import ExtendedWarrantyDetails from '@pages/extendedWarrantyDetails';
import FeedbackReport from '@pages/feedbackReport';
import Home from '@pages/home';
import InsuranceDetails from '@pages/insuranceDetails';
import KarmaCalculator from '@pages/karmaCalculator/components/calculatorIntro';
import PlantNowOffet from '@pages/karmaCalculator/components/plantNowOffet';
import { QuestionFlows } from '@pages/karmaCalculator/components/questionFlows';
import SuccessMessage from '@pages/karmaCalculator/components/successMessage';
import Summary from '@pages/karmaCalculator/components/summary';
import ManageServiceProviders from '@pages/manageServiceProviders';
import NickNameScreen from '@pages/nickNameScreen';
import Onboarding from '@pages/onboarding';
import OtpSuccessfully from '@pages/otpSuccessfully';
import OtpVerification from '@pages/otpVerification';
import PreferredServiceProvider from '@pages/preferredServiceProvider';
import PrivacyPolicy from '@pages/privacyPolicy';
import ProductAddedSuccessfully from '@pages/productAddedSuccessfully';
import ProductCategory from '@pages/productCategory';
import ProductDetails from '@pages/productDetails';
import ProductSummary from '@pages/productSummary';
import UserProfile from '@pages/profile';
import { RecordScheduleService } from '@pages/recordScheduleService';
import { ScheduleServiceReminder } from '@pages/scheduleServiceReminder';
import SearchProduct from '@pages/searchProduct';
import SecureProduct from '@pages/secureProduct';
import ServiceHistory from '@pages/serviceHistory';
import ShareDetails from '@pages/shareDetails';
import SignupSuccessful from '@pages/signupSuccessful';
import UploadedGallery from '@pages/UploadedGallery';
import UserDetails from '@pages/userDetails';
import ViewProductDocument from '@pages/viewProductDocument';
import WarrantyDetails from '@pages/warrantyDetails';
import WarrantyProductSummary from '@pages/warrantyProductSummary';
import WhatsAppVerification from '@pages/whatsAppVerification';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PrivateRouter } from './privateRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout lightTheme={true} />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: webRoutes.signin,
        element: <Onboarding />,
      },
      {
        path: webRoutes.verification,
        element: <OtpVerification />,
      },
      {
        path: webRoutes.userDetails,
        element: <UserDetails />,
      },
      {
        path: webRoutes.otpSuccessfully,
        element: <OtpSuccessfully />,
      },
      {
        path: webRoutes.signupSuccessful,
        element: <SignupSuccessful />,
      },
      {
        path: webRoutes.whatsAppVerification,
        element: <WhatsAppVerification />,
      },
      {
        path: webRoutes.privacyPolicy,
        element: <PrivacyPolicy />,
      },

      // karmacalculator
      {
        path: webRoutes.karmacalculator,
        element: <KarmaCalculator />,
      },
      {
        path: webRoutes.questionsFlows,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.chooseVehicles,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.chooseFuel,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.driveKm,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.normalyEate,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.homeAppliance,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.consumeElectricity,
        element: <QuestionFlows />,
      },
      {
        path: webRoutes.summary,
        element: <Summary />,
      },
      {
        path: webRoutes.plantNowOffset,
        element: <PlantNowOffet />,
      },
      {
        path: webRoutes.successMessage,
        element: <SuccessMessage />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <PrivateRouter>
        <RootLayout />
      </PrivateRouter>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: webRoutes.productCategory,
        element: (
          <PrivateRouter>
            <ProductCategory />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.specifications,
        element: (
          <PrivateRouter>
            <ProductSummary />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.searchproduct,
        element: (
          <PrivateRouter>
            <SearchProduct />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.nickName,
        element: (
          <PrivateRouter>
            <NickNameScreen />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.productSummary,
        element: (
          <PrivateRouter>
            <WarrantyProductSummary />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.productAddedSuccessfully,
        element: (
          <PrivateRouter>
            <ProductAddedSuccessfully />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.addproductBot,
        element: (
          <PrivateRouter>
            <AddProductBot />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.addCoverageDetails,
        element: (
          <PrivateRouter>
            <AddCoverageDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.completeWhatsAppAddProduct,
        element: (
          <PrivateRouter>
            <CompleteWhatsAppAddProduct />
          </PrivateRouter>
        )
      },
      {
        path: webRoutes.secureProduct,
        element: (
          // <PrivateRouter>
          <SecureProduct />
          // </PrivateRouter>
        ),
      },
      {
        path: webRoutes.addProductDetails,
        element: (
          <PrivateRouter>
            <AddProductDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.amcDetails,
        element: (
          <PrivateRouter>
            <AmcDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.productDetails,
        element: (
          <PrivateRouter>
            <ProductDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.activityLogs,
        element: (
          <PrivateRouter>
            <ActivityLogs />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.shareDetails,
        element: (
          <PrivateRouter>
            <ShareDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.serviceHistory,
        element: (
          <PrivateRouter>
            <ServiceHistory />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.warrantyDetails,
        element: (
          <PrivateRouter>
            <WarrantyDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.insuranceDetails,
        element: (
          <PrivateRouter>
            <InsuranceDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.availableAmc,
        element: (
          <PrivateRouter>
            <AvailableAMC />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.extendedWarranty,
        element: (
          <PrivateRouter>
            <ExtendedWarrantyDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.amcPurchase,
        element: (
          <PrivateRouter>
            <AmcPurchase />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.userProfile,
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.editProfile,
        element: (
          <PrivateRouter>
            <EditProfile />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.emailVerification,
        element: (
          <PrivateRouter>
            <EmailVerification />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.availableInsurance,
        element: (
          <PrivateRouter>
            <AvailableInsurance />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chooseProduct,
        element: (
          <PrivateRouter>
            <ChooseProduct />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chooseServiceProviders,
        element: (
          <PrivateRouter>
            <ChooseServiceProviders />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.manageServiceProviders,
        element: (
          <PrivateRouter>
            <ManageServiceProviders />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.bookServiceProviderSuccessfully,
        element: (
          <PrivateRouter>
            <BookServiceProviderSuccessfully />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.availableWarranty,
        element: (
          <PrivateRouter>
            <AvailableWarranty />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chatBotAmc,
        element: (
          <PrivateRouter>
            <ChatBotAmc />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chatBotWarranty,
        element: (
          <PrivateRouter>
            <ChatBotWarranty />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chatBotExtendedWarranty,
        element: (
          <PrivateRouter>
            <ChatBotExtendedWarranty />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chatBotInsurance,
        element: (
          <PrivateRouter>
            <ChatBotInsurance />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.uploadedgallery,
        element: (
          <PrivateRouter>
            <UploadedGallery />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.feedbackReport,
        element: (
          <PrivateRouter>
            <FeedbackReport />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.chatBotProductDetails,
        element: (
          <PrivateRouter>
            <ChatBotProductDetails />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.scheduleServiceReminder,
        element: (
          <PrivateRouter>
            <ScheduleServiceReminder />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.recordScheduleService,
        element: (
          <PrivateRouter>
            <RecordScheduleService />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.preferredServiceProvider,
        element: (
          <PrivateRouter>
            <PreferredServiceProvider />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.archivedProducts,
        element: (
          <PrivateRouter>
            <ArchivedProducts />
          </PrivateRouter>
        ),
      },
      {
        path: webRoutes.viewProductDocument,
        element: <ViewProductDocument />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
