import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import React from "react";

import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      variant={"ghost"}
      zIndex={"overlay"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      pos={"fixed"}
      top={4}
      right={4}
    />
  );
};

export default ColorModeSwitcher;
