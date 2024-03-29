import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const footerBg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Flex
      as="footer"
      width="100%"
      bg={footerBg}
      color={textColor}
      position="fixed"
      px={5}
      py={4}
      // justifyContent="space-between"
      // alignItems="center"
      bottom={0}
      mt="auto" // This ensures that the footer is pushed to the bottom of the viewport if the content above is short
      // py={2} // Padding top and bottom
    >
      <Container maxWidth="container.md" textAlign="center">
        <Text fontSize="sm">
          © {new Date().getFullYear()} . All rights reserved.
        </Text>
      </Container>
    </Flex>
  );
};

export default Footer;
