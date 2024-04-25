import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Like, Search, ShoppingBag, User } from "../../theme/icons";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../wrapper/Wrapper";
import { CartProps } from "../../slices/cartSlice";
import NavIconLink from "./NavIconLink";
import { menuItems } from "../../data";
import NavBarMobile from "./NavBarMobile";
import { Logo } from "../layout/Logo";

export const Navbar = () => {
    const { cartItems } = useSelector((state: CartProps) => state.cart);
    const { items } = useSelector((state: any) => state.wishList);

    const navIcons = [
        // {
        //     id: 1,
        //     icon: <ShoppingBag boxSize="20px" />,
        //     url: "/cart",
        //     badge: cartItems.length > 0,
        //     badgeCount: cartItems.reduce(
        //         (acc: number, item: any) => acc + item.qty,
        //         0
        //     ),
        // },
        {
            id: 2,
            icon: <Like boxSize="20px" />,
            url: "/wish-list",
            badge: items.length > 0,
            badgeCount: items.length,
        },
        // { id: 3, icon: <User boxSize="20px" />, url: "/login" },
    ];
    return (
        <Wrapper>
            <Flex justifyContent="space-between" alignItems="center" as="nav">
                <Box>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Box>
                {/* <UnorderedList
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
                        {menuItems.map(item => (
                            <ListItem key={item.name}>
                                <NavLink to={item.path}>
                                    {({ isActive }) => (
                                        <Text
                                            color={
                                                isActive ? "brand.200" : "black"
                                            }
                                        >
                                            {item.name}
                                        </Text>
                                    )}
                                </NavLink>
                            </ListItem>
                        ))}
                    </Box>
                </UnorderedList> */}
                <Box display={{ base: "none", lg: "block" }}>
                    <Text color="gray.600" as="h1" fontSize="34px">
                        <Text as="span" fontWeight="bold" color="brand.200">
                            RESTPOSTEN
                        </Text>{" "}
                        Möbelverkauf in Kassel
                    </Text>
                </Box>
                <UnorderedList
                    display="flex"
                    styleType="none"
                    gap={{ base: 3, md: 8 }}
                >
                    {navIcons.map(item => (
                        <NavIconLink
                            key={item.id}
                            icon={item.icon}
                            url={item.url}
                            badge={item?.badge}
                            badgeCount={item?.badgeCount}
                        />
                    ))}
                </UnorderedList>
                {/* <NavBarMobile /> */}
            </Flex>
            <Box display={{ base: "block", lg: "none" }} mt="6">
                <Text color="gray.600" as="h1" fontSize="20px">
                    <Text as="span" fontWeight="bold" color="brand.200">
                        RESTPOSTEN
                    </Text>{" "}
                    Möbelverkauf in Kassel
                </Text>
            </Box>
        </Wrapper>
    );
};
