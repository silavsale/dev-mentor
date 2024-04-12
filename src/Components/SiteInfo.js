import React from 'react';
import { Text, Heading, Box, Flex, Grid } from '@chakra-ui/react';
import CustomBox from './custom-ui/CustomBox';

function SiteInfo() {
  return (
    <Grid minHeight="80vh" placeItems="center">
      <CustomBox p="10">
        <Heading textAlign="center" m={4}>
          About This Site
        </Heading>

        <Text pt="5">
          This site was built using the following technologies:
        </Text>
        <ul>
          <li>React & Chakra UI for the frontend</li>
          <li>Node.js and Express for the backend</li>
          <li>MongoDB for the database</li>
          <li>Deployed on AWS</li>
        </ul>
        <Text fontStyle="italic" py={5}>
          Version: 1.0
        </Text>
      </CustomBox>
    </Grid>
  );
}

export default SiteInfo;
