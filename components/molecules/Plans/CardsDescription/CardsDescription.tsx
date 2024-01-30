import React from "react";

import STYLE from "./styles";

import { Box, Stack, Typography } from "@mui/material";

import { solutionsText } from "english/solutionsCopy";

import Star from "public/componets/Star";
import CardDescription from "@components/atoms/Cards/CardDescription/CardDescription";
import Group from "public/componets/Group";
import Alert from "public/componets/Alert";
import Calendary from "public/componets/Calendary";
import { plansText } from "english/plansCopy";

interface CardsDescriptionProps {}

export const CardsDescription = ({}: CardsDescriptionProps) => {
	return (
		<Box>
			<Stack spacing={"1rem"}>
				<Typography
					textAlign={"center"}
					variant="h1"
					style={{ color: "#000" }}
				>
					{plansText.Benefits.title}
				</Typography>

				<Typography
					textAlign={"center"}
					fontWeight={400}
					variant="h6"
				>
					{plansText.Benefits.subTitle}
				</Typography>
			</Stack>

			<Stack
				direction={"row"}
				gap={"2rem"}
				flexWrap={"wrap"}
				justifyContent={"center"}
				mt="4.8rem"
			>
				{plansText.Benefits.benefits.map((benefit, index) => (
					<CardDescription
						key={index}
						title={benefit.label}
						text={benefit.body}
						icon={benefit.icon}
					/>
				))}
			</Stack>
		</Box>
	);
};
