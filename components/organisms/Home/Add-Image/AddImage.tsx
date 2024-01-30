import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { homeText } from "english/homeCopy";
import { HomeSectionProps } from "@components/templates/Home/Home";
import { Stack } from "@mui/system";

export const AddImage: FunctionComponent<HomeSectionProps> = ({
	phoneView,
}) => {
	const Theme = useTheme();
	const mediumView = useMediaQuery(Theme.breakpoints.down("md"));

	return (
		<Stack
			sx={{
				background:
					"linear-gradient(132deg, rgba(116, 222, 209, 0.31) 0%, rgba(116, 222, 209, 0.13) 100%)",
			}}
			padding={mediumView ? "3rem" : "5rem"}
			borderRadius={"3rem"}
			direction={mediumView ? "column-reverse" : "row"}
			justifyContent={"space-around"}
			alignItems={"center"}
			spacing={"4rem"}
		>
			{!mediumView && (
				<Image
					style={{
						width: 350,
						height: "fit-content",
						transform: "translateY(-40px) scale(1.2)",
					}}
					src={homeText.AddImages.image.main}
					alt="coverImage"
				/>
			)}

			<Stack
				maxWidth={"50ch"}
				alignItems={mediumView ? "center" : "flex-start"}
				spacing={"2.12rem"}
			>
				{mediumView && (
					<Image
						style={{
							width: 180,
							height: "fit-content",
							transform: "translateY(-64px) scale(1.3)",
						}}
						src={homeText.AddImages.image.phone}
						alt="coverImageMobile"
					/>
				)}
				<Typography
					variant="h3"
					sx={{ textAlign: mediumView ? "center" : "left" }}
				>
					{homeText.AddImages.title}
				</Typography>

				<Typography
					sx={{ whiteSpace: "pre-wrap" }}
					variant="body1"
				>
					{homeText.AddImages.body}
				</Typography>

				<Button
					type="submit"
					size="small"
					variant="contained"
					sx={{
						width: mediumView ? "100%" : "fit-content",
						boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
					}}
				>
					{homeText.AddImages.ctaLabel}
				</Button>
			</Stack>
		</Stack>
	);
};
