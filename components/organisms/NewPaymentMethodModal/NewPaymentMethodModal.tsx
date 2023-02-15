import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCardIcon from "@mui/icons-material/AddCard";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { FunctionComponent, useEffect, useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import Tabs from "@mui/material/Tabs";
import PaymentMethodType from "../../../types/PaymentMethodType";

import { Box } from "@mui/material";
import {
	DesktopDatePicker,
	LocalizationProvider,
	MobileDatePicker,
} from "@mui/x-date-pickers";

interface NewPaymentMethodModalProps {
	CloseCallback: () => void;
	SuccessCallback: (method: PaymentMethodType) => void;
}

const NewPaymentMethodModal: FunctionComponent<NewPaymentMethodModalProps> = ({
	CloseCallback,
	SuccessCallback,
}) => {
	const [methodData, SetMethodData] = useState<PaymentMethodType>({
		method: "ACH",
		ACHData: {},
		CardData: {},
	});

	const handleMethodChange = (
		e: React.SyntheticEvent,
		newValue: "ACH" | "Credit Card" | "Debit Card"
	) => {
		SetMethodData({ ...methodData, method: newValue });
	};

	const handleExpirationDateChange = (date: moment.Moment | null) => {
		if (!date) return;

		SetMethodData({
			...methodData,
			CardData: {
				...methodData.CardData,
				expirationDate: date.format("YYYY-MM"),
			},
		});
	};

	const ACHForm = (
		<>
			<TextField
				name="routing-number"
				label="Routing Number"
				required={true}
				type="number"
				value={methodData.ACHData.routingNumber}
				onChange={(e) => {
					const routingNumber = parseInt(e.target.value);
					if (isNaN(routingNumber)) return;

					SetMethodData({
						...methodData,
						ACHData: {
							...methodData.ACHData,
							routingNumber: routingNumber,
						},
					});
				}}
			/>

			<TextField
				name="account-number"
				label="Account Number"
				required={true}
				type="number"
				value={methodData.ACHData.accountNumber}
				onChange={(e) => {
					const accountNumber = parseInt(e.target.value);
					if (isNaN(accountNumber)) return;

					SetMethodData({
						...methodData,
						ACHData: {
							...methodData.ACHData,
							accountNumber: accountNumber,
						},
					});
				}}
			/>

			<TextField
				name="confirm-account"
				label="Confirm Account Number"
				required={true}
				type="number"
				value={methodData.ACHData.accountConfirmation}
				onChange={(e) => {
					const accountNumber = parseInt(e.target.value);
					if (isNaN(accountNumber)) return;

					SetMethodData({
						...methodData,
						ACHData: {
							...methodData.ACHData,
							accountConfirmation: accountNumber,
						},
					});
				}}
			/>

			<FormControl>
				<InputLabel required={true}>Account Type</InputLabel>
				<Select
					label={"Account Type"}
					required={true}
					value={methodData.ACHData.accountType}
					onChange={(e) => {
						SetMethodData({
							...methodData,
							ACHData: {
								...methodData.ACHData,
								accountType: e.target.value,
							},
						});
					}}
				>
					<MenuItem value={"Checking"}>Checking</MenuItem>
					<MenuItem value={"Debit"}>Debit</MenuItem>
					<MenuItem value={"Credit"}>Credit</MenuItem>
				</Select>
			</FormControl>
		</>
	);
	const CardForm = (
		<>
			<TextField
				name="name-on-card"
				label="Name on card"
				required={true}
				value={methodData.CardData.nameOnCard}
				onChange={(e) => {
					SetMethodData({
						...methodData,
						CardData: {
							...methodData.CardData,
							nameOnCard: e.target.value,
						},
					});
				}}
			/>
			<Box
				display={"flex"}
				gap={3}
			>
				<TextField
					name="card-number"
					fullWidth={true}
					type={"number"}
					label="Card number"
					required={true}
					value={methodData.CardData.cardNumber}
					onChange={(e) => {
						const routingNumber = parseInt(e.target.value);
						if (isNaN(routingNumber)) return;

						SetMethodData({
							...methodData,
							CardData: {
								...methodData.CardData,
								cardNumber: routingNumber,
							},
						});
					}}
				/>
				<TextField
					name="card-ccv"
					sx={{ width: 100 }}
					type={"number"}
					label="CCV"
					required={true}
					value={methodData.CardData.ccv}
					onChange={(e) => {
						const ccv = parseInt(e.target.value);
						if (isNaN(ccv)) return;

						SetMethodData({
							...methodData,
							CardData: {
								...methodData.CardData,
								ccv: ccv,
							},
						});
					}}
				/>
			</Box>

			<LocalizationProvider dateAdapter={AdapterMoment}>
				<DesktopDatePicker
					views={["month", "year"]}
					label="Expiration Date"
					inputFormat="MM/YYYY"
					value={methodData.CardData?.expirationDate}
					onChange={handleExpirationDateChange}
					renderInput={(params) => (
						<TextField
							name="expiration-date"
							sx={{ display: { xs: "none", md: "flex" } }}
							required={true}
							{...params}
						/>
					)}
				/>

				<MobileDatePicker
					views={["month", "year"]}
					label="Expiration Date"
					inputFormat="MM/YYYY"
					value={methodData.CardData?.expirationDate}
					onChange={handleExpirationDateChange}
					renderInput={(params) => (
						<TextField
							sx={{ display: { md: "none" } }}
							required={true}
							{...params}
						/>
					)}
				/>
			</LocalizationProvider>
		</>
	);

	return (
		<Dialog
			disableScrollLock={true}
			open={true}
			onClose={CloseCallback}
			PaperProps={{
				sx: { maxWidth: 540, flexGrow: 1, paddingInline: 1, paddingBlock: 3 },
			}}
		>
			<DialogTitle
				justifyContent="space-between"
				display={"flex"}
				alignItems="center"
			>
				<Typography
					variant="h6"
					color={"GrayText"}
				>
					New payment method
				</Typography>
				<IconButton
					aria-label="close"
					onClick={CloseCallback}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>

			<DialogContent>
				<Box
					sx={{ display: "flex", flexDirection: "column", gap: 5 }}
					component="form"
					onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						SuccessCallback(methodData);
					}}
				>
					<Tabs
						sx={{ flexShrink: 0 }}
						variant="fullWidth"
						value={methodData.method}
						onChange={handleMethodChange}
					>
						<Tab
							value={"ACH"}
							icon={<AccountBalanceIcon />}
							iconPosition={"start"}
							label={<b>ACH</b>}
						/>
						<Tab
							value={"Credit Card"}
							icon={<CreditCardIcon />}
							iconPosition={"start"}
							label={<b>Debit Card</b>}
						/>
						<Tab
							value={"Debit Card"}
							icon={<CreditCardIcon />}
							iconPosition={"start"}
							label={<b>Credit Card</b>}
						/>
					</Tabs>

					{(() => {
						switch (methodData.method) {
							case "ACH":
								return ACHForm;
							case "Credit Card":
							case "Debit Card":
								return CardForm;
						}
					})()}

					<Button
						type="submit"
						className="light-textured-bg "
						fullWidth={true}
						variant={"contained"}
						size={"small"}
						startIcon={<AddCardIcon />}
					>
						<b>Save payment method</b>
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default NewPaymentMethodModal;
