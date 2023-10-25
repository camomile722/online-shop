import { Box, Image } from "@chakra-ui/react";
import { RectangleBadge } from "../badge/RectangleBadge";
import { ProductProps } from "./ProductItem";
export interface ProductCardProps {
    product: ProductProps;
    imageWidth?: string | { base: string; md: string };
    imageHeight?: string | { base: string; md: string };
}
function ProductCard({ product, imageWidth, imageHeight }: ProductCardProps) {
    return (
        <Box position="relative" key={product._id}>
            <Image
                src={product?.image?.url}
                alt={product?.title}
                objectFit="cover"
                width={imageWidth || "100%"}
                height={imageHeight || "100%"}
                cursor="pointer"
                _hover={{
                    filter: "brightness(90%)",
                    overflow: "hidden",
                }}
            />
            {product?.sale && (
                <RectangleBadge top="1%" left="2">
                    - {product?.sale}%
                </RectangleBadge>
            )}
        </Box>
    );
}

export default ProductCard;
