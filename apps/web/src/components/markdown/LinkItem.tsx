import { Card } from '@chakra-ui/react';
import { ButtonLink } from '../ui/ButtonLink';

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
  className?: string;
};
export const LinkItem = ({ title, link, className = 'bg-violet-lightest' }: LinkProps) => {
  return (
    <Card variant={'filled'} py={4} px={2}>
      <ButtonLink variant="text" text={title} href={link}></ButtonLink>
    </Card>
  );
};
