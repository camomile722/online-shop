import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Like, Liked } from "../theme/icons";
import { CustomTooltip } from "./CustomTooltip";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export interface ProductProps {
    _id: string;
    image: {
        url: string;
    };
    sale?: number;
    likes: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    countInStock: number;
    category: string;
}

export interface ProductItemProps {
    product: ProductProps;
    onModalOpen: () => void;
    setSelectedImage: React.Dispatch<React.SetStateAction<any>>;
}

export const ProductItem = ({
    product,
    onModalOpen,
    setSelectedImage,
}: ProductItemProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(product.likes);
    const handleLikeToggle = () => {
        if (isLiked) {
            // If already liked, unlike the image
            setIsLiked(false);
            setLikes(likes - 1);
        } else {
            // If not liked, like the image
            setIsLiked(true);
            setLikes(likes + 1);
        }
    };

    return (
        <Box>
            <Box position="relative">
                <Flex top="3" right="3" position="absolute" zIndex="1">
                    {isLiked ? (
                        <CustomTooltip label="Remove from wishlist">
                            <IconButton
                                aria-label="Remove from wishlist"
                                icon={<Liked color="brand.200" />}
                                opacity="0.7"
                                _hover={{ opacity: "1" }}
                                onClick={handleLikeToggle}
                            />
                        </CustomTooltip>
                    ) : (
                        <CustomTooltip label="Add to wishlist">
                            <IconButton
                                aria-label="Add to wishlist"
                                icon={<Like />}
                                opacity="0.7"
                                _hover={{ opacity: "1" }}
                                onClick={handleLikeToggle}
                            />
                        </CustomTooltip>
                    )}
                </Flex>
                <Link to={`/product/${product._id}`}>
                    <Box position="relative" width="100%" key={product._id}>
                        <Image
                            src={product?.image?.url}
                            alt="sale"
                            objectFit="cover"
                            onClick={() => {
                                onModalOpen();
                                setSelectedImage(product);
                            }}
                            width="100%"
                            height={{ base: "174px", md: "320px" }}
                            cursor="pointer"
                            _hover={{
                                filter: "brightness(90%)",
                                overflow: "hidden",
                            }}
                        />
                        {product?.sale && (
                            <Box
                                bg="brand.200"
                                position="absolute"
                                bottom="1%"
                                left="8px"
                                padding="10px 15px"
                            >
                                <Text
                                    color="white"
                                    fontSize="sm"
                                    wordBreak="break-word"
                                >
                                    - {product?.sale}%
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Link>
            </Box>
            <Link to={`/product/${product._id}`}>
                <Box position="relative" padding="4">
                    <Text
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        {product?.brand}
                    </Text>
                    <Text fontSize="xs">{product?.title}</Text>
                    <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={product?.sale ? "brand.200" : "black"}
                    >
                        {product?.price} €
                    </Text>
                    {product?.sale && (
                        <Text fontSize="xs">
                            Original Price:{" "}
                            {(product.price + product.sale).toFixed(2)} €
                        </Text>
                    )}
                    <Rating
                        value={product.rating}
                        numReviews={product.numReviews}
                    />
                </Box>{" "}
            </Link>
        </Box>
    );
};
