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
import Wrapper from "./Wrapper";

export const Navbar = () => {
    const [isActive, setIsActive] = useState<string>("");
    return (
        <Wrapper>
            <Flex justifyContent="space-between" alignItems="center" as="nav">
                <Box>
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
                            <Link to="/shop">Shop</Link>
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
                    <ListItem>
                        <ShoppingBag boxSize="20px" />
                    </ListItem>
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
