import { Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { VerticalGroup } from 'ui/components/helpers';
import { CenteredContent } from 'ui/components/helpers/CenteredContent';
import { GetProductLogo, Product } from 'ui/lib/assets';
import { GuidedDemo } from './GuidedDemo';

export type HeroProps = {
  title: string;
  description?: string;
  image?: string;
  productLogo?: string;
  product?: Product;
  children?: React.ReactNode | React.ReactNode[];
};

const Hero = ({ description, title, children, productLogo, product }: HeroProps): JSX.Element => {
  return (
    <VerticalGroup
      maxWidth={'full'}
      backgroundImage={`${useColorModeValue('/images/heros/hero-wide-light.webp', '/images/heros/hero-wide-dark.webp')}`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      borderBottom={'1px'}
      borderColor={'chakra-border-color'}
    >
      <CenteredContent gap={2} py={{ base: 6, md: 12, xl: 24 }} direction={{ base: 'column-reverse', md: 'column' }}>
        {productLogo && <Image src={useColorModeValue(GetProductLogo(productLogo, 'Light'), GetProductLogo(productLogo, 'Dark'))} alt={`${title} logo`} width={'280'} height={'60'} />}
        {!productLogo && (
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }}>
            {title}
          </Heading>
        )}
        <Text as="h2" variant="subtle" fontSize={{ base: 'sm', md: 'md' }}>
          {description}
        </Text>
        {children}
        <GuidedDemo link="https://capture.navattic.com/clcurh1oy004l08l218rj0xua" productName={title} product={product} />
      </CenteredContent>
    </VerticalGroup>
  );
};
export default Hero;
