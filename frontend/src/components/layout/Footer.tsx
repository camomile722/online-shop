import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import {
    Facebook,
    Instagram,
    Pinterest,
    Tiktok,
    Twitter,
    Youtube,
} from "../../theme/icons";
import Wrapper from "../wrapper/Wrapper";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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
                            <Text
                                as="h4"
                                mb={4}
                                fontSize="xs"
                                textTransform="uppercase"
                            >
                                Kundenservice
                            </Text>

                            <UnorderedList
                                styleType="none"
                                fontSize="xs"
                                display="flex"
                                flexDirection="column"
                                gap={3}
                                m="0"
                            >
                                <ListItem>
                                    <Link to="/contact">Hilfe & Kontakt</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/datenschutz">Datenschutz</Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/impressum">Impressum</Link>
                                </ListItem>
                                {/* <ListItem>Partner program</ListItem> */}
                                {/* <ListItem>Delivery area</ListItem> */}
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Text
                                as="h4"
                                mb={4}
                                fontSize="xs"
                                textTransform="uppercase"
                            >
                                So kaufen Sie bei uns ein
                            </Text>

                            <UnorderedList
                                styleType="none"
                                fontSize="xs"
                                display="flex"
                                flexDirection="column"
                                gap={3}
                                m="0"
                            >
                                {/* <ListItem>Track Order</ListItem>
                                <ListItem>Returns</ListItem> */}
                                <ListItem>
                                    <Link to="/shopping-info">
                                        Shopping Info
                                    </Link>
                                </ListItem>
                                {/* <ListItem>
                                    <Link to="/datenschutz">Datenschutz</Link>
                                </ListItem> */}
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Flex flexDir="column" alignItems="flex-start" gap={3}>
                        <Box>
                            <Logo />
                        </Box>
                        <Flex gap={4}>
                            <Link
                                to="https://www.facebook.com/sale.mobel.sale"
                                target="_blank"
                            >
                                <Facebook boxSize="20px" />
                            </Link>

                            {/* <Instagram boxSize="20px" /> */}

                            <Link
                                to="https://www.tiktok.com/@salexshop.de?_t=8lnkDUp2BQ8&_r=1"
                                target="_blank"
                            >
                                <Tiktok boxSize="20px" />
                            </Link>
                            {/* <Youtube boxSize="20px" /> */}
                        </Flex>{" "}
                    </Flex>
                </Flex>
                <Flex mt={6}>
                    {/* <Text fontSize="xs">
                        {" "}
                        Free delivery for orders above 29.90 €, else shipping
                        fees of 3.90 € apply <br />
                        Lowest total price of the last 30 days before the price
                        reduction
                        <br />
                    </Text> */}
                    <Text fontSize="sm" fontWeight="semibold">
                        {" "}
                        NUR SELBSTABHOLUNG keine Lieferung <br />
                        Abholung im Landkreis Kassel, Grebenstein
                        <br />
                    </Text>
                </Flex>
            </Wrapper>
        </Box>
    );
};
