import React, { FunctionComponent } from "react";

import STYLE from "./style";

import { Box, Container, Stack, Typography } from "@mui/material";
import { solutionsText } from "lang/english/solutionsCopy";
import CardDescription from "@components/atoms/Cards/CardDescription/CardDescription";
import Star from "public/componets/Star";
import Group from "public/componets/Group";
import Alert from "public/componets/Alert";

import CardDescriptionGroup from "@components/atoms/Cards/CardDescriptionGroup/CardDescriptionGroup";

import { SlideGroupSelection } from "@components/molecules/SlideGroupSelection/SlideGroupSelection";
import { features } from "process";

interface SolutionsContentProps {}

export const SolutionsContent: FunctionComponent =
	({}: SolutionsContentProps) => {
		return (
			<Box sx={STYLE.main}>
				<Container maxWidth="xl">
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

						<SlideGroupSelection slides={solutionsText.Departments} />

						<CardDescriptionGroup color="linear-gradient(150deg, rgba(250, 200, 68, 0.28) 0%, rgba(250, 200, 68, 0.08) 100%)">
							{solutionsText.DepartmentsFeatures.map((feature, index) => (
								<CardDescription
									key={index}
									title={feature.title}
									text={feature.body}
									icon={feature.icon}
								/>
							))}
						</CardDescriptionGroup>

						<SlideGroupSelection slides={solutionsText.UseCases} />

						<CardDescriptionGroup color="linear-gradient(325deg, rgba(174, 255, 239, 0.00) 0%, rgba(174, 255, 239, 0.16) 0.01%, rgba(174, 255, 239, 0.50) 93.27%)">
							{solutionsText.UseCasesFeatures.map((feature, index) => (
								<CardDescription
									iconColor="secondary"
									key={index}
									title={feature.title}
									text={feature.body}
									icon={feature.icon}
								/>
							))}
						</CardDescriptionGroup>
					</Stack>
				</Container>
			</Box>
		);
	};
