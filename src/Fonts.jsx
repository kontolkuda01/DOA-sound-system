import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const Font = () => (
  <Global
    styles={`
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    src: local('Helvetica'), url('/assets/Helvetica.woff') format('woff');
    }
`}
  />
);

export const theme = extendTheme({
  fonts: {
    heading: "'Helvetica', sans-serif",
    body: "'Helvetica', sans-serif",
  },
});
