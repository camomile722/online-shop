import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const theme = extendTheme({
  colors: {
    ...colors,
  },
  // fonts: {
  //     heading: "Bogart-Regular",
  //     body: "Biotif-Regular",
  // },

  // components: {
  //     Box,
  // },
});
