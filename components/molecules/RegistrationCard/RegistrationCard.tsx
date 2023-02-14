// Core
import { FunctionComponent, useState } from "react";

// Icons
import { ArrowForward, Facebook, Google } from "@mui/icons-material";

// MUI Components
import {
	Box,
	Button,
	Card,
	Link,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

// Types
import UserCredentialsType from "types/UserCredentialsType";

// Styles
import styles from "./RegistrationCard.module.css";

interface RegistrationCardProps {
	OnSubmit: (credentials: UserCredentialsType) => void;
}

const RegistrationCard: FunctionComponent<RegistrationCardProps> = ({
	OnSubmit,
}) => {
	const [userData, setUserData] = useState<UserCredentialsType>({
		email: "",
		phone: 0,
		pass: "",
		passVerification: "",
	});

	const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		OnSubmit(userData);
	}; //Closes HandleSubmit method

	const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
	}; //Closes HandleChange method

	return (
		<Card
			elevation={12}
			sx={{ p: 5, width: 500, borderRadius: 3 }}
			className={styles.Card}
		>
			<Stack spacing={4}>
				<Box>
					<Typography variant="h6">Sign your</Typography>
					<Typography variant="h5">Restaurant</Typography>
				</Box>

				<Stack
					component="form"
					spacing={3}
					onSubmit={HandleSubmit}
				>
					<TextField
						label="Email Address"
						value={userData.email}
						onChange={HandleChange}
						name={"email"}
						type={"email"}
						fullWidth={true}
						required={true}
						variant="standard"
					/>

					<TextField
						label="Phone Number"
						value={userData.phone}
						onChange={HandleChange}
						name={"phone"}
						type={"tel"}
						fullWidth={true}
						required={true}
						variant="standard"
					/>

					<TextField
						label="Password"
						value={userData.pass}
						onChange={HandleChange}
						name={"pass"}
						type={"password"}
						fullWidth={true}
						required={true}
						variant="standard"
					/>

					<TextField
						label="Confirm Password"
						value={userData.passVerification}
						onChange={HandleChange}
						name={"passVerification"}
						type={"password"}
						fullWidth={true}
						required={true}
						variant="standard"
					/>

					<Button
						type="submit"
						variant={"contained"}
						endIcon={<ArrowForward />}
					>
						Sign Up
					</Button>
				</Stack>

				<Typography
					textAlign={"center"}
					variant="overline"
				>
					-OR-
				</Typography>

				<Stack spacing={1.5}>
					<Link
						color="inherit"
						variant="body2"
						sx={{ textDecoration: "none" }}
					>
						<Button
							sx={{ textTransform: "none" }}
							fullWidth={true}
							color="inherit"
							size="small"
							variant={"outlined"}
							startIcon={<Google />}
						>
							Sign in with Google
						</Button>
					</Link>

					<Link
						color="inherit"
						variant="body2"
						sx={{ textDecoration: "none" }}
					>
						<Button
							sx={{ textTransform: "none" }}
							fullWidth={true}
							color="inherit"
							size="small"
							variant={"outlined"}
							startIcon={<Facebook />}
						>
							Sign In with Facebook
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Card>
	);
}; //Closes RegistrationCard component

export default RegistrationCard;
