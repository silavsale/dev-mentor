import React from 'react';
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Icon,
  useColorModeValue,
  VStack,
  Text,
} from '@chakra-ui/react';
import { MdDesktopMac, MdStorage, MdBuild } from 'react-icons/md';

function WebDevelopmentChecklist() {
  const bgColor = useColorModeValue('blue.50', 'blue.900');
  const borderColor = useColorModeValue('blue.200', 'blue.700');
  const textColor = useColorModeValue('blue.600', 'blue.200');

  return (
    <VStack
      p={5}
      shadow="xl"
      borderWidth="1px"
      bg={bgColor}
      borderColor={borderColor}
      borderRadius="xl"
      spacing={4}
      align="stretch"
    >
      <Heading color={textColor} textAlign="center">
        Web Development Essentials
      </Heading>
      <UnorderedList spacing={5}>
        <ListItem display="flex" alignItems="center">
          <Icon as={MdDesktopMac} color="blue.500" boxSize={6} mr={2} />
          <Box>
            <Text fontWeight="bold" color={textColor}>
              Front-End
            </Text>
            <UnorderedList styleType="none" ml={4}>
              <ListItem>HTML/CSS</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>
                Front-end Frameworks (e.g., React, Angular, Vue)
              </ListItem>
              <ListItem>Responsive Design Principles</ListItem>
              <ListItem>Version Control/Git</ListItem>
            </UnorderedList>
          </Box>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Icon as={MdStorage} color="green.500" boxSize={6} mr={2} />
          <Box>
            <Text fontWeight="bold" color={textColor}>
              Back-End
            </Text>
            <UnorderedList styleType="none" ml={4}>
              <ListItem>Server, Database, and API Handling</ListItem>
              <ListItem>
                Back-end Programming Languages (e.g., Node.js, Python, Ruby)
              </ListItem>
              <ListItem>Database Management (e.g., SQL, MongoDB)</ListItem>
              <ListItem>Cloud Services (e.g., AWS, Azure)</ListItem>
              <ListItem>Security Fundamentals</ListItem>
            </UnorderedList>
          </Box>
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Icon as={MdBuild} color="orange.500" boxSize={6} mr={2} />
          <Box>
            <Text fontWeight="bold" color={textColor}>
              Tools and Technologies
            </Text>
            <UnorderedList styleType="none" ml={4}>
              <ListItem>Integrated Development Environment (IDE)</ListItem>
              <ListItem>Web Servers (e.g., Apache, Nginx)</ListItem>
              <ListItem>Containerization (e.g., Docker)</ListItem>
              <ListItem>
                Continuous Integration/Continuous Deployment (CI/CD)
              </ListItem>
              <ListItem>Testing Frameworks</ListItem>
            </UnorderedList>
          </Box>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
}

export default WebDevelopmentChecklist;
