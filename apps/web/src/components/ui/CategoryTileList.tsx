import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import { ButtonLink } from './ButtonLink';

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
      <Box key={i} px={8} py={12} background={useColorModeValue('white', 'gray.800')}>
        <ButtonLink as={'h3'} variant="unstyled" text={card.title} href={card.href} fontSize={'1.25rem'} fontWeight={700} aria-label={card.title} px={0} overrideColor={useColorModeValue('black', 'white')} />
        <Text>{card.description}</Text>
      </Box>
    ))}
  </SimpleGrid>
);

export default CategoryTileList;
