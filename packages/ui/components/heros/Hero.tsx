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
};

const Hero = ({ description, headingLevel = 'h1', title, image, productLogo }: HeroProps): JSX.Element => {
  if (productLogo != null || image != null) {
    return <ProductHero title={title} description={description} image={image} productLogo={productLogo} headingLevel={headingLevel} />;
  }

  return (
    <header className="wide-hero relative bg-cover py-14">
      <Container size="standard" className="grid gap-16 lg:items-center">
        <div className="md:col-span-5 lg:pr-24">
          <h1 className="heading-lg relative mb-5">{title}</h1>
          <h2 className="text-theme-text-alt">{description}</h2>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
