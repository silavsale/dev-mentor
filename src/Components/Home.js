import React from 'react';
import { Box, Container, VStack, Heading, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Navbar from './Navbar';
import AboutTheMentor from './AboutTheMentor';
import image from '../assets/Students.png';
import MentorDescriptionShort from './MentorDescription';
import TechMentorship from './Technologies';
import Footer from './Footer';
import MentorshipServices from './MentorshipServices';
import WebDevelopmentChecklist from './WebDevelopmentChecklist';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box textAlign="center" fontSize="xl">
      <Container maxW="container.md">
        <Box p={4}>
          <Heading as="h1" size="xl" mb={6}>
            {t('welcomeToYourPathToTech')}
          </Heading>
        </Box>
        <VStack spacing={8}>
          {/* <AboutTheMentor /> */}
          <Image src={image} alt="Devs" width="50%" borderRadius="10px" />
          <MentorshipServices />
          <MentorDescriptionShort />
          {/* <WebDevelopmentChecklist /> */}
          <TechMentorship />
          {/* <ApplicationForm /> */}
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
