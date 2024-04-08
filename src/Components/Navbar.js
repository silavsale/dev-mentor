// import React, { useState } from 'react';
// import {
//   Flex,
//   Text,
//   useColorMode,
//   Icon,
//   Link,
//   useBreakpointValue,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button,
// } from '@chakra-ui/react';
// import { FaLaptopCode, FaBars, FaMoon, FaSun } from 'react-icons/fa'; // Import icons for menu and theme toggle

// function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

//   return (
//     <Flex
//       px={5}
//       py={4}
//       justifyContent="space-between"
//       alignItems="center"
//       position="sticky"
//       top={0}
//       bg={colorMode === 'light' ? 'white' : 'gray.800'}
//       zIndex={1}
//       borderBottom="1px solid"
//       borderColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
//     >
//       <Flex alignItems="center">
//         <Icon
//           as={FaLaptopCode}
//           mr={2}
//           w={6}
//           h={6}
//           transition="transform 0.5s"
//           _hover={{ transform: 'rotate(360deg)' }}
//         />
//         <Text fontSize="xl" fontWeight="bold">
//           Your Path to Tech
//         </Text>
//         <Link href="/siteinfo">
//           <Button mx={10} px={1} size={'sm'}>
//             V 1.0
//           </Button>
//         </Link>
//       </Flex>

//       {isMobile ? (
//         <>
//           <IconButton
//             icon={<FaBars />}
//             onClick={toggleDrawer}
//             variant="outline"
//           />
//           <Drawer
//             isOpen={isDrawerOpen}
//             placement="right"
//             onClose={toggleDrawer}
//           >
//             <DrawerOverlay />
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerHeader>Your Path to Tech</DrawerHeader>
//               <DrawerBody>
//                 <Flex flexDirection="column" alignItems="start" mt={4}>
//                   <Link href="/" p={2}>
//                     Home
//                   </Link>
//                   <Link href="/about" p={2}>
//                     About
//                   </Link>
//                   <Link href="/contact" p={2}>
//                     Contact
//                   </Link>
//                   <IconButton
//                     aria-label="Toggle theme"
//                     icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
//                     onClick={toggleColorMode}
//                     mt={4}
//                   />
//                 </Flex>
//               </DrawerBody>
//             </DrawerContent>
//           </Drawer>
//         </>
//       ) : (
//         <Flex alignItems="center">
//           <Link px={1} href="/" style={{ textDecoration: 'none' }}>
//             <Button>Home</Button>
//           </Link>
//           <Link px={1} href="/about" style={{ textDecoration: 'none' }}>
//             <Button>About Mantor</Button>
//           </Link>
//           <Link pr={5} href="/contact" style={{ textDecoration: 'none' }}>
//             <Button>Contact</Button>
//           </Link>
//           <IconButton
//             aria-label="Toggle theme"
//             icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
//             onClick={toggleColorMode}
//             ml={2}
//           />
//         </Flex>
//       )}
//     </Flex>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import {
  Flex,
  Text,
  useColorMode,
  Icon,
  Link as ChakraLink,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { FaLaptopCode, FaBars, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Flex
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      zIndex={1}
      borderBottom="1px solid"
      borderColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
    >
      <Flex alignItems="center" justifyContent="center" alignContent="center">
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            <Icon
              as={FaLaptopCode}
              mr={2}
              w={6}
              h={6}
              transition="transform 0.5s"
              _hover={{ transform: 'rotate(360deg)' }}
            />
            {t('yourPathToTech')}
          </Button>
        </Link>

        <Link to="/siteinfo">
          <Button mx={10} px={1} size={'sm'}>
            V 1.0
          </Button>
        </Link>
      </Flex>
      {/* <Flex
      // alignItems="center"
      // justifyContent="center"
      // alignContent="center"
      >
        <Link to="/">
          <Icon
            as={FaLaptopCode}
            mr={2}
            w={6}
            h={6}
            transition="transform 0.5s"
            _hover={{ transform: 'rotate(360deg)' }}
          />
        </Link>
        <Link to="/">
          <Text fontSize="xl" fontWeight="bold">
            {t('yourPathToTech')}
          </Text>
        </Link>

        <Link to="/siteinfo">
          <Button mx={10} px={1} size={'sm'}>
            V 1.0
          </Button>
        </Link>
      </Flex> */}

      <Flex alignItems="center">
        {isMobile ? (
          <>
            <IconButton
              icon={<FaBars />}
              onClick={toggleDrawer}
              variant="outline"
            />
            <Drawer
              isOpen={isDrawerOpen}
              placement="right"
              onClose={toggleDrawer}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your Path to Tech</DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection="column" alignItems="start" mt={4}>
                    <Link to="/" p={2}>
                      {t('home')}
                    </Link>
                    <Link to="/about" p={2}>
                      {t('aboutMentor')}
                    </Link>
                    <Link to="/contact" p={2}>
                      {t('contact')}
                    </Link>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <Link
              to="/"
              style={{ textDecoration: 'none', paddingRight: '5px' }}
            >
              <Button>{t('home')}</Button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: 'none', paddingRight: '5px' }}
            >
              <Button>{t('aboutMentor')}</Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: 'none', paddingRight: '15px' }}
            >
              <Button>{t('contact')}</Button>
            </Link>
          </>
        )}

        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<FaGlobe />}
            rightIcon={<IoIosArrowDown />}
          ></MenuButton>
          <MenuList>
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('fr')}>Français</MenuItem>
            <MenuItem onClick={() => changeLanguage('ua')}>Українська</MenuItem>
          </MenuList>
        </Menu>

        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          ml={isMobile ? 0 : 2}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
