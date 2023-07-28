import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Stack, Typography, useMediaQuery } from '@mui/material'

import { Hero } from '@components/organisms/Home/Hero/Hero'
import { TakeControl } from '@components/organisms/Home/Take-Control/TakeControl'
import { AddImage } from '@components/organisms/Home/Add-Image/AddImage'
import { Tracking } from '@components/organisms/Home/Tracking/Tracking'
import CardUser from '@components/atoms/Cards/CardUser/CardUser'
import { Container, useTheme } from '@mui/system'
import SaveMoney from '@components/organisms/Home/Save-money/SaveMoney'
import Features from '@components/organisms/Home/Features/Features'
import ClientOpinions from '@components/organisms/Home/Client-Opinions/ClientOpinions'
import PartnersRibbon from '@components/organisms/Home/Partners-Ribbon/PartnersRibbon'
import Newsletter from '@components/organisms/Home/Newsletter/Newsletter'


interface HomeContentProps {
}
export interface HomeSectionProps {

  phoneView: boolean
}

export const HomeContent: FunctionComponent = ({ }: HomeContentProps) => {

  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box overflow={'hidden'}>
      <Container maxWidth='lg'>
        <Stack spacing={"5rem"} paddingY={'3.62rem'}>
          <Hero phoneView={phoneView} />
          <TakeControl phoneView={phoneView} />
          <SaveMoney phoneView={phoneView} />
          <Features phoneView={phoneView} />
          <AddImage phoneView={phoneView} />
          <Tracking phoneView={phoneView} />
          <ClientOpinions phoneView={phoneView} />
        </Stack>
      </Container>
      <PartnersRibbon phoneView={phoneView} />
      <Newsletter phoneView={phoneView} />
    </Box>

  )
}

