//Core
import React, { FunctionComponent } from "react";
import Image from "next/image";

// MUI Components
import { Box, Typography } from "@mui/material";

//Style
import STYLE from "./styles";

import user from "public/PNG/Usuario.png";

interface CardUserProps {
	name?: string;
	description?: string;
	position?: string;
	image?: any;
}

const CardUser: FunctionComponent<CardUserProps> = ({
	description,
	name,
	position,
	image,
}: CardUserProps) => {
	return (
		<Box>
			<Box sx={STYLE.card}>
				<Box sx={STYLE.container}>
					<Box sx={STYLE.head}>
						<Box sx={STYLE.img_user}>
							<Image
								width={130}
								src={image || user}
								alt="User"
							/>
						</Box>
						<Box sx={STYLE.container_name}>
							<Typography sx={STYLE.name}>Romina Beltran</Typography>
							<Typography sx={STYLE.position}>Restaurant manager</Typography>
						</Box>
					</Box>
					<Box sx={STYLE.textDescription}>
						<Typography
							sx={STYLE.decription}
							variant="body2"
						>
							Lorem ipsum dolor sit amet, consectetuer ag ka elit, lu sed diam
							nonummy nibh euismod amet tincidunt. Lorem ipsum dolor sit amet,
							consectetuer adipiscing elit diam.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CardUser;
