import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

// CustomBox component which accepts children and any other Box props
const CustomBox = ({ children, ...props }) => {
  const backgroundColor = useColorModeValue('gray.100', 'blue.900');

  return (
    <Box
      p={5}
      shadow="md"
      borderRadius="lg"
      borderWidth="1px"
      bg={backgroundColor}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
