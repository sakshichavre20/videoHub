import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const headingOptions = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW="container.xl" minH="100vh" p="16">
        <Heading
          textTransform={'uppercase'}
          m="auto"
          py="2"
          w="fit-content"
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p="4"
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'justify'}
          >
            Video has revolutionized the way information is conveyed and
            experiences are shared in our modern world. With its dynamic blend
            of visuals, audio, and motion, video has the unique ability to
            engage and captivate audiences across various platforms and
            industries. From entertainment and education to marketing and
            communication, video serves as a versatile medium that transcends
            language barriers and geographical boundaries. The rise of online
            streaming platforms and social media has democratized the creation
            and distribution of video content, enabling individuals and
            organizations to showcase their creativity, tell compelling stories,
            and deliver impactful messages to a global audience. As technology
            continues to advance, the quality and accessibility of video
            production tools have improved, allowing for even more sophisticated
            and immersive visual experiences. Whether it's a short viral clip, a
            documentary, a tutorial, or a full-length feature film, video
            remains an integral part of our digital landscape, shaping the way
            we interact with information and each other.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box w="full" h="100vh">
        <Image src={img1} w="full" h="full" objectFit={'cover'} />
        <Heading
          bgColor="blackAlpha.600"
          color="white"
          size={['30px', '12px']}
          {...headingOptions}
        >
          Watch the future
        </Heading>
      </Box>
      <Box w="full" h="100vh">
        <Image src={img2} w="full" h="full" objectFit={'cover'} />
        <Heading
          bgColor="blackAlpha.600"
          color="white"
          size={['30px', '12px']}
          {...headingOptions}
        >
          Future is gaming
        </Heading>
      </Box>
      <Box w="full" h="100vh">
        <Image src={img3} w="full" h="full" objectFit={'cover'} />
        <Heading
          bgColor="blackAlpha.600"
          color="white"
          size={['30px', '12px']}
          {...headingOptions}
        >
          Gaming is console
        </Heading>
      </Box>
      <Box w="full" h="100vh">
        <Image src={img4} w="full" h="full" objectFit={'cover'} />
        <Heading
          bgColor="blackAlpha.600"
          color="white"
          size={['30px', '12px']}
          {...headingOptions}
        >
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
