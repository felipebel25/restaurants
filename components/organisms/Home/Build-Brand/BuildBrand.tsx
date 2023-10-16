import { Box, Container } from '@mui/system'

import { Button, Typography } from '@mui/material'
import { homeText } from 'lang/english/homeCopy'
import Image from 'next/image'

import { styles } from './stylesBuildBrand'

export const BuildBrand = () => {
    return (
        <Box
            component="section"
            sx={styles.main} >
            <Container
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
                        src="/images/home/build-brand/01-build-brand.png"
                        width={610}
                        height={607}
                    />

                </Box>
            </Container>
        </Box>
    )
}
