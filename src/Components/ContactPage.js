import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CustomBox from './custom-ui/CustomBox';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_ven1hqh';
    const templateId = 'template_76w9kwc';
    const publicKey = 'F6kKO7g5nGs4gvsc0';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mentor',
      message: message,
    };
    console.log('templateParams', templateParams);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        toast({
          title: t('emailSent'),
          description: t('messageSentSuccess'),
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast({
          title: t('emailSendingFailed'),
          description: t('errorSendingEmail'),
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex height="80vh" alignItems="center" justifyContent="center">
      {/* <Box
        as="form"
        onSubmit={handleSubmit}
        p={5}
        borderWidth="1px"
        borderRadius="lg"
        shadow="lg"
        // w="80%"
      > */}
      <CustomBox as="form" onSubmit={handleSubmit}>
        <VStack spacing={1}>
          <FormControl id="name">
            <FormLabel>{t('yourName')}</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('enterYourName')}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>{t('yourEmail')}</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('enterYourEmail')}
            />
          </FormControl>
          <FormControl id="message">
            <FormLabel>{t('yourMessage')}</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('enterYourMessage')}
              rows={5}
            />
          </FormControl>
          <Button mt={2} type="submit" colorScheme="blue">
            {t('sendEmail')}
          </Button>
        </VStack>
      </CustomBox>
    </Flex>
  );
};

export default EmailForm;
