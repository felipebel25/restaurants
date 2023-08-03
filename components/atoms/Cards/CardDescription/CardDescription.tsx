//Core
import React from "react";

// MUI Components
import { Button, Stack, SvgIcon, Typography } from "@mui/material";

//Style
import STYLE from "./styles";

interface CardDescriptionProps {
	text: string;
	title: string;
	icon: any;
	iconColor?:
		| "disabled"
		| "action"
		| "inherit"
		| "primary"
		| "secondary"
		| "success"
		| "error"
		| "info"
		| "warning";
}

const CardDescription = ({
	text,
	title,
	icon,
	iconColor = "inherit",
}: CardDescriptionProps) => {
	return (
		<Stack
			alignItems={"center"}
			spacing="1rem"
			maxWidth={300}
			minWidth={150}
			sx={{ color: "#6B7280" }}
		>
			<Button
				disableElevation
				variant="contained"
				size="large"
				color="white"
				sx={STYLE.btn}
			>
				<SvgIcon
					color={iconColor}
					sx={STYLE.btn_icons}
					component={icon}
				/>
			</Button>

			<Typography
				textAlign={"center"}
				variant="h5"
				sx={{ color: "inherit" }}
			>
				{title}
			</Typography>

			<Typography
				sx={{ color: "inherit" }}
				variant="body2"
			>
				{text}
			</Typography>
		</Stack>
	);
};

export default CardDescription;
