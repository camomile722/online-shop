import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { slides } from "../data/slides";
import { Navbar } from "./Navbar";
import { SliderItem } from "./SliderItem";

export interface SlideDataProps {
  id: string;
  image: {
    url: string;
  };
  sale: number;
  title: string;
  description: string;
  price: number;
}

export const Header = () => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const nextSlide = () => {
    setSelectedSlideIndex(selectedSlideIndex + 1);
    if (selectedSlideIndex === slides.length - 1) setSelectedSlideIndex(0);
    console.log(selectedSlideIndex, slides.length, slides.length - 1);
  };

  const prevSlide = () => {
    setSelectedSlideIndex(selectedSlideIndex - 1);
    if (selectedSlideIndex === 0) setSelectedSlideIndex(slides.length - 1);
  };

  return (
    <Box as="header">
      <Navbar />

      <SliderItem
        item={slides[selectedSlideIndex]}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </Box>
  );
};
