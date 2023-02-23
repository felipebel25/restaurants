import {
	Box,
	Container,
	List,
	ListItem,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";

import { ReactElement, useState } from "react";
import RegistrationCard from "../../components/molecules/RegistrationCard/RegistrationCard";
import EmailVerificationModal from "../../components/organisms/EmailVerificationModal/EmailVerificationModal";
import MainLayout from "../../components/templates/MainLayout/MainLayout";
import UserCredentialsType from "../../types/UserCredentialsType";
import { NextPageWithLayout } from "../_app";

const Registration: NextPageWithLayout = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const OpenModal = () => setModalOpen(true);
	const CloseModal = () => setModalOpen(false);

	const OnFormSubmitted = (credentials: UserCredentialsType) => {
		OpenModal();
	}; //CLoes OnFormSubmitted method

	return (
		<>
			<Box
				className={"light-textured-bg"}
				sx={{ py: 20 }}
			>
				<Container maxWidth={"lg"}>
					<Stack
						direction={{ xs: "column", lg: "row" }}
						alignItems={{ xs: "center", lg: "start" }}
						spacing={10}
					>
						<Stack
							maxWidth={600}
							spacing={5}
							mt={{ xs: 0, lg: 10 }}
						>
							<Typography variant="h2">
								Growing your restaurant was never this Eatsy
							</Typography>
							<Typography variant="h6">
								PDF menus are from the past. Run your restaurant and enhance
								your brand with the power of a 100% interactive online menu.{" "}
							</Typography>

							<List sx={{ pl: 5 }}>
								<ListItem
									sx={{
										padding: 0,
										listStyleType: "disc",
										display: "list-item",
									}}
								>
									<Typography>CRM Administrative Panel</Typography>
								</ListItem>
								<ListItem
									sx={{
										padding: 0,
										listStyleType: "disc",
										display: "list-item",
									}}
								>
									<Typography>
										Change of products and prices in real time
									</Typography>
								</ListItem>
								<ListItem
									sx={{
										padding: 0,
										listStyleType: "disc",
										display: "list-item",
									}}
								>
									<Typography>
										Online Menu Optimized for mobile devices
									</Typography>
								</ListItem>
								<ListItem
									sx={{
										padding: 0,
										listStyleType: "disc",
										display: "list-item",
									}}
								>
									<Typography>Take orders easily</Typography>
								</ListItem>
								<ListItem
									sx={{
										padding: 0,
										listStyleType: "disc",
										display: "list-item",
									}}
								>
									<Typography>
										Track the behavior of your customers in the menu{" "}
									</Typography>
								</ListItem>
								<ListItem
									sx={{
										padding: 0,
										listStyleType: "disc",
										display: "list-item",
									}}
								>
									<Typography>
										Obtain relevant information about your menu
									</Typography>
								</ListItem>
							</List>
						</Stack>
						<RegistrationCard OnSubmit={OnFormSubmitted} />
					</Stack>
				</Container>
			</Box>

			<EmailVerificationModal
				Open={modalOpen}
				CloseCallback={CloseModal}
			/>
		</>
	);
}; //Closes Registration page

Registration.getLayout = function getLayout(page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
}; //Closes Layout helper

export default Registration;
