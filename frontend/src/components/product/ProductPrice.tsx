import { Text } from "@chakra-ui/react";
import { ProductProps } from "./ProductItem";
export interface ProductPriceProps {
    product: ProductProps;
    fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    showOriginalPrice?: boolean;
}

export const ProductPrice = ({
    product,
    fontSize = "2xl",
    showOriginalPrice = false,
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
                {product?.price} €
            </Text>
            {product?.sale && showOriginalPrice && (
                <Text fontSize="xs">
                    Original Price:{" "}
                    <Text as="span" textDecoration="line-through">
                        {(product.price + product.sale).toFixed(2)} €
                    </Text>
                </Text>
            )}
        </>
    );
};
