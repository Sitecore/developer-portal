import { Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { TextLink } from 'ui/components/links/TextLink';

interface NewsletterStoryPartialData {
  copy: string;
  link: {
    text?: string;
    href: string;
  };
  title: string;
}

export interface NewsletterStoryData extends NewsletterStoryPartialData {
  variant?: 'full-width';
  image: string;
}

const InnerCard = ({ copy, link, title }: NewsletterStoryPartialData) => (
  <>
    <CardHeader>
      <Heading as="h2" size={'md'}>
        {title}
      </Heading>
    </CardHeader>
    <CardBody py={8}>
      <Text variant="large">{copy}</Text>
    </CardBody>
    <CardFooter>{link.href && <TextLink text={link.text || 'Read more'} href={link.href} aria-label={title} variant={'large'} />}</CardFooter>
  </>
);

const NewsletterStoryPartial = ({ copy, link, title }: NewsletterStoryPartialData) => (
  <Card flex={'1 1 0%'} flexDirection={'column'} variant={'unstyled'}>
    <InnerCard copy={copy} link={link} title={title} />
  </Card>
);

const NewsletterStory = ({ variant, image, ...props }: NewsletterStoryData) => {
  if (variant === 'full-width') {
    return (
      <GridItem colSpan={3} marginBottom={5} marginTop={5}>
        <Card flex={'1 1 0%'} flexDirection={{ base: 'column-reverse', md: 'row' }} variant={'unstyled'}>
          <SimpleGrid columns={3} gap={10}>
            <GridItem colSpan={2}>
              <Stack justifyContent={'space-between'}>
                <InnerCard copy={props.copy} link={props.link} title={props.title} />
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Image objectFit="fill" boxSize={250} src={image} alt={props.title} />
            </GridItem>
          </SimpleGrid>
        </Card>
      </GridItem>
    );
  }

  return (
    <Flex direction={'column'}>
      {image && <Image src={image} alt="" objectFit={'fill'} boxSize={250} mb={4} />}
      <NewsletterStoryPartial {...props} />
    </Flex>
  );
};

export default NewsletterStory;
