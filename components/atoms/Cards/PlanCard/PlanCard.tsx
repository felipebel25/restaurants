//Core
import React, { useState } from 'react'

// MUI Components
import {
  Box,
  Button,
  SvgIcon,
  Typography
} from '@mui/material'

//Style
import STYLE from "./styles"

//Components
import Check from 'public/componets/Check'

interface PlanCardProps {
  title: string,
  icon?: any,
  iconColor?: string,
  data: Array<string>,
  text?: string
  btnColor?: string,
}


const PlanCard = ({ title, icon, iconColor, data, text, btnColor }: PlanCardProps) => {
  const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null)

  return (
    <Box sx={icon === undefined ? STYLE.container : STYLE.container_icon}>
      <Box sx={STYLE.icon_title}>
        {icon !== undefined && <SvgIcon
          component={icon}
          sx={STYLE.btn_icons}
          style={iconColor ? { fill: `${iconColor}` } : {}}
        />}
        <Typography sx={STYLE.title}>{title}</Typography>
        {text && <Typography sx={{ color: "#6B7280", fontSize: "12px" }}>{text}</Typography>}
      </Box>
      <Box sx={icon === undefined ? STYLE.container_list : STYLE.container_list_icon}>
        {data.map((point) => (
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
        sx={icon === undefined ? STYLE.btn : STYLE.btn_icon}
        style={btnColor ? {
          boxShadow: `0px 11px 17px 7px ${color}4a`,
          backgroundColor: `${btnColor}`
        } : {}}
        variant='contained'
      >
        Buy Now
      </Button>

      <Typography sx={{ fontSize: "12px", color: "#6B7280" }}>By clicking you accept the terms and conditions</Typography>
    </Box>
  )
}

export default PlanCard;