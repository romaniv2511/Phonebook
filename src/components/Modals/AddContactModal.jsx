import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { ContactForm } from 'components/Forms/ContactForm/ContactForm';

export const AddContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        borderRadius="8px"
        p="8px"
        mt="8px"
        mb="8px"
      >
        <AddIcon mr="4px" />
        Add contact
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new contact</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <ContactForm onClose={onClose} type="add" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
