import { CustomTooltip } from "../tooltip/CustomTooltip";
import { IconButton } from "@chakra-ui/react";
import { Like, Liked } from "../../theme/icons";
export interface WishListButtonProps {
    isLiked: boolean;
    handleAddToWishlist: () => void;
    boxSize?: string;
    padding?: string;
}
const WishListButton = ({
    isLiked,
    handleAddToWishlist,
    boxSize,
    padding,
}: WishListButtonProps) => {
    return (
        <CustomTooltip
            label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
            <IconButton
                aria-label="Add to wishlist"
                icon={
                    isLiked ? (
                        <Liked color="brand.200" boxSize={boxSize ?? 5} />
                    ) : (
                        <Like boxSize={boxSize ?? 5} color="brand.200" />
                    )
                }
                opacity="0.7"
                _hover={{ opacity: "1" }}
                onClick={handleAddToWishlist}
                p={padding ?? 0}
                bg="gray.100"
                color="white"
            />
        </CustomTooltip>
    );
};

export default WishListButton;
