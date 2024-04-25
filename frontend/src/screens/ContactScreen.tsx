import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Wrapper from "../components/wrapper/Wrapper";
import { ContactPopover } from "../components/contact/ContactPopover";
import { useState } from "react";
import { Helmet } from "react-helmet";

export const ContactScreen = () => {
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    return (
        <>
            <Helmet>
                <title>
                    Möbel kaufen | Spare bis 70% auf Möbel | SALEx Shop{" "}
                </title>
                <meta
                    name="description"
                    content="Entdecke eine riesige Auswahl an hochwertigen Möbeln zu unschlagbaren Preisen! Kaufe Möbel online und spare bis zu 70% auf Sofas, Betten,Schränke, Tische und mehr. Gestalte dein Zuhause stilvoll und günstig. Jetzt einkaufen!"
                />
            </Helmet>
            <Wrapper>
                <Flex>
                    <Box maxW={{ base: "100%", md: "50%" }}>
                        <Text as="h1" fontSize="3xl" mb={4}>
                            Entdecken Sie{" "}
                            <strong>
                                hochwertige Möbel zu unschlagbaren Preisen!
                            </strong>
                        </Text>
                        <Text mb="6">
                            Vereinbaren Sie noch heute einen Termin und sichern
                            Sie sich Ihre{" "}
                            <strong>Traummöbel zu Schnäppchenpreisen.</strong>
                            <br />
                            <br />
                            Bei uns finden Sie eine breite Auswahl an{" "}
                            <strong>Restposten-Möbeln</strong> für jeden
                            Geschmack und jeden Raum.
                            <br />
                            <br />
                            Kontaktieren Sie uns jetzt und lassen Sie sich von
                            unseren Angeboten begeistern
                        </Text>
                        <ContactPopover>
                            <Button
                                borderRadius="none"
                                width="90%"
                                py={6}
                                bg="black"
                                color="white"
                                textTransform="uppercase"
                                onClick={() =>
                                    setIsAppointmentOpen(!isAppointmentOpen)
                                }
                            >
                                Termin vereinbaren
                            </Button>
                        </ContactPopover>
                    </Box>
                </Flex>
            </Wrapper>
        </>
    );
};
