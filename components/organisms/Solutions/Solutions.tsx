import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Typography } from '@mui/material'
import { solutionsText } from 'lang/english/solutionsText'
import { ButtonsCategories } from '@components/molecules/Solutions/ButtonsCategories/ButtonsCategories'
import CardDescription from '@components/atoms/Cards/CardDescription/CardDescription'
import Star from 'public/componets/Star'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'

interface SolutionsContentProps {
}

export const SolutionsContent: FunctionComponent = ({ }: SolutionsContentProps) => {
  return (
    <Box sx={STYLE.main}>
      <Box sx={STYLE.section_one}>
        <Typography sx={STYLE.first_title}>{solutionsText.firsTitle}</Typography>
        <Typography sx={STYLE.first_description}>{solutionsText.eatsy}</Typography>
      </Box>
      <ButtonsCategories titleSection="Departaments" />
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
      </Box>
      <ButtonsCategories titleSection="Use case" />
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
      </Box>
    </Box>
  )
}
