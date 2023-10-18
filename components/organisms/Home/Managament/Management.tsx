import Image from "next/image"
import { Box, Container, Typography } from "@mui/material"

import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesManagement";

export const Management = () => {
    return (
        <Box
            component="section"
            sx={styles.main} >
            <Container
                maxWidth="xl"
                sx={styles.container}
            >
                <Box
                    component="aside"
                    sx={styles.sectionImage}
                >
                    <Image
                        alt="Admin Panel Eatsy Orders, Management your business"
                        src="/images/home/management/01-management.png"
                        width={542}
                        height={474}
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