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
  Box,
  Divider,
  useColorModeValue,
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
  const headerBg = useColorModeValue('gray.100', 'gray.900');

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
      // bg={colorMode === 'light' ? 'white' : 'gray.800'}
      bg={headerBg}
      zIndex={1}
      borderBottom="1px solid"
      borderColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
    >
      {/* <Flex alignItems="center"> */}
      {isMobile ? (
        <>
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
              {/* {t('yourPathToTech')} */}
            </Button>
          </Link>

          <Link to="/siteinfo">
            <Button mx={10} px={1} size={'sm'}>
              V 1.0
            </Button>
          </Link>
          <IconButton
            icon={<FaBars />}
            onClick={toggleDrawer}
            variant="outline"
            mr={4}
          />
          <Drawer isOpen={isDrawerOpen} placement="top" onClose={toggleDrawer}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{t('yourPathToTech')}</DrawerHeader>
              <DrawerBody>
                <Flex flexDirection="column" alignItems="start" mt={4}>
                  <Button m={1}>
                    <Link to="/" p={2}>
                      {t('home')}
                    </Link>
                  </Button>
                  <Button m={1}>
                    <Link to="/about" p={2}>
                      {t('aboutMentor')}
                    </Link>
                  </Button>
                  <Button m={1}>
                    <Link to="/contact" p={2}>
                      {t('contact')}
                    </Link>
                  </Button>
                  <Divider m={2} />
                  <Flex
                    // justify="space-between"
                    justifyContent="space-between"
                    w="100%"
                    //  w="100%"
                  >
                    <Box>
                      <Button
                        // size="xs"
                        m={1}
                        onClick={() => changeLanguage('en')}
                      >
                        EN
                      </Button>
                      <Button
                        // size="xs"
                        m={1}
                        onClick={() => changeLanguage('fr')}
                      >
                        FR
                      </Button>
                      <Button
                        // size="xs"
                        m={1}
                        onClick={() => changeLanguage('ua')}
                      >
                        УКР
                      </Button>
                    </Box>
                    {/* <Spacer width="10%" bg="red" /> */}
                    <Box>
                      <IconButton
                        m={1}
                        aria-label="Toggle theme"
                        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                        onClick={toggleColorMode}
                        // ml={isMobile ? 0 : 2}
                      />
                    </Box>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex
          // justify="space-around"
          justify="space-around"
          w="100%"
          alignItems="center"
        >
          <Box flex="2">
            <Link to="/">
              <Button
                size={{ sm: 'xs', lg: 'md' }}
                colorScheme="teal"
                variant="ghost"
              >
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
              <Button
                mx={10}
                px={1}
                size={{ sm: 'xs', lg: 'sm' }}
                colorScheme="facebook"
              >
                V 1.0
              </Button>
            </Link>
          </Box>
          {/* <Spacer /> */}
          <Box>
            <Link
              to="/"
              style={{ textDecoration: 'none', paddingRight: '5px' }}
            >
              <Button size={{ sm: 'xs', lg: 'md' }} colorScheme="facebook">
                {t('home')}
              </Button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: 'none', paddingRight: '5px' }}
            >
              <Button size={{ sm: 'xs', lg: 'md' }} colorScheme="facebook">
                {t('aboutMentor')}
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: 'none', paddingRight: '15px' }}
            >
              <Button size={{ sm: 'xs', lg: 'md' }} colorScheme="facebook">
                {t('contact')}
              </Button>
            </Link>
          </Box>
          <Menu>
            <MenuButton
              size={{ sm: 'xs', lg: 'md' }}
              as={Button}
              leftIcon={<FaGlobe />}
              rightIcon={<IoIosArrowDown />}
              colorScheme="facebook"
            ></MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage('fr')}>Français</MenuItem>
              <MenuItem onClick={() => changeLanguage('ua')}>
                Українська
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            size={{ sm: 'xs', lg: 'md' }}
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            ml={isMobile ? 0 : 2}
            colorScheme="facebook"
          />
        </Flex>
      )}
      {/* 
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
      /> */}

      {/* </Flex> */}
    </Flex>
  );
}

export default Navbar;
