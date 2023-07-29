import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Vector from 'public/SVG/Vector.svg'

import { PlanCardList } from '@components/molecules/Plans/PlanCardList/PlanCardList'
import { CardsDescription } from '@components/molecules/Plans/CardsDescription/CardsDescription'
import { Eatsyproduct } from '@components/molecules/Plans/EatsyPro/EatsyProduct'

import EatsyBasicBanner from 'public/images/plans/EatsyBasic.png'
import EatsyProBanner from 'public/images/plans/EatsyPro.png'
import EatsyUltimateBanner from 'public/images/plans/EaysyUltimate.png'
import { PlansText } from 'lang/english/PlansText'


interface PlansContentProps {
}

export const PlansContent: FunctionComponent<PlansContentProps> = ({ }) => {
  const THEME = useTheme();

  const EatsyPro = ["Up to 50 employees", "Up to 5 menus", "Unlimited amount of categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyBasic = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyUltimate = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]

  return (
    <Box sx={STYLE.main}>
      <Image
        src={Vector}
        style={{ width: "100%", objectFit: "cover", position: 'absolute', zIndex: 0 }}
        alt="Vector"
      />

      <Container maxWidth={'xl'} sx={{ zIndex: 1, paddingY: '5rem' }}>

        <Stack spacing={'7.5rem'}>

          <Stack spacing="1rem"        >

            <Typography
              color='white'
              variant='h1'
              textAlign={'center'}
            >
              We adapt to your needs
            </Typography>
            <Typography
              color='white'
              variant='h5'
              textAlign={'center'}
              fontWeight={400}
            >
              Explore which of our plans is made for you
            </Typography>
          </Stack>

          <PlanCardList />

          <CardsDescription />


          <Eatsyproduct
            imageProd={EatsyBasicBanner}
            title='Eatsy Basic'
            text={PlansText.text}
            text2={PlansText.text}
            dataList={EatsyBasic}
            btnColor='#FAC844'
            bg='linear-gradient(315deg, rgba(250, 200, 68, 0.28) 0%, rgba(250, 200, 68, 0.08) 100%)'
            reverse
          />


          <Eatsyproduct
            imageProd={EatsyProBanner}
            title='Eatsy Pro'
            text={PlansText.text}
            text2={PlansText.text}
            dataList={EatsyPro}
            btnColor='#EC6533'

          />

          <Eatsyproduct
            imageProd={EatsyUltimateBanner}
            title='Eatsy Ultimate'
            text={PlansText.text}
            text2={PlansText.text}
            dataList={EatsyUltimate}
            btnColor='#74DED1'
            bg='linear-gradient(315deg, rgba(116, 222, 209, 0.31) 0%, rgba(116, 222, 209, 0.13) 100%)'
            reverse
          />
        </Stack>
      </Container>
    </Box>
  )
}
