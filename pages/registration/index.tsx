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
				className={"light-textured-bg "}
				sx={{ py: 10 }}
			>
				<Container maxWidth={"lg"}>
					<Stack
						direction={{ xs: "column", lg: "row" }}
						spacing={10}
						alignItems={"center"}
					>
						<Stack
							maxWidth={600}
							spacing={5}
						>
							<Typography variant="h2">
								Growing your restaurant was never this Eatsy
							</Typography>
							<Typography variant="h6">
								PDF menus are from the past. Run your restaurant and enhance
								your brand with the power of a 100% interactive online menu.{" "}
							</Typography>

							<List>
								<ListItem sx={{ py: 0 }}>
									<ListItemText primary={"CRM Administrative Panel"} />
								</ListItem>
								<ListItem sx={{ py: 0 }}>
									<ListItemText
										primary={"Change of products and prices in real time"}
									/>
								</ListItem>
								<ListItem sx={{ py: 0 }}>
									<ListItemText
										primary={"Online Menu Optimized for mobile devices"}
									/>
								</ListItem>
								<ListItem sx={{ py: 0 }}>
									<ListItemText primary={"Take orders easily"} />
								</ListItem>
								<ListItem sx={{ py: 0 }}>
									<ListItemText
										primary={"Track the behavior of your customers in the menu"}
									/>
								</ListItem>
								<ListItem sx={{ py: 0 }}>
									<ListItemText
										primary={"Obtain relevant information about your menu"}
									/>
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
