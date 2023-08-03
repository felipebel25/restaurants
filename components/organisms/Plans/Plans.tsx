import React, { FunctionComponent } from "react";

import STYLE from "./style";

import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Vector from "public/SVG/Vector.svg";

import { PlanCardList } from "@components/molecules/Plans/PlanCardList/PlanCardList";
import { CardsDescription } from "@components/molecules/Plans/CardsDescription/CardsDescription";
import { Eatsyproduct } from "@components/molecules/Plans/EatsyPro/EatsyProduct";

import { plansText } from "lang/english/plansCopy";

interface PlansContentProps {}

export const PlansContent: FunctionComponent<PlansContentProps> = ({}) => {
	const THEME = useTheme();

	const EatsyPro = [
		"Up to 50 employees",
		"Up to 5 menus",
		"Unlimited amount of categories",
		"Unlimited amount of products",
		"Up to 15gb of data storage",
		"Customizable dashboard styles",
	];
	const EatsyBasic = [
		"Up to 10 employees",
		"Single menu",
		"Up to 5 categories",
		"Unlimited amount of products",
		"Up to 15gb of data storage",
		"Customizable dashboard styles",
	];
	const EatsyUltimate = [
		"Up to 10 employees",
		"Single menu",
		"Up to 5 categories",
		"Unlimited amount of products",
		"Up to 15gb of data storage",
		"Customizable dashboard styles",
	];

	return (
		<Box sx={STYLE.main}>
			<Image
				src={Vector}
				style={{
					width: "100%",
					objectFit: "cover",
					position: "absolute",
					zIndex: 0,
				}}
				alt="Vector"
			/>

			<Container
				maxWidth={"xl"}
				sx={{ zIndex: 1, paddingY: "5rem" }}
			>
				<Stack spacing={"7.5rem"}>
					<Stack spacing="1rem">
						<Typography
							color="white"
							variant="h1"
							textAlign={"center"}
						>
							{plansText.Hero.title}
						</Typography>
						<Typography
							color="white"
							variant="h5"
							textAlign={"center"}
							fontWeight={400}
						>
							{plansText.Hero.subTitle}
						</Typography>
					</Stack>

					<PlanCardList />

					<CardsDescription />

					{plansText.Plans.map((plan, index) => (
						<Eatsyproduct
							key={index}
							imageProd={plan.cover}
							title={plan.name}
							text={plan.description}
							dataList={plan.features}
							btnColor={plan.color}
							bg={plan.backgroundColor}
							ctaLabel={plan.ctaLabel}
							reverse={index % 2 == 0}
						/>
					))}
				</Stack>
			</Container>
		</Box>
	);
};
