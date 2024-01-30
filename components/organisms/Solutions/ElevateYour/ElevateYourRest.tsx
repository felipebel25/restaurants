import { Box } from "@mui/system"

import { Button, Typography } from "@mui/material"
import { Bold } from "@components/atoms/Bold/Bold"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"

import { styles } from "./stylesElevateYourRest"

export const ElevateYourRest = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.sideText}>
                <Typography
                    variant="h4"
                >
                    Elevate Your Restaurant <br />Management Experience<br /> with <Bold>Eatsy Orders</Bold>
                </Typography>
                <Typography
                    sx={styles.description}
                >
                    Take full control of your digital menus, streamline staff operations, optimize inventory, and access valuable insights to make data-driven decisions. Embrace the power of Eatsy Admin Portal to elevate your restaurant&apos;s success today!
                </Typography>
                <Button
                    variant="contained"
                    sx={styles.button}
                >Start Now</Button>
                <Typography
                    sx={styles.textTry}
                >Try Eatsy Orders FREE for 14 Days</Typography>
            </Box>
            <Box sx={styles.sideImage}>
                <ResponsiveImage
                    width={421}
                    widthMobile={321}
                    heightMobile={338}
                    height={438}
                    src="/images/solutions/04-elevate.png"
                    alt="Elevate Your Restaurants"
                />
            </Box>
        </Box>
    )
}
