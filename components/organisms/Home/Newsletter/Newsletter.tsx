import { HomeSectionProps } from "@components/templates/Home/Home";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import { homeText } from "english/homeCopy";
import { FunctionComponent } from "react";

const Newsletter: FunctionComponent<HomeSectionProps> = () => {
	return (
		<Box
			className="light-textured-bg"
			sx={{ paddingY: "5rem" }}
		>
			<Container>
				<Card
					className="light-textured-bg"
					sx={{
						paddingY: "5rem",
						borderRadius: "1.875rem",
						background:
							"var(--textures-light, url(<path-to-image>), lightgray 0% 0% / 25px 25px repeat)",
						boxShadow: "0px 4px 83px 7px rgba(105, 29, 0, 0.47)",
					}}
				>
					<Container maxWidth="sm">
						<Stack
							alignItems={"center"}
							spacing={"2rem"}
						>
							<Typography
								variant="h3"
								color={"#fff"}
							>
								{homeText.NewsLetter.title}
							</Typography>
							<Typography
								variant="body1"
								color={"#fff"}
							>
								{homeText.NewsLetter.description}
							</Typography>
							<Button
								size="large"
								variant="contained"
								color="white"
								sx={{ boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)" }}
							>
								{homeText.NewsLetter.ctaLabel}
							</Button>
						</Stack>
					</Container>
				</Card>
			</Container>
		</Box>
	);
};

export default Newsletter;
