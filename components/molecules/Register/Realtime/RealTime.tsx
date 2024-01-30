import { Box } from "@mui/system"
import { styles } from "./stylesRealTime"
import { Typography } from "@mui/material"
import { Bold } from "@components/atoms/Bold/Bold"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"

export const RealTime = () => {
    return (
        <Box
            component="section"
            sx={styles.main}
        >
            <Box
                component="aside"
                sx={styles.sideImage}
            >
                <ResponsiveImage
                    src="/images/registration/realtime/realtime.png"
                    width={589}
                    widthMobile={589}
                    height={426}
                    heightMobile={426}
                    alt="Realtime Editing!"
                />
            </Box>
            <Box
                component="article"
                sx={styles.sideText}
            >
                <Typography
                    component="h3"
                    variant="h3"
                >
                    <Bold>Realtime</Bold> editing!
                </Typography>
                <Typography>
                    See the results of every change you make and see it exactly as your customers are going to see it.
                </Typography>
            </Box>

        </Box>
    )
}
