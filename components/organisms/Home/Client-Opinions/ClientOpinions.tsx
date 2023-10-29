import { Stack, Typography } from "@mui/material";
import { useInView } from "react-hook-inview"

import CardUser from "@components/atoms/Cards/CardUser/CardUser";
import { homeText } from "lang/english/homeCopy";

import { styles } from "./stylesClientOpinions";
import { HomeSectionProps } from "@components/templates/Home/Home";
import { SlideReviews } from "@components/molecules/SlideReviews/SlideReviews";

export const ClientOpinions = ({ phoneView }: HomeSectionProps) => {
	const [ref, inView] = useInView({ unobserveOnEnter: true })
	const validateAnimation = inView ? 'animate__animated animate__fadeIn animate__slow' : ""
	return (
		<Stack
			spacing={"4rem"}
			ref={ref}
			className={validateAnimation}
		>
			<Typography
				variant="h4"
				sx={styles.title}
			>{homeText.Reviews.title}</Typography>
			<Stack
				sx={styles.containerCards}
			>
				{phoneView &&
					<SlideReviews />
				}
				{!phoneView &&
					homeText.Reviews.users.map((review, index) => (
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

