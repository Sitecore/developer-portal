import { Heading, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { CenteredContent } from './ui/CenteredContent';
import { VerticalGroup } from './ui/VerticalGroup';

export type HeroProps = {
  title: string;
  description: string;
  image?: string;
  productLogo?: string;
  children?: React.ReactNode | React.ReactNode[];
};

const Hero = ({ description, title, children }: HeroProps): JSX.Element => {
  return (
    <VerticalGroup maxWidth={'100%'} backgroundImage={`${useColorModeValue('/images/heros/hero-wide-light.webp', '/images/heros/hero-wide-dark.webp')}`} backgroundSize={'cover'} backgroundPosition={'center center'}>
      <CenteredContent gap={2} py={6}>
        <Heading as="h2" variant="section" fontSize={useBreakpointValue({ base: '2xl', md: '1rem' })} letterSpacing={'.1em'}>
          {description}
        </Heading>
        <Heading as="h1" fontSize={useBreakpointValue({ base: 'sm', md: '3rem' })} fontWeight={400}>
          {title}
        </Heading>
        {children}
      </CenteredContent>
    </VerticalGroup>
  );
};
export default Hero;
