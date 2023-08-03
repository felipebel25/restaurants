import React, { FunctionComponent } from "react";
import Image from "next/image";

import STYLE from "./styles";

import { Box, Stack } from "@mui/material";

import CardSection from "@components/atoms/Cards/CardSections/CardSection";

import { companyText } from "lang/english/companyCopy";

interface CardSectionsProps {}

export const CardSections: FunctionComponent = ({}: CardSectionsProps) => {
	return (
		<Stack
			direction="row"
			justifyContent={"space-around"}
			flexWrap={"wrap"}
			paddingY={"2rem"}
			rowGap={"5rem"}
			columnGap={"2rem"}
		>
			{companyText.Features.map((feature, index) => (
				<CardSection
					key={index}
					icon={feature.icon}
					title={feature.title}
					text={feature.description}
					btnColor={feature.color}
				/>
			))}
		</Stack>
	);
};
