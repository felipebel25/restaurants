import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DescriptionList } from '@components/molecules/Company/DescriptionList/DescriptionList'

import Group28 from 'public/SVG/Group28.svg'
import SecondCover from 'public/images/company/secondCover.png'
import Group56 from 'public/SVG/Group56.svg'
import Group65 from 'public/SVG/Group65.svg'
import { companyText } from 'lang/english/Company'
import { CategoriesSection } from '@components/molecules/Company/CategoriesSectionBtn/CategoriesSection'
import { ElipsisIcons } from '@components/molecules/Company/ElipsisIcons/ElipsisIcons'
import { CardSections } from '@components/molecules/Company/CardSections/CardSections'
import { Categories } from '@components/molecules/Company/Categories/Categories'
import Image from 'next/image'
import { Eatsyproduct } from '@components/molecules/Plans/EatsyPro/EatsyProduct'
import ClientOpinions from '../Home/Client-Opinions/ClientOpinions'

interface CompanyContentProps {
}

export const CompanyContent: FunctionComponent = ({ }: CompanyContentProps) => {
  const theme = useTheme()
  const FirstList = ["Relevant feature", "Important details", "Interest categories", "Relevant feature"]
  const phoneSize = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={STYLE.main}>
      <Container maxWidth='xl'>
        <Stack spacing={'7.5rem'} alignItems={'center'} >
          <Eatsyproduct
            imageProd={Group28}
            title={companyText.title}
            text={companyText.text}
            text2={companyText.text}
            dataList={FirstList}
            btnColor='#111827'

          />
          <CategoriesSection
            title={companyText.title2}
            text={companyText.text}
            text2={companyText.text}
            btnColor='primary'
          />
          <ElipsisIcons />

          <Eatsyproduct
            imageProd={SecondCover}
            title={companyText.title2}
            text={companyText.text}
            text2={companyText.text}
            reverse
            btnColor='#111827'
            bg='linear-gradient(315deg, rgba(250, 200, 68, 0.28) 0%, rgba(250, 200, 68, 0.08) 100%)'
          />

          <CardSections />

          <Categories
            image={Group56}
            btnColor='#EC6533'
          />
          <ClientOpinions phoneView={phoneSize} />
        </Stack>
      </Container>
    </Box>
  )
}
