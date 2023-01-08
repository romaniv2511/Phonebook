import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';

const Contacts = lazy(() => import('pages/Contacts'));
const SignUp = lazy(() => import('pages/SignUp'));
const LogIn = lazy(() => import('pages/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="signup"
          element={<RestrictedRoute component={<SignUp />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={<LogIn />} />}
        />
      </Route>
    </Routes>
  );
};
