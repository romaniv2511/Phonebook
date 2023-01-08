import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Spinner } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';

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
