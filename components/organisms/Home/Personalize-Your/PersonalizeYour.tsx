import Image from "next/image"
import { Box, Container } from "@mui/system"
import { Typography } from "@mui/material"
import { useInView } from "react-hook-inview"

import { HomeSectionProps } from "@components/templates/Home/Home"
import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesPersonalizeYour"

export const PersonalizeYour = ({ phoneView }: HomeSectionProps) => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInUp' : ""
    return (
        <Box
            component="section"
            sx={styles.main}
            className={validateAnimation}
        >
            <Container maxWidth="xl"
                sx={styles.container}>
                <Box
                    component="article"
                    sx={styles.sectionTextContainer}
                >
                    <Box sx={styles.sectionText}>
                        <Typography
                            component="h4"
                            variant="h4"
                            sx={styles.titleText}
                        >
                            {homeText.PersonalizeYour.title}
                        </Typography>
                        <Typography>{homeText.PersonalizeYour.body}</Typography>

                    </Box>
                </Box>
                <Box
                    component="aside"
                    sx={styles.sectionImages}
            ref={ref}

                >
                    <Image
                        width={phoneView ? 364 : 684}
                        height={phoneView ? 278 : 598}
                        quality={100}
                        alt="Personalize your Culinary Journey, collections"
                        src="/images/home/personalize-your/01-personalize-your-culinary.png"
                    />
                </Box>
            </Container>
        </Box>
    )
}
