import React, { useState } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Button, SvgIcon, Typography } from '@mui/material'

import { homeText } from 'lang/english/homeText'
import Check from 'public/componets/Check'


interface EatsyproductProps {
  title: string,
  text: string,
  text2?: string,
  imageProd: any,
  dataList?: Array<string>,
  btnColor?: string,
  reverse?:boolean,
}

export const Eatsyproduct = ({ imageProd, title, text, text2, dataList, btnColor, reverse }: EatsyproductProps) => {

  const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null)
  

  return (
    <Box sx={reverse === true ? STYLE.container_reverse : STYLE.container}>
      <Image
        width={800}
        src={imageProd}
        alt='imageProd' />
      <Box sx={STYLE.container_title}>
        <Typography
          variant='body2'
          style={{color:`${btnColor}`}}
          sx={STYLE.title} >
          {title}
        </Typography>
        <Typography sx={{ color: "#111827", fontSize: "16.2px" }}>{text}</Typography>
        {text2 && <Typography sx={{ color: "#111827", fontSize: "16.2px" }}>{text2}</Typography>}
        <Box sx={STYLE.container_list }>
        {dataList && dataList.map((point) => (
          <Box
            sx={STYLE.container_points}
            key={point}
          >
            <SvgIcon
              sx={{ fill: `${btnColor}`, stroke: "transparent" }}
              component={Check} />
            <Typography sx={STYLE.points}>{point}</Typography>
          </Box>
        ))}
      </Box>
        <Button
        sx={STYLE.btn}
        style={btnColor ? {
          boxShadow: `0px 11px 17px 7px ${color}4a`,
          backgroundColor: `${btnColor}`
        } : {}}
        variant='contained'
      >
        Buy Now
      </Button>
      </Box>
    </Box>
  )
}
