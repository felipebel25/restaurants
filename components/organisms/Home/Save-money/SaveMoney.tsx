import { Stack, Typography } from "@mui/material";
import { homeText } from "lang/english/homeCopy";
import Image from "next/image";
import { FunctionComponent } from "react";
import Group10 from "public/PNG/Group10.png";
import { HomeSectionProps } from "@components/templates/Home/Home";

const SaveMoney: FunctionComponent<HomeSectionProps> = ({ phoneView }) => {
	return (
		<Stack
			direction={phoneView ? "column-reverse" : "row"}
			alignItems={phoneView ? "center" : "flex-start"}
			spacing={"4rem"}
		>
			<Image
				style={{
					width: phoneView ? 300 : "45%",
					height: "fit-content",
				}}
				src={homeText.SaveMoney.image}
				alt="Group10"
			/>

			<Stack
				alignItems={phoneView ? "center" : "flex-start"}
				spacing={"2.12rem"}
			>
				<Typography variant="h3">{homeText.SaveMoney.title}</Typography>
				<Typography variant="body1">{homeText.SaveMoney.body}</Typography>
			</Stack>
		</Stack>
	);
};

export default SaveMoney;
