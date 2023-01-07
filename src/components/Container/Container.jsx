import { Box } from '@chakra-ui/react';

export const Container = ({ children }) => (
  <Box maxW="1200px" ml="auto" mr="auto" p="0 20px">
    {children}
  </Box>
);
