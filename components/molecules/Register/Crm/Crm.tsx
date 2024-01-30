import { Box, Typography } from "@mui/material"
import { styles } from "./stylesCrm"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { Bold } from "@components/atoms/Bold/Bold"

export const Crm = () => {
    return (
        <Box
            component="section"
            sx={styles.main}
        >
            {/* -----------Text--------- */}
            <Box sx={styles.sideText}>
                <Typography
                    component="h3"
                    variant="h3"
                ><Bold>CRM</Bold> easier than ever</Typography>
                <Typography sx={styles.text}>Eatsy orders allows you to easily manage all your products and its relationships. Experience a simple yet powerful modern dashboard which allows you to manage your menus declarative.</Typography>
            </Box>
            {/* -----------Image--------- */}
            <Box sx={styles.sideImage}>
                <ResponsiveImage
                    alt="Registration CRM Easier than ever restaurants"
                    src="/images/registration/crm/crm-carousel.png"
                    width={1203}
                    widthMobile={1203}
                    height={591}
                    heightMobile={591}
                />
            </Box>
        </Box>
    )
}
