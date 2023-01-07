import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Filter } from 'components/Filter/Filter';
import { Contact } from '../Contact/Contact';
import { List } from './ContactsList.styled';
import { EditContactModal } from 'components/Modals/EditContactModal';
import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

export const ContactsList = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  if (!contacts.length) return;

  const filtredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <>
      <Filter setFilter={value => setFilter(value)} />
      <List>
        {filtredContacts.map(({ id, name, number }) => (
          <Flex alignItems="center" justifyContent="space-between" key={id}>
            <Contact name={name} number={number} />
            <div>
              <EditContactModal contact={{ id, name, number }} />
              <Button
                colorScheme="teal"
                variant="ghost"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          </Flex>
        ))}
      </List>
    </>
  );
};
