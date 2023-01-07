import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Avatar, Button, Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Flex gap="16px" alignItems="center">
      <Flex gap="8px" alignItems="center">
        <Avatar
          name={user.name}
          src="https://bit.ly/broken-link"
          bg="teal"
          size="sm"
        />
        <p>Hi, {user.name}</p>
      </Flex>
      <Button
        colorScheme="teal"
        variant="outline"
        size="xs"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Flex>
  );
};
