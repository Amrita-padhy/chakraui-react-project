import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import Header from "../src/components/Headers";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ColorModeSwitcher />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
