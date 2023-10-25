import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Retoure, Transport } from "../../theme/icons";

export const ShippingInfo = () => {
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Box>
                    <Transport boxSize={6} />
                    <Text fontSize="xs" fontWeight="medium">
                        1-5 working days
                    </Text>
                    <Text fontSize="xs" fontWeight="medium">
                        Standart delivery
                    </Text>
                </Box>
                <Text fontWeight="medium" fontSize="sm">
                    Free shipping
                </Text>
            </Flex>
            <Divider mt="4" />
            <Flex justifyContent="space-between" alignItems="flex-end" mt="4">
                <Box>
                    <Retoure boxSize={6} />
                    <Text fontSize="xs" fontWeight="medium">
                        100 day return policy
                    </Text>
                </Box>
                <Text fontSize="sm" fontWeight="medium">
                    Free delivery and free returns
                </Text>
            </Flex>
            <Divider mt="4" />
        </Box>
    );
};
