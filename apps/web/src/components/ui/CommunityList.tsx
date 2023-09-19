import { Box, BoxProps, Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { CommunityListData } from 'ui/common/types/communityList';
import { TextLink } from './TextLink';

type CommunityListProps = BoxProps & {
  data: CommunityListData;
};

const CommunityList = ({ data, ...rest }: CommunityListProps): JSX.Element => (
  <Box {...rest}>
    <Heading as="h2">{data.title}</Heading>
    <Text variant={'large'} mt={5} mb={10}>
      {data.subtitle}
    </Text>

    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8}>
      {data.content.map((link) => (
        <Box key={link.title} justifyContent={'space-between'}>
          <Flex background={'chakra-subtle-bg'} border={'1px'} borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.900')} mb={5} height={{ base: 100, md: 150 }} justifyContent={'center'}>
            <Image src={link.img.src} alt={link.img.alt || ''} width="368" height="200" style={{ objectFit: 'contain' }} />
          </Flex>
          <Heading as="h3" size={'md'}>
            {link.title}
          </Heading>
          <Text my={3}>{link.description}</Text>

          <TextLink text={link.linkText} href={link.href} />
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);
CommunityList.defaultProps = {
  className: '',
};

export default CommunityList;
