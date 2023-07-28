import React, { FunctionComponent } from 'react'

import STYLE from './styles'

import { Box, Container, Stack, SvgIcon, Typography, useTheme } from '@mui/material'

import Star from 'public/componets/Star'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'
import Calendary from 'public/componets/Calendary'


interface ElipsisIconsProps {
}



export const ElipsisIcons: FunctionComponent = ({ }: ElipsisIconsProps) => {

  const theme = useTheme();

  const icons = [
    {
      title: '+1000',
      subtitle: 'Lorem Ipsum',
      icon: Star
    }, {
      title: '40',
      subtitle: 'Lorem Ipsum',
      icon: Group
    }
    , {
      title: '10',
      subtitle: 'Lorem Ipsum',
      icon: Alert
    }, {
      title: '800',
      subtitle: 'Lorem Ipsum',
      icon: Calendary
    }
  ]

  return (

    <Container maxWidth="lg" >
      <Stack direction={'row'} justifyContent={'space-around'} flexWrap={'wrap'} gap='2rem'>
        {icons.map((icon, index) =>

          <Box key={index} textAlign={'center'} sx={STYLE.container_card}>
            <Box sx={STYLE.card}><SvgIcon sx={STYLE.icon} htmlColor='white' component={icon.icon} /></Box>
            <Typography variant='h6'>{icon.title}</Typography>
            <Typography variant='subtitle1'>{icon.subtitle}</Typography>
          </Box>
        )}
      </Stack>
    </Container>

  )
}
