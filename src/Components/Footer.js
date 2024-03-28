import React from 'react';
import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const footerBg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box
      as="footer"
      width="100%"
      bg={footerBg}
      color={textColor}
      mt="auto" // This ensures that the footer is pushed to the bottom of the viewport if the content above is short
      py={2} // Padding top and bottom
    >
      <Container maxWidth="container.md" textAlign="center">
        <Text fontSize="sm">
          © {new Date().getFullYear()} . All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
