import React from 'react';
import { Box, Container, Text, VStack, Heading, Image } from '@chakra-ui/react';
import ApplicationForm from './Components/ApplicationForm';
import Navbar from './Components/Navbar';
import image from './assets/Students.png';
import AboutTheMentor from './Components/AboutTheMentor';
import Footer from './Components/Footer';
// import ApplicationForm from './ApplicationForm';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Container maxW="container.md">
        <Box p={4}>
          <Heading as="h1" size="xl" mb={6}>
            Welcome to Your Path to Tech
          </Heading>
        </Box>
        <VStack spacing={8}>
          <AboutTheMentor />
          <Image
            src={image}
            alt="Devs"
            // boxSize="250px"
            width="70%"
            // objectFit="contain"
            // objectFit="fill"
            // fit="scale-down"
            borderRadius="10px"
          />
          <ApplicationForm />
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
