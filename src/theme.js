import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false, // set to true if you want to use the system color mode
  },
});

export default theme;
