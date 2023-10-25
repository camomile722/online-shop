import { Box, Text } from "@chakra-ui/react";
export interface RoundBadgeProps {
    children: React.ReactNode;
}

function RoundBadge({ children }: RoundBadgeProps) {
    return (
        <Box
            bg="brand.200"
            borderRadius="50%"
            position="absolute"
            bottom="3"
            left="3"
            w="1rem"
            h="1rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Text fontSize="xs" color="white">
                {children}
            </Text>
        </Box>
    );
}

export default RoundBadge;
