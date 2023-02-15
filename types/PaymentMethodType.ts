export default interface PaymentMethodType {
	method: "ACH" | "Credit Card" | "Debit Card";
	ACHData: {
		routingNumber?: number;
		accountNumber?: number;
		accountConfirmation?: number;
		accountType?: "Checking" | "Debit Card" | "Credit Card" | string;
	};
	CardData: {
		nameOnCard?: string;
		cardNumber?: number;
		ccv?: number;
		expirationDate?: string;
	};
}
