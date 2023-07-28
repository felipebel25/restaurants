import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Stack } from '@mui/material'


import CardSection from '@components/atoms/Cards/CardSections/CardSection'

import { companyText } from 'lang/english/Company'


interface CardSectionsProps {
}

export const CardSections: FunctionComponent = ({ }: CardSectionsProps) => {
  return (
    <Stack

      direction='row'
      justifyContent={'space-around'}
      flexWrap={'wrap'}
      paddingY={'2rem'}
      rowGap={'5rem'}
      columnGap={'2rem'}
    >

      {companyText.Features.cards.map((card, index) =>
        <CardSection
          key={index}
          icon={card.icon}
          title={card.title}
          text={card.description}
          btnColor={card.color} />
      )}

    </Stack>
  )
}
