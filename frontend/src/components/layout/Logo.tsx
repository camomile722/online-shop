import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export const Logo = () => {
    return (
        <>
            {/* <Text fontSize="4xl" fontWeight="bold" textTransform="uppercase">
                <Text as="span" color="brand.200">
                    sale
                </Text>
                x
            </Text>
            <Text
                fontSize="sm"
                color="gray.500"
                lineHeight="0"
                fontWeight="extrabold"
                textTransform="uppercase"
            >
                shop
            </Text> */}
            <Image src="/images/salex-shop-logo.png" alt="logo" width="150px" />
        </>
    );
};
