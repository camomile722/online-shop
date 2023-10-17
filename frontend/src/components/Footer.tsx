import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
    Youtube,
} from "../theme/icons";
import Wrapper from "./Wrapper";

export const Footer = () => {
    return (
        <Box bg="gray.200" as="footer">
            <Wrapper>
                <Flex
                    justifyContent="space-between"
                    alignItems="flex-start"
                    flexWrap="wrap"
                >
                    <Box>
                        <Box>
                            <Text as="h4" mb={4} fontSize="xs">
                                CUSTOMER CARE
                            </Text>

                            <UnorderedList
                                styleType="none"
                                fontSize="xs"
                                display="flex"
                                flexDirection="column"
                                gap={3}
                                m="0"
                            >
                                <ListItem>Help & Contact</ListItem>
                                <ListItem>Partner program</ListItem>
                                <ListItem>Delivery area</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Text as="h4" mb={4} fontSize="xs">
                                SECURE SHOPPING
                            </Text>

                            <UnorderedList
                                styleType="none"
                                fontSize="xs"
                                display="flex"
                                flexDirection="column"
                                gap={3}
                                m="0"
                            >
                                <ListItem>Track Order</ListItem>
                                <ListItem>Returns</ListItem>
                                <ListItem>Shipping Info</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Flex flexDir="column" alignItems="flex-start" gap={3}>
                        <Box>
                            <Text fontSize="4xl" fontWeight="bold">
                                SH
                                <Text as="span" color="brand.200">
                                    OO
                                </Text>
                                P
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                lineHeight="0"
                                fontWeight="extrabold"
                            >
                                NOW!
                            </Text>
                        </Box>
                        <Flex gap={4}>
                            <Facebook boxSize="20px" />
                            <Instagram boxSize="20px" />
                            <Twitter boxSize="20px" />
                            <Youtube boxSize="20px" />
                            <Pinterest boxSize="20px" />
                        </Flex>{" "}
                    </Flex>
                </Flex>
                <Flex mt={6}>
                    <Text fontSize="xs">
                        {" "}
                        Free delivery for orders above 29.95 €, else shipping
                        fees of 3.90 € apply <br />
                        Lowest total price of the last 30 days before the price
                        reduction
                        <br />
                    </Text>
                </Flex>
            </Wrapper>
        </Box>
    );
};
