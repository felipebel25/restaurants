import FormControl from "@mui/material/FormControl";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FunctionComponent } from "react";

interface PersonalInformationSectionProps {}

const PersonalInformationSection: FunctionComponent<
	PersonalInformationSectionProps
> = () => {
	return (
		<>
			<Typography variant="overline">Your info</Typography>
			<TextField
				label={"Fullname"}
				required={true}
			></TextField>
			<TextField
				label={"Email"}
				required={true}
			></TextField>
			<TextField
				label={"Phone"}
				required={true}
			></TextField>

			<FormControl>
				<InputLabel required={true}>Role</InputLabel>
				<Select
					label={"Role"}
					required={true}
				>
					<MenuItem value={1}>CEO</MenuItem>
					<MenuItem value={2}>Programmer</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default PersonalInformationSection;
