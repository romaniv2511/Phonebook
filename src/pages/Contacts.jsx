import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { AddContactModal } from 'components/Modals/AddContactModal';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { Container } from 'components/Container/Container';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <AddContactModal />
      {isLoading && (
        <Spinner
          display="block"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal"
          size="xl"
        />
      )}
      <ContactsList />
    </Container>
  );
};

export default Contacts;
