import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';

export const Filter = ({ setFilter }) => {
  const contacts = useSelector(selectContacts);
  const contactCount = contacts.length;
  const text = `search among ${contactCount} contacts`;

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="teal" />}
      />
      <Input
        w="400px"
        name="filter"
        type="text"
        placeholder={text}
        onChange={e => setFilter(e.target.value)}
      />
    </InputGroup>
  );
};
