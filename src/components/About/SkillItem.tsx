import { Box, Text, Divider } from '@chakra-ui/react';
import skillItemInterface from '../../ts/interfaces/skillItem.interfaces';

export const SkillItem = ({ title, text }: skillItemInterface) => {
  return (
    <Box padding='16px 24px'>
      <Text as='h3'>{title}</Text>
      <Text as='p'>{text}</Text>
      <Divider />
    </Box>
  );
};
