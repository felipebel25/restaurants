import { Box, Container } from "@mui/system"
import { useInView } from "react-hook-inview"

import { Typography } from "@mui/material"
import { CardSocialNetworks } from "@components/atoms/Card-SocialNetworks/CardSocialNetworks"
import { homeText } from "english/homeCopy"

import { styles } from "./stylesCentralizePresence"

export const CentralizePresence = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeIn' : ""

    return (
        <Box
            component="section"
            sx={styles.main}
            ref={ref}
            className={validateAnimation}
        >
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
