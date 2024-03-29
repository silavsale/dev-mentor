import React from 'react';
import { Box, Container, VStack, Heading, Image } from '@chakra-ui/react';

import Navbar from './Navbar';
import AboutTheMentor from './AboutTheMentor';
import image from '../assets/Students.png';
import MentorDescriptionShort from './MentorDescription';
import TechMentorship from './Technologies';
import Footer from './Footer';

const Home = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Container maxW="container.md">
        <Box p={4}>
          <Heading as="h1" size="xl" mb={6}>
            Welcome to Your Path to Tech
          </Heading>
        </Box>
        <VStack spacing={8}>
          <AboutTheMentor />
          <Image src={image} alt="Devs" width="50%" borderRadius="10px" />
          <MentorDescriptionShort />
          <TechMentorship />
          {/* <ApplicationForm /> */}
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
