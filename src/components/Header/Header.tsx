import { Box, Flex, List, ListItem, useStyleConfig } from '@chakra-ui/react';
import NextLink from 'next/link';
import indexNavData from '../../ts/data/indexNav.data';

const Header = () => {
  const styles = useStyleConfig('Header');

  return (
    <Flex __css={styles} flexDirection='row'>
      <Box textStyle='Logo'>
        <NextLink href='/'>USAMA</NextLink>
      </Box>
      <Box>
        <List display='flex' gap='24px'>
          {indexNavData.map((data) => {
            return (
              <ListItem key={data.id}>
                <NextLink href={data.href}>{data.title}</NextLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Flex>
  );
};

export default Header;
