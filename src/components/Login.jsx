import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

const Login = () => {
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
            Welcome back
          </Heading>
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
          <Button variant="link" alignSelf="flex-end">
            <Link to="/forgertpassword">Forget Password?</Link>
          </Button>
          <Button variant="ghost" colorScheme="purple" type="submit">
            <Link to="/home">Login</Link>
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant="link" alignSelf="flex-end" colorScheme="purple">
              <Link to="/signup"> SignUp</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
