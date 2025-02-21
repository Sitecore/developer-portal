import { Card, CardBody, CardFooter, CardHeader, CardProps, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LinkButton } from '../links';

type DownloadProps = CardProps & {
  title: string;
  description: string;
  link1text: string;
  link1href: string;
  link2text?: string;
  link2href?: string;
};

export const Download = ({ title, description, link1text, link1href, link2text, link2href, ...rest }: DownloadProps) => {
  return (
    <Card variant={'outline'} size={'md'} mb={8} {...rest}>
      <CardHeader>
        <Heading as="h4" size={'md'} mt={0}>
          <Link as={NextLink} href={link1href}>
            {title}
          </Link>
        </Heading>
      </CardHeader>
      <CardBody py={0}>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter pt={0} gap={4} mt={4}>
        <LinkButton href={link1href} text={link1text} />

        {link2text && link2href && <LinkButton href={link2href} text={link2text} variant={'outline'} />}
      </CardFooter>
    </Card>
  );
};
