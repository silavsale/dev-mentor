import React from 'react';
import { Box, Heading, Wrap, WrapItem, Tag } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

function TechMentorship() {
  const { t } = useTranslation();

  const techStack = [
    'JavaScript',
    'React',
    'Next. js',
    'Node.js',
    'Express',
    'MongoDB',
    'TypeScript',
    'CSS',
    'Tailwind CSS',
    'Chakra UI',
    'Docker',
    'Devops',
    'Git',
    'GitHub',
    'CI CD pipeline',
    'NPM',
    'Yarn',
    'Webpack',
    'Redux',
    'Jest',
    'Mocha',
    'Chai',
    'Postman',
    'ESLint',
    'Agile',
    'Jira',
  ];

  return (
    <Box
      mt={10}
      mb={24}
      p={10}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={4}> {t('technologiesIMentorIn')}</Heading>
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
