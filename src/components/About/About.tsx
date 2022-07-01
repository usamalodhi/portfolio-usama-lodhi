import { Flex } from '@chakra-ui/react';
import AboutText from './AboutText';
import Technologies from './AboutTech';

const About = () => {
  return (
    <Flex minH='100vh' layerStyle='scrollToBox' id='about'>
      <AboutText />
      <Technologies />
    </Flex>
  );
};

export default About;
