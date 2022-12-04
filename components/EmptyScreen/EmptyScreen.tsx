import { Flex, Text } from '@chakra-ui/react';

import Empty from 'components/Svg/Empty';

export default function EmptyScreen() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      mt={5}
      height={312}
    >
      <Text fontSize="14px" fontWeight={700} lineHeight="150%" color="#263238">
        Ups... not results found
      </Text>
      <Text
        fontSize="12px"
        fontWeight={400}
        lineHeight="150%"
        color="#263238"
        mb={4}
      >
        Please try another search
      </Text>
      <Empty />
    </Flex>
  );
}
