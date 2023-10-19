import { Stack, Typography } from "@mui/material";

import CardUser from "@components/atoms/Cards/CardUser/CardUser";
import { homeText } from "lang/english/homeCopy";

import { styles } from "./stylesClientOpinions";

export const ClientOpinions = () => {
	return (
		<Stack
			spacing={"4rem"}
		>
			<Typography
				variant="h4"
				sx={styles.title}
			>{homeText.Reviews.title}</Typography>
			<Stack
				sx={styles.containerCards}
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

