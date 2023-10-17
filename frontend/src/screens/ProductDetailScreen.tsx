import {
    Box,
    Button,
    Divider,
    Flex,
    IconButton,
    Image,
    Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../components/Wrapper";
import { CustomTooltip } from "../components/CustomTooltip";
import { ArrowLeft, Like, Liked, Retoure, Transport } from "../theme/icons";
import { Rating } from "../components/Rating";
import { ProductProps } from "../components/Product";
import { useEffect, useState } from "react";

export interface ProductDetailScreenProps {
    isLiked?: boolean;
    handleLikeToggle?: () => void;
}
export const ProductDetailScreen = ({
    isLiked,
    handleLikeToggle,
}: ProductDetailScreenProps) => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState<ProductProps | null>(null);

    useEffect(() => {
        const fetchItem = async () => {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        };
        fetchItem();
    }, [productId]);

    return (
        <Wrapper padding="0">
            <Box px={{ base: 4, md: 10 }} pb={{ base: 4, md: 10 }}>
                <IconButton
                    aria-label="Back"
                    icon={<ArrowLeft boxSize={8} />}
                    _hover={{ opacity: "1" }}
                    mb="3"
                    onClick={() => window.history.back()}
                />
                <Flex
                    gap={{ base: 4, md: 10, lg: 20 }}
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <Box
                        position="relative"
                        width={{ base: "100%", md: "50%" }}
                    >
                        <Image src={product?.image.url} alt={product?.title} />
                        {product?.sale && (
                            <Box
                                bg="brand.200"
                                position="absolute"
                                top="1%"
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
                    <Flex
                        flexDir="column"
                        width={{ base: "100%", md: "40%" }}
                        gap={{ base: 6, md: 10 }}
                    >
                        <Box>
                            <Text as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
                                {product?.title}
                            </Text>
                            <Text>{product?.description}</Text>
                            <Text
                                as="h2"
                                fontSize="2xl"
                                color={product?.sale ? "brand.200" : "black"}
                                fontWeight="bold"
                                mt={2}
                            >
                                {product?.price} €
                            </Text>
                            <Text my={2}>
                                Status:
                                {product?.countInStock === 0 ? (
                                    <Text
                                        as="span"
                                        color="red.500"
                                        fontWeight="bold"
                                    >
                                        Out of stock
                                    </Text>
                                ) : (
                                    <Text
                                        as="span"
                                        color="brand.200"
                                        fontWeight="bold"
                                    >
                                        {" "}
                                        In stock
                                    </Text>
                                )}
                            </Text>
                            <Rating
                                value={product?.rating ?? 0}
                                numReviews={product?.numReviews}
                            />
                        </Box>
                        <Flex gap="2">
                            <Button
                                borderRadius="none"
                                width="90%"
                                py={6}
                                bg="black"
                                color="white"
                                textTransform="uppercase"
                                disabled={product?.countInStock === 0}
                            >
                                Add to bag
                            </Button>

                            {isLiked ? (
                                <CustomTooltip label="Remove from wishlist">
                                    <IconButton
                                        aria-label="Remove from wishlist"
                                        icon={<Liked color="brand.200" />}
                                        opacity="0.7"
                                        _hover={{ opacity: "1" }}
                                        onClick={handleLikeToggle}
                                        width="10%"
                                        p={6}
                                        boxSize="5"
                                    />
                                </CustomTooltip>
                            ) : (
                                <CustomTooltip label="Add to wishlist">
                                    <IconButton
                                        aria-label="Add to wishlist"
                                        icon={<Like boxSize="5" />}
                                        opacity="0.7"
                                        _hover={{ opacity: "1" }}
                                        onClick={handleLikeToggle}
                                        width="10%"
                                        p={6}
                                        bg="brand.200"
                                        color="white"
                                    />
                                </CustomTooltip>
                            )}
                        </Flex>
                        <Box>
                            <Flex
                                justifyContent="space-between"
                                alignItems="flex-end"
                            >
                                <Box>
                                    <Transport boxSize={6} />
                                    <Text fontSize="xs" fontWeight="medium">
                                        1-5 working days
                                    </Text>
                                    <Text fontSize="xs" fontWeight="medium">
                                        Standart delivery
                                    </Text>
                                </Box>
                                <Text fontWeight="medium" fontSize="sm">
                                    Free shipping
                                </Text>
                            </Flex>
                            <Divider mt="4" />
                            <Flex
                                justifyContent="space-between"
                                alignItems="flex-end"
                                mt="4"
                            >
                                <Box>
                                    <Retoure boxSize={6} />
                                    <Text fontSize="xs" fontWeight="medium">
                                        100 day return policy
                                    </Text>
                                </Box>
                                <Text fontSize="sm" fontWeight="medium">
                                    Free delivery and free returns
                                </Text>
                            </Flex>
                            <Divider mt="4" />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Wrapper>
    );
};
