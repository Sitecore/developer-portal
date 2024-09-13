import { Card, CardBody, Heading, Text } from '@chakra-ui/react';
import { LinkButton } from '@src/components/links';

export type CTACardProps = {
  description: string;
  href: string;
  linkText: string;
  link2href?: string;
  link2Text?: string;
  title: string;
};

export const CTACard = ({ description, href, linkText, title, link2Text, link2href }: CTACardProps): JSX.Element => (
  <Card variant="filled" size={'lg'}>
    <CardBody>
      <Heading as="h2" mb={4} fontSize={'5xl'}>
        {title}
      </Heading>
      <Text variant={'large'} mb={6}>
        {description}
      </Text>
      <LinkButton href={href} text={linkText} size={'lg'} />

      {link2href && link2Text && <LinkButton href={link2href} text={link2Text} size={'xl'} />}
    </CardBody>
  </Card>
);
