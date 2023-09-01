import React from "react";
import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadVideo = () => {
  return (
    <Container maxW="container.xl" h="100vh" p="16">
      <VStack color="purple.600" h="full" justifyContent="center">
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input
              required
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  backgroundColor: 'white',
                  color: 'purple',
                  marginLeft: '-18px',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme="purple" type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default UploadVideo;
