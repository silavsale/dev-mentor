import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { useComponentsBackgroundColor } from '../config/styles';
import CustomBox from './custom-ui/CustomBox';

function MentorshipServices() {
  const { t } = useTranslation();
  const backgroundColor = useComponentsBackgroundColor();

  return (
    <CustomBox>
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
    </CustomBox>
  );
}

export default MentorshipServices;
