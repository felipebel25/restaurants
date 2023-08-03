import React, { ElementType, useState } from "react";
import Image from "next/image";

import {
	Box,
	Button,
	Stack,
	SvgIcon,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

interface CategoriesProps {
	image: any;
	categories: {
		icon: ElementType<any>;
		title: string;
		description: string;
		color: string;
	}[];
	ctaLabel?: "string";
	btnColor?: string;
	reverse?: boolean;
}

export const Categories = ({
	image,
	btnColor,
	ctaLabel,
	categories,
	reverse,
}: CategoriesProps) => {
	const Theme = useTheme();
	const mediumScreen = useMediaQuery(Theme.breakpoints.down("md"));

	const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null);

	return (
		<Stack
			direction={
				mediumScreen
					? reverse
						? "column-reverse"
						: "column"
					: reverse
					? "row-reverse"
					: "row"
			}
			alignItems={"center"}
			justifyContent={"center"}
			spacing={"1rem"}
			sx={{
				borderRadius: "4rem",
			}}
		>
			<Image
				src={image}
				alt={image}
				style={{
					width: mediumScreen ? "80%" : 500,
					height: "fit-content",
					maxWidth: 550,
				}}
			/>
			<Stack
				spacing={"3rem"}
				maxWidth={"50ch"}
				alignItems={"center"}
			>
				{categories.map((category, index) => (
					<Box
						sx={{ position: "relative" }}
						key={index}
					>
						<Stack
							direction={"row"}
							spacing="1rem"
							alignItems={"flex-start"}
						>
							<Box
								sx={{
									display: "flex",
									flexShrink: 0,
									justifyContent: "center",
									alignItems: "center",
									width: "3rem",

									borderRadius: "0.5rem",
									aspectRatio: 1,
									boxShadow: `0px 11px 17px 7px ${category.color}4a`,
									backgroundColor: `${category.color}`,
								}}
							>
								<SvgIcon component={category.icon} />
							</Box>

							<Box>
								<Typography variant="h5">{category.title}</Typography>
								<Typography variant="body1">{category.description}</Typography>
							</Box>
						</Stack>
					</Box>
				))}

				<Button
					fullWidth
					style={
						btnColor
							? {
									boxShadow: `0px 11px 17px 7px ${color}4a`,
									backgroundColor: `${btnColor}`,
							  }
							: {}
					}
					variant="contained"
				>
					{ctaLabel || "Know More"}
				</Button>
			</Stack>
		</Stack>
	);
};
