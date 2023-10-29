import { FunctionComponent } from "react";
import Image from "next/image";
import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { useInView } from "react-hook-inview"

import { HomeSectionProps } from "@components/templates/Home/Home";

// logos
import Kfc from "public/images/home/partners/kfc.png";
import Wendys from "public/images/home/partners/wendys.png";
import PapaJohns from "public/images/home/partners/papa-johns.png";
import SubWay from "public/images/home/partners/subway.png";

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
						src={Wendys}
						alt="Wendys"
						style={{
							width: phoneView ? "3.75rem" : "7.5rem",
							height: "fit-content",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={SubWay}
						alt="Subway"
						style={{
							width: phoneView ? "5.2rem" : "10rem",
							height: "fit-content",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={Kfc}
						alt="Kfc"
						style={{
							width: phoneView ? "2.75rem" : "6.5rem",
							height: "fit-content",
							transform: phoneView ? "scale(1)" : "scale(0.8)",
						}}
					/>
					<Image
						src={PapaJohns}
						alt="PapaJohns"
						style={{
							width: phoneView ? "5.25rem" : "10rem",
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
