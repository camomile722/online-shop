import { Box, Divider, Flex, IconButton } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import { ProductInfo } from "../components/product/ProductInfo";
import Wrapper from "../components/wrapper/Wrapper";
import { ShoppingBag } from "../theme/icons";
import { CustomTooltip } from "../components/tooltip/CustomTooltip";
import { ProductProps } from "../components/product/ProductItem";
import { addToCart } from "../slices/cartSlice";
import { Helmet } from "react-helmet";

function WishListScreen() {
    const { items } = useSelector((state: any) => state.wishList);
    const dispatch = useDispatch();
    const addToCartHandler = async (product: ProductProps, qty: number) => {
        dispatch(addToCart({ ...product, qty }));
    };
    return (
        <>
            <Helmet>
                <title>Wünschliste</title>
                <meta name="description" content="Wünschliste" />
            </Helmet>
            <Wrapper>
                <Flex
                    alignItems="center"
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    gridGap={{ base: 4, lg: 10 }}
                >
                    {items.map((item: any) => (
                        <Box
                            width={{ lg: "45%", md: "100%" }}
                            boxShadow="lg"
                            p={6}
                        >
                            <Flex key={item._id} gridGap={{ base: 4, xl: 10 }}>
                                <Box maxW="200px">
                                    <ProductCard
                                        product={item}
                                        imageHeight={{
                                            base: "174px",
                                            md: "320px",
                                        }}
                                    />
                                </Box>
                                <ProductInfo product={item} />
                                <CustomTooltip label="Add to cart">
                                    <IconButton
                                        icon={<ShoppingBag />}
                                        aria-label="Add to cart"
                                        bg="brand.200"
                                        color="white"
                                        _hover={{ opacity: "0.8" }}
                                        onClick={() =>
                                            addToCartHandler(item, 1)
                                        }
                                    />
                                </CustomTooltip>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Wrapper>
        </>
    );
}

export default WishListScreen;
