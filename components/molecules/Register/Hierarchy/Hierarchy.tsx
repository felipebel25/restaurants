import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { Box, List, ListItem, Typography } from "@mui/material"
import { styles } from "./stylesHierarchy"
import { Bold } from "@components/atoms/Bold/Bold"

export const Hierarchy = () => {
    return (
        <Box
            sx={styles.main}
            component="section"
        >
            {/* ----------------Text-------------------- */}
            <Box sx={styles.sideText}>
                <Typography
                    component="h3"
                    variant="h3"
                >
                    Hierarchy tides everything <Bold>up</Bold>!
                </Typography>
                <Typography sx={styles.text}>
                    Eatsy orders groups your products in a certain way to respond to current market demands. We have made this hierarchy is intuitive and easy to understand.
                </Typography>
                <List sx={styles.list}>
                    {items.map((item) => (
                        <ListItem
                            key={item}
                            sx={styles.listItem}
                        >
                            <Bold>{item}</Bold>
                        </ListItem>
                    ))}
                </List>
            </Box>
            {/* ----------------Image-------------------- */}
            <Box sx={styles.sideImage}>
                <ResponsiveImage
                    src="/images/registration/hierarchy/resume-menu-list.png"
                    width={540}
                    widthMobile={540}
                    height={338}
                    heightMobile={338}
                    alt="Hierarchy tides everythin up!"
                />
            </Box>
        </Box>
    )
}
const items = [
    'Menus',
    'Categories',
    'Products',
    'Modifier Group',
    'Modifier Item'
]