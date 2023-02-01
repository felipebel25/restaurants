import React, { FunctionComponent } from 'react'

import STYLE from './style'

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DescriptionList } from '@components/molecules/Company/DescriptionList/DescriptionList'

import Group28 from 'public/SVG/Group28.svg'
import Group50 from 'public/SVG/Group50.svg'
import Group56 from 'public/SVG/Group56.svg'
import Group65 from 'public/SVG/Group65.svg'
import { companyText } from 'lang/english/Company'
import { CategoriesSection } from '@components/molecules/Company/CategoriesSectionBtn/CategoriesSection'
import { ElipsisIcons } from '@components/molecules/Company/ElipsisIcons/ElipsisIcons'
import { CardSections } from '@components/molecules/Company/CardSections/CardSections'
import { Categories } from '@components/molecules/Company/Categories/Categories'
import Image from 'next/image'

interface CompanyContentProps {
}

export const CompanyContent: FunctionComponent = ({ }: CompanyContentProps) => {
  const theme = useTheme()
  const FirstList = ["Relevant feature", "Important details", "Interest categories", "Relevant feature"]
  const smSize = useMediaQuery('(min-width:1400px)');
  console.log(smSize)
  return (
    <Box sx={STYLE.main}>
      <DescriptionList
        imageProd={Group28}
        title={companyText.title}
        text={companyText.description}
        dataList={FirstList}
        reverse={true}
        btnColor='#EC6533'
        fullImage={true}
      />
      <CategoriesSection
        title={companyText.title2}
        text={companyText.text}
        text2={companyText.text}
        btnColor='#EC6533'
      />
      <ElipsisIcons />
      <DescriptionList
        imageProd={Group50}
        title={companyText.title2}
        text={companyText.text}
        text2={companyText.text}
        reverse={true}
        btnColor='#EC6533'
        imgSize={smSize ? 850 : 700}
      />
      <CardSections />
      <Categories
        image={Group56}
        btnColor='#EC6533'
      />
      <Box sx={STYLE.testimonials}>
        <Typography sx={STYLE.text_testimonials}>Testimonials</Typography>
        <Image
          style={{ margin: "auto" }}
          width={1200}
          src={Group65}
          alt='group65'
        />
      </Box>
    </Box>
  )
}
