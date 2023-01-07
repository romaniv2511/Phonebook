import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { AddContactModal } from 'components/Modals/AddContactModal';
import { Container } from 'components/Container/Container';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Contacts</h1>
      <AddContactModal />
      <ContactsList />
    </Container>
  );
};
