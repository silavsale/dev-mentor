import React from 'react';
import { Box, Flex, Text, Button, useColorMode, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex px={5} py={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">
        Your Path to Tech
      </Text>
      {/* <Image src={logo} alt="logo" boxSize="50px" /> */}
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </Flex>
  );
}

export default Navbar;
