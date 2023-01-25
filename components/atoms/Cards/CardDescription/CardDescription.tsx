//Core
import React from 'react'

// MUI Components
import { Box, Button, SvgIcon, Typography } from '@mui/material'

//Style
import STYLE from "./styles"

interface CardDescriptionProps {
  text: string,
  title: string,
  icon: any,
}


const CardDescription = ({ text, title, icon }: CardDescriptionProps) => {

  return (
    <Box sx={STYLE.container}>
      <Button
        type="submit"
        variant={"contained"}
        sx={STYLE.btn}
      >
        <SvgIcon
          component={icon}
          sx={STYLE.btn_icons}
        />
      </Button>
      <Typography sx={STYLE.title}>{title}</Typography>
      <Box sx={STYLE.textDescription}>
        <Typography
          sx={STYLE.decription}
          variant='body2'>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardDescription