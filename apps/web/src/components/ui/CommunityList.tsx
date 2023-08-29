import { Box, BoxProps, Heading, Image, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { CommunityListData } from 'ui/common/types/communityList';
import { ButtonLink } from './ButtonLink';

type CommunityListProps = BoxProps & {
  data: CommunityListData;
};

const CommunityList = ({ data, ...rest }: CommunityListProps): JSX.Element => (
  <Box {...rest}>
    <Heading as="h2">{data.title}</Heading>
    <Text variant={'large'} mt={5} mb={10}>
      {data.subtitle}
    </Text>

    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
      {data.content.map((link) => (
        <Box key={link.title} justifyContent={'space-between'}>
          <Box background={'chakra-subtle-bg'} border={'1px'} borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.900')} mb={5}>
            <Image src={link.img.src} alt={link.img.alt || ''} width="368" height="200px" />
          </Box>
          <Heading as="h3" size={'md'}>
            {link.title}
          </Heading>
          <Text my={3}>{link.description}</Text>

          <ButtonLink variant="text" text={link.linkText} href={link.href} justifyContent={'left'} paddingLeft={0} />
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);
CommunityList.defaultProps = {
  className: '',
};

export default CommunityList;
