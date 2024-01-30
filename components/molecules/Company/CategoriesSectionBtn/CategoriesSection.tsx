import React, { ElementType, ReactNode, useState } from "react";

import STYLE from "./styles";

import {
	Box,
	Button,
	Container,
	Stack,
	SvgIcon,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

interface CategoriesSectionProps {
	title: string;
	text: string | ReactNode;
	ctaLabel?: string;
	btnColor?: string;
	reverse?: boolean;
	categories: {
		label: string;
		icon:  JSX.Element;
	}[];
}

export const CategoriesSection = ({
	title,
	text,
	btnColor,
	ctaLabel,
	reverse,
	categories,
}: CategoriesSectionProps) => {
	const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null);
	const [btnActive, setBtnActive] = useState(0);

	const Theme = useTheme();
	const mediumScreen = useMediaQuery(Theme.breakpoints.down("md"));

	return (
		<Container maxWidth="xl">
			<Container sx={{ justifyContent: "space-around" }}>
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
					spacing={mediumScreen ? "3rem" : "5rem"}
					sx={{
						borderRadius: "4rem",
						width: "100%",
					}}
				>
					<Box
						sx={{
							...STYLE.container_buttons,
							...{
								width: mediumScreen ? "100%" : 350,
								flexWrap: mediumScreen ? "nowrap" : "wrap",
							},
						}}
					>
						{categories.map((category, index) => (
							<Button
								key={index}
								onClick={() => {
									setBtnActive(index);
								}}
								type="submit"
								variant={btnActive === index ? "contained" : "outlined"}
								color={btnActive === index ? "primary" : "secondary"}
								sx={{
									...STYLE.btn_category,
									...{
										alignSelf: mediumScreen
											? "auto"
											: index < 2
												? "flex-end"
												: "flex-start",
										p: btnActive === index ? "2rem" : "1.5rem",
										flexShrink: mediumScreen ? 1 : 0,
									},
								}}
							>
								<SvgIcon
									sx={STYLE.icon}
								>
									{category.icon}
								</SvgIcon>
								{category.label}
							</Button>
						))}
					</Box>
					<Box sx={STYLE.container_title}>
						<Typography variant="h2">{title}</Typography>
						<Typography variant="body1">{text}</Typography>

						<Button
							style={
								btnColor
									? {
										boxShadow: `0px 11px 17px 7px rgba(236, 101, 51, 0.29)`,
										backgroundColor: `${btnColor}`,
									}
									: {}
							}
							variant="contained"
						>
							{ctaLabel || "Know More"}
						</Button>
					</Box>
				</Stack>
			</Container>
		</Container>
	);
};
