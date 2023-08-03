import CardSection from "@components/atoms/Cards/CardSections/CardSection";
import { HomeSectionProps } from "@components/templates/Home/Home";
import { Stack } from "@mui/material";
import { homeText } from "lang/english/homeCopy";
import { FunctionComponent } from "react";

const Features: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {
	return (
		<Stack
			direction="row"
			justifyContent={"space-around"}
			flexWrap={"wrap"}
			paddingY={"7rem"}
			rowGap={"5rem"}
			columnGap={"2rem"}
		>
			{homeText.Features.cards.map((card, index) => (
				<CardSection
					key={index}
					icon={card.icon}
					title={card.title}
					text={card.description}
					btnColor={card.color}
				/>
			))}
		</Stack>
	);
};

export default Features;
