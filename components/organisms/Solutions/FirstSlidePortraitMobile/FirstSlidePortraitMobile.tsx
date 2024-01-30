import { ReactElement, useState } from "react"
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/system"

import { Button, Typography } from "@mui/material"
import { ResponsiveImage } from "@components/atoms/Image/ResponsiveImage"

import { solutionsText } from "english/solutionsCopy"

import { styles } from "./stylesFirstSlidePortraitMobile"
import 'react-alice-carousel/lib/alice-carousel.css';



interface PropsCards {
    title: string | ReactElement;
    description: string;
    srcMedia: string;
    typeMedia: string;

}

const CardSlide = ({
    title,
    description,
    srcMedia,
    typeMedia
}: PropsCards) => {
    const [slideActive, setSlideActive] = useState({
        first: true,
        second: false
    })
    return (
        <Box key={description} sx={styles.main}>
            <Box sx={styles.sectionVideos}>
                {typeMedia === 'video' ?
                    <video
                        autoPlay
                        loop
                        style={{ width: "208px" }}
                        muted
                        playsInline={true}
                        controls={false}
                        src={srcMedia}
                    />
                    :
                    <ResponsiveImage
                        src={srcMedia}
                        width={398}
                        height={328}
                        alt={'asd'}
                    />
                }
            </Box>
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
                        {title}
                    </Typography>
                    <Typography
                        sx={styles.description}
                    >
                        {description}
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                >Start Now</Button>
            </Box >
        </Box>
    )
}

const items = [
    <CardSlide
        key={solutionsText.firstSlide.slides[0].id}
        title={solutionsText.firstSlide.slides[0].title}
        description={solutionsText.firstSlide.slides[0].subTitle}
        typeMedia={solutionsText.firstSlide.slides[0].typeMedia}
        srcMedia={solutionsText.firstSlide.slides[0].img}
        data-value="1"
    />,
    <CardSlide
        key={solutionsText.firstSlide.slides[1].id}
        title={solutionsText.firstSlide.slides[1].title}
        description={solutionsText.firstSlide.slides[1].subTitle}
        typeMedia={solutionsText.firstSlide.slides[1].typeMedia}
        srcMedia={solutionsText.firstSlide.slides[1].img}
        data-value="2"

    />,

]
const responsive = {
    0: { items: 1 },
};

export const FirstSlidePortraitMobile = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center"
            }}
        >
            <AliceCarousel
                autoPlay
                autoPlayInterval={3500}
                infinite
                disableButtonsControls
                items={items}
            />
        </Box>
    )
}