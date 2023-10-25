import {
    Box,
    Divider,
    Flex,
    IconButton,
    Image,
    Select,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Delete, Like } from "../../theme/icons";
import { CustomTooltip } from "../tooltip/CustomTooltip";
import { ProductProps } from "../product/ProductItem";

export interface CartItemProps {
    item: ProductProps;
    addToCartHandler: (item: ProductProps, qty: number) => void;
    removeFromCartHandler: (id: string) => void;
    changeQtyHandler?: (item: ProductProps, qty: number) => void;
}

function CartItem({
    item,
    removeFromCartHandler,
    changeQtyHandler,
}: CartItemProps) {
    return (
        <Box>
            <Flex gap={4} justifyContent="space-between">
                <Box>
                    <Link to={`/product/${item._id}`}>
                        <Image
                            src={item.image.url}
                            alt={item.title}
                            width="100px"
                        />
                    </Link>
                </Box>

                <Box>
                    <Link to={`/product/${item._id}`}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>Sold by: {item.brand}</Text>
                    </Link>
                </Box>

                <Flex>
                    <Box>
                        <Select
                            size="sm"
                            w="100px"
                            value={item.qty}
                            onChange={e =>
                                changeQtyHandler &&
                                changeQtyHandler(item, Number(e.target.value))
                            }
                        >
                            {[...Array(item.countInStock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </Select>
                        <Text mt={4}>{item.qty * item.price} €</Text>
                    </Box>
                </Flex>
            </Flex>
            {/* Buttons */}
            <Flex gap={3} my={4} justifyContent="flex-end">
                <CustomTooltip label="Remove from cart">
                    <IconButton
                        icon={<Delete />}
                        aria-label="Remove from cart"
                        onClick={() => removeFromCartHandler(item._id)}
                    />
                </CustomTooltip>
                <CustomTooltip label="Add to wishlist">
                    <IconButton icon={<Like />} aria-label="Add to wishlist" />
                </CustomTooltip>
            </Flex>
            <Divider mb={4} />
        </Box>
    );
}

export default CartItem;
