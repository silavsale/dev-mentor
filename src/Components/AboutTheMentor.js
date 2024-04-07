// import React from 'react';
// import {
//   Box,
//   Container,
//   Heading,
//   Image,
//   Text,
//   VStack,
//   SimpleGrid,
//   Tooltip,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import imageOfCoder from '../assets/Coder.webp';

// function AboutTheMentor() {
//   const bgColor = useColorModeValue('gray.100', 'gray.700');

//   const clients = [
//     {
//       name: 'Government of Quebec',
//       description: 'Developed public service applications.',
//     },
//     {
//       name: 'Government of Canada',
//       description: 'Worked on national digital infrastructure projects.',
//     },
//     {
//       name: 'University of Montreal',
//       description: 'Implemented educational management systems.',
//     },
//     {
//       name: 'Exceldor',
//       description: 'Created supply chain management software.',
//     },
//     {
//       name: 'Bonduelle',
//       description: 'Engineered agritech solutions for sustainable farming.',
//     },
//     {
//       name: 'Veolia',
//       description: 'Developed environmental and waste management systems.',
//     },
//     {
//       name: 'UQAM',
//       description: 'Collaborated on university administration software.',
//     },
//     {
//       name: 'MERCK',
//       description:
//         'Contributed to pharmaceutical research and development platforms.',
//     },
//     {
//       name: 'Desjardins',
//       description: 'Enhanced banking and financial services systems.',
//     },
//     {
//       name: 'Molson',
//       description: 'Upgraded production and distribution tracking systems.',
//     },
//     {
//       name: 'L’Oréal Paris',
//       description: 'Implemented beauty and retail management solutions.',
//     },
//     {
//       name: 'Castorama',
//       description: 'Developed retail and inventory management software.',
//     },
//   ];

//   return (
//     <Box textAlign="center" fontSize="xl" m={10}>
//       <Container maxW="container.md">
//         <VStack spacing={8}>
//           <Image
//             src={imageOfCoder}
//             alt="Devs"
//             width="50%"
//             borderRadius="10px"
//           />
//           <Box p={{ base: 4, md: 6 }}>
//             <Heading
//               fontSize={{ base: 'xl', md: '2xl' }}
//               color="teal.400"
//               textAlign="center"
//             >
//               About the Mentor
//             </Heading>
//             <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>
//               As a seasoned full-stack web developer, my experience spans across
//               providing software solutions for a variety of sectors, including
//               governmental agencies, educational institutions, and leading
//               corporations in various industries. My technical journey has
//               allowed me to work indirectly with reputable organizations through
//               the software companies I was part of.
//             </Text>
//             <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>
//               In the past 5 years, my role evolved towards mentoring upcoming
//               developers, helping them navigate both the technical landscape and
//               the professional environment of the tech industry. I have
//               emphasized practical skills like Agile methodologies, sprint
//               planning, and task management, preparing mentees for their
//               professional careers in technology.
//             </Text>
//             <Heading
//               fontSize={{ base: 'md', md: 'xl' }}
//               color="teal.400"
//               mt={6}
//             >
//               List of Clients I build software for:
//             </Heading>
//             <SimpleGrid columns={3} spacing={5} mt={2}>
//               {clients.map((client) => (
//                 <Tooltip
//                   key={client.name}
//                   label={client.description}
//                   placement="bottom"
//                   hasArrow
//                 >
//                   <Box
//                     cursor="pointer"
//                     bg={bgColor}
//                     borderRadius={5}
//                     p={3}
//                     textAlign="center"
//                   >
//                     {client.name}
//                   </Box>
//                 </Tooltip>
//               ))}
//             </SimpleGrid>
//           </Box>
//         </VStack>
//       </Container>
//     </Box>
//   );
// }

// export default AboutTheMentor;

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import imageOfCoder from '../assets/Coder.webp';

function AboutTheMentor() {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  const clients = [
    {
      name: 'governmentOfQuebec',
      description: 'publicServiceApplications',
    },
    {
      name: 'governmentOfCanada',
      description: 'nationalDigitalInfrastructure',
    },
    {
      name: 'universityOfMontreal',
      description: 'educationalManagementSystems',
    },
    {
      name: 'exceldor',
      description: 'supplyChainManagementSoftware',
    },
    {
      name: 'bonduelle',
      description: 'agritechSolutions',
    },
    {
      name: 'veolia',
      description: 'environmentalAndWasteManagementSystems',
    },
    {
      name: 'uqam',
      description: 'universityAdministrationSoftware',
    },
    {
      name: 'merck',
      description: 'pharmaceuticalResearchAndDevelopment',
    },
    {
      name: 'desjardins',
      description: 'bankingAndFinancialServicesSystems',
    },
    {
      name: 'molson',
      description: 'productionAndDistributionTrackingSystems',
    },
    {
      name: 'lorealParis',
      description: 'beautyAndRetailManagementSolutions',
    },
    {
      name: 'castorama',
      description: 'retailAndInventoryManagementSoftware',
    },
  ];

  return (
    <Box textAlign="center" fontSize="xl" m={10}>
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Image
            src={imageOfCoder}
            alt={t('Devs')}
            width="50%"
            borderRadius="10px"
          />
          <Box p={{ base: 4, md: 6 }}>
            <Heading
              fontSize={{ base: 'xl', md: '2xl' }}
              color="teal.400"
              textAlign="center"
            >
              {t('aboutTheMentor')}
            </Heading>
            <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>
              {t('mentorDescription')}
            </Text>
            <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>
              {t('mentorRoleEvolution')}
            </Text>
            <Heading
              fontSize={{ base: 'md', md: 'xl' }}
              color="teal.400"
              mt={6}
            >
              {t('listOfClients')}
            </Heading>
            <SimpleGrid columns={3} spacing={5} mt={2}>
              {clients.map((client) => (
                <Tooltip
                  key={client.name}
                  label={t(client.description)}
                  placement="bottom"
                  hasArrow
                >
                  <Box
                    cursor="pointer"
                    bg={bgColor}
                    borderRadius={5}
                    p={3}
                    alignContent="center"
                  >
                    {t(client.name)}
                  </Box>
                </Tooltip>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default AboutTheMentor;
