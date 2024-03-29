import React from 'react';
import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';

function SiteInfo() {
  return (
    <Flex
      height="90vh"
      //   width="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={5} borderRadius="md" maxWidth="500px">
        <VStack spacing={4} align="start">
          <Heading size="md">About This Site</Heading>
          <Text>Version: 1.0</Text>
          <Text>This site was built using the following technologies:</Text>
          <ul>
            <li>React & Chakra UI for the frontend</li>
            <li>Node.js and Express for the backend</li>
            <li>MongoDB for the database</li>
            <li>Deployed on Heroku/AWS</li>
          </ul>
        </VStack>
      </Box>
    </Flex>
  );
}

export default SiteInfo;
