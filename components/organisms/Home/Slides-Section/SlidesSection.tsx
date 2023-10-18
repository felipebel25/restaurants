import { Bold } from '@components/atoms/Bold/Bold';
import { SlideHome } from '@components/molecules/SlideHome/SlideHome';
import { Typography } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import { Box } from '@mui/system';
import 'react-alice-carousel/lib/alice-carousel.css';
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
                Your Ultimate<br />
                Order Management  <br />
                <Bold>Solution</Bold>
            </Typography>}

        Body={<Typography>Engage your customers like never before with our interactive dining experience. With Eatsy Orders - Onsite Menu™ , your patrons can explore high-definition images, dish descriptions, allergen information, all at their fingertips.</Typography>}
        Image={
            <Image
                alt='Order Management'
                src='/images/home/slides/01-ultimate-order.png'
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
                <Bold>Real-Time</Bold> <br />
                Updates
            </Typography>}

        Body={<Typography>Update your menus in real-time, whether<br /> it&apos;s seasonal specials, limited-time offers, or ingredient substitutions.</Typography>}
        Image={
            <Image
                alt='Order Management'
                src='/images/home/slides/02-real-time.png'
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
                <Bold>Interactive</Bold> Dining<br />
                Experience
            </Typography>}

        Body={<Typography>Engage your customers like never before with our interactive dining experience. With Eatsy Orders - Onsite Menu™ , your patrons can explore high-definition images, dish descriptions, allergen information, all at their fingertips.</Typography>}
        Image={
            <Image
                alt='Order Management'
                src='/images/home/slides/03-interactive.png'
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
                <Bold>Personalization</Bold> &<br />
                Recommendations
            </Typography>}

        Body={<Typography>Boost customer satisfaction with our personalized recommendations. Eatsy Orders allows you to create guided flows, allowing you to tailor suggestions based on their actions on your menu.</Typography>}
        Image={
            <Image
                alt='Order Management'
                src='/images/home/slides/04-personalization.png'
                width={416}
                height={540}
                style={{ position: "relative", top: "-5.7rem" }}

            />
        }

    />,
];
export const SlidesSection = () => {
    return (
        <Box style={{ width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
            <AliceCarousel autoPlay autoPlayInterval={2000} infinite disableButtonsControls items={items} />
            {/* <SlideHome
                key="slide-home-01"
                Title={
                    <Typography
                        component="h4"
                        variant='h4'
                        sx={styles.title}
                    >
                        Your Ultimate<br />
                        Order Management  <br />
                        <Bold>Solution</Bold>
                    </Typography>}

                Body={<Typography>Engage your customers like never before with our interactive dining experience. With Eatsy Orders - Onsite Menu™ , your patrons can explore high-definition images, dish descriptions, allergen information, all at their fingertips.</Typography>}
                Image={
                    <Image
                        alt='Order Management'
                        src='/images/home/slides/01-ultimate-order.png'
                        width={632}
                        height={632}
                        quality={100}
                        style={{ position: "relative", bottom:"21rem" }}


                    />
                }
            /> */}
        </Box>
    )
}
