import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../rating/Rating";
import { toggleToWishList } from "../../slices/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import WishListButton from "../button/WishListButton";
import { ProductPrice } from "./ProductPrice";
import { RectangleBadge } from "../badge/RectangleBadge";

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
    qty: number;
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
    const dispatch = useDispatch();
    const { items } = useSelector((state: any) => state.wishList);
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
    const handleAddToWishlist = () => {
        if (handleLikeToggle) {
            handleLikeToggle();
        }
        dispatch(toggleToWishList(product));
        console.log("add to wishlist", product);
        console.log("isLiked", isLiked);
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        if (items && items.find((item: any) => item?._id === product?._id)) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [items, product]);

    return (
        <Box>
            <Box position="relative">
                <Flex top="3" right="3" position="absolute" zIndex="1">
                    <WishListButton
                        isLiked={isLiked}
                        handleAddToWishlist={handleAddToWishlist}
                    />
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
                            <RectangleBadge top="1%" left="2">
                                - {product?.sale}%
                            </RectangleBadge>
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
                    <ProductPrice
                        product={product}
                        fontSize="sm"
                        showOriginalPrice
                    />

                    <Rating
                        value={product.rating}
                        numReviews={product.numReviews}
                    />
                </Box>{" "}
            </Link>
        </Box>
    );
};
