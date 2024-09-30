import { Card, CardProps } from '@chakra-ui/react';
import { LinkButton } from '../links';

type LinkProps = CardProps & {
  title: string;
  link: string;
  linktext?: string;
};

export const LinkItem = ({ title, link, ...rest }: LinkProps) => {
  return (
    <Card variant={'outlineRaised'} layerStyle={'interactive.fill'} py={4} px={2} {...rest}>
      <LinkButton variant="text" text={title} href={link}></LinkButton>
    </Card>
  );
};
