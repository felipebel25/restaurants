import { FunctionComponent, MouseEvent, useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppBar, Box, Button, Container, Stack, Toolbar, useTheme, useScrollTrigger, Slide, } from "@mui/material";
import { EatsyLogo } from "@icons/index";

import { ModalContext } from "context/ModalContext/ModalContext";
import { ModalEnterYourContact } from "../Modals";

import { styles } from "./stylesTopNavBar";

interface TopNavBarProps { }

const TopNavBar: FunctionComponent<TopNavBarProps> = () => {
	// const theme = useTheme();
	// const { asPath } = useRouter()
	// const xsBP = useMediaQuery("(min-width:600px)");
	const MotionAppBar = motion(AppBar);
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
		null
	);
	const { onOpen } = useContext(ModalContext)
	const scrollTrigger = useScrollTrigger({
		target: typeof window != "undefined" ? window : undefined,
	});

	// const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
	// const handleCloseNavMenu = () => setAnchorElNav(null);

	// const Theme = useTheme();
	return (
		<>
			<Slide
				appear={false}
				direction="down"
				in={!scrollTrigger}
			>
				<MotionAppBar
					elevation={0}
					position="sticky"
					className={`light-textured-bg`}
				>
					<Container
						maxWidth="xl"
						component={"nav"}
					>
						<Toolbar
							sx={styles.toolBar}
						>
							<EatsyLogo size={"5.25rem"} />
							{/* -------------------------Desktop---------------------------- */}
							<Stack
								flex={1}
								direction={"row"}
								spacing={"2.25rem"}
								sx={{
									display: { xs: "none", md: "flex" },
									justifyContent: 'flex-end'
								}}
							>
								{/*	{Views.map((link, id) => (
								<Link
									underline="hover"
									sx={{
										textUnderlineOffset: 8,
										fontSize: "1rem",
										fontWeight: 500,
									}}
									variant={"overline"}
									href={link.link}
									color={Theme.palette.white.main}
									key={id}
									onClick={handleCloseNavMenu}
								>
									{link.page}
								</Link>
							))}
						</Stack> */}

								{/* <Stack
							direction={"row"}
							columnGap={"2.5rem"}
							sx={{
								justifyContent: "flex-end",
								display: { xs: "none", lg: "flex" },
							}}
						>
							<Button
								size="small"
								disableElevation={true}
								startIcon={<User />}
								color="white"
								variant="text"
								target="__blank"
								href="https://merchants.eatsyorders.com/authentication/login"
							>
								Sign In
							</Button>*/}
								<Button
									size="small"
									disableElevation={true}
									color="white"
									onClick={onOpen}
									variant="contained"
								>
									Get a Free demo!
								</Button>
							</Stack>
							{/*/////////// Mobile////////////////*/}
							<Box sx={styles.containerMobile}>
								<Button
									size="small"
									disableElevation={true}
									color="white"
									sx={styles.button}
									onClick={onOpen}
									variant="contained"
								>
									Get a Free demo!
								</Button>
								{/* <IconButton
									size="small"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									anchorEl={anchorElNav}
									keepMounted
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={styles.menu}
								>
									{Views.map((link, id) => (
										<MenuItem
											key={`${id} ${link.link}`}
											onClick={handleCloseNavMenu}
											sx={asPath === link.link ? styles.menuItemActive : styles.menuItem}
										>
											<Link
												href={link.link}
											>
												{link.page}
											</Link>
										</MenuItem>
									)
									)}
									<Button
										variant="contained"
										sx={styles.button}
										onClick={() => setIsOpenModal(true)}
									>Get a free demo!</Button>
								</Menu> */}
							</Box>

						</Toolbar>
					</Container>
				</MotionAppBar>
			</Slide>
		</>
	);
};

export default TopNavBar;
