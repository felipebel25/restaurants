import React, { useState } from 'react'
import Image from 'next/image'

import STYLE from './styles'

import { Box, Button, Typography } from '@mui/material'
import Group50 from "public/PNG/Group50.png"

import { solutionsText } from 'lang/english/solutionsText'
import { ArrowForward } from '@mui/icons-material'


interface ButtonsCategoriesProps {
  titleSection: string,
}

export const ButtonsCategories = ({ titleSection }: ButtonsCategoriesProps) => {

  const [btnActive, setBtnActive] = useState(0)

  return (
    <Box sx={STYLE.main}>
      <Typography sx={STYLE.title}>{titleSection ? titleSection : ""}</Typography>
      <Box sx={STYLE.container} >
        <Box sx={STYLE.container_buttons}>
          <Button
            onClick={()=>{setBtnActive(0)}}
            type="submit"
            variant={"contained"}
            endIcon={<ArrowForward style={btnActive === 0 ? STYLE.btn_icon_active : STYLE.btn_icon} />}
            sx={btnActive === 0 ? STYLE.btn_category_active : STYLE.btn_category}
          >Departament Category</Button>
          <Button
            onClick={()=>{setBtnActive(1)}}
            type="submit"
            variant={"contained"}
            endIcon={<ArrowForward style={btnActive === 1 ? STYLE.btn_icon_active : STYLE.btn_icon} />}
            sx={btnActive === 1 ? STYLE.btn_category_active : STYLE.btn_category}
          >Departament Category</Button>
          <Button
            onClick={()=>{setBtnActive(2)}}
            type="submit"
            variant={"contained"}
            endIcon={<ArrowForward style={btnActive === 2 ? STYLE.btn_icon_active : STYLE.btn_icon} />}
            sx={btnActive === 2 ? STYLE.btn_category_active : STYLE.btn_category}
          >Departament Category</Button>
          <Button
            onClick={()=>{setBtnActive(3)}}
            type="submit"
            variant={"contained"}
            endIcon={<ArrowForward style={btnActive === 3 ? STYLE.btn_icon_active : STYLE.btn_icon} />}
            sx={btnActive === 3 ? STYLE.btn_category_active : STYLE.btn_category}
          >Departament Category</Button>
          <Button
            onClick={()=>{setBtnActive(4)}}
            type="submit"
            variant={"contained"}
            endIcon={<ArrowForward style={btnActive === 4 ? STYLE.btn_icon_active : STYLE.btn_icon} />}
            sx={btnActive === 4 ? STYLE.btn_category_active : STYLE.btn_category}
          >Departament Category</Button>
        </Box>
        <Box sx={STYLE.container_text}>
          <Box sx={STYLE.container_title}>
            <Image
              style={STYLE.image}
              width={500}
              src={Group50}
              alt='Group50' />
            <Typography sx={{ color: "#111827", fontSize: "1rem" }}>{solutionsText.departamentText}</Typography>
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
