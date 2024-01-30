import { useState } from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Box, Button, Modal, Snackbar, TextField, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { EMAILJS_API_KEY_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "utils/constants";

import { styles } from "./stylesModalEnterYourContact";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
type Inputs = {
    first_name: string
    last_name: string
    phone_number: string
    email: string
    business_name: string
}
const initNotificationsValues = {
    isLoading: false,
    isSuccess: false,
    isError: false
}

export const ModalEnterYourContact = ({ isOpen, onClose }: Props) => {
    const [isSendEmail, setIsSendEmail] = useState(initNotificationsValues)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            setIsSendEmail({
                isLoading: true,
                isSuccess: false,
                isError: false
            })
            const sendData = {
                service_id: EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id: EMAILJS_API_KEY_ID,
                template_params: {
                    'to_name': 'Eatsy Orders',
                    'from_name': `${data.first_name} ${data.last_name}`,
                    'message': `
                        Hi I want to know more about Eatsy Orders
                        This is my information:
                        Phone Number: ${data.phone_number}
                        Email: ${data.email}
                        Business Name : ${data.business_name}
                    `,
                }
            };
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', sendData)
            setIsSendEmail({
                isLoading: false,
                isSuccess: true,
                isError: false
            })
            onClose()
        } catch (error) {
            onClose()
            setIsSendEmail({
                isLoading: false,
                isSuccess: false,
                isError: true
            })
        }
    }
    return (
        <>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={styles.main} >
                    <Typography variant="h6" component="h3">
                        Enter Your
                    </Typography>
                    <Typography variant="h5" color='primary' >
                        Contact Data
                    </Typography>
                    <Box sx={styles.namesInputsSection}>
                        <TextField
                            label='First name'
                            placeholder="First name"
                            fullWidth
                            {...register("first_name", {
                                maxLength: 200,
                                minLength: 2
                            })}
                            helperText={errors.first_name ? "The First namemust be 2 characters and a maximum of 200 characters " : ""}
                        />
                        <TextField
                            label='Last name'
                            placeholder="Last name"
                            helperText={errors.last_name ? "The First namemust be 2 characters and a maximum of 200 characters " : ""}
                            fullWidth
                            {...register("last_name", {
                                maxLength: 200,
                                minLength: 2
                            })}
                        />
                    </Box>
                    <TextField
                        label='Phone Number'
                        helperText={errors.phone_number ? "The First namemust be 2 characters and a maximum of 200 characters " : ""}
                        type="tel"
                        placeholder="Phone Number"
                        {...register("phone_number", {
                            maxLength: 200,
                            minLength: 2
                        })}
                        sx={styles.inputs}
                        fullWidth

                    />
                    <TextField
                        helperText={errors.email ? "The First namemust be 2 characters and a maximum of 200 characters " : ""}
                        label='Email Address'
                        type="email"
                        placeholder="Email Address"
                        {...register("email", {
                            maxLength: 200,
                            minLength: 2
                        })}
                        sx={styles.inputs}
                        fullWidth
                    />
                    <TextField
                        helperText={errors.business_name ? "The First namemust be 2 characters and a maximum of 200 characters " : ""}
                        label='Business Name'
                        {...register("business_name", {
                            maxLength: 200,
                            minLength: 2
                        })}
                        placeholder="Business Name"
                        sx={styles.inputs}
                        fullWidth
                    />
                    <Button
                        fullWidth
                        sx={{
                            mt: "1rem",
                            p: "0.6rem"
                        }}
                        type="submit"
                        variant="contained"
                        endIcon={<ArrowForward />}
                    >
                        {isSendEmail.isLoading ? 'Sending...' : 'Send'}
                    </Button>
                </Box>
            </Modal >
            <Snackbar
                open={isSendEmail.isSuccess}
                autoHideDuration={6000}
                onClose={() => setIsSendEmail(initNotificationsValues)}
            >
                <Alert
                    onClose={() => setIsSendEmail(initNotificationsValues)}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Success. We will contact you soon!
                </Alert>
            </Snackbar>
            <Snackbar
                open={isSendEmail.isError}
                autoHideDuration={6000}
                onClose={() => setIsSendEmail(initNotificationsValues)}
            >
                <Alert
                    onClose={() => setIsSendEmail(initNotificationsValues)}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Sorry Try again later.
                </Alert>
            </Snackbar>
        </>
    )
}
