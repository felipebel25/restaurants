import { Box, Button, Stack, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import { FunctionComponent, useState } from "react";
import NewPaymentMethodModal from "../NewPaymentMethodModal/NewPaymentMethodModal";
import PaymentMethodType from "../../../types/PaymentMethodType";
import PaymentMethodCard from "@components/molecules/PaymentMethod/PaymentMethodCard";

interface PaymentMethodSelectionProps {}

const PaymentMethodSelection: FunctionComponent<
	PaymentMethodSelectionProps
> = () => {
	const [modalOpen, SetModalOpen] = useState(false);
	const [paymentMethods, SetPaymentMethods] = useState<PaymentMethodType[]>([]);
	const [selectedMethod, SetSelectedMethod] = useState(0);

	const OnPaymentMethodAdded = (method: PaymentMethodType) => {
		if (!method) return;
		SetPaymentMethods([...paymentMethods, method]);
		SetModalOpen(false);
	};
	return (
		<>
			<Typography variant="overline">Select a payment method</Typography>

			{paymentMethods.length == 0 ? (
				<>
					<Box
						component="img"
						draggable={false}
						src="/PNG/NoPaymentMethod.png"
						sx={{ width: 180, alignSelf: "center" }}
					/>
					<Typography
						variant="body1"
						sx={{ textAlign: "center" }}
					>
						There is no payment method added to your account.
					</Typography>
				</>
			) : (
				<Stack gap={1}>
					{paymentMethods.map((method, index) => (
						<PaymentMethodCard
							key={index}
							onClick={() => SetSelectedMethod(index)}
							method={method}
							selected={selectedMethod == index}
						/>
					))}
				</Stack>
			)}

			<Button
				startIcon={<AddCardIcon />}
				variant="contained"
				color="secondary"
				size="small"
				onClick={() => SetModalOpen(true)}
			>
				Add a payment method
			</Button>
			{modalOpen && (
				<NewPaymentMethodModal
					CloseCallback={() => SetModalOpen(false)}
					SuccessCallback={OnPaymentMethodAdded}
				></NewPaymentMethodModal>
			)}
		</>
	);
};

export default PaymentMethodSelection;
