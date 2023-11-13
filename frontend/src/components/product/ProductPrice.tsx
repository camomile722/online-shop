import { Text } from "@chakra-ui/react";
import { ProductProps } from "./ProductItem";
export interface ProductPriceProps {
    product: ProductProps;
    fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    showOriginalPrice?: boolean;
    sum?: boolean;
}

export const ProductPrice = ({
    product,
    fontSize = "2xl",
    showOriginalPrice = false,
    sum = false,
}: ProductPriceProps) => {
    return (
        <>
            <Text
                as="h2"
                fontSize={fontSize}
                color={product?.sale ? "brand.200" : "black"}
                fontWeight="bold"
                mt={2}
            >
                {sum ? product?.price * product.qty : product?.price} €
            </Text>
            {product?.sale && showOriginalPrice && (
                <Text fontSize="xs">
                    Original Price:{" "}
                    <Text as="span" textDecoration="line-through">
                        {(sum
                            ? (product.price + product.sale) * product.qty
                            : product.price + product.sale
                        ).toFixed(2)}{" "}
                        €
                    </Text>
                </Text>
            )}
        </>
    );
};
