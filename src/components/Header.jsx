import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

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
  VStack,
  HStack,
} from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        position="fixed"
        top="4"
        left="4"
        colorScheme="purple"
        p="0"
        width={'10'}
        h="10"
        borderRadius="full"
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems="flex-start">
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/videos">Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack w="full" justifyContent="space-evenly">
              <Button onClick={onClose} colorScheme="purple">
                <Link to="/login">Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to="/signup">Sign up</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
