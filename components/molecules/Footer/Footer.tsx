import EatsyLogo from "@icons/EatsyLogo";
import {
	FacebookRounded,
	Instagram,
	Twitter,
	YouTube,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	IconButton,
	Link,
	Stack,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Views from "pages/api/Views";
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	const THEME = useTheme();

	const phoneView = useMediaQuery(THEME.breakpoints.down("sm"));
	const mediumView = useMediaQuery(THEME.breakpoints.down("md"));
	return (
		<Box
			component={"footer"}
			className="dark-textured-bg"
			sx={{
				paddingTop: "5rem",
				paddingBottom: "3.25rem",
			}}
		>
			<Container>
				<Stack
					direction={"column"}
					gap={"2.5rem"}
				>
					<EatsyLogo size={"5.87rem"} />

					<Stack
						direction={"row"}
						spacing={"2rem"}
						justifyContent={"space-between"}
					>
						{/* <EatsyLogo size={phoneView ? 64 : 96} />
						<Typography
							variant="overline"
							color="inherit"
						>
							2023 - Eatsy Orders
						</Typography> */}
						{/* <Stack
							direction={"row"}
							spacing={"1.5rem"}
						>
							<IconButton color="inherit">
								{" "}
								<FacebookRounded />
							</IconButton>
							<IconButton color="inherit">
								{" "}
								<Instagram />
							</IconButton>
							<IconButton color="inherit">
								{" "}
								<Twitter />
							</IconButton>
							<IconButton color="inherit">
								{" "}
								<YouTube />
							</IconButton>
						</Stack> */}

						<Stack spacing={"1.5rem"}>
							<Typography
								variant="h6"
								color="inherit"
							>
								Contact
							</Typography>
							<Stack spacing={"0.5rem"}>
								<Typography
									variant="subtitle1"
									color="inherit"
								>
									support@eatsyorders.com
								</Typography>
								<Typography
									variant="subtitle1"
									color="inherit"
								>
									<strong>Sales:</strong> +1 555 5555
								</Typography>
								<Typography
									variant="subtitle1"
									color="inherit"
								>
									<strong>Support:</strong> +1 555 5555{" "}
								</Typography>
							</Stack>
						</Stack>

						<Stack spacing={"1.5rem"}>
							<Typography
								variant="h6"
								color="inherit"
							>
								Sitemap
							</Typography>
							<Stack spacing={"0.5rem"}>
								{Views.map((link, id) => (
									<Link
										href={link.link}
										color="inherit"
										key={id}
									>
										{link.page}
									</Link>
								))}
							</Stack>
						</Stack>

						<Stack spacing={"1.5rem"}>
							<Typography
								variant="h6"
								color="inherit"
							>
								Legal
							</Typography>
							<Stack spacing={"0.5rem"}>
								<Link color="inherit">Refund Policy</Link>
								<Link color="inherit">Terms</Link>
								<Link color="inherit">Privacy Policy</Link>
								<Link color="inherit">Cookie notice</Link>
							</Stack>
						</Stack>

						<Stack
							spacing={"2rem"}
							width={"23rem"}
						>
							<Stack spacing={"1rem"}>
								<Typography
									variant="h6"
									color="inherit"
								>
									Newsletter
								</Typography>
								<Typography
									variant="body1"
									color="inherit"
								>
									Subscribe to our newsletter to get your weekly dose of news
									updates, tips and special offers.
								</Typography>
							</Stack>
							<Stack spacing={"1rem"}>
								<TextField
									prefix="sd"
									variant="outlined"
									label="Email"
								/>

								<Button
									color={"secondary"}
									size={"small"}
									variant="contained"
								>
									Subscribe
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
