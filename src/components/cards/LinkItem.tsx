import { Card } from '@components/ui/card';
import { LinkButton } from '../links';
import { cn } from '@lib/utils';

type LinkProps = {
  title: string;
  link: string;
  linktext?: string;
  className?: string;
};

export const LinkItem = ({ title, link, className }: LinkProps) => {
  return (
    <Card className={cn('border shadow-md hover:shadow-lg transition-shadow py-4 px-2', className)}>
      <LinkButton variant="ghost" text={title} href={link} />
    </Card>
  );
};
