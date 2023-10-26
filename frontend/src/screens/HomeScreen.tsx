import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ProductList } from "../components/product/ProductList";
import { SliderItem } from "../components/slide/SliderItem";
import { ProductProps } from "../components/product/ProductItem";
import axios from "axios";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { useGetSlidesQuery } from "../slices/slideApiSlice";

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

export const HomeScreen = () => {
    // const [products, setProducts] = useState<ProductProps[]>([]);
    // const [slides, setSlides] = useState<SlideDataProps[]>([]);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
    const { data: products, isLoading, error } = useGetProductsQuery([]);
    const { data: slides } = useGetSlidesQuery([]);
    console.log(slides, "slides");

    const nextSlide = () => {
        setSelectedSlideIndex(selectedSlideIndex + 1);
        if (selectedSlideIndex === slides.length - 1) setSelectedSlideIndex(0);
        console.log(selectedSlideIndex, slides.length, slides.length - 1);
    };

    const prevSlide = () => {
        setSelectedSlideIndex(selectedSlideIndex - 1);
        if (selectedSlideIndex === 0) setSelectedSlideIndex(slides.length - 1);
    };
    // useEffect(() => {
    // const fetchItems = async () => {
    //     const { data } = await axios.get("/api/products");

    //     setProducts(data);
    // };
    // fetchItems();

    //     const fetchSlides = async () => {
    //         const { data } = await axios.get("/api/slides");

    //         setSlides(data);
    //     };
    //     fetchSlides();
    // }, []);
    return (
        <Box>
            <SliderItem
                item={slides && slides[selectedSlideIndex]}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
            <Box as="main" py="6">
                {isLoading ? (
                    <Flex justifyContent="center" my={4}>
                        <Spinner />
                    </Flex>
                ) : (
                    <ProductList products={products} />
                )}
            </Box>
        </Box>
    );
};
