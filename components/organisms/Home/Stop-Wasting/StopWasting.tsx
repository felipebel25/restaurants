import { useContext } from "react"
import { useInView } from "react-hook-inview"
import { Box, Container } from "@mui/system"
import { Button, Typography } from "@mui/material"

import { ModalContext } from "context/ModalContext/ModalContext"
import { homeText } from "english/homeCopy"

import { styles } from "./stylesStopWasting"

export const StopWasting = () => {
    const { onOpen } = useContext(ModalContext)
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeIn animate__slow' : ""
    return (
        <Box
            className={validateAnimation}
            ref={ref}
            component="section"
            sx={styles.main} >
            <Container maxWidth="xl"
                sx={styles.container}>
                <Box component="article"
                    sx={styles.textSection}>
                    <Typography variant="h4"
                        sx={styles.title}>{homeText.StopWasting.title}</Typography>
                    <Typography variant="body2">{homeText.StopWasting.body}</Typography>
                    <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        sx={styles.button}
                        onClick={onOpen}
                    >
                        {homeText.Hero.ctaLabel}
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
