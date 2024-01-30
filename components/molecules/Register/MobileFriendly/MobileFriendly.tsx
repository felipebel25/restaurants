import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { styles } from "./stylesMobileFriendly"

export const MobileFriendly = () => {
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
                    Mobile-friendly
                </Typography>
                <Typography
                    sx={styles.text}
                >
                    Our menus are not only interactive, customizable, updatable and performant (Phew, that’s a lot of good qualities). We adapt to any screen size too!
                </Typography>
            </Box>
            <Box
                component="aside"
                sx={styles.sideImage}
            >
                <ResponsiveImage
                    src="/images/registration/mobile-friendly/mobile-friendly.png"
                    width={434}
                    widthMobile={434}
                    height={770}
                    heightMobile={770}
                    alt="Mobile Friendly!"
                />
            </Box>
        </Box>
    )
}
