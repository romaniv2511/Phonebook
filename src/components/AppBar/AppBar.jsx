import { Flex } from '@chakra-ui/react';
import { Container } from 'components/Container/Container';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, Link } from './AppBar.styles';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <nav>
          <Flex justifyContent="space-between">
            <Link to="/">Contacts</Link>
            <AuthNav />
          </Flex>
        </nav>
      </Container>
    </Header>
  );
};
