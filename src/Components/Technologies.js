import React from 'react';
import { Box, Heading, Wrap, WrapItem, Tag } from '@chakra-ui/react';

function TechMentorship() {
  const techStack = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'TypeScript',
    'CSS',
    'Tailwind CSS',
    'Chakra UI',
    'Docker',
    'Git',
    'GitHub',
    'NPM',
    'Yarn',
    'Webpack',
    'Redux',
    'Jest',
    'Mocha',
    'Chai',
    'Postman',
    'ESLint',
  ];

  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading mb={4}>Technologies I Mentor In</Heading>
      <Wrap>
        {techStack.map((tech) => (
          <WrapItem key={tech}>
            <Tag size="lg" variant="solid" colorScheme="teal">
              {tech}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default TechMentorship;
