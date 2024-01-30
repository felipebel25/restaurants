import { FunctionComponent } from "react";
// import { Resend } from "resend";

import { Box, Button, Container, InputAdornment, Link, Stack, TextField, Typography, } from "@mui/material";
import Views from "pages/api/Views";

import EatsyLogo from "@icons/EatsyLogo";
import { EmailOutlined } from "@mui/icons-material";

import { styles } from "./stylesFooter";
import axios from "axios";

interface FooterProps { }

const Footer: FunctionComponent<FooterProps> = () => {
	// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
	const sendEmail = async () => {
		// const data = await axios.post('/api/send');
		// console.log(data);

		// const data = await resend.emails.send({
		// 	from: 'felipemedina.developer@gmail.com',
		// 	to: 'felipe.medina@samgreencorp.com',
		// 	subject: 'Receipt for Your Payment',
		// 	text: "hii! i wanna be a client",
		// 	html:'<p>blasd</p>'
		// });
		// console.log(data);

	}

	return (
		<Box
			component={"footer"}
			sx={styles.footer}
		>
			<Container>
				<Stack
					direction={"column"}
					sx={styles.container}
				>
					<EatsyLogo size={"5.87rem"} />
					<Stack
						direction={"row"}
						spacing={"2rem"}
						justifyContent={"space-between"}
						sx={styles.content}
					>
						<Stack spacing={"1.5rem"} sx={styles.contactSection}>
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
									<strong>Sales:</strong> +1 (929) 413-3080
								</Typography>
								<Typography
									variant="subtitle1"
									color="inherit"
								>
									<strong>Support:</strong> +1 (929) 413-3080{" "}
								</Typography>
							</Stack>
						</Stack>
						<Stack
							sx={styles.siteMapSection}
							spacing={"1.5rem"}
						>
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
						<Stack
							spacing={"1.5rem"}
							sx={styles.legalSection}
						>
							<Typography
								variant="h6"
								color="inherit"
							>
								Legal
							</Typography>
							<Stack spacing={"0.5rem"}>
								{/* <Link color="inherit">Refund Policy</Link> */}
								<Link href="/terms" target="__blank" color="inherit">Terms</Link>
								<Link href="/privacypolicies" target="__blank" color="inherit">Privacy Policy</Link>
								{/* <Link color="inherit">Cookie notice</Link> */}
							</Stack>
						</Stack>
						<Stack
							sx={styles.emailSection}
						>
							<Stack spacing={"1rem"}>
								<Typography
									variant="h6"
									color="inherit"
									sx={styles.emailTitle}
								>
									Newsletter
								</Typography>
								<Typography
									variant="body1"
									color="inherit"
									sx={styles.emailDescription}
								>
									Subscribe to our newsletter to get your weekly dose of news
									updates, tips and special offers.
								</Typography>
							</Stack>
							<Stack
								spacing={"1rem"}

							>
								<TextField
									prefix="sd"
									variant="outlined"
									label="Email"
									InputLabelProps={{
										sx: { color: "white" }
									}}
									required
									color="primary"
									placeholder="Enter your email address"
									sx={styles.input}
									InputProps={{
										sx: { color: "white !important" },
										startAdornment: (
											<InputAdornment position="start">
												<EmailOutlined sx={{ fill: "white" }} />
											</InputAdornment>
										),
									}}
								/>
								<Button
									color={"secondary"}
									size={"small"}
									variant="contained"
									onClick={sendEmail}
								>
									Subscribe
								</Button>
							</Stack>
						</Stack>
					</Stack>
					<Typography>All rights reserved Eatsy Orders® {new Date().getFullYear()}.</Typography>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
