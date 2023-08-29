import * as ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeSwitcher from "./ColorModeSwitcher";
import React, { StrictMode } from "react";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
