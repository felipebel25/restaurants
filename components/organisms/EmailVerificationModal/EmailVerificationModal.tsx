import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import {
	Box,
	Button,
	ButtonGroup,
	TextField,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
} from "@mui/material";

import { FunctionComponent, useState } from "react";

interface EmailVerificationModalProps {
	Open: boolean;
	CloseCallback: () => void;
	OnVerification?: (code: number) => void;
}

const EmailVerificationModal: FunctionComponent<
	EmailVerificationModalProps
> = ({ Open, CloseCallback }) => {
	const [codeValue, setCodeValue] = useState("");
	const HandleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCodeValue(event.target.value);
	};
	return (
		<Dialog
			disableScrollLock={true}
			open={Open}
			onClose={CloseCallback}
			PaperProps={{ sx: { maxWidth: 500, paddingInline: 1 } }}
		>
			<DialogTitle
				justifyContent="flex-end"
				display={"flex"}
			>
				<IconButton
					aria-label="close"
					onClick={CloseCallback}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>

			<DialogContent sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 1.5,
					}}
				>
					<MailIcon
						sx={{ fontSize: 48 }}
						color={"primary"}
					/>
					<DialogContentText variant="h6">
						Verify your account
					</DialogContentText>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 1.5,
					}}
				>
					<DialogContentText
						variant="body1"
						textAlign={"center"}
					>
						To make your account as secure as possible, we need to verify it is
						really you!
						<br />
						<br />
						We sent a 6-digit code to:
						<br />
						<strong>andresmasrinsd@sam-green.com.</strong>
						<br />
						<br />
						Be sure to check the spam folder!
					</DialogContentText>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<TextField
						sx={{
							input: {
								textAlign: "center",
								fontWeight: 600,
								fontSize: 24,
								letterSpacing: 10,
							},
						}}
						type={"number"}
						required={true}
						fullWidth={true}
						value={codeValue}
						onChange={(e) => {
							setCodeValue(e.target.value);
						}}
						label={"Enter 6-digit code"}
					/>
					<Button fullWidth={true}>
						<strong>RESEND CODE</strong>{" "}
					</Button>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 1.5,
					}}
				>
					<Button
						className="light-textured-bg "
						fullWidth={true}
						variant={"contained"}
						size={"small"}
					>
						Confirm
					</Button>
					<ButtonGroup
						variant="text"
						color="info"
						size="small"
					>
						<Button>Report a problem</Button>
						<Button>Get Help</Button>
					</ButtonGroup>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default EmailVerificationModal;
