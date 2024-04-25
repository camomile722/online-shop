import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../components/wrapper/Wrapper";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const ImpressumScreen = () => {
    return (
        <>
            <Helmet>
                <title>Impressum</title>
                <meta name="description" content="Impressum" />
            </Helmet>
            <Wrapper>
                <Box px={{ base: "2", md: "10" }}>
                    <Text as="h1" fontSize="3xl" mb={4}>
                        Impressum
                    </Text>
                    <Text>Angaben gemäß § 5 TMG</Text>
                    <Text>
                        Alexandr Socolov
                        <br /> Sitz der Firma: <br />
                        Bahnhofstraße 9 <br />
                        34393 Grebenstein
                        <br />
                        USt-Id: DE366700047 <br />
                        Geschäftsführer: Alexandr Socolov
                        <br />
                        E-Mail:{" "}
                        <a href="mailto:salex.shop@gmx.de">
                            salex.shop@gmx.de"
                        </a>
                        <br />
                        Telefon: 01722859799
                    </Text>
                    <Box mt="4">
                        <Text as="h2" fontSize="2xl" mb="4">
                            Online-Streitbeilegung
                        </Text>
                        <Text>
                            Die Europäische Kommission stellt{" "}
                            <Text as="span" fontWeight="bold">
                                <Link
                                    target=" _blank"
                                    to="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                                >
                                    hier
                                </Link>{" "}
                            </Text>
                            eine Plattform zur Online-Streitbeilegung bereit,
                            die Verbraucher für die Beilegung einer Streitigkeit
                            nutzen können und auf der weitere Informationen zum
                            Thema Streitschlichtung zu finden sind.
                        </Text>
                    </Box>
                    <Box mt="4">
                        <Text as="h2" fontSize="2xl" mb="4">
                            Außergerichtliche Streitbeilegung
                        </Text>
                        <Text>
                            Wir sind weder verpflichtet noch dazu bereit, im
                            Falle einer Streitigkeit mit einem Verbraucher an
                            einem Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </Text>
                    </Box>
                </Box>
            </Wrapper>
        </>
    );
};
