import React, { ReactNode, useState } from "react";
import Image from "next/image";

import STYLE from "./styles";

import {
	Box,
	Button,
	Stack,
	SvgIcon,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { homeText } from "lang/english/homeCopy";
import Check from "public/componets/Check";

interface EatsyproductProps {
	title: string;
	text: string | ReactNode;
	text2?: string;
	imageProd: any;
	dataList?: Array<string>;
	btnColor?: string;
	bg?: string;
	reverse?: boolean;
	ctaLabel?: string;
}

export const Eatsyproduct = ({
	imageProd,
	title,
	text,
	text2,
	dataList,
	btnColor,
	reverse,
	ctaLabel,
	bg = "white",
}: EatsyproductProps) => {
	const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null);

	const Theme = useTheme();
	const mediumScreen = useMediaQuery(Theme.breakpoints.down("md"));

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
			justifyContent={"space-around"}
			spacing={"2rem"}
			sx={{
				borderRadius: "4rem",
				background: `${bg}`,
				p: "4rem 2rem",
			}}
		>
			<Image
				style={{
					width: mediumScreen ? "80%" : "50%",
					height: "fit-content",
					maxWidth: 500,
				}}
				src={imageProd}
				alt="imageProd"
			/>

			<Stack
				maxWidth={"60ch"}
				spacing={"2rem"}
			>
				<Typography
					variant="h2"
					style={{ color: `${btnColor}` }}
				>
					{title}
				</Typography>

				<Typography variant="body1">{text} </Typography>
				{text2 && <Typography variant="body1"> {text2} </Typography>}

				<Box sx={STYLE.container_list}>
					{dataList &&
						dataList.map((point) => (
							<Box
								sx={STYLE.container_points}
								key={point}
							>
								<SvgIcon
									sx={{ fill: `${btnColor}`, stroke: "transparent" }}
									component={Check}
								/>
								<Typography
									variant="overline"
									fontWeight={600}
								>
									{point}
								</Typography>
							</Box>
						))}
				</Box>

				<Button
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
					{ctaLabel || "Buy Now"}
				</Button>
			</Stack>
		</Stack>
	);
};
