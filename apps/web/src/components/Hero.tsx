import { Heading, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { GetProductLogo } from '../lib/assets';
import { CenteredContent } from './ui/CenteredContent';
import { VerticalGroup } from './ui/VerticalGroup';

export type HeroProps = {
  title: string;
  description?: string;
  image?: string;
  productLogo?: string;
  children?: React.ReactNode | React.ReactNode[];
};

const Hero = ({ description, title, children, productLogo }: HeroProps): JSX.Element => {
  return (
    <VerticalGroup maxWidth={'100%'} backgroundImage={`${useColorModeValue('/images/heros/hero-wide-light.webp', '/images/heros/hero-wide-dark.webp')}`} backgroundSize={'cover'} backgroundPosition={'center center'}>
      <CenteredContent gap={2} py={6} direction={{ base: 'column-reverse', md: 'column' }}>
        <Heading as="h2" variant="section" fontSize={useBreakpointValue({ base: 'xs', md: '1rem' })} letterSpacing={0.5}>
          {description}
        </Heading>
        {productLogo && <Image src={useColorModeValue(GetProductLogo(productLogo, 'Light'), GetProductLogo(productLogo, 'Dark'))} alt={`${title} logo`} width={'280'} height={'60'} />}
        {!productLogo && (
          <Heading as="h1" fontSize={useBreakpointValue({ base: '2xl', md: '3rem' })} fontWeight={'normal'}>
            {title}
          </Heading>
        )}
        {children}
      </CenteredContent>
    </VerticalGroup>
  );
};
export default Hero;
