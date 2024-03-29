import React from 'react';
import { Box, Flex, Text, Button, useColorMode, Icon } from '@chakra-ui/react';
import { FaLaptopCode } from 'react-icons/fa'; // Example icon import

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      zIndex={1}
      borderBottom="1px solid"
      borderColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
    >
      <Flex alignItems="center">
        <Icon
          as={FaLaptopCode}
          mr={2}
          w={6}
          h={6}
          transition="transform 0.5s" // Transition effect for smooth rotation
          _hover={{
            transform: 'rotate(360deg)', // Rotate 360 degrees on hover
          }}
        />
        <Text fontSize="xl" fontWeight="bold">
          Your Path to Tech
        </Text>
      </Flex>
      {/* <Image src={logo} alt="logo" boxSize="50px" /> */}
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </Flex>
  );
}

export default Navbar;
