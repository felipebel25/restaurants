import React, { FunctionComponent } from 'react'

import STYLE from './styles'

import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'


import Star from 'public/componets/Star'
import PlanCard from '@components/atoms/Cards/PlanCard/PlanCard'
import SwipeableViews from 'react-swipeable-views'


interface PlanCardListProps {
}

export const PlanCardList: FunctionComponent<PlanCardListProps> = ({ }) => {

  const THEME = useTheme();
  const mediumScreen = useMediaQuery(THEME.breakpoints.down('md'));

  const EatsyPro = ["Up to 50 employees", "Up to 5 menus", "Unlimited amount of categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyBasic = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyUltimate = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]

  return (
    <>
      {
        mediumScreen ?

          <SwipeableViews
            onChangeIndex={(index) => { }}
            resistance
            enableMouseEvents
            animateHeight
            slideStyle={{ padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}


          >

            <PlanCard

              data={EatsyBasic}
              title='Eatsy Basic'
              btnColor='#FAC844'
              text='FREE'
            />

            <PlanCard
              data={EatsyPro}
              title='Eatsy Pro'
              icon={Star}
              iconColor='#FAC844'
              btnColor='#EC6533'
              text='$59,99/Month'
            />

            <PlanCard
              data={EatsyUltimate}
              title='Eatsy Ultimate'
              btnColor='#74DED1'
              text='CUSTOM'
            />
          </SwipeableViews> :

          <Stack
            direction={"row"}
            spacing={'1rem'}
            alignItems={'flex-end'}
            justifyContent={'space-around'}>

            < PlanCard

              data={EatsyBasic}
              title='Eatsy Basic'
              btnColor='#FAC844'
              text='FREE'
            />

            <PlanCard
              data={EatsyPro}
              title='Eatsy Pro'
              icon={Star}
              iconColor='#FAC844'
              btnColor='#EC6533'
              text='$59,99/Month'
            />

            <PlanCard
              data={EatsyUltimate}
              title='Eatsy Ultimate'
              btnColor='#74DED1'
              text='CUSTOM'
            />

          </Stack >

      }

    </>
  )
}
