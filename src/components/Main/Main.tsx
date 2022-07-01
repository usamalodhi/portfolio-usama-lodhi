import { Box } from '@chakra-ui/react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Main = () => {
  return (
    <Box as='main'>
      <Hero />
      <Projects />
      <About />
    </Box>
  );
};

export default Main;
