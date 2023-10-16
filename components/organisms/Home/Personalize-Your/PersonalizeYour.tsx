import { Box, Container } from "@mui/system"
import { styles } from "./stylesPersonalizeYour"
import { Typography } from "@mui/material"
import { Bold } from "@components/atoms/Bold/Bold"
import Image from "next/image"

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
                        >Personalize Your <br /><Bold>Culinary Journey</Bold></Typography>
                        <Typography>With <strong>Eatsy Orders</strong>, you have the opportunity to curate a special collection that showcases your culinary expertise as recommendation for your customers. </Typography>

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
