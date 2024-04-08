import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

function MentorshipServices() {
  const { t } = useTranslation();

  return (
    <Box p={5} shadow="md" borderRadius="lg" borderWidth="1px">
      <Heading mb={4}>{t('whatIOffer')}</Heading>
      <Text mb={4}>{t('mentorshipProgramDescription')}</Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('oneOnOneCoaching')}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('careerGuidance')}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('technicalTraining')}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('projectSupport')}
        </ListItem>
      </List>
    </Box>
  );
}

export default MentorshipServices;
