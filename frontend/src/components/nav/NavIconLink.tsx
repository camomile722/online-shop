import { ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import RoundBadge from "../badge/RoundBadge";

export interface NavIconLinkProps {
    icon: React.ReactNode;
    children?: React.ReactNode;
    url: string;
    badge?: boolean;
    badgeCount?: number;
}
function NavIconLink({
    icon,
    children,
    url,
    badge,
    badgeCount,
}: NavIconLinkProps) {
    return (
        <NavLink to={url}>
            {({ isActive }) => (
                <ListItem
                    position="relative"
                    color={isActive ? "brand.200" : "black"}
                >
                    {icon}
                    {badge && <RoundBadge>{badgeCount}</RoundBadge>}
                    {children}
                </ListItem>
            )}
        </NavLink>
    );
}

export default NavIconLink;
