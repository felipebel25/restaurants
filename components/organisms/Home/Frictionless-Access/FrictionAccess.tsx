import { Box, Container } from "@mui/system"
import Image from "next/image"
import { Typography } from "@mui/material"
import { useInView } from "react-hook-inview"

import { HomeSectionProps } from "@components/templates/Home/Home"
import { CardFAQ } from "@components/molecules/CardFAQ/CardFAQ"

import { homeText } from "english/homeCopy"


import { styles } from "./stylesFrictionAccess"

export const FrictionAccess = ({ phoneView }: HomeSectionProps) => {

    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInUp animate__slow' : ""
    return (
        <Box
            component="section"
            sx={styles.main}
            className={validateAnimation}
        >
            <Container
                maxWidth="xl"
                sx={styles.container}
                ref={ref}
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
                    <Typography sx={styles.description}>{homeText.FrictionAccess.body}</Typography>
                    {phoneView &&
                        <>
                            {homeText.FrictionAccess.cards.map(card => (
                                <CardFAQ
                                    subDescription={false}
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                />
                            ))}
                        </>
                    }
                </Box>
                <Box
                    component="aside"
                    sx={styles.imageSection}
                >
                    <Image
                        alt="Mockup Eatsy Orders, Frictionless access to your products"
                        src={homeText.FrictionAccess.cover.main}
                        width={phoneView ? 750 : 1380}
                        height={phoneView ? 320 : 750}
                    />
                </Box>
            </Container>
        </Box>
    )
}
