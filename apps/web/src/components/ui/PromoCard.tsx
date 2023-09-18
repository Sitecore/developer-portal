// Global
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ButtonLink } from './ButtonLink';
// Components

type PromoCardImage = {
  img: {
    src: string;
    alt?: string;
  };
};

export type PromoCardProps = PromoCardImage & {
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
  className?: string;
  isImageLeft?: boolean;
};

const PromoCardImage = ({ img }: PromoCardImage): JSX.Element => (
  <Image
    src={img.src}
    alt={img.alt || ''}
    objectFit="cover"
    maxW={{ base: '100%', sm: '400px' }}
    //priority={true}
  />
);

const PromoCard = ({ title, description, img, link, isImageLeft = true }: PromoCardProps): JSX.Element => (
  <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outlineRaised">
    {isImageLeft && <PromoCardImage img={img} />}
    <Stack>
      <CardBody>
        <Heading as={'h3'} size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>{!!link && <ButtonLink variant={'link'} text={link.text ? link.text : 'Read more'} href={link.href} />}</CardFooter>
    </Stack>
    {!isImageLeft && <PromoCardImage img={img} />}
  </Card>
);

export type SimplePromoCardProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSource: string;
  imageAlt?: string;
  className?: string;
  isImageLeft?: boolean;
};

export const Promo = ({ title, description, linkText, linkHref, imageSource, imageAlt, className, isImageLeft }: SimplePromoCardProps): JSX.Element => {
  const data: PromoCardProps = {
    title: title,
    description: description,
    img: {
      src: imageSource,
      alt: imageAlt ? imageAlt : title,
    },
    link: {
      href: linkHref,
      text: linkText,
    },
    className: className,
    isImageLeft: isImageLeft,
  };

  return <PromoCard {...data} />;
};

export default PromoCard;
