import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ProductItem, ProductProps } from "./ProductItem";
export interface ProductListProps {
  items: ProductProps[];
}
export const ProductList = ({ items }: ProductListProps) => {
  return (
    <Flex
      maxW="1440px"
      m="0 auto"
      flexWrap="wrap"
      gap="3"
      justifyContent="center"
    >
      {items.map((item) => (
        <Box key={item.id} width={{ base: "45%", md: "23%" }}>
          <ProductItem
            item={item}
            onModalOpen={() => console.log("Modal opened")}
            setSelectedImage={() => console.log("Image selected")}
            key={item.id}
          />
        </Box>
      ))}
    </Flex>
  );
};
