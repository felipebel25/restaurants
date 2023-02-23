import React, { FunctionComponent } from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
	Link,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { User, EatsyLogo } from "@icons/index";

const links = [
	{ page: "Home", link: "/" },
	{ page: "Solutions", link: "/solutions" },
	{ page: "Plans", link: "/plans" },
	{ page: "Company", link: "/company" },
];

interface TopNavBarProps {}

const TopNavBar: FunctionComponent<TopNavBarProps> = () => {
	const theme = useTheme();
	const xsBP = useMediaQuery("(min-width:600px)");
	const MotionAppBar = motion(AppBar);
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<MotionAppBar
				elevation={0}
				sx={{ position: "fixed", zIndex: 100, width: "100vw" }}
				position="static"
				className={`${theme.palette.mode}-textured-bg`}
			>
				<Container maxWidth="xl">
					<Toolbar
						sx={{
							justifyContent: { lg: "flex-start", xs: "space-between" },
							gap: 4,
							py: 3,
						}}
					>
						<EatsyLogo width={xsBP ? 100 : 80} />

						{/*/////////// Desktop////////////////*/}

						<Box
							sx={{
								direction: "row",
								display: { xs: "none", lg: "flex" },
								gap: 4,
							}}
						>
							{links.map((link, id) => (
								<Link
									underline="hover"
									sx={{ textUnderlineOffset: 8, fontSize: 16, fontWeight: 500 }}
									variant={"overline"}
									href={link.link}
									color="white"
									key={id}
									onClick={handleCloseNavMenu}
								>
									{link.page}
								</Link>
							))}
						</Box>

						<Stack
							direction={"row"}
							columnGap={5}
							sx={{
								flexGrow: 1,
								justifyContent: "flex-end",
								display: { xs: "none", lg: "flex" },
							}}
						>
							<Button
								size="small"
								sx={{ textTransform: "none" }}
								color="white"
								variant="outlined"
								startIcon={<User />}
							>
								<Link
									href="/registration"
									variant="h6"
									color={"#FFFFFF"}
								>
									Sign In
								</Link>
							</Button>

							<Button
								size="small"
								disableElevation={true}
								sx={{ textTransform: "none" }}
								color="white"
								variant="contained"
							>
								<Link
									href="/registration"
									variant="h6"
								>
									Get a Free demo!
								</Link>
							</Button>
						</Stack>

						{/*/////////// Mobile////////////////*/}

						<Box sx={{ display: { xs: "flex", lg: "none" } }}>
							<IconButton
								size="small"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", lg: "none" },
								}}
							>
								{links.map((link, id) => (
									<MenuItem
										key={id}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign="center">{link.page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</MotionAppBar>
		</>
	);
};

export default TopNavBar;
