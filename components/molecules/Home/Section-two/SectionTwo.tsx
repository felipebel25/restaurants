import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Typography } from '@mui/material'
import Group10 from "public/PNG/Group10.png"

import { homeText } from 'lang/english/homeText'


interface SectionTwoProps {
}

export const SectionTwo: FunctionComponent = ({ }: SectionTwoProps) => {
  return (
    <Box sx={STYLE.main}>
      <Box sx={STYLE.container}>
      <Image
          width={800}
          src={Group10}
          alt='Group10' />
        <Box sx={STYLE.container_title}>
          <Typography
            variant='body2'
            sx={STYLE.title} >
            {homeText.SaveMoney}
          </Typography>
          <Typography sx={{ color: "#111827", fontSize: "16.2px" }}>{homeText.descriptionOne}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
