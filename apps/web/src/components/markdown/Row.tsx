import { SimpleGrid } from '@chakra-ui/react';

type RowProps = {
  children: React.ReactNode | React.ReactNode[];
  columns: number;
};

export const Row = ({ children, columns }: RowProps) => {
  //return <div className={`mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-${columns} ${className}`}>{children}</div>;
  return (
    <SimpleGrid columns={{ base: 1, md: columns }} spacing={{ base: 2, md: 10 }} my={4}>
      {children}
    </SimpleGrid>
  );
};
