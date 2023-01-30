import React from 'react'


import STYLE from './styles'

import { Box, Typography } from '@mui/material'


import { solutionsText } from 'lang/english/solutionsText'

import Star from 'public/componets/Star'
import CardDescription from '@components/atoms/Cards/CardDescription/CardDescription'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'
import Calendary from 'public/componets/Calendary'


interface CardsDescriptionProps {
}

export const CardsDescription = ({  }: CardsDescriptionProps) => {

  return (
    <Box>
        <Box sx={STYLE.container_title}>
          <Typography
            style={{ color: "#000" }}
            sx={STYLE.title}>Questions & answers</Typography>
          <Typography
            style={{ color: "#000" }}
            sx={STYLE.sub_title}>A little more information about Eatsy and your plans</Typography>
        </Box>
        <Box sx={STYLE.card_section}>
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
        </Box>
      </Box>
  )
}
