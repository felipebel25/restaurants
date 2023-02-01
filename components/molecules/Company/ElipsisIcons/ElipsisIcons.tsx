import React, { FunctionComponent } from 'react'

import STYLE from './styles'

import { Box, SvgIcon, Typography, useTheme } from '@mui/material'

import Star from 'public/componets/Star'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'
import Calendary from 'public/componets/Calendary'


interface ElipsisIconsProps {
}



export const ElipsisIcons: FunctionComponent = ({ }: ElipsisIconsProps) => {

  const theme = useTheme();

  return (
    <Box sx={STYLE.main}>

      <Box sx={STYLE.container_logoList}>
        <Box sx={STYLE.top_elipse} />
        <Box
          className={`${theme.palette.mode}-textured-bg`}
          sx={STYLE.logo_list}
        >
          <Box sx={STYLE.container_logos}>
            <Box sx={STYLE.container_card}>
              <Box sx={STYLE.card}><SvgIcon sx={STYLE.icon} component={Star} /></Box>
              <Typography sx={STYLE.num_cards}>+1000</Typography>
              <Typography sx={STYLE.text_cards}>Lorem ips</Typography>
            </Box>
            <Box sx={STYLE.container_card}>
              <Box sx={STYLE.card}><SvgIcon sx={STYLE.icon} component={Group} /></Box>
              <Typography sx={STYLE.num_cards}>40</Typography>
              <Typography sx={STYLE.text_cards}>Lorem ips</Typography>
            </Box>
            <Box sx={STYLE.container_card}>
              <Box sx={STYLE.card}><SvgIcon sx={STYLE.icon} component={Alert} /></Box>
              <Typography sx={STYLE.num_cards}>10</Typography>
              <Typography sx={STYLE.text_cards}>Lorem ips</Typography>
            </Box>
            <Box sx={STYLE.container_card}>
              <Box sx={STYLE.card}>
                <SvgIcon sx={STYLE.icon} component={Calendary} />
              </Box>
              <Typography sx={STYLE.num_cards}>800</Typography>
              <Typography sx={STYLE.text_cards}>Lorem ips</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={STYLE.bottom_elipse} />
      </Box>
    </Box>
  )
}
