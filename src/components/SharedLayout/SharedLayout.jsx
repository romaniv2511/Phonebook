import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { AppBar } from 'components/AppBar/AppBar';

const { ToastContainer } = createStandaloneToast();

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};
