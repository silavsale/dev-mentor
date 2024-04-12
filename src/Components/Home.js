import React from 'react';
import { Box, Container, VStack, Heading, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import image from '../assets/WebMentor.png';
import MentorDescriptionShort from './MentorDescription';
import TechMentorship from './Technologies';
import MentorshipServices from './MentorshipServices';

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
          <Image src={image} alt="Devs" width="35%" />
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
