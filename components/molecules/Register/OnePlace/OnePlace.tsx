import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { Bold } from "@components/atoms/Bold/Bold"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { styles } from "./stylesOnePlace"

export const OnePlace = () => {
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
                    Take and manage your orders in
                    <br /> <Bold>1 place</Bold>
                </Typography>
                <Typography
                sx={styles.text}
                >
                    We not only make it easy to your customers while they are ordering. We also centrilized all what you need to take those orders and manage them according to your restaurant needs. All in one place.                </Typography>
            </Box>
            <Box
                component="aside"
                sx={styles.sideImage}
            >
                <ResponsiveImage
                    src="/images/registration/one-place/one-place.png"
                    width={662}
                    widthMobile={662}
                    height={692}
                    heightMobile={692}
                    alt="Realtime Editing!"
                />
            </Box>
        </Box>
    )
}
