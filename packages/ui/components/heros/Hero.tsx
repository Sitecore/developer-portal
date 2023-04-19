// Interfaces
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import Container from 'ui/components/common/Container';
import ProductHero from './ProductHero';
// Components

export type HeroProps = {
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
  productLogo?: string;
  children?: React.ReactNode | React.ReactNode[];
};

const Hero = ({ description, headingLevel = 'h1', title, image, productLogo, children }: HeroProps): JSX.Element => {
  if (productLogo != null || image != null) {
    return <ProductHero title={title} description={description} image={image} productLogo={productLogo} headingLevel={headingLevel} />;
  }

  return (
    <header className="wide-hero relative bg-cover py-8">
      <Container size="standard" className="grid gap-16 lg:items-center">
        <div className="flex flex-col md:col-span-5 lg:pr-24">
          <h1 className="heading-md md:heading-lg relative mb-4 md:mt-5 ">{title}</h1>
          <h2 className="text-theme-text-alt text-xs md:order-first md:uppercase md:tracking-widest">{description}</h2>
          <div className="order-last mt-2 md:mt-0">{children}</div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
