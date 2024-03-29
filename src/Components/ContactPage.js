import React from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';

function ContactPage() {
  return (
    <Box p={5}>
      <Heading mb={4}>Contact Us</Heading>
      <Text mb={8}>Fill out the form below to get in touch with us.</Text>
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactPage;
