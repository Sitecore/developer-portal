import { Box, Button, Card, CardBody, CardFooter, CardHeader, CardProps, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

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
    <Card variant={'outlineRaised'} layerStyle={'interactive.raise'} size={'md'} {...rest}>
      <CardHeader>
        <Text as="h4" size={'md'}>
          {title}
        </Text>
      </CardHeader>
      <CardBody py={0}>
        {description && <Text>{description}</Text>}
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
          <Link as={NextLink} href={link} color={useColorModeValue('white', 'black !important')}>
            <Button rightIcon={<Icon path={mdiArrowRight} size={0.8} />}>
              {linktext ?? 'Read more'}
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
