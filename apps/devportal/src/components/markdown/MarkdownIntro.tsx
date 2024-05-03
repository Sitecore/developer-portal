import { Card, CardBody, CardHeader, CardProps, Heading } from '@chakra-ui/react';

type MarkdownIntroProps = CardProps & {
  children: React.ReactNode | React.ReactNode[];
  title: string;
};
export const MarkdownIntro = ({ children, title, ...rest }: MarkdownIntroProps) => {
  return (
    <Card variant={'outline'} bg="chakra-subtle-bg" py={4} px={2} size="sm" {...rest}>
      <CardHeader>
        <Heading size="sm">{title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
