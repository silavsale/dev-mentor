import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function MentorshipServices() {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading mb={4}>What I Offer</Heading>
      <Text mb={4}>
        As part of my mentorship program, I provide comprehensive support
        tailored to aspiring and established web developers. Here's how I can
        help you:
      </Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Text as="b">One-on-One Coaching:</Text> Personalized sessions
          focusing on specific areas of improvement, helping you overcome
          challenges and grow your skills effectively.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Text as="b">Career Guidance:</Text> Get assistance with job
          searching, resume building, and interview preparation, all tailored to
          the web development industry to enhance your employability.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Text as="b">Technical Training:</Text> In-depth tutorials on modern
          web technologies, best practices in software development, and
          understanding agile methodologies to keep you updated and
          market-ready.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <Text as="b">Project Support:</Text> Receive guidance on real-world
          projects, covering all phases from planning and development to
          deployment and maintenance, ensuring you gain practical, hands-on
          experience.
        </ListItem>
      </List>
    </Box>
  );
}

export default MentorshipServices;
