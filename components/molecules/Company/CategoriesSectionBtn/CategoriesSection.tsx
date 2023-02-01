import React, { useState } from 'react'

import STYLE from './styles'

import { Box, Button, SvgIcon, Typography } from '@mui/material'

import Bag from 'public/componets/Bag'
import Group from 'public/componets/Group'
import Rocket from 'public/componets/Rocket'
import Star from 'public/componets/Star'


interface CategoriesSectionProps {
  title: string,
  text: string,
  text2?: string,
  btnColor?: string,
  reverse?:boolean,
}

export const CategoriesSection = ({ title, text, text2, btnColor, reverse }: CategoriesSectionProps) => {

  const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null)
  const [btnActive, setBtnActive] = useState(0)


  return (
    <Box sx={reverse === true ? STYLE.container_reverse : STYLE.container}>
     <Box sx={STYLE.container_buttons}>
          <Button
            onClick={()=>{setBtnActive(0)}}
            type="submit"
            variant={"contained"}
            sx={btnActive === 0 ? STYLE.btn_category_active : STYLE.btn_category}
          ><SvgIcon sx={btnActive === 0 ? STYLE.icon_active : STYLE.icon} component={Bag} /> Lorem ipsum</Button>
          <Button
            onClick={()=>{setBtnActive(1)}}
            type="submit"
            variant={"contained"}
            sx={btnActive === 1 ? STYLE.btn_category_active : STYLE.btn_category}
          ><SvgIcon sx={btnActive === 1 ? STYLE.icon_active : STYLE.icon} component={Group} />Lorem ipsum</Button>
          <Button
            onClick={()=>{setBtnActive(2)}}
            type="submit"
            variant={"contained"}
            sx={btnActive === 2 ? STYLE.btn_category_active : STYLE.btn_category}
          ><SvgIcon sx={btnActive === 2 ? STYLE.icon_active : STYLE.icon} component={Rocket} />Lorem ipsum</Button>
          <Button
            onClick={()=>{setBtnActive(3)}}
            type="submit"
            variant={"contained"}
            sx={btnActive === 3 ? STYLE.btn_category_active : STYLE.btn_category}
          ><SvgIcon sx={btnActive === 3 ? STYLE.icon_active : STYLE.icon} component={Star} />Lorem ipsum</Button>
        </Box>
      <Box sx={STYLE.container_title}>
        <Typography
          variant='body2'
          style={{color:"#111827"}}
          sx={STYLE.title} >
          {title}
        </Typography>
        <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{text}</Typography>
        {text2 && <Typography sx={{ color: "#111827", fontSize: "13.2px" }}>{text2}</Typography>}
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
