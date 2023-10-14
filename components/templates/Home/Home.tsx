import { FunctionComponent } from "react";

import { Box, Stack, useMediaQuery } from "@mui/material";

import { AddImage } from "@components/organisms/Home/Add-Image/AddImage";
import ClientOpinions from "@components/organisms/Home/Client-Opinions/ClientOpinions";
import Features from "@components/organisms/Home/Features/Features";
import { Hero } from "@components/organisms/Home/Hero/Hero";
import Newsletter from "@components/organisms/Home/Newsletter/Newsletter";
import PartnersRibbon from "@components/organisms/Home/Partners-Ribbon/PartnersRibbon";
import SaveMoney from "@components/organisms/Home/Save-money/SaveMoney";
import { TakeControl } from "@components/organisms/Home/Take-Control/TakeControl";
import { Tracking } from "@components/organisms/Home/Tracking/Tracking";
import { Container, useTheme } from "@mui/system";

interface HomeContentProps {}
export interface HomeSectionProps {
	phoneView: boolean;
}

export const HomeContent: FunctionComponent = ({}: HomeContentProps) => {
	const theme = useTheme();
	const phoneView = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box overflow={"hidden"}>
			<Container maxWidth="xl">
				<Stack
					spacing={"5rem"}
					paddingY={"3.62rem"}
				>
					<Hero phoneView={phoneView} />
					<PartnersRibbon phoneView={phoneView} />
					<TakeControl phoneView={phoneView} />
					<SaveMoney phoneView={phoneView} />
					<Features phoneView={phoneView} />
					<AddImage phoneView={phoneView} />
					<Tracking phoneView={phoneView} />
					<ClientOpinions phoneView={phoneView} />
				</Stack>
			</Container>

			<Newsletter phoneView={phoneView} />
		</Box>
	);
};
