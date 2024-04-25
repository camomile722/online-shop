import React from "react";
import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface AppointmentFormProps {
    onSubmit: (
        date: string,
        time: string,
        name: string,
        email: string,
        phone: string
    ) => void;
}
const handleButtonClick = () => {
    // Programmatically submit the form when the button is clicked
    document
        .getElementById("appointment-form")
        ?.dispatchEvent(new Event("submit", { cancelable: true }));
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "08:00",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name ist erforderlich"),
        email: Yup.string()
            .email("Email ist ungültig")
            .required("Email ist erforderlich"),
        phone: Yup.string(),
        date: Yup.date().required("Datum ist erforderlich"),
        time: Yup.string().required("Zeit ist erforderlich"),
    });

    const handleSubmit = (
        values: typeof initialValues,
        actions: FormikHelpers<typeof initialValues>
    ) => {
        onSubmit(
            values.date,
            values.time,
            values.name,
            values.email,
            values.phone
        );
        actions.setSubmitting(false);
    };

    return (
        <Box>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Text fontSize="lg" mb="2">
                            Termin vereinbaren
                        </Text>
                        <Field
                            as={Input}
                            type="text"
                            name="name"
                            placeholder="* Name"
                        />
                        <Text fontSize="xs" color="red" mb={2}>
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="error"
                            />
                        </Text>
                        <Field
                            as={Input}
                            type="text"
                            name="email"
                            placeholder="* Email"
                        />
                        <Text fontSize="xs" color="red" mb={2}>
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="error"
                            />
                        </Text>
                        <Field
                            as={Input}
                            type="text"
                            name="phone"
                            placeholder="Telefonnummer"
                            mb={2}
                        />
                        <Field as={Select} name="time">
                            <option value="">Zeit wählen</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>

                            {/* Add other validTimes options here */}
                        </Field>
                        <Text fontSize="xs" color="red" mb={2}>
                            <ErrorMessage
                                name="time"
                                component="div"
                                className="error"
                            />
                        </Text>
                        <Field as={Input} type="date" name="date" />
                        <Text fontSize="xs" color="red" mb={2}>
                            <ErrorMessage
                                name="date"
                                component="div"
                                className="error"
                            />
                        </Text>
                        <Button
                            type="submit"
                            w="100%"
                            mt="2"
                            isLoading={isSubmitting}
                        >
                            Termin absenden
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default AppointmentForm;
