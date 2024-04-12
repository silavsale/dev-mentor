import { useColorModeValue } from '@chakra-ui/react';

// Background color based on the color mode
export const useComponentsBackgroundColor = () =>
  useColorModeValue('gray.100', 'blue.900');

// Text color based on the color mode
export const useComponentsTextColor = () =>
  useColorModeValue('gray.800', 'white');

// Border color based on the color mode
export const useComponentsBorderColor = () =>
  useColorModeValue('gray.200', 'gray.700');
