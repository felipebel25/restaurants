import { Box, Stack, useMediaQuery } from "@mui/material";
import { Container, useTheme } from "@mui/system";

//TODO: create a barril file for importing these components
import { Hero } from "@components/organisms/Home/Hero/Hero";
import PartnersRibbon from "@components/organisms/Home/Partners-Ribbon/PartnersRibbon";
import { StopWasting } from "@components/organisms/Home/Stop-Wasting/StopWasting";
import { SellingProducts } from "@components/organisms/Home/Selling-Products/SellingProducts";
import { PersonalizeYour } from "@components/organisms/Home/Personalize-Your/PersonalizeYour";
import { FrictionAccess } from "@components/organisms/Home/Frictionless-Access/FrictionAccess";
import { BuildBrand } from "@components/organisms/Home/Build-Brand/BuildBrand";
import { CentralizePresence } from "@components/organisms/Home/Centralize-Presence/CentralizePresence";
import { Management } from "@components/organisms/Home/Managament/Management";
import { SlidesSection } from "@components/organisms/Home/Slides-Section/SlidesSection";
import { FAQ } from "@components/organisms/Home/FAQ/FAQ";
import { ClientOpinions } from "@components/organisms/Home/Client-Opinions/ClientOpinions";

export interface HomeSectionProps {
	phoneView: boolean;
}

export const HomeContent= () => {
	const theme = useTheme();
	// ?? what about this const? TODO: remove tis logic
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
					<ClientOpinions />
					<FAQ />
				</Stack>
			</Container>
		</Box>
	);
};
