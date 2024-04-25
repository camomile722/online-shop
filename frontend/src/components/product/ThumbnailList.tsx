import { Flex, Image } from "@chakra-ui/react";
import React from "react";

interface ThumbnailListProps {
    showNextImage: (id: string) => void;
    images: {
        _id: string;
        url: string;
    }[];
}

export const ThumbnailList = ({
    images,
    showNextImage,
}: ThumbnailListProps) => {
    return (
        <Flex gap="2" mt="2" overflowX="auto">
            {images.map((thumbnail, id) => (
                <Image
                    key={id}
                    src={thumbnail.url}
                    alt={`Thumbnail ${id}`}
                    boxSize="50px"
                    objectFit="contain"
                    mb="2"
                    onClick={() => showNextImage(thumbnail._id)}
                    cursor="pointer"
                />
            ))}
        </Flex>
    );
};
