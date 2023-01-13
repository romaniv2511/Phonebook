import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, List } from '@chakra-ui/react';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { Filter } from 'components/Filter/Filter';
import { Contact } from '../Contact/Contact';
import { EditContactModal } from 'components/Modals/EditContactModal';

export const ContactsList = () => {
  const [filter, setFilter] = useState('');
  const [currentContactId, setCurrentContactId] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

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
        {filtredContacts.map(({ id, name, number }) => {
          const showSpinner = isLoading && currentContactId === id;

          return (
            <Flex
              alignItems="center"
              justifyContent="space-between"
              key={id}
              borderBottom="1px solid black"
            >
              <Contact name={name} number={number} />
              <div>
                <EditContactModal contact={{ id, name, number }} />
                <Button
                  isLoading={showSpinner}
                  spinnerPlacement="start"
                  colorScheme="teal"
                  variant="ghost"
                  onClick={() => {
                    setCurrentContactId(id);
                    dispatch(deleteContact(id));
                  }}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </Flex>
          );
        })}
      </List>
    </>
  );
};
