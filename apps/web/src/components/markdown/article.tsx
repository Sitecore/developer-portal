import { Box, Card, CardBody, CardFooter, CardHeader, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ButtonLink } from '../ui/ButtonLink';

type ArticleProps = {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
  imageUrl?: string;
  hideLinkText?: boolean;
};
export const Article = ({ title, description, link, linktext, imageUrl, hideLinkText }: ArticleProps) => {
  return (
    <Card variant={'outlineRaised'} size={'sm'}>
      <CardHeader>
        <Text as="h3" size={'md'}>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        {description && <p>{description}</p>}
        {imageUrl && link && (
          <Box>
            <Link href={link} title={title} rel="noreferrer noopener">
              <Image
                src={imageUrl}
                alt={title || ''}
                className="relative z-10"
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              />
            </Link>
          </Box>
        )}
      </CardBody>
      {link && !hideLinkText && (
        <CardFooter>
          <ButtonLink variant="solid" text={linktext ? linktext : 'Read more'} href={link} />
        </CardFooter>
      )}
    </Card>
  );
};
