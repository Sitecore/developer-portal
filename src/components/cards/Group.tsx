import { Card, CardBody, CardProps, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import styles from '../markdown/MarkdownContent.module.css'; /* eslint-disable react/no-unknown-property */

type GroupProps = CardProps & {
  title: string;
  description?: string;
  columns?: number;
  children: any;
};

export const Group = ({ title, description, columns = 2, children }: GroupProps) => {
  return (
    <>
      <Heading as="h2" size={'4xl'}>
        {title}
      </Heading>
      {description && <Text variant="large">{description}</Text>}

      <SimpleGrid columns={{ base: 1, lg: columns }} spacing={{ base: 2, md: 10 }} my={4}>
        {children}
      </SimpleGrid>
    </>
  );
};

export const GroupItem = ({ children }: { children: any }) => {
  return (
    <Card>
      <CardBody>
        <Prose className={styles.richText}>{children}</Prose>
      </CardBody>
    </Card>
  );
};
