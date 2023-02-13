import React, { FunctionComponent, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
	Button,
	Card,
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Step,
	StepLabel,
	Stepper,
	TextField,
	Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ArrowForward from "@mui/icons-material/ArrowForward";
import PersonalInformationSection from "./sections/personal-information";
import RestaurantInfoSection from "./sections/restaurant-info";
import TaxationInformation from "./sections/tax-information";
import TermsConditionsSection from "./sections/terms-information";
import PlanSelectionSection from "./sections/plan-selection";

interface WizardStepType {
	title: string;
	label: string;
	component: JSX.Element;
}

interface CompleteInformationPageProps {}

const CompleteInformationPage: FunctionComponent<
	CompleteInformationPageProps
> = () => {
	const AnimatedCard = motion(Card);
	const [activeStep, setActiveStep] = useState(0);

	const steps: Array<WizardStepType> = [
		{
			title: "Select your",
			label: "PLAN SELECTION",
			component: <PlanSelectionSection />,
		},
		{
			title: "Select your",
			label: "DEVICE REQUEST",
			component: <>WIP</>,
		},
		{
			title: "Select your",
			label: "PAYMENT INFO",
			component: <>WIP</>,
		},
		{
			title: "Complete your",
			label: "Personal Information",
			component: <PersonalInformationSection />,
		},
		{
			title: "Complete your",
			label: "Restaurant Info",
			component: <RestaurantInfoSection />,
		},
		{
			title: "Complete your",
			label: "Tax Info",
			component: <TaxationInformation />,
		},
		{
			title: "Accept the",
			label: "Terms and Conditions",
			component: <TermsConditionsSection />,
		},
	];

	const IsLastStep = () => {
		return activeStep + 1 == steps.length;
	};

	const HandleNextStep = () => {
		if (IsLastStep()) {
		} else {
			setActiveStep(activeStep + 1);
		}
	};

	return (
		<Box
			className="dark-textured-bg"
			display={"flex"}
			alignItems={"center"}
			flexDirection={"column"}
			gap={6}
			sx={{ minHeight: "100vh", paddingBottom: 5 }}
		>
			<Box py={1.5}>
				<Typography
					variant="h6"
					noWrap={true}
				>
					<strong>
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE • VALUE •
						VALUE • VALUE • VALUE • VALUE •
					</strong>
				</Typography>
			</Box>

			<Box
				sx={{
					maxWidth: "536px",
					width: "100%",

					justifyContent: "center",
					display: "flex",
					alignItems: "center",
					position: "relative",
				}}
			>
				<AnimatePresence mode="wait">
					<AnimatedCard
						key={activeStep}
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ x: -500, opacity: 0 }}
						transition={{ duration: 0.2 }}
						sx={{
							flexGrow: 1,
							display: "flex",
							flexDirection: "column",
							paddingInline: 5,
							paddingTop: 6,
							paddingBottom: 3,
							gap: 5,
						}}
					>
						<Box>
							{steps[activeStep].title && (
								<Typography variant="h6">{steps[activeStep].title}</Typography>
							)}

							{steps[activeStep].label && (
								<Typography variant="h5">
									<strong>{steps[activeStep].label}</strong>
								</Typography>
							)}
						</Box>

						<Stack spacing={4}>{steps[activeStep].component}</Stack>

						<Button
							className="light-textured-bg "
							variant="contained"
							endIcon={<ArrowForward />}
							fullWidth={true}
							onClick={HandleNextStep}
						>
							<strong> {IsLastStep() ? "Finish" : "Continue"}</strong>
						</Button>
					</AnimatedCard>
				</AnimatePresence>

				<Stepper
					sx={{
						position: "absolute",
						right: -40,
						top: 40,
						translate: "100%",
						display: { md: "block", xs: "none" },
					}}
					orientation={"vertical"}
					activeStep={activeStep}
				>
					{steps.map((step, index) => (
						<Step key={index}>
							<StepLabel onClick={() => setActiveStep(index)}>
								<Typography
									variant="overline"
									sx={{ color: index == activeStep ? "salmon" : "#9CA3AF" }}
								>
									{step.label}
								</Typography>
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</Box>
		</Box>
	);
};

export default CompleteInformationPage;
