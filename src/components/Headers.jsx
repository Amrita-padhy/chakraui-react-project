import React from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

// import { Button, ButtonGroup } from "@chakra-ui/react";

function Headers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        pos={"fixed"}
        left={"4"}
        top={"4"}
        colorScheme={"purple"}
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos?category=free"}> Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/upload"}> Upload Videos</Link>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
              <Link to={"/login"}> Log in</Link>
            </Button>
            <Button
              onClick={onClose}
              variant={"outline"}
              colorScheme={"purple"}
            >
              <Link to={"/signUp"}> Sign Up</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Headers;
