import React from 'react';
import Container from "./Components/Container/container"

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
      </Container>
    </ChakraProvider>
  );
}

export default App;
