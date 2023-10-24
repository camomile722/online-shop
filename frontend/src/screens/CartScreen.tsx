import {
    Box,
    Button,
    Divider,
    Flex,
    IconButton,
    Image,
    Select,
    Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Delete, Info, Like } from "../theme/icons";
import { CustomTooltip } from "../components/CustomTooltip";
import Wrapper from "../components/Wrapper";
import { ProductProps } from "../components/Product";
import { CartProps, addToCart, removeFromCart } from "../slices/cartSlice";
import { useState } from "react";
import { updateCart } from "../utils/cartUtils";
export interface CartScreenProps {
    cartItems: any;
}
export const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        cartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
    } = useSelector((state: CartProps) => state.cart);
    const removeFromCartHandler = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const addToCartHandler = async (product: ProductProps, qty: number) => {
        dispatch(addToCart({ ...product, qty }));
    };
    const checkoutHandler = () => {
        navigate("/login?redirect=shipping");
    };

    console.log(cartItems, itemsPrice);

    return (
        <Wrapper padding="0">
            <Box px={{ base: 4, md: 10 }}>
                {cartItems.length === 0 ? (
                    <Text
                        as="h1"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        mb={4}
                        height="50vh"
                    >
                        Your bag is empty
                    </Text>
                ) : (
                    <>
                        <Text
                            as="h1"
                            fontSize={{ base: "2xl", md: "3xl" }}
                            mb={4}
                        >
                            Your bag{" "}
                        </Text>
                        <Divider mb={4} />
                        <Flex
                            gap={{ base: "3", md: "6" }}
                            flexDir={{ base: "column", md: "row" }}
                        >
                            <Box width={{ base: "100%", md: "50%" }}>
                                {cartItems.map((item: any) => (
                                    <Box key={item._id}>
                                        <Flex
                                            gap={4}
                                            justifyContent="space-between"
                                        >
                                            <Box>
                                                <Link
                                                    to={`/product/${item._id}`}
                                                >
                                                    <Image
                                                        src={item.image.url}
                                                        alt={item.title}
                                                        width="100px"
                                                    />
                                                </Link>
                                            </Box>

                                            <Box>
                                                <Link
                                                    to={`/product/${item._id}`}
                                                >
                                                    <Text>{item.title}</Text>
                                                    <Text>
                                                        {item.description}
                                                    </Text>
                                                    <Text>
                                                        Sold by: {item.brand}
                                                    </Text>
                                                </Link>
                                            </Box>

                                            <Flex>
                                                <Box>
                                                    <Select
                                                        size="sm"
                                                        w="100px"
                                                        value={item.qty}
                                                        onChange={e =>
                                                            addToCartHandler(
                                                                item,
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                    >
                                                        {[
                                                            ...Array(
                                                                item.countInStock
                                                            ).keys(),
                                                        ].map(x => (
                                                            <option
                                                                key={x + 1}
                                                                value={x + 1}
                                                            >
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                    <Text mt={4}>
                                                        {item.qty * item.price}{" "}
                                                        €
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                        {/* Buttons */}
                                        <Flex
                                            gap={3}
                                            my={4}
                                            justifyContent="flex-end"
                                        >
                                            <CustomTooltip label="Remove from cart">
                                                <IconButton
                                                    icon={<Delete />}
                                                    aria-label="Remove from cart"
                                                    onClick={() =>
                                                        removeFromCartHandler(
                                                            item._id
                                                        )
                                                    }
                                                />
                                            </CustomTooltip>
                                            <CustomTooltip label="Add to wishlist">
                                                <IconButton
                                                    icon={<Like />}
                                                    aria-label="Add to wishlist"
                                                />
                                            </CustomTooltip>
                                        </Flex>
                                        <Divider mb={4} />
                                    </Box>
                                ))}
                            </Box>
                            <Box width={{ base: "100%", md: "30%" }} mb={4}>
                                <Box bg="brand.100" p={10}>
                                    {shippingPrice !== 0 && (
                                        <Flex
                                            alignItems="flex-start"
                                            gap={1}
                                            mb={4}
                                        >
                                            <Info color="brand.200" />
                                            <Text fontSize="xs">
                                                If your bag is over 29,90 € you
                                                will qualify for free shipping.
                                                For Plus members, it's always
                                                free.
                                            </Text>
                                        </Flex>
                                    )}
                                    <Text
                                        as="h1"
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        mb={4}
                                    >
                                        Total
                                    </Text>
                                    <Text>Subtotal: {itemsPrice} €</Text>
                                    <Text>
                                        Shipping:{" "}
                                        {shippingPrice !== 0 ? (
                                            shippingPrice + "€"
                                        ) : (
                                            <Text
                                                fontWeight="bold"
                                                color="brand.200"
                                                as="span"
                                            >
                                                Free
                                            </Text>
                                        )}{" "}
                                    </Text>
                                    <Text>Tax price: {taxPrice} €</Text>
                                    <Text>Total: {totalPrice} €</Text>
                                    <Button
                                        textTransform="uppercase"
                                        bg="brand.200"
                                        borderRadius="0"
                                        color="white"
                                        mt={6}
                                        disabled={cartItems.length === 0}
                                        onClick={checkoutHandler}
                                        width="100%"
                                        _hover={
                                            cartItems.length !== 0
                                                ? {
                                                      opacity: "0.8",
                                                  }
                                                : {
                                                      bg: "gray.100",
                                                      cursor: "not-allowed",
                                                  }
                                        }
                                    >
                                        Go to checkout
                                    </Button>
                                </Box>
                            </Box>
                        </Flex>
                    </>
                )}
            </Box>
        </Wrapper>
    );
};
