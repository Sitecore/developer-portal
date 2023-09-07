// Global
// Interfaces
import { Box, Card, CardBody, CardHeader, CardProps, Flex, Heading, Link, SimpleGrid, Stack, Tag, Text, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';
import type { StackExchangeQuestion } from 'ui/common/types/stackExchange';
// Components
import { ButtonLink } from '../ui/ButtonLink';

type StackExchangeFeedProps = CardProps & {
  data: StackExchangeQuestion[];
  title?: string;
};

const StackExchangeFeed = ({ data, title, ...rest }: StackExchangeFeedProps): JSX.Element => {
  if (data.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest} background={'transparent'}>
      <CardHeader justifyContent={'space-between'} display={'flex'} px={0}>
        <Heading as={'h3'} size={'xl'}>
          {title ? title : `The Latest on Sitecore StackExchange`}
        </Heading>
        <ButtonLink href={`https://sitecore.stackexchange.com/}`} text={'See all questions on StackExchange'} />
      </CardHeader>
      <CardBody px={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {data.map((question) => (
            <Flex key={question.question_id} alignItems={'flex-start'} gap={8}>
              <Box border={'1px'} borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.900')} p={3}>
                <Text textAlign={'center'}>{question.view_count}</Text>
                <Text variant={'small'}>Views</Text>
              </Box>

              <Stack>
                <Link href={question.link} target="_blank" rel="noopener noreferrer">
                  <Text variant="large" fontWeight={500} color={useColorModeValue('black', 'white')}>
                    {question.title}
                  </Text>
                  <VisuallyHidden>Opens in a new tab</VisuallyHidden>
                </Link>
                <VisuallyHidden>Tags:</VisuallyHidden>
                {question.tags.length && (
                  <Stack direction={{ base: 'column', sm: 'row' }}>
                    {question.tags.map((tag) => (
                      <Tag variant={'solid'} colorScheme="purple" size={'lg'} borderRadius={0} key={tag}>
                        <Link href={`https://sitecore.stackexchange.com/questions/tagged/${tag}`} target="_blank" rel="noopener noreferrer" color={useColorModeValue('white', 'black !important')}>
                          {tag}
                          <VisuallyHidden>Opens in a new tab</VisuallyHidden>
                        </Link>
                      </Tag>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Flex>
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

StackExchangeFeed.defaultProps = {
  className: '',
};

export default StackExchangeFeed;
