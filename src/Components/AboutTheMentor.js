import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import imageOfCoder from '../assets/Coder.webp';

function AboutTheMentor() {
  // Use color mode value for dynamic color changes.
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box textAlign="center" fontSize="xl" m={10}>
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Image
            src={imageOfCoder}
            alt="Devs"
            width="50%"
            borderRadius="10px"
          />
          <Box
            p={{ base: 4, md: 6 }}
            // shadow="lg"
            // borderWidth="1px"
            // borderColor={borderColor}
            // borderRadius="lg"
            // bg={bgColor}
            // textAlign="left"
          >
            <Heading
              fontSize={{ base: 'xl', md: '2xl' }}
              color="teal.400"
              textAlign="center"
            >
              About the Mentor
            </Heading>
            <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>
              With many years of full-stack web development experience, ranging
              from startups to large corporations and government projects, I
              have acquired a comprehensive understanding of the tech landscape.
              My journey has equipped me with not just technical skills, but
              also with a deep understanding of what it takes to succeed in
              professional environments.
            </Text>
            <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>
              Over the last 5 years, I have dedicated myself to mentoring
              aspiring developers, guiding them not only through the technical
              intricacies of web development but also through the nuances of
              professional life in tech. My focus extends beyond coding to
              include essential industry practices like Agile methodologies,
              sprint planning, task management, and more, ensuring my mentees
              are well-prepared for their first tech job.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default AboutTheMentor;
