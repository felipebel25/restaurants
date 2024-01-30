import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FunctionComponent, useState } from "react";

interface PlanType {
	type: "Free" | "Premium";
	price: number;
	color?:
		| "inherit"
		| "primary"
		| "secondary"
		| "success"
		| "error"
		| "info"
		| "warning";
	features: string[];
}
interface PlanSelectionSectionProps {}

const PlanSelectionSection: FunctionComponent<
	PlanSelectionSectionProps
> = () => {
	const [selectedPlan, SetSelectedPlan] = useState(0);

	const plans: PlanType[] = [
		{
			type: "Free",
			price: 0.0,
			color: "primary",
			features: [
				"Up to 10 employees.",
				"Single menu.",
				"Up to 5 categories.",
				"Up to 20 products.",
				"1gb of data storage.",
			],
		},
		{
			type: "Premium",
			color: "secondary",
			price: 12,
			features: [
				"Up to 50 employees.",
				"Up to 5 menus.",
				"Unlimited amount of categories.",
				"Unlimited amount of products.",
				"Up to 15gb of data storage.",
				"Customizable dashboard styles.",
			],
		},
	];
	return (
		<>
			{plans.map((plan, index) => (
				<Button
					key={index}
					fullWidth={true}
					variant={index == selectedPlan ? "contained" : "outlined"}
					sx={{ textTransform: "none" }}
					color={plan.color}
					onClick={(e) => {
						SetSelectedPlan(index);
					}}
				>
					<Box
						flexGrow={1}
						display={"flex"}
						flexDirection="column"
						gap={index == selectedPlan ? 2 : 0}
						p={index == selectedPlan ? 3 : 0}
					>
						<Box
							display="flex"
							flexGrow={1}
							justifyContent="space-between"
						>
							<Typography variant={index == selectedPlan ? "h5" : "subtitle1"}>
								<b>{plan.type}</b>
							</Typography>

							{index != selectedPlan && (
								<Typography variant="subtitle1">
									<b>{`$${plan.price}`}</b>/mo
								</Typography>
							)}
						</Box>
						<Collapse
							timeout={350}
							in={index == selectedPlan}
						>
							<Stack gap={5}>
								<Stack>
									{index == selectedPlan &&
										plan.features.map((feature, index) => (
											<ListItem
												key={index}
												sx={{
													padding: 0,
													listStyleType: "disc",
													display: "list-item",
												}}
											>
												{feature}
											</ListItem>
										))}
								</Stack>

								<Typography variant="h5">
									<b>{`$${plan.price}`}</b> per Month
								</Typography>
							</Stack>
						</Collapse>
					</Box>
				</Button>
			))}
		</>
	);
};

export default PlanSelectionSection;
