import { Box, Text } from "@chakra-ui/react";
import { EmptyStar, FullStar, HalfStar } from "../theme/icons";

export interface RatingProps {
    value: number;
    numReviews?: number;
}

export const Rating = ({ value, numReviews }: RatingProps) => {
    return (
        <Box>
            <Box as="span">
                {value >= 1 ? (
                    <FullStar color="brand.200" />
                ) : value >= 0.5 ? (
                    <HalfStar color="brand.200" />
                ) : (
                    <EmptyStar color="brand.200" />
                )}
            </Box>
            <Box as="span">
                {value >= 2 ? (
                    <FullStar color="brand.200" />
                ) : value >= 1.5 ? (
                    <HalfStar color="brand.200" />
                ) : (
                    <EmptyStar color="brand.200" />
                )}
            </Box>
            <Box as="span">
                {value >= 3 ? (
                    <FullStar color="brand.200" />
                ) : value >= 2.5 ? (
                    <HalfStar color="brand.200" />
                ) : (
                    <EmptyStar color="brand.200" />
                )}
            </Box>
            <Box as="span">
                {value >= 4 ? (
                    <FullStar color="brand.200" />
                ) : value >= 3.5 ? (
                    <HalfStar color="brand.200" />
                ) : (
                    <EmptyStar color="brand.200" />
                )}
            </Box>
            <Box as="span">
                {value >= 5 ? (
                    <FullStar color="brand.200" />
                ) : value >= 4.5 ? (
                    <HalfStar color="brand.200" />
                ) : (
                    <EmptyStar color="brand.200" />
                )}
            </Box>
            {numReviews && (
                <Text as="span" ml="2" color="gray.500" fontSize="sm">
                    {numReviews} reviews
                </Text>
            )}
        </Box>
    );
};
