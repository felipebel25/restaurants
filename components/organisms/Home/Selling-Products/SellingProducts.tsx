import { Box, Container } from "@mui/system"
import { Typography } from "@mui/material"
import { useInView } from "react-hook-inview"

import { homeText } from "english/homeCopy"

import { styles } from "./stylesSellingProducts"


export const SellingProducts = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInRight animate__slow' : ""
    return (
        <Box
            component="section"
            sx={styles.main}
            ref={ref}
            className={validateAnimation}
        >
            <Container maxWidth="xl"
                sx={styles.container}>
                <Box
                    component="article"
                    sx={styles.textSection}>
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={styles.title}
                    >{homeText.SellingProducts.title}</Typography>
                    <Typography>{homeText.SellingProducts.body}</Typography>
                </Box>
            </Container>
        </Box>
    )
}
