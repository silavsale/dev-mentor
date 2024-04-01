// import React from 'react';
// import {
//   Box,
//   Heading,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   VStack,
// } from '@chakra-ui/react';

// function ContactPage() {
//   return (
//     <Box p={5}>
//       <Heading mb={4}>Contact Us</Heading>
//       <Text mb={8}>Fill out the form below to get in touch with us.</Text>
//       <VStack spacing={4}>
//         <FormControl id="name">
//           <FormLabel>Name</FormLabel>
//           <Input type="text" />
//         </FormControl>
//         <FormControl id="email">
//           <FormLabel>Email</FormLabel>
//           <Input type="email" />
//         </FormControl>
//         <FormControl id="message">
//           <FormLabel>Message</FormLabel>
//           <Textarea />
//         </FormControl>
//         <Button colorScheme="blue" type="submit">
//           Send Message
//         </Button>
//       </VStack>
//     </Box>
//   );
// }

// export default ContactPage;

// Backend code Node.js with sendgrid

// const express = require('express');
// const sgMail = require('@sendgrid/mail');

// const app = express();
// app.use(express.json());

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// app.post('/send-email', (req, res) => {
//     const { to, subject, text } = req.body;

//     const msg = {
//         to,
//         from: 'your-email@example.com',
//         subject,
//         text,
//     };

//     sgMail
//         .send(msg)
//         .then(() => res.status(200).send('Email sent.'))
//         .catch(error => res.status(500).send('Error sending email.'));
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import React, { useState } from 'react';
import {
  Box,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import ReCAPTCHA from 'react-google-recaptcha';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const toast = useToast();

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = () => {
    if (!captchaValue) {
      toast({
        title: 'Please complete the CAPTCHA challenge',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject,
        text: message,
        captcha: captchaValue,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: 'Email sent successfully.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setEmail('');
          setSubject('');
          setMessage('');
          setCaptchaValue(null);
        } else {
          throw new Error('Failed to send email');
        }
      })
      .catch((error) => {
        toast({
          title: 'Error sending email.',
          description: error.toString(),
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Recipient's email"
          type="email"
        />
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={onCaptchaChange}
        />
        <Button
          colorScheme="blue"
          onClick={sendEmail}
          isDisabled={!captchaValue}
        >
          Send Email
        </Button>
      </VStack>
    </Box>
  );
}

export default EmailForm;
