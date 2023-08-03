import React, { FunctionComponent, ReactNode, useState } from "react";

import STYLE from "./styles";

import {
	Button,
	Container,
	Stack,
	Tab,
	Tabs,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { ArrowForward } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";

export interface SlideProp {
	title: string;
	cover: StaticImageData;
	description: string;
	ctaLabel: string;
}

interface SlideGroupSelectionProps {
	slides: SlideProp[];
}

export const SlideGroupSelection: FunctionComponent<
	SlideGroupSelectionProps
> = ({ slides = [] }) => {
	const Theme = useTheme();
	const mediumScreen = useMediaQuery(Theme.breakpoints.down("md"));

	const [activeSlide, setActiveSlide] = useState(0);

	return (
		<Container>
			<Typography
				variant="h5"
				sx={{ textAlign: "center", mb: "3.5rem" }}
			>
				{slides[activeSlide]?.title}
			</Typography>

			{mediumScreen && (
				<Tabs
					sx={{
						color: Theme.palette.text.primary,
						mb: "4rem",
					}}
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
					value={activeSlide}
					centered
					onChange={(e, value) => {
						setActiveSlide(value);
					}}
				>
					{slides.map((slide, index) => (
						<Tab
							sx={{ minWidth: 0 }}
							key={index}
							label={slide.title}
						/>
					))}
				</Tabs>
			)}

			<Stack
				direction={mediumScreen ? "column-reverse" : "row"}
				alignItems={"center"}
				justifyContent={"center"}
				spacing={"10rem"}
			>
				{!mediumScreen && (
					<Stack
						spacing={"1rem"}
						flexShrink={0}
					>
						{slides.map((slide, index) => (
							<Button
								disableElevation
								key={index}
								size="small"
								onClick={() => {
									setActiveSlide(index);
								}}
								variant={"contained"}
								color={activeSlide === index ? "primary" : "white"}
								endIcon={<ArrowForward />}
								sx={
									activeSlide === index
										? STYLE.btn_category_active
										: STYLE.btn_category
								}
							>
								{slides[index].title}
							</Button>
						))}
					</Stack>
				)}

				<Stack
					width={mediumScreen ? "100%" : "50%"}
					alignItems={"center"}
					spacing={"1.5rem"}
				>
					<Image
						style={{ maxWidth: 600, width: "100%", height: "fit-content" }}
						src={slides[activeSlide].cover}
						alt="Group50"
					/>

					<Typography variant="body1">
						{slides[activeSlide].description}
					</Typography>

					<Button
						fullWidth={mediumScreen}
						size="small"
						variant="contained"
					>
						{slides[activeSlide].ctaLabel}
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};
