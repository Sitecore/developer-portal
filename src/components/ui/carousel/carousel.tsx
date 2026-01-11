"use client";

import { Button } from "@src/components/ui/button";
import { ImageModal } from "@src/components/ui/imageModal";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import react-slick to reduce initial bundle size
const Slider = dynamic(() => import("react-slick"), {
	ssr: false,
	loading: () => <div className="w-full h-64 bg-muted animate-pulse rounded" />,
});

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

	if (images.length === 1) {
		return <ImageModal src={images[0]} disableModal={false} border="none" />;
	}

	return (
		<div className="w-full overflow-hidden">
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>

			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{images.map((url) => (
					<ImageModal
						key={url}
						src={url}
						disableModal={false}
						border="none"
					/>
				))}
			</Slider>
			{/* Left Icon */}

			<div className="flex items-center justify-center">
				<Button
					aria-label="left-arrow"
					variant="ghost"
					className="z-[2]"
					onClick={() => slider?.slickPrev()}
				>
					<Icon path={mdiArrowLeft} size={1} />
				</Button>
				<div className="flex-1" />
				{/* Right Icon */}
				<Button
					aria-label="right-arrow"
					variant="ghost"
					className="z-[2]"
					onClick={() => slider?.slickNext()}
				>
					<Icon path={mdiArrowRight} size={1} />
				</Button>
			</div>
		</div>
	);
}
