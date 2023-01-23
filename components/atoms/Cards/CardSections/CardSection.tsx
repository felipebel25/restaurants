//Core
import React, { FunctionComponent, ReactComponentElement, useState } from 'react'

// MUI Components
import { Box, Button, SvgIcon, Typography } from '@mui/material'

//Style
import STYLE from "./styles"

interface CardSectionProps {
  text: string,
  title: string,
  btnColor?: string,
  icon: any,
}


const CardSection: FunctionComponent<CardSectionProps> = ({ text, title, btnColor, icon }: CardSectionProps) => {
  const [color, setColor] = useState(btnColor?.toLowerCase())

  return (
    <Box >
      <Box sx={STYLE.card}>
        <Box sx={STYLE.container}>
          <Box sx={STYLE.container_icon_title}>
            <Button
              type="submit"
              variant={"contained"}
              sx={STYLE.btn}
              style={{
                boxShadow: `0px 11px 17px 7px ${color}4a`,
                backgroundColor: `${btnColor}`
              }}
            >
              <SvgIcon
                component={icon}
                sx={STYLE.btn_icons}
              />
            </Button>
            <Typography sx={STYLE.title}>{title}</Typography>
          </Box>
          <Box sx={STYLE.textDescription}>
            <Typography
              sx={STYLE.decription}
              variant='body2'>
                {text}
              </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CardSection