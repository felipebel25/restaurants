import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Container, Stack, Typography } from '@mui/material'
import { solutionsText } from 'lang/english/solutionsText'
import CardDescription from '@components/atoms/Cards/CardDescription/CardDescription'
import Star from 'public/componets/Star'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'
import Departments from './Departments/Departments'
import UseCases from './Use-Cases/UseCases'
import CardDescriptionGroup from '@components/atoms/Cards/CardDescriptionGroup/CardDescriptionGroup'

interface SolutionsContentProps {
}

export const SolutionsContent: FunctionComponent = ({ }: SolutionsContentProps) => {
  return (
    <Box sx={STYLE.main}>
      <Container maxWidth='xl'>

        <Stack alignItems={'center'} spacing={'7rem'} >


          <Stack
            spacing='1rem'
            maxWidth='sm'
            alignItems={'center'}
            textAlign={'center'}>
            <Typography variant='h2' >{solutionsText.title}</Typography>
            <Typography variant='body1' >{solutionsText.description}</Typography>
          </Stack>



          <Departments />


          <CardDescriptionGroup
            color='linear-gradient(150deg, rgba(250, 200, 68, 0.28) 0%, rgba(250, 200, 68, 0.08) 100%)'>
            <CardDescription
              title="Aircraft Benefits"
              text={solutionsText.cardSections}
              icon={Star}
            />
            <CardDescription
              title="Aircraft Benefits"
              text={solutionsText.cardSections}
              icon={Group}
            />
            <CardDescription
              title="Aircraft Benefits"
              text={solutionsText.cardSections}
              icon={Alert}
            />
          </CardDescriptionGroup>

          <UseCases />

          <CardDescriptionGroup
            color='linear-gradient(325deg, rgba(174, 255, 239, 0.00) 0%, rgba(174, 255, 239, 0.16) 0.01%, rgba(174, 255, 239, 0.50) 93.27%)'>
            <CardDescription
              iconColor='secondary'
              title="Aircraft Benefits"
              text={solutionsText.cardSections}
              icon={Star}
            />
            <CardDescription
              iconColor='secondary'
              title="Aircraft Benefits"
              text={solutionsText.cardSections}
              icon={Group}
            />
            <CardDescription
              iconColor='secondary'
              title="Aircraft Benefits"
              text={solutionsText.cardSections}
              icon={Alert}
            />
          </CardDescriptionGroup>

        </Stack>
      </Container>
    </Box >
  )
}
