import React from 'react'

import STYLE from './styles'

import { Box, Typography } from '@mui/material'

import CardList from '@components/atoms/Cards/CardList/CardList'
import Star from 'public/componets/Star'


interface CardsListProps {
}

export const CardsList = ({  }: CardsListProps) => {

  const EatsyPro = ["Up to 50 employees", "Up to 5 menus", "Unlimited amount of categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyBasic = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]
  const EatsyUltimate = ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"]

  return (
    <Box sx={STYLE.container_list}>
      <Box sx={STYLE.container_title}>
        <Typography 
          style={{ color: "#fff" }} 
          sx={STYLE.title}>We adapt to your needs</Typography>
        <Typography 
          style={{ color: "#fff" }}
          sx={STYLE.sub_title}>Explore which of our plans is made for you</Typography>
      </Box>
      <Box sx={STYLE.container_list_cards}>
        <Box sx={{ marginTop: "auto" }}>
          <CardList
            data={EatsyBasic}
            title='Eatsy Basic'
            btnColor='#FAC844'
            text='FREE'
          />
        </Box>
        <CardList
          data={EatsyPro}
          title='Eatsy Pro'
          icon={Star}
          iconColor='#FAC844'
          btnColor='#EC6533'
          text='$59,99/Month'
        />
        <Box sx={{ marginTop: "auto" }}>
          <CardList
            data={EatsyUltimate}
            title='Eatsy Ultimate'
            btnColor='#74DED1'
            text='CUSTOM'
          />
        </Box>
      </Box>
    </Box>
  )
}
