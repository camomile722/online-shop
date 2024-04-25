import {
    Box,
    Button,
    Flex,
    Icon,
    IconButton,
    Image,
    Text,
} from "@chakra-ui/react";

import { ArrowLeft, ArrowRight } from "../../theme/icons";
import Wrapper from "../wrapper/Wrapper";
import { RectangleBadge } from "../badge/RectangleBadge";
import { useNavigate } from "react-router-dom";

export interface SlideDataProps {
    id: string;
    image: {
        url: string;
    };
    sale: number;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    link: string;
}

export interface SliderItemProps {
    item: SlideDataProps;
    prevSlide: () => void;
    nextSlide: () => void;
}

export const SliderItem = ({ item, prevSlide, nextSlide }: SliderItemProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the product screen with the specific ID
        navigate(item.link);
    };
    return (
        <Flex>
            <Box as="section" background="brand.100" width="100%">
                <Wrapper padding="0">
                    <Flex
                        justifyContent="space-around"
                        alignItems="center"
                        position="relative"
                        py="10"
                        px="6"
                    >
                        <RectangleBadge top="0" right="0">
                            Bestseller
                        </RectangleBadge>

                        <Box>
                            <Text>
                                <Text
                                    as="span"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                >
                                    {item?.title}
                                </Text>
                                <br />
                                {item?.description}
                            </Text>
                            <Box>
                                <Text fontWeight="bold">
                                    Price:{" "}
                                    <Text as="span" color="red.500">
                                        {item?.price} €{" "}
                                    </Text>
                                </Text>
                                <Text fontWeight="bold">
                                    Original Preis:{" "}
                                    <Text
                                        fontWeight="bold"
                                        textDecoration="line-through"
                                        as="span"
                                    >
                                        {item?.originalPrice} €
                                    </Text>
                                </Text>
                                <Box mt="6">
                                    <Button
                                        color="white"
                                        bg="brand.200"
                                        borderRadius="none"
                                        onClick={handleClick}
                                    >
                                        Zum Artikel
                                    </Button>
                                </Box>
                            </Box>
                            <IconButton
                                position="absolute"
                                top="50%"
                                left="8px"
                                bg="gray.100"
                                onClick={prevSlide}
                                aria-label="Previous Slide"
                                icon={<Icon as={ArrowLeft} boxSize="10" />}
                            />
                            <IconButton
                                position="absolute"
                                top="50%"
                                right="8px"
                                bg="gray.100"
                                onClick={nextSlide}
                                aria-label="Next Slide"
                                icon={<Icon as={ArrowRight} boxSize="10" />}
                            />
                        </Box>
                        <Box
                            borderRadius="full"
                            as="span"
                            width={{ base: "150px", md: "350px" }}
                            height={{ base: "150px", md: "350px" }}
                            display="inline-flex"
                        >
                            <Image
                                src={item?.image?.url}
                                alt={item?.title}
                                objectFit="cover"
                                borderRadius="full"
                                maxW="100%"
                                maxH="100%"
                            />
                        </Box>
                    </Flex>
                </Wrapper>
            </Box>
        </Flex>
    );
};
