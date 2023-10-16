import { Box, Container } from "@mui/system"
import { Typography } from "@mui/material"

import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesSellingProducts"


export const SellingProducts = () => {
    return (
        <Box component="section"
            sx={styles.main} >
            <Container maxWidth="xl"
                sx={styles.container}>
                <Box component="article" sx={styles.textSection}>
                    <Typography component="h4" variant="h4" sx={styles.title}>{homeText.SellingProducts.title}</Typography>
                    <Typography>{homeText.SellingProducts.body}</Typography>
                </Box>
            </Container>
        </Box>
    )
}
