import { Card, CardBody, CardHeader, LinkBox, SimpleGrid, Text } from '@chakra-ui/react';
import { TextLink } from './TextLink';

type CategoryTileListProps = {
  cards: CategoryTileProps[];
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
            <TextLink isHeading as="h3" variant={'large'} text={card.title} href={card.href} />
          </CardHeader>
          <CardBody>
            <Text>{card.description}</Text>
          </CardBody>
        </Card>
      </LinkBox>
    ))}
  </SimpleGrid>
);

export default CategoryTileList;
