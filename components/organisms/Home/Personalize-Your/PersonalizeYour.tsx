import Image from "next/image"
import { Box, Container } from "@mui/system"
import { Typography } from "@mui/material"

import { homeText } from "lang/english/homeCopy"

import { styles } from "./stylesPersonalizeYour"

export const PersonalizeYour = () => {
    return (
        <Box component="section"
            sx={styles.main} >
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
                >
                    <Image
                        width={684}
                        height={598}
                        quality={100}
                        alt="Personalize your Culinary Journey, collections"
                        src="/images/home/personalize-your/01-personalize-your-culinary.png"
                    />
                </Box>
            </Container>
        </Box>
    )
}
