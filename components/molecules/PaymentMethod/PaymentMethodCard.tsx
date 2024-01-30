import { Box, Button, Typography } from "@mui/material";
import PaymentMethodType from "../../../types/PaymentMethodType";
import { FunctionComponent } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
interface PaymentMethodCardProps {
	selected: boolean;
	method: PaymentMethodType;
	onClick: () => void;
}

const PaymentMethodCard: FunctionComponent<PaymentMethodCardProps> = ({
	selected,
	method,
	onClick,
}) => {
	return (
		<Button
			sx={{ textTransform: "none", gap: 2 }}
			variant={selected ? "contained" : "outlined"}
			color={selected ? "primary" : "secondary"}
			onClick={onClick}
		>
			{method.method == "ACH" ? (
				<>
					<AccountBalanceIcon fontSize="large" />
					<Box
						flexGrow={1}
						display={"flex"}
						flexDirection="column"
						alignItems="flex-start"
					>
						<Typography variant="body2">{method.method}</Typography>
						<Typography variant="h6">{method.ACHData.accountNumber}</Typography>
					</Box>
				</>
			) : (
				<>
					<CreditCardIcon fontSize="large" />

					<Box
						flexGrow={1}
						display={"flex"}
						flexDirection="column"
						alignItems="flex-start"
					>
						<Typography variant="body2">{method.method}</Typography>
						<Typography variant="h6">{method.CardData.cardNumber}</Typography>
					</Box>
				</>
			)}
		</Button>
	);
};

export default PaymentMethodCard;
