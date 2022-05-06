import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#060606",
      200: "A8A2A2",
    },
  },
  fonts: {
      body: "Inter, sans-serif"
  },
  styles: {
      global: () => ({
        body: {
            bg: "#F0F1F3"
        }
      })
  }, 
  components: {
      // Button
  }
})