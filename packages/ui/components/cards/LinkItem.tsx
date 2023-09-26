import { Card } from '@chakra-ui/react';
import { ButtonLink } from 'ui/components/links/ButtonLink';

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
};
export const LinkItem = ({ title, link }: LinkProps) => {
  return (
    <Card variant={'outlineRaised'} layerStyle={'interactive.fill'} py={4} px={2}>
      <ButtonLink variant="text" text={title} href={link}></ButtonLink>
    </Card>
  );
};
