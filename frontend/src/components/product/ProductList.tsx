import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ProductItem, ProductProps } from "./ProductItem";
import Wrapper from "../wrapper/Wrapper";
export interface ProductListProps {
    products: ProductProps[];
}
export const ProductList = ({ products }: ProductListProps) => {
    return (
        <Wrapper padding="0">
            <Flex flexWrap="wrap" gap="3" justifyContent="center">
                {products.map(product => (
                    <Box key={product._id} width={{ base: "45%", md: "23%" }}>
                        <ProductItem product={product} key={product._id} />
                    </Box>
                ))}
            </Flex>
        </Wrapper>
    );
};
