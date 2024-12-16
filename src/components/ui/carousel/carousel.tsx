'use client';

import { Box, Center, Icon, IconButton, Spacer } from '@chakra-ui/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';

import React from 'react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { ImageModal } from '../imageModal';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  if (images.length == 1) {
    return <ImageModal src={images[0]} disableModal={false} border="none" />;
    //return <Box height={'md'} position="relative" backgroundPosition="center" backgroundSize={'contain'} backgroundRepeat="no-repeat" backgroundImage={`url(${images[0]})`} />;
  }

  return (
    <Box width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, index) => (
          <ImageModal key={index} src={url} disableModal={false} border="none" />
          //<Box key={index} height={'md'} position="relative" backgroundPosition="center" backgroundSize={'contain'} backgroundRepeat="no-repeat" backgroundImage={`url(${url})`} />
        ))}
      </Slider>
      {/* Left Icon */}

      <Center>
        <IconButton
          aria-label="left-arrow"
          variant={'ghost'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          icon={
            <Icon>
              <path d={mdiArrowLeft} />
            </Icon>
          }
        />
        <Spacer />
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant={'ghost'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          icon={
            <Icon>
              <path d={mdiArrowRight} />
            </Icon>
          }
        />
      </Center>
    </Box>
  );
}
