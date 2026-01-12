import { cn } from '@/src/lib/util';
import { Card, CardContent, CardFooter, CardHeader } from '@src/components/ui/card';
import NextLink from 'next/link';
import { LinkButton } from '../links';

type DownloadProps = {
  title: string;
  description: string;
  link1text: string;
  link1href: string;
  link2text?: string;
  link2href?: string;
  className?: string;
};

export const Download = ({ title, description, link1text, link1href, link2text, link2href, className }: DownloadProps) => {
  return (
    <Card style="outline" className={cn(className)}>
      <CardHeader>
        <h4 className="text-lg font-heading mt-0">
          <NextLink href={link1href} className="hover:underline">
            {title}
          </NextLink>
        </h4>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="space-x-4">
        <LinkButton href={link1href} text={link1text} variant={'default'} />
        {link2text && link2href && <LinkButton href={link2href} text={link2text} variant="outline" />}
      </CardFooter>
    </Card>
  );
};
