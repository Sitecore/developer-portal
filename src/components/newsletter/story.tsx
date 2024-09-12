import { Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { TextLink } from '@src/components/links';

interface NewsletterStoryPartialData {
  copy: string;
  linkText?: string;
  linkHref: string;
  title: string;
  image?: string;
}

export interface NewsletterStoryData extends NewsletterStoryPartialData {
  variant?: 'full-width';
  image: string;
}

const NewsletterStoryPartial = ({ copy, linkHref, linkText, title, image }: NewsletterStoryPartialData) => (
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
    <CardFooter>{linkHref && <TextLink text={linkText || 'Read more'} href={linkHref} aria-label={title} variant={'large'} />}</CardFooter>
  </Card>
);

export const NewsletterStory = ({ variant, image, ...props }: NewsletterStoryData) => {
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
            <CardFooter>{props.linkHref && <TextLink text={props.linkText || 'Read more'} href={props.linkHref} aria-label={props.title} variant={'large'} />}</CardFooter>
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
