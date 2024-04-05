import { Box, Button, Card, CardBody, CardHeader, CardProps, Flex, Heading, Link, SimpleGrid, Stack, Text, VisuallyHidden, Wrap, useColorModeValue } from '@chakra-ui/react';

import { ButtonLink } from '../../links/ButtonLink';
import { StackExchangeQuestion } from './stackExchange';

type StackExchangeFeedProps = CardProps & {
  data: StackExchangeQuestion[];
  title?: string;
};

export const StackExchangeFeed = ({ data, title, ...rest }: StackExchangeFeedProps): JSX.Element => {
  if (data.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest} background={'transparent'}>
      <CardHeader justifyContent={'space-between'} display={{ base: 'inline', md: 'flex' }} px={0}>
        <Heading as={'h3'} size={{ base: 'lg', md: 'xl' }}>
          {title ? title : `The Latest on Sitecore StackExchange`}
        </Heading>
        <ButtonLink href={`https://sitecore.stackexchange.com/}`} text={'See all questions on StackExchange'} />
      </CardHeader>
      <CardBody px={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 2, md: 8 }}>
          {data.map((question) => (
            <Flex key={question.question_id} alignItems={'flex-start'} gap={{ base: 4, md: 8 }} overflow={'none'}>
              <Box border={'1px'} borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.900')} p={{ base: 1, md: 4 }}>
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
                  <Wrap direction={{ base: 'column', sm: 'row' }}>
                    {question.tags.map((tag, i) => (
                      <Link href={`https://sitecore.stackexchange.com/questions/tagged/${tag}`} target="_blank" rel="noopener noreferrer" color={useColorModeValue('white', 'black !important')} key={i}>
                        <Button variant={'solid'} colorScheme="purple" size={{ base: 'xs', md: 'sm' }} borderRadius={0} key={tag}>
                          {tag}
                          <VisuallyHidden>Opens in a new tab</VisuallyHidden>
                        </Button>
                      </Link>
                    ))}
                  </Wrap>
                )}
              </Stack>
            </Flex>
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};
