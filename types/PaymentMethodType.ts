export default interface PaymentMethodType {
	method: "ACH" | "Credit/Debit Card";
	ACHData: {
		routingNumber?: number;
		accountNumber?: number;
		accountConfirmation?: number;
		accountType?: "Checking" | "Savings" | string;
	};
	CardData: {
		nameOnCard?: string;
		cardNumber?: number;
		ccv?: number;
		expirationDate?: string;
	};
}
