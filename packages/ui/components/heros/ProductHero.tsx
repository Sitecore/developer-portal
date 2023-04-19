// Interfaces
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import Container from 'ui/components/common/Container';
import DynamicTag from 'ui/components/common/DynamicTag';
import ProductImage from '../common/ProductImage';
// Components

export type ProductHeroProps = {
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
  productLogo?: string;
};

const HeroWithImageClasses = 'lg:min-h-120 md:grid-cols-9';
const HeroWithBackgroundImageClasses = 'wide-hero bg-cover';

const ProductHero = ({ description, headingLevel = 'h1', title, image, productLogo }: ProductHeroProps): JSX.Element => (
  <>
    <Head>
      <link rel="preload" href="/images/heros/hero-wide-light.webp" as="image" />
      <link rel="preload" href="/images/heros/hero-wide-dark.webp" as="image" />
    </Head>
    <header className={` relative py-2 md:py-8 ${!image || !!productLogo ? HeroWithBackgroundImageClasses : ''}`}>
      <Container size="standard" className={`grid gap-16 ${!!image || !!productLogo ? HeroWithImageClasses : ''}`}>
        <div className={`flex flex-col lg:pr-24 ${!!image || !!productLogo ? ['md:col-span-9'] : ''}`}>
          <DynamicTag tag={headingLevel} className={`heading-lg relative mb-5 ${productLogo ? 'sr-only' : 'not-sr-only'}`}>
            {title}
          </DynamicTag>
          {productLogo && productLogo?.length > 0 && (
            <div className="relative mb-4 md:col-span-5 md:mb-0">
              <ProductImage productLogo={productLogo} />
            </div>
          )}
          <h2 className="text-theme-text-alt text-xs uppercase tracking-widest md:order-first md:text-base">{description}</h2>
        </div>

        {image && (
          <React.Fragment>
            <div className="relative hidden md:col-span-4 md:block">
              <div className="h-20 w-full">
                <Image
                  src={image}
                  alt=""
                  className="relative z-10"
                  fill
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                  priority={true}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </Container>
    </header>
  </>
);

export default ProductHero;
