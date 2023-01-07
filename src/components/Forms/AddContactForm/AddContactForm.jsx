import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore'
    )
    .max(16)
    .required(),
  number: Yup.string()
    .min(5)
    .max(16)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be at digits and can contain spaces, dashes, parentheses and can start with +'
    )

    .required(),
});

export const ContactForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const onSubmit = ({ name, number }) => {
    const isDuplicated = contacts.some(
      i => i.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicated) {
      toast(
        {
          title: `"${name}" `,
          description: 'is already in contacts',
          position: 'top',
          status: 'info',
          duration: 3000,
          isClosable: true,
        }
        //
      );
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">
          Name
          <Input id="name" {...register('name')} type="text" />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormLabel>
        <FormLabel htmlFor="number">
          Number
          <Input id="number" {...register('number')} type="tel" />
          <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
        </FormLabel>
        <Flex mt="40px" justifyContent="right">
          <Button type="submit" colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Flex>
      </FormControl>
    </form>
  );
};
