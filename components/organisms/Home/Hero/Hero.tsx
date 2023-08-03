import Image from "next/image";
import { FunctionComponent } from "react";

import STYLE from "./styles";
import css from "./styles.module.css";

import { HomeSectionProps } from "@components/templates/Home/Home";
import {
	Box,
	Button,
	Rating,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { homeText } from "lang/english/homeCopy";

export const Hero: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {
	const THEME = useTheme();
	const mediumView = useMediaQuery(THEME.breakpoints.down("md"));

	return (
		<Stack
			style={{
				paddingBlock: mediumView ? "0rem" : "3.25rem",
				flexDirection: phoneView ? "column-reverse" : "row",
			}}
			sx={STYLE.container}
		>
			<Stack
				alignItems={mediumView ? "center" : "flex-start"}
				spacing={"3rem"}
			>
				<Typography
					variant="h1"
					sx={{ textAlign: mediumView ? "center" : "left" }}
				>
					{mediumView ? homeText.Hero.titleMinified : homeText.Hero.title}{" "}
					<span style={{ color: THEME.palette.primary.main }}>
						{homeText.Hero.titleAccent}
					</span>
				</Typography>

				{mediumView && (
					<Image
						style={{ width: 300, height: "fit-content" }}
						src={homeText.Hero.cover.phone}
						alt="Group28"
					/>
				)}

				<Typography
					variant="h5"
					sx={{ fontWeight: 400 }}
				>
					{homeText.Hero.body}
				</Typography>

				<Button
					type="submit"
					size="large"
					variant="contained"
					sx={{
						width: mediumView ? "100%" : "fit-content",
						boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
					}}
				>
					{homeText.Hero.ctaLabel}
				</Button>
				<Box sx={STYLE.rating}>
					<Rating
						name="read-only"
						value={4.5}
						precision={0.5}
						readOnly
					/>
					<Typography
						variant="body2"
						sx={{ color: "#676767" }}
					>
						{homeText.Hero.reviewLabels}
					</Typography>
				</Box>
			</Stack>

			{!mediumView && (
				<Image
					style={{ width: "45%", height: "fit-content" }}
					src={homeText.Hero.cover.main}
					alt="Group28"
				/>
			)}
		</Stack>
	);
};
