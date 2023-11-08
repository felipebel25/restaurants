import React, { FunctionComponent } from "react";


import { Box, Container, Stack, Typography } from "@mui/material";
import { solutionsText } from "lang/english/solutionsCopy";
import CardDescription from "@components/atoms/Cards/CardDescription/CardDescription";

import CardDescriptionGroup from "@components/atoms/Cards/CardDescriptionGroup/CardDescriptionGroup";

import { SlideGroupSelection } from "@components/molecules/SlideGroupSelection/SlideGroupSelection";
// components
import { FirstSlidePortrait } from "./FirstSlidePortrait/FirstSlidePortrait";

import { KeyFeatures } from "./KeyFeatures/KeyFeatures";
import { SecondSlidePortrait } from "./SeconSlidePortrait/SecondSlidePortrait";
import { ElevateYourRest } from "./ElevateYour/ElevateYourRest";

import STYLE from "./style";
interface SolutionsContentProps { }

export const SolutionsContent: FunctionComponent =
	({ }: SolutionsContentProps) => {
		return (
			<Box sx={STYLE.main}>
				<Container maxWidth="xl"
				
				>
					<Stack
						alignItems={"center"}
						spacing={"7rem"}
					>
						<Stack
							spacing="1rem"
							maxWidth="sm"
							alignItems={"center"}
							textAlign={"center"}
						
						>
							<Typography variant="h2">{solutionsText.Hero.title}</Typography>
							<Typography variant="body1">
								{solutionsText.Hero.subTitle}
							</Typography>
						</Stack>
						<FirstSlidePortrait />
						<KeyFeatures />
						<SecondSlidePortrait />
						<ElevateYourRest />
					</Stack>
				</Container>
			</Box>
		);
	};
