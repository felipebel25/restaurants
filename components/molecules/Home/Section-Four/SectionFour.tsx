import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Button, Rating, Typography } from '@mui/material'
import HomeKFC from "public/PNG/Home-KFC.png"

import { homeText } from 'lang/english/homeText'


interface SectionFourProps {
}

export const SectionFour: FunctionComponent = ({ }: SectionFourProps) => {
  return (
    <Box sx={STYLE.main}>
      <Box sx={STYLE.container} >
        <Box sx={STYLE.container_image}>
          <Image
            style={STYLE.image_one}
            width={400}
            src={HomeKFC}
            alt='Group28' />
          <Image
            style={STYLE.image_two}
            width={400}
            src={HomeKFC}
            alt='Group28' />
        </Box>
        <Box sx={STYLE.container_text}>
          <Box sx={STYLE.container_title}>
            <Typography
              variant='body2'
              sx={STYLE.title}>
              {homeText.addImages}
            </Typography>
            <Typography sx={{ color: "#111827", fontSize: "13.2px", marginBottom: "1.5rem" }}>{homeText.descriptionOne}</Typography>
            <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{homeText.descriptionThree}</Typography>
            <Button
              sx={STYLE.btn}
              type="submit"
              variant="contained"
            >
              Know more
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
