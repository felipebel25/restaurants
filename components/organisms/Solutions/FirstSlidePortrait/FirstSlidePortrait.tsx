import { useState } from "react"
import { Box } from "@mui/system"

import { Button, Typography } from "@mui/material"

import { solutionsText } from "english/solutionsCopy"

import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"



import { styles } from "./stylesFirstSlidePortrait"


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
                {slideActive.second ?
                    <video
                        autoPlay
                        loop
                        style={{ width: "50%" }}
                        muted
                        playsInline={true}
                        controls={false}
                        src="/videos/solutions/01-solutions-onsite.mp4"
                    />
                    :
                    <ResponsiveImage
                        src="/images/solutions/01-solutions-admin.png"
                        width={398}
                        height={328}
                        alt="Admin Restaurant Portal"
                    />
                }
                <Button
                    sx={styles.button}
                    variant="contained"
                >Start Now</Button>
            </Box>
        </Box>
    )
}
