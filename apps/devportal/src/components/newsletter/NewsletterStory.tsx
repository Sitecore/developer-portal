import { Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { TextLink } from '@scdp/ui/components';

interface NewsletterStoryPartialData {
  copy: string;
  link: {
    text?: string;
    href: string;
  };
  title: string;
  image?: string;
}

export interface NewsletterStoryData extends NewsletterStoryPartialData {
  variant?: 'full-width';
  image: string;
}

const NewsletterStoryPartial = ({ copy, link, title, image }: NewsletterStoryPartialData) => (
  <Card flex={'1 1 0%'} flexDirection={'column'} variant={'elevated'}>
    {image && <Image src={image} alt="" objectFit="cover" maxW={{ base: '100%' }} maxHeight={'200'} />}
    <CardHeader>
      <Heading as="h2" size={'md'}>
        {title}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text size="lg">{copy}</Text>
    </CardBody>
    <CardFooter>{link.href && <TextLink text={link.text || 'Read more'} href={link.href} aria-label={title} variant={'large'} />}</CardFooter>
  </Card>
);

const NewsletterStory = ({ variant, image, ...props }: NewsletterStoryData) => {
  if (variant === 'full-width') {
    return (
      <GridItem colSpan={{ base: 1, md: 3 }}>
        <Card flex={'0 1 0%'} flexDirection={{ base: 'column-reverse', md: 'row' }} variant={'filled'}>
          <Stack justifyContent={'space-between'} gap={0}>
            <CardHeader>
              <Heading as="h2" size={'md'}>
                {props.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text size="lg">{props.copy}</Text>
            </CardBody>
            <CardFooter>{props.link.href && <TextLink text={props.link.text || 'Read more'} href={props.link.href} aria-label={props.title} variant={'large'} />}</CardFooter>
          </Stack>
          <Image objectFit="fill" boxSize={'300'} src={image} alt={props.title} />
        </Card>
      </GridItem>
    );
  }

  return (
    <Flex direction={'column'}>
      <NewsletterStoryPartial {...props} image={image} />
    </Flex>
  );
};

export default NewsletterStory;
