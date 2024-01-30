//Core
import { FunctionComponent, useState } from "react";

// MUI Components
import { Button, Card, Stack, SvgIcon, Typography } from "@mui/material";

//Style
import STYLE from "./styles";

interface CardSectionProps {
	text: string;
	title: string;
	btnColor?: string;
	icon: any;
}

const CardSection: FunctionComponent<CardSectionProps> = ({
	text,
	title,
	btnColor,
	icon,
}: CardSectionProps) => {
	return (
		<Card sx={STYLE.card}>
			<Button
				type="submit"
				variant={"contained"}
				sx={{
					...STYLE.cardOrnament,
					...{
						boxShadow: `0px 11px 17px 7px ${btnColor}4a`,
						backgroundColor: `${btnColor}`,
					},
				}}
			>
				<SvgIcon component={icon} />
			</Button>
			<Stack sx={STYLE.stack}>
				<Typography variant="h5">{title}</Typography>

				<Typography variant="body2">{text}</Typography>
			</Stack>
		</Card>
	);
};

export default CardSection;
