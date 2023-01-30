import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box } from '@mui/material'
import Image from 'next/image'
import Vector from 'public/svg/Vector.svg'

import { CardsList } from '@components/molecules/Plans/CardsList/CardsList'
import { CardsDescription } from '@components/molecules/Plans/CardsDescription/CardsDescription'
import { Eatsyproduct } from '@components/molecules/Plans/EatsyPro/EatsyProduct'

import Group20 from 'public/SVG/Group20.svg'
import Group45 from 'public/SVG/Group45.svg'
import Group55 from 'public/SVG/Group55.svg'
import { PlansText } from 'lang/english/PlansText'


interface PlansContentProps {
}

export const PlansContent: FunctionComponent = ({ }: PlansContentProps) => {
  const EatsyPro = ["Up to 50 employees", "Up to 5 menus", "Unlimited amount of categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyBasic = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyUltimate = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]

  return (
    <Box sx={STYLE.main}>
      <Image
        src={Vector}
        style={{ width: "100%", objectFit: "cover" }}
        alt="Vector"
      />
      <CardsList />
      <CardsDescription />
      <Eatsyproduct
        imageProd={Group45}
        title='Eatsy Pro'
        text={PlansText.text}
        text2={PlansText.text}
        dataList={EatsyPro}
        btnColor='#EC6533'
        reverse
      />
      <Eatsyproduct
        imageProd={Group20}
        title='Eatsy Basic'
        text={PlansText.text}
        text2={PlansText.text}
        dataList={EatsyBasic}
        btnColor='#FAC844'
      />

      <Eatsyproduct
        imageProd={Group55}
        title='Eatsy Ultimate'
        text={PlansText.text}
        text2={PlansText.text}
        dataList={EatsyUltimate}
        btnColor='#74DED1'
        reverse
      />

    </Box>
  )
}
