import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box } from '@mui/material'

import { homeText } from 'lang/english/homeText'
import CardSection from '@components/atoms/Cards/CardSections/CardSection'
import Calendary from 'public/componets/Calendary'


interface SectionThreeProps {
}

export const SectionThree: FunctionComponent = ({ }: SectionThreeProps) => {
  return (
    <Box sx={STYLE.main}>
      <Box sx={STYLE.container}>
        <CardSection
          icon={Calendary}
          title='Automated'
          text={homeText.descriptionCard}
          btnColor='#EC6533' />
        <CardSection
          icon={Calendary}
          title='Automated'
          text={homeText.descriptionCard}
          btnColor='#FAC844' />
        <CardSection
          icon={Calendary}
          title='Automated'
          text={homeText.descriptionCard}
          btnColor='#74DED1' />
      </Box>
    </Box>
  )
}
