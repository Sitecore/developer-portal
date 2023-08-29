// Global
import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
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
  <Box>
    <Image
      src={img.src}
      alt={img.alt || ''}
      className="relative z-10"
      //priority={true}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  </Box>
);

const PromoCard = ({ title, description, img, link, className, isImageLeft = true }: PromoCardProps): JSX.Element => (
  <SimpleGrid columns={2} gap={6}>
    {isImageLeft && <PromoCardImage img={img} />}
    <Flex alignItems={'flex-start'} justifyContent={'center'} flexDirection={'column'}>
      <Text as={'h3'}>{title}</Text>
      <Text>{description}</Text>
      {!!link && <ButtonLink variant={'solid'} text={link.text ? link.text : 'Read more'} href={link.href} />}
    </Flex>
    {!isImageLeft && <PromoCardImage img={img} />}
  </SimpleGrid>
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
