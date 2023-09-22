import { Card, CardBody, CardHeader, HStack, Heading, Link, LinkBox, SimpleGrid, Text } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';
import { CategoryTileListData } from './types';

export const CategoryTileList = (props: CategoryTileListData) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
    {props.cards.map((card, i) => (
      <LinkBox as="article" key={i}>
        <Card variant="elevated" size={'lg'}>
          <CardHeader>
            <HStack as={'span'}>
              <Link as={NextLink} href={card.href} color={'chakra-body-text'} fontWeight={'semibold'}>
                <Heading as="h3" size={'lg'}>
                  {card.title}
                </Heading>
              </Link>
              <Icon path={mdiArrowRight} size={0.8} />
            </HStack>
          </CardHeader>
          <CardBody>
            <Text>{card.description}</Text>
          </CardBody>
        </Card>
      </LinkBox>
    ))}
  </SimpleGrid>
);
