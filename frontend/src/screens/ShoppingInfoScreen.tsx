import React, { useState } from "react";
import { Box, Button, ListItem, OrderedList, Text } from "@chakra-ui/react";
import Wrapper from "../components/wrapper/Wrapper";
import { ContactPopover } from "../components/contact/ContactPopover";
import { Helmet } from "react-helmet";

export const ShoppingInfoScreen = () => {
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    return (
        <>
            <Helmet>
                <title>Möbel Outlet Angebote | SALEx Shop </title>
                <meta
                    name="description"
                    content="Entdecken Sie erstklassige Möbel Outlet Angebote im SALEx Shop. Profitieren Sie von exklusiven Rabatten auf hochwertige Möbelstücke für Ihr Zuhause. Verpassen Sie nicht unsere unschlagbaren Angebote und bringen Sie frischen Wind in Ihre Einrichtung"
                />
            </Helmet>
            <Wrapper>
                <Box>
                    <Text as="h1" fontSize="3xl" mb={4}>
                        So kaufen Sie bei uns ein
                    </Text>
                    <Text as="p" fontSize="lg" mb="4">
                        Wir bieten <strong>Restposten</strong> an, die in
                        verschiedenen Zuständen erhältlich sind. In den meisten
                        Fällen handelt es sich um{" "}
                        <strong> neue Artikel in der Originalverpackung</strong>
                        . Gelegentlich können jedoch auch{" "}
                        <strong>
                            leicht beschädigte oder gebrauchte Artikel
                        </strong>{" "}
                        vorhanden sein. Unser Salex Shop Team prüft alle Artikel
                        gründlich, und alle Mängel werden in den Fotos
                        dargestellt, falls sie vorhanden sind.
                    </Text>
                    <OrderedList>
                        <ListItem>
                            <Text as="h2" fontSize="xl" mb="4">
                                Vereinbaren Sie einen Termin am Standort
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text as="h2" fontSize="xl" mb="4">
                                Prüfen Sie die gewünschten Artikel vor Ort
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text as="h2" fontSize="xl" mb="4">
                                Nehmen Sie die Artikel sofort mit
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text as="h2" fontSize="xl" mb="4">
                                Bezahlen Sie bequem vor Ort -{" "}
                                <strong>Barzahlung und Paypal</strong> möglich
                            </Text>
                        </ListItem>
                    </OrderedList>
                    <ContactPopover>
                        <Button
                            borderRadius="none"
                            width={{ base: "100%", md: "40%" }}
                            py={6}
                            bg="black"
                            color="white"
                            textTransform="uppercase"
                            onClick={() =>
                                setIsAppointmentOpen(!isAppointmentOpen)
                            }
                        >
                            Termin vereinbaren!
                        </Button>
                    </ContactPopover>
                    <Text as="p" fontSize="lg" my="4" fontWeight="semibold">
                        Bitte beachten Sie, dass es sich bei unserem Verkauf um
                        einen Lagerverkauf handelt und kein Laden vorhanden ist!
                        <br />
                        Wir bieten ausschließlich Selbstabholung an, keine
                        Lieferung. <br />
                        Die Abholung erfolgt im Landkreis Kassel, Grebenstein.
                    </Text>
                </Box>
            </Wrapper>
        </>
    );
};
