import { SimpleGrid } from '@chakra-ui/react';

type RowProps = {
  children: React.ReactNode | React.ReactNode[];
  columns: number;
};

export const Row = ({ children, columns }: RowProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: columns }} spacing={{ base: 2, md: 10 }} my={4}>
      {children}
    </SimpleGrid>
  );
};
