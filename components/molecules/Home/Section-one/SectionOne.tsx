import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Button, Rating, Typography } from '@mui/material'
import Group28 from "public/PNG/Group28.png"

import { homeText } from 'lang/english/homeText'


interface SectionOneProps {
}

export const SectionOne: FunctionComponent = ({ }: SectionOneProps) => {
  return (
    <Box sx={STYLE.main}>
      <Box sx={STYLE.container_one}>
        <Box sx={STYLE.title}>
          <Typography sx={STYLE.first_title}
            variant='overline'>
            {homeText.firsTitle}
          </Typography>
          <Typography variant='body2' sx={STYLE.second_title} >
            {homeText.secondTitle}
          </Typography>
          <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{homeText.thirdTitle}</Typography>
          <Button
            sx={STYLE.btn_one}
            type="submit"
            variant="contained"
          >
            Know more
          </Button>
          <Box sx={STYLE.rating}>
            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            <Typography sx={{ color: "#676767", fontSize: "13.2px" }}>Based on 10,000+ reviews on</Typography>
          </Box>
        </Box>
        <Image
          width={800}
          src={Group28}
          alt='Group28' />
      </Box>
    </Box>
  )
}
