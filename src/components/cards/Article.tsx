import { Box, Button, Card, CardBody, CardFooter, CardHeader, CardProps, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';

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
            <Link color={'white'} href={link} title={title} rel="noreferrer noopener">
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
          <Link href={link} _hover={{ textDecoration: 'none' }}>
            <Button
              bg="white"
              color="primary.500"
              size="md"
              borderRadius="full"
              px={6}
              fontWeight="600"
              whiteSpace="normal"
              border="1px solid"
              borderColor="chakra-border-color"
              rightIcon={
                <Icon viewBox="0 0 24 24" w="1.2rem" h="1.2rem">
                  <path
                    fill="currentColor"
                    d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  />
                </Icon>
              }
              _hover={{
                bg: 'primary.500',
                color: 'white',
                borderColor: 'primary.500',
              }}
              _active={{
                bg: 'primary.600',
              }}
            >
              {linktext ?? 'Read more'}
            </Button>

          </Link>
        </CardFooter>
      )}
    </Card>
  );
};