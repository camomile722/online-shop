import { Box, Image } from "@chakra-ui/react";
import { RectangleBadge } from "../badge/RectangleBadge";
import { ProductProps } from "./ProductItem";
import { ThumbnailList } from "./ThumbnailList";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export interface ProductCardProps {
    product: ProductProps;
    imageWidth?: string | { base: string; md: string };
    imageHeight?: string | { base: string; md: string };
}
function ProductCard({ product, imageWidth, imageHeight }: ProductCardProps) {
    const [currentImage, setCurrentImage] = useState(product?.images[0]?.url);
    const productSale = Math.floor(
        ((product?.originalPrice - product?.price) / product?.originalPrice) *
            100
    );
    const showNextImage = (id: string) => {
        console.log("Next Image", id);

        const nextImage = product?.images.find(image => image._id === id);
        if (nextImage) {
            setCurrentImage(nextImage.url);
        }
    };
    const location = useLocation();
    // Extract the pathname from the location object
    const { pathname } = location;

    // Check if the pathname matches the pattern
    const isProductScreen = pathname.startsWith("/product/");

    return (
        <>
            <Box position="relative" key={product._id}>
                <Link to={`/product/${product._id}`}>
                    <Image
                        src={currentImage}
                        alt={product?.title}
                        objectFit="contain"
                        width={imageWidth || "100%"}
                        height={imageHeight || "100%"}
                        cursor="pointer"
                        _hover={{
                            filter: "brightness(90%)",
                            overflow: "hidden",
                        }}
                        boxSize={
                            isProductScreen
                                ? { base: "250px", md: "250px", xl: "450px" }
                                : { base: "250px", md: "350px", xl: "350px" }
                        }
                    />
                </Link>

                {product?.originalPrice > 0 && (
                    <RectangleBadge top="1%" left="2">
                        - {productSale}%
                    </RectangleBadge>
                )}
                <ThumbnailList
                    images={product?.images}
                    showNextImage={showNextImage}
                />
            </Box>
        </>
    );
}

export default ProductCard;
