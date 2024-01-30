import { Box, Typography } from "@mui/material"
import { styles } from "../Terms/stylesTermsConditions"
import { CardFAQ } from "@components/molecules/CardFAQ/CardFAQ"
import { privacyPolicies } from "english/privacyPolicy"

export const PrivacyPolicies = () => {
    return (
        <Box
            sx={styles.main}
            component="main"
        >
            <Typography
                variant="h1"
                component="h1"
                sx={styles.title}
            >Privacy policies</Typography>
            <Box sx={styles.container}>
                <Typography
                    component="h3"
                    variant="h3"
                    color='primary.light'
                >Read the next information:</Typography>
                {privacyPolicies.map((card) => (
                    <CardFAQ
                        key={card.id}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </Box>
        </Box>
    )
}
