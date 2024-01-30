import { Box, Button, Typography } from "@mui/material"

import { Bold } from "@components/atoms/Bold/Bold"

import { styles } from "./stylesKeyFeatures"

export const KeyFeatures = () => {
    return (
        <Box
            component="section"
            sx={styles.main}
        >
            <Box sx={styles.videoSide}>
                <video
                    autoPlay
                    loop
                    style={{ width: "100%" }}
                    muted
                    playsInline={true}
                    controls={false}
                    src="/videos/keyFeatures/01-key-features.mp4"
                />
            </Box>
            <Box sx={styles.textSide}>
                <Typography
                    component="h4"
                    variant="h4"
                >Key Features of <Bold>Eatsy<br /> Order’s</Bold> Admin CMS Services</Typography>
                <Typography sx={styles.textDescription}>Unlock the full potential of your restaurant&apos;s success with Eatsy Order&apos;s comprehensive CMS services. Simplify operations, elevate the customer experience, and stay ahead in the competitive restaurant industry. Embrace the future of dining technology today!</Typography>
                <Button
                    sx={styles.button}
                    variant="contained"
                >
                    Start Now
                </Button>
            </Box>

        </Box>
    )
}
