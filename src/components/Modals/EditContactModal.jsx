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
import { EditIcon } from '@chakra-ui/icons';

import { ContactForm } from 'components/Forms/ContactForm/ContactForm';

export const EditContactModal = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="ghost" p="8px">
        <EditIcon color="teal" />
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit contact</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <ContactForm contact={contact} onClose={onClose} type="edit" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
