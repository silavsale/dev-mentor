import React, { useState } from 'react';
import {
  Flex,
  Text,
  useColorMode,
  Icon,
  Link,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import { FaLaptopCode, FaBars, FaMoon, FaSun } from 'react-icons/fa'; // Import icons for menu and theme toggle

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

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
      <Flex alignItems="center">
        <Icon
          as={FaLaptopCode}
          mr={2}
          w={6}
          h={6}
          transition="transform 0.5s"
          _hover={{ transform: 'rotate(360deg)' }}
        />
        <Text fontSize="xl" fontWeight="bold">
          Your Path to Tech
        </Text>
        <Link href="/siteinfo">
          <Button mx={10} px={1} size={'sm'}>
            V 1.0
          </Button>
        </Link>
      </Flex>

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
                  <Link href="/" p={2}>
                    Home
                  </Link>
                  <Link href="/about" p={2}>
                    About
                  </Link>
                  <Link href="/contact" p={2}>
                    Contact
                  </Link>
                  <IconButton
                    aria-label="Toggle theme"
                    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                    mt={4}
                  />
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex alignItems="center">
          <Link px={1} href="/" style={{ textDecoration: 'none' }}>
            <Button>Home</Button>
          </Link>
          <Link px={1} href="/about" style={{ textDecoration: 'none' }}>
            <Button>About Mantor</Button>
          </Link>
          <Link pr={5} href="/contact" style={{ textDecoration: 'none' }}>
            <Button>Contact</Button>
          </Link>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            ml={2}
          />
        </Flex>
      )}
    </Flex>
  );
}

export default Navbar;
