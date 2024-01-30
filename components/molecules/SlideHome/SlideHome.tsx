import { ReactElement } from "react"
import { Box } from "@mui/system"
import { styles } from "./stylesSlideHome"
// import { TouchIcon } from "public/componets/TouchIcon";


interface Props {
    Title: ReactElement;
    Body: ReactElement;
    Image: ReactElement;
}

export const SlideHome = ({ Title, Body, Image }: Props) => {
    return (
        <Box sx={styles.slide}>
            <Box sx={styles.slideTextSection}>
                {/* <TouchIcon styles={styles.touchIcon} /> */}
                {Title}
                {Body}
            </Box>
            <Box sx={styles.slideImageSection}>
                 {Image}  
            </Box>
        </Box>
    )
}
