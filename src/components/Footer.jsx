import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

function Footer() {
  return (
    <Box bg={"blackAlpha.900"} minH={"40"} p={"6"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} width>
          <Heading size={"md"} textTransform={"uppercase"}>
            Subscribe to my channel
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter your Email here..."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor={"none"}
            />
            <Button
              p={"0"}
              variant={"ghost"}
              color={"purple"}
              borderRadius={"0 20px  20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
