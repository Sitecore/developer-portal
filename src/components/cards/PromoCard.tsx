import { Card, CardBody, Center, Heading, Hide, HStack, Image, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';

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

export type PromoCardImage = {
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

function PromoImage({ img }: PromoCardImage): JSX.Element {
  return <Image src={img.src} alt={img.alt || ''} objectFit="cover" maxW={{ base: '100%', md: '310px' }} />;
}

export const PromoCard = ({ title, description, img, link, isImageLeft = true }: PromoCardProps): JSX.Element => (
  <Center>
    <LinkBox as={Card} direction={{ base: 'column', md: 'row' }} overflow="hidden" variant="outlineRaised" maxW={'container.md'} layerStyle={'interactive.raise'}>
      {isImageLeft && <PromoImage img={img} />}

      <Stack>
        <CardBody display={'flex'} justifyContent={'space-between'} flexDirection={'column'} alignItems={'left'}>
          <Heading as={'h4'} size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          {!!link && (
            <HStack as={'span'} mt={2}>
              <LinkOverlay as={NextLink} href={link.href} fontWeight={'semibold'}>
                {link.text}
              </LinkOverlay>
              <Icon path={mdiArrowRight} size={0.8} />
            </HStack>
          )}
        </CardBody>
      </Stack>
      {!isImageLeft && (
        <Hide below="md">
          <PromoImage img={img} />
        </Hide>
      )}
    </LinkBox>
  </Center>
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
