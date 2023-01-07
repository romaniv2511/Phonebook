import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    dispatch(logIn(data));
    reset();
  };

  return (
    <Center h="75vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl w="400px" isInvalid={errors.name}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" {...register('email')} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="text" {...register('password')} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" mt="8px">
          Log In
        </Button>
      </form>
    </Center>
  );
};
