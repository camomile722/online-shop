import { Box, Select, Text } from "@chakra-ui/react";
import { ProductProps } from "./ProductItem";
import { CustomTooltip } from "../tooltip/CustomTooltip";
import { Rating } from "../rating/Rating";
import { ProductPrice } from "./ProductPrice";

export interface ProductInfoProps {
    product: ProductProps;
    setQty: React.Dispatch<React.SetStateAction<number>>;
}
export const ProductInfo = ({ product, setQty }: ProductInfoProps) => {
    return (
        <Box>
            <Text as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
                {product?.title}
            </Text>
            <Text>{product?.description}</Text>

            <ProductPrice product={product} showOriginalPrice />
            {product?.countInStock > 0 && (
                <CustomTooltip label="Select quantity">
                    <Select
                        onChange={e => setQty(Number(e.target.value))}
                        width="80px"
                        my={3}
                    >
                        {[...Array(product?.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </Select>
                </CustomTooltip>
            )}
            <Text my={2}>
                Status:
                <Text
                    as="span"
                    color={
                        product?.countInStock === 0 ? "red.500" : "brand.200"
                    }
                    fontWeight="bold"
                >
                    {product?.countInStock === 0 ? "Out of stock" : "In stock"}
                </Text>
            </Text>
            <Rating
                value={product?.rating ?? 0}
                numReviews={product?.numReviews}
            />
        </Box>
    );
};
