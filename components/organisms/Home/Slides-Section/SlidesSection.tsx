import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import { Box } from '@mui/system';

import { Typography } from '@mui/material';
import { SlideHome } from '@components/molecules/SlideHome/SlideHome';
import 'react-alice-carousel/lib/alice-carousel.css';

import { homeText } from 'lang/english/homeCopy';
import { styles } from './stylesSlidesSection';


const items = [
    <SlideHome
        key="slide-home-01"
        Title={
            <Typography
                component="h4"
                variant='h4'
                sx={styles.title}
            >
                {homeText.SlidesSection.card[0].title}
            </Typography>}

        Body={<Typography>{homeText.SlidesSection.card[0].description}</Typography>}
        Image={
            <Image
                alt={homeText.SlidesSection.card[0].altImage}
                src={homeText.SlidesSection.card[0].image}
                width={662}
                height={662}
                quality={100}
                style={{ position: "relative", top: "-11rem" }}
            />
        }
    />,
    <SlideHome
        key="slide-home-02"
        Title={
            <Typography
                component="h4"
                variant='h4'
                sx={styles.title}
            >
                {homeText.SlidesSection.card[1].title}
            </Typography>}

        Body={<Typography>{homeText.SlidesSection.card[1].description}</Typography>}
        Image={
            <Image
                alt={homeText.SlidesSection.card[1].altImage}
                src={homeText.SlidesSection.card[1].image}
                width={804}
                height={632}
                style={{ position: "relative", top: "-7rem", margin: "0 auto" }}
            />
        }
    />,
    <SlideHome
        key="slide-home-03"
        Title={
            <Typography
                component="h4"
                variant='h4'
                sx={styles.title}
            >
                {homeText.SlidesSection.card[2].title}
            </Typography>}

        Body={<Typography>{homeText.SlidesSection.card[2].description}</Typography>}
        Image={
            <Image
                alt={homeText.SlidesSection.card[2].altImage}
                src={homeText.SlidesSection.card[2].image}
                width={336}
                height={510}
                style={{ position: "relative", top: "-5.7rem" }}
            />
        }
    />,
    <SlideHome
        key="slide-home-04"
        Title={
            <Typography
                component="h4"
                variant='h4'
                sx={styles.title}
            >
                {homeText.SlidesSection.card[3].title}
            </Typography>}

        Body={<Typography>{homeText.SlidesSection.card[3].description}</Typography>}
        Image={
            <Image
                alt={homeText.SlidesSection.card[3].altImage}
                src={homeText.SlidesSection.card[3].image}
                width={416}
                height={540}
                style={{ position: "relative", top: "-5.7rem" }}
            />
        }
    />,
];
export const SlidesSection = () => {
    return (
        <Box sx={styles.main}>
            <AliceCarousel
                autoPlay
                autoPlayInterval={2000}
                infinite
                disableButtonsControls
                items={items}
            />
        </Box>
    )
}
