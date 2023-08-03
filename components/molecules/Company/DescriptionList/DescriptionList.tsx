import React, { useState } from "react";
import Image from "next/image";

import STYLE from "./styles";

import { Box, Button, SvgIcon, Typography } from "@mui/material";

import Check from "public/componets/Check";

interface DescriptionListProps {
	title: string;
	text: string;
	text2?: string;
	imageProd: any;
	dataList?: Array<string>;
	btnColor?: string;
	reverse?: boolean;
	fullImage?: boolean;
	imgSize?: number;
}

export const DescriptionList = ({
	imageProd,
	title,
	text,
	text2,
	dataList,
	btnColor,
	reverse,
	imgSize,
	fullImage,
}: DescriptionListProps) => {
	const [color, setColor] = useState(btnColor ? btnColor?.toLowerCase() : null);

	return (
		<Box
			style={fullImage ? { margin: "auto", width: "max-content" } : {}}
			sx={reverse === true ? STYLE.container_reverse : STYLE.container}
		>
			<Image
				width={imgSize ? imgSize : 680}
				src={imageProd}
				alt="imageProd"
				style={fullImage ? { margin: "auto" } : { marginTop: "-2rem" }}
			/>
			<Box sx={STYLE.container_title}>
				<Typography variant="h2"> {title} </Typography>
				<Typography variant="body1"> {text} </Typography>
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
								<Typography sx={STYLE.points}>{point}</Typography>
							</Box>
						))}
				</Box>
				<Button
					sx={STYLE.btn}
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
					Know More
				</Button>
			</Box>
		</Box>
	);
};
