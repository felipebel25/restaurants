import { Box, Container } from "@mui/system"
import { styles } from "./stylesStopWasting"
import { Button, Typography } from "@mui/material"
import { homeText } from "lang/english/homeCopy"

export const StopWasting = () => {
    return (
        <Box component="section"
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
