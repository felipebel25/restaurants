import EatsyLogo from "@icons/EatsyLogo";
import {
	FacebookRounded,
	Instagram,
	Twitter,
	YouTube,
} from "@mui/icons-material";
import {
	Box,
	Container,
	IconButton,
	Link,
	Stack,
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
				paddingY: "5rem",
			}}
		>
			<Container>
				<Stack
					direction={phoneView ? "column" : "row"}
					justifyContent={"space-evenly"}
					flexWrap={"wrap"}
					gap={"3.5rem"}
					color={THEME.palette.white.main}
				>
					<Stack
						spacing={"2rem"}
						alignItems={"center"}
					>
						<EatsyLogo width={phoneView ? 64 : 96} />
						<Typography
							variant="overline"
							color="inherit"
						>
							2023 - Eatsy Orders
						</Typography>
						<Stack
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
						</Stack>
					</Stack>

					<Stack spacing={"1.5rem"}>
						<Typography
							variant="h6"
							color="inherit"
						>
							Contact
						</Typography>
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

					<Stack spacing={"1.5rem"}>
						<Typography
							variant="h6"
							color="inherit"
						>
							Sitemap
						</Typography>

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

					<Stack spacing={"1.5rem"}>
						<Typography
							variant="h6"
							color="inherit"
						>
							Legal
						</Typography>
						<Link color="inherit">Refund Policy</Link>
						<Link color="inherit">Terms</Link>
						<Link color="inherit">Privacy Policy</Link>
						<Link color="inherit">Cookie notice</Link>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
