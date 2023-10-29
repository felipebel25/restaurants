import { HomeSectionProps } from "@components/templates/Home/Home";
import Image from "next/image"
import { useInView } from "react-hook-inview"

import { Box, Container, Typography } from "@mui/material"

import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesManagement";

export const Management = ({ phoneView }: HomeSectionProps) => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInLeft' : ""
    return (
        <Box
            component="section"
            sx={styles.main}
            className={validateAnimation}
            >
            <Container
                maxWidth="xl"
                ref={ref}
                sx={styles.container}
            >
                <Box
                    component="aside"
                    sx={styles.sectionImage}
                >
                    <Image
                        alt="Admin Panel Eatsy Orders, Management your business"
                        src={homeText.Management.cover.main}
                        width={phoneView ? 320 : 542}
                        height={phoneView ? 280 : 474}
                    />
                </Box>
                <Box
                    component="article"
                    sx={styles.sectionText}
                >
                    <Typography
                        variant="h4"
                        sx={styles.title}
                    >
                        {homeText.Management.title}
                    </Typography>
                    <Typography>
                        {homeText.Management.body}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}