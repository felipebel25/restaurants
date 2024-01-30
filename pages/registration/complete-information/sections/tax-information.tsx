import { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface TaxationInformationProps {}

const TaxationInformation: FunctionComponent<TaxationInformationProps> = () => {
	return (
		<>
			<Typography variant="overline">Tax info</Typography>
			<Typography variant="body1">
				We will use this information as a way to fulfill legal requirements and
				to verify your establishment. It is also needed if there is some sort of
				tax we could need you to address.
			</Typography>

			<TextField
				sx={{ flexGrow: 1 }}
				label={"Business entity/Company name"}
				required={true}
				helperText={
					"Be sure this name matches accross the legal documents your company uses"
				}
			/>

			<TextField
				sx={{ flexGrow: 1 }}
				label={"EIN"}
				required={true}
			/>

			<Button
				color="secondary"
				variant="contained"
				size="small"
			>
				verify
			</Button>
		</>
	);
};

export default TaxationInformation;
