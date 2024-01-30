import { useContext } from 'react'
import { Box, Container } from '@mui/system'
import { useInView } from "react-hook-inview"
import Image from 'next/image'

import { Button, Typography } from '@mui/material'
import { homeText } from 'english/homeCopy'
import { HomeSectionProps } from '@components/templates/Home/Home'
import { ModalContext } from 'context/ModalContext/ModalContext'

import { styles } from './stylesBuildBrand'

export const BuildBrand = ({ phoneView }: HomeSectionProps) => {
    const [ref, inView] = useInView({ unobserveOnEnter: true });
    const { onOpen } = useContext(ModalContext)

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
                        onClick={onOpen}
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
