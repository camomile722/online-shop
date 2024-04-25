import { Box, List, ListItem, OrderedList, Text } from "@chakra-ui/react";

import Wrapper from "../components/wrapper/Wrapper";
import { Helmet } from "react-helmet";

export const DatenschutzScreen = () => {
    return (
        <>
            <Helmet>
                <title>Datenschutzerklärung</title>
                <meta
                    name="description"
                    content="Datenschutzerklärung für den Showroom SALEx Shop. Hier finden Sie Informationen zur Verarbeitung personenbezogener Daten und zum Datenschutz."
                />
            </Helmet>
            <Wrapper>
                <Box px={{ base: "2", md: "10" }}>
                    <Text as="h1" fontSize="3xl">
                        Datenschutzerklärung
                    </Text>
                    <Text as="h2" fontSize="2xl" mb="2">
                        Name und Kontakt des Verantwortlichen gemäß Artikel 4
                        Abs. 7 DSGVO
                    </Text>
                    <Box mb="4">
                        <Text>Alexandr Socolov</Text>
                        <Text>Bahnhofstraße 9</Text>
                        <Text>34393 Grebenstein</Text>
                        <a href="mailto:salex.shop@gmx.de">salex.shop@gmx.de</a>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Sicherheit und Schutz Ihrer personenbezogenen Daten
                        </Text>
                        <Text>
                            Wir betrachten es als unsere vorrangige Aufgabe, die
                            Vertraulichkeit der von Ihnen bereitgestellten
                            personenbezogenen Daten zu wahren und diese vor
                            unbefugten Zugriffen zu schützen. Deshalb wenden wir
                            äußerste Sorgfalt und modernste Sicherheitsstandards
                            an, um einen maximalen Schutz Ihrer
                            personenbezogenen Daten zu gewährleisten.
                            <br />
                            Als privatrechtliches Unternehmen unterliegen wir
                            den Bestimmungen der europäischen
                            Datenschutzgrundverordnung (DSGVO) und den
                            Regelungen des Bundesdatenschutzgesetzes (BDSG). Wir
                            haben technische und organisatorische Maßnahmen
                            getroffen, die sicherstellen, dass die Vorschriften
                            über den Datenschutz sowohl von uns, als auch von
                            unseren externen Dienstleistern beachtet werden.
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Rechtmäßigkeit der Verarbeitung
                        </Text>
                        <Text>
                            Die Verarbeitung personenbezogener Daten ist nur
                            rechtmäßig, wenn für die Verarbeitung eine
                            Rechtsgrundlage besteht. Rechtsgrundlage für die
                            Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a –
                            f DSGVO insbesondere sein:
                        </Text>
                        <Text>
                            • Die betroffene Person hat ihre Einwilligung zu der
                            Verarbeitung der sie betreffenden personenbezogenen
                            Daten für einen oder mehrere bestimmte Zwecke
                            gegeben;
                        </Text>
                        <Text>
                            • Die Verarbeitung ist für die Erfüllung eines
                            Vertrags, dessen Vertragspartei die betroffene
                            Person ist, oder zur Durchführung vorvertraglicher
                            Maßnahmen erforderlich, die auf Anfrage der
                            betroffenen Person erfolgen;
                        </Text>
                        <Text>
                            • Die Verarbeitung ist zur Erfüllung einer
                            rechtlichen Verpflichtung erforderlich, der der
                            Verantwortliche unterliegt;
                        </Text>
                        <Text>
                            • Die Verarbeitung ist erforderlich, um
                            lebenswichtige Interessen der betroffenen Person
                            oder einer anderen natürlichen Person zu schützen;
                        </Text>
                        <Text>
                            • Die Verarbeitung ist für die Wahrnehmung einer
                            Aufgabe erforderlich, die im öffentlichen Interesse
                            liegt oder in Ausübung öffentlicher Gewalt erfolgt,
                            die dem Verantwortlichen übertragen wurde;
                        </Text>
                        <Text>
                            • Die Verarbeitung ist zur Wahrung der berechtigten
                            Interessen des Verantwortlichen oder eines Dritten
                            erforderlich, sofern nicht die Interessen oder
                            Grundrechte und Grundfreiheiten der betroffenen
                            Person, die den Schutz personenbezogener Daten
                            erfordern, überwiegen, insbesondere dann, wenn es
                            sich bei der betroffenen Person um ein Kind handelt.
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Information über die Erhebung personenbezogener
                            Daten
                        </Text>
                        <Text>
                            Im Folgenden informieren wir über die Erhebung
                            personenbezogener Daten bei Nutzung unserer Website.
                            Bei personenbezogenen Daten handelt es sich um alle
                            Daten, die auf Sie persönlich beziehbar sind, z. B.
                            Name, Adresse, E-Mail-Adressen, Nutzerverhalten.
                        </Text>
                        <Text>
                            Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder
                            über ein Kontaktformular werden die von Ihnen
                            mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr
                            Name und Ihre Telefonnummer) von uns gespeichert, um
                            Ihre Fragen zu beantworten. Die in diesem
                            Zusammenhang anfallenden Daten löschen wir, nachdem
                            die Speicherung nicht mehr erforderlich ist, oder
                            schränken die Verarbeitung ein, falls gesetzliche
                            Aufbewahrungspflichten bestehen.
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Erhebung personenbezogener Daten bei Besuch unserer
                            Website
                        </Text>
                        <Text>
                            Bei der bloß informatorischen Nutzung der Website,
                            also wenn Sie sich nicht registrieren oder uns
                            anderweitig Informationen übermitteln, erheben wir
                            nur die personenbezogenen Daten, die Ihr Browser an
                            unseren Server übermittelt. Wenn Sie unsere Website
                            betrachten möchten, erheben wir die folgenden Daten,
                            die für uns technisch erforderlich sind, um Ihnen
                            unsere Website anzuzeigen und die Stabilität und
                            Sicherheit zu gewährleisten (Rechtsgrundlage ist
                            Art. 6 Abs. 1 S. 1 lit. f DSGVO):
                        </Text>
                        <Text>
                            • IP-Adresse
                            <br />
                            • Datum und Uhrzeit der Anfrage
                            <br />
                            • Zeitzonendifferenz zur Greenwich Mean Time (GMT)
                            <br />
                            • Inhalt der Anforderung (konkrete Seite)
                            <br />
                            • Zugriffsstatus/HTTP-Statuscode
                            <br />
                            • jeweils übertragene Datenmenge
                            <br />
                            • Website, von der die Anforderung kommt
                            <br />
                            • Browser
                            <br />
                            • Betriebssystem und dessen Oberfläche
                            <br />
                            • Sprache und Version der Browsersoftware
                            <br />
                            Die Daten werden gelöscht, sobald sie für die
                            Erreichung des Zweckes ihrer Erhebung nicht mehr
                            erforderlich sind. Im Falle der Erfassung der Daten
                            zur Bereitstellung der Website ist dies der Fall,
                            wenn die jeweilige Sitzung beendet ist.
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Cookies
                        </Text>
                        <Text>
                            Unsere Website verwendet Cookies. Cookies sind
                            kleine Textdateien, die im Internetbrowser bzw. vom
                            Internetbrowser auf dem Computersystem eines Nutzers
                            gespeichert werden. Ruft ein Nutzer eine Website
                            auf, so kann ein Cookie auf dem Betriebssystem des
                            Nutzers gespeichert werden. Dieser Cookie enthält
                            eine charakteristische Zeichenfolge, die eine
                            eindeutige Identifizierung des Browsers beim
                            erneuten Aufrufen der Website ermöglicht.
                            <br />
                            Wir setzen Cookies zu dem Zweck ein, unser Angebot
                            nutzerfreundlicher, effektiver und sicherer zu
                            machen. Des Weiteren ermöglichen Cookies unseren
                            Systemen, Ihren Browser auch nach einem
                            Seitenwechsel zu erkennen und Ihnen Services
                            anzubieten. Einige Funktionen unserer Website können
                            ohne den Einsatz von Cookies nicht angeboten werden.
                            Für diese ist es erforderlich, dass der Browser
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Kontaktaufnahme
                        </Text>
                        <Text>
                            Sie haben die Möglichkeit per E-Mail mit uns in
                            Kontakt zu treten. Wenn Sie mit uns Kontakt
                            aufnehmen, verwenden wir jene personenbezogenen
                            Daten, die Sie uns in diesem Rahmen freiwillig zur
                            Verfügung stellen allein zu dem Zweck, um mit Ihnen
                            in Kontakt zu treten und Ihre Anfrage bearbeiten zu
                            können. Rechtsgrundlage für diese Datenverarbeitung
                            ist Artikel 6 Absatz 1 Buchstabe a), Artikel 6
                            Absatz 1 Buchstabe b), Artikel 6 Absatz 1 Buchstabe
                            c) DSGVO sowie Artikel 6 Absatz 1 Buchstabe f)
                            DSGVO.
                        </Text>
                    </Box>

                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Weitere Funktionen und Angebote unserer Website
                        </Text>
                        <Text>
                            Neben der rein informatorischen Nutzung unserer
                            Website bieten wir verschiedene Leistungen an, die
                            Sie bei Interesse nutzen können. Dazu müssen Sie in
                            der Regel weitere personenbezogene Daten angeben,
                            die wir zur Erbringung der jeweiligen Leistung
                            nutzen und für die die zuvor genannten Grundsätze
                            zur Datenverarbeitung gelten.
                        </Text>
                        <Text>
                            Teilweise bedienen wir uns zur Verarbeitung Ihrer
                            Daten externer Dienstleister. Diese wurden von uns
                            sorgfältig ausgewählt und beauftragt, sind an unsere
                            Weisungen gebunden und werden regelmäßig
                            kontrolliert.
                        </Text>
                        <Text>
                            Soweit unsere Dienstleister oder Partner ihren Sitz
                            in einem Staat außerhalb des Europäischen
                            Wirtschaftsraumes (EWR) haben, informieren wir Sie
                            über die Folgen dieses Umstands in der Beschreibung
                            des Angebotes.
                        </Text>
                    </Box>
                    <Box mb="4">
                        <Text as="h2" fontSize="2xl" mb="2">
                            Kinder
                        </Text>
                        <Text>
                            Unsere Website richtet sich nicht an Kinder und
                            Personen unter 18 Jahren. Personen unter 18 Jahren
                            dürfen ohne Zustimmung der Eltern oder
                            Erziehungsberechtigten keine personenbezogenen Daten
                            an uns übermitteln. Wir fordern keine
                            personenbezogenen Daten von Kindern und Personen
                            unter 18 Jahren an, sammeln diese nicht und geben
                            sie nicht an Dritte weiter.
                        </Text>
                    </Box>
                    <Box>
                        <Text as="h2" fontSize="2xl" mb="2">
                            Ihre Rechte
                        </Text>
                        <OrderedList>
                            <ListItem>
                                {" "}
                                <Text as="h3">Widerruf der Einwilligung</Text>
                                <Text>
                                    Sofern die Verarbeitung der
                                    personenbezogenen Daten auf einer erteilten
                                    Einwilligung beruht, haben Sie jederzeit das
                                    Recht, die Einwilligung zu widerrufen. Durch
                                    den Widerruf der Einwilligung wird die
                                    Rechtmäßigkeit der aufgrund der Einwilligung
                                    bis zum Widerruf erfolgten Verarbeitung
                                    nicht berührt. Für die Ausübung des
                                    Widerrufsrechts können Sie sich jederzeit an
                                    uns wenden.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text as="h3">Recht auf Bestätigung</Text>
                                <Text>
                                    Sie haben das Recht, von dem
                                    Verantwortlichen eine Bestätigung darüber zu
                                    verlangen, ob wir sie betreffende
                                    personenbezogene Daten verarbeiten. Die
                                    Bestätigung können Sie jederzeit unter den
                                    oben genannten Kontaktdaten verlangen.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text as="h3">Auskunftsrecht</Text>
                                <Text>
                                    Sofern personenbezogene Daten verarbeitet
                                    werden, können Sie jederzeit Auskunft über
                                    diese personenbezogenen Daten und über
                                    folgenden Informationen verlangen:
                                </Text>
                                <Text>
                                    • die Verarbeitungszwecke;
                                    <br />
                                    • die Kategorien personenbezogener Daten,
                                    die verarbeitet werden;
                                    <br />
                                    • die Empfänger oder Kategorien von
                                    Empfängern, gegenüber denen die
                                    personenbezogenen Daten offengelegt worden
                                    sind oder noch offengelegt werden,
                                    insbesondere bei Empfängern in Drittländern
                                    oder bei internationalen Organisationen;
                                    <br />
                                    • falls möglich die geplante Dauer, für die
                                    die personenbezogenen Daten gespeichert
                                    werden, oder, falls dies nicht möglich ist,
                                    die Kriterien für die Festlegung dieser
                                    Dauer;
                                    <br />
                                    • das Bestehen eines Rechts auf Berichtigung
                                    oder Löschung der sie betreffenden
                                    personenbezogenen Daten oder auf
                                    Einschränkung der Verarbeitung durch den
                                    Verantwortlichen oder eines
                                    Widerspruchsrechts gegen diese Verarbeitung;
                                    <br />
                                    • das Bestehen eines Beschwerderechts bei
                                    einer Aufsichtsbehörde;
                                    <br />
                                    • wenn die personenbezogenen Daten nicht bei
                                    der betroffenen Person erhoben werden, alle
                                    verfügbaren Informationen über die Herkunft
                                    der Daten;
                                    <br />
                                    • das Bestehen einer automatisierten
                                    Entscheidungsfindung einschließlich
                                    Profiling gemäß Artikel 22 Absätze 1 und 4
                                    DSGVO und – zumindest in diesen Fällen –
                                    aussagekräftige Informationen über die
                                    involvierte Logik sowie die Tragweite und
                                    die angestrebten Auswirkungen einer
                                    derartigen Verarbeitung für die betroffene
                                    Person.
                                    <br />
                                    Werden personenbezogene Daten an ein
                                    Drittland oder an eine internationale
                                    Organisation übermittelt, so haben Sie das
                                    Recht, über die geeigneten Garantien gemäß
                                    Artikel 46 DSGVO im Zusammenhang mit der
                                    Übermittlung unterrichtet zu werden. Wir
                                    stellen eine Kopie der personenbezogenen
                                    Daten
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text as="h3">Recht auf Berichtigung</Text>
                                <Text>
                                    Sie haben das Recht, von uns unverzüglich
                                    die Berichtigung Sie betreffender
                                    unrichtiger personenbezogener Daten zu
                                    verlangen. Unter Berücksichtigung der Zwecke
                                    haben Sie das Recht, die Vervollständigung
                                    unvollständiger personenbezogener Daten –
                                    auch mittels einer ergänzenden Erklärung –
                                    zu verlangen.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text as="h3">Recht auf Löschung</Text>
                                <Text>
                                    Sie haben das Recht, von dem
                                    Verantwortlichen zu verlangen, dass Sie
                                    betreffende personenbezogene Daten
                                    unverzüglich gelöscht werden, und wir sind
                                    verpflichtet, personenbezogene Daten
                                    unverzüglich zu löschen, sofern einer der
                                    folgenden Gründe zutrifft:
                                </Text>
                            </ListItem>

                            <OrderedList>
                                <ListItem>
                                    <Text>
                                        Die personenbezogenen Daten sind für die
                                        Zwecke, für die sie erhoben oder auf
                                        sonstige Weise verarbeitet wurden, nicht
                                        mehr notwendig.
                                    </Text>
                                </ListItem>
                                <Text>
                                    Sie widerrufen Ihre Einwilligung, auf die
                                    sich die Verarbeitung gemäß Artikel 6 Absatz
                                    1 Buchstabe a oder Artikel 9 Absatz 2
                                    Buchstabe a DSGVO stützte, und es fehlt an
                                    einer anderweitigen Rechtsgrundlage für die
                                    Verarbeitung.
                                </Text>
                                <Text>
                                    Sie legen gemäß Artikel 21 Absatz 1 DSGVO
                                    Widerspruch gegen die Verarbeitung ein, und
                                    es liegen keine vorrangigen berechtigten
                                    Gründe für die Verarbeitung vor, oder Sie
                                    legen gemäß Artikel 21 Absatz 2 DSGVO
                                    Widerspruch gegen die Verarbeitung ein.
                                </Text>
                                <Text>
                                    Die personenbezogenen Daten wurden
                                    unrechtmäßig verarbeitet.
                                </Text>
                                <Text>
                                    Die Löschung der personenbezogenen Daten ist
                                    zur Erfüllung einer rechtlichen
                                    Verpflichtung nach dem Unionsrecht oder dem
                                    Recht der Mitgliedstaaten erforderlich, dem
                                    der Verantwortliche unterliegt.
                                </Text>
                                <Text>
                                    Die personenbezogenen Daten wurden in Bezug
                                    auf angebotene Dienste der
                                    Informationsgesellschaft gemäß Artikel 8
                                    Absatz 1 DSGVO erhoben.
                                </Text>
                                <ListItem>
                                    <Text as="h3">
                                        Recht auf Einschränkung der Verarbeitung
                                    </Text>

                                    <Text>
                                        Sie haben das Recht, von uns die
                                        Einschränkung der Verarbeitung zu
                                        verlangen, wenn eine der folgenden
                                        Voraussetzungen gegeben ist:
                                    </Text>
                                    <Text>
                                        • die Richtigkeit der personenbezogenen
                                        Daten von Ihnen bestritten wird, und
                                        zwar für eine Dauer, die es dem
                                        Verantwortlichen ermöglicht, die
                                        Richtigkeit der personenbezogenen Daten
                                        zu überprüfen;
                                        <br />
                                        • die Verarbeitung unrechtmäßig ist und
                                        Sie die Löschung der personenbezogenen
                                        Daten ablehnen und stattdessen die
                                        Einschränkung der Nutzung der
                                        personenbezogenen Daten verlangen;
                                        <br />
                                        • der Verantwortliche die
                                        personenbezogenen Daten für die Zwecke
                                        der Verarbeitung nicht länger benötigt,
                                        Sie diese jedoch zur Geltendmachung,
                                        Ausübung oder Verteidigung von
                                        Rechtsansprüchen benötigen, oder
                                        <br />• wenn Sie Widerspruch gegen die
                                        Verarbeitung gemäß Artikel 21 Absatz 1
                                        DSGVO eingelegt haben und noch nicht
                                        feststeht, ob die berechtigten Gründe
                                        des Verantwortlichen gegenüber Ihren
                                        Gründen überwiegen.
                                    </Text>
                                    <Text>
                                        Wurde die Verarbeitung gemäß den oben
                                        genannten Voraussetzungen eingeschränkt,
                                        so werden diese personenbezogenen Daten
                                        – von ihrer Speicherung abgesehen – nur
                                        mit Einwilligung der betroffenen Person
                                        oder zur Geltendmachung, Ausübung oder
                                        Verteidigung von Rechtsansprüchen oder
                                        zum Schutz der Rechte einer anderen
                                        natürlichen oder juristischen Person
                                        oder aus Gründen eines wichtigen
                                        öffentlichen Interesses der Union oder
                                        eines Mitgliedstaats verarbeitet.
                                        <br />
                                        Um das Recht auf Einschränkung der
                                        Verarbeitung geltend zu machen, kann
                                        sich die betroffene Person jederzeit an
                                        uns unter den oben angegebenen
                                        Kontaktdaten wenden.
                                    </Text>
                                </ListItem>
                            </OrderedList>
                            <ListItem>
                                <Text as="h3">
                                    Recht auf Einschränkung der Verarbeitung
                                </Text>

                                <Text>
                                    Sie haben das Recht, von uns die
                                    Einschränkung der Verarbeitung zu verlangen,
                                    wenn eine der folgenden Voraussetzungen
                                    gegeben ist:
                                </Text>
                                <Text>
                                    • die Richtigkeit der personenbezogenen
                                    Daten von Ihnen bestritten wird, und zwar
                                    für eine Dauer, die es dem Verantwortlichen
                                    ermöglicht, die Richtigkeit der
                                    personenbezogenen Daten zu überprüfen;
                                    <br />
                                    • die Verarbeitung unrechtmäßig ist und Sie
                                    die Löschung der personenbezogenen Daten
                                    ablehnen und stattdessen die Einschränkung
                                    der Nutzung der personenbezogenen Daten
                                    verlangen;
                                    <br />
                                    • der Verantwortliche die personenbezogenen
                                    Daten für die Zwecke der Verarbeitung nicht
                                    länger benötigt, Sie diese jedoch zur
                                    Geltendmachung, Ausübung oder Verteidigung
                                    von Rechtsansprüchen benötigen, oder
                                    <br />• wenn Sie Widerspruch gegen die
                                    Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO
                                    eingelegt haben und noch nicht feststeht, ob
                                    die berechtigten Gründe des Verantwortlichen
                                    gegenüber Ihren Gründen überwiegen.
                                </Text>
                                <Text>
                                    Wurde die Verarbeitung gemäß den oben
                                    genannten Voraussetzungen eingeschränkt, so
                                    werden diese personenbezogenen Daten – von
                                    ihrer Speicherung abgesehen – nur mit
                                    Einwilligung der betroffenen Person oder zur
                                    Geltendmachung, Ausübung oder Verteidigung
                                    von Rechtsansprüchen oder zum Schutz der
                                    Rechte einer anderen natürlichen oder
                                    juristischen Person oder aus Gründen eines
                                    wichtigen öffentlichen Interesses der Union
                                    oder eines Mitgliedstaats verarbeitet.
                                    <br />
                                    Um das Recht auf Einschränkung der
                                    Verarbeitung geltend zu machen, kann sich
                                    die betroffene Person jederzeit an uns unter
                                    den oben angegebenen Kontaktdaten wenden.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text as="h3">
                                    Recht auf Datenübertragbarkeit
                                </Text>
                            </ListItem>
                            <Text>
                                Sie haben das Recht, die Sie betreffenden
                                personenbezogenen Daten, die Sie uns
                                bereitgestellt haben, in einem strukturierten,
                                gängigen und maschinenlesbaren Format zu
                                erhalten, und Sie haben das Recht, diese Daten
                                einem anderen Verantwortlichen ohne Behinderung
                                durch den Verantwortlichen, dem die
                                personenbezogenen Daten bereitgestellt wurden,
                                zu übermitteln, sofern:
                            </Text>
                            <Text>
                                • die Verarbeitung auf einer Einwilligung gemäß
                                Artikel 6 Absatz 1 Buchstabe a DSGVO oder
                                Artikel 9 Absatz 2 Buchstabe a DSGVO oder auf
                                einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe
                                b DSGVO beruht und
                                <br />
                                • die Verarbeitung mithilfe automatisierter
                                Verfahren erfolgt.
                                <br />
                                Bei der Ausübung des Rechts auf
                                Datenübertragbarkeit haben Sie das Recht, zu
                                erwirken, dass die personenbezogenen Daten
                                direkt von einem Verantwortlichen zu einem
                                anderen Verantwortlichen übermittelt werden,
                                soweit dies technisch machbar ist.
                                <br />
                                Das Recht auf Datenübertragbarkeit gilt nicht
                                für eine Verarbeitung personenbezogener Daten,
                                die für die Wahrnehmung einer Aufgabe
                                erforderlich ist, die im öffentlichen Interesse
                                liegt oder in Ausübung öffentlicher Gewalt
                                erfolgt, die dem Verantwortlichen übertragen
                                wurde.
                            </Text>
                            <ListItem>
                                <Text>Widerspruchsrecht</Text>

                                <Text>
                                    Sie haben das Recht, aus Gründen, die sich
                                    aus Ihrer besonderen Situation ergeben,
                                    jederzeit gegen die Verarbeitung Sie
                                    betreffender personenbezogener Daten, die
                                    aufgrund von Artikel 6 Absatz 1 Buchstaben e
                                    oder f DSGVO erfolgt, Widerspruch
                                    einzulegen; dies gilt auch für ein auf diese
                                    Bestimmungen gestütztes Profiling. Der
                                    Verantwortliche verarbeitet die
                                    personenbezogenen Daten nicht mehr, es sei
                                    denn, er kann zwingende schutzwürdige Gründe
                                    für die Verarbeitung nachweisen, die die
                                    Interessen, Rechte und Freiheiten der
                                    betroffenen Person überwiegen, oder die
                                    Verarbeitung dient der Geltendmachung,
                                    Ausübung oder Verteidigung von
                                    Rechtsansprüchen.
                                </Text>
                                <Text>
                                    Werden personenbezogene Daten verarbeitet,
                                    um Direktwerbung zu betreiben, so haben SIe
                                    das Recht, jederzeit Widerspruch gegen die
                                    Verarbeitung Sie betreffender
                                    personenbezogener Daten zum Zwecke
                                    derartiger Werbung einzulegen; dies gilt
                                    auch für das Profiling, soweit es mit
                                    solcher Direktwerbung in Verbindung steht.
                                    Widersprechen Sie der Verarbeitung für
                                    Zwecke der Direktwerbung, so werden die
                                    personenbezogenen Daten nicht mehr für diese
                                    Zwecke verarbeitet.
                                    <br />
                                    Im Zusammenhang mit der Nutzung von Diensten
                                    der Informationsgesellschaft könne Sie
                                    ungeachtet der Richtlinie 2002/58/EG Ihr
                                    Widerspruchsrecht mittels automatisierter
                                    Verfahren ausüben, bei denen technische
                                    Spezifikationen verwendet werden.
                                    <br />
                                    Sie haben das Recht, aus Gründen, die sich
                                    aus Ihrer besonderen Situation ergeben,
                                    gegen die Sie betreffende Verarbeitung Sie
                                    betreffender personenbezogener Daten, die zu
                                    wissenschaftlichen oder historischen
                                    Forschungszwecken oder zu statistischen
                                    Zwecken gemäß Artikel 89 Absatz 1 erfolgt,
                                    Widerspruch einzulegen, es sei denn, die
                                    Verarbeitung ist zur Erfüllung einer im
                                    öffentlichen Interesse liegenden Aufgabe
                                    erforderlich.
                                    <br />
                                    Das Widerspruchsrecht können Sie jederzeit
                                    ausüben, indem Sie sich an den jeweiligen
                                    Verantwortlichen wenden.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    Automatisierte Entscheidung im Einzelfall
                                </Text>

                                <Text>
                                    Sie haben das Recht, nicht einer
                                    ausschließlich auf einer automatisierten
                                    Verarbeitung – einschließlich Profiling –
                                    beruhenden Entscheidung unterworfen zu
                                    werden, die Ihnen gegenüber rechtliche
                                    Wirkung entfaltet oder Sie in ähnlicher
                                    Weise erheblich beeinträchtigt. Dies gilt
                                    nicht, wenn die Entscheidung:
                                </Text>

                                <Text>
                                    • für den Abschluss oder die Erfüllung eines
                                    Vertrags zwischen Ihnen und dem
                                    Verantwortlichen erforderlich ist,
                                    <br />
                                    • aufgrund von Rechtsvorschriften der Union
                                    oder der Mitgliedstaaten, denen der
                                    Verantwortliche unterliegt, zulässig ist und
                                    diese Rechtsvorschriften angemessene
                                    Maßnahmen zur Wahrung der Rechte und
                                    Freiheiten sowie der berechtigten Interessen
                                    der betroffenen Person enthalten oder
                                    <br />• mit ausdrücklicher Einwilligung der
                                    betroffenen Person erfolgt.
                                </Text>
                                <Text>
                                    Der Verantwortliche trifft angemessene
                                    Maßnahmen, um die Rechte und Freiheiten
                                    sowie die berechtigten Interessen der
                                    betroffenen Person zu wahren, wozu
                                    mindestens das Recht auf Erwirkung des
                                    Eingreifens einer Person seitens des
                                    Verantwortlichen, auf Darlegung des eigenen
                                    Standpunkts und auf Anfechtung der
                                    Entscheidung gehört.
                                    <br />
                                    Dieses Recht kann die betroffene Person
                                    jederzeit ausüben, indem sie sich an den
                                    jeweiligen Verantwortlichen wendet.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    Recht auf Beschwerde bei einer
                                    Aufsichtsbehörde
                                </Text>

                                <Text>
                                    Sie haben das Recht auf Beschwerde bei einer
                                    Aufsichtsbehörde, insbesondere in dem
                                    Mitgliedstaat ihres Aufenthaltsorts, ihres
                                    Arbeitsplatzes oder des Orts des
                                    mutmaßlichen Verstoßes, wenn Sie der Ansicht
                                    sind, dass die Verarbeitung der Sie
                                    betreffenden personenbezogenen Daten gegen
                                    die DSGVO verstößt.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    Recht auf wirksamen gerichtlichen
                                    Rechtsbehelf
                                </Text>

                                <Text>
                                    Sie haben unbeschadet eines verfügbaren
                                    verwaltungsrechtlichen oder
                                    außergerichtlichen Rechtsbehelfs
                                    einschließlich des Rechts auf Beschwerde bei
                                    einer Aufsichtsbehörde gemäß Artikel 77
                                    DSGVO das Recht auf einen wirksamen
                                    gerichtlichen Rechtsbehelf, wenn sie der
                                    Ansicht ist, dass Ihre, aufgrund dieser
                                    Verordnung zustehenden Rechte, infolge einer
                                    nicht im Einklang mit dieser Verordnung
                                    stehenden Verarbeitung Ihrer
                                    personenbezogenen Daten verletzt wurden.
                                </Text>
                            </ListItem>
                        </OrderedList>
                    </Box>
                </Box>
            </Wrapper>
        </>
    );
};
