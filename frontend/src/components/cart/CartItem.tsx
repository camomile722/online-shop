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
import { Delete } from "../../theme/icons";
import { CustomTooltip } from "../tooltip/CustomTooltip";
import { ProductProps } from "../product/ProductItem";
import WishListButton from "../button/WishListButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishList } from "../../slices/wishListSlice";
import { ProductPrice } from "../product/ProductPrice";

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
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const { items: wishItems } = useSelector((state: any) => state.wishList);

    const handleAddToWishlist = () => {
        dispatch(toggleToWishList(item));
    };

    useEffect(() => {
        const wishItem = wishItems?.find(
            (wishItem: any) => wishItem?._id === item?._id
        );

        if (wishItem) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [wishItems, item]);

    return (
        <Box>
            <Flex gap={4} justifyContent="space-between">
                <Box>
                    <Link to={`/product/${item._id}`}>
                        <Image
                            src={item.images[0].url}
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
                            mb={4}
                        >
                            {[...Array(item.countInStock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </Select>
                        <ProductPrice
                            product={item}
                            showOriginalPrice
                            sum
                            fontSize="md"
                        />
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
                <WishListButton
                    isLiked={isLiked}
                    handleAddToWishlist={handleAddToWishlist}
                    boxSize="20px"
                />
            </Flex>
            <Divider mb={4} />
        </Box>
    );
}

export default CartItem;
