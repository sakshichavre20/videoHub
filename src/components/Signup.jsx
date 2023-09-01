import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';

const Signup = () => {
  return (
    <Container maxW="container.xl" h="100vh" p="16">
      <form>
        <VStack
          alignItems={'stretch'}
          spacing="8"
          m="auto"
          my="16"
          w={['full', '96']}
        >
          <Heading textAlign={'center'} color="purple.600">
            VideoHUB
          </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />

          <Button variant="ghost" colorScheme="purple" type="submit">
            <Link to="/">Login</Link>
          </Button>
          <Text textAlign={'right'}>
            Existing User?{' '}
            <Button variant="link" alignSelf="flex-end" colorScheme="purple">
              <Link to="/login">Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
