import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FunctionComponent } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface RestaurantInfoSectionProps {}

const RestaurantInfoSection: FunctionComponent<
	RestaurantInfoSectionProps
> = () => {
	return (
		<>
			<Typography variant="overline">Restaurant Info</Typography>
			<Typography variant="body1">
				We need the information of at least one of your locations. Once you have
				access to the dashboard you will be able to add more.
			</Typography>

			<TextField
				label={"Restaurant name"}
				required={true}
			></TextField>

			<Box
				display={"flex"}
				gap={1.5}
			>
				<TextField
					sx={{ flexGrow: 1 }}
					label={"Restaurant address"}
					required={true}
				></TextField>

				<TextField
					sx={{ width: "80px" }}
					label={"Suite"}
				></TextField>
			</Box>

			<Box
				display={"flex"}
				gap={1.5}
			>
				<TextField
					label={"City"}
					required={true}
				></TextField>

				<TextField
					label={"State"}
					required={true}
				></TextField>

				<TextField
					label={"Zip code"}
					required={true}
				></TextField>
			</Box>

			<TextField
				label={"Phone"}
				required={true}
			></TextField>

			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={
					<Typography>
						I{" "}
						<i>
							<b>Juan David Payán</b>
						</i>
						, am authorized to bind this business
						<i>
							<b>(El Pasito Colombiano) </b>
						</i>
						into legal agreements.
					</Typography>
				}
			/>
		</>
	);
};

export default RestaurantInfoSection;
