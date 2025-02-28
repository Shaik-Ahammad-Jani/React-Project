import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import App from './Home/Home'
// import theme from "./Compailer/Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    {/* <ChakraProvider > */}
      <App />
    {/* </ChakraProvider> */}
      
    </BrowserRouter>
  </StrictMode>
);
