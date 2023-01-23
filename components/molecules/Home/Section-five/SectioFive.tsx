import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Typography, useMediaQuery } from '@mui/material'
import Vector from "public/PNG/vector.png"
import Group20 from "public/PNG/Group20.png"
import Kfc from "public/PNG/KFC.png"
import Wendys from "public/PNG/WENDY'S.png"
import PapaJohns from "public/PNG/PAPAJOHNS.png"
import SubWay from "public/PNG/SUBWAY.png"

import { homeText } from 'lang/english/homeText'


interface SectionFiveProps {
}



export const SectionFive: FunctionComponent = ({ }: SectionFiveProps) => {

  const sizeMd = useMediaQuery('(max-width:1366px)');

  console.log(sizeMd)

  return (
    <Box sx={STYLE.main}>
      <Box sx={STYLE.container}>
        <Box sx={STYLE.container_title}>
          <Typography variant='body2'
            sx={STYLE.title} >
            {homeText.trackVh}
          </Typography>
          <Typography sx={{ color: "#111827", fontSize: "16px", width: "790px" }}>{homeText.descriptionTrackVh}</Typography>
        </Box>
        <Image
          style={STYLE.vector}
          width={600}
          src={Vector}
          alt='Vector' />
      </Box>

      <Image
        width={sizeMd ? 1000 : 1350}
        style={STYLE.group20}
        src={Group20}
        alt='Group20' />

      <Box sx={STYLE.container_logoList}>
        <Box sx={STYLE.top_elipse} />
        <Box sx={STYLE.logo_list}>
          <Box sx={STYLE.container_logos}>
          <Image
            src={Kfc}
            alt="Kfc"
          />
          <Image
            src={Wendys}
            alt="Wendys"

          />
          <Image
            src={PapaJohns}
            alt="PapaJohns"
          />
          <Image
            src={SubWay}
            alt="Subway"
          />
          </Box>
        </Box>
        <Box sx={STYLE.bottom_elipse} />
      </Box>
    </Box>
  )
}
