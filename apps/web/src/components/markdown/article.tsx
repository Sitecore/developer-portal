import { Box, Button, Card, CardBody, CardFooter, CardHeader, Image, Link, Text } from '@chakra-ui/react';

import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';

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
        <CardFooter>
          <Link as={Button} href={link} title={linktext ? linktext : 'Read more'} color={'white'} rightIcon={<Icon path={mdiArrowRight} size={0.8} color={'white'} />}>
            {linktext ? linktext : 'Read more'}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
