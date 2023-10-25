import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "../../theme/icons";
import { menuItems } from "../../data";
export const NavBarMobile = () => {
    return (
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
                {menuItems.map(item => (
                    <MenuItem key={item.name}>
                        <NavLink to={item.path}>
                            {({ isActive }) => (
                                <Text color={isActive ? "brand.200" : "black"}>
                                    {item.name}
                                </Text>
                            )}
                        </NavLink>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default NavBarMobile;
