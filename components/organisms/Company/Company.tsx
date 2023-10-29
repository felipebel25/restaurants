import React, { FunctionComponent } from "react";

import STYLE from "./style";

import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";

import { companyText } from "lang/english/companyCopy";
import { CategoriesSection } from "@components/molecules/Company/CategoriesSectionBtn/CategoriesSection";
import { ElipsisIcons } from "@components/molecules/Company/ElipsisIcons/ElipsisIcons";
import { CardSections } from "@components/molecules/Company/CardSections/CardSections";
import { Categories } from "@components/molecules/Company/Categories/Categories";

import { Eatsyproduct } from "@components/molecules/Plans/EatsyPro/EatsyProduct";
import { ClientOpinions } from "../Home/Client-Opinions/ClientOpinions";

interface CompanyContentProps { }

export const CompanyContent: FunctionComponent = ({ }: CompanyContentProps) => {
	const theme = useTheme();
	const FirstList = [
		"Relevant feature",
		"Important details",
		"Interest categories",
		"Relevant feature",
	];
	const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={STYLE.main}>
			<Container maxWidth="xl">
				<Stack
					spacing={"7.5rem"}
					alignItems={"center"}
				>
					<Eatsyproduct
						imageProd={companyText.Hero.cover}
						title={companyText.Hero.title}
						text={companyText.Hero.description}
						dataList={companyText.Hero.feature}
						btnColor="#111827"
					/>
					<CategoriesSection
						title={companyText.CategorySelection.title}
						text={companyText.CategorySelection.description}
						categories={companyText.CategorySelection.categories}
						btnColor="primary"
					/>
					<ElipsisIcons icons={companyText.CoreValues} />

					<Eatsyproduct
						imageProd={companyText.RelevantAspects.cover}
						title={companyText.RelevantAspects.title}
						text={companyText.RelevantAspects.body}
						ctaLabel={companyText.RelevantAspects.ctaLabel}
						reverse
						btnColor="#111827"
						bg="linear-gradient(315deg, rgba(250, 200, 68, 0.28) 0%, rgba(250, 200, 68, 0.08) 100%)"
					/>

					<CardSections />

					<Categories
						image={companyText.Categories.cover}
						categories={companyText.Categories.categories}
						btnColor="#EC6533"
					/>

					<ClientOpinions
						phoneView={phoneSize}
					/>
				</Stack>
			</Container>
		</Box>
	);
};
