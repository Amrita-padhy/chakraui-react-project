import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
function Upload() {
  return (
    <>
      <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <VStack color={"purple.300"} h={"full"} justifyContent={"center"}>
          <AiOutlineCloudUpload />
        </VStack>
      </Container>
    </>
  );
}

export default Upload;
