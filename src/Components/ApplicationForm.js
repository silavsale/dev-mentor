import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    interests: '',
  });

  const toast = useToast();
  const formBackground = useColorModeValue('gray.50', 'gray.700');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for form submission logic
    console.log(formData);
    toast({
      title: 'Application Submitted.',
      description: "We've received your application.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      experience: '',
      interests: '',
    });
  };

  return (
    <Box
      my={8}
      textAlign="left"
      p={5}
      bg={formBackground}
      borderRadius="lg"
      shadow="base"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Want to contact?
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="experience">Programming Experience</FormLabel>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="interests">Areas of Interest</FormLabel>
            <Textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              focusBorderColor="teal.500"
            />
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            size="lg"
            fontSize="md"
          >
            Submit Application
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default ApplicationForm;
