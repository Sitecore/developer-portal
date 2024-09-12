import { Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

import { CenteredContent, VerticalGroup } from '@components/ui/sections';
import { GetProductLogo } from '../../../lib/assets';

import { GuidedDemo } from '../../links/GuidedDemo';

export type HeroProps = {
  title: string;
  description?: string;
  image?: string;
  productLogo?: string;
  demoId?: string;
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const Hero = ({ description, title, children, productLogo, demoId }: HeroProps): JSX.Element => {
  return (
    <VerticalGroup
      maxWidth={'full'}
      backgroundImage={`${useColorModeValue('/images/heros/hero-wide-light.webp', '/images/heros/hero-wide-dark.webp')}`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      borderBottom={'1px'}
      borderColor={'chakra-border-color'}
    >
      <CenteredContent gap={2} py={{ base: 6, md: 12, xl: 16 }} direction={{ base: 'column', md: 'column' }}>
        {productLogo && <Image src={useColorModeValue(GetProductLogo(productLogo, 'Light'), GetProductLogo(productLogo, 'Dark'))} alt={`${title} logo`} width={'280'} height={'60'} />}
        {!productLogo && (
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }}>
            {title}
          </Heading>
        )}
        <Text as="h2" variant="subtle" fontSize={{ base: 'sm', md: 'md' }}>
          {description}
        </Text>
        {demoId && <GuidedDemo demoId={demoId} productName={title} productLogo={productLogo} />}
        {children}
      </CenteredContent>
    </VerticalGroup>
  );
};

export default Hero;
