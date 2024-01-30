import React, { FunctionComponent } from "react";

import { Box, Container, NoSsr, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { solutionsText } from "english/solutionsCopy";

// components
import { FirstSlidePortrait } from "./FirstSlidePortrait/FirstSlidePortrait";
import { KeyFeatures } from "./KeyFeatures/KeyFeatures";
import { SecondSlidePortrait } from "./SeconSlidePortrait/SecondSlidePortrait";
import { ElevateYourRest } from "./ElevateYour/ElevateYourRest";

import STYLE from "./style";
import { FirstSlidePortraitMobile } from "./FirstSlidePortraitMobile/FirstSlidePortraitMobile";
interface SolutionsContentProps { }

export const SolutionsContent: FunctionComponent = ({ }: SolutionsContentProps) => {
	const theme = useTheme();

	const phoneView = useMediaQuery(theme.breakpoints.down("sm"))
	return (
		<Box sx={STYLE.main}>
			<Container maxWidth="xl">
				<Stack
					alignItems={"center"}
					spacing={phoneView ? "3rem" : "7rem"}
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
					<NoSsr>
						{phoneView ?
							<FirstSlidePortraitMobile />
							:
							<FirstSlidePortrait />
						}
					</NoSsr>
					<KeyFeatures />
					<SecondSlidePortrait />
					<ElevateYourRest />
				</Stack>
			</Container>
		</Box>
	);
};
