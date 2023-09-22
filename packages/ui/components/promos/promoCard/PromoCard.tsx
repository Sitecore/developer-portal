// Global
import { Card, CardBody, Heading, Hide, Image, Stack, Text } from '@chakra-ui/react';
import { ButtonLink } from '../../links/ButtonLink';
import { PromoCardImage, PromoCardProps, SimplePromoCardProps } from './types';

const PromoCardImage = ({ img }: PromoCardImage): JSX.Element => (
  <Image
    src={img.src}
    alt={img.alt || ''}
    objectFit="cover"
    maxW={{ base: '100%', sm: '400px' }}
    //priority={true}
  />
);

export const PromoCard = ({ title, description, img, link, isImageLeft = true }: PromoCardProps): JSX.Element => (
  <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outlineRaised">
    {isImageLeft && <PromoCardImage img={img} />}
    <Hide above="md">
      <PromoCardImage img={img} />
    </Hide>
    <Stack>
      <CardBody>
        <Heading as={'h3'} size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        {!!link && <ButtonLink variant={'link'} text={link.text ? link.text : 'Read more'} href={link.href} />}
      </CardBody>
    </Stack>
    {!isImageLeft && (
      <Hide below="md">
        <PromoCardImage img={img} />
      </Hide>
    )}
  </Card>
);

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
