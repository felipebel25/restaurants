import { useState } from "react"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

import { solutionsText } from "english/solutionsCopy"

import { styles } from "./stylesSecondSlidePortrait"

export const SecondSlidePortrait = () => {
    const [slideActive, setSlideActive] = useState(1)

    return (
        <Box sx={styles.main}>
            <Box sx={styles.slidesSide}>
                {solutionsText.secondSlide.slides.map(slide => (
                    <Box
                        key={slide.id}
                        onClick={() => setSlideActive(slide.id)}
                        sx={slide.id === slideActive ? styles.slide : styles.slideUnabled}
                    >
                        <Box sx={styles.slideIcon}>
                            <ResponsiveImage
                                src="/images/solutions/02-icon.png"
                                width={56}
                                widthMobile={40}
                                heightMobile={40}
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
                    src={solutionsText.secondSlide.slides[slideActive - 1].img}
                    alt="Tablet"
                    width={580}
                    widthMobile={297}
                    height={644}
                    heightMobile={272}
                />
            </Box>
        </Box>
    )
}
