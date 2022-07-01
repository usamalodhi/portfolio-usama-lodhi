import { Box, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <Flex as='footer' justifyContent='space-between' alignItems='center' padding='16px 24px'>
      <Box>
        <NextLink href='/'>© 2022 Usama Lodhi</NextLink>
      </Box>
      <Box>
        <SocialLinks />
      </Box>
    </Flex>
  );
};

export default Footer;
