import { FunctionComponent } from "react";

import { HomeSectionProps } from "@components/templates/Home/Home";
import {
	Button,
	Stack,
	Typography,
} from "@mui/material";
import { homeText } from "lang/english/homeCopy";

import STYLE from "./styles";
import { Box } from "@mui/system";

export const Hero: FunctionComponent<HomeSectionProps> = ({ }) => {

	return (
		<Stack
			className='animate__animated animate__fadeInDown'
			sx={STYLE.container}
		>
			<Box sx={STYLE.sectionText}>
				<Typography
					color="white"
					variant="h1"
					component="h1"
					sx={STYLE.title}
				>
					<strong >
						{homeText.Hero.titleAccent}
					</strong><br />
					{homeText.Hero.title}
				</Typography>
				<Typography
					color="white"
					sx={STYLE.description}
				>


					{homeText.Hero.body}

				</Typography>
				<Button
					type="submit"
					size="small"
					variant="contained"
					sx={STYLE.button}
				>
					{homeText.Hero.ctaLabel}
				</Button>
			</Box>
			<Box sx={STYLE.sectionVideo}>
				<video
					autoPlay
					loop
					style={{ width: "100%" }}
					muted
					playsInline={true}
					controls={false}
					src="/videos/hero.mp4"
				/>
			</Box>
		</Stack>
	);
};
