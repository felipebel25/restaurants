import React, { FunctionComponent } from "react";
import Image from "next/image";

import { Stack, Typography } from "@mui/material";

import { homeText } from "english/homeCopy";
import { HomeSectionProps } from "@components/templates/Home/Home";
import { Container } from "@mui/system";

export const Tracking: FunctionComponent<HomeSectionProps> = ({
	phoneView,
}) => {
	return (
		<Stack
			alignItems={"center"}
			spacing={"4rem"}
			paddingY={"3rem"}
		>
			<Container maxWidth="md">
				<Typography
					variant="h3"
					sx={{ textAlign: "center" }}
				>
					{homeText.Tracking.title}
				</Typography>
				<Typography sx={{ marginTop: "3.44rem" }}>
					{homeText.Tracking.body}
				</Typography>
			</Container>
			<Stack
				direction={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				width={"100%"}
				position={"relative"}
			>
				<Image
					style={{
						position: "absolute",
						left: 0,
						flex: 1,
						maxWidth: 450,
						height: "fit-content",
					}}
					src={homeText.Tracking.images.left}
					alt="Screen1"
				/>
				<Image
					style={{
						zIndex: 100,
						maxWidth: 500,
						flex: 1,
						height: "fit-content",
					}}
					src={homeText.Tracking.images.middle}
					alt="Screen2"
				/>
				<Image
					style={{
						position: "absolute",
						right: 0,
						maxWidth: 450,
						height: "fit-content",
						flex: 1,
					}}
					src={homeText.Tracking.images.right}
					alt="Screen3"
				/>
			</Stack>
		</Stack>
	);
};
