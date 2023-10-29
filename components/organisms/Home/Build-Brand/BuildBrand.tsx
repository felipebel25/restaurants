import { Box, Container } from '@mui/system'
import { useInView } from "react-hook-inview"

import { Button, Typography } from '@mui/material'
import { homeText } from 'lang/english/homeCopy'
import Image from 'next/image'

import { styles } from './stylesBuildBrand'
import { HomeSectionProps } from '@components/templates/Home/Home'

export const BuildBrand = ({ phoneView }: HomeSectionProps) => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__zoomIn' : ""

    return (
        <Box
            component="section"
            sx={styles.main}

            className={validateAnimation}
        >
            <Container
                ref={ref}
                maxWidth="xl"
                sx={styles.container}
            >
                <Box
                    component="article"
                    sx={styles.sectionText}
                >
                    <Typography
                        component="h4"
                        variant='h4'
                        sx={styles.title}
                    >
                        {homeText.BuildBrand.title}
                    </Typography>
                    <Typography>
                        {homeText.BuildBrand.body}
                    </Typography>
                    <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        sx={styles.button}
                    >
                        {homeText.BuildBrand.ctaLabel}
                    </Button>
                </Box>
                <Box
                    component="aside"
                    sx={styles.sectionImage}
                >
                    <Image
                        alt='Build Your Brand with Eatsy Orders, Mockup of Eatsy Orders'
                        src={homeText.BuildBrand.cover.main}
                        width={phoneView ? 320 : 610}
                        height={phoneView ? 320 : 607}
                    />
                </Box>
            </Container>
        </Box>
    )
}
