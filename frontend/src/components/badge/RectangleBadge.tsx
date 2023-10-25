import { Box, Text } from "@chakra-ui/react";
export interface RectangleBadgeProps {
    children?: React.ReactNode;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}
export const RectangleBadge = ({
    children,
    top,
    left,
    right,
    bottom,
}: RectangleBadgeProps) => {
    return (
        <Box
            bg="brand.200"
            position="absolute"
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            padding="10px 15px"
            fontWeight="extrabold"
        >
            <Text color="white" fontSize="sm" wordBreak="break-word">
                {children}
            </Text>
        </Box>
    );
};
