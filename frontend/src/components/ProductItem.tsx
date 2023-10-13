import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Like, Liked } from "../theme/icons";
import { CustomTooltip } from "./CustomTooltip";

export interface ProductProps {
  id: string;
  image: {
    url: string;
  };
  sale?: number;
  likes: number;
  title: string;
  description: string;
  price: number;
  brand: string;
}

export interface ProductItemProps {
  item: ProductProps;
  onModalOpen: () => void;
  setSelectedImage: React.Dispatch<React.SetStateAction<any>>;
}

export const ProductItem = ({
  item,
  onModalOpen,
  setSelectedImage,
}: ProductItemProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(item.likes);
  const handleLikeToggle = () => {
    if (isLiked) {
      // If already liked, unlike the image
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      // If not liked, like the image
      setIsLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box>
      <Box position="relative">
        <Flex top="3" right="3" position="absolute" zIndex="1">
          {isLiked ? (
            <CustomTooltip label="Remove from wishlist">
              <IconButton
                aria-label="Remove from wishlist"
                icon={<Liked color="brand.200" />}
                opacity="0.7"
                _hover={{ opacity: "1" }}
                onClick={handleLikeToggle}
              />
            </CustomTooltip>
          ) : (
            <CustomTooltip label="Add to wishlist">
              <IconButton
                aria-label="Add to wishlist"
                icon={<Like />}
                opacity="0.7"
                _hover={{ opacity: "1" }}
                onClick={handleLikeToggle}
              />
            </CustomTooltip>
          )}
        </Flex>

        <Box position="relative" width="100%" key={item.id}>
          <Image
            src={item?.image?.url}
            alt="sale"
            objectFit="cover"
            onClick={() => {
              onModalOpen();
              setSelectedImage(item);
            }}
            width="100%"
            height={{ base: "174px", md: "320px" }}
            cursor="pointer"
            _hover={{
              filter: "brightness(90%)",
              overflow: "hidden",
            }}
          />
          {item?.sale && (
            <Box
              bg="brand.200"
              position="absolute"
              bottom="1%"
              left="8px"
              padding="10px 15px"
            >
              <Text color="white" fontSize="sm" wordBreak="break-word">
                - {item?.sale}%
              </Text>
            </Box>
          )}
        </Box>
      </Box>

      <Box position="relative" padding="4">
        <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">
          {item?.brand}
        </Text>
        <Text fontSize="xs">{item?.title}</Text>
        <Text
          fontSize="sm"
          fontWeight="bold"
          color={item?.sale ? "brand.200" : "black"}
        >
          {item?.price} €
        </Text>
        {item?.sale && (
          <Text fontSize="xs">
            Original Price: {(item.price + item.sale).toFixed(2)} €
          </Text>
        )}
      </Box>
    </Box>
  );
};
