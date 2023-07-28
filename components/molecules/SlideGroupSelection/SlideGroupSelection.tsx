import React, { FunctionComponent, ReactNode, useState } from 'react'


import STYLE from './styles'

import { Box, Button, Container, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'

import { ArrowForward } from '@mui/icons-material'
import Image from 'next/image'
import { solutionsText } from 'lang/english/solutionsText'
import Banner from "public/PNG/Group50.png"

export interface SlideProp {
  label: string,

}

interface SlideGroupSelectionProps {
  slides: SlideProp[]
}

export const SlideGroupSelection: FunctionComponent<SlideGroupSelectionProps> = ({ slides = [] }) => {

  const Theme = useTheme();
  const mediumScreen = useMediaQuery(Theme.breakpoints.down('md'));

  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Container>
      <Typography
        variant='h5'
        sx={{ textAlign: 'center', mb: '3.5rem' }}>
        {slides[activeSlide]?.label}
      </Typography>



      {mediumScreen &&

        <Tabs
          sx={{
            color: Theme.palette.text.primary,
            mb: '4rem',

          }}

          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
          value={activeSlide}
          centered
          onChange={(e, value) => { setActiveSlide(value) }} >

          {slides.map((slide, index) =>
            <Tab
              sx={{ minWidth: 0 }}
              key={index}
              label={slide.label} />

          )}
        </Tabs>
      }

      <Stack

        direction={mediumScreen ? 'column-reverse' : 'row'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={'10rem'}
      >

        {!mediumScreen && <Stack spacing={'1rem'} flexShrink={0}>

          {slides.map((slide, index) =>
            <Button

              disableElevation
              key={index}
              size='small'
              onClick={() => { setActiveSlide(index) }}
              variant={"contained"}
              color={activeSlide === index ? 'primary' : 'white'}
              endIcon={<ArrowForward />}
              sx={
                activeSlide === index ? STYLE.btn_category_active : STYLE.btn_category
              }
            >
              {slides[index].label}
            </Button>
          )}
        </Stack>}

        <Stack
          width={mediumScreen ? '100%' : '50%'}
          alignItems={'center'}
          spacing={'1.5rem'}
        >

          <Image
            style={{ maxWidth: 600, width: '100%', height: 'fit-content' }}
            src={Banner}
            alt='Group50' />

          <Typography variant='body1'>{solutionsText.departamentText}</Typography>

          <Button
            fullWidth={mediumScreen}
            size='small'
            variant="contained"
          >
            Know More
          </Button>
        </Stack>
      </Stack >
    </Container>

  )
}
