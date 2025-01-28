import { backOfficeRoutes } from '@core/routes';
import { localStorageKeys, loginRoutes } from '@core/utils/constants';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PublicRouter(props: { children: JSX.Element }) {
  const { children } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem(localStorageKeys?.authToken);

    //Not logged in
    //Already logged in
    if (authToken) {
      navigate(backOfficeRoutes.home);
    }
    setShowComponent(true);
  }, [location]);

  if (showComponent) {
    return children;
  }
  return null;
}

export { PublicRouter };
