import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "../theme/icons";

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

export interface SliderItemProps {
  item: SlideDataProps;
  prevSlide: () => void;
  nextSlide: () => void;
}

export const SliderItem = ({ item, prevSlide, nextSlide }: SliderItemProps) => {
  return (
    <Flex>
      <Box as="section" background="brand.100" width="100%">
        <Flex
          maxWidth="1400px"
          m="0 auto"
          justifyContent="space-around"
          alignItems="center"
          position="relative"
          py="10"
          px="6"
        >
          <Box
            background="brand.200"
            color="white"
            fontWeight="extrabold"
            position="absolute"
            right="0"
            top="0"
            py="4"
            px="8"
          >
            Bestseller
          </Box>
          <Box>
            <Text>
              <Text as="span" fontSize={{ base: "2xl", md: "4xl" }}>
                {item?.title}
              </Text>
              <br />
              {item?.description}
            </Text>
            <Box>
              <Text fontWeight="bold">{item.price} €</Text>
              <Box mt="6">
                <Button color="white" bg="brand.200" borderRadius="none">
                  Buy now
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
      </Box>
    </Flex>
  );
};
