import React from 'react';
import { Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import CustomBox from './custom-ui/CustomBox';

function MentorDescriptionShort() {
  const { t } = useTranslation();

  return (
    <CustomBox>
      <Heading mb={4}>{t('whyEnrollTitle')}</Heading>
      <Text mb={4}>{t('enrollDescription')}</Text>
      <List spacing={3} mb={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('realWorldSkills')}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('professionalGrowth')}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('careerFocusedCurriculum')}
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          {t('personalizedGuidance')}
        </ListItem>
      </List>
      <Text>{t('transformYourPassion')}</Text>
    </CustomBox>
  );
}

export default MentorDescriptionShort;
