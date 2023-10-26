import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Info } from "../theme/icons";
import Wrapper from "../components/wrapper/Wrapper";
import { ProductProps } from "../components/product/ProductItem";
import {
    CartProps,
    addToCart,
    removeFromCart,
    changeQty,
} from "../slices/cartSlice";
import CartItem from "../components/cart/CartItem";
import { useGetUsersQuery } from "../slices/userApiSlice";
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
        // navigate("/login?redirect=shipping");
    };

    const changeQtyHandler = (product: ProductProps, qty: number) => {
        dispatch(changeQty({ ...product, qty }));
    };
    const { data: users, isLoading, error } = useGetUsersQuery([]);
    console.log(cartItems, itemsPrice);
    console.log(users, "users");

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
                                    <CartItem
                                        key={item._id}
                                        item={item}
                                        addToCartHandler={addToCartHandler}
                                        removeFromCartHandler={
                                            removeFromCartHandler
                                        }
                                        changeQtyHandler={changeQtyHandler}
                                    />
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
