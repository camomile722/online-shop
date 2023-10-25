import { Alert, AlertIcon, Link, Text } from "@chakra-ui/react";

export interface NotificationProps {
    status: "info" | "warning" | "success" | "error" | "loading";
    text: string;
    children?: React.ReactNode;
}

function Notification({ status, text, children }: NotificationProps) {
    return (
        <Alert status={status} position="absolute" zIndex={2}>
            <AlertIcon />
            <Text>{text}</Text>
            {children}
        </Alert>
    );
}

export default Notification;
