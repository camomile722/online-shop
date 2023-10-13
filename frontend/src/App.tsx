import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <Box>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;