import { Box, Typography } from "@mui/material"
import { CardFAQ } from "@components/molecules/CardFAQ/CardFAQ"

import { cardsTerms } from "english/termsCopy"

import { styles } from "./stylesTermsConditions"

export const TermsConditions = () => (
    <Box
        sx={styles.main}
        component="main"
    >
        <Typography
            variant="h1"
            component="h1"
            sx={styles.title}
        >Terms of service</Typography>
        <Box sx={styles.container}>
            <Typography
                component="h3"
                variant="h3"
                color='primary.light'
            >Read the next information:</Typography>
            {cardsTerms.map((card) => (
                <CardFAQ
                    key={card.id}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </Box>
    </Box>
)

