import { Flex } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { Container } from 'components/Container/Container';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, LinkStyled } from './AppBar.styles';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <nav>
          <Flex justifyContent="space-between">
            <LinkStyled to="/">
              <PhoneIcon mr="8px" boxSize={6} />
              Phonebook
            </LinkStyled>

            <AuthNav />
          </Flex>
        </nav>
      </Container>
    </Header>
  );
};
