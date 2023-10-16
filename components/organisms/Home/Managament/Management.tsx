import { Box, Container } from "@mui/system"
import { styles } from "./stylesManagement"

export const Management = () => {
    return (
        <Box
            component="section"
            sx={styles.main} >
            <Container
                maxWidth="xl"
                sx={styles.container}
            >
            </Container>
        </Box>
    )
}
