import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../rating/Rating";
import { toggleToWishList } from "../../slices/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import WishListButton from "../button/WishListButton";
import { ProductPrice } from "./ProductPrice";
import ProductCard from "./ProductCard";

export interface ProductProps {
    _id: string;
    images: {
        _id: string;
        url: string;
    }[];
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
    originalPrice: number;
}

export interface ProductItemProps {
    product: ProductProps;
}

export const ProductItem = ({ product }: ProductItemProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const { items } = useSelector((state: any) => state.wishList);

    const handleAddToWishlist = () => {
        dispatch(toggleToWishList(product));
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

                <ProductCard
                    product={product}
                    imageHeight={{ base: "174px", md: "320px" }}
                />
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

                    {/* <Rating
                        value={product.rating}
                        numReviews={product.numReviews}
                    /> */}
                </Box>{" "}
            </Link>
        </Box>
    );
};
