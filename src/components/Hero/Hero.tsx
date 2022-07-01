import { Text, Button, Flex, Image, Stack } from '@chakra-ui/react';

// Hello, I'm
// Usama Lodhi
// Providing Solutions To Your Problems
// Front End Developer with a background in finance and research. Currently searching for new and exciting opportunities.

const Hero = () => {
  return (
    <Stack minH='100vh' direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack>
          <Text as='h2'>
            Hello, I'm <br />
            Usama Lodhi
          </Text>
          <Text as='h1'>Providing Solutions To Your Problems</Text>
          <Text as='h2'>
            Front End Developer with a background in finance and research. Currently searching for new and exciting
            opportunities
          </Text>
          <Stack padding='16px 24px' direction='row'>
            <Button m='0px'>LinkedIn</Button>
            <Button m='0px'>Github</Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Hero;
