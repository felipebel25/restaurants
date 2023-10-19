import { Box, Container } from "@mui/system"

import { Typography } from "@mui/material"
import { CardSocialNetworks } from "@components/atoms/Card-SocialNetworks/CardSocialNetworks"
import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesCentralizePresence"

export const CentralizePresence = () => {
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
                    sx={styles.sectionText}
                >
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={styles.title}
                    >
                        {homeText.CentralizePresence.title}
                    </Typography>
                    <Typography>{homeText.CentralizePresence.body}</Typography>
                </Box>
                <Box component="section">
                    {homeText.CentralizePresence.cards.map(card => (
                        <CardSocialNetworks
                            key={card.id}
                            Icon={card.image}
                            name={card.title}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}
