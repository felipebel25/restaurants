import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Typography } from '@mui/material'

import { SectionOne } from '@components/molecules/Home/Section-one/SectionOne'
import { SectionTwo } from '@components/molecules/Home/Section-two/SectionTwo'
import { SectionThree } from '@components/molecules/Home/Section-three/SectionThree'
import { SectionFour } from '@components/molecules/Home/Section-Four/SectionFour'
import { SectionFive } from '@components/molecules/Home/Section-five/SectioFive'
import CardUser from '@components/atoms/Cards/CardUser/CardUser'


interface HomeContentProps {
}

export const HomeContent: FunctionComponent = ({ }: HomeContentProps) => {
  return (
    <Box sx={STYLE.main}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Box sx={STYLE.container_carousel}>
        <Typography sx={STYLE.title_carousel}>Our clients think</Typography>
        <Box sx={STYLE.carousel}>
          <CardUser />
          <CardUser />
        </Box>
      </Box>
    </Box>
  )
}
