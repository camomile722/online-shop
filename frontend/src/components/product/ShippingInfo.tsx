import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Retoure, Transport } from "../../theme/icons";

export const ShippingInfo = () => {
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Box>
                    <Transport boxSize={6} />
                    {/* <Text fontSize="xs" fontWeight="medium">
                        1-5 working days
                    </Text> 
                     <Text fontSize="xs" fontWeight="medium">
                        Standart delivery
                    </Text>
                    */}
                    <Text fontSize="xs" fontWeight="medium">
                        Selbstabholung im Landkreis Kassel
                    </Text>

                    <Text fontSize="xs" fontWeight="medium">
                        Grebenstein, Hessen
                    </Text>
                </Box>
                {/* <Text fontWeight="medium" fontSize="sm">
                    Free shipping
                </Text> */}
                <Text fontWeight="medium" fontSize="sm">
                    Nur Abholung
                </Text>
            </Flex>
            <Divider mt="4" />
            <Flex justifyContent="space-between" alignItems="flex-end" mt="4">
                <Box>
                    <Retoure boxSize={6} />
                    <Text fontSize="xs" fontWeight="medium">
                        Keine Rückgabe
                    </Text>
                </Box>
                <Text fontSize="sm" fontWeight="medium">
                    Keine Garantie
                </Text>
            </Flex>
            <Divider mt="4" />
        </Box>
    );
};
