import React from 'react';
import { Heading, Wrap, WrapItem, Tag } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CustomBox from './custom-ui/CustomBox';

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
    <CustomBox mb="24">
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
    </CustomBox>
  );
}

export default TechMentorship;
