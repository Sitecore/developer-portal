import { Card, CardBody, CardHeader, LinkBox, SimpleGrid, Text } from '@chakra-ui/react';
import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import { TextLink } from './TextLink';

type CategoryTileListProps = {
  cards: CategoryTileProps[];
  headingLevel?: ValidHeadingLevels;
};

export type CategoryTileProps = {
  description: string;
  href: string;
  title: string;
};

const CategoryTileList = ({ cards }: CategoryTileListProps): JSX.Element => (
  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
    {cards.map((card, i) => (
      <LinkBox as="article" key={i}>
        <Card variant="elevated" size={'lg'}>
          <CardHeader>
            <TextLink as="h3" size={'lg'} title={card.title} href={card.href} />
          </CardHeader>
          <CardBody>
            {/* <ButtonLink as={'h3'} variant="unstyled" text={card.title} href={card.href} fontSize={'1.25rem'} fontWeight={700} aria-label={card.title} px={0} color={useColorModeValue('black', 'white')} /> */}
            <Text>{card.description}</Text>
          </CardBody>
        </Card>
      </LinkBox>
    ))}
  </SimpleGrid>
);

export default CategoryTileList;
