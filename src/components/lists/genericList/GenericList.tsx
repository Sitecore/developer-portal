import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Grid,
  Heading,
  HStack,
  LinkBox,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import { LinkButton } from '../../links';
import { GenericListData } from './types';

export const GenericList = (props: GenericListData) => {
  const cols = props.column || 4;
  const cardVariant = props.cardVariant || 'elevated';
  const buttonVariant = cardVariant === 'blurred' ? 'text' : 'outline';

  return (
    <Box w="100%" px={{ base: 4, md: 0 }}>
      <Heading as="h2" mb={{ base: 4, md: 8 }} fontWeight="500" textAlign={{ base: 'center', md: 'left' }}>
        {props.title}
      </Heading>

      {props.subtitle && props.subtitle !== '' && (
        <Heading
          as="h3"
          size="md"
          pb={{ base: 3, md: 6 }}
          mb={{ base: 4, md: 8 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          {props.subtitle}
        </Heading>
      )}

      <Grid
        templateColumns={{
          base: '1fr',                      // 1 card per row on mobile
          sm: 'repeat(2, 1fr)',             // 2 columns on small screens
          md: `repeat(${cols / 2}, 1fr)`,   // existing behavior
          lg: `repeat(${cols}, 1fr)`,
        }}
        gap={{ base: 4, md: 6 }}
        alignItems="stretch"
      >
        {props.data.map((item, key) => {
          const Icon = item.icon;

          return (
            <LinkBox as="article" display="flex" w="100%" key={key}>
              <Card
                variant={cardVariant}
                layerStyle="interactive.raise"

                mx="auto"
                direction="column"
                borderRadius="xl"
                overflow="hidden"
                bg={cardVariant === 'blurred' ? 'whiteAlpha.50' : undefined}
                borderWidth={cardVariant === 'blurred' ? '1px' : undefined}
                borderColor={cardVariant === 'blurred' ? 'whiteAlpha.300' : undefined}
                backdropFilter={cardVariant === 'blurred' ? 'blur(16px)' : undefined}
                transition="all 0.2s ease"
                _hover={{
                  transform: { base: 'none', md: 'translateY(-4px)' }, // no weird hover lift on touch
                  boxShadow: 'lg',
                }}
              >
                <CardHeader p={0}>
                  <Center pt={{ base: 6, md: 10 }}>
                    {Icon ? (
                      <Box
                        borderRadius="full"
                        bg="rgba(235, 0, 26, 0.08)"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        p={{ base: 3, md: 4 }}
                      >
                        <Icon boxSize={{ base: 8, md: 10 }} />
                      </Box>
                    ) : item.img?.src ? (
                      item.img.width && item.img.height ? (
                        <Image
                          alt=""
                          src={item.img.src}
                          width={item.img.width}
                          height={item.img.height}
                          priority
                        />
                      ) : (
                        <Box
                          width={{ base: 'full', sm: '200px', md: '100%' }}
                          height={{ base: '170px', sm: 'full', md: '170px' }}
                          position="relative"
                        >
                          <Image
                            fill
                            alt=""
                            src={item.img.src}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                      )
                    ) : null}
                  </Center>
                </CardHeader>

                <CardBody p={0}>
                  <Stack direction="column" spacing={5} p={0}>
                    <Box p={{ base: 4, md: 5 }}>
                      <Heading
                        as="h3"
                        size={{ base: 'md', md: 'lg' }}
                        mb={2}
                        textAlign="center"
                      >
                        {item.title}
                      </Heading>
                      <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
                        {item.description}
                      </Text>
                      <Show below="lg">
                        <Center mt={3}>
                          <HStack as="span">
                            <LinkButton
                              href={item.href}
                              text={item.linkText}
                              variant="text"
                              color="white"

                            />
                          </HStack>
                        </Center>
                      </Show>
                    </Box>
                  </Stack>
                </CardBody>

                <CardFooter display={{ base: 'none', lg: 'block' }}>
                  <Center>
                    <HStack as="span" mt={2}>
                      <LinkButton
                        href={item.href}
                        text={item.linkText}
                        variant={buttonVariant}
                        color="white"
                      />
                    </HStack>
                  </Center>
                </CardFooter>
              </Card>
            </LinkBox>
          );
        })}
      </Grid>
    </Box>
  );
};
