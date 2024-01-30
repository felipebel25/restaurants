import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { styles } from "./stylesTrack"

export const Track = () => {
    return (
        <Box
            component="section"
            sx={styles.main}
        >
            <Box
                component="article"
                sx={styles.sideText}
            >
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Track what they want!
                </Typography>
                <Typography
                    sx={styles.text}
                >
                    Eatsy order gives you access to stats that shows you how your customer interact with your products.
                </Typography>
            </Box>
            <Box
                component="aside"
                sx={styles.sideImage}
            >
                <ResponsiveImage
                    src="/images/registration/track/track.png"
                    width={808}
                    widthMobile={808}
                    height={516}
                    heightMobile={516}
                    alt="Track what they want!"
                />
            </Box>
        </Box>
    )
}
