import { Button, Card, CardBody, CardFooter, CardHeader, CardProps, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

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
        <Heading as="h4" size={'md'}>
          <Link as={NextLink} href={link1href}>
            {title}
          </Link>
        </Heading>
      </CardHeader>
      <CardBody py={0}>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter pt={0} gap={4}>
        <Link as={NextLink} href={link1href} color={useColorModeValue('white', 'black !important')}>
          <Button variant={'solid'} rightIcon={<Icon path={mdiArrowRight} size={0.8} />}>
            {link1text}
          </Button>
        </Link>

        {link2text && link2href && (
          <Link as={NextLink} href={link2href} color={useColorModeValue('white', 'black !important')}>
            <Button variant={'outline'} rightIcon={<Icon path={mdiArrowRight} size={0.8} />}>
              {link2text}
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
