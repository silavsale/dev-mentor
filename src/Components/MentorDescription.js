import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function MentorDescriptionShort() {
  return (
    <Box maxW="xl" p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading mb={4}>Why Enroll in My Programming Classes?</Heading>
      <Text mb={4}>
        Elevate your tech career with a mentor who has extensive full-stack
        development experience across startups and big enterprises. My classes
        go beyond coding to offer a holistic view of the tech industry, tailored
        to make you job-ready.
      </Text>
      <List spacing={3} mb={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Real-World Skills: Master web development from code to deployment, as
          it’s done in top companies.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Professional Growth: Learn Agile, sprint planning, and task management
          to excel in tech roles.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Career-Focused Curriculum: Gain the skills that employers demand in
          today’s tech landscape.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Personalized Guidance: Benefit from my experience to navigate both
          technical and career challenges effectively.
        </ListItem>
      </List>
      <Text>
        Transform your passion into a profession. Join my classes and chart a
        path to success in the tech industry.
      </Text>
    </Box>
  );
}

export default MentorDescriptionShort;
