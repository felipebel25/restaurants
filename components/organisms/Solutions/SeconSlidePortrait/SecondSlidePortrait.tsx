import { Box } from "@mui/system"
import { styles } from "./stylesSecondSlidePortrait"
import { Typography } from "@mui/material"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { solutionsText } from "lang/english/solutionsCopy"

export const SecondSlidePortrait = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.slidesSide}>
                {solutionsText.secondSlide.slides.map(slide => (
                    <Box
                        key={slide.id}
                        sx={slide.id === 1 ? styles.slide : styles.slideUnabled}
                    >
                        <Box sx={styles.slideIcon}>
                            <ResponsiveImage
                                src="/images/solutions/02-icon.png"
                                width={56}
                                height={55}
                                alt="icon custom"
                            />
                        </Box>
                        <Box sx={styles.slideText}>
                            <Typography variant="h4">{slide.title}</Typography>
                            <Typography>{slide.body}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={styles.videosSide}>
                <ResponsiveImage
                    src="/images/solutions/03-asd.png"
                    alt="Tablet"
                    width={680}
                    height={644}
                />

            </Box>
        </Box>
    )
}
