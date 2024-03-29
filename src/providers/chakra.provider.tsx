"use client";

import { ChakraProvider as Provider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac"
  }
};

export const theme = extendTheme({ colors });

const ChakraProvider = ({ children }: any) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ChakraProvider;
