import { cn } from '@/src/lib/util';
import { Button } from '@src/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@src/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ArticleProps = {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
  imageUrl?: string;
  hideLinkText?: boolean;
  className?: string;
};

export const Article = ({ title, description, link, linktext, imageUrl, hideLinkText, className }: ArticleProps) => {
  return (
    <Card className={cn(className)} style="outline" elevation="xs">
      <CardHeader>
        <h4 className="text-lg font-medium font-heading">{title}</h4>
      </CardHeader>
      <CardContent className="grow">
        {description && <p className="text-sm">{description}</p>}
        {imageUrl && link && (
          <div>
            <Link href={link} title={title} rel="noreferrer noopener">
              <Image
                src={imageUrl}
                alt={title || ''}
                className="relative z-10"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              />
            </Link>
          </div>
        )}
      </CardContent>
      {link && !hideLinkText && (
        <CardFooter>
          <Link href={link}>
            <Button variant="outline" size="default" colorScheme="primary">
              {linktext ?? 'Read more'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
