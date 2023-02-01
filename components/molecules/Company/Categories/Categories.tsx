import React, { useState } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Button, SvgIcon, Typography } from '@mui/material'

import Check from 'public/componets/Check'
import { ArrowForward } from '@mui/icons-material'
import Bag from 'public/componets/Bag'
import Group from 'public/componets/Group'
import Rocket from 'public/componets/Rocket'
import Star from 'public/componets/Star'
import { companyText } from 'lang/english/Company'
import Calendary from 'public/componets/Calendary'


interface CategoriesProps {
  image: any,
  btnColor?: string,
  reverse?: boolean,
}

export const Categories = ({ image, btnColor, reverse }: CategoriesProps) => {

  const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null)
  const [btnActive, setBtnActive] = useState(0)


  return (
    <Box sx={reverse === true ? STYLE.container_reverse : STYLE.container}>
      <Image
        style={STYLE.image}
        src={image}
        alt={image}
        width={500}
      />
      <Box sx={STYLE.container_title}>
        <Box sx={STYLE.container_category}>
          <Typography
            variant='body2'
            style={{ color: "#111827" }}
            sx={STYLE.title} >
            <Box
              sx={STYLE.btn_category}
              style={{
                boxShadow: `0px 11px 17px 7px ${color}4a`,
                backgroundColor: `${btnColor}`
              }}
            >
              <SvgIcon
                style={{fill:"#fff"}}
                component={Calendary}
                sx={STYLE.btn_icons}
              />
            </Box>
            Category
          </Typography>
          <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{companyText.text2}</Typography>
        </Box>
        <Box sx={STYLE.container_category}>
          <Typography
            variant='body2'
            style={{ color: "#111827" }}
            sx={STYLE.title} >
            <Box
              sx={STYLE.btn_category}
              style={{
                boxShadow: `0px 11px 17px 7px #FAC8444a`,
                backgroundColor: `#FAC844`
              }}
            >
              <SvgIcon
                style={{fill:"#fff"}}
                component={Calendary}
                sx={STYLE.btn_icons}
              />
            </Box>
            Category
          </Typography>
          <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{companyText.text2}</Typography>
        </Box>
        <Box sx={STYLE.container_category}>
          <Typography
            variant='body2'
            style={{ color: "#111827" }}
            sx={STYLE.title} >
            <Box
              sx={STYLE.btn_category}
              style={{
                boxShadow: `0px 11px 17px 7px #74DED14a`,
                backgroundColor: `#74DED1`
              }}
            >
              <SvgIcon
                style={{fill:"#fff"}}
                component={Calendary}
                sx={STYLE.btn_icons}
              />
            </Box>
            Category
          </Typography>
          <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{companyText.text2}</Typography>
        </Box>
        <Button
          sx={STYLE.btn}
          style={btnColor ? {
            boxShadow: `0px 11px 17px 7px ${color}4a`,
            backgroundColor: `${btnColor}`
          } : {}}
          variant='contained'
        >
          Know More
        </Button>
      </Box>
    </Box>
  )
}
