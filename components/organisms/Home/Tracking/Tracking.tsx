import React, { FunctionComponent } from 'react'
import Image from 'next/image'



import { Stack, Typography, useMediaQuery } from '@mui/material'

import Screen1 from "public/images/home/tracking/screen1.png"
import Screen2 from "public/images/home/tracking/screen2.png"
import Screen3 from "public/images/home/tracking/screen3.png"

import { homeText } from 'lang/english/homeText'
import { HomeSectionProps } from '@components/templates/Home/Home'
import { Container } from '@mui/system'






export const Tracking: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {



  return (
    <Stack alignItems={'center'} spacing={'4rem'} paddingY={'3rem'}>

      <Container maxWidth="md" >
        <Typography variant='h3' sx={{ textAlign: 'center' }}>{homeText.trackVh}</Typography>
        <Typography sx={{ marginTop: '3.44rem' }} >{homeText.descriptionTrackVh}</Typography>
      </Container>
      <Stack
        direction={'row'}

        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        height={phoneView ? 300 : 500}
        position={'relative'}

      >
        <Image
          style={
            {
              position: 'absolute',
              left: -10,
              maxWidth: 450,
              height: '70%',
              width: 'fit-content',
            }
          }
          src={Screen1}
          alt='Screen1' />
        <Image
          style={
            {
              position: 'absolute',
              zIndex: 100,
              maxWidth: 500,
              height: '100%',
              width: 'fit-content',
            }
          }
          src={Screen2}
          alt='Screen2' />
        <Image
          style={
            {
              position: 'absolute',
              right: -10,
              maxWidth: 450,
              height: '70%',
              width: 'fit-content',
            }
          }
          src={Screen3}
          alt='Screen3' />
      </Stack>



    </Stack>
  )
}
