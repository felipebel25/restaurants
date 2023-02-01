import { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface TermsConditionsSectionProps {}

const TermsConditionsSection: FunctionComponent<
	TermsConditionsSectionProps
> = () => {
	return (
		<>
			<Typography variant="overline">Terms</Typography>

			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={
					<Typography variant="caption">
						I certify that, sit amet, consectetur adipiscing elit. Etiam eu
						turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
						nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
						tellus elit sed risus. Maecenas eget condimentum velit, sit amet
						feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
						enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
					</Typography>
				}
			/>

			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={
					<Typography variant="caption">
						I certify that, sit amet, consectetur adipiscing elit. Etiam eu
						turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
						nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
						tellus elit sed risus. Maecenas eget condimentum velit, sit amet
						feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
						enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
					</Typography>
				}
			/>

			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={
					<Typography variant="caption">
						I certify that, sit amet, consectetur adipiscing elit. Etiam eu
						turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
						nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
						tellus elit sed risus. Maecenas eget condimentum velit, sit amet
						feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
						enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
					</Typography>
				}
			/>
		</>
	);
};

export default TermsConditionsSection;
