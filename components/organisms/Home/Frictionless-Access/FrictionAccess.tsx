import { Box, Container } from "@mui/system"
import Image from "next/image"

import { Typography } from "@mui/material"
import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesFrictionAccess"

export const FrictionAccess = () => {
    return (
        <Box
            component="section"
            sx={styles.main} >
            <Container
                maxWidth="xl"
                sx={styles.container}
            >
                <Box
                    component="article"
                    sx={styles.textSection}
                >
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={styles.title}
                    >
                        {homeText.FrictionAccess.title}
                    </Typography>
                    <Typography>{homeText.FrictionAccess.body}</Typography>
                </Box>
                <Box
                    component="aside"
                    sx={styles.imageSection}
                >
                    <Image
                        alt="Mockup Eatsy Orders, Frictionless access to your products"
                        src="/images/home/friction-access/01-friction-access.png"
                        width={1380}
                        height={750}
                    />
                </Box>
            </Container>
        </Box>
    )
}
