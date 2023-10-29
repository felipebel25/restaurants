import { Box, Container } from "@mui/system"
import { useInView } from "react-hook-inview"
import { Button, Typography } from "@mui/material"

import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesStopWasting"

export const StopWasting = () => {
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
                    >
                        {homeText.Hero.ctaLabel}
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
