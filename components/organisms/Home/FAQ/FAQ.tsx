import { Box, Container } from "@mui/system"

import { Typography } from "@mui/material"
import { CardFAQ } from "@components/molecules/CardFAQ/CardFAQ"
import { homeText } from "lang/english/homeCopy"

import { styles } from "./styleFaq"

export const FAQ = () => {
    return (
        <Box
            component="section"
            sx={styles.main} >
            <Container
                maxWidth="xl"
                sx={styles.container}
            >
                <Typography
                    component="h4"
                    variant="h4"
                >{homeText.FAQ.title}</Typography>
                <Box sx={styles.containerCards}>
                    {homeText.FAQ.cards.map(card => (
                        <CardFAQ
                            key={card.id}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}
