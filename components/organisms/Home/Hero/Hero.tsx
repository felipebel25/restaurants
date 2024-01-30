import { FunctionComponent, useContext } from "react";

import { Button, Stack, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import { homeText } from "english/homeCopy";
import { ModalContext } from "context/ModalContext/ModalContext";

import STYLE from "./styles";

export const Hero: FunctionComponent = ({ }) => {
	const { onOpen } = useContext(ModalContext)
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
					onClick={onOpen}
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
					src="/videos/hero.m4v"
				/>
			</Box>
		</Stack>
	);
};
