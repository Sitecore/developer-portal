import { Card, CardBody, CardHeader, CardProps } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

type GroupProps = CardProps & {
  title: string;
  children: any;
};

export const Group = ({ title, children, ...rest }: GroupProps) => {
  return (
    <Card variant={'outline'} size={'md'} mb={8} {...rest}>
      <CardHeader>{title}</CardHeader>
      <CardBody py={0}>
        <Prose>{children}</Prose>
      </CardBody>
    </Card>
  );
};
