import { Box, Container } from "@mui/system"
import { styles } from "./stylesPersonalizeYour"
import { Typography } from "@mui/material"
import { Bold } from "@components/atoms/Bold/Bold"
import Image from "next/image"
import { homeText } from "lang/english/homeCopy"

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
