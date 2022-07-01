import { Flex, Text } from '@chakra-ui/react';
import { SkillItem } from './SkillItem';

const Technologies = () => {
  return (
    <Flex direction='column'>
      <Text as='h2'>Skills </Text>
      <SkillItem title='Frontend' text='Write Text About FrontEnd Skills' />
      <SkillItem title='Backend' text='Write Text About BackEnd Skills' />
      <SkillItem title='UI Design' text='Write Text About UI Design' />
    </Flex>
  );
};

export default Technologies;
