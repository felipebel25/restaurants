import CardUser from "@components/atoms/Cards/CardUser/CardUser";
import { HomeSectionProps } from "@components/templates/Home/Home";
import { Stack, Typography } from "@mui/material";
import { homeText } from "lang/english/homeCopy";
import { FunctionComponent } from "react";

const ClientOpinions: FunctionComponent<HomeSectionProps> = () => {
	return (
		<Stack
			spacing={"4rem"}
			paddingBottom={"5.375rem "}
			alignItems={"center"}
		>
			<Typography variant="h3">{homeText.Reviews.title}</Typography>
			<Stack
				gap={"2.41rem"}
				width={"100%"}
				direction={"row"}
				flexWrap={"wrap"}
				justifyContent={"space-around"}
			>
				{homeText.Reviews.users.map((review, index) => (
					<CardUser
						key={index}
						name={review.name}
						position={review.position}
						description={review.review}
						image={review.profilePicture}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default ClientOpinions;
