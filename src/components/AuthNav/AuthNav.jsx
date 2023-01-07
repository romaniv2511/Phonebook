import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelertors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Flex } from '@chakra-ui/react';
import { Link } from './AuthNav.styles';

export const AuthNav = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return loggedIn ? (
    <UserMenu />
  ) : (
    <Flex gap="8px">
      <Link to="/signup">SignUp</Link>
      <Link to="/login">LogIn</Link>
    </Flex>
  );
};
