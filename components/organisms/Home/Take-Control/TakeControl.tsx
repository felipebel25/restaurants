import { HomeSectionProps } from "@components/templates/Home/Home";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { homeText } from "lang/english/homeCopy";
import Image, { StaticImageData } from "next/image";
import CardImage from "public/images/home/take-control/card0.png";
import { FunctionComponent, useState } from "react";
import SwipeableViews from "react-swipeable-views";

export const TakeControl: FunctionComponent<HomeSectionProps> = ({
	phoneView,
}) => {
	const Theme = useTheme();
	const [selectedCard, setselectedCard] = useState(0);
	const largeScreen = useMediaQuery(Theme.breakpoints.up("lg"));

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			paddingY="3.25rem"
			alignItems={"center"}
		>
			<Typography variant="h3">
				{homeText.TakeControl.title}
				<span style={{ color: Theme.palette.primary.main }}>
					{" "}
					{homeText.TakeControl.titleAccent}
				</span>
			</Typography>

			<Typography
				sx={{ fontWeight: 400, maxWidth: "70ch", marginTop: "1.38rem" }}
				variant="h6"
			>
				{homeText.TakeControl.body}
			</Typography>

			<Stack
				direction={"row"}
				mt="3.75rem"
				maxWidth={"150%"}
				width={"90vw"}
				spacing={"3rem"}
				justifyContent={"space-around"}
			>
				{!largeScreen && (
					<SwipeableViews
						index={selectedCard}
						onChangeIndex={(index) => {
							setselectedCard(index);
						}}
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
						{homeText.TakeControl.cards.map((card, index) => (
							<TakeControlCard
								selected={index == selectedCard}
								key={index}
								title={card?.title}
								image={card.image}
								description={card?.description}
							/>
						))}
					</SwipeableViews>
				)}

				{largeScreen && (
					<>
						{homeText.TakeControl.cards.map((card, index) => (
							<TakeControlCard
								onClick={() => {
									setselectedCard(index);
								}}
								selected={index == selectedCard}
								key={index}
								title={card?.title}
								image={card.image}
								description={card?.description}
							/>
						))}
					</>
				)}
			</Stack>
		</Box>
	);
}; //Closes TakeControl Component

interface TakeControlCardProps {
	title: string;
	description: string;
	image: StaticImageData;
	selected?: boolean;
	onClick?: () => void;
}

const TakeControlCard: FunctionComponent<TakeControlCardProps> = ({
	title,
	description,
	onClick,
	image,
	selected = false,
}) => {
	return (
		<Box
			onClick={() => {
				onClick && onClick();
			}}
			sx={{
				background: selected
					? " linear-gradient(329deg, rgba(250, 200, 68, 0.25) 0%, rgba(250, 200, 68, 0.11) 100%)"
					: "#ffffff",
				p: "2.75rem",
				textAlign: "center",
				display: "flex",
				flex: 1,

				borderRadius: "1.9375rem",
				boxShadow: selected ? "unset" : "0px 6px 32px 4px rgba(0, 0, 0, 0.05)",
			}}
		>
			<Stack
				spacing="1.88rem"
				alignItems={"center"}
			>
				<Typography
					variant="h5"
					sx={{ fontWeight: 700 }}
				>
					{title}
				</Typography>
				<Typography variant="body2">{description}</Typography>
				<Image
					style={{
						width: "70%",
						height: "fit-content",
						boxShadow: "0px 6px 32px 4px rgba(0, 0, 0, 0.05)",
					}}
					src={image}
					alt="CardImage"
				/>
			</Stack>
		</Box>
	);
};

export default TakeControlCard;
