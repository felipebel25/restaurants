import React, { ElementType, FunctionComponent } from "react";

import STYLE from "./styles";

import {
	Box,
	Container,
	Stack,
	SvgIcon,
	Typography,
	useTheme,
} from "@mui/material";

import Star from "public/componets/Star";
import Group from "public/componets/Group";
import Alert from "public/componets/Alert";
import Calendary from "public/componets/Calendary";

interface ElipsisIconsProps {
	icons: {
		title: string;
		subtitle: string;
		icon: ElementType<any>;
	}[];
}

export const ElipsisIcons: FunctionComponent<ElipsisIconsProps> = ({
	icons,
}) => {
	const theme = useTheme();

	return (
		<Container maxWidth="lg">
			<Stack
				direction={"row"}
				justifyContent={"space-around"}
				flexWrap={"wrap"}
				gap="2rem"
			>
				{icons.map((icon, index) => (
					<Box
						key={index}
						textAlign={"center"}
						sx={STYLE.container_card}
					>
						<Box sx={STYLE.card}>
							<SvgIcon
								sx={STYLE.icon}
								htmlColor="white"
								component={icon.icon}
							/>
						</Box>
						<Typography variant="h6">{icon.title}</Typography>
						<Typography variant="subtitle1">{icon.subtitle}</Typography>
					</Box>
				))}
			</Stack>
		</Container>
	);
};
