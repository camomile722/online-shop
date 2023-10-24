import {
    Box,
    Flex,
    IconButton,
    ListItem,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, Like, Search, ShoppingBag, User } from "../theme/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import { CartProps } from "../slices/cartSlice";

export const Navbar = () => {
    const [isActive, setIsActive] = useState<string>("");
    const { cartItems } = useSelector((state: CartProps) => state.cart);
    console.log(cartItems);

    return (
        <Wrapper>
            <Flex justifyContent="space-between" alignItems="center" as="nav">
                <Box>
                    <Link to="/">
                        <Text fontSize="4xl" fontWeight="bold">
                            SH
                            <Text as="span" color="brand.200">
                                OO
                            </Text>
                            P
                        </Text>
                        <Text
                            fontSize="sm"
                            color="gray.500"
                            lineHeight="0"
                            fontWeight="extrabold"
                        >
                            NOW!
                        </Text>
                    </Link>
                </Box>
                <UnorderedList
                    styleType="none"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    py="0.6rem"
                    margin="0"
                    gap={14}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight={600}
                >
                    <Box gap="3rem" display={{ base: "none", md: "flex" }}>
                        <ListItem
                            onClick={() => {
                                setIsActive("home");
                            }}
                            color={isActive === "home" ? "brand.200" : "black"}
                        >
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem
                            onClick={() => {
                                setIsActive("shop");
                            }}
                            color={isActive === "shop" ? "brand.200" : "black"}
                        >
                            <Link to="/">Shop</Link>
                        </ListItem>
                        <ListItem
                            onClick={() => {
                                setIsActive("categories");
                            }}
                            color={
                                isActive === "categories"
                                    ? "brand.200"
                                    : "black"
                            }
                        >
                            <Link to="/categories">Categories</Link>
                        </ListItem>
                        <ListItem
                            onClick={() => {
                                setIsActive("news");
                            }}
                            color={isActive === "news" ? "brand.200" : "black"}
                        >
                            <Link to="/news">News</Link>
                        </ListItem>
                    </Box>
                </UnorderedList>
                <UnorderedList
                    display="flex"
                    styleType="none"
                    gap={{ base: 3, md: 8 }}
                >
                    <ListItem>
                        <Search boxSize="20px" />
                    </ListItem>
                    <Link to="/cart">
                        <ListItem position="relative">
                            <ShoppingBag boxSize="20px" />
                            {cartItems.length > 0 && (
                                <Box
                                    bg="brand.200"
                                    borderRadius="50%"
                                    position="absolute"
                                    bottom="3"
                                    left="3"
                                    w="1rem"
                                    h="1rem"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Text fontSize="xs" color="white">
                                        {cartItems.reduce(
                                            (acc: number, item: any) =>
                                                acc + item.qty,
                                            0
                                        )}
                                    </Text>
                                </Box>
                            )}
                        </ListItem>
                    </Link>
                    <ListItem>
                        <Like boxSize="20px" />
                    </ListItem>
                    <ListItem>
                        <User boxSize="20px" />
                    </ListItem>
                </UnorderedList>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        my="1rem"
                        aria-label="Options"
                        icon={<HamburgerIcon />}
                        variant="outline"
                        display={{ base: "block", md: "none" }}
                    />
                    <MenuList w="100vw" border="none" h="100vh" zIndex="2">
                        <MenuItem
                            onClick={() => {
                                setIsActive("home");
                            }}
                            color={isActive === "home" ? "brand.200" : "black"}
                        >
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                setIsActive("shop");
                            }}
                            color={isActive === "shop" ? "brand.200" : "black"}
                        >
                            <Link to="/shop">Shop</Link>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                setIsActive("categories");
                            }}
                            color={
                                isActive === "categories"
                                    ? "brand.200"
                                    : "black"
                            }
                        >
                            <Link to="/categories<">Categories</Link>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                setIsActive("news");
                            }}
                            color={isActive === "news" ? "brand.200" : "black"}
                        >
                            <Link to="/news">News</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Wrapper>
    );
};
