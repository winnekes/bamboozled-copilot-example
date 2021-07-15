import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: "Roboto",
    heading: "Roboto Condensed",
  },
  components: {},
  styles: {
    global: (props) => ({
      body: {
        color: props.colorMode === "dark" ? "white" : "gray.900",
        bg: props.colorMode === "dark" ? colors.dark.ui01 : colors.light.ui01,
      },
    }),
  },
});
