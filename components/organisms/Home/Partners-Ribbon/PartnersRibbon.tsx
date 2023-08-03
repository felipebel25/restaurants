import { HomeSectionProps } from "@components/templates/Home/Home";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";
import Kfc from "public/images/home/partners/kfc.png";
import Wendys from "public/images/home/partners/wendys.png";
import PapaJohns from "public/images/home/partners/papa-johns.png";
import SubWay from "public/images/home/partners/subway.png";

const PartnersRibbon: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {
	return (
		<Box sx={{ backgroundColor: "#F3F4F6" }}>
			<Container maxWidth="xl">
				<Stack
					overflow={"hidden"}
					gap={"1rem"}
					direction={phoneView ? "column" : "row"}
					justifyContent={"space-between"}
					alignItems={"center"}
					paddingY={phoneView ? "1rem" : "3rem"}
				>
					<Image
						src={Kfc}
						alt="Kfc"
						style={{
							width: "6.5rem",
							height: "fit-content",
							transform: phoneView ? "scale(0.6)" : "scale(0.8)",
						}}
					/>
					<Image
						src={Wendys}
						alt="Wendys"
						style={{
							width: "7.5rem",
							height: "fit-content",
							transform: phoneView ? "scale(0.6)" : "scale(0.8)",
						}}
					/>
					<Image
						src={PapaJohns}
						alt="PapaJohns"
						style={{
							width: "10rem",
							height: "fit-content",
							transform: phoneView ? "scale(0.6)" : "scale(0.8)",
						}}
					/>
					<Image
						src={SubWay}
						alt="Subway"
						style={{
							width: "10rem",
							height: "fit-content",
							transform: phoneView ? "scale(0.6)" : "scale(0.8)",
						}}
					/>
				</Stack>
			</Container>
		</Box>
	);
};

export default PartnersRibbon;
