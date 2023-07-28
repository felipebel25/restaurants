import React, { useState } from 'react'

import STYLE from './styles'

import { Box, Button, Container, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'

import Bag from 'public/componets/Bag'
import Group from 'public/componets/Group'
import Rocket from 'public/componets/Rocket'
import Star from 'public/componets/Star'


interface CategoriesSectionProps {
  title: string,
  text: string,
  text2?: string,
  btnColor?: string,
  reverse?: boolean,
}

export const CategoriesSection = ({ title, text, text2, btnColor, reverse }: CategoriesSectionProps) => {

  const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null)
  const [btnActive, setBtnActive] = useState(0)

  const buttons = [
    { label: 'Lorem Ipsum', icon: Bag },
    { label: 'Lorem Ipsum', icon: Group },
    { label: 'Lorem Ipsum', icon: Rocket },
    { label: 'Lorem Ipsum', icon: Star }
  ]

  const Theme = useTheme();
  const mediumScreen = useMediaQuery(Theme.breakpoints.down('md'));

  return (
    <Container maxWidth="xl">
      <Container sx={{ justifyContent: 'space-around' }}>
        <Stack
          direction={mediumScreen ? reverse ? 'column-reverse' : 'column' : reverse ? 'row-reverse' : 'row'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={mediumScreen ? '3rem' : '5rem'}
          sx={{
            borderRadius: '4rem',
            width: '100%',

          }}
        >

          <Box sx={{
            ...STYLE.container_buttons, ...{
              width: mediumScreen ? '100%' : 350,
              flexWrap: mediumScreen ? 'nowrap' : 'wrap',

            }
          }}>

            {buttons.map((button, index) =>
              <Button
                key={index}
                onClick={() => { setBtnActive(index) }}
                type="submit"
                variant={btnActive === index ? "contained" : 'outlined'}
                color={btnActive === index ? 'primary' : 'secondary'}
                sx={{
                  ...(STYLE.btn_category),
                  ...{

                    alignSelf: mediumScreen ? 'auto' : index < 2 ? 'flex-end' : 'flex-start',
                    p: btnActive === index ? '2rem' : '1.5rem',
                    flexShrink: mediumScreen ? 1 : 0,
                  }
                }}
              >
                <SvgIcon sx={STYLE.icon} component={button.icon} />
                {button.label}
              </Button>

            )}
          </Box>
          <Box sx={STYLE.container_title}>
            <Typography
              variant='h2'
            >
              {title}
            </Typography>
            <Typography variant='body1'>{text}</Typography>
            {text2 && <Typography variant='body1'>{text2}</Typography>}
            <Button

              style={btnColor ? {
                boxShadow: `0px 11px 17px 7px rgba(236, 101, 51, 0.29)`,
                backgroundColor: `${btnColor}`
              } : {}}
              variant='contained'
            >
              Know More
            </Button>
          </Box>

        </Stack>
      </Container>
    </Container>
  )
}
