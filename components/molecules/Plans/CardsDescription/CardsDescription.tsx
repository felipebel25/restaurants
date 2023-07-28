import React from 'react'


import STYLE from './styles'

import { Box, Stack, Typography } from '@mui/material'


import { solutionsText } from 'lang/english/solutionsText'

import Star from 'public/componets/Star'
import CardDescription from '@components/atoms/Cards/CardDescription/CardDescription'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'
import Calendary from 'public/componets/Calendary'


interface CardsDescriptionProps {
}

export const CardsDescription = ({ }: CardsDescriptionProps) => {

  return (
    <Box>
      <Stack spacing={'1rem'} >
        <Typography
          textAlign={'center'}
          variant='h1'
          style={{ color: "#000" }}
        >
          Questions & answers
        </Typography>

        <Typography
          textAlign={'center'}
          fontWeight={400}
          variant='h6'
        >A little more information about Eatsy and your plans
        </Typography>
      </Stack>

      <Stack
        direction={'row'}
        gap={'2rem'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        mt='4.8rem'

      >
        <CardDescription
          title="Aircraft Benefits"
          text={solutionsText.cardSections}
          icon={Star}
        />
        <CardDescription
          title="Aircraft Benefits"
          text={solutionsText.cardSections}
          icon={Group}
        />
        <CardDescription
          title="Aircraft Benefits"
          text={solutionsText.cardSections}
          icon={Alert}
        />
        <CardDescription
          title="Aircraft Benefits"
          text={solutionsText.cardSections}
          icon={Calendary}
        />
      </Stack>
    </Box>
  )
}
