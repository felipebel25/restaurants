// Core
import { FunctionComponent, useState } from "react";

// Icons
import { ArrowForward, Facebook, Google } from "@mui/icons-material";
import { MuiTelInput } from "mui-tel-input";
// MUI Components
import {
	Box,
	Button,
	Card,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	Link,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

// Types
import UserCredentialsType from "types/UserCredentialsType";

// Styles
import styles from "./RegistrationCard.module.css";
import { Container } from "@mui/system";
import { Bold } from "@components/atoms/Bold/Bold";

interface RegistrationCardProps {
	OnSubmit: (credentials: UserCredentialsType) => void;
}

const RegistrationCard: FunctionComponent<RegistrationCardProps> = ({
	OnSubmit,
}) => {
	const [userData, setUserData] = useState<UserCredentialsType>({
		businessName: "",
		busineesAddress: "",
		name: "",
		lastName: "",
		email: "",
		phone: "+1",
		pass: "",
		passVerification: "",
		restaurant: "",
		numberOfLocations: 1,
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
			sx={{ p: { xs: 3, md: 6 }, width: "100%", maxWidth: 550, borderRadius: 3, border: "1px solid", borderColor: "primary.main" }}
			className={styles.Card}
		>
			<Stack spacing={4}>
				<Box>
					<Typography variant="h6">Sign your</Typography>
					<Typography
						color={"primary"}
						variant="h5"
					>
						Restaurant
					</Typography>
				</Box>

				<Stack
					component="form"
					spacing={3}
					onSubmit={HandleSubmit}
				>
					<TextField
						label="Business Name"
						value={userData.businessName}
						onChange={HandleChange}
						name={"businessName"}
						type={"text"}
						fullWidth={true}
						required={true}
						variant="standard"
					/>

					<TextField
						label="Business Adress"
						value={userData.busineesAddress}
						onChange={HandleChange}
						name={"busineesAddress"}
						type={"text"}
						fullWidth={true}
						required={true}
						variant="standard"
					/>

					<TextField
						label="Flat/Office (optional)"
						value={userData.flat_office}
						onChange={HandleChange}
						name={"flat_office"}
						type={"text"}
						fullWidth={true}
						variant="standard"
					/>

					<Stack
						direction={"row"}
						gap={5}
					>
						<TextField
							label="Name"
							value={userData.name}
							onChange={HandleChange}
							name={"name"}
							fullWidth={true}
							required={true}
							variant="standard"
						/>

						<TextField
							label="Last Name"
							value={userData.lastName}
							onChange={HandleChange}
							name={"lastName"}
							fullWidth={true}
							required={true}
							variant="standard"
						/>
					</Stack>

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

					<MuiTelInput
						label="Phone Number"
						value={userData.phone}
						flagSize={"small"}
						defaultCountry={"US"}
						onChange={(value) => {
							setUserData({
								...userData,
								phone: value,
							});
						}}
						name={"phone"}
						fullWidth={true}
						required={true}
						variant="standard"
					></MuiTelInput>

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

					<FormControl>
						<InputLabel required={true}>Restaurant</InputLabel>
						<Select
							label={"Restaurant"}
							required={true}
							value={userData.restaurant}
							onChange={(e) => {
								setUserData({
									...userData,
									restaurant: e.target.value,
								});
							}}
						>
							<MenuItem value={"McDonalds"}>McDonalds</MenuItem>
							<MenuItem value={"KFC"}>KFC</MenuItem>
						</Select>
					</FormControl>

					<FormControl>
						<InputLabel required={true}>Number of Locations</InputLabel>
						<Select
							label={"Number of locations"}
							required={true}
							value={userData.numberOfLocations}
							onChange={(e) => {
								setUserData({
									...userData,
									numberOfLocations: Number(e.target.value),
								});
							}}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
						</Select>
					</FormControl>

					<FormControl>
						<InputLabel>Food</InputLabel>
						<Select
							label={"Food"}
							value={userData.food}
							onChange={(e) => {
								setUserData({
									...userData,
									food: e.target.value,
								});
							}}
						>
							<MenuItem value={"Mexican"}>Mexican</MenuItem>
							<MenuItem value={"Italian"}>Italian</MenuItem>
							<MenuItem value={"Oriental"}>Oriental</MenuItem>
						</Select>
					</FormControl>

					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label={
							<Typography variant="caption">
								I have read and agree to all the <Bold>Terms and Conditions</Bold>
							</Typography>
						}
					/>

					<Button
						type="submit"
						variant={"contained"}
						endIcon={<ArrowForward />}
					>
						Sign Up
					</Button>

					<Typography alignSelf={"center"}>
						Already have an accion{" "}
						<Link>
							<b>Sign In</b>
						</Link>
					</Typography>
				</Stack>
			</Stack>
		</Card>
	);
}; //Closes RegistrationCard component

export default RegistrationCard;
