import { useState } from "react"
import { Box } from "@mui/system"

import { Button, Typography } from "@mui/material"
import { Bold } from "@components/atoms/Bold/Bold"

import { styles } from "./stylesFirstSlidePortrait"
import { solutionsText } from "lang/english/solutionsCopy"

export const FirstSlidePortrait = () => {
    const [slideActive, setSlideActive] = useState({
        first: true,
        second: false
    })
    return (
        <Box sx={styles.main}>
            <Box sx={styles.sectionSlides}>
                <Box
                    sx={slideActive.first ? styles.slide : styles.slideInactive}
                    onClick={() => setSlideActive({
                        first: true,
                        second: false
                    })}
                >
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={styles.titleSlide}
                    >
                        {solutionsText.firstSlide.slides[0].title}
                    </Typography>
                    <Typography>
                        {solutionsText.firstSlide.slides[0].subTitle}
                    </Typography>
                </Box>
                <Box
                    sx={slideActive.second ? styles.slide : styles.slideInactive}
                    onClick={() => setSlideActive({
                        first: false,
                        second: true
                    })}
                >
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={styles.titleSlide}
                    >
                        {solutionsText.firstSlide.slides[1].title}
                    </Typography>
                    <Typography>
                        {solutionsText.firstSlide.slides[1].subTitle}
                    </Typography>
                </Box>
            </Box >
            <Box sx={styles.sectionVideos}>
                <video
                    autoPlay
                    loop
                    style={{ width: "45%" }}
                    muted
                    playsInline={true}
                    controls={false}
                    src="/videos/solutions.mp4"
                />
                <Button
                    sx={styles.button}
                    variant="contained"
                >Start Now</Button>
            </Box>
        </Box>
    )
}
