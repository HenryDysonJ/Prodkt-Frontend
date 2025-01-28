import { backOfficeRoutes } from '@core/routes';
import { RootLayout } from '@core/ui/components';
import { PageNotFound } from '@core/ui/components/pageNotFound';
import ErrorBoundary from '@pages/errorBoundary';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { PrivateRouter } from './privateRouter';
import Home from '@pages/home';
import Login from '@pages/login';
import ResetPassword from '@pages/reset';
import PassWordSuccessPage from '@pages/passwordSuccessPage';
import { PublicRouter } from './publicRouter';
import UserManagement from '@pages/userManagement';
import Categories from '@pages/categories';
import Products from '@pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <RootLayout lightTheme={true} />,
    element: (<PublicRouter>
      <Outlet />
    </PublicRouter>),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: backOfficeRoutes.login,
        element: <Login />,
      },
      {
        path: backOfficeRoutes.reset,
        element: <ResetPassword />,
      },
      {
        path: backOfficeRoutes.success,
        element: <PassWordSuccessPage />,
      },
    ],
  },
  {
    path: '/user',
    // element: <RootLayout lightTheme={true} />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: backOfficeRoutes.userManagement,
        element: <UserManagement />,
      },
    ],
  },
  {
    path: '/products',
    // element: <RootLayout lightTheme={true} />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: backOfficeRoutes.products,
        element: <Products />,
      },
    ],
  },
  {
    path: '/categories',
    // element: <RootLayout lightTheme={true} />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: backOfficeRoutes.categories,
        element: <Categories />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <PrivateRouter>
        {/* <RootLayout /> */}
        <Outlet />
      </PrivateRouter>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        path: backOfficeRoutes.home,
        element: <Home />,
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
