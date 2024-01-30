import { FunctionComponent } from "react";
import Image from "next/image";
import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { useInView } from "react-hook-inview"

import { HomeSectionProps } from "@components/templates/Home/Home";

// logos
import ElMexicano from "public/images/home/partners/el-mexicano.png";
import LaHavana from "public/images/home/partners/la-havana-59.png";
import LogoNanos from "public/images/home/partners/logo-nanos.png";
import MonchyFastFood from "public/images/home/partners/monchy-fastfood.png";
import NochesDeColombia from "public/images/home/partners/nochesdecolombia.png";
import TheBurguer from "public/images/home/partners/the-burguer-temple.png";


import { styles } from "./stylesPartnersRibbon";

const PartnersRibbon: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {
	const [ref, inView] = useInView({ unobserveOnEnter: true })
	const size = useMediaQuery('(min-width:600px)')
	const validateAnimation = (size && inView) ? 'animate__animated animate__fadeInUp' : ""

	return (
		<Box
			ref={ref}
			className={validateAnimation}
			sx={styles.container}>
			<Container maxWidth="xl">
				<Stack
					sx={styles.main}
				>
					<Image
						src={LaHavana}
						alt="LaHavana59 Restaurant"
						style={{
							width: phoneView ? "7rem" : "10rem",
							height: "fit-content",
							marginRight: phoneView ? "0.7rem" : "0",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={LogoNanos}
						alt="Logo Nanos Restaurant"
						style={{
							width: phoneView ? "7rem" : "9.5rem",
							height: "fit-content",
							marginRight: phoneView ? "0.7rem" : "0",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={MonchyFastFood}
						alt="Monchy Fast Food Restaurant"
						style={{
							width: phoneView ? "5rem" : "10rem",
							height: "fit-content",
							marginRight: phoneView ? "0.7rem" : "0",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={ElMexicano}
						alt="El Mexicano Restaurant"
						style={{
							width: phoneView ? "7rem" : "10.7rem",
							height: "fit-content",
							marginRight: phoneView ? "0.7rem" : "0",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={NochesDeColombia}
						alt="Noches de Colombia Restaurant"
						style={{
							width: phoneView ? "7rem" : "12rem",
							height: "fit-content",
							marginRight: phoneView ? "0.7rem" : "0",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={TheBurguer}
						alt="The Burguer Restaurant"
						style={{
							width: phoneView ? "5rem" : "10rem",
							height: "fit-content",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
				</Stack>
			</Container>
		</Box>
	);
};

export default PartnersRibbon;
