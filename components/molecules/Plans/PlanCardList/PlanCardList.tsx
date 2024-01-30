import React, { FunctionComponent } from "react";

import STYLE from "./styles";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import Star from "public/componets/Star";
import PlanCard from "@components/atoms/Cards/PlanCard/PlanCard";
import SwipeableViews from "react-swipeable-views";
import { plansText } from "english/plansCopy";

interface PlanCardListProps { }
const PlanCards = () => {
	return (
		<>
			{plansText.Plans.map((plan, index) => (
				<PlanCard
					key={index}
					data={plan.features}
					title={plan.name}
					text={plan.title}
					btnColor={plan.color}
					iconColor="#FAC844"
					icon={plan.starred && Star}
				/>
			))}
		</>
	)
}
export const PlanCardList: FunctionComponent<PlanCardListProps> = ({ }) => {
	const THEME = useTheme();
	const mediumScreen = useMediaQuery(THEME.breakpoints.down("md"));



	return (
		<>
			{/* {mediumScreen ? (
				<SwipeableViews
					onChangeIndex={(index) => { }}
					resistance
					enableMouseEvents
					animateHeight
					slideStyle={{
						padding: 24,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<PlanCards />
				</SwipeableViews>
			) : (
				<Stack
					direction={"row"}
					spacing={"1rem"}
					alignItems={"flex-end"}
					justifyContent={"space-around"}
				>
					<PlanCards />
				</Stack>
			)} */}
		</>
	);
};
