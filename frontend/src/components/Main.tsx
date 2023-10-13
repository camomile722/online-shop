import { Box } from "@chakra-ui/react";
import { items } from "../data/items";
import { ProductList } from "./ProductList";

export const Main = () => {
  return (
    <Box as="main" py="6">
      <ProductList items={items} />
    </Box>
  );
};
