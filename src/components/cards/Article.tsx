import { Box, Card, CardBody, CardFooter, CardHeader, CardProps, Heading, Image, Link, Text } from '@chakra-ui/react';
import { LinkButton } from '../links';

type ArticleProps = CardProps & {
  title: string;
  description: string;
  link?: string;
  linktext?: string;
  imageUrl?: string;
  hideLinkText?: boolean;
};

export const Article = ({ title, description, link, linktext, imageUrl, hideLinkText, ...rest }: ArticleProps) => {
  return (
    <Card variant={'outlineRaised'} size={'md'} {...rest}>
      <CardHeader>
        <Heading as="h4" fontSize={'lg'} fontWeight={'500'}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody py={0}>
        {description && <Text mb={8}>{description}</Text>}
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
        <CardFooter pt={0}>
          <LinkButton href={link} text={linktext ?? 'Read more'} />
        </CardFooter>
      )}
    </Card>
  );
};
