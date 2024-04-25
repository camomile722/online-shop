import React from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    IconButton,
    Icon,
    Flex,
    Link,
} from "@chakra-ui/react";
import { Email, WhatsApp } from "../../theme/icons";

export const ContactPopover = ({ children }: { children: React.ReactNode }) => {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Kontaktieren Sie uns</PopoverHeader>
                <PopoverBody>
                    <Flex gap="6">
                        <Link
                            href="https://wa.me/491722852794"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon boxSize={14} _hover={{ cursor: "pointer" }}>
                                <WhatsApp color="brand.200" />
                            </Icon>
                        </Link>
                        <Link href="mailto:salex.shop@gmx.de">
                            <Icon boxSize={14} _hover={{ cursor: "pointer" }}>
                                <Email color="brand.200" />
                            </Icon>
                        </Link>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};
