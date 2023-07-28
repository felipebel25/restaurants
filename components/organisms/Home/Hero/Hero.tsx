import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Button, Rating, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Group28 from "public/PNG/Group28.png"
import Group28Mobile from "public/PNG/Group28Mobile.png"
import { homeText } from 'lang/english/homeText'
import { HomeSectionProps } from '@components/templates/Home/Home'





export const Hero: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {

  const THEME = useTheme();
  const mediumView = useMediaQuery(THEME.breakpoints.down('md'));

  return (

    <Stack direction={

      phoneView ? 'column-reverse' : 'row'}
      spacing={'6rem'}
      alignItems={'center'}
      sx={{ paddingY: mediumView ? '0rem' : '3.25rem', overflow: 'visible' }}>

      <Stack
        alignItems={mediumView ? 'center' : 'flex-start'}
        spacing={'3rem'} >

        <Typography variant='h1' sx={{ textAlign: mediumView ? 'center' : 'left' }}>

          {mediumView ? homeText.firsTitleMinified : homeText.firsTitle} <span style={{ color: THEME.palette.primary.main }}>{homeText.brand}</span>
        </Typography>

        {mediumView &&
          <Image
            style={{ width: 300, height: 'fit-content', }}
            src={Group28Mobile}
            alt='Group28' />}

        <Typography variant='h5' sx={{ fontWeight: 400 }} >{homeText.thirdTitle}</Typography>

        <Button
          type="submit"
          size='large'
          variant="contained"

          sx={{
            width: mediumView ? '100%' : 'fit-content',
            boxShadow: '0px 11px 17px 7px rgba(236, 101, 51, 0.29)'
          }}
        >
          Get a Free Demo
        </Button>
        <Box sx={STYLE.rating}>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
          <Typography variant='body2' sx={{ color: "#676767" }}>Based on 10,000+ reviews on</Typography>
        </Box>
      </Stack>

      {!mediumView && <Image
        style={{ width: '45%', height: 'fit-content', }}
        src={Group28}
        alt='Group28' />}
    </Stack>

  )
}
