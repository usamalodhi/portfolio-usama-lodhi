import { Box } from '@chakra-ui/react';
import { About } from '../About/About';
import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Technologies } from '../Technologies/Technologies';

export function Main() {
  return (
    <Box as='main'>
      <Hero />
      <About />
      <Projects />
      <Technologies />
    </Box>
  );
}
