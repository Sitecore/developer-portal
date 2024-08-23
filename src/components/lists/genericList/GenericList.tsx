import { Box, Card, CardBody, CardFooter, CardHeader, Center, Grid, HStack, Heading, Link, LinkBox, LinkOverlay, Show, Stack, Text } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { GenericListData } from './types';

export const GenericList = (props: GenericListData) => {
  const cols = props.column || 4;
  const cardVariant = props.cardVariant || 'elevated';

  return (
    <Box>
      <Heading as="h2" pt={6} mb={8}>
        {props.title}
      </Heading>
      {props.subtitle != '' && (
        <Heading as="h3" size={'sm'} pb={6} mb={8}>
          {props.subtitle}
        </Heading>
      )}

      <Grid templateColumns={{ base: `repeat(2}, 1fr)`, md: `repeat(${cols / 2}, 1fr)`, lg: `repeat(${cols}, 1fr)` }} gap={6} alignItems={'items-stretch'}>
        {props.data.map((item, key) => (
          <LinkBox as="article" display={'inline-flex'} key={key}>
            <Card variant={cardVariant} layerStyle="interactive.raise" width={props.width} mx={'auto'} direction={{ base: 'column', sm: 'row', md: 'column' }}>
              <CardHeader p={0}>
                {(item.img.width && item.img.height && (
                  <Center mt={10}>
                    <Image alt="" src={item.img.src} width={item.img.width} height={item.img.height} />
                  </Center>
                )) || (
                  <Box width={{ base: 'full', sm: '200px', md: '100%' }} height={{ base: '170', sm: 'full', md: '170' }} position={'relative'}>
                    <Image fill alt="" src={item.img.src} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
                  </Box>
                )}
              </CardHeader>
              <CardBody padding={0}>
                <Stack direction={['column', 'row', 'column']} spacing={5} padding={0}>
                  <Box padding={5}>
                    <Heading as="h3" size="sm" mb={2}>
                      {item.title}
                    </Heading>
                    <Text>{item.description}</Text>
                    <Show below="lg">
                      <HStack as={'span'} mt={2}>
                        <Link as={NextLink} href={item.href} fontWeight={'semibold'}>
                          {item.linkText}
                        </Link>
                        <Icon path={mdiArrowRight} size={0.8} />
                      </HStack>
                    </Show>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter display={{ base: 'none', lg: 'block' }}>
                <HStack as={'span'} mt={2}>
                  <LinkOverlay as={NextLink} href={item.href} fontWeight={'semibold'}>
                    {item.linkText}
                  </LinkOverlay>
                  <Icon path={mdiArrowRight} size={0.8} />
                </HStack>
              </CardFooter>
            </Card>
          </LinkBox>
        ))}
      </Grid>
    </Box>
  );
};
