import { FunctionComponent } from "react";

import { Box, Stack, useMediaQuery } from "@mui/material";

import { AddImage } from "@components/organisms/Home/Add-Image/AddImage";
import ClientOpinions from "@components/organisms/Home/Client-Opinions/ClientOpinions";
import Features from "@components/organisms/Home/Features/Features";
import { Hero } from "@components/organisms/Home/Hero/Hero";
import Newsletter from "@components/organisms/Home/Newsletter/Newsletter";
import PartnersRibbon from "@components/organisms/Home/Partners-Ribbon/PartnersRibbon";
// import SaveMoney from "@components/organisms/Home/Save-money/SaveMoney";
// import { TakeControl } from "@components/organisms/Home/Take-Control/TakeControl";
import { Tracking } from "@components/organisms/Home/Tracking/Tracking";
import { Container, useTheme } from "@mui/system";
import { StopWasting } from "@components/organisms/Home/Stop-Wasting/StopWasting";
import { SellingProducts } from "@components/organisms/Home/Selling-Products/SellingProducts";
import { PersonalizeYour } from "@components/organisms/Home/Personalize-Your/PersonalizeYour";
import { FrictionAccess } from "@components/organisms/Home/Frictionless-Access/FrictionAccess";
import { BuildBrand } from "@components/organisms/Home/Build-Brand/BuildBrand";
import { CentralizePresence } from "@components/organisms/Home/Centralize-Presence/CentralizePresence";
import { Management } from "@components/organisms/Home/Managament/Management";
import { SlidesSection } from "@components/organisms/Home/Slides-Section/SlidesSection";

interface HomeContentProps { }
export interface HomeSectionProps {
	phoneView: boolean;
}

export const HomeContent: FunctionComponent = ({ }: HomeContentProps) => {
	const theme = useTheme();
	// ?? what about this const?
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
					<StopWasting />
					<SellingProducts />
					<PersonalizeYour />
					<FrictionAccess />
					<BuildBrand />
					<CentralizePresence />
					<Management />
					<SlidesSection />
					{/* <TakeControl phoneView={phoneView} /> */}
					{/* <SaveMoney phoneView={phoneView} /> */}
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
