import { Link, List, ListItem } from '@chakra-ui/react';
import Image from 'next/image';
import socialData from '../../ts/data/social.data';

const SocialLinks = () => {
  return (
    <List display='flex' gap='24px'>
      {socialData.map((data) => {
        return (
          <ListItem key={data.id}>
            <Link href={data.linkTo} isExternal>
              <Image src={data.image} alt={data.alt} width={30} height={30} />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SocialLinks;
